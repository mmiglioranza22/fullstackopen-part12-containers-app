FROM node:20

WORKDIR /usr/src/app

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

# npm run dev is the command to start the application in development mode
CMD ["npm", "run", "dev", "--", "--host"]

# if building image with volume -v flag results in "rollup error", run npm install inside the container :: docker run -it -v "$(pwd):/usr/src/app/" some-container-name bash (&& npm i)