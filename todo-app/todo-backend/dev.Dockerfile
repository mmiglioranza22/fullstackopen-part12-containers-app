FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

USER node
 
CMD echo "containerized server start..." && echo "REDIS_URL=${REDIS_URL}" && echo "MONGO_URL=${MONGO_URL}" && npm run dev:container