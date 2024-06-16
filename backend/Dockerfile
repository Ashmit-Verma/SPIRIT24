# Use an official Node runtime as a parent image
FROM node:18

# Install Docker and Docker Compose
RUN apt-get update && apt-get install -y \
    docker.io \
    curl \
    && curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose \
    && chmod +x /usr/local/bin/docker-compose


# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Command to run the app
CMD ["node", "index.js"]
