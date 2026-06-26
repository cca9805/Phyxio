# Modelos físicos

## Modelo ideal
El modelo ideal del leaf trata al cuerpo como un sólido rígido y al cambio de eje como un desplazamiento geométrico puro. En esa lectura, la inercia respecto al eje real [[I]] se obtiene a partir de la inercia centroidal [[Icm]] y de la separación entre ejes [[d]]. La simplificación central consiste en separar física interna del cuerpo y efecto geométrico del eje.

Ese desacople es potente porque evita recalcular toda la distribución de masa cada vez que cambia el punto de giro. Mientras el eje nuevo sea paralelo al centroidal, la corrección es directa y mantiene una interpretación física clara: al alejar el eje, aumenta la resistencia al giro.

## Hipótesis
- El cuerpo se comporta como rígido durante el movimiento.
	Si esta hipótesis se viola, [[I]] deja de ser constante y la predicción con Steiner pierde precisión.
- Los ejes comparados son estrictamente paralelos.
	Si la orientación cambia, ya no vale una corrección escalar y se necesita un enfoque tensorial.
- La distancia [[d]] se mide como separación perpendicular entre ejes.
	Si se mide desde puntos del cuerpo y no entre ejes, el resultado queda sesgado.
- El dato [[Icm]] corresponde a la misma familia de ejes.
	Si proviene de otra orientación, el traslado no representa la física del problema.

## Dominio de validez cuantitativo
Una condición útil es que la deformación relativa del cuerpo sea pequeña frente a su tamaño característico, de modo que la hipótesis de rigidez sea razonable. En términos prácticos, el modelo funciona bien cuando las oscilaciones estructurales no dominan la dinámica de giro.

Además, la lectura de orden de magnitud exige que [[I]] cumpla [[I]] >= [[Icm]] para ejes paralelos desplazados. Si el cálculo produce lo contrario, no estamos ante ruido numérico sino ante un error de modelo, de geometría o de unidades.

Cuando [[d]] es del mismo orden que la dimensión del cuerpo, la corrección geométrica suele ser comparable o mayor que [[Icm]]. Ese es precisamente el rango donde Steiner aporta más valor operativo en diseño.

## Señales de fallo del modelo
Una señal observable es obtener [[I]] menor que [[Icm]]. Esa contradicción delata que la lectura geométrica no corresponde al sistema físico o que la distancia se definió mal.

Otra señal clara aparece al comparar respuesta dinámica: con el mismo [[tau]], la [[alpha]] calculada debería bajar si [[I]] sube. Si los datos experimentales muestran la tendencia opuesta de forma sistemática, el modelo ideal no está capturando el mecanismo real.

También falla el modelo si el esquema real incluye flexión apreciable, juego mecánico o cambios de masa efectiva durante el movimiento. En esos casos, la diferencia entre simulación y medición no es un detalle: es una evidencia de que se requiere un modelo extendido.

## Modelo extendido o alternativo
El primer extendido natural es el tensor de inercia cuando la orientación del eje cambia. Allí la relación deja de ser una suma escalar y pasa a una descripción matricial de la inercia rotacional.

Otra alternativa es la integración directa sobre la geometría real cuando [[Icm]] no está disponible o cuando el cuerpo no tiene forma simple de catálogo. Es más costosa, pero evita propagar errores de un dato centroidal mal identificado.

La transición desde el modelo ideal al extendido conviene cuando la validación experimental muestra desviaciones robustas, cuando hay ejes no paralelos o cuando la estructura deja de comportarse como rígida.

Transición explícita: conviene pasar del modelo ideal al modelo alternativo cuando los ejes dejan de ser paralelos, cuando aparece deformación significativa o cuando la comparación entre predicción y medición muestra discrepancias sistemáticas.

Transición explícita de uso: se mantiene Steiner mientras los ejes sean paralelos y la comprobación [[I]] >= [[Icm]] se cumpla con tendencia dinámica consistente entre [[tau]] y [[alpha]]. Se abandona Steiner y se pasa al modelo alternativo en cuanto aparezca cualquiera de estos tres disparadores: cambio de orientación del eje, evidencia de deformación significativa o discrepancia sistemática entre predicción y medición.

Cuándo conviene cambiar de modelo: conviene cambiar de modelo cuando el eje deja de ser paralelo, cuando el cuerpo ya no puede considerarse rígido o cuando las mediciones de [[alpha]] no siguen la tendencia esperada para un [[tau]] dado con el valor calculado de [[I]].

Conviene abandonar el modelo ideal y pasar al modelo extendido cuando se cumpla cualquiera de estas condiciones: ejes no paralelos, deformación apreciable o discrepancia sistemática entre predicción y medición.

## Comparación operativa
1. Steiner escalar.
Precisión: alta en ejes paralelos y cuerpos rígidos. Complejidad: baja. Rango: diseño preliminar y cálculo rápido.

2. Integración directa.
Precisión: alta si la geometría se modela bien. Complejidad: media o alta. Rango: piezas complejas o sin dato centroidal fiable.

3. Tensor de inercia.
Precisión: alta para cambios de orientación. Complejidad: media. Rango: dinámica espacial y acoplamientos entre ejes.
