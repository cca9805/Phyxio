# Auditoria de formulas de mecanica

Fecha de auditoria: 2026-05-13

## Resultado estructural

- El bloque de mecanica contiene 194 leafs con `formulas.yaml`.
- El inventario regenerado en `docsV2/formulas-mecanica.md` contiene 947 formulas.
- No quedan `meta.ruta_relativa` de leafs de mecanica apuntando a carpetas inexistentes.
- La familia `fuerza-de-arrastre` queda normalizada con guion en mapa, carpeta fisica, `meta.yaml` y prerequisitos.
- El inventario `formulas-mecanica.md` queda escrito en UTF-8 y sin secuencias mojibake `Ã`, `Â`, `ðŸ` ni caracter de reemplazo.

## Auditoria por dominio

### Cinematica

Estado: cubierto para el nivel actual.

La cinematica tiene formulas de posicion, velocidad, aceleracion, movimiento rectilineo, movimiento en dos dimensiones y lectura grafica. No se detecta una ausencia estructural comparable a los bloques avanzados de mecanica. El trabajo pendiente aqui no es crear leafs nuevos, sino mantener la coherencia didactica de teoria y ejemplos cuando se incorporen nuevas formulas.

### Dinamica traslacional y fuerzas

Estado: cubierto en fundamentos y fuerzas habituales; corregida la ruta de fuerza de arrastre.

Estan representadas segunda ley, peso, normal, rozamiento, tension, fuerza elastica, fuerza centripeta y fuerza de arrastre. La parte de arrastre existe y ahora queda alineada con el mapa. No se detecta necesidad inmediata de leaf nuevo dentro de fuerzas elementales.

Modificaciones recomendadas:

- Revisar `fuerza-de-arrastre/velocidad-terminal`, `numero-de-reynolds-y-regimenes-de-arrastre` y `coeficiente-de-arrastre` con validador despues de la normalizacion de ruta.
- Mantener las formulas vectoriales de arrastre como modulos cuando el leaf sea escalar, y explicar el signo fisico en teoria/modelos.

### Marcos no inerciales

Estado: parcialmente cubierto.

Hay formulas de Coriolis y centrifuga, pero falta una representacion formal completa del marco rotante general. La fuerza de Euler aparece como hueco conceptual: si la velocidad angular del marco cambia, falta la contribucion proporcional a `dOmega/dt`.

Leafs a modificar:

- `fisica-clasica/mecanica/dinamica/fundamentos/sistemas-de-referencia/sistemas-no-inerciales-intro`
- `fisica-clasica/mecanica/dinamica/marcos-no-inerciales/fuerza-coriolis/definicion-fuerza-coriolis`
- `fisica-clasica/mecanica/dinamica/marcos-no-inerciales/fuerza-centrifuga/definicion-fuerza-centrifuga`

Leaf nuevo recomendado:

- `fisica-clasica/mecanica/dinamica/marcos-no-inerciales/marco-rotante-general`

Formulas clave:

- Transformacion completa de aceleracion en marco rotante.
- Fuerza de Euler: `F_E = -m dOmega/dt x r`.
- Separacion entre aceleracion relativa, aceleracion de transporte, Coriolis, centrifuga y Euler.

### Trabajo y energia

Estado: cubierto para mecanica basica e intermedia.

Trabajo, potencia, energia cinetica, energia potencial, conservacion y fuerzas no conservativas estan representados. Los duplicados detectados previamente en potencia fueron corregidos en una fase anterior. No se detecta necesidad de leaf nuevo por ahora.

Modificaciones recomendadas:

- Mantener la distincion entre formulas operativas y balances energeticos en teoria.
- Evitar repetir formulas en sintesis final: deben quedar en nivel formal.

### Cantidad de movimiento

Estado: cubierto para sistemas discretos, centro de masas, choques, impulso y masa variable.

Los leafs actuales representan impulso, cantidad de movimiento, centro de masas, choques, marco del centro de masas y ecuacion del cohete. El inventario incluye formulas de masa reducida, energia en el CM y balances de momento.

Modificaciones recomendadas:

- Revisar coherencia fina entre centro de masas de dinamica estatica y cantidad de movimiento para evitar duplicidad pedagogica.
- Mantener las formulas de centro de masas continuo y discreto separadas por dominio de uso.

### Rotacion y solido rigido

Estado: fuerte en eje fijo, incompleto para solido rigido 3D.

Rotacion en eje fijo, momento de inercia, Steiner, momento angular, conservacion, precesion y rodadura estan representados. Sin embargo, el solido rigido tridimensional aparece como mencion avanzada, no como bloque formal explotable. Faltan formulas propias de dinamica 3D: ecuaciones de Euler, ejes principales, tensor diagonalizado y estabilidad cualitativa de rotacion.

Leafs a modificar:

- `fisica-clasica/mecanica/rotacion/fundamentos/mapa-conceptual-de-rotacion`
- `fisica-clasica/mecanica/rotacion/dinamica/momento-de-inercia/definicion-momento-de-inercia`
- `fisica-clasica/mecanica/rotacion/momento-angular/conservacion-momento-angular`
- `fisica-clasica/mecanica/rotacion/momento-angular/precesion`

Leaf nuevo recomendado:

- `fisica-clasica/mecanica/rotacion/dinamica/solido-rigido-3d/ecuaciones-de-euler`

Formulas clave:

- `L = I omega` en forma tensorial.
- Tensor de inercia diagonal en ejes principales.
- Ecuaciones de Euler del solido rigido libre o con torque.
- Condicion de estabilidad relativa alrededor de ejes principales.

### Gravitacion y fuerzas centrales

Estado: cubierto para gravitacion newtoniana y orbitas gravitatorias; incompleto para fuerzas centrales generales.

Existen formulas de ley gravitatoria, campo, potencial, energia orbital, velocidad orbital, Kepler, mareas y perturbaciones. Lo que falta no es gravitacion basica, sino el formalismo general de fuerzas centrales: potencial efectivo, ecuacion radial y ecuacion de Binet.

Leafs a modificar:

- `fisica-clasica/mecanica/gravitacion/orbitas-y-satelites/energia-orbital`
- `fisica-clasica/mecanica/gravitacion/orbitas-y-satelites/leyes-de-kepler`
- `fisica-clasica/mecanica/gravitacion/orbitas-y-satelites/velocidad-orbital`
- `fisica-clasica/mecanica/gravitacion/mareas-y-perturbaciones`

Leaf nuevo recomendado:

- `fisica-clasica/mecanica/gravitacion/fuerzas-centrales/potencial-efectivo-y-ecuacion-radial`

Leaf nuevo opcional avanzado:

- `fisica-clasica/mecanica/gravitacion/fuerzas-centrales/ecuacion-de-binet-y-orbitas`

Formulas clave:

- `U_eff(r) = U(r) + L^2/(2 m r^2)`.
- Ecuacion radial energetica.
- Condicion de orbita circular mediante derivada de potencial efectivo.
- Ecuacion de Binet para `u(theta)=1/r`.

### Oscilaciones

Estado: cubierto y reforzado.

Existen oscilador armonico, pendulo, amortiguamiento, forzamiento, resonancia, pendulo fisico avanzado y modos normales. Tras las ampliaciones de mecanica analitica, el bloque tiene cobertura suficiente para nivel avanzado inicial.

Modificaciones recomendadas:

- Validar que `pequenas-oscilaciones-y-modos-normales` mantiene formulas matriciales de autovalores, frecuencias normales y coordenadas normales.
- No crear leaf nuevo salvo que se quiera separar modos normales continuos o acoplamiento fuerte no lineal.

### Fluidos

Estado: cubierto en fundamentos, estatica, Bernoulli, viscosidad, regimenes y sonido; incompleto para fluidos avanzados.

Hay contenido de Bernoulli, continuidad, Pascal, Arquimedes, Poiseuille, flujo laminar/turbulento, numero de Reynolds y Navier-Stokes introductorio. Sin embargo, la auditoria detecta que vorticidad, circulacion, Euler de fluidos y transporte de Reynolds aparecen principalmente como texto, no como formulas estructuradas de leafs propios.

Leafs a modificar:

- `fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/ecuaciones-del-movimiento/ecuacion-de-navier-stokes-intro`
- `fisica-clasica/mecanica/fluidos/fluidos-reales/hidrodinamica`
- `fisica-clasica/mecanica/fluidos/fluidos-reales/aerodinamica-basica`
- `fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/ecuacion-de-bernoulli`

Leafs nuevos recomendados:

- `fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/ecuaciones-del-movimiento/ecuacion-de-euler-de-fluidos`
- `fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/vorticidad-y-circulacion`
- `fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/teorema-de-transporte-de-reynolds`

Formulas clave:

- Ecuacion de Euler para fluido ideal.
- Vorticidad `omega = rot v`.
- Circulacion `Gamma = integral v dot dl`.
- Kelvin en regimen ideal.
- Teorema de transporte de Reynolds.
- Bernoulli no estacionario como extension formal.

### Mecanica analitica

Estado: avanzado inicial completo; incompleto solo si se exige nivel universitario alto.

Estan representados coordenadas generalizadas, ligaduras, D'Alembert, accion, Euler-Lagrange, Legendre, Hamilton, Poisson, transformaciones canonicas, Hamilton-Jacobi, oscilador, pendulo, problemas con ligaduras y modos normales. La cobertura ya permite una lectura avanzada coherente.

Leafs a modificar:

- `fisica-clasica/mecanica/mecanica-analitica/ligaduras-y-grados-de-libertad`
- `fisica-clasica/mecanica/mecanica-analitica/problemas-con-ligaduras`
- `fisica-clasica/mecanica/mecanica-analitica/lagrangiano/simetrias-y-conservaciones`
- `fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/transformaciones-canonicas`

Leafs nuevos opcionales avanzados:

- `fisica-clasica/mecanica/mecanica-analitica/lagrangiano/routhiano-y-coordenadas-ciclicas`
- `fisica-clasica/mecanica/mecanica-analitica/ligaduras/no-holonomas`
- `fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/sistemas-con-ligaduras-y-dirac`

Formulas clave:

- Routhiano `R = sum p_alpha qdot_alpha - L` para coordenadas ciclicas.
- Ecuaciones de Lagrange-d'Alembert no holonomas.
- Corchetes de Dirac y clasificacion primaria/secundaria solo si se decide llegar a nivel avanzado alto.

## Plan exacto para el cuarto punto

### Crear leafs necesarios

1. `fisica-clasica/mecanica/gravitacion/fuerzas-centrales/potencial-efectivo-y-ecuacion-radial`
2. `fisica-clasica/mecanica/rotacion/dinamica/solido-rigido-3d/ecuaciones-de-euler`
3. `fisica-clasica/mecanica/dinamica/marcos-no-inerciales/marco-rotante-general`
4. `fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/ecuaciones-del-movimiento/ecuacion-de-euler-de-fluidos`
5. `fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/vorticidad-y-circulacion`
6. `fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/teorema-de-transporte-de-reynolds`

### Crear leafs opcionales de nivel avanzado alto

1. `fisica-clasica/mecanica/gravitacion/fuerzas-centrales/ecuacion-de-binet-y-orbitas`
2. `fisica-clasica/mecanica/mecanica-analitica/lagrangiano/routhiano-y-coordenadas-ciclicas`
3. `fisica-clasica/mecanica/mecanica-analitica/ligaduras/no-holonomas`
4. `fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/sistemas-con-ligaduras-y-dirac`

### Modificar leafs existentes

1. Orbitas y gravitacion:
   - `energia-orbital`
   - `leyes-de-kepler`
   - `velocidad-orbital`
   - `mareas-y-perturbaciones`

2. Rotacion:
   - `mapa-conceptual-de-rotacion`
   - `definicion-momento-de-inercia`
   - `conservacion-momento-angular`
   - `precesion`

3. Marcos no inerciales:
   - `sistemas-no-inerciales-intro`
   - `definicion-fuerza-coriolis`
   - `definicion-fuerza-centrifuga`

4. Fluidos:
   - `ecuacion-de-navier-stokes-intro`
   - `hidrodinamica`
   - `aerodinamica-basica`
   - `ecuacion-de-bernoulli`

5. Mecanica analitica:
   - `ligaduras-y-grados-de-libertad`
   - `problemas-con-ligaduras`
   - `simetrias-y-conservaciones`
   - `transformaciones-canonicas`

