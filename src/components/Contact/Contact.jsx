import { useDispatch } from "react-redux";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { onDelete } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(onDelete(id));
  return (
    <div className={css.container}>
      <div>
        <p>
          <IoPerson className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>

      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

// export default function Contact({ contact: { id, name, number }, onDelete }) {
//   return (
//     <div className={css.container}>
//       <div>
//         <p>
//           <IoPerson className={css.icon} />
//           {name}
//         </p>
//         <p>
//           <FaPhoneAlt className={css.icon} />
//           {number}
//         </p>
//       </div>

//       <button className={css.btn} onClick={() => onDelete(id)}>
//         Delete
//       </button>
//     </div>
//   );
// }
