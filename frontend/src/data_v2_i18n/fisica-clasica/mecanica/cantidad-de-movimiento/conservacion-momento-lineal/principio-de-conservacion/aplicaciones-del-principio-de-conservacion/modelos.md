# Modelos físicos: aplicaciones del principio de conservación

## Modelo ideal

El modelo ideal de aplicaciones del principio de conservación supone que basta con usar la conservación de momento como herramienta de resolución y estimación. Se conserva solo la estructura imprescindible para que la relación principal describa el mecanismo dominante y para que la lectura del diagrama siga siendo limpia. En este nivel se eliminan detalles secundarios del material, del fluido o del contacto porque todavía no cambian la conclusión esencial. Esa simplificación es valiosa siempre que el alumno pueda explicar qué fenómeno se ha descartado y por qué su ausencia no altera la interpretación principal de la variable [[P]].

## Hipótesis

Las hipótesis fundamentales de este modelo son:
- Cuerpos tratados como partículas o sistemas rígidos sin deformación interna significativa.
- Ausencia de fuerzas externas netas durante la interacción (aislamiento perfecto).
- Marco de referencia inercial para medir [[v1i]] y [[v1f]].
- Interacciones de duración despreciable frente a los tiempos de observación global.

Cualquier violación de estas condiciones exige revisar si el modelo sigue siendo aplicable o si se requiere una extensión.

## Dominio de validez cuantitativo

El dominio cuantitativo de validez debe declararse con umbrales verificables. Como regla mínima, conviene exigir variaciones relativas menores del 1 %, errores despreciables y escalas geométricas consistentes. Si el impulso externo acumulado durante el intervalo de [[tiempo]] es mayor al 1 % del momento inicial [[Pinitial]], la magnitud buscada deja de ser fiable aunque la sustitución numérica parezca correcta. Declarar el dominio obliga a justificar por qué el problema pertenece de verdad al régimen descrito por el leaf.

## Señales de fallo del modelo

Las señales de fallo del modelo no suelen empezar en la calculadora, sino en la lectura física. Un cambio inesperado de signo en la velocidad final [[v1f]], una reacción que resulta físicamente imposible, o una tendencia incompatible con problemas de laboratorio indican que la hipótesis de aislamiento se ha roto. También es sospechoso que una corrección supuestamente pequeña domine toda la expresión del balance o cambie el orden de magnitud de la respuesta final [[Pfinal]].

## Modelo extendido o alternativo

El modelo extendido introduce correcciones cuando cambian las hipótesis de rigidez, contacto, velocidad o marco de referencia. En esa ampliación reaparecen términos asociados a geometría real, variaciones del medio o fuerzas disipativas. El objetivo no es complicar por inercia, sino decidir qué refinamiento cambia de verdad la predicción y cuál solo añade ruido algebraico. Un buen criterio consiste en comparar cuánto se modifica la velocidad final común [[vf]] al activar cada corrección por separado.

### Transición a modelo alternativo

**Cuándo conviene cambiar de modelo:** El paso al modelo extendido o a un marco de referencia no inercial es obligatorio en los siguientes casos:
1. **Fuerzas externas dominantes:** Si el sistema está sometido a impulsos externos (fricción, gravedad, motores) que no pueden despreciarse en la ventana temporal del evento.
2. **Efectos relativistas:** Cuando las velocidades se aproximan a una fracción significativa de la velocidad de la luz, donde el balance [[Pinitial]] = [[Pfinal]] debe reformularse mediante el cuadrimomento.
3. **Sistemas de masa variable:** Si el cuerpo gana o pierde masa de forma continua durante el movimiento (como en la propulsión de cohetes sostenida), se debe transicionar al modelo de masa variable.
4. **Colisiones no rígidas:** Cuando la deformación interna o la rotación capturan una fracción crítica del momento, exigiendo el uso de modelos de sólido real o conservación del momento angular.

## Comparación operativa

La comparación con modelos alternativos sirve para decidir si conviene una descripción estática, dinámica, lineal o puramente geométrica. La mejor elección es la que conserva significado físico con el menor número de supuestos discutibles y con una interpretación verificable en el escenario real. Comparar modelos no es una formalidad: es el paso que evita aplicar por costumbre la primera ecuación que uno recuerda.
