import { Device } from "../../entities/device/device";
import { DeviceRepository } from "../../interfaces/device/repositories/device_repository";
import { CreateDeviceUseCase } from "../../interfaces/device/use_cases/create_device_use_case";

export class CreateDevice implements CreateDeviceUseCase {
  deviceRepository: DeviceRepository;
  constructor(deviceRepository: DeviceRepository) {
    this.deviceRepository = deviceRepository;
  }

  async execute(device: Device): Promise<boolean> {
    const result = await this.deviceRepository.createDevice(device);
    return result;
  }
}
