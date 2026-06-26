const e=`# Ejemplos: Errores frecuentes en dinámica\r
\r
# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un bloque de [[masa_cuerpo]] (5 kg) reposa sobre un plano inclinado con [[angulo_plano]] de 30° respecto a la horizontal. El [[coeficiente_rozamiento_estatico]] entre el bloque y la superficie es 0,5. Un estudiante comete el error de calcular la [[componente_normal_erronea]] igualándola al producto de [[masa_cuerpo]] por [[aceleracion_gravedad]], ignorando la inclinación.\r
\r
Determina: (a) la [[componente_normal_erronea]] correcta; (b) la [[fuerza_rozamiento_maximo]] correcta; (c) la [[fuerza_motriz]] sobre el bloque; (d) si el bloque permanece en reposo o se desliza; (e) el error conceptual que lleva al estudiante a una conclusión equivocada.\r
\r
## Datos\r
\r
- [[masa_cuerpo]]: 5 kg\r
- [[angulo_plano]]: 30° (= π/6 rad ≈ 0,524 rad)\r
- [[coeficiente_rozamiento_estatico]]: 0,5\r
- [[aceleracion_gravedad]]: 9,81 m/s²\r
- [[masa_total]]: 5 kg (sistema de un único cuerpo)\r
- [[signo_aceleracion]]: positivo hacia abajo del plano\r
\r
## Definición del sistema\r
\r
Se elige un sistema de referencia con el eje \\(x\\) positivo apuntando hacia arriba del plano y el eje \\(y\\) positivo hacia fuera de la superficie. Las fuerzas actuantes son:\r
\r
- **Peso**: 49,05 N vertical; sus componentes \`P_x\` (paralela al plano) y \`P_y\` (perpendicular al plano) se obtienen proyectando con [[angulo_plano]].\r
- **[[componente_normal_erronea]]**: perpendicular al plano, eje \\(y\\) positivo.\r
- **[[fuerza_rozamiento_maximo]]**: paralela al plano, oponiéndose al potencial movimiento.\r
\r
La [[fuerza_erronea]] surge cuando el estudiante dibuja la normal sin proyectar el peso, asumiendo que todo el peso actúa perpendicular al plano.\r
\r
## Modelo físico\r
\r
Se aplica la segunda ley de Newton en cada eje. En el eje perpendicular al plano (equilibrio estático):\r
\r
En equilibrio perpendicular al plano, [[componente_normal_erronea]] iguala exactamente la componente del peso en esa direcci\\u00f3n. La proyecci\\u00f3n correcta requiere el coseno de [[angulo_plano]].\r
\r
La [[aceleracion_sistema]] se calcula cuando hay movimiento aplicando:\r
\r
{{f:ley_newton_sistemas}}\r
\r
El criterio para el reposo es que [[fuerza_motriz]] no supere [[fuerza_rozamiento_maximo]]. Si no se cumple, el bloque desliza.\r
\r
## Justificación del modelo\r
\r
Se usa la segunda ley de Newton porque:\r
\r
1. La [[masa_cuerpo]] es constante y la velocidad es no relativista (v ≪ c).\r
2. Las superficies son rígidas; no hay deformación que altere la geometría del sistema.\r
3. El rozamiento estático mantiene el bloque fijo mientras [[fuerza_motriz]] no supere [[fuerza_rozamiento_maximo]].\r
4. El modelo falla si la superficie es deformable, si hay lubricación entre superficies, o si [[angulo_plano]] supera 90°.\r
\r
El error pedagógico nuclear de este leaf consiste en igualar [[componente_normal_erronea]] al producto de [[masa_cuerpo]] por [[aceleracion_gravedad]], lo que ignora el coseno del ángulo y sobreestima el umbral de rozamiento, produciendo predicciones incorrectas sobre si el sistema arranca o no.\r
\r
## Resolución simbólica\r
\r
**Paso 1 — Normal correcta con proyección:**\r
\r
{{f:proyeccion_normal_plano}}\r
\r
La [[componente_normal_erronea]] correcta resulta de proyectar el peso perpendicularmente al plano con el coseno de [[angulo_plano]].\r
\r
**Paso 2 — Umbral de rozamiento estático máximo:**\r
\r
{{f:relacion_rozamiento_maximo}}\r
\r
La [[fuerza_rozamiento_maximo]] se obtiene multiplicando [[coeficiente_rozamiento_estatico]] por la [[componente_normal_erronea]] correctamente proyectada.\r
\r
**Paso 3 — Fuerza motriz paralela al plano:**\r
\r
{{f:fuerza_motriz_plano}}\r
\r
La [[fuerza_motriz]] resulta de proyectar el peso paralelamente al plano con el seno de [[angulo_plano]].\r
\r
**Paso 4 — Criterio de movimiento:**\r
\r
Si [[fuerza_motriz]] supera [[fuerza_rozamiento_maximo]], entonces hay deslizamiento y la [[aceleracion_sistema]] es, usando el rozamiento cinético \`μk\` ≈ 0,4:\r
\r
{{f:ley_newton_sistemas}}\r
\r
## Sustitución numérica\r
\r
**Normal correcta:**\r
N = 5 ×9,81 ×cos 30° = 5 ×9,81 ×0,866 = 42,47 N\r
\r
**Normal errónea del estudiante:**\r
N_errónea = 5 ×9,81 = 49,05 N ← [[componente_normal_erronea]] sobreestimada en un 15{,}5 %\r
\r
**Umbral correcto de [[fuerza_rozamiento_maximo]]:**\r
f_s,\\max = 0,5 ×42,47 = 21,24 N\r
\r
**Umbral erróneo del estudiante:**\r
f_s,\\max,err = 0,5 ×49,05 = 24,53 N\r
\r
**[[fuerza_motriz]]:**\r
F_mot = 5 ×9,81 ×sin 30° = 5 ×9,81 ×0,5 = 24,53 N\r
\r
**Criterio correcto:** [[fuerza_motriz]] (24,53 N) supera [[fuerza_rozamiento_maximo]] (21,24 N) → **el bloque SE DESLIZA**\r
\r
**Criterio del estudiante (con [[fuerza_erronea]]):** con \`N_errónea\` sobreestimada, \`f_{s,err}\` (24,53 N) ≥ [[fuerza_motriz]] (24,53 N) → el estudiante concluye **"el bloque no se mueve"** ← **INCORRECTO**\r
\r
**[[aceleracion_sistema]] real (con rozamiento cinético \`μk\` = 0,4):**\r
1,51 m/s² cuesta abajo\r
\r
## Validación dimensional\r
\r
- [N] = [kg ·m/s²] = N ✓\r
- [\`f_s,max\`] = [1]·[N] = N ✓\r
- La aceleración en unidades: N/kg ≡ m/s² ✓\r
- [[aceleracion_sistema]] (1,51 m/s²) queda por debajo de [[aceleracion_gravedad]] (9,81 m/s²) → coherente; un sistema impulsado solo por gravedad no puede superar \`g\`.\r
- [[signo_aceleracion]] positivo hacia abajo de la rampa es consistente con que la [[fuerza_motriz]] apunta en esa dirección.\r
\r
## Interpretación física\r
\r
El error de asumir [[componente_normal_erronea]] igual a [[masa_cuerpo]]·[[aceleracion_gravedad]] sobreestima la normal en un factor 1/cosθ. Para θ = 30°, eso representa un 15,5 % de exceso. Esa sobreestimación eleva artificialmente [[fuerza_rozamiento_maximo]], llevando al estudiante a concluir que el sistema está en reposo cuando en realidad se desliza con [[aceleracion_sistema]] de 1,51 m/s².\r
\r
El mecanismo causal es el siguiente: la [[fuerza_motriz]] (componente del peso paralela al plano) no cambia con el error, pero [[fuerza_rozamiento_maximo]] sí se sobreestima porque depende de [[componente_normal_erronea]]. Al inflar [[fuerza_rozamiento_maximo]] artificialmente, el umbral de movimiento parece no alcanzarse, produciendo una respuesta cualitativamente incorrecta: "el bloque no se mueve" en lugar de "el bloque se desliza".\r
\r
El [[signo_aceleracion]] positivo hacia abajo confirma que [[F_ext_net]] actúa en ese sentido. El valor de [[aceleracion_sistema]] (1,51 m/s²) es coherente: está entre 0 y g·sin30° = 4,9 m/s² (aceleración máxima sin rozamiento). El rozamiento cinético frena el movimiento pero no lo detiene porque [[fuerza_motriz]] supera [[fuerza_rozamiento_maximo]] aún con el coeficiente cinético.\r
\r
Este ejemplo ilustra un principio pedagógico fundamental: un error pequeño en un factor de entrada (15,5 % en [[componente_normal_erronea]]) puede producir un error cualitativo en la respuesta (reposo vs. movimiento). La predicción correcta del estado del sistema — si arranca o no arranca — requiere calcular bien [[componente_normal_erronea]].\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un camión con [[masa_total]] de 2 500 kg estaciona en una rampa de acceso a un almacén con [[angulo_plano]] de 10°. Un operario necesita saber si el camión permanecerá detenido sin freno de mano activado. El [[coeficiente_rozamiento_estatico]] entre neumático y asfalto seco es aproximadamente 0,7.\r
\r
Este escenario industrial ilustra cómo igualar [[componente_normal_erronea]] a [[masa_total]]·[[aceleracion_gravedad]] sin proyectar puede llevar a una decisión de seguridad incorrecta: concluir que el freno no es necesario cuando en realidad sí lo es (o viceversa).\r
\r
## Estimación física\r
\r
La estimación de orden de magnitud es el primer filtro cuantitativo. Para este escenario, la escala de las fuerzas relevantes es:\r
\r
- [[fuerza_motriz]]: proporcional a sin(10°) ≈ 0,17 → orden de magnitud ~4 000 N.\r
- [[fuerza_rozamiento_maximo]]: proporcional a μs·cos(10°) ≈ 0,69 → orden de magnitud ~17 000 N.\r
- La estimación aproximada del margen de seguridad: ~4 veces mayor [[fuerza_rozamiento_maximo]] que [[fuerza_motriz]].\r
\r
Esta estimación previa permite anticipar cualitativamente que el sistema permanecerá en reposo antes de hacer ningún cálculo exacto.\r
\r
**Normal correcta:**\r
\r
{{f:proyeccion_normal_plano}}\r
\r
N = 2500 ×9,81 ×cos 10° = 2500 ×9,81 ×0,985 = 24 144 N\r
\r
**Umbral de [[fuerza_rozamiento_maximo]]:**\r
\r
{{f:relacion_rozamiento_maximo}}\r
\r
f_s,\\max = 0,7 ×24 144 = 16 901 N\r
\r
**[[fuerza_motriz]] (componente del peso paralela a la rampa):**\r
\r
{{f:fuerza_motriz_plano}}\r
\r
F_mot = 2500 ×9,81 ×sin 10° = 2500 ×9,81 ×0,174 = 4 258 N\r
\r
Como [[fuerza_motriz]] (4 258 N) es mucho menor que [[fuerza_rozamiento_maximo]] (16 901 N), la [[F_ext_net]] neta que intenta mover el camión es solo el 25 % del umbral estático. El vehículo permanece detenido sin freno de mano por la sola fricción.\r
\r
## Interpretación\r
\r
La [[aceleracion_sistema]] es nula porque la [[fuerza_erronea]] no existe en este caso: la [[componente_normal_erronea]] está bien calculada (θ = 10°, cos 10° ≈ 0,985), y el margen entre [[fuerza_motriz]] y [[fuerza_rozamiento_maximo]] es amplio. Sin embargo, si la rampa tuviese θ = 45°:\r
\r
F_mot = 2500 ×9,81 ×0,707 = 17 340 N\r
N = 2500 ×9,81 ×0,707 = 17 340 N\r
f_s,\\max = 0,7 ×17 340 = 12 138 N\r
\r
En ese caso [[fuerza_motriz]] superaría [[fuerza_rozamiento_maximo]] y el camión se deslizaría. El [[signo_aceleracion]] sería negativo (cuesta abajo) con una [[aceleracion_sistema]] de varios m/s². Este contraste ilustra por qué la [[componente_normal_erronea]] debe calcularse siempre con el coseno: a ángulos mayores, el margen de seguridad se reduce drásticamente.\r
\r
La estimación cuantitativa revela una lectura física clave: el índice de seguridad frente al deslizamiento es la razón entre [[fuerza_motriz]] y [[fuerza_rozamiento_maximo]], que en este caso es 4 258 / 16 901 = 0,25. Mientras este índice sea menor que 1, el sistema permanece en reposo. El error de igualar [[componente_normal_erronea]] al producto de [[masa_total]] por [[aceleracion_gravedad]] elevaría la [[fuerza_rozamiento_maximo]] a 0,7 × 24 525 = 17 168 N y el índice seguiría siendo 0,25, sin cambio cualitativo. Sin embargo, para un ángulo de 45° el índice correcto es 17 340 / 12 138 = 1,43 (mayor que 1) → deslizamiento. Con el error de normal horizontal, el índice daría 0,7 (aparente reposo). Esta divergencia muestra cuándo el error en [[componente_normal_erronea]] cambia la predicción: en ángulos donde [[fuerza_motriz]] y [[fuerza_rozamiento_maximo]] son del mismo orden.\r
`;export{e as default};
