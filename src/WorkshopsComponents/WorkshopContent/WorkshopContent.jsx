import Container from "react-bootstrap/Container";
import styles from "./WorkshopContent.module.scss";

export const WorkshopContent = () => {
  return (
    <Container className="section-wrapper-first">
      <h2>Ateliers</h2>
      <div className={`wrapper ${styles.gridLayout}`}>
        <div className={styles.imgTallLeft} />

        <div className={styles.textBlockOne}>
          <p>
            Ateliers dynamiques en groupe, où nous analysons pourquoi le visage
            paraît fatigué, pourquoi vous ne reconnaissez plus votre reflet dans
            le miroir, et nous apprenons des techniques simples qui redonnent à
            la peau fraîcheur et éclat.
          </p>
        </div>

        <div className={styles.textBlockTwo}>
          <p>
            Format : en ligne ou en présentiel <br />
            Durée : 1 – 2 h (selon le thème)
          </p>
        </div>

        <div className={styles.textBlockThree}>
          <p className={styles.price}>15 €</p>
          <span className={styles.spanText}>(par participant)</span>
        </div>

        <div className={styles.imgSmallBetweenText} />

        <div className={styles.fullQuote}>
          <h5 className={styles.quoteText}>
            Tensions faciales, poches sous les yeux, front froncé — c’est le
            langage du corps. Lors de l’atelier, nous traduirons ce langage en
            mots simples et vous donnerons des astuces utiles.
          </h5>
        </div>

        <div className={styles.textTallRight}>
          <h3 className={styles.title}>Thèmes populaires</h3>

          <h4>Pourquoi le visage change-t-il?</h4>
          <p>Décodage des causes + 3 étapes pour inverser le processus</p>

          <h4>Stop aux gonflements</h4>
          <p>
            Sprint de drainage lymphatique + comment se réveiller sans poches ni
            œdèmes
          </p>

          <h4>Comment relâcher les tensions faciales et lisser le visage </h4>
          <p>
            Éliminer les grimaces réflexes tout en gardant une expression
            vivante
          </p>

          <h4>Front & regard : liberté de la zone supérieure </h4>
          <p>
            Respiration, pleine conscience et automassage pour un regard ouvert
            et apaisé
          </p>
        </div>
      </div>
    </Container>
  );
};
