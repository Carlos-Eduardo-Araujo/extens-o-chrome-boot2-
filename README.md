# Entrega II — Containerização + CI (Playwright)

Este repositório contém um *scaffold* pronto para executar testes E2E da extensão Chrome (MV3)
dentro de um container Playwright e via GitHub Actions.

## O que foi gerado
- Dockerfile (base Playwright)
- docker-compose.yml
- scripts/build-extension.mjs
- tests/ (Playwright config + spec de exemplo)
- .github/workflows/ci.yml
- package.json com scripts úteis
- manifest.json de exemplo (substitua pelo seu)

## Como usar (local)
1. Instale dependências: `npm ci`
2. Build e testes local: `npm test`
3. Usando Docker Compose:
   - `docker compose build`
   - `docker compose run --rm e2e`

## CI (GitHub Actions)
- O workflow `.github/workflows/ci.yml` executa `npm ci`, instala Playwright, gera `dist/extension.zip` e faz upload do relatório HTML (`playwright-report`) e do `extension-zip` como artefatos.

## Observações
- Substitua `manifest.json` e a pasta `src/` com os arquivos reais da sua extensão (entrega inicial).
- Se a sua extensão expõe página de opções ou popup com conteúdo estático, adicione testes que abram `chrome-extension://<id>/popup.html` ou use efeitos do content script para validar comportamento.
- Commit e publique no repositório informado pelo professor.
