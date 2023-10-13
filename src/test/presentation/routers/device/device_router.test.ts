import request from "supertest";
import server from "../../../../server";
import {
  Device,
  DeviceSearchCounting,
} from "../../../../domain/entities/device/device";
import DeviceRouter from "../../../../presentation/routers/device/device_router";
import { CreateDeviceUseCase } from "../../../../domain/interfaces/device/use_cases/create_device_use_case";
import { GetAllDevicesUseCase } from "../../../../domain/interfaces/device/use_cases/get_all_devices_use_case";
import { CountSearchDeviceUseCase } from "../../../../domain/interfaces/device/use_cases/count_search_device_use_case";
import { GetCountSearchDeviceUseCase } from "../../../../domain/interfaces/device/use_cases/get_count_search_device_use_case";

class MockCreateDeviceUseCase implements CreateDeviceUseCase {
  execute(device: Device): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

class MockGetAllDevicesUseCase implements GetAllDevicesUseCase {
  execute(): Promise<Device[]> {
    throw new Error("Method not implemented.");
  }
}

class MockCountSearchDeviceUseCase implements CountSearchDeviceUseCase {
  execute(
    id: string,
    brand: string,
    type: string,
    name: string
  ): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

class MockGetCountSearchDeviceUseCase implements GetCountSearchDeviceUseCase {
  execute(): Promise<DeviceSearchCounting[]> {
    throw new Error("Method not implemented.");
  }
}

describe("Deivce Router", () => {
  let mockCreateDeviceUseCase: CreateDeviceUseCase;
  let mockGetAllDevicesUseCase: GetAllDevicesUseCase;
  let mockCountSearchDeviceUseCase: CountSearchDeviceUseCase;
  let mockGetCountSearchDeviceUseCase: GetCountSearchDeviceUseCase;

  beforeAll(() => {
    mockCreateDeviceUseCase = new MockCreateDeviceUseCase();
    mockGetAllDevicesUseCase = new MockGetAllDevicesUseCase();
    mockCountSearchDeviceUseCase = new MockCountSearchDeviceUseCase();
    mockGetCountSearchDeviceUseCase = new MockGetCountSearchDeviceUseCase();
    server.use(
      "/device",
      DeviceRouter(
        mockCreateDeviceUseCase,
        mockGetAllDevicesUseCase,
        mockCountSearchDeviceUseCase,
        mockGetCountSearchDeviceUseCase
      )
    );
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /device/get/all", () => {
    test("should return 200 with data", async () => {
      const ExpectedData = [
        {
          id: "mock_id",
          brand: "mock_brand",
          type: "mock_type",
          name: {
            en: "mock_name",
            th: "mock_name",
          },
          image_url: "mock_image_url",
          color: {
            en: ["mock_color"],
            th: ["mock_color"],
          },
          price: {
            en: 1000,
            th: 1000,
          },
          capacity: ["mock_capacity"],
          display: {
            en: ["mock_display"],
            th: ["mock_display"],
          },
          height: {
            en: "mock_height",
            th: "mock_height",
          },
          width: {
            en: "mock_width",
            th: "mock_width",
          },
          depth: {
            en: "mock_depth",
            th: "mock_depth",
          },
          weight: {
            en: "mock_weight",
            th: "mock_weight",
          },
          chip_ram: {
            en: ["mock_chip_ram"],
            th: ["mock_chip_ram"],
          },
          main_camera: {
            en: ["mock_main_camera"],
            th: ["mock_main_camera"],
          },
          video: {
            en: ["mock_video"],
            th: ["mock_video"],
          },
          front_camera: {
            en: ["mock_front_camera"],
            th: ["mock_front_camera"],
          },
          cellular_wireless: {
            en: ["mock_cellular_wireless"],
            th: ["mock_cellular_wireless"],
          },
          power_battery: {
            en: ["mock_power_battery"],
            th: ["mock_power_battery"],
          },
          sim_card: {
            en: ["mock_sim_card"],
            th: ["mock_sim_card"],
          },
          connector: "mock_connector",
          official_website: {
            en: "mock_official_website",
            th: "mock_official_website",
          },
        },
      ];
      jest
        .spyOn(mockGetAllDevicesUseCase, "execute")
        .mockImplementation(() => Promise.resolve(ExpectedData));

      const response = await request(server).get("/device/get/all");

      expect(response.status).toBe(200);
      expect(mockGetAllDevicesUseCase.execute).toBeCalledTimes(1);
      expect(response.body).toStrictEqual(ExpectedData);
    });
  });

  describe("POST /device/create", () => {
    test("should return 200 with data", async () => {
      const InputData = {
        id: "mock_id",
        brand: "mock_brand",
        type: "mock_type",
        name: {
          en: "mock_name",
          th: "mock_name",
        },
        image_url: "mock_image_url",
        color: {
          en: ["mock_color"],
          th: ["mock_color"],
        },
        price: {
          en: 1000,
          th: 1000,
        },
        capacity: ["mock_capacity"],
        display: {
          en: ["mock_display"],
          th: ["mock_display"],
        },
        height: {
          en: "mock_height",
          th: "mock_height",
        },
        width: {
          en: "mock_width",
          th: "mock_width",
        },
        depth: {
          en: "mock_depth",
          th: "mock_depth",
        },
        weight: {
          en: "mock_weight",
          th: "mock_weight",
        },
        chip_ram: {
          en: ["mock_chip_ram"],
          th: ["mock_chip_ram"],
        },
        main_camera: {
          en: ["mock_main_camera"],
          th: ["mock_main_camera"],
        },
        video: {
          en: ["mock_video"],
          th: ["mock_video"],
        },
        front_camera: {
          en: ["mock_front_camera"],
          th: ["mock_front_camera"],
        },
        cellular_wireless: {
          en: ["mock_cellular_wireless"],
          th: ["mock_cellular_wireless"],
        },
        power_battery: {
          en: ["mock_power_battery"],
          th: ["mock_power_battery"],
        },
        sim_card: {
          en: ["mock_sim_card"],
          th: ["mock_sim_card"],
        },
        connector: "mock_connector",
        official_website: {
          en: "mock_official_website",
          th: "mock_official_website",
        },
      };
      jest
        .spyOn(mockCreateDeviceUseCase, "execute")
        .mockImplementation(() => Promise.resolve(true));

      const response = await request(server)
        .post("/device/create")
        .send(InputData);
      expect(response.status).toBe(201);
    });
  });

  describe("POST /device/count/search", () => {
    test("should return 200 with data", async () => {
      const InputData = {
        id: "mock_id",
        brand: "mock_brand",
        type: "mock_type",
        name: {
          en: "mock_name",
          th: "mock_name",
        },
      };
      jest
        .spyOn(mockCountSearchDeviceUseCase, "execute")
        .mockImplementation(() => Promise.resolve(true));

      const response = await request(server)
        .post("/device/count/search/")
        .send(InputData);
      expect(response.status).toBe(200);
    });

    test("should call execute with correct params", async () => {
      const InputData = {
        id: "mock_id",
        brand: "mock_brand",
        type: "mock_type",
        name: {
          en: "mock_name",
          th: "mock_name",
        },
      };
      jest
        .spyOn(mockCountSearchDeviceUseCase, "execute")
        .mockImplementation(() => Promise.resolve(true));

      await request(server).post("/device/count/search").send(InputData);
      expect(mockCountSearchDeviceUseCase.execute).toBeCalledWith(
        InputData.id,
        InputData.brand,
        InputData.type,
        InputData.name
      );
    });
  });

  describe("GET /device/get/count-search", () => {
    test("should return 200 with data", async () => {
      const ExpectedData = [
        {
          id: "mock_id",
          brand: "mock_brand",
          type: "mock_type",
          name: "mock_name",
          search_count: 1,
        },
        {
          id: "mock_id_2",
          brand: "mock_brand_2",
          type: "mock_type_2",
          name: "mock_name_2",
          search_count: 2,
        },
        {
          id: "mock_id_3",
          brand: "mock_brand_3",
          type: "mock_type_3",
          name: "mock_name_3",
          search_count: 3,
        },
      ];
      jest
        .spyOn(mockGetCountSearchDeviceUseCase, "execute")
        .mockImplementation(() => Promise.resolve(ExpectedData));

      const response = await request(server).get("/device/get/count-search");

      expect(response.status).toBe(200);
      expect(mockGetCountSearchDeviceUseCase.execute).toBeCalledTimes(1);
      expect(response.body).toStrictEqual(ExpectedData);
    });
  });
});
