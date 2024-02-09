FROM node:20.11-alpine AS base

WORKDIR /app

RUN npm install -g npm@10.4.0

FROM base AS build

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM base AS app

COPY --from=build /app/package*.json ./

RUN npm install --omit=dev

COPY --from=build /app/.next ./.next
COPY --from=build /app/next.config.js ./
COPY --from=build /app/_next ./_next

ENTRYPOINT [ "npm", "run", "start" ]
