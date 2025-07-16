import styles from "./FloatingButton.module.scss";
import telegram from "../Assets/telegram-floating-icon.png";

export const FloatingButton = () => {
  return (
    <a
      href="https://t.me/boost/visagepanouinatalia"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btnFloat}
      aria-label="Связаться в Telegram"
    >
      <img src={telegram} alt="Telegram" />
    </a>
  );
};
