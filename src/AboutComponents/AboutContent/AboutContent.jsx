import Container from "react-bootstrap/Container";
import styles from "./AboutContent.module.scss";

export const AboutContent = () => {
  return (
    <Container className={styles.myGridSection}>
      <h2>Qui suis-je?</h2>
      <div className={styles.gridLayout}>
        <div className={styles.imgTallLeft} />

        <div className={styles.textBlockOne}>
          <p>
            En face fitness depuis trois ans, j'ai le plaisir d'accompagner des
            personnes dans leur quête d'un visage tonifié et rayonnant. Ma
            passion pour le bien-être du visage m'a conduite à me certifier en
            face yoga et face fitness et à maîtriser les étirements spécifiques
            des muscles faciaux. Cette expertise, enrichie par une connaissance
            approfondie de l'anatomie faciale, me permet de vous proposer des
            programmes sur mesure, adaptés à vos besoins et objectifs.
          </p>
        </div>

        <div className={styles.textBlockTwo}>
          <p>
            Passionnée par le bien-être et la beauté naturelle, j’utilise une
            méthode unique qui allie tonicité, relaxation et correction des
            tensions faciales. Mon approche est avant tout humaine et
            bienveillante. Je crée un espace d'apprentissage convivial où chaque
            séance devient un moment privilégié de détente et de découverte de
            soi. Ensemble, nous travaillerons main dans la main pour révéler
            votre éclat naturel, tout en respectant votre rythme et vos
            aspirations.
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
            En face fitness depuis trois ans, j'ai le plaisir d'accompagner des
            personnes dans leur quête d'un visage tonifié et rayonnant. Ma
            passion pour le bien-être du visage m'a conduite à me certifier en
            face yoga et face{" "}
          </p>
        </div>

        <div className={styles.bottomTextTwo}>
          <p>
            En face fitness depuis trois ans, j'ai le plaisir d'accompagner des
            personnes dans leur quête d'un visage tonifié et rayonnant. Ma
            passion pour le bien-être du visage m'a conduite à me certifier en
            face yoga et face
          </p>
        </div>
      </div>
    </Container>
  );
};
