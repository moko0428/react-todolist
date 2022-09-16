import styles from "../styles/loading.module.css";
function loading() {
  return (
    <div className={styles.loader}>
      <span>Loading...</span>
    </div>
  );
}
export default loading;
