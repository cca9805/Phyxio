const e=`# Errores frecuentes en Potencial efectivo y ecuacion radial

## Errores conceptuales

### Error 1: Confundir simbolo con significado

**Por que parece correcto**
La confusion nace de una analogia superficial: el alumno ve un simbolo conocido y cree que conserva automaticamente el mismo significado en cualquier marco o dominio.

**Por que es incorrecto**
En este leaf, el significado depende de hipotesis, escala y sistema. La misma letra puede cambiar de papel si cambia la geometria, la frontera o el tipo de balance.

**Senal de deteccion**
El resultado parece numericamente razonable pero no permite explicar que mecanismo domina ni que cambio observable produciria [[Ueff]].

**Correccion conceptual**
Antes de operar, escribe una frase causal: [[Ueff]] aumenta, disminuye o cambia de regimen porque modifica una parte concreta del modelo.

**Mini-ejemplo de contraste**
Si dos sistemas usan la misma letra para magnitudes distintas, sustituir sin redefinir produce una igualdad formal y una lectura fisica falsa. El resultado correcto exige volver al sistema.

## Errores de modelo

### Error 2: Suponer que la aproximacion no tiene frontera

**Por que parece correcto**
La generalizacion excesiva aparece cuando una formula ha funcionado en ejercicios anteriores y se aplica a cualquier dato parecido.

**Por que es incorrecto**
Toda aproximacion omite terminos. Cuando una correccion se vuelve comparable con la escala principal, el modelo ideal ya no representa el sistema real.

**Senal de deteccion**
La desviacion se repite en el mismo sentido, el caso limite no aparece o la prediccion cambia demasiado al variar poco un dato.

**Correccion conceptual**
Declara un criterio cuantitativo, por ejemplo correccion menor que 10 %, y cambia de modelo cuando ese criterio no se cumple.

**Mini-ejemplo de contraste**
Un ajuste ideal puede parecer limpio con dos puntos, pero fallar con una serie completa. Lo correcto es reconocer el patron y pasar al modelo extendido.

## Errores matemáticos

### Error 3: Perder signo, unidad o dependencia funcional

**Por que parece correcto**
El sesgo algebraico lleva a simplificar expresiones sin conservar la pregunta fisica. El alumno intenta despejar rapido y deja de mirar dimensiones.

**Por que es incorrecto**
Un signo fija direccion o tendencia, una unidad fija naturaleza fisica y una dependencia funcional indica que variable controla el cambio.

**Senal de deteccion**
La dimension no coincide, aparece una cantidad negativa imposible o el resultado no cambia al variar la magnitud que deberia controlarlo.

**Correccion conceptual**
Cada transformacion debe conservar unidades, signo esperado y dependencia con [[Ueff]]. Si una de esas tres cosas falla, el despeje no es valido.

**Mini-ejemplo de contraste**
Eliminar un signo para obtener un valor positivo puede ocultar una direccion opuesta. El resultado correcto conserva el signo y lo interpreta.

## Errores de interpretación

### Error 4: Cerrar con un numero sin decision fisica

**Por que parece correcto**
La costumbre escolar premia llegar a una cifra final. Eso induce a creer que interpretar es repetir el valor obtenido.

**Por que es incorrecto**
En mecanica avanzada, el valor solo importa si permite decidir regimen, estabilidad, compatibilidad, flujo o necesidad de otro modelo.

**Senal de deteccion**
La conclusion no dice que pasaria si [[Ueff]] aumenta o disminuye, ni menciona validez, limite o consecuencia observable.

**Correccion conceptual**
Termina con una decision fisica: el modelo vale, falla, predice una tendencia o exige una extension.

**Mini-ejemplo de contraste**
Un resultado de alta precision puede ser inutil si procede de hipotesis rotas. La conclusion correcta informa primero del fallo del modelo.

## Regla de autocontrol rápido

Antes de aceptar una solucion, aplica cuatro controles: mismo sistema, unidades coherentes, caso limite reconocible y lectura causal de [[Ueff]]. Si uno falla, la respuesta no esta lista para publicarse como conclusion fisica.
`;export{e as default};
