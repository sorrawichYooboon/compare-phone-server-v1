import {
  Device,
  DeviceSearchCounting,
} from "../../../domain/entities/device/device";
export interface DeviceDataSource {
  create(device: Device): Promise<boolean>;
  getAll(): Promise<Device[]>;
  countSearchDevice(
    id: string,
    brand: string,
    type: string,
    name: string
  ): Promise<boolean>;
  getCountSearchDevice(): Promise<DeviceSearchCounting[]>;
}
