## STAGE 1, base image, work dir and package json to use docker layer cache.
FROM node:dubnium as base
WORKDIR /usr/src/app

COPY . .
RUN npm install --quiet --unsafe-perm --no-progress --production

RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main.js"]
