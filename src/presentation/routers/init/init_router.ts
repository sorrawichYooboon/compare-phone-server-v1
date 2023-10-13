import express from "express";
import { Request, Response } from "express";

export default function InitRouter() {
  const router = express.Router();

  router.get("/ping", async (req: Request, res: Response) => {
    let env = process.env.ENV || "dev";
    res.send(`pong on env: ${env}`);
  });

  return router;
}
