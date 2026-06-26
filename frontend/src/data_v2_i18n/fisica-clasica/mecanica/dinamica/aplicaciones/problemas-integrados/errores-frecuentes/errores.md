# Errores frecuentes: Errores frecuentes en dinámica

## Errores conceptuales

### Error 1: Confundir causa con efecto en el Diagrama de Cuerpo Libre

**Por qué parece correcto**: El peso actúa hacia abajo y la superficie empuja hacia arriba; parece lógico que la [[componente_normal_erronea]] siempre sea igual a [[masa_cuerpo]]·[[aceleracion_gravedad]], porque "la superficie contrarresta el peso".

**Por qué es incorrecto**: La [[componente_normal_erronea]] contrarresta solo la componente del peso perpendicular a la superficie, no el peso completo. En plano inclinado, esa componente es [[masa_cuerpo]]·[[aceleracion_gravedad]]·cosθ, que es menor que el peso total. Equiparar normal a peso ignora la descomposición vectorial obligatoria.

**Señal de detección**: Tu [[componente_normal_erronea]] calculada es igual a [[masa_cuerpo]]·[[aceleracion_gravedad]], pero el sistema tiene [[angulo_plano]] ≠ 0. O tu [[fuerza_rozamiento_maximo]] resulta independiente del ángulo de inclinación.

**Corrección conceptual**: Proyectar siempre el peso sobre los ejes del sistema de referencia. Nunca transferir la fórmula horizontal directamente al caso inclinado. Usar siempre:

{{f:proyeccion_normal_plano}}

**Mini-ejemplo de contraste**: Bloque en plano horizontal → [[componente_normal_erronea]] vale 49,05 N. Mismo bloque en plano con [[angulo_plano]] de 30° → [[componente_normal_erronea]] vale 42,47 N. Error: suponer 49,05 N en el plano inclinado → sobreestima [[fuerza_rozamiento_maximo]] en un 15,5 %.

---

### Error 2: Aplicar la fórmula de tensión como si fuera una fuerza externa al sistema

**Por qué parece correcto**: La tensión es una fuerza real y medible. Parece razonable incluirla en el balance de fuerzas al aplicar la segunda ley al conjunto.

**Por qué es incorrecto**: La tensión es una fuerza interna del sistema vinculado. Al sumar fuerzas externas para hallar [[aceleracion_sistema]], la tensión aparece en pares de acción-reacción que se cancelan. Incluirla infla artificialmente la [[F_ext_net]] y produce [[aceleracion_sistema]] mayor de la real.

**Señal de detección**: Tu [[aceleracion_sistema]] calculada es mayor que g·(m_1 - μm_2)/(m_1 + m_2), o tu resultado numérico tiene el mismo módulo que la fuerza de tensión dividida por una sola masa.

**Corrección conceptual**: Definir el contorno del sistema antes de aplicar la segunda ley. Solo las fuerzas que cruzan ese contorno son externas. Usar:

{{f:ley_newton_sistemas}}

**Mini-ejemplo de contraste**: Sistema con `m_1` de 4 kg (vertical) y `m_2` de 3 kg (horizontal, [[coeficiente_rozamiento_estatico]] de 0,4). Error: incluir tensión en la sumatoria global → [[F_ext_net]] y [[aceleracion_sistema]] sobreestimadas. Correcto: [[F_ext_net]] resulta de las fuerzas externas netas → [[aceleracion_sistema]] de 3,92 m/s².

---

### Error 3: Confundir magnitudes similares

**Por qué parece correcto**: [[coeficiente_rozamiento_estatico]] y el coeficiente cinético son ambos coeficientes de rozamiento y comparten símbolo base μ. En ausencia de información adicional, estudiantes usan el que recuerdan primero.

**Por qué es incorrecto**: El [[coeficiente_rozamiento_estatico]] rige el umbral de arranque; el cinético rige el movimiento ya iniciado. Usar el estático durante el movimiento sobreestima [[fuerza_rozamiento_maximo]] y subestima [[aceleracion_sistema]].

**Señal de detección**: Tu análisis indica que el sistema no arranca cuando el problema dice que sí se mueve, o viceversa. La [[fuerza_erronea]] introduce una discrepancia entre predicción y resultado esperado.

**Corrección conceptual**: Identificar la fase del movimiento antes de elegir el coeficiente. Arranque o reposo → [[coeficiente_rozamiento_estatico]]. Movimiento activo → coeficiente cinético. El [[signo_aceleracion]] también cambia según la fase.

**Mini-ejemplo de contraste**: Caja sobre banda transportadora. Fase de deslizamiento inicial: usar `μk` de 0,3 da [[aceleracion_sistema]] de 2,94 m/s². Error: usar [[coeficiente_rozamiento_estatico]] de 0,35 da [[aceleracion_sistema]] sobreestimada → predicción incorrecta del tiempo de igualación de velocidades.

---

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

**Por qué parece correcto**: El modelo sin rozamiento, o el modelo de plano rígido, funciona bien en la mayoría de los ejercicios del libro. Es natural confiar en él incluso cuando el enunciado introduce variantes.

**Por qué es incorrecto**: Cada configuración (plano inclinado, polea con inercia, superficie deformable) tiene condiciones de validez. Ignorarlas produce [[aceleracion_sistema]] con error sistemático, no aleatorio.

**Señal de detección**: El resultado tiene signo correcto y orden de magnitud plausible pero discrepa cuantitativamente del 5 al 20 % con datos reales. Esto indica que una hipótesis fue violada silenciosamente.

**Corrección conceptual**: Antes de calcular, listar explícitamente las hipótesis: cuerda inextensible, polea sin inercia, plano rígido, rozamiento constante. Si alguna es dudosa, estimar si el error introducido es tolerable para la precisión pedida.

**Mini-ejemplo de contraste**: Sistema de dos masas con polea maciza. Sin inercia de polea: [[aceleracion_sistema]] de 1,51 m/s². Con inercia de polea (`m_p` de 0,5 kg): [[aceleracion_sistema]] de 1,43 m/s². Diferencia del 5 %. El modelo simplificado es aceptable; con polea más pesada, la diferencia escalaría.

---

### Error 5: Ignorar los límites del modelo conocidos

**Por qué parece correcto**: Si el modelo funciona en el caso estándar, parece innecesario verificar límites en cada aplicación.

**Por qué es incorrecto**: El [[angulo_plano]] máximo para contacto físico con la superficie es aquel donde [[componente_normal_erronea]] se anula. Para rozamiento muy bajo o ángulos superiores a 60°, el modelo de plano rígido con rozamiento falla antes de que el estudiante lo advierta.

**Señal de detección**: [[componente_normal_erronea]] calculada resulta negativa o nula, o [[aceleracion_sistema]] supera [[aceleracion_gravedad]] (valor físicamente imposible sin fuerza propulsora adicional).

**Corrección conceptual**: Verificar siempre que [[componente_normal_erronea]] sea positiva y que [[aceleracion_sistema]] no supere [[aceleracion_gravedad]]. Estos son los límites físicos absolutos del modelo. Superarlos indica error de modelado, no de cálculo.

**Mini-ejemplo de contraste**: Para [[angulo_plano]] de 80°, [[componente_normal_erronea]] resulta `m`·g·cos(80°) ≈ 0,17·`m`·g → contacto frágil, rozamiento casi nulo. El modelo predice deslizamiento masivo. Si el estudiante obtiene [[aceleracion_sistema]] mayor que g, es señal inequívoca de error en la [[F_ext_net]] o en [[masa_total]].

---

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

**Por qué parece correcto**: La regla algebraica de despejar una variable es mecánica y parece infalible si se aplica correctamente.

**Por qué es incorrecto**: En problemas físicos, despejar [[aceleracion_sistema]] de la segunda ley vinculada requiere identificar correctamente todos los términos. Un despeje que omite la [[fuerza_rozamiento_maximo]] del numerador o divide por [[masa_cuerpo]] en lugar de [[masa_total]] produce resultado incorrecto aunque el despeje algebraico sea internamente consistente.

**Señal de detección**: El resultado tiene unidades correctas y orden de magnitud plausible pero no coincide con ninguna estimación de sentido común. El error suele estar en qué magnitudes entran en el numerador y cuáles en el denominador.

**Corrección conceptual**: Verificar dimensionalmente paso a paso. Tras despejar, reemplazar cada magnitud por su dimensión y confirmar que las unidades del resultado son m/s² para [[aceleracion_sistema]] o N para fuerzas.

**Mini-ejemplo de contraste**: Sistema de tres masas (2+3+4 kg) con [[F_ext_net]] de 18 N y [[coeficiente_rozamiento_estatico]] de 0,2. Error: dividir solo por la primera masa (2 kg) → [[aceleracion_sistema]] de 6,1 m/s². Correcto: dividir por [[masa_total]] de 9 kg → [[aceleracion_sistema]] de 0,04 m/s².

---

### Error 7: Olvidar constantes fundamentales o unidades

**Por qué parece correcto**: [[aceleracion_gravedad]] es una constante tan ubicua que a veces se asume implícitamente en la fórmula sin incluirla explícitamente.

**Por qué es incorrecto**: Omitir [[aceleracion_gravedad]] en el cálculo de la [[fuerza_motriz]] o de [[componente_normal_erronea]] produce resultados con unidades incorrectas (kg en lugar de N) y error de un factor de 9,81.

**Señal de detección**: Tu resultado de fuerza tiene unidades de kg en lugar de N, o es aproximadamente 9,81 veces menor que el valor esperado.

**Corrección conceptual**: Siempre incluir [[aceleracion_gravedad]] (9,81 m/s²) explícitamente. Verificar que el peso de [[masa_cuerpo]] tiene unidades N antes de continuar.

**Mini-ejemplo de contraste**: [[fuerza_motriz]] calculada sin [[aceleracion_gravedad]] da 5×0,5 = 2,5 (sin unidades correctas). Con [[aceleracion_gravedad]]: [[fuerza_motriz]] de 5×9,81×0,5 = 24,53 N.

---

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

**Por qué parece correcto**: Un número con decimales parece preciso, y el estudiante transcribe todos los que muestra la calculadora.

**Por qué es incorrecto**: El [[coeficiente_rozamiento_estatico]] se conoce con 2 cifras significativas como mucho; por tanto [[fuerza_rozamiento_maximo]] no puede tener más de 2 cifras significativas. Reportar 21,2374 N implica una precisión del 0,01 % en una magnitud conocida al 5-10 %.

**Señal de detección**: Tu resultado tiene más cifras significativas que el dato con menor precisión del enunciado. O reportas [[aceleracion_sistema]] con 4 decimales cuando [[masa_total]] solo se dio con 2 cifras.

**Corrección conceptual**: Identificar el dato con mayor incertidumbre (generalmente [[coeficiente_rozamiento_estatico]] o [[angulo_plano]] medido) y redondear el resultado final a esa cantidad de cifras significativas.

**Mini-ejemplo de contraste**: μs dado como 0,5 (1 cifra) → [[fuerza_rozamiento_maximo]] reportar como 21 N, no 21,235 N. [[aceleracion_sistema]] reportar como 1,5 m/s², no 1,5074 m/s².

---

### Error 9: Saltarte la interpretación física del resultado calculado

**Por qué parece correcto**: El enunciado pide un número y el estudiante lo proporciona. Parece que el problema está resuelto.

**Por qué es incorrecto**: La física no es solo calcular; es decidir. ¿El bloque se desliza o no? ¿El vehículo necesita freno de mano? Estas decisiones requieren comparar [[fuerza_motriz]] con [[fuerza_rozamiento_maximo]], no solo calcularlas por separado. Omitir la comparación final es omitir la respuesta real.

**Señal de detección**: Calculaste [[fuerza_motriz]] y [[fuerza_rozamiento_maximo]] correctamente pero no concluiste si el sistema arranca o permanece en reposo. O calculaste [[aceleracion_sistema]] sin decir si es positiva o negativa ni qué significa el [[signo_aceleracion]] en el contexto.

**Corrección conceptual**: Siempre formular la conclusión física en lenguaje explícito: "el bloque se desliza porque [[fuerza_motriz]] supera [[fuerza_rozamiento_maximo]]" o "el sistema permanece en reposo porque [[fuerza_rozamiento_maximo]] supera [[fuerza_motriz]]". El número solo tiene valor cuando tiene nombre e interpretación.

**Mini-ejemplo de contraste**: [[fuerza_motriz]] de 24,53 N y [[fuerza_rozamiento_maximo]] de 21,24 N. Error: concluir "calculé ambas fuerzas, listo". Correcto: "Como [[fuerza_motriz]] (24,53 N) supera [[fuerza_rozamiento_maximo]] (21,24 N), el bloque SE DESLIZA y [[aceleracion_sistema]] es 1,51 m/s² cuesta abajo".

---

## Regla de autocontrol rápido

Antes de entregar cualquier solución de dinámica vinculada, recorre esta lista:

✓ **¿Dibujé el DCL antes de escribir ecuaciones?** La [[fuerza_erronea]] se detecta aquí.

✓ **¿Proyecté vectorialmente el peso?** Nunca igualar [[componente_normal_erronea]] al producto de [[masa_cuerpo]] por [[aceleracion_gravedad]] en plano inclinado.

✓ **¿Excluí tensiones internas del sumatorio global?** Las tensiones se cancelan en la [[F_ext_net]] del sistema.

✓ **¿Usé [[masa_total]] (todos los cuerpos) en el denominador?** Omitir una masa sobreestima [[aceleracion_sistema]].

✓ **¿Concluí si el sistema arranca o no?** Comparar explícitamente [[fuerza_motriz]] con [[fuerza_rozamiento_maximo]].
