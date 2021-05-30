import express from 'express';
import { db } from './db';
import { routes, protectRouteMiddleware } from './routes';
import admin from 'firebase-admin';
import fs from 'fs'; 
import path from 'path';
import { fileURLToPath } from 'url';

let credentials = JSON.parse(fs.readFileSync('src/credentials.json', 'utf-8'));

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname ,'uploads')));
app.use(express.json());

routes.forEach((route) => {
  app[route.method](route.path, protectRouteMiddleware, route.handler);
});

const start = async () => {
  await db.connect('mongodb://localhost:27017');
  app.listen(8080, () => {
    console.log('Server is listening on port 8080');
  });
}

start();
