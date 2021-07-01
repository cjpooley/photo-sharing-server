import { db } from './db';

export const addNewPhoto = async (url, title, ownerId) => {
  const connection = db.getConnection();
  connection.collection('photos').insertOne({ url, title, ownerId, sharedWith: [] });
}