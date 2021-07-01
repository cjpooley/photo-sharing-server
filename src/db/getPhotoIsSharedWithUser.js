import { getPhoto } from './getPhoto';

export const getPhotoIsSharedWithUser = async (userId, photoId) => {
  const photo = await getPhoto(photoId);
  if (photo.sharedWith === undefined || photo.sharedWith.length == 0) {
    return false;
  }
  return photo.sharedWith.includes(userId);
}