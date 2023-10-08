FROM node:20-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:mainline-alpine-slim
WORKDIR /usr/share/nginx/html
RUN rm -f ./*
COPY --from=builder /app/build .
ENTRYPOINT["nginx", "-g", "daemon off;"]