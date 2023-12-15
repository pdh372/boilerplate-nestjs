# DEV------------------------------------------------------------------------
FROM node:20.9.0-alpine as development

# Set the working directory in the container
WORKDIR /server

# Copy package.json and package-lock.json
COPY yarn.lock ./
COPY package.json ./

# Install any needed packages
RUN yarn

# Bundle app source inside the Docker image
COPY . .

EXPOSE 3000

# Define the command to run your app
CMD [ "npm", "run", "start:dev" ]

# PROD------------------------------------------------------------------------
FROM node:20.9.0-alpine as production

# Set the working directory in the container
WORKDIR /server

# Copy package.json and package-lock.json
COPY yarn.lock ./
COPY package.json ./

# Install any needed packages
RUN yarn

# Bundle app source inside the Docker image
COPY . .

# Your app binds to port 6789 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run your app
CMD [ "npm", "run", "start:dev" ]