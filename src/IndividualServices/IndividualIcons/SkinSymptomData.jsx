import Tonification from "../../Assets/tonification-icon.svg";
import BienEtre from "../../Assets/bien-etre-icon.svg";
import AntiAge from "../../Assets/anti-age-icon.svg";

export const SkinSymptomData = [
  {
    description: (
      <>
        Des rides et de fines{" "}
        <span className="d-none d-md-inline">
          <br />
        </span>
        lignes commencent à apparaître
      </>
    ),
    icon: Tonification,
  },
  {
    description: (
      <>
        La peau perd en fermeté,{" "}
        <span className="d-none d-md-inline">
          <br />
        </span>
        avec une sensation de relâchement
      </>
    ),
    icon: BienEtre,
  },
  {
    description: (
      <>
        Le visage devient{" "}
        <span className="d-none d-md-inline">
          <br />
        </span>
        asymétrique, tendu ou crispé
      </>
    ),
    icon: AntiAge,
  },
];
