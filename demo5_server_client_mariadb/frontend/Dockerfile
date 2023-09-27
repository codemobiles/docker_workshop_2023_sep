# stage1: build react project
# stage2: deploy build folder (dist) into nginx

# build stage
FROM node:lts-alpine as builder 
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
RUN npm run build

# deploy stage
FROM nginx:1.19.10-alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
