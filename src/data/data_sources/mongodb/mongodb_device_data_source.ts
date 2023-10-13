import { DeviceDataSource } from "../../interfaces/data_sources/device_data_source";
import { Device, DeviceSearchCounting } from "./models/device";
import { DatabaseWrapper } from "../../interfaces/data_sources/database_wrapper";
import e from "express";

export class MongoDBDeviceDataSource implements DeviceDataSource {
  private database: DatabaseWrapper;
  constructor(database: DatabaseWrapper) {
    this.database = database;
  }
  async create(device: Device): Promise<boolean> {
    const findDeviceById = await this.database.findDeviceInDevices({
      id: device.id,
    });
    if (findDeviceById.length > 0) {
      throw new Error("Device already exists");
    }
    const result = await this.database.insertOneInDevices(device);
    return result !== null;
  }
  async getAll(): Promise<Device[]> {
    const result = await this.database.findDeviceInDevices({});
    return result.map(
      (item): Device => ({
        id: item.id,
        brand: item.brand,
        type: item.type,
        name: {
          en: item.name.en,
          th: item.name.th,
        },
        image_url: item.image_url,
        color: {
          en: item.color.en,
          th: item.color.th,
        },
        price: {
          en: item.price.en,
          th: item.price.th,
        },
        capacity: item.capacity,
        display: {
          en: item.display.en,
          th: item.display.th,
        },
        height: {
          en: item.height.en,
          th: item.height.th,
        },
        width: {
          en: item.width.en,
          th: item.width.th,
        },
        depth: {
          en: item.depth.en,
          th: item.depth.th,
        },
        weight: {
          en: item.weight.en,
          th: item.weight.th,
        },
        chip_ram: {
          en: item.chip_ram.en,
          th: item.chip_ram.th,
        },
        main_camera: {
          en: item.main_camera.en,
          th: item.main_camera.th,
        },
        video: {
          en: item.video.en,
          th: item.video.th,
        },
        front_camera: {
          en: item.front_camera.en,
          th: item.front_camera.th,
        },
        cellular_wireless: {
          en: item.cellular_wireless.en,
          th: item.cellular_wireless.th,
        },
        power_battery: {
          en: item.power_battery.en,
          th: item.power_battery.th,
        },
        sim_card: {
          en: item.sim_card.en,
          th: item.sim_card.th,
        },
        connector: item.connector,
        official_website: {
          en: item.official_website.en,
          th: item.official_website.th,
        },
      })
    );
  }
  async countSearchDevice(
    id: string,
    brand: string,
    type: string,
    name: string
  ): Promise<boolean> {
    const findCountDeviceById =
      await this.database.findDeviceInCountSearchDevice({
        id: id,
      });
    if (findCountDeviceById.length > 0) {
      await this.database.updateOneInCountSearchDevice(
        { id: id },
        { $inc: { search_count: 1 } }
      );
      return true;
    } else {
      await this.database.insertOneInCountSearchDevice({
        id: id,
        brand: brand,
        type: type,
        name: name,
        search_count: 1,
      });
      return true;
    }
    return false;
  }

  async getCountSearchDevice(): Promise<DeviceSearchCounting[]> {
    const result = await this.database.findTopFiveDeviceInCountSearchDevice({});
    return result.map((item) => ({
      id: item.id,
      brand: item.brand,
      type: item.type,
      name: item.name,
      search_count: item.search_count,
    }));
  }
}
