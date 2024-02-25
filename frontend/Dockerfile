# Use Node.js base image for building the frontend
FROM node:18-alpine AS build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the frontend
RUN npm run build

# Use NGINX base image for serving the built frontend
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy built files from the build stage
COPY --from=build /usr/src/app/dist .

# Expose port
EXPOSE 80

# Command to run NGINX
CMD ["nginx", "-g", "daemon off;"]
