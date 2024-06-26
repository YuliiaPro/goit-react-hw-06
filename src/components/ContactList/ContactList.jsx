import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
  return (
    <>
      <ul className={css.container}>
        {visibleContacts.map((contactItem) => (
          <li className={css.item} key={contactItem.id}>
            <Contact contact={contactItem} />
          </li>
        ))}
      </ul>
    </>
  );
}
