import Accordion from 'react-bootstrap/Accordion';
import { AccordionItems } from './AccordionItems';
import styles from './Accordion.module.scss';
import { Container } from 'react-bootstrap';

export const AccordionList = () => {
  return (
    <Container className={styles.wrapperFull}>
      <h2 >FAQ – Tout sur le Face Fitness</h2>
      <Accordion defaultActiveKey="0" className={styles.accordionContainer}>
        {AccordionItems.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index} className={styles.accordionItem}>
            <Accordion.Header className={styles.accordionTitle}>{item.title}</Accordion.Header>
            <Accordion.Body  >{item.content}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};