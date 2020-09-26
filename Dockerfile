FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --aot --output-hashing=all

FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/

#kubernetes to stop the docker container - during rolling updates
STOPSIGNAL SIGHUP
