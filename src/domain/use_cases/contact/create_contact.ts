import { Contact } from "../../entities/contact/contact";
import { ContactRepository } from "../../interfaces/contact/repositories/contact_repository";
import { CreateContactUseCase } from "../../interfaces/contact/use_cases/create_contact_use_case";

export class CreateContact implements CreateContactUseCase {
  contactRepository: ContactRepository;
  constructor(contactRepository: ContactRepository) {
    this.contactRepository = contactRepository;
  }

  async execute(contact: Contact): Promise<boolean> {
    const result = await this.contactRepository.createContact(contact);
    return result;
  }
}
