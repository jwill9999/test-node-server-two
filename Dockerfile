# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source files into the image
COPY . .
# Run the application as a non-root user
USER node

# Expose the port that the application listens on
EXPOSE 3001

# Run the application
CMD ["npm", "start"]