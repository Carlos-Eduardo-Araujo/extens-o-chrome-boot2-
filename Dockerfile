# Usa imagem do Playwright (Chromium incluído)
FROM mcr.microsoft.com/playwright:v1.46.0-jammy

WORKDIR /app
COPY package*.json ./
RUN npm ci --silent

<<<<<<< HEAD
RUN npx playwright install --with-deps chromium

COPY . .

=======
# Garante instalação do Chromium
RUN npx playwright install --with-deps chromium

COPY . .
# Build da extensão
>>>>>>> e9352a6 (update arquivos)
RUN node scripts/build-extension.mjs

CMD ["npm","test"]
