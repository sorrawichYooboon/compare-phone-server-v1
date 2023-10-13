import { Contact } from "../../../entities/contact/contact";
export interface ContactRepository {
  createContact(contact: Contact): Promise<boolean>;
  getContacts(): Promise<Contact[]>;
}
