import Tonification from "../../Assets/tonification-icon.svg";
import BienEtre from "../../Assets/bien-etre-icon.svg";
import AntiAge from "../../Assets/anti-age-icon.svg";

export const WhyGroupData = [
  {
    description: (
    <>
    Un relâchement {" "}<span className="d-none d-md-inline"><br /></span>
    hebdomadaire du visages
     </>
    ),
    icon: Tonification,
  },
  {
    description:(
    <>Une routine visage, {" "}<span className="d-none d-md-inline"><br /></span>
    adaptée à votre rythme et votre état
     </>
    ),
    icon: BienEtre,
  },
  {
    description:(
    <>Soutien dans {" "}<span className="d-none d-md-inline"><br /></span>
    une communauté bienveillante
     </>
    ),
    icon: AntiAge,
  },
];
