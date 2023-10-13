import { DeviceDataSource } from "../../../../data/interfaces/data_sources/device_data_source";
import {
  Device,
  DeviceSearchCounting,
} from "../../../../domain/entities/device/device";
import { DeviceRepository } from "../../../../domain/interfaces/device/repositories/device_repository";
import { DeviceRepositoryImpl } from "../../../../domain/repositories/device/device_repository";

class MockDeviceDataSource implements DeviceDataSource {
  create(device: Device): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<Device[]> {
    throw new Error("Method not implemented.");
  }
  countSearchDevice(
    id: string,
    brand: string,
    type: string,
    name: string
  ): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  getCountSearchDevice(): Promise<DeviceSearchCounting[]> {
    throw new Error("Method not implemented.");
  }
}

describe("Device Repository", () => {
  let mockDeviceDataSource: DeviceDataSource;
  let deviceRepository: DeviceRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockDeviceDataSource = new MockDeviceDataSource();
    deviceRepository = new DeviceRepositoryImpl(mockDeviceDataSource);
  });

  describe("createDevice", () => {
    test("should return true if create device successfully", async () => {
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
        .spyOn(mockDeviceDataSource, "create")
        .mockImplementation(() => Promise.resolve(true));
      const result = await deviceRepository.createDevice(InputData);
      expect(result).toBe(true);
    });
  });

  describe("getAllDevices", () => {
    test("should return data", async () => {
      const expectedData = [
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
        .spyOn(mockDeviceDataSource, "getAll")
        .mockImplementation(() => Promise.resolve(expectedData));
      const result = await deviceRepository.getAllDevices();
      expect(result).toBe(expectedData);
    });
  });

  describe("countSearchDevice", () => {
    test("should return true", async () => {
      const InputData = {
        id: "mock_id",
        brand: "mock_brand",
        type: "mock_type",
        name: "mock_name",
      };
      jest
        .spyOn(mockDeviceDataSource, "countSearchDevice")
        .mockImplementation(() => Promise.resolve(true));
      const result = await deviceRepository.countSearchDevice(
        InputData.id,
        InputData.brand,
        InputData.type,
        InputData.name
      );
      expect(result).toBe(true);
    });
  });

  describe("getCountSearchDevice", () => {
    test("should return data", async () => {
      const expectedData = [
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
        .spyOn(mockDeviceDataSource, "getCountSearchDevice")
        .mockImplementation(() => Promise.resolve(expectedData));
      const result = await deviceRepository.getCountSearchDevice();
      expect(result).toBe(expectedData);
    });
  });
});
