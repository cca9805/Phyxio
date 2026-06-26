# Errores frecuentes: Diagramas cuerpo libre

## Errores conceptuales

### Error 1: Confundir causa con efecto

**Por que parece correcto**: al ver movimiento, algunos estudiantes dibujan una fuerza "del movimiento" para justificar lo observado.

**Por que es incorrecto**: el movimiento es efecto de fuerzas externas, no un agente externo en si mismo.

**Senal de deteccion**: aparece una flecha sin cuerpo externo identificable y luego se usa en balances como si fuera real.

**Correccion conceptual**: exigir para cada flecha el formato "agente -> sistema" antes de proyectar.

**Mini-ejemplo de contraste**: "fuerza de avance" inventada vs [[T]] aplicada por cuerda con direccion definida.

### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto

**Por que parece correcto**: reutilizar una ecuacion conocida ahorra tiempo y da sensacion de seguridad.

**Por que es incorrecto**: una formula correcta en contexto incorrecto produce resultados inconsistentes.

**Senal de deteccion**: se sustituye directamente sin declarar ejes, regimen de friccion ni condicion de contacto.

**Correccion conceptual**: fijar primero sistema, ejes y regimen; luego elegir ecuacion.

**Mini-ejemplo de contraste**: usar [[fk]] en una situacion sin deslizamiento vs verificar primero si aplica [[fs]].

### Error 3: Confundir magnitudes similares

**Por que parece correcto**: varias magnitudes tienen unidad de fuerza y parecen intercambiables.

**Por que es incorrecto**: [[P]], [[N]], [[Fx]] y [[Fy]] pueden compartir unidad pero cumplen roles causales distintos.

**Senal de deteccion**: reemplazar [[N]] por [[P]] sin justificar geometria o usar [[Fext]] como si fuera componente de eje.

**Correccion conceptual**: distinguir magnitudes por agente, direccion y funcion dentro del balance.

**Mini-ejemplo de contraste**: en plano inclinado, [[Ppar]] no puede remplazar a [[Pperp]] aunque ambas sean componentes del mismo peso.

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

**Por que parece correcto**: el modelo base de DCL funciona bien en muchos ejercicios academicos.

**Por que es incorrecto**: en campo real hay vibracion, cambios de superficie y transitorios que alteran supuestos.

**Senal de deteccion**: discrepancia persistente entre prediccion y medicion pese a calculo algebraico correcto.

**Correccion conceptual**: mantener el DCL como base y extender solo la capa de contacto/dinamica cuando la evidencia lo exija.

**Mini-ejemplo de contraste**: misma [[T]] con diferente humedad produce comportamiento distinto por cambio en [[mu_s]].

### Error 5: Ignorar los límites del modelo conocidos

**Por que parece correcto**: una vez aprendido el modelo, se asume aplicable a cualquier caso.

**Por que es incorrecto**: todo modelo tiene dominio de validez limitado por supuestos.

**Senal de deteccion**: se usan balances cuasiestaticos en eventos de impacto o cambios de regimen no declarados.

**Correccion conceptual**: documentar explicitamente supuestos y verificar si se sostienen en el escenario real.

**Mini-ejemplo de contraste**: aplicar equilibrio vertical simple cuando hay despegue parcial del contacto.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

**Por que parece correcto**: resolver rapido parece eficiente cuando se domina la manipulacion simbolica.

**Por que es incorrecto**: un signo mal tratado cambia direccion de aceleracion y conclusion fisica.

**Senal de deteccion**: resultado con [[ax]] de signo contrario al observado sin revision de ejes.

**Correccion conceptual**: revisar signos en cada proyeccion antes de consolidar resultado final.

**Mini-ejemplo de contraste**: perder el signo de [[Ppar]] al pasar terminos y concluir aceleracion hacia arriba del plano sin causa.

### Error 7: Olvidar constantes fundamentales o unidades

**Por que parece correcto**: las unidades se perciben como un detalle administrativo.

**Por que es incorrecto**: una conversion mala desplaza magnitudes y altera umbrales de regimen.

**Senal de deteccion**: [[P]] o [[N]] fuera de orden de magnitud razonable para la masa usada.

**Correccion conceptual**: imponer chequeo dimensional obligatorio en cada cierre de eje.

**Mini-ejemplo de contraste**: usar [[g]] con valor incorrecto y sobreestimar capacidad de adherencia.

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

**Por que parece correcto**: muchos decimales dan apariencia de exactitud.

**Por que es incorrecto**: la precision numerica no compensa incertidumbre de parametros de contacto.

**Senal de deteccion**: reportar cuatro decimales con [[mu_s]] estimado de forma aproximada.

**Correccion conceptual**: ajustar cifras significativas al nivel real de incertidumbre.

**Mini-ejemplo de contraste**: declarar umbral con exceso de decimales sin justificar calidad de medicion.

### Error 9: Saltarte la interpretación física del resultado calculado

**Por que parece correcto**: finalizar calculo parece equivalente a resolver el problema.

**Por que es incorrecto**: sin lectura causal no hay decision tecnica valida.

**Senal de deteccion**: la solucion termina en un numero sin describir regimen ni implicacion fisica.

**Correccion conceptual**: cerrar siempre con lectura de agente dominante, eje critico y accion sugerida.

**Mini-ejemplo de contraste**: informar solo [[Fx]] numerico vs concluir si el sistema acelera, equilibra o cambia de regimen.

## Regla de autocontrol rápido

1. ¿Cada flecha tiene agente externo identificado?
2. ¿Los ejes usados coinciden con la geometria del problema?
3. ¿El regimen de friccion fue declarado antes de sustituir?
4. ¿Signos y unidades son coherentes en ambos ejes?
5. ¿La conclusion explica fisicamente el numero obtenido?

Si alguna respuesta es no, corrige el planteo antes de aceptar la solucion.
