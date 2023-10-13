import { ContactDataSource } from "../../../data/interfaces/data_sources/contact_data_source";
import { Contact } from "../../entities/contact/contact";
import { ContactRepository } from "../../interfaces/contact/repositories/contact_repository";

export class ContactRepositoryImpl implements ContactRepository {
  contactDataSource: ContactDataSource;
  constructor(contactDataSource: ContactDataSource) {
    this.contactDataSource = contactDataSource;
  }

  async createContact(contact: Contact): Promise<boolean> {
    const result = await this.contactDataSource.create(contact);
    return result;
  }
  async getContacts(): Promise<Contact[]> {
    const result = await this.contactDataSource.getAll();
    return result;
  }
}
