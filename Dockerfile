FROM node:20

WORKDIR /usr/src/app

COPY ./index.js ./index.js

CMD node index.js


# $ docker build -t fs-hello-world . 
# $ docker run fs-hello-world
