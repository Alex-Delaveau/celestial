# Step 1: Use Node.js for building the app
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --dev @types/react

# Copy the entire app source code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Use Nginx to serve the built app
FROM nginx:alpine

# Copy built assets from `dist/` directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]