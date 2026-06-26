# Campo y potencial gravitatorio

## Contexto conceptual
El corazón de este leaf es distinguir dos ideas que suelen mezclarse en clase. El [[g]] es una medida local de aceleración y responde a la pregunta de cuánto cambia el movimiento en un punto. El [[V]] es una medida energética por unidad de masa y responde a cuánto cuesta mover una masa entre posiciones. Ambos describen la misma interacción, pero lo hacen desde perspectivas complementarias.

Cuando el estudiante entiende esta diferencia, deja de memorizar recetas y empieza a elegir modelo físico con criterio. Si una tarea pide trayectoria y aceleración local, conviene pensar en [[g]]. Si la pregunta trata de balances de energía entre dos posiciones, conviene pensar en [[V]], [[U]] y [[DeltaU]]. La física no cambia, cambia la variable que organiza mejor la lectura del problema.

La pregunta física central de este leaf es muy operativa. Necesitamos saber cómo conectar descripción local y descripción energética para predecir comportamiento en sistemas astronómicos y en aproximaciones cercanas a la superficie terrestre. Resolver esa conexión exige coherencia de unidades, de signos y de referencias geométricas.

## 🟢 Nivel esencial
En nivel esencial evitamos algebra innecesaria. La idea clave es que la gravedad cambia con la distancia. Cerca de la fuente, la influencia es intensa. Lejos de la fuente, la influencia disminuye. Esa lectura cualitativa permite anticipar tendencias antes de calcular.

El error didáctico más frecuente en esta etapa es confundir lectura local y lectura de estado energético. No son lo mismo. Una describe respuesta instantánea del movimiento. La otra describe cómo está organizado el sistema en términos de energía. Por eso, dos preguntas con datos parecidos pueden requerir rutas de resolución distintas.

También es esencial fijar referencia de energía desde el inicio. Sin referencia explícita, comparar resultados entre ejercicios puede volverse ambiguo aunque las cuentas parezcan correctas. Con referencia bien declarada, la interpretación de cambios entre estados se vuelve estable y defendible.

Por último, conviene separar con claridad quién genera la interacción y quién responde a ella. Esa distinción evita errores de causa y efecto y reduce confusiones de signo en etapas posteriores del cálculo.

## 🔵 Nivel formal
Con base conceptual clara, presentamos el sistema matemático del leaf. Todas las ecuaciones se expresan con inyección de fórmulas para mantener coherencia semántica y trazabilidad en el frontend.

Lectura local del campo gravitatorio:

{{f:campo_puntual}}

Lectura energética por unidad de masa:

{{f:potencial_puntual}}

Conversión de potencial en energía potencial para una masa de prueba:

{{f:energia_desde_potencial}}

Cambio de energía potencial entre estado inicial y final:

{{f:cambio_energia_potencial}}

Relación entre trabajo de la gravedad y cambio energético:

{{f:trabajo_gravitatorio}}

Relación conceptual entre campo y pendiente espacial del potencial:

{{f:relacion_campo_potencial_conceptual}}

Superposición de contribuciones de múltiples fuentes para campo:

{{f:superposicion_campos_conceptual}}

Superposición de contribuciones de múltiples fuentes para potencial:

{{f:superposicion_potenciales_conceptual}}

En práctica docente, estas expresiones se aplican con un protocolo estable. Primero se identifica si el problema exige lectura local o energética. Después se define radio inicial [[ri]] y radio final [[rf]] en una misma referencia geométrica. Finalmente se validan signo y escala del resultado. Si el problema incluye dos estados, conviene además registrar [[gi]] y [[gf]] para verificar si la aproximación de campo casi constante es defendible.

La validación dimensional es otro filtro robusto. La unidad de [[g]] debe permanecer como aceleración. La unidad de [[V]] debe permanecer como energía por unidad de masa. La unidad de [[U]], [[DeltaU]] y [[Wg]] debe permanecer como energía. Si esa consistencia falla, normalmente el origen es una conversión radial incorrecta o una confusión entre potencial y energía potencial.

## 🔴 Nivel estructural
El nivel estructural responde a cuándo deja de ser razonable aplicar el modelo de masa puntual sin matices. El primer criterio es geométrico. El modelo puntual es muy potente cuando la distribución real es esférica o cuando la distancia de observación es mucho mayor que la escala interna de la fuente. Si ese criterio no se cumple, pueden aparecer desviaciones sistemáticas.

El segundo criterio es de régimen físico. Este leaf trabaja en marco clásico no relativista. Si el sistema entra en régimen relativista fuerte, la interpretación mediante potencial escalar global deja de ser suficiente. En ese caso, el estudiante debe migrar a un marco de gravitación relativista donde las nociones de energía potencial se manejan con más cuidado y con nuevas hipótesis.

El tercer criterio es operativo y cuantitativo. Si el rango radial de análisis es estrecho, la variación de [[g]] entre [[gi]] y [[gf]] puede ser pequeña y se admite una aproximación local. Si ese rango crece, la diferencia entre estado inicial y final se vuelve relevante y debe usarse modelo radial completo. En términos de uso, cuando la variación relativa entre [[ri]] y [[rf]] es baja, la aproximación local puede ser razonable. Cuando esa variación supera umbrales prácticos de diseño, conviene volver al modelo exacto de dependencia radial.

La transición de modelo debe declararse de forma explícita. Una señal típica es obtener discrepancias sistemáticas entre predicción dinámica y predicción energética. Otra señal es forzar una única [[g]] promedio en un trayecto donde el gráfico radial muestra variación pronunciada. En esos casos, mantener el modelo simplificado solo por comodidad algebraica produce errores de interpretación, no solo errores numéricos.

## Interpretacion fisica profunda
Una lectura profunda del leaf consiste en entender que [[g]] y [[V]] no compiten, se complementan. El [[g]] traduce gradiente espacial en aceleración local. El [[V]] resume estructura energética del sistema y permite resolver saltos entre estados sin integrar toda la trayectoria de fuerzas en cada paso.

Cuando un cuerpo se desplaza desde [[ri]] hasta [[rf]], la pregunta clave no es únicamente cuánto vale una magnitud al final, sino cómo cambió la organización del sistema. Si [[DeltaU]] es positiva, el sistema ha ganado energía potencial. Si [[Wg]] es positiva, el campo gravitatorio ha entregado trabajo neto durante el desplazamiento. Ese par de lecturas evita muchos errores de signo.

En ejercicios de órbita y escape, esta capa interpretativa es decisiva. El valor absoluto de [[V]] y la variación de [[U]] ayudan a separar estados ligados de estados no ligados. Además, comparar [[gi]] con [[gf]] orienta sobre cómo cambia la respuesta dinámica local durante la maniobra.

## Orden de magnitud
En estimaciones gravitatorias, el orden de magnitud funciona como detector temprano de errores gruesos. Si un resultado energético sale varios órdenes por debajo de la escala esperada para un cambio orbital, normalmente el problema no está en la física avanzada sino en unidades, referencia o transcripción de radios.

Una práctica útil es comparar tres niveles. Nivel local para aceleración, nivel de estado para potencial y nivel de transferencia para cambios energéticos. Si uno de esos niveles queda muy desalineado frente a los otros, conviene revisar planteamiento antes de continuar.

Este control no reemplaza cálculo detallado, pero reduce retrabajo y evita que un error pequeño de entrada se convierta en una conclusión técnicamente inválida.

## Metodo de resolucion personalizado
1. Delimitar sistema físico, fuente gravitatoria y marco de referencia radial.
2. Etiquetar variables conocidas con IDs consistentes: [[M]], [[m]], [[ri]], [[rf]], [[r]].
3. Elegir ruta de solución principal: dinámica local con [[g]] o energética con [[V]] y [[U]].
4. Aplicar la fórmula núcleo correspondiente en forma simbólica antes de sustituir valores.
5. Sustituir datos en SI y revisar escala del resultado con orden de magnitud físico.
6. Verificar coherencia de signo entre [[DeltaU]] y [[Wg]].
7. Comparar lectura inicial y final mediante [[gi]] y [[gf]] cuando exista cambio radial.
8. Cerrar con interpretación causal, no solo con reporte numérico.

Este protocolo reduce errores en problemas de examen y en situaciones de diseño inicial. También facilita detectar cuándo conviene cambiar de modelo por límites del régimen.

## Casos especiales y ejemplo extendido
Caso especial uno: aproximación local cerca de superficie. Si la variación radial es pequeña respecto al radio de la fuente, la diferencia entre [[gi]] y [[gf]] puede ser baja y se puede tratar [[g]] como casi constante para estimaciones rápidas.

Caso especial dos: transferencia radial amplia. Cuando [[rf]] supera claramente a [[ri]], la variación de potencial se vuelve dominante y el cálculo con [[DeltaV]] y [[DeltaU]] ofrece una lectura más estable que una linealización local.

Caso especial tres: sistema de múltiples masas. El campo total requiere suma vectorial conceptual y el potencial total suma escalar. Aquí la intuición geométrica es crítica para no mezclar direcciones con magnitudes escalares.

Ejemplo extendido breve. Una sonda pasa de una órbita baja a una órbita media. En el estado inicial se registra [[ri]] con campo [[gi]] alto. En el estado final se registra [[rf]] con campo [[gf]] menor. La diferencia de radios obliga a usar lectura radial completa para potencial y energía. El cálculo de [[DeltaU]] indica cuánto cambia la energía potencial de la sonda. El cálculo de [[Wg]] permite leer qué parte del intercambio energético corresponde al trabajo del campo durante la transferencia. Si ambos resultados contradicen la tendencia esperada para alejamiento radial, se revisa referencia de potencial y orden de radios.

## Preguntas reales del alumno
- ¿Por qué en unos problemas aparece [[g]] y en otros [[V]] si el fenómeno es el mismo? Porque describen capas distintas de la misma interacción: dinámica local frente a estructura energética.
- ¿Por qué el potencial suele ser negativo? Porque este leaf adopta referencia nula en infinito y los estados ligados quedan por debajo de ese nivel.
- ¿Puedo comparar resultados de [[U]] entre ejercicios distintos? Solo si comparten referencia de potencial y definición consistente del sistema.
- ¿Cuándo deja de servir la aproximación local? Cuando la diferencia radial entre [[ri]] y [[rf]] produce cambio apreciable entre [[gi]] y [[gf]].
- ¿Qué chequeo rápido evita la mayoría de errores? Revisar unidades, revisar signo de [[DeltaU]] y verificar si la tendencia radial del resultado coincide con la física esperada.

## Conexiones transversales y rutas de estudio
Conecta con el leaf de ley de gravitación universal para justificar origen de la dependencia radial. Conecta con energía potencial gravitatoria para profundizar en balances y estados ligados. Conecta con órbitas y satélites para trasladar este marco a problemas de misión, transferencia y estabilidad orbital.

También conecta con fundamentos de modelo físico y dominio de validez, porque la decisión más importante no es solo aplicar ecuaciones, sino declarar cuándo el modelo deja de ser fiable y cuál es el reemplazo adecuado.

## Sintesis final
Este leaf demuestra que el aprendizaje sólido en gravitación no consiste en recitar fórmulas, sino en seleccionar representación correcta para cada pregunta física. El [[g]] organiza la lectura local de aceleración. El [[V]] organiza la lectura energética por unidad de masa. La combinación con [[U]], [[DeltaU]] y [[Wg]] permite pasar de cálculo aislado a interpretación física completa.

Cuando el estudiante domina esa transición entre representaciones, puede resolver problemas nuevos con autonomía, justificar decisiones de modelo y detectar inconsistencias antes de que se conviertan en errores numéricos de alto impacto.
