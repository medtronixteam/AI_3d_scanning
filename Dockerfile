# Use Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy all other source files
COPY . .

# Expose port 3000 for React app
EXPOSE 3000

# Run the React app
CMD ["npm", "start"]
