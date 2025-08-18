import Tonification from "../../Assets/tonification-icon.svg";
import BienEtre from "../../Assets/bien-etre-icon.svg";
import AntiAge from "../../Assets/anti-age-icon.svg";

export const ProgramModulesData = [
    {
       description :(
    <>Ateliers: posture, {" "}<span className="d-none d-md-inline"><br /></span>
        relaxation et respiration
       </>
    ),
       icon: Tonification,
    },
        {
       description :(
    <>Séances express:  {" "}<span className="d-none d-md-inline"><br /></span>
       gym faciale anti-fatigue
       </>
    ),
       icon: BienEtre,
    },
        {
       description :(
    <>Modules prévention  {" "}<span className="d-none d-md-inline"><br /></span>
       TMS et surcharge mentale
       </>
    ),
       icon: AntiAge,
    }
]
