import fs from 'fs';
import * as fakeData from './fake-data.js';

Object.keys(fakeData).forEach(key => {
  fs.writeFileSync(
    `${key}.json`,
    JSON.stringify(fakeData[key]),
    'utf-8',
  );
});

console.log('Done!');