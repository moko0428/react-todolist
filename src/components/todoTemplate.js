import styles from "../styles/todoTemplate.module.css";

function todoTemplate({ children }) {
  return (
    <todoTemplateBlock className={styles.template}>
      {children}
    </todoTemplateBlock>
  );
}
export default todoTemplate;
