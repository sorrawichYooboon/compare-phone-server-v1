import { MongoClient } from "mongodb";

interface LocalizedString {
  en: string;
  th: string;
}

interface LocalizedNumber {
  en: number;
  th: number;
}

interface LocalizedStringArray {
  en: string[];
  th: string[];
}
export interface Device {
  id: string;
  brand: string;
  type: string;
  name: LocalizedString;
  image_url: string;
  color: LocalizedStringArray;
  price: LocalizedNumber;
  capacity: string[];
  display: LocalizedStringArray;
  height: LocalizedString;
  width: LocalizedString;
  depth: LocalizedString;
  weight: LocalizedString;
  chip_ram: LocalizedStringArray;
  main_camera: LocalizedStringArray;
  video: LocalizedStringArray;
  front_camera: LocalizedStringArray;
  cellular_wireless: LocalizedStringArray;
  power_battery: LocalizedStringArray;
  sim_card: LocalizedStringArray;
  connector: string;
  official_website: LocalizedString;
}

const uri =
process.env.DEVICES_DATABASE_URL || ""
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();

    const database = client.db("FLOWECH_DEVICES_DB");
    const collection = database.collection<Device>("devices");

    const device: Device = {
      id: "mock_id",
      brand: "mock_brand",
      type: "mock_type",
      name: {
        en: "mock_name",
        th: "mock_name",
      },
      image_url: "mock_image_url",
      color: {
        en: ["mock_color"],
        th: ["mock_color"],
      },
      price: {
        en: 1000,
        th: 1000,
      },
      capacity: ["mock_capacity"],
      display: {
        en: ["mock_display"],
        th: ["mock_display"],
      },
      height: {
        en: "mock_height",
        th: "mock_height",
      },
      width: {
        en: "mock_width",
        th: "mock_width",
      },
      depth: {
        en: "mock_depth",
        th: "mock_depth",
      },
      weight: {
        en: "mock_weight",
        th: "mock_weight",
      },
      chip_ram: {
        en: ["mock_chip_ram"],
        th: ["mock_chip_ram"],
      },
      main_camera: {
        en: ["mock_main_camera"],
        th: ["mock_main_camera"],
      },
      video: {
        en: ["mock_video"],
        th: ["mock_video"],
      },
      front_camera: {
        en: ["mock_front_camera"],
        th: ["mock_front_camera"],
      },
      cellular_wireless: {
        en: ["mock_cellular_wireless"],
        th: ["mock_cellular_wireless"],
      },
      power_battery: {
        en: ["mock_power_battery"],
        th: ["mock_power_battery"],
      },
      sim_card: {
        en: ["mock_sim_card"],
        th: ["mock_sim_card"],
      },
      connector: "mock_connector",
      official_website: {
        en: "mock_official_website",
        th: "mock_official_website",
      },
    };

    const result = await collection.insertOne(device);
    console.log(
      `Device with id ${result.insertedId} was added to the collection.`
    );
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
