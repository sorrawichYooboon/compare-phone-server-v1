import { DeviceRepository } from "../../interfaces/device/repositories/device_repository";
import { DeviceDataSource } from "../../../data/interfaces/data_sources/device_data_source";
import { Device, DeviceSearchCounting } from "../../entities/device/device";

export class DeviceRepositoryImpl implements DeviceRepository {
  deviceDataSource: DeviceDataSource;
  constructor(deviceDataSource: DeviceDataSource) {
    this.deviceDataSource = deviceDataSource;
  }

  async createDevice(device: Device): Promise<boolean> {
    const result = await this.deviceDataSource.create(device);
    return result;
  }
  async getAllDevices(): Promise<Device[]> {
    const result = await this.deviceDataSource.getAll();
    return result;
  }
  async countSearchDevice(
    id: string,
    brand: string,
    type: string,
    name: string
  ): Promise<boolean> {
    const result = await this.deviceDataSource.countSearchDevice(
      id,
      brand,
      type,
      name
    );
    return result;
  }
  async getCountSearchDevice(): Promise<DeviceSearchCounting[]> {
    const result = await this.deviceDataSource.getCountSearchDevice();
    return result;
  }
}
