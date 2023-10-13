import request from "supertest";
import InitRouter from "../../../../presentation/routers/init/init_router";
import server from "../../../../server";

describe("Init Router", () => {
  beforeAll(() => {
    server.use("/init", InitRouter());
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /init/ping", () => {
    test("should return 200 with pong", async () => {
      const response = await request(server).get("/init/ping");

      expect(response.status).toBe(200);
    });
  });
});
