import request from 'supertest';
import { app } from '../../app';

describe('GET /api/v1/health endpoint', () => {
    it('Should', async () => {
        const res = await request(app).get('/api/v1/health');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Welcome to the Movie API!');
    });
});
