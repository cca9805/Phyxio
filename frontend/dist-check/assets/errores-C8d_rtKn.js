const e=`## Errores conceptuales
### Error 1: Tratar [[tau]] como tiempo total de carga
Por que parece correcto:
La frase informal de que un circuito carga en una constante de tiempo se escucha mucho y puede confundirse con finalizacion completa.
Senal de deteccion:
El estudiante afirma que al primer intervalo caracteristico ya no hay transitorio relevante.
Mini-ejemplo de contraste:
Al comparar valores medidos de [[Vc]] en multiples instantes, aun se observan diferencias apreciables entre el primer intervalo y el estado tardio.
Correccion conceptual:
[[tau]] es escala temporal de aproximacion, no cierre exacto del proceso. La convergencia es asintotica.

### Error 2: Olvidar el papel de condiciones iniciales
Por que parece correcto:
En muchos ejercicios introductorios se asume inicio descargado y ese patron se generaliza sin revisar datos.
Senal de deteccion:
Se ignora [[V0]] al seleccionar la relacion temporal y se aplica siempre el mismo esquema de carga.
Mini-ejemplo de contraste:
En una maniobra de conmutacion rapida, el capacitor conserva estado previo y la curva observada no coincide con la suposicion de arranque descargado.
Correccion conceptual:
Toda resolucion RC debe declarar explicitamente estado inicial y estado final antes de cualquier calculo.

## Errores de modelo
### Error 1: Forzar modelo de un polo cuando hay dinamica multiple
Por que parece correcto:
El ajuste exponencial simple es atractivo por su facilidad y puede dar buena apariencia en una parte de la curva.
Senal de deteccion:
Queda residuo sistematico en inicio y cola al ajustar con una sola escala temporal.
Mini-ejemplo de contraste:
Una curva experimental muestra tramo inicial rapido y cola lenta, incompatible con una unica [[tau]].
Correccion conceptual:
Si aparecen dos escalas visibles, escalar a modelo extendido con parametros adicionales.

### Error 2: Suponer linealidad completa fuera del rango operativo
Por que parece correcto:
En condiciones moderadas, [[R]] y [[C]] parecen constantes y se asume que siempre lo son.
Senal de deteccion:
La prediccion cambia de forma no proporcional al variar amplitud de excitacion.
Mini-ejemplo de contraste:
Con excitacion baja la curva ajusta bien, con excitacion alta aparece desviacion persistente.
Correccion conceptual:
Revisar dominio de validez y considerar no linealidades, tolerancias termicas y efectos de etapa activa.

## Errores matemáticos
### Error 1: Mezclar unidades de tiempo y capacitancia
Por que parece correcto:
En calculadora los numeros pueden parecer razonables aunque se mezclen milisegundos con segundos o microfaradios con faradios.
Senal de deteccion:
Se obtiene una [[tau]] de orden imposible para la aplicacion sin detectar inconsistencia.
Mini-ejemplo de contraste:
Con los mismos componentes, dos estudiantes obtienen escalas temporales que difieren por varios ordenes de magnitud.
Correccion conceptual:
Normalizar unidades SI antes de evaluar cualquier exponencial y documentar conversion realizada.

### Error 2: Tratar [[I]] como constante durante todo el transitorio
Por que parece correcto:
Se extrapola intuicion de resistencias puras a redes con almacenamiento.
Senal de deteccion:
El resultado de potencia o energia contradice la tendencia observada en mediciones temporales.
Mini-ejemplo de contraste:
Una medicion de corriente muestra decaimiento claro mientras el calculo teórico reporta valor fijo.
Correccion conceptual:
Recordar que en RC ideal de carga la corriente decrece con el tiempo y solo coincide con el valor inicial en el arranque.

### Error 3: Perder coherencia de signos
Por que parece correcto:
La orientacion de referencia suele omitirse y luego se mezclan valores algebraicos y magnitudes absolutas.
Senal de deteccion:
Aparecen resultados con tendencias incompatibles, por ejemplo tension que se aleja del objetivo en lugar de acercarse.
Mini-ejemplo de contraste:
Una descarga calculada produce incremento de magnitud sin fuente activa, resultado fisicamente sospechoso.
Correccion conceptual:
Fijar convencion de polaridad y mantenerla en todas las etapas del problema.

## Errores de interpretación
### Error 1: Leer un valor puntual como comportamiento global
Por que parece correcto:
Un numero aislado puede parecer correcto y generar confianza excesiva.
Senal de deteccion:
Se concluye calidad de diseno sin revisar tendencia completa de [[Vc]] o [[I]].
Mini-ejemplo de contraste:
El punto intermedio coincide con expectativa, pero la cola temporal queda fuera de especificacion.
Correccion conceptual:
Interpretar siempre forma de curva, no solo una muestra.

### Error 2: Confundir exactitud numerica con validez fisica
Por que parece correcto:
La calculadora devuelve muchos decimales y eso se interpreta como certeza.
Senal de deteccion:
No se comprueba dominio de validez ni coherencia con magnitudes observables.
Mini-ejemplo de contraste:
El valor calculado tiene precision alta pero contradice orden de magnitud esperado por experiencia de laboratorio.
Correccion conceptual:
Primero validar plausibilidad fisica, luego refinar precision numerica.

### Error 3: Ignorar compromiso de diseno
Por que parece correcto:
Se optimiza una sola variable, por ejemplo rapidez, sin considerar costos asociados.
Senal de deteccion:
Al reducir [[tau]] se omite revision de corriente inicial y disipacion.
Mini-ejemplo de contraste:
El sistema responde rapido pero sobrecarga termicamente la resistencia en arranque.
Correccion conceptual:
Todo ajuste de [[R]] o [[C]] debe evaluarse junto con esfuerzo de corriente y requerimientos funcionales.

## Regla de autocontrol rápido
Antes de cerrar un ejercicio RC, aplica esta secuencia corta:
1. Verifica que condiciones iniciales y finales esten declaradas con [[V0]] y [[Vf]].
2. Confirma unidades SI de [[R]], [[C]] y [[t]].
3. Comprueba que la tendencia temporal de [[Vc]] sea compatible con carga o descarga planteada.
4. Revisa que [[I]] presente comportamiento transitorio coherente y no constante arbitraria.
5. Contrasta resultado con orden de magnitud esperado para decidir si el modelo sigue siendo valido.

Si cualquiera de estos cinco puntos falla, el error no es solo algebraico. Es un fallo de lectura fisica y de criterio de modelo. Corregir ese nivel es lo que diferencia resolver ejercicios de comprender sistemas reales.
`;export{e as default};
