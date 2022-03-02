const request = require('supertest');
const app = require('../app');

test('Should respond with the get method', done => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((error, res) => {
      if (error) done(error);
      expect(res.statusCode).toBe(200);
      done();
    });
});

test('Should respond with homepage', done => {
  request(app)
    .get('/home')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((error, res) => {
      if (error) done(error);
      expect(res.statusCode).toBe(200);
      expect(res.text).toContain('Results');
      done();
    });
});

test('Should get results', done => {
  request(app)
    .get('/search?term=test')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((error, res) => {
      if (error) done(error);
      expect(res.statusCode).toBe(200);
      expect(res.body.tracks.hits.length).toBeGreaterThan(0);
      done();
    });
});

test('Should get No results found', done => {
  request(app)
    .get('/search?term=asdfasdfasdsad')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((error, res) => {
      if (error) done(error);
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({});
      done();
    });
});

test('Should respond with 404 not found page', done => {
  request(app)
    .get('/potato')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((error, res) => {
      if (error) done(error);
      expect(res.text).toContain('404');
      expect(res.statusCode).toBe(404);
      done();
    });
});
