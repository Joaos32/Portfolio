import {
  getPreliminaryCandidates,
  selectTopRepositories,
} from "../src/services/projectComplexity.js";

async function githubRequest(url) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-project-selector",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`GitHub API status ${response.status}`);
  }

  return response.json();
}

export default async function handler(request, response) {
  const username = process.env.GITHUB_USERNAME || "Joaos32";

  try {
    const repositories = await githubRequest(
      `https://api.github.com/users/${username}/repos?per_page=100&type=owner&sort=updated`
    );
    const candidates = getPreliminaryCandidates(repositories);
    const languageEntries = await Promise.all(
      candidates.map(async (repository) => [
        repository.full_name,
        await githubRequest(repository.languages_url),
      ])
    );
    const projects = selectTopRepositories(
      candidates,
      Object.fromEntries(languageEntries)
    ).map((repository) => ({
      id: repository.id,
      name: repository.name,
      full_name: repository.full_name,
      description: repository.description,
      html_url: repository.html_url,
      homepage: /^https?:\/\//i.test(repository.homepage || "")
        ? repository.homepage
        : null,
      pushed_at: repository.pushed_at,
      stargazers_count: repository.stargazers_count,
      forks_count: repository.forks_count,
      languages: repository.languages,
      complexity: repository.complexity,
    }));

    response.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );
    return response.status(200).json(projects);
  } catch (error) {
    console.error("Falha ao consultar projetos do GitHub:", error);
    return response
      .status(502)
      .json({ error: "Não foi possível consultar os projetos agora." });
  }
}
