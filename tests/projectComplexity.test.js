import test from "node:test";
import assert from "node:assert/strict";
import {
  calculateComplexity,
  isEligibleRepository,
  selectTopRepositories,
} from "../src/services/projectComplexity.js";

const repository = (overrides = {}) => ({
  id: 1,
  name: "projeto",
  full_name: "Joaos32/projeto",
  size: 100,
  fork: false,
  archived: false,
  visibility: "public",
  pushed_at: new Date().toISOString(),
  stargazers_count: 0,
  forks_count: 0,
  topics: [],
  ...overrides,
});

test("ignora repositórios privados, vazios, arquivados e forks", () => {
  assert.equal(isEligibleRepository(repository()), true);
  assert.equal(
    isEligibleRepository(repository({ visibility: "private" })),
    false
  );
  assert.equal(isEligibleRepository(repository({ size: 0 })), false);
  assert.equal(isEligibleRepository(repository({ archived: true })), false);
  assert.equal(isEligibleRepository(repository({ fork: true })), false);
});

test("diversidade de linguagens aumenta a pontuação", () => {
  const oneLanguage = calculateComplexity(repository(), { JavaScript: 1000 });
  const threeLanguages = calculateComplexity(repository(), {
    JavaScript: 600,
    CSS: 200,
    HTML: 200,
  });

  assert.ok(threeLanguages > oneLanguage);
});

test("seleciona apenas os quatro projetos com maior pontuação", () => {
  const repositories = Array.from({ length: 6 }, (_, index) =>
    repository({
      id: index,
      name: `projeto-${index}`,
      full_name: `Joaos32/projeto-${index}`,
      size: (index + 1) * 100,
    })
  );

  const selected = selectTopRepositories(repositories, {}, 4);

  assert.equal(selected.length, 4);
  assert.ok(selected[0].complexity >= selected[3].complexity);
  assert.ok(selected.every((project) => project.complexity > 0));
});
