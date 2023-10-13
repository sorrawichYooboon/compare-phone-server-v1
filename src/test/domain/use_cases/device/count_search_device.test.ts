import {
  Device,
  DeviceSearchCounting,
} from "../../../../domain/entities/device/device";
import { DeviceRepository } from "../../../../domain/interfaces/device/repositories/device_repository";
import { CountSearchDevice } from "../../../../domain/use_cases/device/count_search_device";

describe("Count Search Device Use Case", () => {
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

  test("should return true", async () => {
    const InputData = {
      id: "mock_id",
      brand: "mock_brand",
      type: "mock_type",
      name: "mock_name",
    };

    jest
      .spyOn(mockDeviceRepository, "countSearchDevice")
      .mockImplementation(() => Promise.resolve(true));
    const countSearchDeviceUseCase = new CountSearchDevice(
      mockDeviceRepository
    );
    const result = await countSearchDeviceUseCase.execute(
      InputData.id,
      InputData.brand,
      InputData.type,
      InputData.name
    );
    expect(result).toBe(true);
  });
});
