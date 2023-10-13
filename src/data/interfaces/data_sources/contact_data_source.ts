import { Contact } from "../../../domain/entities/contact/contact";
export interface ContactDataSource {
  create(contact: Contact): Promise<boolean>;
  getAll(): Promise<Contact[]>;
}
