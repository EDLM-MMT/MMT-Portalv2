FROM registry1.dso.mil/ironbank/opensource/nodejs/nodejs18:18.20 AS builder
USER root

WORKDIR /app

COPY . .
COPY node_modules ./node_modules

RUN yarn build
USER node

# Production image, copy all the files and run next
FROM registry1.dso.mil/ironbank/opensource/nodejs/nodejs18:18.20 AS runner
USER root

WORKDIR /app

ENV NODE_ENV=production

# RUN addgroup -g 1001 -S nodejs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
RUN mkdir /app/.next/cache/images
RUN chmod 777 /app/.next/cache/images
RUN chown -R node:node /app/.next/cache/images


USER node

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED=1

CMD ["yarn", "start"]
