# Define baseImage 
FROM node:10

# Copy package.json
COPY ./ ./

# download add files
RUN npm install

# commands initialize container
CMD ["node", "server.js"]
