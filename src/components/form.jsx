import { useState } from "react";
import ContactList from "./contactList";
import inputs from "./constant/inputArray.js";
import { v4 } from "uuid";
import HaveContacts from "./haveContact.jsx";
import NoContacts from "./noContacts.jsx";
function Form() {
  let [fill, setFill] = useState(true);
  let [contacts, setContacts] = useState([]);
  let [form, setForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });

  function changeHandler(event) {
    let name = event.target.name;
    let value = event.target.value;
    setForm((form) => ({ ...form, [name]: value }));
  }

  function formHandler(event) {
    event.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.number) {
      setFill(false);
      return;
    }

    const newForm = { ...form, id: v4() };
    setContacts((contacts) => [...contacts, newForm]);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      number: "",
    });
    setFill(true);
  }

  return (
    <>
      <form
        autoComplete="off"
        className="md:grid md:grid-col-2 gap-4 p-8  rounded-lg  shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] "
      >
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            className="form-item"
            onChange={changeHandler}
            value={form[input.name]}
          />
        ))}
        <input
          type="submit"
          value="Add Contact"
          onClick={formHandler}
          className="w-full col-span-2 px-4 py-2 text-white transition-all duration-300 ease-in-out bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 hover:shadow-md"
        />
      </form>

      {!fill ? (
        <div className="px-4 py-2 my-4 tracking-wide text-red-500 bg-red-100 rounded-lg">
          <p>Please fill out all required fields.</p>
        </div>
      ) : null}
      <ContactList
        contacts={contacts}
        isFill={fill}
        setContacts={setContacts}
      />
    </>
  );
}

export default Form;
