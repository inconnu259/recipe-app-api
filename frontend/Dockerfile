FROM node:13.6-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencie3s
RUN npm install

# copy project files and folders to the current working (i.e 'app' folder)
COPY . .

# expose port 8080 to the host
EXPOSE 8080