//
// Gráfico SVG dedicado: Ecuación de Navier-Stokes (Intro)
// Delega en SvgProfileRenderer con el profile propio del leaf.
//
import profile from "@/v2/components/SVG/profiles/navier-stokes-intro.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";



const NavierStokesIntroGraphsSvg = createSvgGraph({
  profile,
  displayName: "NavierStokesIntroGraphsSvg",
});

NavierStokesIntroGraphsSvg.profile = profile;


export default NavierStokesIntroGraphsSvg;
