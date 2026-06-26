# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: gas-de-electrones
# Target response file: modelos.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Electron Gas
## Ideal model
The ideal model treats conduction electrons as a free, homogeneous, three-dimensional quantum gas in equilibrium. The organizing variable is [[densidad_electronica]], obtained from [[numero_electrones]] and [[volumen]]. When [[densidad_electronica]] increases, Pauli exclusion forces higher-momentum states to be occupied, so [[energia_fermi]], [[temperatura_fermi]], and [[velocidad_fermi]] increase. The occupation of a specific state is described by [[ocupacion_estado]], using [[energia_estado]], [[potencial_quimico]], and [[temperatura_absoluta]].

## Hypotheses
- Free electrons: if the lattice potential dominates, band structure replaces the free-gas picture.
- Three-dimensional system: if the system is 2D or 1D, state counting changes.
- Nonrelativistic regime: if [[velocidad_fermi]] approaches the speed of light, the kinetic-energy model fails.
- Thermal equilibrium: without well-defined [[temperatura_absoluta]] and [[potencial_quimico]], {{f:ocupacion_fermi_dirac_electrones}} is not a static distribution.
- Known mass: using [[masa_electron]] is valid only when no effective mass is needed.

## Quantitative validity domain
The free 3D model is reasonable for [[densidad_electronica]] of order 10²⁶ to 10²⁹ m⁻³ in simple metals and dense nonrelativistic plasmas. For a degenerate electron gas, [[temperatura_absoluta]] should be much lower than, or at least comparable with, [[temperatura_fermi]]. One also expects positive [[energia_fermi]] on the eV scale, not MeV scale, and [[velocidad_fermi]] much smaller than 3·10⁸ m/s. For single-state occupations, [[energia_reducida]] between -10 and 10 describes the active transition around [[potencial_quimico]]; far outside this interval, [[ocupacion_estado]] is nearly saturated or nearly empty.

## Model failure signals
The model is suspect if the graph of [[energia_fermi]] versus [[densidad_electronica]] is not increasing, if [[energia_fermi]] becomes negative, if [[temperatura_fermi]] is below room temperature for a dense metal, or if cm⁻³ and m⁻³ are mixed. It also fails when band gaps, effective masses, superconductivity, strong interactions, strong disorder, or nanometric confinement are essential.

## Extended or alternative model
Real solids often require a band model with effective mass instead of free [[masa_electron]]. In semiconductors, electrons and holes are separated and [[potencial_quimico]] depends on doping and temperature. In 2D systems, volume density is replaced by surface density. In compact matter or extreme plasmas, a relativistic electron gas may be required.

## Operational comparison
| Model | When to use it | Dominant magnitude | Warning sign |
|---|---|---|---|
| Free 3D gas | Simple metal, quick estimate | [[densidad_electronica]] | Doubtful density units |
| Fermi-Dirac state | Occupation of one state | [[ocupacion_estado]] | Missing [[potencial_quimico]] |
| Electronic bands | Detailed real solids | [[energia_estado]] | Gap or effective mass |
| Relativistic gas | Extreme densities | [[velocidad_fermi]] | [[velocidad_fermi]] close to c |

