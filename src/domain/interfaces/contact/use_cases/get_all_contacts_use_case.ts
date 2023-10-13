import { Contact } from "../../../entities/contact/contact";
export interface GetAllContactsUseCase {
  execute(): Promise<Contact[]>;
}
