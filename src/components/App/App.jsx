// import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
// import dataContacts from "../../contacts.json";
import css from "./App.module.css";

// const savedContacts = localStorage.getItem("saved-contacts");

export default function App() {
  //   const [contacts, setContacts] = useState(
  //     savedContacts > dataContacts ? JSON.parse(savedContacts) : dataContacts
  //   );
  //   const [filter, setFilter] = useState("");

  //   const addContact = (newContact) => {
  //     setContacts((prevContacts) => {
  //       return [...prevContacts, newContact];
  //     });
  //   };

  //   const deleteContact = (contactId) => {
  //     setContacts((prevContacts) => {
  //       return prevContacts.filter((contact) => contact.id !== contactId);
  //     });
  //   };

  //   const visibleContacts = contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  //   useEffect(() => {
  //     localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  //     return () => {};
  //   }, [contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />

      {/* <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} /> */}
      {/* <ContactList contacts={visibleContacts} onDelete={deleteContact} /> */}
    </div>
  );
}
