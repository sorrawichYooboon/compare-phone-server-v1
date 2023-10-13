export interface CountSearchDeviceUseCase {
  execute(
    id: string,
    brand: string,
    type: string,
    name: string
  ): Promise<boolean>;
}
