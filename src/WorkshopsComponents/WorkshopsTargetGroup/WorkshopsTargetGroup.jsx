import styles from "./WorkshopsTargetGroup.module.scss";
import { Container } from "react-bootstrap";

export const WorkshopsTargetGroup = () => {
  return (
    <Container className={styles.wrapperFull}>
      <h2>Ces ateliers sont pour vous si:</h2>

      <ol className="grid-list-numbers">
        <li>
          <span className="big-number">01</span>
          Vous avez l’impression que votre reflet ne vous ressemble plus tout à
          fait.
        </li>

        <li>
          <span className="big-number">02</span>
          Vous aspirez à une approche douce, naturelle et consciente, loin des
          solutions invasives.
        </li>

        <li>
          <span className="big-number">03</span>
          Vous rêvez d’un visage détendu, lumineux, plein d’expression et de
          vie.
        </li>

        <li>
          <span className="big-number">04</span>
          Vous êtes curieuse de décoder les messages subtils que votre visage
          envoie chaque jour.
        </li>
      </ol>
    </Container>
  );
};
