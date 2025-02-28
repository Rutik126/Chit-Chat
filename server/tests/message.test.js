const request = require('supertest');
const app = require('../server');

test('Get messages', async () => {
  const res = await request(app).get('/api/messages/user1/user2');
  expect(res.statusCode).toEqual(200);
});