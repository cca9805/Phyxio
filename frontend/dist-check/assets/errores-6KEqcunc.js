const e=`# Errores frecuentes

## Errores conceptuales

### Error 1 : Interpretar energia negativa como imposible
**Por qué parece correcto**: En muchos contextos cotidianos la energia se imagina como una cantidad siempre positiva.
**Por qué es incorrecto**: En gravitación se elige [[E0]] = 0 en el infinito; por eso [[U]] y una orbita ligada tienen valores negativos.
**Señal de detección**: El alumno rechaza una orbita ligada solo porque [[E]] < 0.
**Corrección conceptual**: Leer el signo como criterio de ligadura, no como existencia o inexistencia de energia.
**Mini-ejemplo de contraste**: Un satelite en orbita baja tiene energia negativa y, precisamente por eso, permanece ligado.

### Error 2 : Confundir energia total y energia especifica
**Por qué parece correcto**: Ambas clasifican el estado orbital y tienen signos equivalentes.
**Por qué es incorrecto**: [[E]] depende de [[m]], mientras [[eps]] es energia por unidad de masa y no cambia al cambiar la masa del satelite.
**Señal de detección**: Se comparan dos orbitas de objetos distintos usando [[E]] sin normalizar.
**Corrección conceptual**: Usar [[eps]] para comparar estados orbitales y [[E]] para trabajo o energia total.
**Mini-ejemplo de contraste**: Dos satelites de masas distintas en la misma orbita tienen igual [[eps]] pero distinta [[E]].

### Error 3 : Pensar que velocidad alta implica escape
**Por qué parece correcto**: La velocidad aumenta [[K]] y parece acercar siempre al escape.
**Por qué es incorrecto**: El escape depende del balance con [[U]], que cambia con [[r]].
**Señal de detección**: La respuesta decide escape mirando solo [[v]].
**Corrección conceptual**: Calcular [[eps]] o comparar [[K]] y [[U]] antes de clasificar.
**Mini-ejemplo de contraste**: Una velocidad grande cerca de un planeta puede seguir siendo ligada si el pozo potencial es profundo.

## Errores de modelo

### Error 4 : Usar formula circular en una orbita eliptica
**Por qué parece correcto**: La relacion circular es simple y usa [[r]], que suele estar disponible.
**Por qué es incorrecto**: En una elipse, [[r]] cambia y no coincide con [[a]] salvo en casos particulares.
**Señal de detección**: Se usa [[r]] como semieje mayor sin justificar orbita circular.
**Corrección conceptual**: Usar energia de estado si se conocen [[r]] y [[v]], o relacion ligada si se conoce [[a]].
**Mini-ejemplo de contraste**: En pericentro y apocentro de una misma elipse, [[r]] cambia, pero [[E]] no.

### Error 5 : Conservar energia aunque haya rozamiento o motor
**Por qué parece correcto**: En problemas de aula la energia mecanica suele conservarse.
**Por qué es incorrecto**: Arrastre atmosferico, empuje o maniobras cambian [[K]], [[U]] y [[E]] mediante trabajo externo.
**Señal de detección**: Se analiza reentrada atmosferica como orbita conservativa.
**Corrección conceptual**: Declarar conservacion solo en tramos sin fuerzas no conservativas.
**Mini-ejemplo de contraste**: Un satelite con arrastre pierde energia y baja de orbita aunque no cambie instantaneamente de forma dramatica.

## Errores matemáticos

### Error 6 : Perder el signo negativo de la energia potencial
**Por qué parece correcto**: La expresion tiene magnitudes positivas y se olvida la referencia en infinito.
**Por qué es incorrecto**: Sin signo negativo no aparece el criterio de orbita ligada.
**Señal de detección**: [[U]] sale positiva y [[E]] queda artificialmente mayor que cero.
**Corrección conceptual**: Mantener [[U]] negativa con referencia cero en infinito.
**Mini-ejemplo de contraste**: Una orbita circular estable debe dar [[E]] negativa, no positiva.

### Error 7 : Igualar radio instantaneo y semieje mayor sin condicion
**Por qué parece correcto**: En una circunferencia ambas longitudes coinciden.
**Por qué es incorrecto**: En elipses, [[r]] depende del punto y [[a]] caracteriza toda la orbita.
**Señal de detección**: El resultado de [[E]] cambia dentro de una misma orbita eliptica conservativa.
**Corrección conceptual**: Separar formulas de estado y formulas orbitales globales.
**Mini-ejemplo de contraste**: En apocentro y pericentro cambia [[r]], pero el semieje mayor [[a]] es el mismo.

## Errores de interpretación

### Error 8 : No cerrar con clasificacion orbital
**Por qué parece correcto**: Tras calcular un numero parece que el ejercicio ha terminado.
**Por qué es incorrecto**: El objetivo fisico de [[E]] o [[eps]] es decidir ligado, escape o trayectoria abierta.
**Señal de detección**: La solucion da joules o J/kg sin frase fisica final.
**Corrección conceptual**: Interpretar el signo respecto a [[E0]].
**Mini-ejemplo de contraste**: [[eps]] negativa significa orbita ligada; [[eps]] positiva significa escape con energia sobrante.

## Regla de autocontrol rápido

Antes de aceptar una solucion, comprueba tres cosas: [[U]] debe ser negativa con cero en infinito, [[K]] debe ser positiva, y el signo de [[E]] o [[eps]] debe aparecer interpretado. Si falta cualquiera de esas tres lecturas, la respuesta esta incompleta.
`;export{e as default};
