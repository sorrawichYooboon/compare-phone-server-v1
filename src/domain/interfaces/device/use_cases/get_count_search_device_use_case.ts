import { DeviceSearchCounting } from "../../../entities/device/device";

export interface GetCountSearchDeviceUseCase {
  execute(): Promise<DeviceSearchCounting[]>;
}
