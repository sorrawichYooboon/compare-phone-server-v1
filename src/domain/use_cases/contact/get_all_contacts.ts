import { Contact } from "../../entities/contact/contact";
import { ContactRepository } from "../../interfaces/contact/repositories/contact_repository";
import { GetAllContactsUseCase } from "../../interfaces/contact/use_cases/get_all_contacts_use_case";

export class GetAllContacts implements GetAllContactsUseCase {
  contactRepository: ContactRepository;
  constructor(contactRepository: ContactRepository) {
    this.contactRepository = contactRepository;
  }

  async execute(): Promise<Contact[]> {
    const result = await this.contactRepository.getContacts();
    return result;
  }
}
