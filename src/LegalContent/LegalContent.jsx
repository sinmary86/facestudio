import { Container } from "react-bootstrap";
import { legalData } from "./LegalData";
import styles from "./LegalContent.module.scss";

export const LegalContentRenderer = ({ type }) => {
  const legalContent = legalData[type];

  return (
    <Container className={`section-wrapper-last ${styles.legalWrapper}`}>
      {legalContent.content}
    </Container>
  );
};
