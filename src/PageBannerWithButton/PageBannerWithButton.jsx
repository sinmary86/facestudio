import styles from "./PageBannerWithButton.module.scss";
import { Link } from "react-router-dom";
import bannerBottom from "../Assets/gua-sha-massage-face-tools.png";

export const PageBannerWithButton = () => {
  return (
    <div
      className={styles.bottomBanner}
      style={{ backgroundImage: `url(${bannerBottom})` }}
    >
      <div className={styles.contentBanner}>
        <h5 className={styles.title}>
          Prête à offrir une nouvelle <br />
          vie à votre visage ?{" "}
        </h5>
        <Link to="/contact" className="btn-base btn-light">
          Prendre rendez-vous
        </Link>
      </div>
    </div>
  );
};
