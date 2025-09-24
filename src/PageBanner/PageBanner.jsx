import styles from "./PageBanner.module.scss";

export const PageBanner = ({ background, title }) => {

  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};
