FROM node:14 as build-step

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /usr/src/app/dist/AscentEmployeeSearch /usr/share/nginx/html
