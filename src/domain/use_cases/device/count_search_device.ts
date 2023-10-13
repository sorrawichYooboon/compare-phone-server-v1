import { DeviceRepository } from "../../interfaces/device/repositories/device_repository";
import { CountSearchDeviceUseCase } from "../../interfaces/device/use_cases/count_search_device_use_case";

export class CountSearchDevice implements CountSearchDeviceUseCase {
  deviceRepository: DeviceRepository;
  constructor(deviceRepository: DeviceRepository) {
    this.deviceRepository = deviceRepository;
  }

  async execute(
    id: string,
    brand: string,
    type: string,
    name: string
  ): Promise<boolean> {
    const result = await this.deviceRepository.countSearchDevice(
      id,
      brand,
      type,
      name
    );
    return result;
  }
}
