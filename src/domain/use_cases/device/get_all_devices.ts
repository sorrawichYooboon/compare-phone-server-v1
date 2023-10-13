import { Device } from "../../entities/device/device";
import { DeviceRepository } from "../../interfaces/device/repositories/device_repository";
import { GetAllDevicesUseCase } from "../../interfaces/device/use_cases/get_all_devices_use_case";

export class GetAllDevices implements GetAllDevicesUseCase {
  deviceRepository: DeviceRepository;
  constructor(deviceRepository: DeviceRepository) {
    this.deviceRepository = deviceRepository;
  }

  async execute(): Promise<Device[]> {
    const result = await this.deviceRepository.getAllDevices();
    return result;
  }
}
