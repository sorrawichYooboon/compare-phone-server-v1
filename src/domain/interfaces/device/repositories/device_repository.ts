import { Device, DeviceSearchCounting } from "../../../entities/device/device";
export interface DeviceRepository {
  createDevice(device: Device): Promise<boolean>;
  getAllDevices(): Promise<Device[]>;
  countSearchDevice(
    id: string,
    brand: string,
    type: string,
    name: string
  ): Promise<boolean>;
  getCountSearchDevice(): Promise<DeviceSearchCounting[]>;
}
