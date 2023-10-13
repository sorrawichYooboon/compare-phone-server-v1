import { Device } from "../../../entities/device/device";
export interface GetAllDevicesUseCase {
  execute(): Promise<Device[]>;
}
