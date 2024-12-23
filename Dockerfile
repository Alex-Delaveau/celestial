# Use an official nginx image as the base
FROM nginx:alpine

# Copy build output to nginx's default directory
COPY build/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
