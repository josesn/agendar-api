FROM node:18

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

# ADD https://github.com/vishnubob/wait-for-it/raw/master/wait-for-it.sh /app/scripts/wait-for-it.sh
# RUN chmod +x /app/scripts/wait-for-it.sh

# RUN chmod +x /app/scripts/docker-entrypoint.sh

# ENTRYPOINT ['/app/scripts/docker-entrypoint.sh']
ADD https://github.com/vishnubob/wait-for-it/raw/master/wait-for-it.sh ./scripts/wait-for-it.sh
RUN chmod +x ./scripts/wait-for-it.sh

RUN chmod +x ./scripts/docker-entrypoint.sh

ENTRYPOINT [ "./scripts/docker-entrypoint.sh" ]