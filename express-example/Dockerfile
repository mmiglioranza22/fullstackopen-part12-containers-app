# Use explicit and deterministic Docker base image tags

# Install only production dependencies in the Node.js Docker image

# Optimize Node.js tooling for production

# Don’t run containers as root

# Safely terminate Node.js Docker web applications

# Graceful shutdown for your Node.js web applications

# Find and fix security vulnerabilities in your Node.js docker image

# Use multi-stage builds

# Keeping unnecessary files out of your Node.js Docker images

# Mounting secrets into the Docker build image

FROM node:20
  
WORKDIR /usr/src/app
# copy as non root user (more secure)
COPY --chown=node:node . .
# clean install, respect package.lock, delete modules each time
RUN npm ci --only=production 

ENV DEBUG=playground:*
# Needed for some frameworks (express) to enable specific prod related behaviour
# ENV NODE_ENV production

 
USER node

CMD npm start

# docker run -p 3123:3000 express-server
# The -p flag in the run command will inform Docker that a port from the host machine should be 
# opened and directed to a port in the container. The format is -p host-port:application-port.
