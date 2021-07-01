import { db } from './db';
import pkg from 'mongodb';
const { ObjectID } = pkg;

export const getPhoto = async (photoId) => {
  const photo = await db.getConnection().collection('photos')
    .findOne({ _id: ObjectID(photoId) });
  return photo;
}