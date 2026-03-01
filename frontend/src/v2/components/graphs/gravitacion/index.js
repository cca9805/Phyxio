import LeyDeGravitacionUniversalGraphsCoord from "./LeyDeGravitacionUniversalGraphsCoord";
import CampoYPotencialGravitatorioGraphsCoord from "./CampoYPotencialGravitatorioGraphsCoord";
import EnergiaPotencialGravitatoriaGravGraphsCoord from "./EnergiaPotencialGravitatoriaGravGraphsCoord";
import VelocidadOrbitalGraphsCoord from "./VelocidadOrbitalGraphsCoord";
import VelocidadOrbitalGraphsSvg from "./VelocidadOrbitalGraphsSvg";
import EnergiaOrbitalGraphsCoord from "./EnergiaOrbitalGraphsCoord";
import EnergiaOrbitalGraphsSvg from "./EnergiaOrbitalGraphsSvg";
import LeyesDeKeplerGraphsCoord from "./LeyesDeKeplerGraphsCoord";
import LeyesDeKeplerGraphsSvg from "./LeyesDeKeplerGraphsSvg";
import MareasYPerturbacionesGraphsCoord from "./MareasYPerturbacionesGraphsCoord";

export const graphs = {
  "ley-de-gravitacion-universal": {
    Coord: LeyDeGravitacionUniversalGraphsCoord,
  },
  "fisica-clasica/mecanica/gravitacion/ley-de-gravitacion-universal": {
    Coord: LeyDeGravitacionUniversalGraphsCoord,
  },
  "campo-y-potencial-gravitatorio": {
    Coord: CampoYPotencialGravitatorioGraphsCoord,
  },
  "fisica-clasica/mecanica/gravitacion/campo-y-potencial-gravitatorio": {
    Coord: CampoYPotencialGravitatorioGraphsCoord,
  },
  // Ruta completa para evitar colisionar con el leaf homonimo de trabajo y energia.
  "fisica-clasica/mecanica/gravitacion/energia-potencial-gravitatoria": {
    Coord: EnergiaPotencialGravitatoriaGravGraphsCoord,
  },
  "velocidad-orbital": {
    Coord: VelocidadOrbitalGraphsCoord,
    Svg: VelocidadOrbitalGraphsSvg,
  },
  "fisica-clasica/mecanica/gravitacion/orbitas-y-satelites/velocidad-orbital": {
    Coord: VelocidadOrbitalGraphsCoord,
    Svg: VelocidadOrbitalGraphsSvg,
  },
  "energia-orbital": {
    Coord: EnergiaOrbitalGraphsCoord,
    Svg: EnergiaOrbitalGraphsSvg,
  },
  "fisica-clasica/mecanica/gravitacion/orbitas-y-satelites/energia-orbital": {
    Coord: EnergiaOrbitalGraphsCoord,
    Svg: EnergiaOrbitalGraphsSvg,
  },
  "leyes-de-kepler": {
    Coord: LeyesDeKeplerGraphsCoord,
    Svg: LeyesDeKeplerGraphsSvg,
  },
  "fisica-clasica/mecanica/gravitacion/orbitas-y-satelites/leyes-de-kepler": {
    Coord: LeyesDeKeplerGraphsCoord,
    Svg: LeyesDeKeplerGraphsSvg,
  },
  "mareas-y-perturbaciones": {
    Coord: MareasYPerturbacionesGraphsCoord,
  },
  "fisica-clasica/mecanica/gravitacion/mareas-y-perturbaciones": {
    Coord: MareasYPerturbacionesGraphsCoord,
  },
};
