FROM node:lts-alpine

# Update everything on the box
RUN apk update

# Set the working directory
WORKDIR /srv

# Copy our package.json & install our dependencies
COPY package.json /srv/package.json
RUN npm install --production

# Copy the remaining application code
COPY . /srv/

# Start the app
CMD npm start
