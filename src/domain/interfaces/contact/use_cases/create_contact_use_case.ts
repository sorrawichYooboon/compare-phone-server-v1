import { Contact } from "../../../entities/contact/contact";
export interface CreateContactUseCase {
  execute(contact: Contact): Promise<boolean>;
}
