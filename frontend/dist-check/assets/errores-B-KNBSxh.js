const e=`# Errores frecuentes: Ley de hooke\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
#### por que parece correcto\r
La expresion algebraica relaciona varias magnitudes y da la sensacion de simetria causal.\r
\r
#### por que es incorrecto\r
En el modelo, la deformacion [[x]] genera respuesta [[Fel]] bajo la hipotesis constitutiva; no al reves en lectura operacional.\r
\r
#### senal de deteccion\r
Se afirma que "la fuerza crea la deformacion" sin declarar condicion de carga o control de desplazamiento.\r
\r
#### correccion conceptual\r
Diferenciar variable impuesta y variable de respuesta antes de escribir ecuaciones.\r
\r
#### mini-ejemplo\r
Mal: "si [[Fel]] aumenta, entonces aparece [[x]] sin contexto".\r
Bien: "impuesta [[x]], el resorte responde con [[Fel]] restauradora".\r
\r
### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto\r
\r
#### por que parece correcto\r
La sustitucion numerica produce un valor limpio y rapido.\r
\r
#### por que es incorrecto\r
Sin verificar linealidad y regimen elastico, el resultado puede ser formalmente correcto pero fisicamente invalido.\r
\r
#### senal de deteccion\r
No se reporta rango de deformacion ni evidencia de respuesta lineal.\r
\r
#### correccion conceptual\r
Anexar siempre criterio de validez junto al numero final.\r
\r
#### mini-ejemplo\r
Mal: usar Hooke en deformacion grande sin advertencia.\r
Bien: declarar "resultado valido en tramo lineal caracterizado".\r
\r
### Error 3: Confundir magnitudes similares\r
\r
#### por que parece correcto\r
[[Fel]] y [[Fm]] comparten unidades y numeros parecidos en muchos ejercicios.\r
\r
#### por que es incorrecto\r
[[Fel]] conserva direccion y signo; [[Fm]] solo intensidad. Intercambiarlas rompe la interpretacion dinamica.\r
\r
#### senal de deteccion\r
Se usa [[Fm]] para justificar sentido de aceleracion o restauracion.\r
\r
#### correccion conceptual\r
Mantener dos columnas de trabajo: una vectorial/signada y otra escalar.\r
\r
#### mini-ejemplo\r
Mal: "[[Fm]] negativa".\r
Bien: "[[Fel]] negativa, [[Fm]] positiva".\r
\r
\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
#### por que parece correcto\r
En ejercicios introductorios la linealidad suele funcionar bien.\r
\r
#### por que es incorrecto\r
En presencia de historesis o no linealidad, [[k]] deja de ser constante efectiva.\r
\r
#### senal de deteccion\r
La pendiente de la curva [[Fel]]-[[x]] cambia con la amplitud.\r
\r
#### correccion conceptual\r
Definir umbral cuantitativo de desvio y activar modelo alternativo cuando se supera.\r
\r
#### mini-ejemplo\r
Mal: ajustar una unica recta a todo el rango no lineal.\r
Bien: restringir ajuste al tramo lineal o migrar a ley por tramos.\r
\r
### Error 5: Ignorar los límites del modelo conocidos\r
\r
#### por que parece correcto\r
La ecuacion es simple y parece universal.\r
\r
#### por que es incorrecto\r
Todo modelo constitutivo tiene dominio; fuera de el, la incertidumbre crece rapidamente.\r
\r
#### senal de deteccion\r
Se reporta resultado sin indicar si [[x]] o [[x_eq]] estan dentro de ventana lineal.\r
\r
#### correccion conceptual\r
Reportar siempre valor mas condicion de validez.\r
\r
#### mini-ejemplo\r
Mal: "[[x_eq]] = 0.18 m" sin contexto.\r
Bien: "[[x_eq]] = 0.18 m, valido si el tramo lineal llega al menos a 0.20 m".\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
#### por que parece correcto\r
El algebra se ejecuta de memoria y parece rutinaria.\r
\r
#### por que es incorrecto\r
Un signo mal trasladado invierte el caracter restaurador.\r
\r
#### senal de deteccion\r
Aparece [[Fel]] con mismo signo que [[x]] bajo convencion restauradora.\r
\r
#### correccion conceptual\r
Revisar proyeccion y signo antes de aceptar el despeje.\r
\r
#### mini-ejemplo\r
Mal: [[Fel]] = +[[k]][[x]] en eje donde deberia ser opuesto.\r
Bien: usar la forma con signo coherente con la convencion declarada.\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
#### por que parece correcto\r
Los numeros "se ven razonables" y no disparan alarma inmediata.\r
\r
#### por que es incorrecto\r
Errores de cm a m o de N/mm a N/m cambian [[k]] por factores de mil.\r
\r
#### senal de deteccion\r
Fuerzas o energias fuera de escala para un montaje pequeño.\r
\r
#### correccion conceptual\r
Normalizar SI al inicio y hacer chequeo dimensional final.\r
\r
#### mini-ejemplo\r
Mal: usar 4 cm como 4 m.\r
Bien: convertir 4 cm a 0.04 m antes de sustituir.\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite\r
\r
#### por que parece correcto\r
Muchos decimales transmiten apariencia de rigor.\r
\r
#### por que es incorrecto\r
La precision numerica no compensa incertidumbre de modelo.\r
\r
#### senal de deteccion\r
Se reportan seis decimales sin banda de validez.\r
\r
#### correccion conceptual\r
Usar cifras significativas acordes a datos y supuestos.\r
\r
#### mini-ejemplo\r
Mal: [[k]] = 253.127941 N/m sin incertidumbre.\r
Bien: [[k]] = 253 N/m con tolerancia declarada.\r
\r
### Error 9: Saltarte la interpretación física del resultado calculado\r
\r
#### por que parece correcto\r
Obtener el numero final da sensacion de cierre.\r
\r
#### por que es incorrecto\r
Sin lectura fisica no hay criterio para decidir accion de diseño o ensayo.\r
\r
#### senal de deteccion\r
La solucion termina en ecuacion sin conclusion operativa.\r
\r
#### correccion conceptual\r
Cerrar con decision: que ajustar y por que mejora el comportamiento.\r
\r
#### mini-ejemplo\r
Mal: "resultado calculado".\r
Bien: "conviene reducir [[x]] maxima para mantener validez lineal".\r
\r
## Regla de autocontrol rápido\r
\r
- ¿Declare eje y signo antes de calcular [[Fel]]?\r
- ¿Diferencie [[Fel]] de [[Fm]] en todo el desarrollo?\r
- ¿Comprobe unidades de [[k]] y [[x]] en SI?\r
- ¿Verifique que [[x]] o [[x_eq]] estan en rango lineal?\r
- ¿Cerre con una decision fisica concreta?\r
\r
Si alguna respuesta es no, la solucion aun no es confiable para uso operativo.\r
`;export{e as default};
