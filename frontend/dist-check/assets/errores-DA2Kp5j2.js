const e=`# Errores frecuentes

## Errores conceptuales

### Error 1

**Por qué parece correcto**: Como la onda entra en otro medio, parece natural pensar que todas sus propiedades cambian a la vez.

**Por qué es incorrecto**: En una frontera estacionaria, la frecuencia queda fijada por la fuente. El medio modifica [[v_m]] y [[lambda_m]], no el ritmo temporal impuesto.

**Señal de detección**: El alumno cambia la frecuencia para explicar refraccion o acortamiento de longitud de onda.

**Corrección conceptual**: Mantener la frecuencia como puente entre medios y ajustar la escala espacial mediante [[n]].

**Mini-ejemplo de contraste**: La luz verde sigue siendo verde al atravesar vidrio, aunque su longitud de onda dentro del vidrio sea menor.

### Error 2

**Por qué parece correcto**: [[c]] aparece en muchas formulas de ondas electromagneticas y se memoriza como velocidad de la luz.

**Por qué es incorrecto**: [[c]] es la velocidad de referencia en vacio. Dentro de un medio ordinario se usa [[v_m]], determinada por el indice [[n]].

**Señal de detección**: El calculo da la misma velocidad en aire, agua y vidrio sin justificar que los indices sean iguales.

**Corrección conceptual**: Usar [[c]] solo como referencia y aplicar el indice del medio cuando haya material.

**Mini-ejemplo de contraste**: En vidrio comun, la propagacion es mas lenta que en aire aunque la fuente sea la misma.

## Errores de modelo

### Error 3

**Por qué parece correcto**: Un indice tabulado parece una propiedad fija del material.

**Por qué es incorrecto**: [[n]] puede depender de frecuencia, temperatura, polarizacion o direccion. Un valor tabulado solo vale bajo condiciones concretas.

**Señal de detección**: Se usa el mismo indice para visible, microondas y ultravioleta sin revisar contexto.

**Corrección conceptual**: Indicar region espectral y condiciones del material antes de elegir el indice.

**Mini-ejemplo de contraste**: Un prisma separa colores porque el indice efectivo no es exactamente igual para todas las frecuencias.

### Error 4

**Por qué parece correcto**: El modelo simple con indice real describe muchos ejemplos de aula.

**Por qué es incorrecto**: En medios absorbentes o muy dispersivos, una unica velocidad de fase no describe perdida, ensanchamiento de pulsos ni transporte de energia.

**Señal de detección**: El alumno interpreta un pulso deformado con la misma formula de una onda monocromatica ideal.

**Corrección conceptual**: Cambiar a modelo dispersivo, absorbente o de velocidad de grupo cuando el fenomeno lo requiera.

**Mini-ejemplo de contraste**: Una fibra para pulsos cortos necesita controlar dispersion, no solo calcular una velocidad de fase.

## Errores matemáticos

### Error 5

**Por qué parece correcto**: Dividir o multiplicar por [[n]] puede parecer simetrico si no se interpreta el resultado.

**Por qué es incorrecto**: En un medio ordinario con indice mayor que uno, [[v_m]] y [[lambda_m]] deben disminuir respecto a sus valores de vacio.

**Señal de detección**: Un indice mayor produce una velocidad mayor que [[c]] o una longitud de onda mas grande que [[lambda0]].

**Corrección conceptual**: Antes de calcular, anticipar el sentido fisico del cambio: mas indice implica menor velocidad de fase.

**Mini-ejemplo de contraste**: Para vidrio, el resultado debe estar por debajo de la referencia de vacio.

### Error 6

**Por qué parece correcto**: [[epsilon_r]] y [[mu_r]] son adimensionales y pueden parecer intercambiables.

**Por qué es incorrecto**: Representan respuestas fisicas distintas. La permitividad describe respuesta electrica y la permeabilidad describe respuesta magnetica.

**Señal de detección**: Se sustituye una por otra sin revisar la formula ni las unidades conceptuales.

**Corrección conceptual**: Leer el indice como resultado de una respuesta electromagnetica efectiva, no como un numero aislado.

**Mini-ejemplo de contraste**: En muchos dielectricos opticos [[mu_r]] es cercana a uno, pero no por eso desaparece del razonamiento fisico.

## Errores de interpretación

### Error 7

**Por qué parece correcto**: Si la luz va mas lenta, parece que todos sus efectos deban ser menos energeticos.

**Por qué es incorrecto**: La energia por foton depende de la frecuencia, no de la longitud de onda dentro del material por si sola.

**Señal de detección**: El alumno concluye que un color pierde energia por entrar en vidrio transparente.

**Corrección conceptual**: Separar propagacion espacial de energia fotonica e intensidad.

**Mini-ejemplo de contraste**: Un foton visible no cambia de color solo porque la onda tenga menor longitud de onda dentro del vidrio.

## Regla de autocontrol rápido

Si al cambiar de medio cambiaste frecuencia sin una fuente nueva, revisa el razonamiento. En una frontera estacionaria ordinaria, el medio modifica [[v_m]] y [[lambda_m]] mediante [[n]], mientras la frecuencia conserva la identidad temporal de la radiacion.
`;export{e as default};
