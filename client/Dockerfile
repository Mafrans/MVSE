FROM node:18

WORKDIR /opt/app
COPY package.json yarn.lock /opt/app/

RUN yarn install --progress=false --frozen-lockfile && \
    yarn cache clean

CMD ["yarn", "dev"]