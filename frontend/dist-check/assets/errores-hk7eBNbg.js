const e=`# Errores frecuentes en energía cinética rotacional\r
\r
## Errores conceptuales\r
\r
### Error 1: creer que la energía tiene signo por el sentido de giro\r
**Por qué parece correcto:** En cinemática angular se elige un sentido positivo, así que el alumno espera que toda magnitud rotacional herede ese signo.\r
**Por qué es incorrecto:** [[Erot]] depende de [[omega]] al cuadrado. El signo de giro pertenece a magnitudes orientadas, no a la energía cinética.\r
**Señal de detección:** Aparece una energía negativa al cambiar de horario a antihorario sin que cambie el módulo de la velocidad angular.\r
**Corrección conceptual:** Separar orientación y energía. La orientación se revisa en momento angular o torque; [[Erot]] se interpreta como cantidad no negativa.\r
**Mini-ejemplo de contraste:** Con el mismo [[I]], [[omega]] = +8 rad/s y [[omega]] = -8 rad/s dan la misma [[Erot]]. El contraste muestra que el signo no cambia la energía.\r
\r
### Error 2: confundir energía rotacional con momento angular\r
**Por qué parece correcto:** Ambas magnitudes hablan del giro y usan [[I]] y [[omega]], por lo que parecen versiones de la misma idea.\r
**Por qué es incorrecto:** La energía mide capacidad de realizar trabajo; el momento angular conserva orientación y depende linealmente de [[omega]].\r
**Señal de detección:** Se intenta decidir el sentido de giro usando [[Erot]] o se compara energía como si fuera una cantidad vectorial.\r
**Corrección conceptual:** Usar [[Erot]] para balances energéticos y momento angular para conservación vectorial del giro.\r
**Mini-ejemplo de contraste:** Dos rotores con distinto [[I]] pueden compartir momento angular y tener energías diferentes. El mismo dato angular no fija toda la lectura energética.\r
\r
## Errores de modelo\r
\r
### Error 3: usar masa en lugar de momento de inercia\r
**Por qué parece correcto:** La energía cinética traslacional usa masa, y el alumno copia esa estructura sin cambiar la magnitud inercial.\r
**Por qué es incorrecto:** En rotación importa la distribución de masa respecto al eje. Esa información está en [[I]], no en la masa total aislada.\r
**Señal de detección:** Un aro y un disco de igual masa y radio salen con la misma energía para igual [[omega]].\r
**Corrección conceptual:** Elegir el [[I]] del cuerpo y del eje antes de sustituir. Si el eje se desplaza, aplicar el teorema de ejes paralelos.\r
**Mini-ejemplo de contraste:** Un aro almacena más [[Erot]] que un disco macizo de igual masa, radio y [[omega]], porque su masa está más lejos del eje.\r
\r
### Error 4: olvidar la energía traslacional en rodadura\r
**Por qué parece correcto:** La rueda gira, así que parece natural mirar solo la parte rotacional.\r
**Por qué es incorrecto:** Si el centro de masa avanza, también hay energía cinética traslacional. [[Erot]] describe solo una parte del movimiento.\r
**Señal de detección:** En una rampa, la aceleración calculada resulta demasiado grande o el balance de energía no cierra.\r
**Corrección conceptual:** En rodadura sin deslizamiento, sumar energía traslacional del centro de masa y energía rotacional alrededor del centro.\r
**Mini-ejemplo de contraste:** Un bloque que desliza y un cilindro que rueda no reparten la energía igual. El cilindro guarda parte en giro y por eso acelera menos.\r
\r
## Errores matemáticos\r
\r
### Error 5: usar rpm como si fueran rad/s\r
**Por qué parece correcto:** Las revoluciones por minuto son una medida habitual de giro, y el número parece directamente utilizable.\r
**Por qué es incorrecto:** La fórmula exige [[omega]] en radianes por segundo. Además, el error queda amplificado porque [[omega]] aparece al cuadrado.\r
**Señal de detección:** La energía calculada tiene un orden de magnitud exagerado para una rueda o un rotor pequeño.\r
**Corrección conceptual:** Convertir revoluciones por minuto a radianes por segundo antes de calcular [[Erot]].\r
**Mini-ejemplo de contraste:** \`600 rpm\` no son \`600 rad/s\`; son unas decenas de rad/s. Usar el número directo infla la energía de forma enorme.\r
\r
### Error 6: olvidar el cuadrado de [[omega]]\r
**Por qué parece correcto:** Muchas relaciones cinemáticas son lineales y el alumno intenta extrapolar esa intuición.\r
**Por qué es incorrecto:** La energía cinética depende de la rapidez al cuadrado. En rotación, esa rapidez angular entra como [[omega]] cuadrada.\r
**Señal de detección:** Al duplicar [[omega]], el resultado solo se duplica en lugar de multiplicarse por cuatro.\r
**Corrección conceptual:** Hacer siempre la prueba de escala: si [[I]] no cambia, duplicar [[omega]] cuadruplica [[Erot]].\r
**Mini-ejemplo de contraste:** Pasar de \`5 rad/s\` a \`10 rad/s\` no añade la misma energía que pasar de \`10 rad/s\` a \`15 rad/s\`; el crecimiento no es lineal.\r
\r
## Errores de interpretación\r
\r
### Error 7: igualar trabajo con energía final sin mirar el estado inicial\r
**Por qué parece correcto:** Si un motor acelera un rotor, parece que todo el trabajo se convierte en la energía final observada.\r
**Por qué es incorrecto:** La relación correcta es\r
\r
{{f:energia_rotacional_final}}\r
\r
. El trabajo mide cambio, no estado final aislado.\r
**Señal de detección:** El rotor ya giraba al inicio y aun así se toma [[Eroti]] como cero sin justificarlo.\r
**Corrección conceptual:** Calcular primero [[Eroti]], luego [[Erotf]] y finalmente la diferencia para obtener [[Wrot]].\r
**Mini-ejemplo de contraste:** Si un disco pasa de \`10 J\` a \`30 J\`, el trabajo neto es \`20 J\`, no \`30 J\`.\r
\r
### Error 8: esconder pérdidas dentro de la fórmula\r
**Por qué parece correcto:** La fórmula de energía es limpia y el alumno espera que describa todo el proceso.\r
**Por qué es incorrecto:** [[Erot]] solo describe energía mecánica de giro. Rozamiento, calor, sonido y deformación necesitan términos separados.\r
**Señal de detección:** El trabajo externo calculado no coincide con el cambio de energía y se fuerza la igualdad sin añadir disipación.\r
**Corrección conceptual:** Escribir un balance con pérdidas explícitas cuando hay frenos, rodamientos reales o deslizamiento.\r
**Mini-ejemplo de contraste:** Si un freno extrae 80 J de un rotor y al final solo bajan 65 J de [[Erot]], los 15 J restantes deben aparecer como calor u otra salida.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de aceptar un resultado, revisa siete puntos. El [[I]] pertenece al eje real. La [[omega]] está en rad/s. La energía no es negativa. Al duplicar [[omega]], [[Erot]] se cuadruplica. En rodadura, se añadió traslación si el centro de masa se mueve. En procesos, [[Wrot]] se comparó con [[Erotf]] menos [[Eroti]]. Si hay pérdidas, están declaradas y no ocultas dentro de la fórmula.`;export{e as default};
