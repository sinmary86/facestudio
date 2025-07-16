import { Col, Container, Row } from "react-bootstrap";
import guasha from "../Assets/massage-du-visage-gua-sha.jpg";
import quotes from "../Assets/quotes.svg";
import arrow from "../Assets/arrow-icon.svg";
import Slider from "react-slick";
import { feedbackData } from "./FeedbackSliderData";
import styles from "./FeedbackSlider.module.scss";
import { useRef } from "react";

const PrevArrow = (props) => (
  <button
    className={`${styles.arrowBtn} ${styles.btnPrev}`}
    onClick={props.onClick}
  >
    <img src={arrow} alt="précédent" />
  </button>
);

const NextArrow = (props) => (
  <button
    className={`${styles.arrowBtn} ${styles.btnNext}`}
    onClick={props.onClick}
  >
    <img src={arrow} alt="suivant" />
  </button>
);

export const FeedbackSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
    arrows: false,
  };

  return (
    <Container className={styles.wrapperFull}>
      <h2>Ce que nos clients disent de nous</h2>
      <Row>
        <Col md={6}>
          <img
            src={guasha}
            alt="Massage du visage Gua Sha"
            className={styles.imageBig}
          />
        </Col>

        <Col md={6} className={styles.feedbackWrapper}>
          <img src={quotes} alt="quotes" className={styles.quotes} />

          <Slider {...settings} ref={sliderRef}>
            {feedbackData.map((feedback, id) => (
              <div key={id} className={styles.sliderContainer}>
                <p>{feedback.text}</p>
                <h4>{feedback.name}</h4>
                <p className="text-muted">{feedback.age} ANS</p>
              </div>
            ))}
          </Slider>

          <div className={styles.containerButtons}>
            <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            <NextArrow onClick={() => sliderRef.current?.slickNext()} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
