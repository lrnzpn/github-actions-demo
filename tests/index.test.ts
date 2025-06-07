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
});
