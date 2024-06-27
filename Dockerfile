FROM registry1.dso.mil/ironbank/opensource/nodejs/nodejs18:18.20 as builder
USER root

WORKDIR /app

COPY . .
COPY node_modules ./node_modules

RUN yarn build

# Production image, copy all the files and run next
FROM registry1.dso.mil/ironbank/opensource/nodejs/nodejs18:18.20 as runner
USER root

WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs

COPY --from=builder --chmod=755 /app/src/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]
