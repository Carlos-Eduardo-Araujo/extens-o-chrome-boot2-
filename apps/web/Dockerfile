
FROM node:20-alpine AS build

WORKDIR /app
COPY . .

RUN npm ci || npm install
RUN npm run build || echo "⚠ Nenhum build (Vite) encontrado — servindo versão estática"


FROM nginx:alpine

COPY --from=build /app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
