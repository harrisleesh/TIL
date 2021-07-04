# Define baseImage 
FROM node:10

# working directory
WORKDIR /usr/src/app

# Copy package.json
COPY ./package.json ./

# download add files
RUN npm install

# Copy package.json
COPY ./ ./

# commands initialize container
CMD ["node", "server.js"]
