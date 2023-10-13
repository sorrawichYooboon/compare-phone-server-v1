import { DeviceSearchCounting } from "../../entities/device/device";
import { DeviceRepository } from "../../interfaces/device/repositories/device_repository";
import { GetCountSearchDeviceUseCase } from "../../interfaces/device/use_cases/get_count_search_device_use_case";

export class GetCountSearchDevice implements GetCountSearchDeviceUseCase {
  deviceRepository: DeviceRepository;
  constructor(deviceRepository: DeviceRepository) {
    this.deviceRepository = deviceRepository;
  }

  async execute(): Promise<DeviceSearchCounting[]> {
    const result = await this.deviceRepository.getCountSearchDevice();
    return result;
  }
}
