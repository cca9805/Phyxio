## Errores conceptuales


### Error 1: Clasificar solo por el aspecto visual
**Por qué parece correcto**
Una fase suele verse distinta tras la transición, así que parece natural mirar solo la imagen final.

**Por qué es incorrecto**
La clasificación depende de [[calor_latente]], [[salto_entropia]], [[salto_parametro_de_orden]] y derivadas de [[energia_libre_gibbs]], no de la apariencia. Un cambio visual brusco puede ser cinético.

**Señal de detección**
El razonamiento no menciona [[temperatura_critica]] ni ninguna discontinuidad termodinámica.

**Corrección conceptual**
Usa la imagen como pista, pero decide con magnitudes medibles y con el [[parametro_de_orden]].

**Mini-ejemplo de contraste**
Un cristal puede cambiar de aspecto por dominios lentos sin mostrar [[calor_latente]] resoluble.


### Error 2: Pensar que transición continua significa cambio débil
**Por qué parece correcto**
La palabra continua suena a cambio suave y poco importante.

**Por qué es incorrecto**
Una transición continua puede tener respuestas muy grandes cerca de [[temperatura_critica]] y comportamiento crítico del [[parametro_de_orden]].

**Señal de detección**
Se descarta el fenómeno porque no aparece [[calor_latente]].

**Corrección conceptual**
Distingue ausencia de salto finito de ausencia de efecto físico.

**Mini-ejemplo de contraste**
Un ferromagneto puede perder magnetización de forma continua y aun así mostrar gran sensibilidad crítica.

## Errores de modelo


### Error 3: Elegir un parámetro de orden irrelevante
**Por qué parece correcto**
Cualquier variable que cambie con [[temperatura]] parece útil.

**Por qué es incorrecto**
El [[parametro_de_orden]] debe distinguir fases por simetría u organización. Si se elige mal, el [[salto_parametro_de_orden]] puede ocultar la transición.

**Señal de detección**
El valor cambia por calentamiento ordinario, pero no separa fases.

**Corrección conceptual**
Define primero qué diferencia física separa las fases y después escoge la magnitud.

**Mini-ejemplo de contraste**
La densidad puede no distinguir una transición magnética, mientras la magnetización sí.


### Error 4: Ignorar histéresis y metastabilidad
**Por qué parece correcto**
Si la curva muestra un salto, parece que la clasificación ya está decidida.

**Por qué es incorrecto**
El salto observado puede depender de nucleación, velocidad de barrido o historia térmica, no solo de [[energia_libre_gibbs]] de equilibrio.

**Señal de detección**
La [[temperatura_critica]] aparente cambia al calentar y enfriar.

**Corrección conceptual**
Compara barridos, busca coexistencia y separa cinética de termodinámica.

**Mini-ejemplo de contraste**
El sobreenfriamiento puede desplazar una solidificación sin cambiar la clasificación ideal.

## Errores matemáticos


### Error 5: Usar mal el signo del salto de entropía
**Por qué parece correcto**
Solo importa que haya salto, no su signo.

**Por qué es incorrecto**
El signo de [[salto_entropia]] indica qué fase tiene mayor entropía y condiciona el signo de [[calor_latente]] según el convenio.

**Señal de detección**
Se informa [[calor_latente]] positivo sin indicar sentido de la transición.

**Corrección conceptual**
Define fase inicial, fase final y convenio antes de aplicar

{{f:salto_entropia_latente}}

.

**Mini-ejemplo de contraste**
Fundir y solidificar tienen intercambio energético opuesto aunque compartan la misma frontera.


### Error 6: Confundir exponente con amplitud
**Por qué parece correcto**
[[exponente_critico_beta]] y [[amplitud_critica]] aparecen juntos en la ley crítica.

**Por qué es incorrecto**
[[exponente_critico_beta]] controla la curvatura logarítmica cerca de [[temperatura_critica]], mientras [[amplitud_critica]] escala el tamaño del [[parametro_de_orden]].

**Señal de detección**
Se cambia la pendiente crítica ajustando solo [[amplitud_critica]].

**Corrección conceptual**
Ajusta escala y exponente por separado usando

{{f:exponente_parametro_orden}}

.

**Mini-ejemplo de contraste**
Duplicar [[amplitud_critica]] no cambia el tipo de ley crítica.

## Errores de interpretación


### Error 7: Tomar orden de transición como etiqueta absoluta
**Por qué parece correcto**
El [[orden_de_transicion]] parece una clasificación cerrada y universal.

**Por qué es incorrecto**
Depende del modelo, de la variable medida, de la resolución y de si la transición está en equilibrio.

**Señal de detección**
Se ignoran incertidumbres o señales contradictorias.

**Corrección conceptual**
Presenta la clasificación como diagnóstico basado en evidencias.

**Mini-ejemplo de contraste**
Una transición débilmente de primer orden puede parecer continua en una muestra pequeña.


### Error 8: Confundir discontinuidad con divergencia
**Por qué parece correcto**
Ambas producen rasgos llamativos en los gráficos.

**Por qué es incorrecto**
Una discontinuidad es un salto finito; una divergencia o singularidad puede aparecer sin [[salto_parametro_de_orden]].

**Señal de detección**
Se llama salto a una curva continua con pendiente muy grande.

**Corrección conceptual**
Comprueba límites laterales, resolución y continuidad del [[parametro_de_orden]].

**Mini-ejemplo de contraste**
Una susceptibilidad puede crecer mucho cerca de [[temperatura_critica]] aunque el [[parametro_de_orden]] se anule suavemente.

## Regla de autocontrol rápido

Antes de clasificar, pregunta: ¿hay [[calor_latente]] o [[salto_entropia]]?, ¿hay [[salto_parametro_de_orden]]?, ¿la lectura está cerca de [[temperatura_critica]] y en equilibrio?