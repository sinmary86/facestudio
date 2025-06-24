import Accordion from 'react-bootstrap/Accordion';
import { AccordionItems } from './AccordionItems';
import styles from './Accordion.module.scss';

export const AccordionList = () => {
  return (
    <Accordion defaultActiveKey="0" className={styles.accordionContainer}>
      {AccordionItems.map((item, index) => (
        <Accordion.Item eventKey={index.toString()} key={index} className={styles.accordionItem}>
          <Accordion.Header className={styles.accordionTitle}>{item.title}</Accordion.Header>
          <Accordion.Body  >{item.content}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};