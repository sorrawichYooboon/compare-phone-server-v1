import server from "./server";
import ContactRouter from "./presentation/routers/contact/contact_router";
import { GetAllContacts } from "./domain/use_cases/contact/get_all_contacts";
import { CountSearchDevice } from "./domain/use_cases/device/count_search_device";
import { GetCountSearchDevice } from "./domain/use_cases/device/get_count_search_device";
import { ContactRepositoryImpl } from "./domain/repositories/contact/contact_repository";
import { DeviceRepositoryImpl } from "./domain/repositories/device/device_repository";
import { CreateContact } from "./domain/use_cases/contact/create_contact";
import { MongoClient, ServerApiVersion } from "mongodb";
import { DatabaseWrapper } from "./data/interfaces/data_sources/database_wrapper";
import { MongoDBContactDataSource } from "./data/data_sources/mongodb/mongodb_contact_data_source";
import { MongoDBDeviceDataSource } from "./data/data_sources/mongodb/mongodb_device_data_source";
import InitRouter from "./presentation/routers/init/init_router";
import DeviceRouter from "./presentation/routers/device/device_router";
import { CreateDevice } from "./domain/use_cases/device/create_device";
import { GetAllDevices } from "./domain/use_cases/device/get_all_devices";
import * as dotenv from "dotenv";
dotenv.config();

(async () => {
  const client: MongoClient = new MongoClient(
    process.env.DEVICES_DATABASE_URL || ""
  );
  await client.connect();
  const db = client.db("FLOWECH_DEVICES_DB");
  const PORT = 8080;

  const contactDatabase: DatabaseWrapper = {
    findDeviceInDevices: (query) =>
      db.collection("contacts").find(query).toArray(),
    insertOneInDevices: (doc) => db.collection("contacts").insertOne(doc),
    findDeviceInCountSearchDevice: (query) =>
      db.collection("contacts").find(query).toArray(),
    insertOneInCountSearchDevice: (doc) =>
      db.collection("contacts").insertOne(doc),
    updateOneInCountSearchDevice: (query, update) =>
      db.collection("contacts").updateOne(query, update),
    findTopFiveDeviceInCountSearchDevice: (query) =>
      db
        .collection("contacts")
        .find(query)
        .sort({ search_count: -1 })
        .limit(10)
        .toArray(),
  };

  const deviceDatabase: DatabaseWrapper = {
    findDeviceInDevices: (query) =>
      db.collection("devices").find(query).toArray(),
    insertOneInDevices: (doc) => db.collection("devices").insertOne(doc),
    findDeviceInCountSearchDevice: (query) =>
      db.collection("count_search_device").find(query).toArray(),
    insertOneInCountSearchDevice: (doc) =>
      db.collection("count_search_device").insertOne(doc),
    updateOneInCountSearchDevice: (query, update) =>
      db.collection("count_search_device").updateOne(query, update),
    findTopFiveDeviceInCountSearchDevice: (query) =>
      db
        .collection("count_search_device")
        .find(query)
        .sort({ search_count: -1 })
        .limit(10)
        .toArray(),
  };

  const contactMiddleWare = ContactRouter(
    new GetAllContacts(
      new ContactRepositoryImpl(new MongoDBContactDataSource(contactDatabase))
    ),
    new CreateContact(
      new ContactRepositoryImpl(new MongoDBContactDataSource(contactDatabase))
    )
  );

  const deviceMiddleWare = DeviceRouter(
    new CreateDevice(
      new DeviceRepositoryImpl(new MongoDBDeviceDataSource(deviceDatabase))
    ),
    new GetAllDevices(
      new DeviceRepositoryImpl(new MongoDBDeviceDataSource(deviceDatabase))
    ),
    new CountSearchDevice(
      new DeviceRepositoryImpl(new MongoDBDeviceDataSource(deviceDatabase))
    ),
    new GetCountSearchDevice(
      new DeviceRepositoryImpl(new MongoDBDeviceDataSource(deviceDatabase))
    )
  );

  const initMiddleWare = InitRouter();

  server.use("/contact", contactMiddleWare);
  server.use("/device", deviceMiddleWare);
  server.use("/init", initMiddleWare);
  server.listen(PORT, () => console.log(`Running server on port : ${PORT}`));
})();
