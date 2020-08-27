FROM node:13-alpine

# copy build
WORKDIR /devel
COPY package.json .
COPY yarn.lock .
RUN yarn --non-interactive
COPY . .

# build and start
RUN yarn run build
CMD ["yarn", "start"]
