import { getMyPhotosRoute } from './getMyPhotosRoute';
import { getSharedWithMePhotosRoute } from './getSharedWithMePhotosRoute';
import { uploadPhotoRoute } from './uploadPhotoRoute';
import { getPhotoRoute } from './getPhotoRoute';
import { shareWithEmailRoute } from './shareWithEmailRoute';

export { protectRouteMiddleware } from './protectRouteMiddleware';

export const routes = [
  getMyPhotosRoute,
  getSharedWithMePhotosRoute,
  uploadPhotoRoute,
  getPhotoRoute,
  shareWithEmailRoute,
];