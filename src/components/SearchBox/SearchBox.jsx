import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";

import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const filterContacts = (event) => dispatch(changeFilter(event.target.value));
  return (
    <>
      <label className={css.container}>
        Find contacts by name
        <input type="text" value={filter} onChange={filterContacts} />
      </label>
    </>
  );
}
