# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source files and build TypeScript
COPY . .
RUN npm run build

# Stage 2: Run the app
FROM node:18-alpine
WORKDIR /app

# Copy only built files and dependencies
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm ci --omit=dev

# Copy .env if needed locally (Render uses its own env system)
# COPY .env .env

ENV PORT=5000
EXPOSE 5000

CMD ["node", "dist/index.js"]
