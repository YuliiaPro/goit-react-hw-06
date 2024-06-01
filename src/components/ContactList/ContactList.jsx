import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  return (
    <>
      <ul className={css.container}>
        {contacts.map((contactItem) => (
          <li className={css.item} key={contactItem.id}>
            <Contact contact={contactItem} />
          </li>
        ))}
      </ul>
    </>
  );
}

// export default function ContactList({ contacts, onDelete }) {
//   return (
//     <>
//       <ul className={css.container}>
//         {contacts.map((contactItem) => (
//           <li className={css.item} key={contactItem.id}>
//             <Contact contact={contactItem} onDelete={onDelete} />
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
