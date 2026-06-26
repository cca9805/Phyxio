## Modelo ideal

El modelo de referencia en este leaf es la **viga de Euler-Bernoulli**, el modelo clásico de flexión para vigas esbeltas. Su hipótesis central es que las secciones transversales planas permanecen planas y perpendiculares al eje deformado durante la vibración. Esto elimina la deformación por cortante transversal del análisis y produce una ecuación diferencial de cuarto orden cuya solución proporciona la relación de dispersión cuadrática.

El modelo predice una velocidad de fase [[v_fase_flex]] que crece como la raíz cuadrada de la frecuencia [[omega]], y una velocidad de grupo [[v_grupo_flex]] exactamente el doble de la de fase. No hay límite superior para la velocidad en este modelo, lo que refleja su carácter de aproximación de onda larga.

Las magnitudes que se conservan en el modelo son la rigidez a la flexión EI (producto de [[modulo_de_young]] por [[momento_de_inercia_de_la_seccion_transversal]]) y la masa lineal [[rho_lin]]. Se ignora completamente la deformación por cortante transversal y la inercia rotacional de las secciones.

## Hipótesis

- **Viga esbelta:** la longitud de onda flexional [[lambda_flex]] debe ser mucho mayor que la dimensión transversal de la sección (condición práctica: [[lambda_flex]] mayor que 6 veces el espesor). Violar esta hipótesis produce velocidades predichas superiores a las reales porque la deformación por cortante, ignorada, reduce la velocidad efectiva.

- **Secciones planas permanecen planas y normales al eje:** esto excluye el alabeo de la sección y la deformación por cortante. A frecuencias altas, las secciones ya no permanecen perpendiculares y el modelo sobreestima la rigidez.

- **Material elástico lineal, isótropo y homogéneo:** [[modulo_de_young]] y [[rho_vol]] son constantes en toda la viga. Para materiales viscoelásticos o compuestos, los parámetros se vuelven funciones de la frecuencia o de la posición.

- **Sección transversal constante:** [[momento_de_inercia_de_la_seccion_transversal]] y [[area_de_la_seccion_transversal]] no varían a lo largo del eje. Vigas de sección variable requieren métodos numéricos o la aproximación WKB.

- **Pequeñas deformaciones:** las amplitudes de vibración son mucho menores que las dimensiones de la sección. Para amplitudes grandes, aparecen no linealidades geométricas que acoplan los modos flexionales con los longitudinales.

## Dominio de validez cuantitativo

El modelo de Euler-Bernoulli es fiable cuando la longitud de onda flexional es al menos 6 veces el espesor de la sección en la dirección de la flexión. Para una barra de acero de 5 mm de espesor, esto corresponde a [[lambda_flex]] > 30 mm, lo que limita la frecuencia a valores por debajo de aproximadamente 50 kHz.

El criterio cuantitativo más directo usa el radio de giro [[r_giro]]: el modelo es válido mientras k·[[r_giro]] < 0.3, es decir, mientras el número de onda multiplicado por el radio de giro sea mucho menor que 1. Para la barra rectangular de 5 mm × 20 mm flectando en la dirección de 5 mm, [[r_giro]] es 5/√12 ≈ 1.44 mm, y la condición k·[[r_giro]] < 0.3 se satisface para frecuencias menores de 100 kHz aproximadamente.

La desviación del modelo de Euler-Bernoulli respecto a mediciones reales es inferior al 5 % para k·[[r_giro]] < 0.2, e inferior al 1 % para k·[[r_giro]] < 0.1.

## Señales de fallo del modelo

- **Velocidad de fase calculada que supera la velocidad longitudinal del material:** en acero, si [[v_fase_flex]] supera los 5100 m/s, el modelo ha excedido su rango. La realidad limita la velocidad a la de cortante (unos 3100 m/s).

- **Velocidades medidas que saturan con la frecuencia en lugar de seguir creciendo:** la curva experimental se aplana porque la deformación por cortante limita la velocidad real, efecto no capturado por Euler-Bernoulli.

- **Discrepancia creciente entre predicción y medición a frecuencias altas:** si las mediciones dan velocidades cada vez menores que la predicción, la inercia rotacional y el cortante se están manifestando.

- **Longitud de onda comparable al espesor de la sección:** si [[lambda_flex]] calculada es menor que 6 veces el espesor, cualquier resultado del modelo es cuantitativamente sospechoso.

## Modelo extendido o alternativo

La **teoría de Timoshenko** extiende el modelo de Euler-Bernoulli incorporando dos efectos adicionales: la deformación por cortante transversal (a través del coeficiente de cortante kappa y el módulo de cizalladura G) y la inercia rotacional de las secciones. La relación de dispersión resultante deja de ser cuadrática: a frecuencias bajas coincide con Euler-Bernoulli, pero a frecuencias altas la velocidad de fase se satura en la velocidad de onda de cortante.

El modelo de Timoshenko predice además la existencia de una segunda rama de dispersión (onda de cortante puro) a frecuencias altas, que no tiene contrapartida en Euler-Bernoulli. Cuando conviene pasar al modelo de Timoshenko: cuando k·[[r_giro]] supera 0.3, o equivalentemente cuando la frecuencia excede el umbral donde la velocidad de fase de Euler-Bernoulli supera el 50 % de la velocidad longitudinal.

Para vigas con amortiguamiento interno, el modelo se extiende reemplazando [[modulo_de_young]] real por un módulo complejo, lo que introduce atenuación dependiente de la frecuencia además de la dispersión.

## Comparación operativa

| Criterio | Euler-Bernoulli | Timoshenko |
|---|---|---|
| Deformación por cortante | Ignorada | Incluida (coeficiente kappa) |
| Inercia rotacional | Ignorada | Incluida |
| Relación de dispersión | Cuadrática pura | Trascendente con saturación |
| Velocidad de fase a alta frecuencia | Crece sin límite | Se satura en velocidad de cortante |
| Velocidad de grupo a alta frecuencia | Crece sin límite | Se satura |
| Complejidad matemática | Ecuación de 4.º orden | Sistema acoplado de 4.º orden |
| Validez | k·[[r_giro]] menor que 0.3 | Todo el rango de frecuencias |
| Aplicación principal | Vigas esbeltas a frecuencia audible | Vigas gruesas o frecuencias ultrasónicas |