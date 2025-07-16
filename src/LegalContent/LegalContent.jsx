import { Container } from "react-bootstrap";
import { legalData } from "./LegalData";
import styles from "./LegalContent.module.scss";

//TODO - заменить Page introuvable на страницу ошибки

export const LegalContentRenderer = ({ type }) => {
  const legalContent = legalData[type];

  if (!legalContent) {
    return <p>Page introuvable.</p>;
  }

  return (
    <Container className={styles.container}>{legalContent.content}</Container>
  );
};
