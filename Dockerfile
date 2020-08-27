FROM node:12-alpine

# install vim
RUN apk add --update
RUN apk add vim

# copy build
WORKDIR /devel
COPY package.json .
COPY yarn.lock .
RUN yarn --non-interactive
COPY . .

# build and start
RUN yarn run build
CMD ["yarn", "start"]
