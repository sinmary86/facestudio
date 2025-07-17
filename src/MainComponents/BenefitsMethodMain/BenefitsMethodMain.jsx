import { Container } from "react-bootstrap";

export const BenefitsMethodMain = () => {
  return (
    <Container className="section-wrapper-last">
      <h2>Pourquoi choisir ma méthode?</h2>

      <ol className="wrapper grid-list-numbers gy-4 gy-lg-0">
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
