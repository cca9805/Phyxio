const e=`# Diagramas cuerpo libre\r
\r
## Contexto conceptual\r
\r
Un diagrama de cuerpo libre es una representacion fisica y matematica del sistema aislado. Su valor no esta en dibujar flechas por costumbre, sino en declarar con rigor que interacciones externas existen, en que direccion actuan y como se proyectan en los ejes de trabajo para conectar causa y cambio de movimiento.\r
\r
En este leaf, la magnitud dominante es [[Fext]], porque condensa el efecto neto de las interacciones externas. Sin embargo, la lectura correcta requiere articular tambien [[m]], [[a]], [[ax]], [[ay]], [[Fx]], [[Fy]], [[P]], [[N]], [[T]], [[fk]], [[fs]], [[mu_k]], [[mu_s]], [[theta]], [[g]], [[Ppar]] y [[Pperp]].\r
\r
El problema tipico de aprendizaje no es de algebra, sino de modelado: mezclar escena real con sistema aislado, omitir fuerzas relevantes, inventar fuerzas sin agente o proyectar con ejes inconsistentes. Cuando eso ocurre, incluso una cuenta numericamente limpia produce decisiones fisicas equivocadas.\r
\r
Este tema conecta visualizacion, semantica de magnitudes y dinamica newtoniana. Primero se decide que fuerzas pertenecen al diagrama. Luego se proyecta en ejes. Finalmente se interpreta si hay equilibrio en un eje, aceleracion en otro o cambio de regimen por contacto y rozamiento.\r
\r
## 🟢 Nivel esencial\r
\r
En nivel esencial, la meta es construir criterio causal antes de usar formulas. Una buena regla es: si no puedes nombrar el agente de una flecha, no debes incluirla.\r
\r
Pasos conceptuales minimos:\r
\r
1. Delimitar el sistema que se aisla.\r
2. Listar solo interacciones externas sobre ese sistema.\r
3. Elegir ejes que faciliten la lectura fisica.\r
4. Verificar sentido probable de cada fuerza antes de proyectar.\r
\r
En esta etapa no hace falta calcular todo; hace falta evitar errores de representacion. Por ejemplo, en una caja sobre plano inclinado, se confunden con frecuencia las direcciones paralela y perpendicular, o se dibuja la reaccion de apoyo con direccion incorrecta. Tambien aparece el error de mezclar en un mismo paso dos regimens de rozamiento incompatibles.\r
\r
Otra confusion frecuente es suponer que la suma de modulos equivale a la resultante. En realidad, una resultante es vectorial y exige direccion. Por eso el diagrama obliga a declarar orientaciones antes de operar.\r
\r
Nivel esencial tambien incluye lectura de plausibilidad:\r
\r
- Si el cuerpo no despega del apoyo, la reaccion normal debe mantenerse fisicamente posible.\r
- Si no hay deslizamiento, no corresponde usar la ley de rozamiento cinetico.\r
- Si una direccion esta en equilibrio, la aceleracion en esa direccion debe ser compatible con esa lectura.\r
\r
Estas ideas no sustituyen el nivel formal; lo preparan. Su funcion es impedir que la matematica tape un planteo fisico defectuoso.\r
\r
## 🔵 Nivel formal\r
\r
En nivel formal, el diagrama se traduce a relaciones cuantitativas consistentes con mecanica clasica. Las formulas nucleares del leaf son:\r
\r
{{f:newton_vectorial}}\r
\r
{{f:newton_x}}\r
\r
{{f:newton_y}}\r
\r
{{f:equilibrio_vertical}}\r
\r
{{f:rozamiento_cinetico}}\r
\r
{{f:rozamiento_estatico}}\r
\r
{{f:componentes_peso_plano}}\r
\r
Estas relaciones deben leerse como contrato de modelado:\r
\r
- La forma vectorial vincula resultado dinamico con suma externa total [[Fext]].\r
- Las formas por ejes convierten el problema en balances escalares [[Fx]] y [[Fy]] asociados a [[ax]] y [[ay]].\r
- El equilibrio vertical es una condicion contextual, no un axioma universal.\r
- El rozamiento cinetico usa [[mu_k]] y contacto efectivo via [[N]].\r
- El rozamiento estatico impone cota sobre [[fs]], no igualdad obligatoria.\r
- La descomposicion del peso depende de [[theta]] y de la convencion angular elegida.\r
\r
Chequeos de coherencia formal recomendados:\r
\r
1. Unidades: fuerzas en N, aceleraciones en m/s^2, masa en kg.\r
2. Signos: coherentes con ejes declarados.\r
3. Regimen: elegir entre estatico y cinetico antes de cerrar ecuaciones.\r
4. Contacto: si hay perdida de apoyo, revisar supuestos sobre [[N]].\r
\r
Ejemplo de lectura formal compacta:\r
\r
- Con plano inclinado y angulo [[theta]], se separa [[P]] en [[Ppar]] y [[Pperp]].\r
- Sobre eje normal, [[Pperp]] y [[N]] determinan si hay contacto estable.\r
- Sobre eje tangencial, [[Ppar]], [[T]] y rozamiento fijan [[Fx]] y por tanto [[ax]].\r
\r
El valor didactico del nivel formal no es solo resolver; es volver trazable cada paso del diagrama hacia la ecuacion.\r
\r
## 🔴 Nivel estructural\r
\r
Nivel estructural analiza limites y decisiones de cambio de modelo. Un diagrama correcto no garantiza validez ilimitada. La pregunta central es cuando el modelo simplificado sigue siendo fiable.\r
\r
Limites tipicos de validez:\r
\r
1. Variaciones rapidas de contacto: cambios bruscos pueden romper supuestos cuasiestaticos.\r
2. Materiales con friccion no estable: [[mu_s]] y [[mu_k]] dejan de ser parametros efectivos constantes.\r
3. Geometrias complejas: ejes mal elegidos ocultan interacciones relevantes.\r
4. Acoplamientos no modelados: deformacion, vibracion o excitaciones impulsivas.\r
\r
Criterios estructurales operativos:\r
\r
- Si prediccion y observacion divergen de forma sostenida, revisar diagrama antes de ajustar parametros.\r
- Si el signo de [[Fy]] o [[Fx]] resulta inconsistente con la escena, sospechar fuerza omitida o eje mal orientado.\r
- Si una misma configuracion exige alternar entre [[fs]] y [[fk]], declarar el evento de cambio de regimen.\r
\r
En problemas de ingenieria, el cambio de modelo debe ser gradual:\r
\r
1. Mantener el diagrama como base de trazabilidad.\r
2. Agregar detalle en contacto o friccion si aparece evidencia experimental.\r
3. Escalar a modelo transitorio cuando las hipotesis de equilibrio parcial dejan de cumplir.\r
\r
Esta logica evita dos extremos: simplificar de mas y perder fenomenologia, o complejizar de mas sin evidencia.\r
\r
## Interpretación física profunda\r
\r
La interpretacion profunda de un DCL es causal: cada flecha responde a una interaccion y cada proyeccion responde a una pregunta fisica concreta. El objetivo no es llenar papel de vectores, sino explicar por que el sistema acelera en cierta direccion y por que puede estar en equilibrio en otra.\r
\r
Cuando [[Fx]] es no nula y [[Fy]] es cercana a cero, el sistema no esta "parcialmente mal resuelto"; esta mostrando una lectura fisica clara: aceleracion predominante en un eje con equilibrio en el eje ortogonal.\r
\r
Asimismo, cuando [[fs]] se mantiene bajo su cota y el cuerpo no desliza, la conclusion no es solo numerica. Significa que el contacto todavia compensa demanda tangencial sin ruptura de adherencia.\r
\r
El DCL tambien sirve para diagnostico: si una medicion indica comportamiento inesperado, el primer paso no es forzar datos en la ecuacion, sino auditar el diagrama: agente, direccion, magnitud y regimen.\r
\r
## Orden de magnitud\r
\r
Referencias utiles de orden de magnitud en contextos academicos y tecnicos:\r
\r
- [[m]]: desde fracciones de kg en laboratorio hasta cientos de kg en maquinaria liviana.\r
- [[g]]: alrededor de 9.8 m/s^2 en superficie terrestre.\r
- [[P]]: escala de N a miles de N segun [[m]].\r
- [[N]]: del mismo orden que [[P]] en apoyos simples.\r
- [[T]]: puede variar ampliamente segun transmision de carga.\r
- [[Fx]] y [[Fy]]: dependen de ejes, no solo de intensidad fisica total.\r
- [[a]], [[ax]], [[ay]]: desde casi cero en regimen casi estatico hasta valores altos en arranque o frenado.\r
- [[mu_s]] y [[mu_k]]: parametros adimensionales de contacto, sensibles a material y estado superficial.\r
- [[theta]]: define redistribucion entre [[Ppar]] y [[Pperp]].\r
- [[fk]] y [[fs]]: asociados al regimen de deslizamiento o adherencia.\r
- [[Ppar]] y [[Pperp]]: componentes geometricas del peso en ejes adaptados al plano.\r
\r
Estas referencias permiten detectar resultados absurdos sin recalculo completo.\r
\r
## Método de resolución personalizado\r
\r
1. Define sistema y frontera.\r
2. Dibuja solo fuerzas externas justificadas.\r
3. Elige ejes alineados con restricciones o movimiento esperado.\r
4. Proyecta y arma balances por eje.\r
5. Declara regimen de contacto y friccion.\r
6. Resuelve variables objetivo.\r
7. Verifica unidades, signos y orden de magnitud.\r
8. Cierra con interpretacion causal y recomendacion operativa.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Caso especial A: plano inclinado sin deslizamiento. La cota de [[fs]] gobierna si hay adherencia.\r
\r
Caso especial B: transicion a deslizamiento. Cambia modelo de rozamiento y se actualiza balance tangencial.\r
\r
Caso especial C: eje vertical en equilibrio con aceleracion horizontal. Muestra utilidad de separar [[Fy]] y [[Fx]].\r
\r
Ejemplo extendido tipico:\r
\r
- Sistema sobre plano con [[theta]] variable.\r
- Se calcula efecto de cambiar [[theta]] sobre [[Ppar]], [[Pperp]], [[N]] y demanda de friccion.\r
- Se identifica punto de ruptura entre regimen estatico y cinetico.\r
\r
## Preguntas reales del alumno\r
\r
Por que no puedo dibujar la fuerza "del movimiento"?\r
\r
Porque el movimiento es efecto, no agente externo.\r
\r
Por que dos diagramas distintos pueden representar la misma escena?\r
\r
Porque cambian ejes o detalle de descomposicion, pero deben conservar equivalencia fisica.\r
\r
Cuando uso [[fs]] y cuando [[fk]]?\r
\r
[[fs]] mientras no hay deslizamiento relativo; [[fk]] cuando ya hay deslizamiento.\r
\r
Si [[Fext]] da cero, siempre hay reposo?\r
\r
No necesariamente; puede haber velocidad constante. Cero resultante implica cero aceleracion.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con descomposicion vectorial, leyes de Newton por ejes, analisis de friccion, dinamica en plano inclinado, diseno de mecanismos y diagnostico de fallas en contacto.\r
\r
Ruta sugerida:\r
\r
1. DCL en superficies horizontales.\r
2. DCL en planos inclinados con y sin friccion.\r
3. Sistemas con cuerdas y poleas ideales.\r
4. Integracion con energia y trabajo para validacion cruzada.\r
\r
## Síntesis final\r
\r
Dominar diagramas de cuerpo libre significa transformar una escena fisica en un modelo causal verificable. Cuando el diagrama esta bien construido, las ecuaciones adquieren sentido y la interpretacion deja de ser mecanica para volverse predictiva y accionable.\r
\r
La competencia clave no es memorizar plantillas, sino decidir correctamente que fuerzas existen, como se proyectan y cuando el modelo necesita escalar de complejidad.\r
`;export{e as default};
