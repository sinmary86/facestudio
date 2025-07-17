import { Container } from 'react-bootstrap';
import { groupServicesItems } from "./GroupServicesItems.js";

export const GroupServicesCard = () => {
  return (

    <Container className="section-wrapper-first">
      
      <h2>COURS EN GROUPE – Clubs en ligne</h2>

      <div className="d-flex flex-wrap justify-content-between wrapper">
        {groupServicesItems.map((item, index) => (

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

                <div className='text-center'>
                  <h2 className="card-price">{item.price}</h2>
                  <p className="card-note">{item.note}</p>
                </div>

             </div>
         </div>

        ))}
      </div>
    </Container>
  );
};
