# Define baseImage 
FROM node:10

# working directory
WORKDIR /usr/src/app

# Copy package.json
COPY ./ ./

# download add files
RUN npm install

# commands initialize container
CMD ["node", "server.js"]
