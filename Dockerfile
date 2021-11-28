FROM node

WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./
COPY yarn.lock ./

RUN npm install

COPY . .

RUN npx prisma migrate dev --name creation of test tables

EXPOSE 4000

CMD npm start