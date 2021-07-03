import express from 'express';
import { db } from './db';
import { routes, protectRouteMiddleware } from './routes';
import admin from 'firebase-admin';
import fileUpload from 'express-fileupload';
import fs from 'fs'; 
import path from 'path';
import { fileURLToPath } from 'url';
import config from 'config';

let credentials = JSON.parse(fs.readFileSync('src/credentials.json', 'utf-8'));

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname ,'uploads')));
app.use(express.json());
app.use(fileUpload());

routes.forEach((route) => {
  app[route.method](route.path, protectRouteMiddleware, route.handler);
});

const start = async () => {
  const dbHost = config.get('photo-server.dbConfig.host');
  const dbPort = config.get('photo-server.dbConfig.port');
  await db.connect('mongodb://' + dbHost + ':' + dbPort);
  const serverPort = config.get('photo-server.serverConfig.port');
  app.listen(serverPort, () => {
    console.log('Server is listening on port ' + serverPort);
  });
}

start();
