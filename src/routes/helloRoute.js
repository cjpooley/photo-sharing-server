import { MongoClient } from 'mongodb';

export const helloRoute = {
  method: 'get',
  path: '/hello',
  handler: (req, res) => {
    res.send("Hello!");
  },
}