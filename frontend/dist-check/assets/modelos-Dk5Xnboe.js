const e=`# Modelos físicos: Ejemplos de equilibrio\r
\r
## Modelo ideal\r
\r
El modelo base del leaf compara tres familias de casos de equilibrio traslacional: apoyo, rampa y nudo de cables. En todos ellos se supone regimen cuasiestatico y se prioriza cierre de fuerzas sobre el cuerpo aislado.\r
\r
Idealizaciones principales:\r
\r
- Contacto seco representado por coeficiente [[mu_s]].\r
- Cables ideales de masa despreciable con tension uniforme [[T]].\r
- Geometria plana con angulos [[alpha]] y [[theta]] bien definidos.\r
- Gravedad local casi constante [[g]].\r
\r
## Hipótesis\r
\r
1. El DCL incluye todas las fuerzas externas relevantes.\r
2. El sistema de ejes se mantiene coherente durante todo el calculo.\r
3. Las ecuaciones de proyeccion se aplican con referencia angular explicita.\r
4. No hay aceleracion traslacional apreciable en los ejemplos clasificados como equilibrio.\r
\r
Si una hipotesis falla, la comparacion entre ejemplos pierde validez didactica y predictiva.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo se considera operativo cuando se cumplen condiciones como:\r
\r
1. abs(sumFx) <= 0.02 * F_ref\r
2. abs(sumFy) <= 0.02 * F_ref\r
3. 0 <= [[alpha]] < 1.57 rad en rampas no verticales\r
4. 0 < [[theta]] <= 1.57 rad en soportes de cable simetricos\r
5. 0 <= [[mu_s]] <= 1.2 para contacto seco comun\r
\r
Con F_ref entre 10 N y 1000 N, estos umbrales separan un cierre aceptable de un desbalance fisicamente relevante. Fuera de ese dominio, el modelo puede producir numeros, pero su lectura causal se degrada.\r
\r
## Señales de fallo del modelo\r
\r
- Residuos de fuerza persistentes y sistematicos pese a repetir mediciones.\r
- Predicciones de tension [[T]] incompatibles con capacidad del sistema real.\r
- Necesidad de angulos imposibles para cerrar ecuaciones.\r
- Contradicciones entre observacion y resultado, por ejemplo deslizamiento con adherencia supuestamente suficiente.\r
\r
Estas señales indican que no basta ajustar algebra; hay que revisar hipotesis del modelo.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando conviene cambiar de modelo? Conviene cambiar cuando el mecanismo dominante no queda representado por el esquema actual.\r
\r
Ejemplos de transicion:\r
\r
1. Si hay giro relevante, pasar a equilibrio con momentos.\r
2. Si hay deslizamiento y aceleracion, pasar a dinamica con friccion.\r
3. Si hay deformacion notable, pasar a modelo elastico estructural.\r
\r
La transicion explicita es clave: cuando conviene cambiar de modelo, conviene pasar al modelo que representa el fenomeno que hoy aparece como residuo no explicado.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo base del leaf | Modelo extendido |\r
|---------|----------------------|------------------|\r
| Cierre principal | sumFx, sumFy | fuerzas + momentos + dinamica segun caso |\r
| Parametros clave | [[W]], [[N]], [[W_parallel]], [[F_s_max]], [[T]] | agrega inercia, deformacion, perdidas |\r
| Complejidad | Baja a media | Media a alta |\r
| Uso recomendado | Diagnostico y comparacion didactica | Validacion de diseño y campo |\r
| Riesgo de mal uso | Extrapolacion fuera de dominio | Sobrecarga de complejidad innecesaria |\r
\r
Dominar el modelo base permite decidir con criterio tecnico cuando escalar a modelos mas ricos.\r
`;export{e as default};
