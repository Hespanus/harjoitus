FROM node:bullseye as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

FROM nginx:1.21.6
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-stage /app/build/ .
ENTRYPOINT ["nginx", "-g", "daemon off;"]