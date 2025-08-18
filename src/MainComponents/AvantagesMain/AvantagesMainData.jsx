import Tonification from "../../Assets/tonification-icon.svg";
import BienEtre from "../../Assets/bien-etre-icon.svg";
import AntiAge from "../../Assets/anti-age-icon.svg";

export const AvantagesMainData = [
  {
    title: "Tonification",
    description:(
      <>
      Raffermit et redessine  {" "}<span className="d-none d-md-inline"><br /></span>
      le visage sans chirurgie ni injections
      </>
      ),
    icon: Tonification,
  },
  {
    title: "Bien être",
    description:(
      <>
      Détend les tensions et équilibre {" "}<span className="d-none d-md-inline"><br /></span>
      les expressions pour une harmonie
     </>
      ),
    icon: BienEtre,
  },
  {
    title: "Anti-âge",
    description:(
      <>
      Lisse les rides et ravive l’éclat {" "}<span className="d-none d-md-inline"><br /></span>
      et redonne le volume au visage
      </>
      ),
    icon: AntiAge,
  },
];
