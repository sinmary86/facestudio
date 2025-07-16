import styles from "./BenefitsMethodMain.module.scss";
import { Container } from "react-bootstrap";

export const BenefitsMethodMain = () => {
  return (
    <Container className={styles.wrapperFull}>
      <h2>Pourquoi choisir ma méthode?</h2>

      <ol className="grid-list-numbers">
        <li>
          <span className="big-number">01</span>
          Atténuer en douceur les signes de fatigue et de tension.
        </li>

        <li>
          <span className="big-number">02</span>
          Mettre en valeur votre beauté naturelle et votre symétrie.
        </li>

        <li>
          <span className="big-number">03</span>
          Libérer les tensions musculaires et les mimiques néfastes.
        </li>

        <li>
          <span className="big-number">04</span>
          Ressentir de la légèreté, de la clarté et de la confiance.
        </li>
      </ol>
    </Container>
  );
};
