import express from 'express';
import bodyParser from 'body-parser';
import { db } from './db/index.js';
import { routes } from './routes/index.js';
import admin from 'firebase-admin';
import fs from 'fs'; 

let credentials = JSON.parse(fs.readFileSync('src/credentials.json', 'utf-8'));

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

const app = express();

app.use(bodyParser.json());

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

const start = async () => {
  await db.connect('mongodb://localhost:27017');
  app.listen(8080, () => {
    console.log('Server is listening on port 8080');
  });
}

start();
