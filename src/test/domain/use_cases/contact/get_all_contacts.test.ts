import { Contact } from "../../../../domain/entities/contact/contact";
import { ContactRepository } from "../../../../domain/interfaces/contact/repositories/contact_repository";
import { GetAllContacts } from "../../../../domain/use_cases/contact/get_all_contacts";

describe("Get All Contacts Use Case", () => {
  class MockContactRepository implements ContactRepository {
    createContact(contact: Contact): Promise<boolean> {
      throw new Error("Method not implemented.");
    }
    getContacts(): Promise<Contact[]> {
      throw new Error("Method not implemented.");
    }
  }
  let mockContactRepository: ContactRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockContactRepository = new MockContactRepository();
  });

  test("should return data", async () => {
    const ExpectedResult = [
      { id: "1", surname: "Smith", firstName: "John", email: "john@gmail.com" },
    ];

    jest
      .spyOn(mockContactRepository, "getContacts")
      .mockImplementation(() => Promise.resolve(ExpectedResult));
    const getAllContactsUse = new GetAllContacts(mockContactRepository);
    const result = await getAllContactsUse.execute();
    expect(result).toStrictEqual(ExpectedResult);
  });
});
