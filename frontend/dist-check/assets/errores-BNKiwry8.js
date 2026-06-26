const e=`## Errores conceptuales

### Error 1: creer que la ecuación describe solo una forma sinusoidal

**Por qué parece correcto:** muchas clases presentan primero una onda armónica, de modo que la mente asocia la ecuación de onda con una curva suave y periódica.

**Por qué es incorrecto:** la ecuación conecta curvatura espacial y cambio temporal local. Una forma triangular, un pulso corto o una superposición de pulsos también puede obedecerla si el medio cumple las hipótesis del modelo.

**Señal de detección:** el alumno intenta decidir si hay onda mirando solo si aparece una senoide.

**Corrección conceptual:** primero se pregunta si la perturbación se propaga sin cambiar de forma de manera apreciable y con una rapidez definida [[v]].

**Mini-ejemplo de contraste:** un pulso en una cuerda tensa no es periódico, pero su perfil se traslada y permite leer la misma ley local.

### Error 2: interpretar [[y]] como desplazamiento de transporte neto

**Por qué parece correcto:** la gráfica muestra una perturbación que avanza, y puede parecer que cada punto material viaja con ella.

**Por qué es incorrecto:** [[y]] mide la perturbación local del medio. La energía y la información se propagan; el punto material oscila alrededor de su posición de equilibrio.

**Señal de detección:** se afirma que una partícula de la cuerda recorre toda la longitud del pulso.

**Corrección conceptual:** separar la coordenada espacial [[x]] de la perturbación [[y]] y leer el movimiento de cada punto con el tiempo [[t]].

**Mini-ejemplo de contraste:** una marca de tinta en la cuerda sube y baja cuando pasa el pulso, pero no acompaña al máximo hasta el extremo.

## Errores de modelo

### Error 3: usar una única rapidez aunque el medio sea dispersivo

**Por qué parece correcto:** la ecuación ideal introduce una [[v]] constante y permite cálculos limpios.

**Por qué es incorrecto:** en medios reales con dispersión, distintas componentes de frecuencia pueden viajar con velocidades distintas. Entonces el pulso cambia de forma.

**Señal de detección:** un paquete estrecho se ensancha en el experimento, pero el cálculo lo trata como rígido.

**Corrección conceptual:** comprobar si la rapidez depende de [[omega]] o de [[k]] antes de usar el modelo ideal.

**Mini-ejemplo de contraste:** una onda sonora de baja amplitud en aire ordinario se aproxima bien al modelo; una señal en una guía compleja puede requerir un modelo extendido.

### Error 4: ignorar amortiguamiento y fronteras

**Por qué parece correcto:** la ecuación ideal se escribe para un medio uniforme y sin pérdidas.

**Por qué es incorrecto:** rozamiento, absorción, extremos fijos y cambios de impedancia modifican la evolución real. La ecuación básica describe el tramo donde esas influencias son pequeñas.

**Señal de detección:** la amplitud [[A]] disminuye claramente, pero el razonamiento sigue suponiendo una onda conservada.

**Corrección conceptual:** acotar el intervalo de tiempo y espacio donde la pérdida relativa es pequeña, o añadir términos de amortiguamiento y condiciones de frontera.

**Mini-ejemplo de contraste:** una cuerda corta con extremos fijos forma modos estacionarios; no se interpreta como un pulso libre indefinido.

## Errores matemáticos

### Error 5: confundir pendiente con curvatura

**Por qué parece correcto:** la pendiente parece indicar hacia dónde cambia la forma.

**Por qué es incorrecto:** la ecuación de onda no compara la perturbación con su pendiente, sino con su curvatura. Una recta inclinada tiene pendiente, pero no curvatura.

**Señal de detección:** se espera aceleración temporal donde el perfil es recto.

**Corrección conceptual:** localizar regiones donde la gráfica se dobla. Ahí la curvatura espacial controla el cambio temporal.

**Mini-ejemplo de contraste:** cerca de una cresta redondeada hay curvatura; en un tramo casi lineal la contribución local es mucho menor.

### Error 6: tratar [[omega]] y [[k]] como magnitudes independientes

**Por qué parece correcto:** aparecen como símbolos separados en la solución armónica.

**Por qué es incorrecto:** para el medio ideal, la relación entre frecuencia angular y número de onda fija la rapidez de fase [[v]]. Cambiar una sin revisar la otra cambia la onda física.

**Señal de detección:** se elige una frecuencia y una longitud de onda arbitrarias sin comprobar la rapidez resultante.

**Corrección conceptual:** después de escoger el medio, verificar que la razón entre [[omega]] y [[k]] coincide con la rapidez compatible.

**Mini-ejemplo de contraste:** en una cuerda dada, duplicar [[k]] exige duplicar [[omega]] si se quiere conservar la misma [[v]].

## Errores de interpretación

### Error 7: leer la ecuación como una receta global, no local

**Por qué parece correcto:** la fórmula se presenta en una línea compacta.

**Por qué es incorrecto:** la ley actúa punto a punto. Cada lugar del medio responde a la curvatura de la perturbación en su entorno inmediato.

**Señal de detección:** se intenta explicar todo el perfil usando solo el valor máximo de [[A]].

**Corrección conceptual:** interpretar la gráfica como una colección de respuestas locales conectadas por el medio.

**Mini-ejemplo de contraste:** dos perfiles con la misma amplitud pueden evolucionar de modo distinto si sus curvaturas son distintas.

## Regla de autocontrol rápido

Antes de resolver, comprueba cuatro preguntas. ¿La magnitud [[y]] representa una perturbación local y no un traslado permanente? ¿El medio permite usar una rapidez [[v]] casi constante? ¿La forma que se estudia tiene curvatura espacial relevante? ¿Las magnitudes [[omega]] y [[k]] son compatibles con la rapidez del medio?

Si alguna respuesta falla, el problema no se debe atacar como una aplicación directa de la ecuación ideal. Hay que revisar el modelo, limitar el dominio de validez o pasar a una descripción con pérdidas, dispersión o fronteras.
`;export{e as default};
