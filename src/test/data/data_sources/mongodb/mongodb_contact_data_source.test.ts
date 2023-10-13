import { MongoDBContactDataSource } from "../../../../data/data_sources/mongodb/mongodb_contact_data_source";
import { DatabaseWrapper } from "../../../../data/interfaces/data_sources/database_wrapper";

describe("MongoDB Contact DataSource", () => {
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

  test("getAll", async () => {
    const ds = new MongoDBContactDataSource(mockDatabase);
    jest.spyOn(mockDatabase, "findDeviceInDevices").mockImplementation(() =>
      Promise.resolve([
        {
          surname: "Smith",
          _id: "123",
          firstName: "John",
          email: "john@gmail.com",
        },
      ])
    );
    const result = await ds.getAll();
    expect(mockDatabase.findDeviceInDevices).toHaveBeenCalledWith({});
    expect(result).toStrictEqual([
      {
        surname: "Smith",
        id: "123",
        firstName: "John",
        email: "john@gmail.com",
      },
    ]);
  });

  test("create", async () => {
    const ds = new MongoDBContactDataSource(mockDatabase);
    jest
      .spyOn(mockDatabase, "insertOneInDevices")
      .mockImplementation(() => Promise.resolve({ insertedId: "123" }));
    const result = await ds.create({
      surname: "Smith",
      email: "john@gmail.com",
      firstName: "John",
    });
    expect(mockDatabase.insertOneInDevices).toHaveBeenCalledWith({
      surname: "Smith",
      email: "john@gmail.com",
      firstName: "John",
    });
    expect(result).toStrictEqual(true);
  });
});
