FROM --platform=linux/amd64 node:18.0-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build
COPY ./lib .
EXPOSE 8080
CMD ["yarn","start"]