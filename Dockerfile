FROM node:18.16-alpine AS base

WORKDIR /app

RUN npm install -g npm@9.8.1

FROM base AS build

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM base AS app

RUN npm install -g npm@9.8.1

COPY --from=build /app/package*.json ./

RUN npm install --omit=dev

COPY --from=build /app/.next ./.next
COPY --from=builder /app/next.config.js ./

ENTRYPOINT [ "npm", "run", "start" ]
