import HaveContacts from "./haveContact";
import NoContacts from "./noContacts";

function ContactList({ contacts, setContacts }) {
  function deleteHandler(deleteContact) {
    let newContacts = contacts.filter((contact) => contact !== deleteContact);
    setContacts(newContacts);
  }
  return (
    <>
      <h1 className="mt-12 mb-4 text-xl font-semibold text-blue-800">
        Contacts List
      </h1>

      {contacts.length >= 1 ? (
        <section className="px-4 py-4 space-y-2 border-2 border-gray-200 rounded-lg">
          {contacts.map((contact) => (
            <HaveContacts
              contact={contact}
              key={contact.id}
              deleteHandler={deleteHandler}
            />
          ))}
          <section />
        </section>
      ) : (
        <NoContacts />
      )}
    </>
  );
}

export default ContactList;
