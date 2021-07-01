import pkg from 'mongodb';
const { ObjectID } = pkg;
import { db } from './db';

export const sharePhotoWithUserByEmail = async (photoId, email) => {
  const connection = db.getConnection();
  const user = await connection.collection('users')
    .findOne({ email });
  if (user) {
    await connection.collection('photos')
      .updateOne({ _id: ObjectID(photoId) }, {
        // $addToSet is like $push but without allowing duplicates
        $addToSet: { sharedWith: user.id },
      });
  }
}