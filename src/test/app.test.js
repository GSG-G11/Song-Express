const request = require("supertest");
const { response } = require("../app");
const app = require("../app");

test("should response with the get method", () => {
  request(app)
    .get("/")
    .expect(200)
    .expect("Content-Type", /html/)
    .end((error) => {
      if (error) {
        console.log(error);
      }
    });
});

test("testing home page", () => {
  request(app)
    .get("/home")
    .expect(200)
    .expect("Content-Type", /html/)
    .end((error) => {
      if (error) {
        console.log(error)
      }
    });
});
