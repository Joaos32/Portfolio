const DAY_IN_MS = 24 * 60 * 60 * 1000;

const sumLanguageBytes = (languages = {}) =>
  Object.values(languages).reduce((total, bytes) => total + bytes, 0);

export function isEligibleRepository(repository) {
  return (
    !repository.fork &&
    !repository.archived &&
    repository.visibility !== "private" &&
    repository.size > 0
  );
}

export function calculateComplexity(repository, languages = {}) {
  const languageNames = Object.keys(languages);
  const codeBytes = sumLanguageBytes(languages) || repository.size * 1024;
  const updatedAt = new Date(repository.pushed_at || repository.updated_at);
  const ageInDays = Math.max(0, (Date.now() - updatedAt.getTime()) / DAY_IN_MS);

  const codeScore = Math.min(45, Math.log10(codeBytes + 10) * 8);
  const diversityScore = Math.min(20, Math.max(1, languageNames.length) * 5);
  const activityScore = Math.max(0, 15 - ageInDays / 60);
  const communityScore = Math.min(
    10,
    (repository.stargazers_count || 0) * 3 + (repository.forks_count || 0) * 4
  );
  const documentationScore =
    (repository.description ? 3 : 0) +
    (repository.homepage ? 2 : 0) +
    Math.min(5, repository.topics?.length || 0);

  return Math.round(
    Math.min(
      100,
      codeScore +
        diversityScore +
        activityScore +
        communityScore +
        documentationScore
    )
  );
}

export function getPreliminaryCandidates(repositories, limit = 100) {
  return repositories
    .filter(isEligibleRepository)
    .sort((first, second) => {
      const sizeDifference = second.size - first.size;
      if (sizeDifference !== 0) return sizeDifference;
      return new Date(second.pushed_at) - new Date(first.pushed_at);
    })
    .slice(0, limit);
}

export function selectTopRepositories(
  repositories,
  languagesByRepository = {},
  limit = 4
) {
  return repositories
    .filter(isEligibleRepository)
    .map((repository) => {
      const languages = languagesByRepository[repository.full_name] || {};
      return {
        ...repository,
        languages,
        complexity: calculateComplexity(repository, languages),
      };
    })
    .sort((first, second) => {
      const scoreDifference = second.complexity - first.complexity;
      if (scoreDifference !== 0) return scoreDifference;
      return new Date(second.pushed_at) - new Date(first.pushed_at);
    })
    .slice(0, limit);
}
