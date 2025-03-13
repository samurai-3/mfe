# Use a lightweight Node image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the action files
COPY . /app/

# Install dependencies if needed (optional)
# RUN npm install

# Command to run
# CMD ["node", "index.js"]
