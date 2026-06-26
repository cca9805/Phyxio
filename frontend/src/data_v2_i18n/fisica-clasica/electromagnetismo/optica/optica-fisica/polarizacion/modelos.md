## Modelo ideal

El modelo ideal de polarizacion supone que la luz incidente esta **completamente polarizada linealmente** y que el polarizador es un filtro perfecto: transmite el 100 por ciento de la componente del campo electrico alineada con su eje y absorbe el 100 por ciento de la componente perpendicular. En este marco, la **ley de Malus** describe la intensidad transmitida sin perdidas adicionales. Analogamente, el modelo ideal de reflexion supone que la interfase es **plana**, infinita y separa dos medios **dielectricos transparentes** sin absorcion, permitiendo aplicar la **ley de Brewster** en su forma simple.

Las magnitudes que se conservan son [[intensidad_incidente]] como referencia de intensidad maxima, [[theta_p]] como variable de control angular y [[n_1]] junto con [[n_2]] como parametros del medio. La intensidad transmitida [[intensidad_transmitida]] y el angulo de Brewster [[angulo_de_brewster]] son las salidas principales del modelo.

## Hipótesis

- La luz incidente es **monocromatica** y **coherente**; no se mezclan distintas longitudes de onda ni fuentes incoherentes. Violar esta hipotesis haria que la dependencia del coseno cuadrado se difumine al promediar sobre fases aleatorias.

- La luz esta **linealmente polarizada** antes de entrar al analizador. Si la luz es parcialmente polarizada o eliptica, la ley de Malus subestima o sobrestima la intensidad transmitida porque la proyeccion sobre el eje no captura la componente circular.

- El polarizador es **ideal**: sin absorcion residual, sin reflexiones internas y sin scattering. Un polarizador real siempre absorbe una pequeña fraccion de la componente alineada, reduciendo la transmision maxima por debajo de [[intensidad_incidente]].

- La interfase para la ley de Brewster es **plana** y separa medios **homogeneos, isotropos y no absorbentes**. En superficies rugosas la reflexion difusa rompe la condicion de perpendicularidad entre rayo reflejado y refractado.

## Dominio de validez cuantitativo

La ley de Malus es valida cuando la relacion de extincion del polarizador supera 1000 (transmision de la componente no deseada menor del 0.1 %) y la fuente tiene un grado de polarizacion superior al 95 %. Para polarizadores tipo Polaroid en el rango visible (400 a 700 nm), la relacion de extincion tipica es > 10 000.

La ley de Brewster es precisa cuando la parte imaginaria del indice de refraccion es inferior a 0.01. Para vidrio comun, la absorcion a 550 nm tiene orden de magnitud de 10⁻⁶, muy por debajo de ese limite. Para metales como el aluminio, la parte imaginaria supera 1 y la ley falla completamente.

## Señales de fallo del modelo

- La intensidad medida con polarizadores cruzados no llega a cero sino que mantiene un residuo detectable: indica que el polarizador no es ideal o que la luz no esta completamente polarizada.

- La reflectancia de la componente paralela no se anula en ningun angulo al analizar la reflexion: indica que el medio tiene absorcion significativa o que la superficie no es plana.

- Al girar el analizador, la intensidad no sigue una curva coseno cuadrado limpia sino que oscila irregularmente: indica mezcla de longitudes de onda o coherencia parcial.

- El angulo de Brewster medido difiere mas de 2 grados del predicho: indica rugosidad superficial o contaminacion de la interfase.

## Modelo extendido o alternativo

El **formalismo de Jones** extiende el modelo ideal a luz con polarizacion arbitraria (lineal, circular o eliptica) y a trenes de componentes opticos en cascada. Cada elemento se representa como una **matriz dos por dos** que actua sobre el vector campo electrico, permitiendo calcular la polarizacion y la intensidad tras cualquier combinacion de polarizadores, laminas de onda y rotores.

Para medios con absorcion se usan los **parametros de Stokes** y el **formalismo de Mueller**, que trabajan con intensidades medibles directamente y admiten luz parcialmente polarizada, cubriendo casos que el formalismo de Jones no maneja por estar restringido a luz completamente polarizada.

Cuando conviene pasar al modelo extendido: cuando la fuente emite luz parcialmente polarizada, cuando el sistema incluye laminas birrefringentes o cuando la interfase presenta absorcion apreciable. Cambiar a estos modelos cuando la relacion de extincion del polarizador baja de 100 o la parte imaginaria del indice supera 0.01.

## Comparación operativa

| Criterio | Modelo ideal (Malus y Brewster) | Modelo extendido (Jones o Mueller) |
|---|---|---|
| Tipo de polarizacion admitida | Solo lineal | Lineal, circular, eliptica, parcial |
| Precision para polarizadores reales | Alta si la relacion de extincion supera 1000 | Alta en cualquier caso |
| Complejidad de calculo | Baja, una formula escalar | Media-alta, algebra matricial |
| Interfases con absorcion | No aplicable | Cubierto por Mueller |
| Cadena de multiples opticas | Limitada a repetir Malus etapa a etapa | Directa con producto de matrices |
| Rango habitual de aplicacion | Laboratorio didactico y optica de campo | Diseño de dispositivos opticos avanzados |