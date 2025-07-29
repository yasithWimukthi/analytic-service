# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build TypeScript into dist/
RUN npm run build

# Use environment variables from .env (optional: remove if using K8s env)
# COPY .env .  ❌ Skip if you're injecting via Kubernetes env

# Run the compiled JavaScript
CMD ["node", "dist/index.js"]
