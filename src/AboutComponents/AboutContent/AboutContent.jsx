import Container from "react-bootstrap/Container";
import styles from "./AboutContent.module.scss";

export const AboutContent = () => {
  return (
    <Container className="section-wrapper-first">
      <h2>Qui suis-je?</h2>
      <div className={`wrapper ${styles.gridLayout}`}>
        <div className={styles.imgTallLeft} />

        <div className={styles.textBlockOne}>
          <p>
            Ce que je fais aujourd’hui, je l’ai vécu moi-même. 
            Mon visage a été mon premier terrain. Depuis trois ans, 
            j'accompagne avec passion les entreprises et leurs équipes vers plus de bien-être au quotidien,
           ainsi que les femmes qui souhaitent retrouver un visage plus vivant, plus libre, plus aligné.
           Le visage reflète nos états intérieurs — mais il peut aussi les transformer, quand on apprend
            à en prendre soin.
          </p>
        </div>

        <div className={styles.textBlockTwo}>
          <p>
           Mon histoire a commencé par un moment de vulnérabilité. À une période particulièrement 
           éprouvante de ma vie, submergée par le stress professionnel et personnel, je regardais 
           mon reflet sans plus me reconnaître. Mon visage était devenu étranger : crispé, marqué 
           par la fatigue et l'anxiété. Je ressentais un profond décalage entre mon apparence 
           extérieure et ce que je vivais à l’intérieur.
          </p>
        </div>

        <div className={styles.imgSmallUnderText} />

        <div className={styles.imgTallRight} />

        <div className={styles.fullQuote}>
          <h5 className={styles.quoteText}>
            Mon objectif est d’aider chaque personne à retrouver un visage plus
            détendu, plus lumineux et plus harmonieux, sans chirurgie ni
            injections.
          </h5>
        </div>

        <div className={styles.bottomTextOne}>
          <p>
           C’est dans cette quête pour me reconnecter à moi-même que le Face Yoga 
           est entré dans ma vie. Cette découverte a été une révélation, une façon
            douce et puissante de retrouver mon énergie vitale, mon authenticité et 
            un apaisement durable. Je ne cherchais pas à changer mon visage, mais à y revenir.
             À le réhabiter pleinement.
             Cette méthode agit sur la mémoire musculaire et émotionnelle du visage, 
             que j'enseigne avec précision.{" "}
          </p>
        </div>

        <div className={styles.bottomTextTwo}>
          <p>             
       Aujourd’hui, portée par cette expérience personnelle et une solide expertise, 
       je propose aux entreprises des ateliers humains et ciblés pour libérer les
       tensions du quotidien : fatigue visuelle, stress, manque de présence, surcharge mentale. 
       J’accompagne aussi les particuliers avec des séances sur mesure pour un visage aligné,
        apaisé et rayonnant. Et si votre visage reflétait votre énergie véritable ?
          </p>
        </div>
      </div>
    </Container>
  );
};
