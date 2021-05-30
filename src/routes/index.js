import { getMyPhotosRoute } from './getMyPhotosRoute';

export { protectRouteMiddleware } from './protectRouteMiddleware';

export const routes = [
  getMyPhotosRoute,
];