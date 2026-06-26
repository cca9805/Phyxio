# Diagramas cuerpo libre

## Contexto conceptual

Un diagrama de cuerpo libre es una representacion fisica y matematica del sistema aislado. Su valor no esta en dibujar flechas por costumbre, sino en declarar con rigor que interacciones externas existen, en que direccion actuan y como se proyectan en los ejes de trabajo para conectar causa y cambio de movimiento.

En este leaf, la magnitud dominante es [[Fext]], porque condensa el efecto neto de las interacciones externas. Sin embargo, la lectura correcta requiere articular tambien [[m]], [[a]], [[ax]], [[ay]], [[Fx]], [[Fy]], [[P]], [[N]], [[T]], [[fk]], [[fs]], [[mu_k]], [[mu_s]], [[theta]], [[g]], [[Ppar]] y [[Pperp]].

El problema tipico de aprendizaje no es de algebra, sino de modelado: mezclar escena real con sistema aislado, omitir fuerzas relevantes, inventar fuerzas sin agente o proyectar con ejes inconsistentes. Cuando eso ocurre, incluso una cuenta numericamente limpia produce decisiones fisicas equivocadas.

Este tema conecta visualizacion, semantica de magnitudes y dinamica newtoniana. Primero se decide que fuerzas pertenecen al diagrama. Luego se proyecta en ejes. Finalmente se interpreta si hay equilibrio en un eje, aceleracion en otro o cambio de regimen por contacto y rozamiento.

## 🟢 Nivel esencial

En nivel esencial, la meta es construir criterio causal antes de usar formulas. Una buena regla es: si no puedes nombrar el agente de una flecha, no debes incluirla.

Pasos conceptuales minimos:

1. Delimitar el sistema que se aisla.
2. Listar solo interacciones externas sobre ese sistema.
3. Elegir ejes que faciliten la lectura fisica.
4. Verificar sentido probable de cada fuerza antes de proyectar.

En esta etapa no hace falta calcular todo; hace falta evitar errores de representacion. Por ejemplo, en una caja sobre plano inclinado, se confunden con frecuencia las direcciones paralela y perpendicular, o se dibuja la reaccion de apoyo con direccion incorrecta. Tambien aparece el error de mezclar en un mismo paso dos regimens de rozamiento incompatibles.

Otra confusion frecuente es suponer que la suma de modulos equivale a la resultante. En realidad, una resultante es vectorial y exige direccion. Por eso el diagrama obliga a declarar orientaciones antes de operar.

Nivel esencial tambien incluye lectura de plausibilidad:

- Si el cuerpo no despega del apoyo, la reaccion normal debe mantenerse fisicamente posible.
- Si no hay deslizamiento, no corresponde usar la ley de rozamiento cinetico.
- Si una direccion esta en equilibrio, la aceleracion en esa direccion debe ser compatible con esa lectura.

Estas ideas no sustituyen el nivel formal; lo preparan. Su funcion es impedir que la matematica tape un planteo fisico defectuoso.

## 🔵 Nivel formal

En nivel formal, el diagrama se traduce a relaciones cuantitativas consistentes con mecanica clasica. Las formulas nucleares del leaf son:

{{f:newton_vectorial}}

{{f:newton_x}}

{{f:newton_y}}

{{f:equilibrio_vertical}}

{{f:rozamiento_cinetico}}

{{f:rozamiento_estatico}}

{{f:componentes_peso_plano}}

Estas relaciones deben leerse como contrato de modelado:

- La forma vectorial vincula resultado dinamico con suma externa total [[Fext]].
- Las formas por ejes convierten el problema en balances escalares [[Fx]] y [[Fy]] asociados a [[ax]] y [[ay]].
- El equilibrio vertical es una condicion contextual, no un axioma universal.
- El rozamiento cinetico usa [[mu_k]] y contacto efectivo via [[N]].
- El rozamiento estatico impone cota sobre [[fs]], no igualdad obligatoria.
- La descomposicion del peso depende de [[theta]] y de la convencion angular elegida.

Chequeos de coherencia formal recomendados:

1. Unidades: fuerzas en N, aceleraciones en m/s^2, masa en kg.
2. Signos: coherentes con ejes declarados.
3. Regimen: elegir entre estatico y cinetico antes de cerrar ecuaciones.
4. Contacto: si hay perdida de apoyo, revisar supuestos sobre [[N]].

Ejemplo de lectura formal compacta:

- Con plano inclinado y angulo [[theta]], se separa [[P]] en [[Ppar]] y [[Pperp]].
- Sobre eje normal, [[Pperp]] y [[N]] determinan si hay contacto estable.
- Sobre eje tangencial, [[Ppar]], [[T]] y rozamiento fijan [[Fx]] y por tanto [[ax]].

El valor didactico del nivel formal no es solo resolver; es volver trazable cada paso del diagrama hacia la ecuacion.

## 🔴 Nivel estructural

Nivel estructural analiza limites y decisiones de cambio de modelo. Un diagrama correcto no garantiza validez ilimitada. La pregunta central es cuando el modelo simplificado sigue siendo fiable.

Limites tipicos de validez:

1. Variaciones rapidas de contacto: cambios bruscos pueden romper supuestos cuasiestaticos.
2. Materiales con friccion no estable: [[mu_s]] y [[mu_k]] dejan de ser parametros efectivos constantes.
3. Geometrias complejas: ejes mal elegidos ocultan interacciones relevantes.
4. Acoplamientos no modelados: deformacion, vibracion o excitaciones impulsivas.

Criterios estructurales operativos:

- Si prediccion y observacion divergen de forma sostenida, revisar diagrama antes de ajustar parametros.
- Si el signo de [[Fy]] o [[Fx]] resulta inconsistente con la escena, sospechar fuerza omitida o eje mal orientado.
- Si una misma configuracion exige alternar entre [[fs]] y [[fk]], declarar el evento de cambio de regimen.

En problemas de ingenieria, el cambio de modelo debe ser gradual:

1. Mantener el diagrama como base de trazabilidad.
2. Agregar detalle en contacto o friccion si aparece evidencia experimental.
3. Escalar a modelo transitorio cuando las hipotesis de equilibrio parcial dejan de cumplir.

Esta logica evita dos extremos: simplificar de mas y perder fenomenologia, o complejizar de mas sin evidencia.

## Interpretación física profunda

La interpretacion profunda de un DCL es causal: cada flecha responde a una interaccion y cada proyeccion responde a una pregunta fisica concreta. El objetivo no es llenar papel de vectores, sino explicar por que el sistema acelera en cierta direccion y por que puede estar en equilibrio en otra.

Cuando [[Fx]] es no nula y [[Fy]] es cercana a cero, el sistema no esta "parcialmente mal resuelto"; esta mostrando una lectura fisica clara: aceleracion predominante en un eje con equilibrio en el eje ortogonal.

Asimismo, cuando [[fs]] se mantiene bajo su cota y el cuerpo no desliza, la conclusion no es solo numerica. Significa que el contacto todavia compensa demanda tangencial sin ruptura de adherencia.

El DCL tambien sirve para diagnostico: si una medicion indica comportamiento inesperado, el primer paso no es forzar datos en la ecuacion, sino auditar el diagrama: agente, direccion, magnitud y regimen.

## Orden de magnitud

Referencias utiles de orden de magnitud en contextos academicos y tecnicos:

- [[m]]: desde fracciones de kg en laboratorio hasta cientos de kg en maquinaria liviana.
- [[g]]: alrededor de 9.8 m/s^2 en superficie terrestre.
- [[P]]: escala de N a miles de N segun [[m]].
- [[N]]: del mismo orden que [[P]] en apoyos simples.
- [[T]]: puede variar ampliamente segun transmision de carga.
- [[Fx]] y [[Fy]]: dependen de ejes, no solo de intensidad fisica total.
- [[a]], [[ax]], [[ay]]: desde casi cero en regimen casi estatico hasta valores altos en arranque o frenado.
- [[mu_s]] y [[mu_k]]: parametros adimensionales de contacto, sensibles a material y estado superficial.
- [[theta]]: define redistribucion entre [[Ppar]] y [[Pperp]].
- [[fk]] y [[fs]]: asociados al regimen de deslizamiento o adherencia.
- [[Ppar]] y [[Pperp]]: componentes geometricas del peso en ejes adaptados al plano.

Estas referencias permiten detectar resultados absurdos sin recalculo completo.

## Método de resolución personalizado

1. Define sistema y frontera.
2. Dibuja solo fuerzas externas justificadas.
3. Elige ejes alineados con restricciones o movimiento esperado.
4. Proyecta y arma balances por eje.
5. Declara regimen de contacto y friccion.
6. Resuelve variables objetivo.
7. Verifica unidades, signos y orden de magnitud.
8. Cierra con interpretacion causal y recomendacion operativa.

## Casos especiales y ejemplo extendido

Caso especial A: plano inclinado sin deslizamiento. La cota de [[fs]] gobierna si hay adherencia.

Caso especial B: transicion a deslizamiento. Cambia modelo de rozamiento y se actualiza balance tangencial.

Caso especial C: eje vertical en equilibrio con aceleracion horizontal. Muestra utilidad de separar [[Fy]] y [[Fx]].

Ejemplo extendido tipico:

- Sistema sobre plano con [[theta]] variable.
- Se calcula efecto de cambiar [[theta]] sobre [[Ppar]], [[Pperp]], [[N]] y demanda de friccion.
- Se identifica punto de ruptura entre regimen estatico y cinetico.

## Preguntas reales del alumno

Por que no puedo dibujar la fuerza "del movimiento"?

Porque el movimiento es efecto, no agente externo.

Por que dos diagramas distintos pueden representar la misma escena?

Porque cambian ejes o detalle de descomposicion, pero deben conservar equivalencia fisica.

Cuando uso [[fs]] y cuando [[fk]]?

[[fs]] mientras no hay deslizamiento relativo; [[fk]] cuando ya hay deslizamiento.

Si [[Fext]] da cero, siempre hay reposo?

No necesariamente; puede haber velocidad constante. Cero resultante implica cero aceleracion.

## Conexiones transversales y rutas de estudio

Este leaf conecta con descomposicion vectorial, leyes de Newton por ejes, analisis de friccion, dinamica en plano inclinado, diseno de mecanismos y diagnostico de fallas en contacto.

Ruta sugerida:

1. DCL en superficies horizontales.
2. DCL en planos inclinados con y sin friccion.
3. Sistemas con cuerdas y poleas ideales.
4. Integracion con energia y trabajo para validacion cruzada.

## Síntesis final

Dominar diagramas de cuerpo libre significa transformar una escena fisica en un modelo causal verificable. Cuando el diagrama esta bien construido, las ecuaciones adquieren sentido y la interpretacion deja de ser mecanica para volverse predictiva y accionable.

La competencia clave no es memorizar plantillas, sino decidir correctamente que fuerzas existen, como se proyectan y cuando el modelo necesita escalar de complejidad.
