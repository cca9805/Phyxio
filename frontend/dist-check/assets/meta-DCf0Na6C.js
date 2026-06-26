const n=`version: "v5"
id: polarizacion
nombre:
  es: Polarizacion
  en: Polarization

area: fisica-clasica
bloque: electromagnetismo
subbloque: optica
parent_id: optica-fisica
ruta_relativa: fisica-clasica/electromagnetismo/optica/optica-fisica/polarizacion
orden: 297230
type: leaf

niveles:
  es:
    - ESO
    - BACHILLERATO
    - UNIVERSIDAD
    - EXTRACURRICULAR
  en:
    - Secondary
    - Upper Secondary
    - University
    - Extracurricular

icon: "🧪"

descripcion: Propiedad de la luz como onda transversal que permite filtrar la intensidad transmitida segun la orientacion del campo electrico.
description_en: Property of light as a transverse wave that allows filtering transmitted intensity according to the electric field orientation.

tags:
  es:
    - polarizacion
    - ley de Malus
    - angulo de Brewster
    - onda transversal
    - polarizador
    - intensidad
  en:
    - polarization
    - Malus's law
    - Brewster angle
    - transverse wave
    - polariser
    - intensity

prerequisitos:
  - fisica-clasica/electromagnetismo/optica/optica-fisica/interferencia-de-la-luz

graficos:
  - Coord

physical_role:
  es: concepto físico
  en: physical concept

representacion_dominante: Coord
magnitud_dominante: I

pregunta_fisica_central:
  es: "¿Como determina la orientacion del campo electrico respecto al eje del polarizador la intensidad transmitida de la luz?"
  en: "How does the orientation of the electric field relative to the polariser axis determine the transmitted intensity of light?"

dificultad: 3
tiempo_estimado_min: 40

interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretación
      en: Interpretation
  mini_graph:
    enabled: true
    preferred_type: Coord
  output_policy:
    show_summary_first: true
    max_inline_messages: 4
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
