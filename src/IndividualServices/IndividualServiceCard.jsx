import { Card, Container } from 'react-bootstrap';
import styles from './IndividualService.module.scss';
import { individualServiceItems } from './IndividualServiceItems';
import { CircleCheck } from 'lucide-react';
import { FaCheckCircle } from "react-icons/fa";



export const IndividualServiceCard = () => {
  return (
    <Container className={`text-center ${styles.wrapper}`}>
      <h2 >ACCOMPAGNEMENT INDIVIDUEL</h2>
      <div className={styles.cardsRow}>
        {individualServiceItems.map((item, index) => (
          <div key={index} className={styles.cardWrapper}>
            <img src={item.image} alt={item.title} className={styles.backgroundImage} />


<Card className={styles.textCard}>
  <Card.Body className={styles.cardBody}>
    <Card.Title className={styles.cardTitle}>
      {item.title.split('\n').map((line, i) => (
        <div key={i}>{line}</div>
      ))}
      <div className={styles.subtitleText}>({item.subtitle})</div>
    </Card.Title>

    <ul className={styles.myList}>
      {item.items.map((text, i) => (
       <li key={i} className={styles.listItem}>
      <FaCheckCircle className={styles.icon} />
      {text}
    </li>
      ))}
    </ul>

    <div className={styles.price}>
      {item.price}
      <br />
       <small className={styles.note}>{item.note}</small>
    </div>
  </Card.Body>
</Card>


            {/* <Card className={styles.textCard}>
           <Card.Body style={{ padding: 0 }}>
<Card.Title>
  {item.title.split('\n').map((line, i) => (
  <div key={i} className={styles.titleLine}>{line}</div>
  ))}
  <br />
  <em className={styles.subtitleText}>({item.subtitle})</em>
</Card.Title>
         <ul className="myList" style={{ textAlign: 'left' }}>
              {item.items.map((text, i) => (
                    <li key={i}>  <IoCheckmarkCircle size={18} />  {text}</li>
                  ))}
                </ul>
                <div className="price mt-4">
                  {item.price}
                  <br />
                  <small className="text-muted">{item.note}</small>
                </div>
              </Card.Body>
            </Card> */}
          </div>
        ))}
      </div>
    </Container>
  );
};



    
// export const IndividualServiceCard = () => {
//   return (
//         <Container className="text-center my-5">
//           <h2>ACCOMPAGNEMENT INDIVIDUEL</h2>
//           <Row className="g-4">
//        {individualServiceItems.map((item, index) => (

//     <Col key={index} className={styles.wrapper}>
//   <img
//     src={item.image}
//     alt={item.title}
//     className={styles.backgroundImage}
//   />
//   <Card className={styles.textCard}>
//     <Card.Body>
//       <Card.Title>
//         {item.title}
//         <br />
//         <em>({item.subtitle})</em>
//       </Card.Title>
//       <ul className="text-start mt-3">
//         {item.items.map((text, i) => (
//           <li key={i}>{text}</li>
//         ))}
//       </ul>
//       <div className="price mt-4">
//         {item.price}
//         <br />
//         <small className="text-muted">{item.note}</small>
//       </div>
//     </Card.Body>
//   </Card>
// </Col>
//      ))}
//         </Row>
//       </Container>
  
//   );
// };


      //   <Card key={item.id} className={styles.card} style={{ width: '22rem' }}>
      //     <Card.Img variant="top" src={item.image} alt="" />

      //     <Card.Body>
      //     <Card.Title className={styles.title}>{item.title}</Card.Title>
      //     <Card.Text className={styles.textTwo}>{item.discription}</Card.Text>
      //     <Card.Text className={styles.text}>  <Pin /> {item.text}</Card.Text>
               
      //       <ListGroup className={styles.listItem}>
      //         {item.details.map((details, index) => (
      //           <ListGroup.Item key={index} className={styles.listItem}>
      //           <CheckCheck /> { details}
      //           </ListGroup.Item>
      //         ))}
      //       </ListGroup>
            
      // <Card.Text  className={styles.listItem} >
      //   <strong>Durée:</strong> {item.period}
      //       </Card.Text>

      //       <Card.Text className={styles.listItem}>
      //      <strong>Tarif : {item.price} </strong> {item.priceDetails}
      //       </Card.Text>
      //     </Card.Body>
      //   </Card>
      // ))}
//       </Row>
//     </Container>
//   );
// };
