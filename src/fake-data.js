const USER_ID_1 = 'AtFFk8KvjAbm7g8kmqGMbJUHHUN2';
const USER_ID_2 = 'TQDVVn9YEMdBb1tG8J6zI0rPqsE3';
const USER_ID_3 = 'VJgc3o4fz6Y74yPmtquXp1G8imk2';

export const users = [{
    id: USER_ID_1,
    email: 'brendabrown@gmail.com',
    fullName: 'Brenda Brown',
}, {
    id: USER_ID_2,
    email: 'jimsmith@gmail.com',
    fullName: 'Jim Smith',
}, {
    id: USER_ID_3,
    email: 'janejones@gmail.com',
    fullName: 'Jane Jones',
}];

export const photos = [{
    url: '/cat-photo.jpeg',
    title: 'My Cat',
    ownerId: USER_ID_1,
    sharedWith: [USER_ID_2],
}, {
    url: '/car-photo.jpg',
    title: 'My Car',
    ownerId: USER_ID_2,
    sharedWith: [USER_ID_1],
}];