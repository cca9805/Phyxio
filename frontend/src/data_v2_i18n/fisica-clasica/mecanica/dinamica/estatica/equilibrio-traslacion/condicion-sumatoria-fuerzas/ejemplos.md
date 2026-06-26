# Ejemplo tipo examen

## Enunciado

Una lampara de masa [[m]] de 12 kg cuelga del techo mediante dos cables simetricos. Cada cable forma un angulo [[theta]] de 35 grados con la horizontal. Se pide calcular la tension [[T]] en cada cable y verificar que el sistema cumple condicion de equilibrio traslacional.

## Datos

- Masa total suspendida: [[m]] de 12 kg.
- Aceleracion de gravedad aproximada de nueve coma ochenta y un metros por segundo al cuadrado.
- Angulo de cada cable: [[theta]] de 35 grados.
- Configuracion simetrica, por lo que ambas tensiones tienen igual modulo [[T]].

## Definición del sistema

Se define como sistema la lampara, considerada cuerpo rigido pequeno para equilibrio traslacional. Fuerzas externas sobre el sistema:

1. Peso vertical hacia abajo.
2. Tension del cable izquierdo, oblicua hacia arriba.
3. Tension del cable derecho, oblicua hacia arriba.

No se incluyen fuerzas internas del material de la lampara porque no modifican el balance externo del sistema aislado.

## Modelo físico

Modelo de estatica traslacional en 2D. Se exige suma de fuerzas nula en los ejes x e y. Se adopta eje x horizontal y eje y vertical positivo hacia arriba.

Para el cierre vectorial y por componentes usamos:

{{f:equilibrio_traslacional_vectorial}}

{{f:equilibrio_por_componentes}}

La descomposicion vertical de cada tension se relaciona con:

{{f:descomposicion_y}}

Y el peso de la lampara se obtiene con:

{{f:peso_desde_masa}}

## Justificación del modelo

Este modelo es adecuado porque el problema declara reposo, no hay aceleracion observada y los cables se modelan ideales. Ademas, la configuracion es plana y el objetivo es diagnosticar equilibrio traslacional, no deformacion elastica del soporte.

## Resolución simbólica

Por simetria, componentes horizontales de las tensiones se cancelan entre si.

{{f:equilibrio_traslacional_vectorial}}

{{f:equilibrio_por_componentes}}

{{f:descomposicion_x}}

{{f:descomposicion_y}}

{{f:peso_desde_masa}}

En y:

la suma de componentes verticales de ambas tensiones debe compensar el peso total.

Despejando:

se obtiene que la tension depende del peso y de la proyeccion angular vertical de cada cable.

## Sustitución numérica

Peso:

la carga gravitatoria de la lampara se estima alrededor de ciento dieciocho newtons.

Con seno de 35 grados aproximadamente igual a 0.574:

la tension en cada cable resulta del orden de ciento tres newtons.

Cada cable soporta aproximadamente 103 N.

## Validación dimensional

En la relacion simbolica usada, el termino trigonometrico es adimensional, por lo que la unidad final de tension coincide con la unidad de fuerza del peso. El chequeo dimensional es consistente y no mezcla magnitudes incompatibles.

Ademas, el analisis de unidades confirma que no se suman componentes con distinta direccion fisica. Esta verificacion es crucial porque muchos errores aparecen al combinar terminos horizontales y verticales en una misma ecuacion.

## Interpretación física

El resultado muestra un hecho no intuitivo para principiantes: la tension de cada cable puede ser comparable al peso total incluso siendo dos cables. La razon es geometrica: solo la componente vertical de cada [[T]] sostiene la carga.

Cuando [[theta]] disminuye, esa componente vertical se reduce y la tension requerida aumenta. Este patron conecta directamente geometria, descomposicion y criterio de equilibrio.

# Ejemplo de aplicación real

## Contexto

En un escenario urbano, una marquesina liviana se sostiene mediante un cable superior y un apoyo en la pared. Durante mantenimiento, se agrega temporalmente una carga de herramientas de masa [[m]] de 18 kg en el borde libre. El tecnico necesita saber si la tension [[T]] esperada en el cable permanece dentro de un rango seguro y si el equilibrio traslacional se conserva.

El sistema simplificado considera dos fuerzas de soporte principales: reaccion del apoyo y tension del cable. El cable forma [[theta]] de 50 grados con la horizontal. Aunque una evaluacion estructural completa tambien requiere momentos, una primera evaluacion de seguridad se realiza con sumatoria de fuerzas para descartar desequilibrios groseros.

## Estimación física

Primero se convierte la masa en peso con la relacion correspondiente. Para una masa de dieciocho kilogramos, el peso ronda ciento setenta y siete newtons. Si se asume que la componente vertical del cable aporta aproximadamente el setenta por ciento del soporte y la reaccion del apoyo el treinta por ciento restante, entonces la componente vertical del cable debe ubicarse cerca de ciento veinticuatro newtons.

Con [[theta]] de 50 grados y seno de 50 grados cercano a 0.766, una estimacion de tension se mantiene en el rango esperado:

del orden de ciento sesenta newtons.

En el eje horizontal, la componente del cable se compensa con la reaccion horizontal del apoyo. Si esa compensacion no aparece en mediciones o en el modelo, el sistema no puede declararse en equilibrio traslacional.

Para validacion de orden de magnitud, 161 N es coherente con una carga de 18 kg y un angulo intermedio. No es un valor extremo y es compatible con cables metalicos de uso arquitectonico ligero.

## Interpretación

La estimacion confirma tres ideas operativas:

1. El equilibrio traslacional depende de balance por ejes, no de contar "cuantas fuerzas hay".
2. [[theta]] controla de forma fuerte el valor de [[T]], por lo que cambios geometricos pequenos pueden exigir redimensionamiento.
3. La condicion de sumatoria de fuerzas sirve como filtro inicial de seguridad: si no cierra en x e y, cualquier calculo posterior de detalle parte de una base fisicamente inconsistente.

En trabajo profesional, este analisis se complementa con momentos, fatiga y factores de seguridad. Aun asi, la primera decision tecnica sigue siendo la misma que en el aula: verificar que la resultante [[R]] sea compatible con cero dentro de la tolerancia de medida y de modelado.

Un aprendizaje adicional de este ejemplo real es la importancia de documentar supuestos. Si el reparto setenta-treinta entre cable y apoyo cambia por una modificacion de montaje, el valor de [[T]] cambia sin que la masa total varie. Por eso el calculo debe registrarse junto con la hipotesis de reparto y el rango admisible de variacion.

Tambien conviene comunicar resultados de forma operativa: no solo un numero de tension, sino un intervalo esperable bajo incertidumbre angular y una recomendacion de inspeccion visual. Esa practica conecta el formalismo del leaf con decisiones de mantenimiento seguras y repetibles.
