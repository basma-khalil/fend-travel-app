import 'core-js/stable'
import 'regenerator-runtime/runtime'


const supertest = require('supertest');
const app = require('../src/server/server');
const request = supertest(app);


describe("Server works", () => {
    test('Gets the test endpoint', async (done) => {
        // Sends GET Request to root endpoint
        const res = await request.get('/')
        expect(res.statusCode).toBe(200);
        done()
    })
})