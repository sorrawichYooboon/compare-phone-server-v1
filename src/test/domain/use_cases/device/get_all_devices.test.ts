import {
  Device,
  DeviceSearchCounting,
} from "../../../../domain/entities/device/device";
import { DeviceRepository } from "../../../../domain/interfaces/device/repositories/device_repository";
import { GetAllDevices } from "../../../../domain/use_cases/device/get_all_devices";

describe("Get All Devices Use Case", () => {
  class MockDeviceRepository implements DeviceRepository {
    createDevice(device: Device): Promise<boolean> {
      throw new Error("Method not implemented.");
    }
    getAllDevices(): Promise<Device[]> {
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
  let mockDeviceRepository: DeviceRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockDeviceRepository = new MockDeviceRepository();
  });

  test("should return data", async () => {
    const ExpectedResult = [
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
      .spyOn(mockDeviceRepository, "getAllDevices")
      .mockImplementation(() => Promise.resolve(ExpectedResult));
    const getAllDevicesUse = new GetAllDevices(mockDeviceRepository);
    const result = await getAllDevicesUse.execute();
    expect(result).toStrictEqual(ExpectedResult);
  });
});
