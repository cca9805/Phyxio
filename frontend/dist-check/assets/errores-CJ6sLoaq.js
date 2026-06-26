const e=`# Errores frecuentes

## Errores conceptuales

### Error 1: La tensión es el agente directo de daño

**Por qué parece correcto**

La advertencia habitual es "cuidado con la alta tensión", y los carteles de peligro eléctrico muestran la tensión en voltios. El alumno generaliza: a mayor tensión, mayor peligro directo. Esta analogía es parcialmente correcta pero omite el papel de la resistencia.

**Por qué es incorrecto**

La tensión no interactúa con los tejidos; lo hace la corriente. La tensión solo determina cuánta corriente fluirá dado el camino eléctrico disponible. Un generador de 10 000 V con resistencia interna de 100 MΩ produce 0.1 mA —imperceptible. La red doméstica a 230 V con [[R_cuerpo]] = 1000 Ω produce 230 mA —mortal. La magnitud de daño es [[I_cuerpo]], no [[V_contacto]] directamente.

**Señal de detección**

El alumno compara riesgos usando solo tensiones: "el circuito A a 400 V es más peligroso que el B a 230 V sin más información". Este juicio omite las impedancias del circuito.

**Corrección conceptual**

La peligrosidad de un contacto eléctrico se evalúa siempre calculando la corriente resultante: [[I_cuerpo]] = [[V_contacto]] / [[R_cuerpo]]. La tensión es el factor de entrada, no el agente de daño. Una tensión alta con alta impedancia puede ser menos peligrosa que una tensión moderada con baja impedancia.

**Mini-ejemplo de contraste**

Incorrecto: "El cerca eléctrico de 5000 V para ganado es más peligroso que la red doméstica de 230 V." Correcto: el cerca eléctrico libera pulsos de alta tensión pero con energía muy limitada (baja corriente por alta impedancia interna). Una persona sana que lo toca siente un impacto doloroso pero no experimenta fibrilación. La red doméstica a 230 V con [[R_cuerpo]] = 1000 Ω produce 230 mA, 7 veces el umbral de fibrilación.

### Error 2: La resistencia corporal siempre protege

**Por qué parece correcto**

El alumno conoce que el cuerpo humano tiene resistencia eléctrica y que valores más altos limitan la corriente. Si la resistencia "siempre es alta", el peligro siempre sería bajo. Esta lógica es correcta pero ignora cómo varía [[R_cuerpo]] con las condiciones.

**Por qué es incorrecto**

La resistencia corporal no es una constante física: varía por un factor de 100 o más según la condición de la piel. Piel seca puede tener 50 000–100 000 Ω; piel mojada, 500–2 000 Ω. Un alumno que trabaja en el jardín mojado por la lluvia, toca un cable pelado a 230 V y tiene [[R_cuerpo]] = 800 Ω recibirá 287 mA —mortal. El mismo contacto con las manos completamente secas y [[R_cuerpo]] = 80 000 Ω produciría 2.9 mA —apenas perceptible.

**Señal de detección**

El alumno concluye que un escenario es seguro basándose en la resistencia corporal "normal" (piel seca) sin considerar las condiciones del entorno (lluvia, baño, cocina húmeda).

**Corrección conceptual**

Para evaluar el riesgo real, siempre usar el valor de [[R_cuerpo]] correspondiente a las condiciones del escenario: 1000 Ω para zonas húmedas (valor normativo IEC 60479 para diseño de protecciones), 5 000 Ω para condiciones normales de trabajo, 50 000 Ω o más solo en condiciones controladas de laboratorio con piel seca.

**Mini-ejemplo de contraste**

Incorrecto: "Con 230 V y resistencia corporal de 50 000 Ω, la corriente es 4.6 mA, completamente segura, no necesito diferencial." Correcto: ese cálculo usa piel seca de laboratorio. En la misma situación con las manos sudadas ([[R_cuerpo]] = 5 000 Ω) la corriente sube a 46 mA, zona de fibrilación posible. El diferencial sí es necesario.

## Errores de modelo

### Error 3: El diferencial protege frente a todos los riesgos eléctricos

**Por qué parece correcto**

El diferencial es el dispositivo de "protección personal" del cuadro eléctrico. El alumno deduce que si hay diferencial, está protegido de todo riesgo eléctrico en la instalación.

**Por qué es incorrecto**

El diferencial detecta únicamente corrientes de fuga asimétricas (desequilibrio entre la corriente de fase y de neutro). No protege frente a: (a) contactos entre fase y neutro sin tierra (la persona queda en el circuito pero no hay fuga a tierra), (b) sobrecargas ni cortocircuitos entre conductores (esa es la función del magnetotérmico), (c) contactos en instalaciones IT (sin neutro a tierra). Además, el diferencial tiene tiempo de respuesta no nulo: si dispara en 200 ms con corriente de 60 mA, puede no evitar la fibrilación.

**Señal de detección**

El alumno supone que la presencia de un diferencial en el cuadro garantiza que cualquier contacto accidental será inofensivo, sin calcular [[I_cuerpo]] ni el [[margen]] de protección.

**Corrección conceptual**

El diferencial proporciona protección efectiva cuando: (a) su umbral [[I_diferencial]] supera la corriente de fuga calculada, (b) su tiempo de respuesta es inferior a 30 ms, y (c) el circuito de tierra está en buen estado. El [[margen]] de protección (cociente entre [[I_diferencial]] e [[I_cuerpo]]) debe ser mayor que 1 para el escenario analizado.

**Mini-ejemplo de contraste**

Incorrecto: "La instalación tiene diferencial de 30 mA, así que un contacto en el baño con la ducha encendida es seguro." Correcto: en el baño con piel mojada [[R_cuerpo]] ≈ 500 Ω y [[V_contacto]] = 230 V, [[I_cuerpo]] = 460 mA. El diferencial de 30 mA dispararía (460 mA > 30 mA), pero la corriente es tan alta que el tiempo de exposición antes del disparo puede ser suficiente para fibrilación. Por eso se requieren diferenciales de 10 mA con tiempo de respuesta < 10 ms en zonas mojadas.

## Errores matemáticos

### Error 4: Confundir vatios (potencia) con amperios (corriente) en la evaluación de peligro

**Por qué parece correcto**

Los electrodomésticos se etiquetan en vatios (potencia) y el alumno usa la potencia como proxy de la corriente para evaluar el riesgo. Si un equipo consume "muchos vatios", el alumno asume que circula "mucha corriente" y por tanto hay "mucho peligro".

**Por qué es incorrecto**

La potencia y la corriente están relacionadas por la tensión (la potencia siendo el producto de la tensión por la intensidad de corriente), pero la potencia no mide el riesgo de contacto directo con el conductor. Lo que produce el daño fisiológico es [[I_cuerpo]], que depende de [[V_contacto]] y [[R_cuerpo]], no de la potencia del aparato. Un horno de 2000 W a 230 V consume 8.7 A por su circuito, pero si alguien toca un conductor pelado de ese circuito, la corriente corporal [[I_cuerpo]] se calcula como el cociente entre [[V_contacto]] y [[R_cuerpo]], resultando en 230 mA para una tensión de 230 V y una resistencia de 1000 Ω, valor completamente independiente de los 8.7 A de carga del horno.

**Señal de detección**

El alumno escribe "la corriente de peligro es 8.7 A porque el horno consume 2000 W a 230 V" como evaluación del riesgo de contacto, confundiendo la corriente de carga con la corriente corporal.

**Corrección conceptual**

Para evaluar el riesgo de contacto eléctrico, ignorar la potencia del aparato y calcular siempre [[I_cuerpo]] = [[V_contacto]] / [[R_cuerpo]]. La potencia del aparato determina el calibre del circuito y del magnetotérmico, pero no el riesgo de electrocución en caso de contacto.

**Mini-ejemplo de contraste**

Incorrecto: "El calentador de 50 W a 12 V (corriente 4.2 A) es más peligroso que el calentador de 23 W a 230 V (corriente 0.1 A) porque circula más corriente." Correcto: si alguien toca la fase del calentador de 230 V, [[I_cuerpo]] = 230/1000 = 230 mA (peligroso). Si toca la fase del calentador de 12 V, [[I_cuerpo]] = 12/1000 = 12 mA (molesto pero generalmente no mortal). La tensión de contacto, no la corriente de carga, determina el riesgo.

## Errores de interpretación

### Error 5: Interpretar un diferencial que no dispara como confirmación de seguridad

**Por qué parece correcto**

Si el diferencial no dispara, el alumno interpreta que no hay corriente de fuga peligrosa. Esta lógica funciona cuando el diferencial está en buen estado, pero no en todos los casos.

**Por qué es incorrecto**

El diferencial puede no disparar y existir riesgo real en cuatro situaciones: (1) la corriente de fuga es inferior al umbral pero superior al límite fisiológico (entre 5 mA y 30 mA puede ser peligrosa en ciertas condiciones sin disparar el diferencial de 30 mA), (2) el diferencial está deteriorado y no responde, (3) la fuga es simétrica en fase y neutro (el diferencial detecta desequilibrios, no fugas equilibradas), (4) el contacto es entre fase y neutro sin tierra, escenario que el diferencial no detecta.

**Señal de detección**

El alumno concluye que una instalación es segura porque "el diferencial no ha disparado nunca". Esta afirmación no verifica el estado del diferencial ni descarta las situaciones en las que no dispararía.

**Corrección conceptual**

La seguridad eléctrica se verifica mediante medición y cálculo, no solo por ausencia de disparos del diferencial. Verificar periódicamente el diferencial con el botón de test, medir la resistencia de tierra (debe ser < 37 Ω según REBT para que con 230 V de falta la corriente supere el umbral del diferencial) y calcular [[I_cuerpo]] para los escenarios de contacto posibles.

**Mini-ejemplo de contraste**

Incorrecto: "Llevamos 10 años sin que dispare el diferencial, la instalación es segura." Correcto: un diferencial con mecanismo bloqueado por corrosión puede haber perdido su capacidad de disparo sin que nadie lo note. La prueba del botón de test debe hacerse al menos mensualmente. Adicionalmente, una fuga gradual de 25 mA en la instalación (por deterioro de aislamiento) consumiría el 83% del umbral de 30 mA sin disparar, dejando solo 5 mA de [[margen]] para un contacto accidental.

## Regla de autocontrol rápido

Antes de declarar seguro un escenario eléctrico, verificar los cuatro puntos siguientes:

1. **¿Se calculó [[I_cuerpo]] con [[R_cuerpo]] adecuado a las condiciones?** Usar 1000 Ω para zonas húmedas, no el valor de piel seca.
2. **¿Es [[I_cuerpo]] < [[I_diferencial]] instalado?** Si no, el diferencial no protege en ese escenario.
3. **¿Tiene el diferencial tiempo de respuesta < 30 ms?** Un diferencial lento no es protección efectiva.
4. **¿Se ha verificado el estado del circuito de tierra?** Sin tierra efectiva, el diferencial no detecta la fuga.

Si alguna de estas cuatro preguntas no tiene respuesta afirmativa verificada, el análisis de seguridad está incompleto.
`;export{e as default};
