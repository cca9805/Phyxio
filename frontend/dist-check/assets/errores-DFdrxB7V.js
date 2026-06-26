const e=`## Errores conceptuales

### Error 1: confundir longitud de onda con amplitud

**Por qué parece correcto:** en un dibujo de onda se ven a la vez altura y separación.

**Por qué es incorrecto:** [[lambda]] se mide horizontalmente entre estados equivalentes; la amplitud mide tamaño vertical de la perturbación.

**Señal de detección:** se mide desde la línea de equilibrio hasta una cresta.

**Corrección conceptual:** buscar dos crestas consecutivas o dos puntos equivalentes del ciclo.

**Mini-ejemplo de contraste:** una onda baja puede tener crestas muy separadas.

Este error aparece mucho cuando se dibuja una onda en papel. La dimensión vertical y la horizontal están en la misma figura, pero responden a preguntas físicas distintas.

### Error 2: medir entre estados no equivalentes

**Por qué parece correcto:** cualquier distancia en la gráfica parece una separación espacial.

**Por qué es incorrecto:** solo estados equivalentes representan una repetición completa.

**Señal de detección:** se mide de una cresta a un cruce por equilibrio.

**Corrección conceptual:** fijar el estado de fase antes de medir.

**Mini-ejemplo de contraste:** de cresta a valle hay media repetición, no una longitud completa.

La forma de evitarlo es nombrar el estado elegido antes de medir: cresta con cresta, valle con valle o cruce ascendente con cruce ascendente.

## Errores de modelo

### Error 3: usar una longitud única en un pulso aislado

**Por qué parece correcto:** el pulso ocupa una anchura espacial.

**Por qué es incorrecto:** anchura del pulso no equivale necesariamente a [[lambda]].

**Señal de detección:** no hay crestas repetidas ni patrón periódico.

**Corrección conceptual:** hablar de anchura, componente dominante o espectro.

**Mini-ejemplo de contraste:** una onda sinusoidal tiene repetición; un golpe aislado no.

En pulsos reales puede existir una escala espacial dominante, pero debe justificarse con un análisis de componentes y no con una lectura directa de crestas inexistentes.

### Error 4: ignorar que la rapidez del medio importa

**Por qué parece correcto:** frecuencia y longitud de onda se presentan juntas.

**Por qué es incorrecto:** [[f]] solo no determina [[lambda]] si no se conoce [[v]].

**Señal de detección:** se calcula longitud de onda desde frecuencia sin mencionar el medio.

**Corrección conceptual:** identificar la rapidez de propagación antes de usar la relación.

**Mini-ejemplo de contraste:** la misma frecuencia tiene distinta longitud de onda en aire y en agua.

La rapidez es el puente entre tiempo y espacio. Sin ese puente, la frecuencia solo informa del ritmo temporal de la fuente.

## Errores matemáticos

### Error 5: contar crestas en vez de intervalos

**Por qué parece correcto:** las crestas son visibles y fáciles de contar.

**Por qué es incorrecto:** la longitud de onda está entre crestas, no en las crestas mismas.

**Señal de detección:** tres crestas se tratan como tres intervalos.

**Corrección conceptual:** el número de intervalos entre crestas consecutivas es uno menos que el número de crestas.

**Mini-ejemplo de contraste:** cinco crestas consecutivas encierran cuatro separaciones.

Este error cambia el resultado de forma sistemática. Cuantas menos crestas se usan, más grave es la diferencia entre contar puntos visibles y contar intervalos.

## Errores de interpretación

### Error 6: creer que mayor longitud de onda siempre significa mayor rapidez

**Por qué parece correcto:** una distancia mayor parece implicar avance más rápido.

**Por qué es incorrecto:** la rapidez depende también de la frecuencia.

**Señal de detección:** se compara [[lambda]] sin mirar [[f]].

**Corrección conceptual:** interpretar [[lambda]] junto con ritmo temporal y medio.

**Mini-ejemplo de contraste:** una onda larga y lenta puede tener rapidez moderada.

## Regla de autocontrol rápido

Antes de resolver, verifica que estás midiendo horizontalmente entre estados equivalentes, que cuentas intervalos y no solo crestas, y que no usas [[f]] para obtener [[lambda]] sin conocer [[v]].
`;export{e as default};
