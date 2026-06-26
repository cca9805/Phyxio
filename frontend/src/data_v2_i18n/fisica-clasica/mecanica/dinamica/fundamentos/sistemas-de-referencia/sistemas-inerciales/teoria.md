# Sistemas inerciales

## Contexto conceptual

Este leaf responde una pregunta operacional: cuando un marco puede considerarse inercial y por que eso importa para aplicar las leyes de Newton sin terminos aparentes.

En un marco inercial, la magnitud [[F_neta]] organiza la dinamica de forma directa con [[m]] y [[a]]. La velocidad [[v]] puede expresarse de modo distinto entre observadores por [[V_rel]], lo que se traduce en mediciones como [[v_obs1]] y [[v_obs2]]. En cambio, la aceleracion mantiene consistencia inercial y puede verificarse comparando [[a]] con [[a_obs2]]. El tiempo comun es [[t]] en el regimen clasico.

La utilidad de esta distincion es metodologica: separar diferencias de observador en velocidad de la estructura causal fuerza-aceleracion.

## 🟢 Nivel esencial

Idea central 1: en un marco inercial no aparecen aceleraciones sin causa real.

Idea central 2: cambiar de observador puede cambiar la lectura de velocidad.

Idea central 3: ese cambio de observador no debe romper la coherencia de las leyes dinamicas.

Esta triada evita errores frecuentes de interpretacion. Muchos estudiantes confunden "velocidad distinta" con "dinamica distinta". En realidad, la diferencia de velocidad puede deberse solo al cambio de marco, sin modificar la causalidad fisica del sistema.

Lectura intuitiva:

- la descripcion cinematica puede cambiar con el observador;
- la causalidad dinamica debe permanecer consistente;
- un buen analisis siempre distingue dato observado y mecanismo fisico.

Con estas ideas, el estudiante puede interpretar resultados antes de entrar en algebra detallada.

Tambien conviene una regla verbal simple: primero describir que cambia en el observador y despues que cambia en el objeto. Esa secuencia reduce errores de interpretacion tempranos.

Otra pauta esencial util es separar descripcion y explicacion. Describir es decir que valor cambia; explicar es justificar por que cambia dentro del marco elegido. Esta diferencia parece menor, pero evita informes ambiguos en practica profesional.

## 🔵 Nivel formal

Relaciones nucleares del leaf:

{{f:criterio_inercial_primera_ley}}

{{f:segunda_ley_newton_SRI}}

{{f:transformacion_galileana_velocidad}}

{{f:invariancia_aceleracion_galileana}}

Lectura formal por bloques:

1. Criterio inercial: en ausencia de [[F_neta]], no hay aceleracion.
2. Segunda ley: para [[m]] constante, [[F_neta]] fija [[a]].
3. Transformacion galileana: [[v_obs2]] se obtiene desde [[v_obs1]] y [[V_rel]].
4. Invariancia: [[a_obs2]] debe coincidir con [[a]] entre marcos inerciales.

Chequeos cuantitativos utiles:

- residual_fuerza = abs([[F_neta]] - [[m]]*[[a]]) <= 0.10 N.
- residual_aceleracion = abs([[a]] - [[a_obs2]]) <= 0.05 m/s^2.
- estabilidad_marco = variacion([[V_rel]]) <= 0.05 m/s en ventana [[t]].

Estos chequeos no reemplazan teoria; la hacen auditable en datos reales.

Refuerzo formal de consistencia:

1. Si [[F_neta]] aumenta con [[m]] fija, [[a]] debe aumentar en la misma tendencia.
2. Si [[V_rel]] se mantiene estable, la diferencia entre [[v_obs1]] y [[v_obs2]] debe conservar trazabilidad.
3. Si el marco sigue siendo inercial, [[a_obs2]] debe seguir la misma lectura fisica de [[a]] dentro de incertidumbre.

Este bloque formal convierte ecuaciones en protocolo reproducible. Dos personas que apliquen el mismo procedimiento deben llegar a conclusiones comparables y justificar diferencias de forma explicita.

Ademas, el nivel formal permite detectar si una discrepancia viene de un error algebraico, de una mala conversion de unidades o de una hipotesis de marco mal declarada.

## 🔴 Nivel estructural

El nivel estructural define limites de aplicacion y criterio de escalado.

Fronteras de validez:

1. Si el observador acelera, el marco deja de ser inercial.
2. Si el observador rota, aparecen efectos no modelados en esquema simple.
3. Si la calidad de datos es pobre, los residuales pueden crecer por metrologia y no por fisica.
4. Si la escala se acerca a regimen no clasico, la estructura galileana se rompe.

Regla de transicion:

- Permanecer en modelo inercial mientras residuales y estabilidad de [[V_rel]] cumplan umbrales.
- Cambiar a modelo no inercial cuando la discrepancia sea persistente y causalmente consistente.

Criterio operativo complementario:

- error_relativo <= 10 por ciento: modelo inercial aceptable para decision basica.
- error_relativo > 10 por ciento sostenido: escalar modelo.

Esta logica evita dos extremos: sobrecomplicar sin necesidad o forzar ecuaciones fuera de dominio.

Aplicacion estructural en practica:

- Si los residuales son pequenos pero inestables, revisar primero metrologia y sincronizacion.
- Si los residuales son estables y bajos, mantener modelo inercial.
- Si los residuales crecen con tendencia clara, preparar migracion a modelo no inercial.

La decision de cambio de modelo debe quedar documentada con umbral, evidencia y ventana temporal usada.

En analisis colaborativo, esta documentacion permite comparar resultados entre equipos y detectar si las diferencias vienen de datos, de supuestos o de implementacion.

## Interpretacion fisica profunda

La interpretacion profunda exige causalidad explicita. Si aparece aceleracion, debe haber explicacion en fuerza neta real dentro del marco inercial. Si no la hay, la primera sospecha es validez del marco o calidad de medicion.

Tambien exige separar capas:

- Capa cinematica: conversion entre [[v_obs1]] y [[v_obs2]] por [[V_rel]].
- Capa dinamica: relacion entre [[F_neta]], [[m]], [[a]] y comprobacion con [[a_obs2]].

Cuando esas capas se mezclan, surgen informes inconsistentes. Cuando se separan, el analisis gana trazabilidad y permite depuracion tecnica en control, simulacion y seguridad.

## Orden de magnitud

Este leaf no impone un unico rango numerico universal, pero si un metodo de escala:

1. Estimar orden de [[F_neta]] segun actuacion o entorno.
2. Estimar [[a]] esperada mediante [[F_neta]]/[[m]].
3. Verificar que [[v_obs1]] y [[v_obs2]] sean compatibles con [[V_rel]].
4. Usar ventanas [[t]] donde las hipotesis sean aproximadamente estables.

Regla de sanidad:

- Si un resultado excede por mucho el orden esperado, revisar unidades y supuestos.
- Si una diferencia esta por debajo de incertidumbre, evitar conclusiones fuertes.

## Metodo de resolucion personalizado

1. Definir marcos, ejes y convencion de signos.
2. Registrar [[F_neta]], [[m]], [[v_obs1]], [[V_rel]], [[t]].
3. Calcular [[a]] por segunda ley.
4. Convertir velocidad para obtener [[v_obs2]].
5. Comparar [[a]] con [[a_obs2]].
6. Evaluar residuales frente a umbral.
7. Redactar conclusion causal y rango de validez.

Puntos de autocorreccion:

- Si el signo de velocidad no cuadra, revisar transformacion.
- Si la aceleracion no coincide entre marcos, revisar inercialidad.
- Si el residual crece, revisar datos antes de cambiar leyes.

## Casos especiales y ejemplo extendido

Caso A: [[F_neta]] aproximadamente nula y [[a]] aproximadamente nula. Esto confirma criterio inercial local, pero no obliga [[v]] nula.

Caso B: [[V_rel]] aproximadamente nula. Los dos observadores reportan velocidades muy parecidas, aunque el marco conceptual no cambia.

Caso C extendido:

En un ensayo ferroviario, dos plataformas inerciales comparan mediciones del mismo bloque. Las velocidades difieren por [[V_rel]] casi constante, pero [[a]] y [[a_obs2]] coinciden dentro de incertidumbre. Esta combinacion confirma validez del marco para analisis dinamico de primer orden.

## Preguntas reales del alumno

Pregunta 1: Si dos observadores no coinciden en velocidad, las leyes cambian.

Respuesta: no. Cambia la descripcion cinematica, no la estructura dinamica inercial.

Pregunta 2: Si [[a]] y [[a_obs2]] no coinciden, la segunda ley es falsa.

Respuesta: no necesariamente. Primero revisar marco y calidad de datos.

Pregunta 3: Un residual bajo en una sola muestra valida el modelo.

Respuesta: evidencia debil. Se necesitan ventanas repetidas en [[t]].

Pregunta 4: Cuando cambio a modelo no inercial.

Respuesta: cuando discrepancias son persistentes y superan umbral operativo.

## Conexiones transversales y rutas de estudio

Conecta con:

1. Leyes de Newton y diagramas de fuerza.
2. Transformaciones de velocidad en marcos inerciales.
3. Introduccion a marcos no inerciales.
4. Control y fusion sensorial en sistemas moviles.

Ruta sugerida:

- Primero fuerza-aceleracion en un marco.
- Luego conversion de velocidad entre observadores.
- Luego test de invariancia de aceleracion.
- Por ultimo, comparacion con casos no inerciales.

## Sintesis final

Un marco inercial es un contrato fisico verificable: [[F_neta]], [[m]] y [[a]] mantienen causalidad directa; [[v_obs1]] y [[v_obs2]] pueden diferir por [[V_rel]]; [[a_obs2]] debe coincidir con [[a]].

La competencia real no es memorizar ecuaciones, sino decidir cuando su dominio sigue siendo valido y cuando se debe escalar el modelo.
