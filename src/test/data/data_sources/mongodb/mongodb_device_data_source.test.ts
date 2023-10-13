import { DatabaseWrapper } from "../../../../data/interfaces/data_sources/database_wrapper";
import { MongoDBDeviceDataSource } from "../../../../data/data_sources/mongodb/mongodb_device_data_source";

describe("MongoDB Device DataSource", () => {
  let mockDatabase: DatabaseWrapper;

  beforeAll(async () => {
    mockDatabase = {
      findDeviceInDevices: jest.fn(),
      insertOneInDevices: jest.fn(),
      findDeviceInCountSearchDevice: jest.fn(),
      insertOneInCountSearchDevice: jest.fn(),
      updateOneInCountSearchDevice: jest.fn(),
      findTopFiveDeviceInCountSearchDevice: jest.fn(),
    };
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getAll", () => {
    test("getAll", async () => {
      const ds = new MongoDBDeviceDataSource(mockDatabase);
      jest.spyOn(mockDatabase, "findDeviceInDevices").mockImplementation(() =>
        Promise.resolve([
          {
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
          },
        ])
      );
      const result = await ds.getAll();
      expect(result).toEqual([
        {
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
        },
      ]);
    });
  });

  describe("create", () => {
    test("create should throw error if find device by id is not empty", async () => {
      const ds = new MongoDBDeviceDataSource(mockDatabase);
      jest.spyOn(mockDatabase, "findDeviceInDevices").mockImplementation(() =>
        Promise.resolve([
          {
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
          },
        ])
      );
      await expect(
        ds.create({
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
        })
      ).rejects.toThrowError("Device already exists");
    });

    test("create", async () => {
      const ds = new MongoDBDeviceDataSource(mockDatabase);
      jest
        .spyOn(mockDatabase, "insertOneInDevices")
        .mockImplementation(() => Promise.resolve({ insertedId: "123" }));

      jest
        .spyOn(mockDatabase, "findDeviceInDevices")
        .mockImplementation(() => Promise.resolve([]));

      const result = await ds.create({
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
      });

      expect(mockDatabase.insertOneInDevices).toHaveBeenCalledWith({
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
      });
      expect(result).toStrictEqual(true);
    });
  });

  describe("countSearchDevice", () => {
    test("should create count count search device with id and name field if device id or name count is not exist", async () => {
      const ds = new MongoDBDeviceDataSource(mockDatabase);
      jest
        .spyOn(mockDatabase, "findDeviceInCountSearchDevice")
        .mockImplementation(() => Promise.resolve([]));

      jest
        .spyOn(mockDatabase, "insertOneInCountSearchDevice")
        .mockImplementation(() => Promise.resolve({ insertedId: "123" }));

      await ds.countSearchDevice(
        "mock_id",
        "mock_brand",
        "mock_type",
        "mock_name"
      );

      expect(mockDatabase.insertOneInCountSearchDevice).toHaveBeenCalledWith({
        id: "mock_id",
        brand: "mock_brand",
        type: "mock_type",
        name: "mock_name",
        search_count: 1,
      });
    });

    test("should update field count = count + 1 search device with id and name field if device id or name count is exist", async () => {
      const ds = new MongoDBDeviceDataSource(mockDatabase);
      jest
        .spyOn(mockDatabase, "findDeviceInCountSearchDevice")
        .mockImplementation(() => Promise.resolve([{ count: 1 }]));

      jest
        .spyOn(mockDatabase, "updateOneInCountSearchDevice")
        .mockImplementation(() => Promise.resolve({ modifiedCount: 1 }));

      await ds.countSearchDevice(
        "mock_id",
        "mock_brand",
        "mock_type",
        "mock_name"
      );

      expect(mockDatabase.updateOneInCountSearchDevice).toHaveBeenCalledWith(
        {
          id: "mock_id",
        },
        { $inc: { search_count: 1 } }
      );
    });
  });

  describe("getCountSearchDevice", () => {
    test("should return most 5 device that most value of search_count in count search device", async () => {
      const ds = new MongoDBDeviceDataSource(mockDatabase);
      jest
        .spyOn(mockDatabase, "findTopFiveDeviceInCountSearchDevice")
        .mockImplementation(() =>
          Promise.resolve([
            {
              id: "mock_id",
              brand: "mock_brand",
              type: "mock_type",
              name: "mock_name",
              search_count: 1,
            },
            {
              id: "mock_id_2",
              brand: "mock_brand_2",
              type: "mock_type_2",
              name: "mock_name_2",
              search_count: 2,
            },
            {
              id: "mock_id_3",
              brand: "mock_brand_3",
              type: "mock_type_3",
              name: "mock_name_3",
              search_count: 3,
            },
            {
              id: "mock_id_4",
              brand: "mock_brand_4",
              type: "mock_type_4",
              name: "mock_name_4",
              search_count: 4,
            },
            {
              id: "mock_id_5",
              brand: "mock_brand_5",
              type: "mock_type_5",
              name: "mock_name_5",
              search_count: 5,
            },
          ])
        );

      const result = await ds.getCountSearchDevice();

      expect(result).toEqual([
        {
          id: "mock_id",
          brand: "mock_brand",
          type: "mock_type",
          name: "mock_name",
          search_count: 1,
        },
        {
          id: "mock_id_2",
          brand: "mock_brand_2",
          type: "mock_type_2",
          name: "mock_name_2",
          search_count: 2,
        },
        {
          id: "mock_id_3",
          brand: "mock_brand_3",
          type: "mock_type_3",
          name: "mock_name_3",
          search_count: 3,
        },
        {
          id: "mock_id_4",
          brand: "mock_brand_4",
          type: "mock_type_4",
          name: "mock_name_4",
          search_count: 4,
        },
        {
          id: "mock_id_5",
          brand: "mock_brand_5",
          type: "mock_type_5",
          name: "mock_name_5",
          search_count: 5,
        },
      ]);
    });
  });
});
