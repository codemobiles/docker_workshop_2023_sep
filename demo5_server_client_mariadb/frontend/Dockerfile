# stage1: build react project
# stage2: deploy build folder (dist) into nginx

FROM node:lts-alpine AS builder
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"
COPY . ./
RUN npm run build

FROM nginx:1.19.10-alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

