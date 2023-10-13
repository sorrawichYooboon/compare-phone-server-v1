import { Device } from "../../../entities/device/device";
export interface CreateDeviceUseCase {
  execute(device: Device): Promise<boolean>;
}
