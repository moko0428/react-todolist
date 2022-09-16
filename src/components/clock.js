import styles from "../styles/clock.module.css";

const weekDay = ["일", "월", "화", "수", "목", "금", "토"];

const date = new Date();
const hour = String(date.getHours()).padStart(2, "0");
const minute = String(date.getMinutes()).padStart(2, "0");
const second = String(date.getSeconds()).padStart(2, "0");
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const week = weekDay[date.getDay()];

function clock() {
  return (
    <div className={styles.date__wrapper}>
      <span className={styles.date__clock}>
        {hour}:{minute}:{second}
      </span>
      <span className={styles.date__date}>
        {year}년 {month}월 {day}일 {week}요일
      </span>
    </div>
  );
}

export default clock;
