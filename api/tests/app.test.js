require("dotenv").config({ path: "./api/.env.test" });
const request = require("supertest");
const app = require("../app");
const db = require("../db/testdbhelper");

beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

describe("GET /", () => {
  it("responds with Hello World!", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("Hello World!");
  });
});
