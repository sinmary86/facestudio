import uniqueMethode from "../../Assets/methode-uniq-icon.svg";
import naturelleMethode from "../../Assets/naturelle-icon.svg";
import personnalisation from "../../Assets/personnalisation-icon.svg";
import experience from "../../Assets/experience-icon.svg";

export const AboutFeaturesData = [
  {
    title: (
      <>
        Méthode unique{" "}
        <span className="d-none d-md-inline">
          <br />
        </span>
        et complète
      </>
    ),
    description: (
      <>
        Face Fitness, Yoga, Relaxation{" "}
        <span className="d-none d-md-inline">
          <br />
        </span>
        pour des résultats optimaux
      </>
    ),
    icon: uniqueMethode,
  },
  {
    title: (
      <>
        Approche{" "}
        <span className="d-none d-md-inline">
          <br />
        </span>
        100% naturelle
      </>
    ),
    description: (
      <>
        Sans chirurgie, sans injections:{" "}
        <span className="d-none d-md-inline">
          <br />
        </span>
        des exercices doux et efficaces
      </>
    ),
    icon: naturelleMethode,
  },
  {
    title: (
      <>
        Personnalisation{" "}
        <span className="d-none d-md-inline">
          <br />
        </span>
        des séances
      </>
    ),
    description: (
      <>
        Un accompagnement adapté{" "}
        <span className="d-none d-md-inline">
          <br />
        </span>
        à vos besoins et morphologie
      </>
    ),
    icon: personnalisation,
  },
  {
    title: (
      <>
        Expérience{" "}
        <span className="d-none d-md-inline">
          <br />
        </span>
        et formation
      </>
    ),

    description: (
      <>
        Formée auprès d'experts en Face{" "}
        <span className="d-none d-md-inline">
          <br />
        </span>
        Fitness et bien-être facial
      </>
    ),
    icon: experience,
  },
];
