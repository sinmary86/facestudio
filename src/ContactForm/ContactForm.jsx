import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from '@formspree/react';
import styles from './ContactForm.module.scss';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


//TODO - зарегистрировать клиента на FORMSPREE

export const ContactForm = () => {
  
  const [state, formspreeSubmit] = useForm("mqabpjpd");
  const [validated, setValidated] = useState(false);


  const handleSubmit = async (event) => {
  event.preventDefault();
  const form = event.currentTarget;

  const isValid = form.checkValidity();
  setValidated(true);

  if (!isValid) return;

  const formData = new FormData(form);
  await formspreeSubmit(Object.fromEntries(formData.entries()));

  // ✅ показываем alert не через result, а через state.succeeded
  // но через useEffect, потому что state обновляется после submit
};

useEffect(() => {
  if (state.succeeded) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Votre message a été envoyé !',
      text: "Je réponds personnellement à chaque demande sous 24 à 48h. À très vite pour prendre soin de votre visage avec douceur et expertise!",
      showConfirmButton: false,
      timer: 2000,
    });
  }
}, [state.succeeded]);


  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className={styles.formContainer}>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nom complet:</Form.Label>
          <Form.Control
            required
            name="name"
            type="text"
            placeholder="Entrez votre nom"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Adresse e-mail:</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Entrez votre adresse e-mail"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Numéro de téléphone:</Form.Label>
          <Form.Control
            name="phone"
            type="tel"
            placeholder="Entrez votre numéro de téléphone"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
  <Form.Group as={Col} md="6" controlId="serviceSelect">
    <Form.Label>Quel service vous intéresse ?</Form.Label>
    <Form.Select name="service">
      <option value="">Choisissez un service</option>
      <option value="1">Séance individuelle</option>
      <option value="2">Cours en groupe</option>
      <option value="3">Atelier</option>
      <option value="4">Séance SOS Beauté</option>
      <option value="5">Intervention en entreprise</option>
      <option value="6">Autre (précisez)</option>
    </Form.Select>
  </Form.Group>

  <Form.Group as={Col} md="6" controlId="timeSelect">
    <Form.Label>Préférez-vous un rendez-vous en journée ou en soirée ?</Form.Label>
    <Form.Select name="time">
      <option value="">Choisissez un créneau</option>
      <option value="1">Matin</option>
      <option value="2">Après-midi</option>
      <option value="3">Soirée</option>
      <option value="4">Indifférent</option>
    </Form.Select>
  </Form.Group>
</Row>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Votre message / question:</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          required
          name="consent"
          label="Je consens à ce que mes données soient utilisées pour être contacté(e) dans le cadre de cette demande"
          feedback="Vous devez accepter avant de soumettre!"
          feedbackType="invalid"
        />
      </Form.Group>
      
      <button type="submit" disabled={state.submitting} className={styles.btn}>Envoyer</button>
    </Form>
  );
    };
