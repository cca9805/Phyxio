# Errores frecuentes: Ley de hooke

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### por que parece correcto
La expresion algebraica relaciona varias magnitudes y da la sensacion de simetria causal.

#### por que es incorrecto
En el modelo, la deformacion [[x]] genera respuesta [[Fel]] bajo la hipotesis constitutiva; no al reves en lectura operacional.

#### senal de deteccion
Se afirma que "la fuerza crea la deformacion" sin declarar condicion de carga o control de desplazamiento.

#### correccion conceptual
Diferenciar variable impuesta y variable de respuesta antes de escribir ecuaciones.

#### mini-ejemplo
Mal: "si [[Fel]] aumenta, entonces aparece [[x]] sin contexto".
Bien: "impuesta [[x]], el resorte responde con [[Fel]] restauradora".

### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto

#### por que parece correcto
La sustitucion numerica produce un valor limpio y rapido.

#### por que es incorrecto
Sin verificar linealidad y regimen elastico, el resultado puede ser formalmente correcto pero fisicamente invalido.

#### senal de deteccion
No se reporta rango de deformacion ni evidencia de respuesta lineal.

#### correccion conceptual
Anexar siempre criterio de validez junto al numero final.

#### mini-ejemplo
Mal: usar Hooke en deformacion grande sin advertencia.
Bien: declarar "resultado valido en tramo lineal caracterizado".

### Error 3: Confundir magnitudes similares

#### por que parece correcto
[[Fel]] y [[Fm]] comparten unidades y numeros parecidos en muchos ejercicios.

#### por que es incorrecto
[[Fel]] conserva direccion y signo; [[Fm]] solo intensidad. Intercambiarlas rompe la interpretacion dinamica.

#### senal de deteccion
Se usa [[Fm]] para justificar sentido de aceleracion o restauracion.

#### correccion conceptual
Mantener dos columnas de trabajo: una vectorial/signada y otra escalar.

#### mini-ejemplo
Mal: "[[Fm]] negativa".
Bien: "[[Fel]] negativa, [[Fm]] positiva".



## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

#### por que parece correcto
En ejercicios introductorios la linealidad suele funcionar bien.

#### por que es incorrecto
En presencia de historesis o no linealidad, [[k]] deja de ser constante efectiva.

#### senal de deteccion
La pendiente de la curva [[Fel]]-[[x]] cambia con la amplitud.

#### correccion conceptual
Definir umbral cuantitativo de desvio y activar modelo alternativo cuando se supera.

#### mini-ejemplo
Mal: ajustar una unica recta a todo el rango no lineal.
Bien: restringir ajuste al tramo lineal o migrar a ley por tramos.

### Error 5: Ignorar los límites del modelo conocidos

#### por que parece correcto
La ecuacion es simple y parece universal.

#### por que es incorrecto
Todo modelo constitutivo tiene dominio; fuera de el, la incertidumbre crece rapidamente.

#### senal de deteccion
Se reporta resultado sin indicar si [[x]] o [[x_eq]] estan dentro de ventana lineal.

#### correccion conceptual
Reportar siempre valor mas condicion de validez.

#### mini-ejemplo
Mal: "[[x_eq]] = 0.18 m" sin contexto.
Bien: "[[x_eq]] = 0.18 m, valido si el tramo lineal llega al menos a 0.20 m".

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

#### por que parece correcto
El algebra se ejecuta de memoria y parece rutinaria.

#### por que es incorrecto
Un signo mal trasladado invierte el caracter restaurador.

#### senal de deteccion
Aparece [[Fel]] con mismo signo que [[x]] bajo convencion restauradora.

#### correccion conceptual
Revisar proyeccion y signo antes de aceptar el despeje.

#### mini-ejemplo
Mal: [[Fel]] = +[[k]][[x]] en eje donde deberia ser opuesto.
Bien: usar la forma con signo coherente con la convencion declarada.

### Error 7: Olvidar constantes fundamentales o unidades

#### por que parece correcto
Los numeros "se ven razonables" y no disparan alarma inmediata.

#### por que es incorrecto
Errores de cm a m o de N/mm a N/m cambian [[k]] por factores de mil.

#### senal de deteccion
Fuerzas o energias fuera de escala para un montaje pequeño.

#### correccion conceptual
Normalizar SI al inicio y hacer chequeo dimensional final.

#### mini-ejemplo
Mal: usar 4 cm como 4 m.
Bien: convertir 4 cm a 0.04 m antes de sustituir.

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

#### por que parece correcto
Muchos decimales transmiten apariencia de rigor.

#### por que es incorrecto
La precision numerica no compensa incertidumbre de modelo.

#### senal de deteccion
Se reportan seis decimales sin banda de validez.

#### correccion conceptual
Usar cifras significativas acordes a datos y supuestos.

#### mini-ejemplo
Mal: [[k]] = 253.127941 N/m sin incertidumbre.
Bien: [[k]] = 253 N/m con tolerancia declarada.

### Error 9: Saltarte la interpretación física del resultado calculado

#### por que parece correcto
Obtener el numero final da sensacion de cierre.

#### por que es incorrecto
Sin lectura fisica no hay criterio para decidir accion de diseño o ensayo.

#### senal de deteccion
La solucion termina en ecuacion sin conclusion operativa.

#### correccion conceptual
Cerrar con decision: que ajustar y por que mejora el comportamiento.

#### mini-ejemplo
Mal: "resultado calculado".
Bien: "conviene reducir [[x]] maxima para mantener validez lineal".

## Regla de autocontrol rápido

- ¿Declare eje y signo antes de calcular [[Fel]]?
- ¿Diferencie [[Fel]] de [[Fm]] en todo el desarrollo?
- ¿Comprobe unidades de [[k]] y [[x]] en SI?
- ¿Verifique que [[x]] o [[x_eq]] estan en rango lineal?
- ¿Cerre con una decision fisica concreta?

Si alguna respuesta es no, la solucion aun no es confiable para uso operativo.
