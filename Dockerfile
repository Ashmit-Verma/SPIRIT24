# Stage 1: Build React App
FROM node:14 as react-build
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend ./
RUN npm run build

# Stage 2: Final image for Frontend
FROM nginx:alpine
COPY --from=react-build /app/frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Stage 3: Build Node.js Backend
FROM node:14 as backend-build
WORKDIR /app/backend
COPY backend/package.json backend/package-lock.json ./
RUN npm install
COPY backend ./

# Copy the .env file
COPY backend/.env ./

# Stage 4: Final image for Backend
FROM node:14
WORKDIR /app
COPY --from=backend-build /app/backend ./

# Expose the backend port
EXPOSE 3001

# Start the backend server
CMD ["node", "server.js"]
