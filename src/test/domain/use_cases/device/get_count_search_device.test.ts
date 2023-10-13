import {
  Device,
  DeviceSearchCounting,
} from "../../../../domain/entities/device/device";
import { DeviceRepository } from "../../../../domain/interfaces/device/repositories/device_repository";
import { GetCountSearchDevice } from "../../../../domain/use_cases/device/get_count_search_device";

describe("Get Count Search Device Use Case", () => {
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
      .spyOn(mockDeviceRepository, "getCountSearchDevice")
      .mockImplementation(() => Promise.resolve(ExpectedResult));

    const getCountSearchDeviceUseCase = new GetCountSearchDevice(
      mockDeviceRepository
    );
    const result = await getCountSearchDeviceUseCase.execute();
    expect(result).toEqual(ExpectedResult);
  });
});
