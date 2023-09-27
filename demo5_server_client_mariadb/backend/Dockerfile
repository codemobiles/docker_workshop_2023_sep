FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*",  "./"]
RUN npm install
COPY . .
EXPOSE 8080
RUN chown -R node /usr/src/app
USER node
RUN chmod +x ./start.sh
CMD ["./start.sh"]
