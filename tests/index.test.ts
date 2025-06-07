import request from 'supertest';
import { describe, it, expect } from '@jest/globals';
import app from '../src/index';

describe('API Tests', () => {
  it('should return hello message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello from GitHub Actions Demo!' });
  });

  it('should greet a person by name', async () => {
    const name = 'John';
    const response = await request(app).get(`/greet/${name}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: `Hello, ${name}!` });
  });

  describe('POST /message', () => {
    it('should create a new message successfully', async () => {
      const messageData = { content: 'Test message' };
      const response = await request(app)
        .post('/message')
        .send(messageData);

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject({
        content: messageData.content,
        id: expect.any(Number),
        createdAt: expect.any(String)
      });
    });

    it('should return 400 when content is missing', async () => {
      const response = await request(app)
        .post('/message')
        .send({});

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: 'Content is required' });
    });
  });
});
