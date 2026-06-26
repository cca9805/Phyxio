const e=`## Modelo ideal
El modelo ideal de este leaf asume que la intensidad [[I]] puede describirse como tasa media de [[q]] en una ventana temporal [[t]], que la normalizacion espacial mediante [[A]] representa correctamente la geometria de conduccion, y que la lectura micro macro con [[n]] y [[v]] es suficiente para explicar el transporte observado.

Bajo estas hipotesis, las tres ecuaciones nucleares se interpretan de forma coherente y complementaria. La primera entrega balance temporal. La segunda permite evaluar exigencia local. La tercera vincula esa exigencia con estructura material. El modelo ideal no pretende describir cada colision microscopica, sino ofrecer una representacion operativa para resolver problemas de ingenieria y laboratorio con trazabilidad fisica.

En este marco, el foco no esta en el detalle atomico, sino en mantener consistencia entre datos medidos, unidades y magnitudes de salida. Si el problema cumple esa consistencia, el modelo produce resultados estables y utiles para toma de decisiones.

## Hipótesis
1. El intervalo temporal elegido es representativo del fenomeno de transporte que se quiere describir.
2. La seccion [[A]] usada en calculo corresponde a area efectiva de conduccion y no solo a geometria nominal.
3. Los parametros materiales asociados a [[n]] y [[v]] pueden aproximarse por valores medios en el rango de trabajo.
4. No hay cambios bruscos de regimen dentro de la misma ventana de analisis que invaliden un promedio unico.
5. Las unidades se manejan de forma consistente en todo el flujo de calculo e interpretacion.

Estas hipotesis son moderadas y practicas, pero no triviales. El modelo falla con facilidad si el problema mezcla escalas incompatibles o si oculta suposiciones geometricas no justificadas.

## Dominio de validez cuantitativo
El modelo de intensidad media es apropiado cuando la ventana temporal se define de modo estable y sin mezcla de regimenes. Como criterio operativo, puede usarse la condicion de consistencia entre medicion y reconstruccion con error relativo <= 0.10 en los puntos de control del experimento. Si la discrepancia supera ese umbral de forma sistematica, la lectura promedio deja de ser representativa.

Para densidad de corriente, el dominio requiere area efectiva positiva y bien definida. Una regla simple es aceptar la normalizacion local cuando la incertidumbre relativa de [[A]] es <= 0.15. Por encima de ese margen, la estimacion de [[J]] puede inducir errores fisicos relevantes.

En la relacion de portadores, conviene exigir plausibilidad de parametros. Si la inferencia de [[v]] resulta fuera de rango esperado para el material bajo estudio, la interpretacion micro macro debe revisarse. Este criterio no impone un numero universal, pero si una comparacion obligatoria con contexto material y condiciones de operacion.

Como regla cuantitativa explicita para decidir continuidad de modelo, usar:
error_relativo <= 0.10 para aceptar la aproximacion media, e incertidumbre_area <= 0.15 para aceptar la normalizacion local.
Si error_relativo > 0.10 de forma persistente, conviene cambiar a modelo por tramos.

## Señales de fallo del modelo
Una senal clara de fallo aparece cuando el mismo protocolo de calculo entrega resultados incompatibles al cambiar levemente la ventana temporal. Si [[I]] varia de forma no explicable por dinamica real, el promedio elegido no representa el proceso.

Otra senal de fallo ocurre cuando la lectura de [[J]] cambia en exceso al corregir [[A]] por efecto de contacto, rugosidad o cuello de botella. Esto revela que el modelo geometrico original era demasiado simplificado.

Tambien hay fallo cuando la reconstruccion con [[n]] y [[v]] requiere supuestos ad hoc en cada caso para ajustar resultados. Si la consistencia depende de ajustes oportunistas, el modelo dejo de explicar y paso solo a describir.

Por ultimo, el modelo se debilita si la interpretacion ignora el signo de [[I]] y solo usa modulos. En problemas con direccion relevante, perder ese dato elimina informacion causal clave.

## Modelo extendido o alternativo
Cuando conviene cambiar a modelo alternativo, el primer candidato es una descripcion por tramos temporales, separando fases de arranque, regimen y relajacion. Esta extension conserva intuicion del leaf y mejora representacion de sistemas no estacionarios.

Si el cuello de botella es espacial, conviene migrar a una descripcion distribuida de densidad, donde [[J]] no se trata como valor uniforme sino como campo efectivo por region. Esto permite detectar puntos de sobrecarga local que el promedio global no capta.

Cuando la limitacion principal es material, se adopta un modelo con parametros dependientes de temperatura o campo, de modo que [[n]] y [[v]] dejen de ser constantes fijas y pasen a funciones de estado.

## Comparación operativa
El modelo ideal es mas rapido, transparente y didactico. Funciona muy bien para balances iniciales, estimaciones de orden de magnitud y verificacion de coherencia de datos. Su costo computacional es bajo y su interpretacion es directa.

El modelo extendido requiere mas datos y mas supuestos explicitos, pero gana capacidad de diagnostico cuando aparecen no uniformidades temporales, geometricas o materiales. Es el camino natural cuando el modelo ideal ya no cumple criterios de consistencia cuantitativa.

En practica profesional, la estrategia eficiente no es elegir un modelo unico para siempre, sino comenzar con el ideal, medir calidad de ajuste, y escalar de manera justificada cuando los criterios de validez muestran limite claro. Esa transicion explicita es la habilidad central que este leaf busca entrenar.
`;export{e as default};
