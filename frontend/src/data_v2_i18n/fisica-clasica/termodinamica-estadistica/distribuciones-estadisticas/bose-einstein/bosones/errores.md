## Errores conceptuales


### Error 1: Tratar la [[ocupacion_media]] como una probabilidad
**Por qué parece correcto**
Como la [[ocupacion_media]] sale de una distribución estadística, parece natural leerla como posibilidad de que aparezca una partícula.

**Por qué es incorrecto**
La [[ocupacion_media]] es un número medio de bosones en un estado. Puede superar 1 porque varios bosones pueden compartir el mismo estado cuántico.

**Señal de detección**
El alumno se sorprende al obtener una [[ocupacion_media]] mayor que 1 o intenta forzarla entre 0 y 1.

**Corrección conceptual**
Lee la [[ocupacion_media]] como población media del estado, no como probabilidad individual.

**Mini-ejemplo de contraste**
Una [[ocupacion_media]] de 3 no significa 300% de probabilidad; significa tres bosones de media en ese estado.


### Error 2: Pensar que los bosones siempre condensan
**Por qué parece correcto**
Se asocia bosón con condensación Bose-Einstein y se olvida que hacen falta condiciones de [[temperatura]] y [[densidad_particulas]].

**Por qué es incorrecto**
La condensación ideal requiere que [[densidad_particulas]] se acerque a [[densidad_critica]] y que la [[longitud_onda_termica]] sea comparable con la separación media.

**Señal de detección**
Se anuncia condensación solo porque las partículas son bosones.

**Corrección conceptual**
Primero calcula o estima [[longitud_onda_termica]] y compara [[densidad_particulas]] con [[densidad_critica]].

**Mini-ejemplo de contraste**
Un gas bosónico caliente puede tener [[ocupacion_media]] pequeña en cada estado y no estar condensado.

## Errores de modelo


### Error 3: Usar el gas ideal cuando las interacciones dominan
**Por qué parece correcto**
Las fórmulas ideales son limpias y suelen ser el primer modelo enseñado.

**Por qué es incorrecto**
Interacciones fuertes cambian la [[energia]] efectiva de los estados y deforman la relación entre [[ocupacion_media]], [[temperatura]] y [[potencial_quimico]].

**Señal de detección**
Los datos experimentales no siguen la curva esperada aunque las unidades estén bien.

**Corrección conceptual**
Usa el modelo ideal solo como referencia y pasa a un modelo interactuante si los desplazamientos de nivel son relevantes.

**Mini-ejemplo de contraste**
Una nube ultrafría diluida puede aproximarse al ideal; una nube densa con colisiones fuertes necesita correcciones.


### Error 4: Ignorar el dominio del [[potencial_quimico]]
**Por qué parece correcto**
En otros modelos, el [[potencial_quimico]] parece una variable libre que puede elegirse sin restricciones.

**Por qué es incorrecto**
En un gas ideal de bosones, el [[potencial_quimico]] no puede superar la [[energia]] mínima accesible sin romper la interpretación estadística.

**Señal de detección**
Aparece [[ocupacion_media]] negativa o una divergencia usada fuera de contexto.

**Corrección conceptual**
Comprueba siempre la posición de [[potencial_quimico]] respecto a la mínima [[energia]] permitida.

**Mini-ejemplo de contraste**
Acercar [[potencial_quimico]] al estado fundamental aumenta la ocupación; pasarlo por encima no describe un gas ideal válido.

## Errores matemáticos


### Error 5: Mezclar unidades de [[energia]] y [[temperatura]]
**Por qué parece correcto**
La [[temperatura]] parece ya una energía porque controla agitación térmica.

**Por qué es incorrecto**
Para comparar con [[energia]] o [[potencial_quimico]], la [[temperatura]] debe convertirse mediante [[constante_boltzmann]].

**Señal de detección**
Se resta directamente kelvin a julios o electronvoltios.

**Corrección conceptual**
Usa [[constante_boltzmann]][[temperatura]] como escala energética antes de comparar.

**Mini-ejemplo de contraste**
300 K no se resta de 0,02 eV; primero se convierte la escala térmica.


### Error 6: Elevar mal la [[longitud_onda_termica]]
**Por qué parece correcto**
La [[longitud_onda_termica]] parece una distancia auxiliar y se copia sin atender al volumen.

**Por qué es incorrecto**
El criterio de degeneración usa un volumen cuántico, por eso interviene [[longitud_onda_termica]]^3 junto a [[densidad_particulas]].

**Señal de detección**
Se compara [[densidad_particulas]] con [[longitud_onda_termica]] directamente.

**Corrección conceptual**
Comprueba dimensiones: [[densidad_particulas]] tiene unidad m^-3 y [[longitud_onda_termica]]^3 tiene unidad m^3.

**Mini-ejemplo de contraste**
El producto correcto es adimensional; una comparación m^-3 con m no tiene sentido físico.

## Errores de interpretación


### Error 7: Leer la gráfica como una recta cualquiera
**Por qué parece correcto**
Muchas gráficas escolares se interpretan con pendiente constante.

**Por qué es incorrecto**
La curva de [[ocupacion_media]] frente a [[energia]] no tiene por qué ser lineal; la curvatura contiene la respuesta bosónica a [[temperatura]] y [[potencial_quimico]].

**Señal de detección**
El alumno habla solo de pendiente y no menciona el crecimiento cerca de estados bajos.

**Corrección conceptual**
Describe caída, curvatura y régimen: bajo, moderado o cercano a acumulación.

**Mini-ejemplo de contraste**
Duplicar [[energia]] no implica dividir [[ocupacion_media]] por un factor fijo.


### Error 8: Confundir [[densidad_critica]] con una propiedad universal
**Por qué parece correcto**
El nombre suena a constante del material.

**Por qué es incorrecto**
La [[densidad_critica]] depende de [[temperatura]], [[masa_particula]] y del modelo ideal elegido.

**Señal de detección**
Se usa el mismo valor de [[densidad_critica]] para gases y temperaturas distintas.

**Corrección conceptual**
Recalcula [[densidad_critica]] para cada sistema y revisa [[longitud_onda_termica]].

**Mini-ejemplo de contraste**
Un gas más frío puede condensar a menor [[densidad_particulas]] que el mismo gas caliente.

## Regla de autocontrol rápido

Antes de interpretar, verifica tres cosas: [[ocupacion_media]] no es probabilidad, [[energia]] y [[potencial_quimico]] usan la misma unidad, y [[densidad_particulas]] solo se compara con [[densidad_critica]] dentro del modelo ideal.