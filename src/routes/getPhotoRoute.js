import {  
  getPopulatedPhoto,
  getSanitizedPhoto,
  getUserOwnsPhoto,
  getPhotoIsSharedWithUser,
} from '../db';

export const getPhotoRoute = {
  method: 'get',
  path: '/photos/:id',
  handler: async (req, res) => {
    const user = req.user;
    const { id: photoId } = req.params;
    const userIsOwner = await getUserOwnsPhoto(user.user_id, photoId);
    const photoIsSharedWithUser = await getPhotoIsSharedWithUser(user.user_id, photoId);

    if (userIsOwner) {
      const photo = await getPopulatedPhoto(photoId);
      res.status(200).json(photo);
    } else if (photoIsSharedWithUser) {
      const photo = await getSanitizedPhoto(photoId);
      res.status(200).json(photo);
    } else {
      res.status(401).json({ message: 'User is not allowed to access photo'});
    }
  }
}