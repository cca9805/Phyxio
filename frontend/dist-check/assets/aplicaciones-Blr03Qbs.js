const e=`# Aplicaciones de Routhiano y coordenadas ciclicas

## 1. Reduccion Por Simetria

En reduccion por simetria, el leaf se usa al comienzo del analisis para filtrar configuraciones posibles. La tarea consiste en estimar una escala dominante, compararla con una correccion secundaria y decidir si el regimen esperado merece un calculo detallado. Esta aplicacion es util porque evita simular casos que ya contradicen la lectura fisica basica.

Variable dominante: [[Routh]] fija la escala de referencia y permite ordenar los datos antes de elegir metodo. Si su valor queda fuera del intervalo previsto, el problema debe replantearse desde las hipotesis.

Límite de validez: se acepta mientras la correccion secundaria permanezca por debajo del 10 % y el caso limite conserve una interpretacion reconocible. Si no, se declara cambio de modelo.

## 2. Pendulo Esferico

En pendulo esferico, el objetivo es diagnosticar una serie de medidas. Se observan tendencias, signos y curvaturas, y despues se comprueba si la relacion del leaf puede explicarlas sin añadir mecanismos externos. El valor didactico esta en comparar datos con criterio fisico, no en ajustar parametros a ciegas.

Variable dominante: [[Routh]] actua como indicador de tendencia acumulada. Un cambio monotono, una inversion de signo o una saturacion dan informacion distinta sobre el fenomeno.

Límite de validez: falla cuando los residuos crecen con patron sistematico, cuando el signo medido contradice la prediccion o cuando el ajuste solo mejora ocultando una hipotesis rota.

## 3. Mecanismos Con Giro Libre

En mecanismos con giro libre, el leaf ayuda a escoger entre una descripcion reducida y otra mas completa. Se comienza con el modelo ideal para localizar la causa principal, y solo despues se decide si una extension aporta informacion nueva. Asi se evita confundir complejidad con precision.

Variable dominante: [[Routh]] separa el mecanismo esencial de los efectos accesorios. Si domina claramente, la descripcion reducida conserva valor explicativo; si compite con terminos omitidos, la reduccion pierde fuerza.

Límite de validez: el modelo reducido se mantiene mientras la extension no cambie la jerarquia causal ni desplace el caso limite que justificaba la simplificacion.

## 4. Modos Ciclicos

En modos ciclicos, la aplicacion se centra en margen de diseño. Una frontera, una geometria o una condicion inicial se modifica lentamente para ver cuanto tarda el sistema en abandonar el regimen seguro. El resultado se interpreta como margen operativo, no como cifra aislada.

Variable dominante: [[Routh]] mide la distancia conceptual hasta el cambio de comportamiento. Su sensibilidad frente a pequeñas variaciones indica si el diseño es robusto o delicado.

Límite de validez: la estimacion deja de ser fiable cuando una variacion pequeña altera el significado fisico de la magnitud o introduce un mecanismo que el leaf no contiene.

## 5. Energia Reducida

En energia reducida, el uso principal es evaluar comprension. El alumno debe justificar sistema, unidades, signo, escala y caso limite antes de presentar la conclusion. Esta aplicacion convierte el leaf en una guia de razonamiento y no solo en una coleccion de formulas.

Variable dominante: [[Routh]] funciona como pregunta de control. Si el alumno no puede explicar que representa, tampoco puede defender el resultado aunque el algebra este bien escrita.

Límite de validez: la respuesta es suficiente solo si conecta calculo, hipotesis, consecuencia observable y posible transicion a un modelo extendido.

Nota de cierre: estas cinco aplicaciones no pretenden cubrir todo el uso profesional del leaf, sino mostrar cinco decisiones distintas. En una se filtra viabilidad, en otra se diagnostican datos, en otra se elige complejidad, en otra se mide margen y en otra se evalua comprension. La misma formula puede aparecer en todas, pero la pregunta fisica cambia. Por eso Phyxio exige que cada aplicacion indique variable dominante y limite de validez: el alumno aprende que una relacion no se transporta de contexto sin revisar hipotesis, escala y consecuencia observable.

Ampliacion didactica: en todos los casos, el profesor puede pedir una comparacion final entre prediccion ideal, dato real y modelo alternativo. Esa comparacion añade criterio profesional: muestra si el alumno sabe mantener una aproximacion, corregirla con prudencia o abandonarla cuando los datos ya no sostienen las hipotesis. Tambien obliga a verbalizar que se conserva, que se desprecia y que evidencia faltaria para cerrar el diagnostico.

Criterio transversal de uso: despues de aplicar una relacion, se debe escribir una decision operacional concreta. Esa decision puede ser aceptar el regimen, pedir una medicion adicional, cambiar la escala de estimacion o rechazar el modelo ideal. Esta frase de cierre aumenta la utilidad didactica porque obliga a convertir el calculo en juicio fisico y evita que la aplicacion sea solo una descripcion tecnica.

Cierre operativo adicional: la aplicacion se considera completa cuando el estudiante identifica una medicion concreta que podria confirmar o refutar la conclusion. Sin esa medicion, el resultado queda como ejercicio formal y no como razonamiento fisico aplicado.

Decision final verificable: indicar medicion, escala, signo, limite, incertidumbre, modelo alternativo y consecuencia observable.

Criterio docente extra: formular una pregunta inversa, estimar el error relativo, explicar el dato dominante y decidir si el resultado tiene valor predictivo o solo diagnostico.
`;export{e as default};
