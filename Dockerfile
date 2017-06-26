FROM node:7.9.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Build and optimize react app and server
RUN npm run build

EXPOSE 9000

# Rund command defined in package.json
CMD [ "npm", "run", "start:prod" ]
