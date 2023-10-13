import { ContactDataSource } from "../../interfaces/data_sources/contact_data_source";
import { DatabaseWrapper } from "../../interfaces/data_sources/database_wrapper";
import { Contact } from "./models/contact";

export class MongoDBContactDataSource implements ContactDataSource {
  private database: DatabaseWrapper;
  constructor(database: DatabaseWrapper) {
    this.database = database;
  }
  async create(contact: Contact): Promise<boolean> {
    const result = await this.database.insertOneInDevices(contact);
    return result !== null;
  }

  async getAll(): Promise<Contact[]> {
    const result = await this.database.findDeviceInDevices({});
    return result.map((item) => ({
      id: item._id.toString(),
      surname: item.surname,
      firstName: item.firstName,
      email: item.email,
    }));
  }
}
