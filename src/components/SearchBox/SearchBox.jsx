import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <>
      <label className={css.container}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
      </label>
    </>
  );
}
