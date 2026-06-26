const e=`\uFEFF# Ejemplo tipo examen

## Enunciado

Un bloque sobre riel horizontal se observa desde dos marcos que se mueven con velocidad relativa constante. Se pide verificar si ambos marcos pueden considerarse inerciales, calcular magnitudes dinamicas y justificar por que la aceleracion se conserva entre observadores inerciales.

En la segunda parte se analiza un caso aplicado de seguimiento vehicular para decidir si la referencia usada por el algoritmo de control sigue siendo inercial.

## Datos

- [[m]] = 2.0 kg.
- [[F_neta]] = 4.0 N en el eje positivo.
- [[v_obs1]] inicial = 6.0 m/s.
- [[V_rel]] = 2.0 m/s constante.
- Ventana temporal [[t]] = 3.0 s.
- Incertidumbre de aceleracion = 0.05 m/s^2.

Para comparacion de marcos:

- [[v_obs2]] inicial se obtiene por transformacion galileana.
- [[a_obs2]] debe compararse con [[a]] para validar invariancia.

## Definicion del sistema

Sistema 1: marco S ligado al laboratorio, asumido inercial.

Sistema 2: marco S' que se mueve con [[V_rel]] constante respecto de S.

Objeto: bloque sometido a fuerza real neta [[F_neta]].

Magnitudes de interes: [[a]], [[a_obs2]], [[v_obs1]], [[v_obs2]], [[V_rel]], [[m]] y [[t]].

## Modelo fisico

Se usa mecanica newtoniana en marcos inerciales. El criterio de inercialidad se establece con primera ley, la dinamica con segunda ley y la conexion de velocidades con transformacion galileana. La invariancia de aceleracion entre marcos inerciales cierra el test de coherencia.

## Justificacion del modelo

El modelo es adecuado porque [[V_rel]] se declara constante y no hay rotacion relativa entre marcos. La escala de velocidades permanece en regimen clasico. Ademas, la fuerza aplicada es real y trazable, por lo que la cadena causal [[F_neta]] -> [[a]] puede auditarse.

Criterio de rechazo explicitado:

- Si abs([[a]] - [[a_obs2]]) > 0.05 m/s^2 en mediciones repetidas, al menos una hipotesis de inercialidad falla.

## Resolucion simbolica

{{f:criterio_inercial_primera_ley}}

{{f:segunda_ley_newton_SRI}}

{{f:transformacion_galileana_velocidad}}

{{f:invariancia_aceleracion_galileana}}

Lectura simbolica:

1. Si [[F_neta]] no es nula, [[a]] debe ser no nula en marco inercial.
2. [[v_obs2]] se calcula desde [[v_obs1]] y [[V_rel]].
3. [[a_obs2]] debe coincidir con [[a]] si ambos marcos son inerciales.

## Sustitucion numerica

1. Aceleracion en S:

- [[a]] = [[F_neta]] / [[m]] = 4.0 / 2.0 = 2.0 m/s^2.

2. Velocidad observada en S' al inicio:

- [[v_obs2]] = [[v_obs1]] - [[V_rel]] = 6.0 - 2.0 = 4.0 m/s.

3. Invariancia de aceleracion:

- [[a_obs2]] = [[a]] = 2.0 m/s^2 (esperado teorico).

4. Evolucion en [[t]] = 3.0 s:

- Cambio de velocidad en S: delta v = [[a]]*[[t]] = 2.0*3.0 = 6.0 m/s.
- Cambio de velocidad en S': delta v' = [[a_obs2]]*[[t]] = 2.0*3.0 = 6.0 m/s.

La igualdad de incrementos refuerza la consistencia inercial entre marcos.

## Validacion dimensional

- [[F_neta]] en N.
- [[m]] en kg.
- [[a]] y [[a_obs2]] en m/s^2.
- [[v_obs1]], [[v_obs2]] y [[V_rel]] en m/s.
- [[t]] en s.

Chequeo de coherencia:

1. N/kg produce m/s^2, consistente con aceleracion.
2. Restar velocidades conserva unidad m/s.
3. Igualdad de aceleraciones entre marcos no viola dimensiones.

Con incertidumbre de 0.05 m/s^2, diferencias menores a ese valor no invalidan por si solas la hipotesis inercial.

## Interpretacion fisica

El resultado clave no es solo numerico. La aceleracion del objeto queda fijada por la fuerza neta real y la masa. Cambiar de observador con velocidad relativa constante no altera esa aceleracion, aunque si cambia la velocidad medida.

Esto implica que la dinamica causal permanece estable entre marcos inerciales. Si en un experimento real se observara [[a_obs2]] distinta de [[a]] fuera de incertidumbre, la conclusion fisica seria que al menos un marco no es inercial o que los datos no estan sincronizados.

Tambien permite separar fenomenos: la diferencia entre [[v_obs1]] y [[v_obs2]] pertenece a kinematica de cambio de marco; la igualdad entre [[a]] y [[a_obs2]] pertenece a estructura dinamica inercial.

# Ejemplo de aplicacion real

## Contexto

Un modulo ADAS estima movimiento de un vehiculo lider desde el vehiculo propio. El software combina sensores de velocidad y fuerza efectiva para decidir alertas de seguimiento. La arquitectura asume que el marco del vehiculo propio es aproximadamente inercial en una ventana corta.

## Estimacion fisica

Se registran valores promedios en tres ventanas de [[t]]:

- W1: [[F_neta]] equivalente positiva moderada, [[V_rel]] casi constante, diferencia abs([[a]]-[[a_obs2]]) = 0.02 m/s^2.
- W2: [[F_neta]] cercana a cero, abs([[a]]-[[a_obs2]]) = 0.03 m/s^2.
- W3: cambios bruscos de trayecto, abs([[a]]-[[a_obs2]]) = 0.12 m/s^2.

Lectura cuantitativa:

1. W1 y W2 estan dentro del umbral de 0.05 m/s^2, compatibles con referencia inercial local.
2. W3 supera umbral, indicando perdida de validez de la suposicion inercial simple.

Lectura de orden de magnitud:

- En W1, la discrepancia es menor que la incertidumbre y por tanto la estimacion es robusta.
- En W2, la discrepancia sigue en banda baja y confirma continuidad de regimen.
- En W3, la discrepancia mas que duplica el umbral, lo que implica cambio de regimen de referencia para toma de decisiones.

Esto implica que la estimacion fisica no es decorativa: define directamente si se mantiene el modelo inercial o si conviene escalar a un modelo no inercial.

## Interpretacion

La interpretacion fisica es causal y de regimen. Mientras la diferencia de aceleraciones entre observadores se mantiene en banda baja, el modelo inercial ofrece decisiones confiables. Cuando la discrepancia supera umbral, no se debe culpar de inmediato a un "cambio misterioso" del objeto: puede ser un cambio de referencia efectiva por maniobra o rotacion.

Por tanto, la accion correcta es escalar el modelo, no forzar la ecuacion base. Este criterio evita errores de control y mejora trazabilidad en seguridad vehicular.

Refuerzo cuantitativo de estimacion:

Si en una cuarta ventana aparece abs([[a]]-[[a_obs2]]) = 0.07 m/s^2 con [[V_rel]] aun estable, la lectura no es binaria. Esta escala intermedia indica que la hipotesis inercial sigue util con precaucion, pero requiere vigilancia y posible escalado si la discrepancia crece.
`;export{e as default};
