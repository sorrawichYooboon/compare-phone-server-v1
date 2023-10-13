export interface DatabaseWrapper {
  findDeviceInDevices(query: object): Promise<any[]>;
  insertOneInDevices(doc: any): Promise<any>;
  findDeviceInCountSearchDevice(query: object): Promise<any[]>;
  insertOneInCountSearchDevice(doc: any): Promise<any>;
  updateOneInCountSearchDevice(query: object, update: object): Promise<any>;
  findTopFiveDeviceInCountSearchDevice(query: object): Promise<any[]>;
}
