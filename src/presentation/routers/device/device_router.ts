import express from "express";
import { Request, Response } from "express";
import { CreateDeviceUseCase } from "../../../domain/interfaces/device/use_cases/create_device_use_case";
import { GetAllDevicesUseCase } from "../../../domain/interfaces/device/use_cases/get_all_devices_use_case";
import { CountSearchDeviceUseCase } from "../../../domain/interfaces/device/use_cases/count_search_device_use_case";
import { GetCountSearchDeviceUseCase } from "../../../domain/interfaces/device/use_cases/get_count_search_device_use_case";

export default function DeviceRouter(
  CreateDeviceUseCase: CreateDeviceUseCase,
  GetAllDevicesUseCase: GetAllDevicesUseCase,
  CountSearchDeviceUseCase: CountSearchDeviceUseCase,
  GetCountSearchDeviceUseCase: GetCountSearchDeviceUseCase
) {
  const router = express.Router();

  router.get("/get/all", async (req: Request, res: Response) => {
    try {
      const devices = await GetAllDevicesUseCase.execute();
      res.send(devices);
    } catch (err) {
      res.status(500).send({ message: "Error fetching data" });
    }
  });

  router.post("/create", async (req: Request, res: Response) => {
    try {
      await CreateDeviceUseCase.execute(req.body);
      res.statusCode = 201;
      res.json({ message: "Created" });
    } catch (err) {
      res.status(500).send({ message: "Error creating data" });
    }
  });

  router.post("/count/search", async (req: Request, res: Response) => {
    try {
      const count = await CountSearchDeviceUseCase.execute(
        req.body.id,
        req.body.brand,
        req.body.type,
        req.body.name
      );
      res.send(count);
    } catch (err) {
      res.status(500).send({ message: "Error counting data" });
    }
  });

  router.get("/get/count-search", async (req: Request, res: Response) => {
    try {
      const getCountSearchDevice = await GetCountSearchDeviceUseCase.execute();
      res.send(getCountSearchDevice);
    } catch (err) {
      res.status(500).send({ message: "Error get counting search device" });
    }
  });
  return router;
}
