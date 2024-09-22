FROM node:16.20.2

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

# Sometimes issues with bcrypt, so we need to rebuild it
RUN npm rebuild bcrypt --build-from-source

COPY . .

# Wait-for-it script for database readiness (optional, but recommended)
COPY wait-for-it.sh /usr/local/bin/

# Make sure the script has execution permission
RUN chmod +x /usr/local/bin/wait-for-it.sh

EXPOSE 3008

# Start the backend and handle database initialization
CMD ["/bin/sh", "-c", "/usr/local/bin/wait-for-it.sh db:5432 -- npm run init:db && npm start"]
