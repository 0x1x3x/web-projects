import styles from "./Search.module.scss";

function Search(props) {
  return (
    <div className={styles.search}>
      <img width={18} height={18} src="img/search.png" alt="" />
      <input placeholder="Search..." />
    </div>
  );
}

export default Search;
