const e=`# Ejemplo tipo examen

## Enunciado

Una barra de acero de seccion circular con diametro 12 mm se utiliza como guia de ondas para transmitir un pulso de compresion generado por un transductor piezoelectrico a 50 kHz. Datos del acero: modulo de Young 210 GPa, densidad volumetrica 7850 kg/m³.

Determinar: la velocidad de onda longitudinal, la longitud de onda, la impedancia mecanica de la barra, y si el modelo de barra esbelta es valido a esta frecuencia.

## Datos

- Diametro de la seccion: d de 0.012 m
- Frecuencia: f de 50 000 Hz
- [[E_young]]: 210 × 10⁹ Pa
- [[rho_vol]]: 7850 kg/m³

## Definicion del sistema

Barra de acero de seccion circular uniforme (12 mm de diametro) actuando como guia de ondas para pulsos longitudinales generados por un transductor a 50 kHz.

## Modelo fisico

Barra esbelta unidimensional: material homogeneo, isotropo y linealmente elastico. La onda longitudinal se propaga sin dispersion a velocidad determinada exclusivamente por las propiedades del material.

## Justificacion del modelo

El modelo de barra esbelta es apropiado si la longitud de onda resultante es mucho mayor que el diametro (al menos 6 veces). Dado que la velocidad esperada es del orden de 5100 m/s y la frecuencia es 50 kHz, la longitud de onda sera del orden de 0.1 m, que es unas 8.5 veces el diametro de 12 mm. La condicion se cumple con margen moderado.

## Resolucion simbolica

{{f:velocidad_longitudinal_barra}}

[[v_barra]] se calcula como la raiz cuadrada de ([[E_young]] / [[rho_vol]])

{{f:relacion_dispersion_barra}}

[[omega]] se calcula como 2pi × f, y [[k_long]] se calcula como [[omega]] / [[v_barra]]

{{f:longitud_onda_longitudinal}}

[[lambda_long]] se calcula como [[v_barra]] / f

{{f:impedancia_barra}}

[[A_seccion]] se calcula como pi por d² dividido entre 4

[[Z_barra]] se calcula como [[rho_vol]] × [[A_seccion]] × [[v_barra]]

Condicion de validez: [[lambda_long]] mayor que 6 × d

## Sustitucion numerica

[[v_barra]] resulta raiz de (210 × 10⁹ / 7850) dando raiz de (2.675 × 10⁷)

[[v_barra]] da **5172 m/s**

[[omega]] resulta 2pi × 50 000 dando 314 159 rad/s

[[k_long]] resulta [[omega]] / [[v_barra]] dando 314 159 / 5172 resultando 60.7 rad/m

[[lambda_long]] resulta 5172 / 50 000 dando **0.1034 m** (10.34 cm)

[[A_seccion]] resulta pi × (0.012)² / 4 dando 1.131 × 10⁻⁴ m²

[[Z_barra]] resulta 7850 × 1.131 × 10⁻⁴ × 5172 dando **4593 kg/s**

Verificacion de validez: [[lambda_long]] / d resulta 0.1034 / 0.012 dando 8.6, que es mayor que 6 ✓

## Validacion dimensional

\`[M L⁻¹ T⁻²] / [M L⁻³]\` da \`[L² T⁻²]\`; raiz cuadrada: \`[L T⁻¹]\` ✓

Para la impedancia: \`[M L⁻³] · [L²] · [L T⁻¹]\` da \`[M T⁻¹]\` ✓

## Interpretacion fisica

La velocidad de 5172 m/s es consistente con el valor tabulado para acero (5100–5200 m/s), confirmando que los datos son correctos. Un pulso de compresion recorre 1 metro de barra en 0.19 ms, lo que permite medir tiempos de transito con precision en aplicaciones de ensayo no destructivo.

La longitud de onda de 10.3 cm es unas 8.6 veces el diametro, lo que situa la barra en el regimen de validez pero relativamente cerca del limite. Si se duplicara la frecuencia a 100 kHz, la longitud de onda bajaria a 5.2 cm (4.3 diametros) y el modelo empezaria a perder precision: las correcciones de Rayleigh-Love se harian relevantes.

La impedancia de 4593 kg/s es el parametro que determina que fraccion de energia se refleja si la barra se conecta a otra diferente. Si esta barra se uniera a una de aluminio del mismo diametro (impedancia de unos 1940 kg/s), el coeficiente de reflexion seria (1940 - 4593)/(1940 + 4593) dando -0.41, indicando reflexion con inversion de signo y transmision parcial del 59% en amplitud.

# Ejemplo de aplicacion real

## Contexto

Un ingeniero de ensayos no destructivos necesita calibrar un sistema de deteccion de fisuras en pilotes de hormigon armado mediante eco de impacto. El metodo consiste en golpear la cabeza del pilote y medir el tiempo de retorno del eco desde la punta. El pilote tiene 12 m de longitud y el hormigon tiene un modulo de Young de 30 GPa y densidad de 2400 kg/m³.

## Estimacion fisica

Datos del hormigon: [[E_young]] de 30 × 10⁹ Pa, [[rho_vol]] de 2400 kg/m³, longitud del pilote L de 12 m, diametro de 0.6 m.

Aplicando la formula de [[v_barra]]: raiz cuadrada de (30e9 / 2400) da **3536 m/s**.

Tiempo de ida y vuelta: 2L / [[v_barra]] resulta 2 × 12 / 3536 dando **6.79 ms**.

Frecuencia dominante del impacto: aproximadamente 1000 Hz. [[lambda_long]] resulta 3536/1000 dando 3.54 m, que es 5.9 veces el diametro (0.6 m). El modelo es marginalmente valido.

[[Z_barra]] del pilote: 2400 × (pi × 0.3² ) × 3536 dando 2400 × 0.283 × 3536 resultando **2.40 × 10⁶ kg/s**.

## Interpretacion

El eco de la punta debe aparecer a 6.79 ms tras el golpe. Si aparece un eco antes (por ejemplo a 4 ms), indica un defecto a una profundidad de 4e-3 × 3536 / 2 dando 7.1 m. El ingeniero puede asi mapear defectos internos sin excavar.

La alta impedancia del pilote (2.4 × 10⁶ kg/s) implica que las uniones con el terreno circundante (impedancia mucho menor) producen reflexiones fuertes en la punta, facilitando la deteccion del eco. Si el pilote estuviera rodeado de roca (impedancia similar), el eco seria debil y la tecnica perderia sensibilidad.

El limite del modelo esta en la frecuencia: a 1 kHz con diametro de 0.6 m el cociente lambda/d es 5.9, apenas por encima del umbral. Para frecuencias mayores (contenido armonico del golpe) la correccion de inercia lateral sera necesaria y los tiempos de llegada se desviaran ligeramente del calculo simple.
`;export{e as default};
