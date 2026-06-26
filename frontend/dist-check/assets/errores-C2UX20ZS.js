const e=`# Errores frecuentes: Identificacion de fuerzas\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
**Por que parece correcto**: al resolver rapido, parece natural atribuir el resultado observado a una "fuerza del movimiento" en lugar de rastrear agentes reales.\r
\r
**Por que es incorrecto**: en mecanica clasica, el efecto (aceleracion o reposo) surge de interacciones. Si no se identifica agente, no hay fuerza valida en el diagrama.\r
\r
**Senal de deteccion**: aparece una flecha con nombre ambiguo, sin cuerpo externo asociado, y despues se usa en ecuaciones como si fuera fuerza real.\r
\r
**Correccion conceptual**: para cada flecha, escribir "agente -> sistema". Si no se puede escribir, se elimina la flecha.\r
\r
**Mini-ejemplo de contraste**: "fuerza de avance" sin agente vs [[F_ap]] aplicada por operador sobre el bloque.\r
\r
### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto\r
\r
**Por que parece correcto**: usar una ecuacion conocida da sensacion de seguridad y rapidez.\r
\r
**Por que es incorrecto**: toda formula tiene hipotesis. Fuera de hipotesis, la cuenta puede cerrar y aun asi describir mal el sistema.\r
\r
**Senal de deteccion**: se sustituye directamente sin revisar estado de contacto, regimen de friccion o escala temporal.\r
\r
**Correccion conceptual**: antes de sustituir, declarar regimen: contacto activo/inactivo, estatico/cinetico, y limites de validez.\r
\r
**Mini-ejemplo de contraste**: imponer [[f_s]] = [[mu_s]]*[[N]] siempre vs usar [[f_s]] como respuesta adaptativa con cota.\r
\r
### Error 3: Confundir magnitudes similares\r
\r
**Por que parece correcto**: [[P]], [[N]] y [[f]] comparten unidad de fuerza y pueden tener modulos cercanos.\r
\r
**Por que es incorrecto**: misma unidad no implica misma funcion fisica. Cada magnitud tiene agente y direccion propios.\r
\r
**Senal de deteccion**: intercambio de [[P]] por [[N]] sin justificacion geometrica o uso de [[f]] con direccion arbitraria.\r
\r
**Correccion conceptual**: distinguir por origen: Tierra -> [[P]], contacto normal -> [[N]], contacto tangencial -> [[f]].\r
\r
**Mini-ejemplo de contraste**: en apoyo horizontal, [[N]] puede igualar en modulo a [[P]], pero no reemplaza su rol causal.\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
**Por que parece correcto**: el modelo base funciona en la mayoria de ejercicios academicos.\r
\r
**Por que es incorrecto**: en campo real aparecen vibracion, humedad, desgaste y transitorios que rompen hipotesis del caso ideal.\r
\r
**Senal de deteccion**: prediccion de reposo repetida y observacion de deslizamiento en ensayos sucesivos.\r
\r
**Correccion conceptual**: conservar identificacion por agente y extender solo la capa de contacto/friccion cuando la evidencia lo pida.\r
\r
**Mini-ejemplo de contraste**: mismo [[F_ap]] con [[mu_s]] degradado por humedad cambia de reposo a deslizamiento.\r
\r
### Error 5: Ignorar los límites del modelo conocidos\r
\r
**Por que parece correcto**: una vez aprendido, el modelo parece universal.\r
\r
**Por que es incorrecto**: extrapolar fuera de rango invalida conclusiones aunque algebraicamente no haya error.\r
\r
**Senal de deteccion**: se usa equilibrio estatico en situaciones con contacto intermitente o impactos dominantes.\r
\r
**Correccion conceptual**: declarar limites de aplicacion y verificar si el caso real cae dentro del dominio.\r
\r
**Mini-ejemplo de contraste**: tratar [[system_contact]] variable en el tiempo como constante y obtener diagnostico falso.\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
**Por que parece correcto**: la manipulacion algebraica rapida parece eficiente.\r
\r
**Por que es incorrecto**: un despeje mal signado o sin control de unidades altera umbral y clasifica mal el regimen.\r
\r
**Senal de deteccion**: resultado final implica fuerza negativa sin interpretacion o contradice el diagrama.\r
\r
**Correccion conceptual**: verificar signo, unidades y consistencia de cada paso, no solo el resultado final.\r
\r
**Mini-ejemplo de contraste**: concluir [[f]] > 0 con [[system_contact]] = 0, lo cual viola el modelo.\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
**Por que parece correcto**: las unidades se perciben como detalle secundario frente a la ecuacion.\r
\r
**Por que es incorrecto**: una conversion incorrecta desplaza [[P]], [[N]] y umbrales de [[f_s]] de forma critica.\r
\r
**Senal de deteccion**: valores fuera de orden de magnitud razonable para [[m]] y [[g]] declarados.\r
\r
**Correccion conceptual**: normalizar a SI al inicio y mantener control dimensional durante todo el procedimiento.\r
\r
**Mini-ejemplo de contraste**: usar [[g]] con unidad incorrecta y sobreestimar el umbral de no deslizamiento.\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite\r
\r
**Por que parece correcto**: reportar muchos decimales da apariencia de rigor.\r
\r
**Por que es incorrecto**: la precision numerica excede la calidad del modelo y de los datos de entrada.\r
\r
**Senal de deteccion**: resultado con cuatro o cinco decimales cuando [[mu_s]] fue estimado de forma gruesa.\r
\r
**Correccion conceptual**: reportar cifras significativas coherentes con incertidumbre fisica y medicion.\r
\r
**Mini-ejemplo de contraste**: informar umbral como 61.8034 N con [[mu_s]] aproximado a dos cifras.\r
\r
### Error 9: Saltarte la interpretación física del resultado calculado\r
\r
**Por que parece correcto**: al obtener numero, se cree que el problema esta cerrado.\r
\r
**Por que es incorrecto**: sin lectura causal no hay decision tecnica util, solo un valor aislado.\r
\r
**Senal de deteccion**: la solucion termina en la ultima operacion algebraica sin clasificar regimen ni riesgo.\r
\r
**Correccion conceptual**: cerrar siempre con lectura fisica: agente dominante, estado de contacto, margen y accion recomendada.\r
\r
**Mini-ejemplo de contraste**: decir "61.8 N" vs decir "margen estatico 6.8 N; mantener [[F_ap]] por debajo de 60 N".\r
\r
## Regla de autocontrol rápido\r
\r
1. ¿Cada fuerza tiene agente fisico identificado?\r
2. ¿[[system_contact]] es coherente con presencia de [[N]] y [[f]]?\r
3. ¿[[f_s]] se trato como cota y no como igualdad forzada?\r
4. ¿Signos y unidades son consistentes?\r
5. ¿La conclusion traduce el numero en decision fisica?\r
\r
Si alguna respuesta es no, corrige el planteo antes de aceptar el resultado.\r
`;export{e as default};
