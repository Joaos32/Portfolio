import {
  getPreliminaryCandidates,
  selectTopRepositories,
} from "./projectComplexity";

const CACHE_DURATION = 60 * 60 * 1000;
const CACHE_KEY = "github-featured-projects-v1";
const username = import.meta.env.VITE_GITHUB_USERNAME || "Joaos32";

async function requestJson(url) {
  const response = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!response.ok) {
    throw new Error(`GitHub respondeu com status ${response.status}`);
  }

  return response.json();
}

function readCache() {
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
    if (cached && Date.now() - cached.createdAt < CACHE_DURATION) {
      return cached.projects;
    }
  } catch {
    // O armazenamento pode estar indisponível em modo privado.
  }

  return null;
}

function writeCache(projects) {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ createdAt: Date.now(), projects })
    );
  } catch {
    // A ausência de cache não deve impedir a exibição dos projetos.
  }
}

async function fetchDirectlyFromGitHub() {
  const repositories = await requestJson(
    `https://api.github.com/users/${username}/repos?per_page=100&type=owner&sort=updated`
  );
  const candidates = getPreliminaryCandidates(repositories, 8);
  const languageEntries = await Promise.all(
    candidates.map(async (repository) => [
      repository.full_name,
      await requestJson(repository.languages_url),
    ])
  );

  return selectTopRepositories(candidates, Object.fromEntries(languageEntries));
}

export async function getFeaturedProjects({ forceRefresh = false } = {}) {
  if (!forceRefresh) {
    const cached = readCache();
    if (cached) return cached;
  }

  let projects;

  try {
    projects = await requestJson("/api/github-projects");
  } catch {
    projects = await fetchDirectlyFromGitHub();
  }

  writeCache(projects);
  return projects;
}
