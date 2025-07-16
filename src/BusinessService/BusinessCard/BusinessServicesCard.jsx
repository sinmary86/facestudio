import { Container } from 'react-bootstrap';
import styles from './BusinessServices.module.scss';
import { businessServicesItems } from './BusinessServicesItems';


export const BusinessServicesCard = () => {
  return (
    <Container className={`${styles.wrapperFull}`}>
      
      <h2>INTERVENTIONS EN ENTREPRISE</h2>
      
      <div className={`d-flex flex-wrap justify-content-between ${styles.wrapper}`}>
        {businessServicesItems.map((item, index) => (
          <div key={index} className="card-wrapper">
            <img src={item.image} alt={item.alt} className="image-card" />
         <div className="body-card">
                <div className='text-center'>
                  <h4 className="card-title">{item.title}</h4>
                  <h5 className="card-subtitle">{item.subtitle}</h5>
                </div>

                <ul className="d-flex flex-column card-list">
                  {item.items.map((text, i) => (
                  <li key={i}><span>✓</span>{text}</li>
                  ))}
                </ul>

                <p className="text-center card-note">{item.note}</p>
         </div>
         </div>
        ))}
      </div>
    </Container>
  );
};


