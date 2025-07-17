import { Container } from "react-bootstrap";

export const WorkshopsTargetGroup = () => {
  return (
    <Container className="section-wrapper-last">
      <h2>Ces ateliers sont pour vous si:</h2>

      <ol className="wrapper grid-list-numbers gy-4 gy-lg-0">
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
