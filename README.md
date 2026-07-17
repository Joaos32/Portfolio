# Portfólio de João Vitor

Aplicação web responsiva para apresentar a trajetória, as competências e os projetos públicos de João Vitor Silva Santos. O portfólio centraliza informações profissionais, demonstrações, repositórios e canais de contato em uma experiência acessível nos temas claro e escuro.

---

## Demonstração

A versão publicada está disponível em:

[portfolio-joao-vitors-projects-bbed36cf.vercel.app](https://portfolio-joao-vitors-projects-bbed36cf.vercel.app)

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura](#arquitetura)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [API](#api)
- [Banco de Dados](#banco-de-dados)
- [Segurança](#segurança)
- [Testes](#testes)
- [Deploy](#deploy)
- [Roadmap](#roadmap)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Autor](#autor)
- [Sugestões para melhorar este projeto](#sugestões-para-melhorar-este-projeto)

---

## Sobre o Projeto

Este projeto é o portfólio profissional de João Vitor Silva Santos, desenvolvedor Full Stack. Ele organiza, em uma única aplicação, a apresentação profissional, as competências técnicas e comportamentais, uma seleção curada de projetos públicos e os meios de contato.

O portfólio resolve a necessidade de apresentar experiência e projetos de forma objetiva para recrutadores, equipes de tecnologia, clientes e potenciais colaboradores. Em vez de depender apenas da listagem de repositórios do GitHub, a página de projetos fornece contexto sobre o problema, a responsabilidade, o resultado e as tecnologias de cada trabalho selecionado.

Os principais benefícios são:

- comunicação profissional centralizada;
- acesso direto a projetos públicos e demonstrações;
- descrição contextualizada das responsabilidades de cada projeto;
- experiência responsiva em desktop, tablet e celular;
- contato direto por formulário, e-mail, LinkedIn e GitHub;
- suporte aos temas claro e escuro e à preferência por movimento reduzido.

O conteúdo atual destaca quatro projetos públicos:

1. Site Nitrolux;
2. EstoqueTI;
3. ChefCasa;
4. Portfólio Profissional.

## Funcionalidades

### Apresentação profissional

- Hero com posicionamento profissional, especialidades e chamadas para ação.
- Página Sobre com resumo baseado em experiência, formação, localização e stack principal.
- Exibição de soft skills e hard skills.
- Links para trajetória, projetos e contato.

### Projetos

- Seleção curada de quatro projetos públicos.
- Cards com categoria, descrição, resultado, responsabilidade e tecnologias.
- Capas locais otimizadas para cada projeto.
- Links condicionais para demonstrações e repositórios públicos.
- Animação de elevação no hover, desativada quando o usuário prefere movimento reduzido.

### Contato

- Formulário com nome, e-mail e mensagem.
- Envio pelo EmailJS diretamente no navegador.
- Estado de carregamento durante o envio.
- Alertas de sucesso, falha e ausência de configuração.
- Links diretos para e-mail, LinkedIn e GitHub.

### Interface e acessibilidade

- Navegação desktop e menu móvel.
- Identificação da rota ativa com `aria-current`.
- Temas claro e escuro gerenciados por contexto React.
- Layout responsivo com breakpoints do Material UI.
- Indicadores de foco visíveis.
- Alvos mínimos de interação configurados para botões e ícones.
- Suporte global a `prefers-reduced-motion`.
- Textos alternativos nas imagens dos projetos e no retrato profissional.

### Integração auxiliar com GitHub

O repositório mantém uma integração auxiliar capaz de consultar projetos públicos, buscar as linguagens de cada repositório, calcular uma pontuação e selecionar quatro candidatos. Essa integração possui uma função serverless, fallback direto para a API do GitHub e cache local. A página de projetos atual, entretanto, utiliza a seleção curada definida em `src/pages/Projects.jsx` e não consome esse serviço.

## Tecnologias Utilizadas

### Backend

- Função serverless JavaScript em `api/github-projects.js`.
- API REST pública do GitHub como fonte da integração auxiliar.
- EmailJS como serviço externo para envio do formulário de contato.

Não existe um backend persistente próprio para a aplicação principal.

### Frontend

- React 18.
- React DOM.
- React Router DOM.
- Material UI.
- Emotion.
- Framer Motion.
- JavaScript com módulos ES.
- CSS global para normalização e preferências de movimento.

### Banco de Dados

O portfólio não utiliza banco de dados, ORM ou migrations.

### Infraestrutura

- Vite para servidor de desenvolvimento e build.
- Vercel para hospedagem e função serverless.
- Rewrites em `vercel.json` para suportar as rotas da SPA.
- Configuração de hosts de desenvolvimento para túneis temporários `loca.lt` e `trycloudflare.com`.

### Cloud

- Vercel para publicação da aplicação.
- EmailJS para entrega das mensagens do formulário.
- GitHub REST API para a integração auxiliar de repositórios.

### DevOps

- Não há workflow de CI/CD versionado em `.github/workflows`.
- Não há Dockerfile, Docker Compose, Kubernetes ou Infrastructure as Code.
- O deploy pode ser realizado pela integração da Vercel com o repositório GitHub.

### Ferramentas

- ESLint para análise estática.
- Prettier para formatação.
- Node.js Test Runner para testes unitários.
- npm para gerenciamento de dependências e scripts.

## Arquitetura

A aplicação segue uma arquitetura frontend baseada em componentes, organizada por responsabilidade. Não há evidência de MVC, Clean Architecture, arquitetura hexagonal ou microsserviços na aplicação principal.

### Organização das camadas

- `pages`: componentes associados às rotas e ao conteúdo de cada página.
- `components`: componentes visuais reutilizáveis, como navegação, rodapé e cards.
- `context`: estado compartilhado do tema claro e escuro.
- `services`: regras da integração auxiliar com o GitHub e cálculo de complexidade.
- `api`: função serverless compatível com a Vercel.
- `assets`: retratos e capas locais dos projetos.
- `tests`: testes unitários do algoritmo de seleção de repositórios.

### Fluxo da aplicação

1. `src/main.jsx` monta a aplicação React em `#root` com `React.StrictMode`.
2. `src/App.jsx` fornece o contexto de tema, inicia o `BrowserRouter` e compõe Navbar, conteúdo e Footer.
3. Home, About, Projects e Contact são carregadas sob demanda com `React.lazy` e `Suspense`.
4. O React Router seleciona a página correspondente à URL.
5. O Material UI aplica o tema criado em `src/theme.jsx`.
6. A página Projects lê a curadoria local e renderiza cada item com `ProjectCard`.
7. A página Contact envia o formulário ao EmailJS usando as variáveis `VITE_EMAILJS_*`.

### Fluxo auxiliar do GitHub

1. `api/github-projects.js` consulta os repositórios públicos do usuário configurado.
2. Repositórios privados, vazios, arquivados e forks são descartados.
3. As linguagens dos candidatos são consultadas na API do GitHub.
4. `projectComplexity.js` calcula a pontuação considerando volume, diversidade de linguagens, atividade, documentação e métricas da comunidade.
5. A resposta serverless recebe cache HTTP de uma hora e `stale-while-revalidate` de um dia.
6. `githubProjects.js` também oferece fallback direto no navegador e cache de uma hora no `localStorage`.

Esse fluxo existe no código, mas não é chamado pela página Projects atual.

### Performance

- Code splitting por rota com `React.lazy`.
- Chunks separados para Material UI, animações e React Router.
- Imagens de projeto locais em JPEG otimizado.
- `loading="lazy"` nas capas dos projetos.
- Animações reduzidas conforme a preferência do sistema operacional.
- Build de produção minificado pelo Vite.

## Estrutura do Projeto

```text
Portfolio/
|-- api/
|   `-- github-projects.js
|-- public/
|-- src/
|   |-- assets/
|   |   |-- projects/
|   |   `-- joao-vitor-portfolio-web.jpg
|   |-- components/
|   |   |-- Footer.jsx
|   |   |-- Loader.jsx
|   |   |-- Navbar.jsx
|   |   `-- ProjectCard.jsx
|   |-- context/
|   |   |-- ThemeContext.jsx
|   |   `-- themeMode.js
|   |-- pages/
|   |   |-- About.jsx
|   |   |-- Contact.jsx
|   |   |-- Home.jsx
|   |   `-- Projects.jsx
|   |-- services/
|   |   |-- githubProjects.js
|   |   `-- projectComplexity.js
|   |-- App.jsx
|   |-- index.css
|   |-- main.jsx
|   `-- theme.jsx
|-- tests/
|   `-- projectComplexity.test.js
|-- .env.example
|-- eslint.config.js
|-- index.html
|-- package.json
|-- vercel.json
`-- vite.config.js
```

## Como executar

### Requisitos

- Node.js 18 ou superior.
- npm.
- Credenciais do EmailJS para testar o envio do formulário.

O projeto foi validado localmente com Node.js 24 e npm 11. O requisito mínimo recomendado de Node.js 18 é compatível com Vite 6 e com as APIs JavaScript utilizadas pelo projeto.

### Instalação

Clone o repositório e acesse a pasta:

```bash
git clone https://github.com/Joaos32/Portfolio.git
cd Portfolio
```

Instale as dependências bloqueadas pelo `package-lock.json`:

```bash
npm ci
```

Para desenvolvimento sem instalação reproduzível pelo lockfile, também é possível utilizar:

```bash
npm install
```

### Variáveis de ambiente

Copie o arquivo de exemplo:

```bash
cp .env.example .env.local
```

No Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Preencha as variáveis necessárias conforme a tabela da seção [Variáveis de Ambiente](#variáveis-de-ambiente).

### Banco

Nenhuma preparação de banco de dados é necessária.

### Docker

O repositório não possui configuração Docker. A execução local é feita diretamente com Node.js e Vite.

### Execução

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite informará a URL local no terminal. A porta padrão é `5173`, mas outra porta pode ser selecionada quando ela estiver ocupada.

### Build

Gere a versão de produção:

```bash
npm run build
```

O resultado será gravado em `dist/`.

### Testes e qualidade

```bash
npm run lint
npm test
npm run format
```

## Variáveis de Ambiente

| Variável                   | Contexto          | Obrigatória     | Descrição                                                                                  |
| -------------------------- | ----------------- | --------------- | ------------------------------------------------------------------------------------------ |
| `VITE_EMAILJS_SERVICE_ID`  | Navegador         | Sim, para envio | Identificador do serviço configurado no EmailJS.                                           |
| `VITE_EMAILJS_TEMPLATE_ID` | Navegador         | Sim, para envio | Identificador do template utilizado pelo formulário.                                       |
| `VITE_EMAILJS_PUBLIC_KEY`  | Navegador         | Sim, para envio | Chave pública do EmailJS utilizada pelo SDK no cliente.                                    |
| `VITE_GITHUB_USERNAME`     | Navegador         | Não             | Usuário consultado pelo fallback da integração auxiliar. O padrão é `Joaos32`.             |
| `GITHUB_USERNAME`          | Vercel/serverless | Não             | Usuário consultado pela função serverless. O padrão é `Joaos32`.                           |
| `GITHUB_TOKEN`             | Vercel/serverless | Não             | Token opcional para ampliar o limite da API do GitHub. Não deve receber o prefixo `VITE_`. |

Variáveis iniciadas por `VITE_` são incorporadas ao bundle e ficam acessíveis no navegador. Não armazene segredos nelas. O `GITHUB_TOKEN` deve existir apenas no ambiente serverless.

## API

O projeto contém uma função serverless auxiliar:

### `GET /api/github-projects`

Consulta projetos públicos do usuário GitHub configurado, calcula a complexidade e retorna até quatro repositórios elegíveis.

Exemplo da estrutura de resposta:

```json
[
  {
    "id": 123,
    "name": "nome-do-repositorio",
    "full_name": "usuario/nome-do-repositorio",
    "description": "Descrição pública do repositório",
    "html_url": "https://github.com/usuario/repositorio",
    "homepage": "https://exemplo.com",
    "pushed_at": "2026-01-01T00:00:00Z",
    "stargazers_count": 0,
    "forks_count": 0,
    "languages": {
      "JavaScript": 1000
    },
    "complexity": 70
  }
]
```

O exemplo representa somente o formato implementado; os valores reais dependem da resposta pública do GitHub.

### Regras da seleção

- ignora forks;
- ignora repositórios arquivados;
- ignora repositórios privados;
- ignora repositórios vazios;
- considera volume de código;
- considera diversidade de linguagens;
- considera atividade recente;
- considera descrição, homepage e tópicos;
- considera estrelas e forks.

### Cache e erros

- resposta de sucesso: status `200`;
- falha na consulta ao GitHub: status `502` com mensagem genérica;
- cache serverless: `s-maxage=3600`;
- revalidação em segundo plano: `stale-while-revalidate=86400`;
- cache do serviço cliente: uma hora no `localStorage`.

A função não implementa validação explícita do método HTTP. `GET` é o uso previsto pelo cliente.

## Banco de Dados

O portfólio não possui banco de dados, ORM, schema ou migrations. Os projetos exibidos são definidos em código e o estado do formulário permanece apenas na memória do navegador até o envio ao EmailJS.

O `localStorage` é utilizado somente pelo serviço auxiliar do GitHub para armazenar temporariamente a resposta de projetos.

## Segurança

O projeto não possui autenticação ou autorização de usuários. Também não implementa JWT, OAuth ou criptografia própria.

Controles presentes no código:

- `GITHUB_TOKEN` restrito ao ambiente serverless e sem prefixo `VITE_`;
- links externos com `rel="noreferrer"` quando abertos em nova aba;
- campos obrigatórios e tipo `email` no formulário;
- mensagens de erro que não expõem detalhes internos da API GitHub;
- filtro de repositórios privados na integração auxiliar;
- dependências de produção sem vulnerabilidades conhecidas no `npm audit --omit=dev` executado durante esta revisão.

Limitações atuais:

- o formulário depende dos controles de domínio e abuso configurados no painel do EmailJS;
- não há CAPTCHA, rate limiting próprio ou validação server-side do formulário;
- não há Content Security Policy configurada no repositório;
- não há análise de segurança automatizada no GitHub Actions;
- os hosts de túnel autorizados em `vite.config.js` destinam-se apenas ao desenvolvimento.

## Testes

Os testes utilizam o módulo nativo `node:test` e cobrem o algoritmo auxiliar de seleção de repositórios.

Cenários cobertos:

- exclusão de repositórios privados, vazios, arquivados e forks;
- aumento da pontuação com maior diversidade de linguagens;
- limitação da seleção aos quatro projetos com maior pontuação.

Execute os testes com:

```bash
npm test
```

Na revisão atual, os três testes existentes foram aprovados.

Não existem testes automatizados para componentes React, rotas, responsividade, acessibilidade, formulário EmailJS ou função serverless.

## Deploy

### Vercel

1. Importe o repositório na Vercel.
2. Selecione o framework Vite quando a detecção automática não o fizer.
3. Use `npm run build` como comando de build.
4. Use `dist` como diretório de saída.
5. Cadastre as variáveis `VITE_EMAILJS_*` no ambiente desejado.
6. Cadastre `GITHUB_USERNAME` e, opcionalmente, `GITHUB_TOKEN` para a função serverless.
7. Publique o projeto.

O arquivo `vercel.json` reescreve `/about`, `/projects` e `/contact` para `index.html`, permitindo abrir e atualizar as rotas do React Router diretamente.

Versão pública atual:

[portfolio-joao-vitors-projects-bbed36cf.vercel.app](https://portfolio-joao-vitors-projects-bbed36cf.vercel.app)

## Roadmap

- Adicionar uma página 404 para rotas desconhecidas.
- Persistir a preferência de tema no `localStorage` ou respeitar o tema inicial do sistema.
- Adicionar testes de componentes e fluxos críticos do formulário.
- Testar a função serverless com respostas simuladas da API GitHub.
- Adicionar Error Boundary e estados de falha por rota.
- Decidir entre remover a integração GitHub auxiliar ou reconectá-la à interface de forma explícita.
- Adicionar proteção antiabuso ao formulário de contato.
- Melhorar os metadados de SEO e adicionar imagem Open Graph própria.
- Adicionar monitoramento de erros e métricas de uso respeitando privacidade.
- Automatizar lint, testes e build com GitHub Actions.

## Contribuição

Contribuições devem manter o foco do portfólio e não expor dados pessoais, credenciais ou projetos privados.

Fluxo recomendado:

1. Crie um fork do repositório.
2. Crie uma branch descritiva:

   ```bash
   git checkout -b feat/nome-da-melhoria
   ```

3. Instale as dependências com `npm ci`.
4. Implemente a alteração.
5. Execute:

   ```bash
   npm run lint
   npm test
   npm run build
   ```

6. Faça commits claros e objetivos.
7. Abra um Pull Request explicando motivação, alterações e evidências visuais quando houver impacto na interface.

Antes de contribuir, considere que o repositório ainda não possui uma licença open source formal.

## Licença

O repositório não contém um arquivo `LICENSE`. Portanto, não há permissão open source explícita para copiar, modificar ou redistribuir o código.

Para permitir contribuições e reutilização sob termos claros, adicione uma licença compatível com o objetivo do projeto, como MIT, Apache-2.0 ou outra definida pelo autor.

## Autor

### João Vitor Silva Santos

Desenvolvedor Full Stack com atuação em aplicações web, APIs REST, integrações entre sistemas e software corporativo.

- Localização: Recife, Pernambuco, Brasil.
- E-mail: [joaovitorsilvasantos3255@gmail.com](mailto:joaovitorsilvasantos3255@gmail.com)
- LinkedIn: [linkedin.com/in/joao-vitor-silva-santos](https://www.linkedin.com/in/joao-vitor-silva-santos/)
- GitHub: [github.com/Joaos32](https://github.com/Joaos32)

## Sugestões para melhorar este projeto

### Qualidade e testes

- Adicionar Vitest e React Testing Library para componentes e páginas.
- Adicionar testes end-to-end com Playwright ou Cypress.
- Medir cobertura e estabelecer metas progressivas.
- Testar os modos claro e escuro, os breakpoints e `prefers-reduced-motion`.
- Criar testes para sucesso, erro e ausência de configuração do EmailJS.

### Integração e entrega contínua

- Criar GitHub Actions para lint, testes e build em pushes e Pull Requests.
- Adicionar Dependabot ou Renovate para atualização controlada de dependências.
- Adicionar CodeQL ou outra análise estática de segurança.
- Definir política de branches e template de Pull Request.
- Adotar Conventional Commits e gerar um `CHANGELOG.md`.
- Publicar releases e tags para versões estáveis.

### Organização do código

- Remover ou reintegrar `githubProjects.js`, `projectComplexity.js` e a função serverless, pois a página atual usa curadoria estática.
- Remover `App.css`, `Projects.module.css`, o componente Loader e assets não referenciados.
- Remover dependências sem uso, incluindo `react-icons` e `react-type-animation`, após confirmação pelo analisador de imports.
- Consolidar as configurações do ESLint e remover arquivos legados incompatíveis com o Flat Config atual.
- Mover os dados dos projetos para um módulo dedicado ou arquivo JSON validado.
- Considerar TypeScript para tipar projetos, contexto, propriedades e respostas da API.

### Experiência e acessibilidade

- Adicionar página 404 e link para pular diretamente ao conteúdo principal.
- Persistir o tema e respeitar `prefers-color-scheme` na primeira visita.
- Executar auditorias Lighthouse e axe em CI.
- Validar contraste dos dois temas e navegação completa por teclado.
- Adicionar feedback visual quando uma imagem de projeto não puder ser carregada.

### Segurança e operação

- Restringir os domínios autorizados no painel do EmailJS.
- Adicionar CAPTCHA ou mecanismo equivalente contra spam.
- Configurar Content Security Policy e demais cabeçalhos de segurança na hospedagem.
- Adicionar monitoramento de erros para falhas no formulário e na função serverless.
- Remover hosts temporários de túnel da configuração padrão ou condicioná-los ao ambiente de desenvolvimento.

### Documentação e apresentação

- Adicionar screenshot da Home em desktop e celular na seção Demonstração.
- Adicionar GIF curto mostrando navegação, troca de tema e formulário.
- Criar uma imagem Open Graph própria para compartilhamento em redes sociais.
- Adicionar badges somente após existirem dados verificáveis, como status do CI, cobertura, versão e licença.
- Documentar decisões arquiteturais relevantes em registros ADR.
- Adicionar `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md` e templates de issue.
