FROM node:latest

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN yarn global add @angular/cli

RUN ng set --global packageManager=yarn

ENV CONTAINER_PATH /home/app

WORKDIR $CONTAINER_PATH

VOLUME $CONTAINER_PATH

EXPOSE 4200

ENTRYPOINT ["ng", "serve", "--host=0.0.0.0"]