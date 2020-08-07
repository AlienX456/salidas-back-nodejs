FROM node:14.4-alpine3.12

WORKDIR /salidas

COPY index.js queries.js package.json package-lock.json ./

RUN npm install

CMD [ "node", "index.js" ]