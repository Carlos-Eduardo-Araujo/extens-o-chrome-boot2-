FROM mcr.microsoft.com/playwright:v1.46.0-jammy

WORKDIR /app
COPY package*.json ./
RUN npm ci --silent

# Ensure Chromium is available (image usually already provides browsers)
RUN npx playwright install --with-deps chromium

COPY . .
# Build da extensão para dist/
RUN node scripts/build-extension.mjs

CMD ["npm","test"]
