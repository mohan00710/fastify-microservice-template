# Multi-stage build for production optimization
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache dumb-init

FROM base AS dependencies
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

FROM base AS build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --production

FROM base AS runtime
ENV NODE_ENV=production
ENV PORT=3000
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
EXPOSE 3000
USER node
ENTRYPOINT ["dumb-init","--"]
CMD ["node", "dist/server.js"]
