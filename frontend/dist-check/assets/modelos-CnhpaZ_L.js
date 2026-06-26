const e=`# Modelos físicos

## Modelo ideal

El modelo estándar de seguridad eléctrica doméstica trata al cuerpo humano como una **resistencia pura y constante** en el circuito de contacto. La instalación se modela como una fuente de tensión ideal a 230 V AC con impedancia interna despreciable, y el contacto entre persona y conductor se trata como una conexión directa sin resistencias de transición ni impedancias de contacto.

En este modelo, las magnitudes conservadas son [[V_contacto]], [[R_cuerpo]] e [[I_cuerpo]], relacionadas por la Ley de Ohm. Las magnitudes ignoradas incluyen la variación temporal de [[R_cuerpo]] durante el contacto, la reactancia inductiva y capacitiva del cuerpo, la resistencia de los zapatos y el suelo, y la impedancia interna de la red. Esta simplificación permite calcular directamente la corriente máxima de peligro usando solo dos parámetros conocidos.

El significado físico de la simplificación central es conservador por diseño: al asumir [[R_cuerpo]] = 1000 Ω (el peor caso normativo) se sobreestima el riesgo. Las protecciones diseñadas con esta hipótesis son válidas para todos los casos reales, incluso aquellos con resistencia más alta.

## Hipótesis

- **Resistencia corporal constante durante el contacto**: [[R_cuerpo]] no varía con el tiempo ni con la corriente. Si se viola, las quemaduras destruyen la piel resistiva y [[R_cuerpo]] disminuye progresivamente, aumentando [[I_cuerpo]] durante la exposición —el modelo subestima el riesgo en contactos prolongados.

- **Tensión de contacto igual a la tensión de red (230 V)**: se asume contacto directo fase-tierra sin caída en impedancias intermedias. Si se viola —contacto indirecto a través de masa con resistencia de tierra— [[V_contacto]] puede ser inferior a 230 V, pero el modelo sigue siendo válido como cota superior de riesgo.

- **Corriente alterna a 50 Hz con factor de potencia unitario**: el cuerpo se modela como resistencia pura (sin capacitancia ni inductancia significativa). Si se viola —frecuencias muy altas o muy bajas— los umbrales fisiológicos cambian: a frecuencias > 100 kHz el efecto piel reduce el daño interno.

- **Trayectoria mano izquierda-pies como referencia**: se usa la trayectoria con mayor factor de riesgo cardíaco. Si la trayectoria real es distinta, el riesgo efectivo puede ser menor, pero el modelo conservador cubre el peor caso.

## Dominio de validez cuantitativo

El modelo es válido bajo las siguientes condiciones cuantitativas:

- **[[R_cuerpo]] ≥ 500 Ω**: por debajo de este valor (heridas abiertas extensas, mucosas) la hipótesis de resistencia constante deja de ser conservadora y el modelo puede subestimar el riesgo real.
- **[[V_contacto]] entre 50 V y 230 V**: por debajo de 50 V el riesgo es bajo y el modelo sobreestima el peligro de forma segura; por encima de 230 V (sobretensiones transitorias) se requiere modelo extendido.
- **Frecuencia de red 50–60 Hz**: los umbrales IEC 60479 son específicos para esta banda.
- **Tiempo de exposición < 1 s**: el modelo estático es válido. Para exposiciones más largas, la variación de [[R_cuerpo]] con quemaduras y el calentamiento de tejidos requieren modelo dinámico.

La desigualdad de seguridad fundamental es: [[I_cuerpo]] < [[I_segura]], con [[I_segura]] = 30 mA para uso doméstico general.

## Señales de fallo del modelo

- **Corriente calculada muy superior a 230 mA**: con 230 V y [[R_cuerpo]] ≥ 1000 Ω, el máximo teórico es 230 mA. Si el cálculo supera este valor, los datos de entrada son inconsistentes con el modelo doméstico estándar.

- **Diferencial que dispara repetidamente sin contacto aparente**: indica que la suma de corrientes de fuga normales de la instalación supera el umbral del diferencial, lo que significa que el [[margen]] de seguridad para un contacto real es casi nulo. El modelo estático no captura esta situación de degradación acumulada.

- **Contacto sin corriente apreciable con tensión de red presente**: puede indicar que la resistencia del suelo o los zapatos es muy alta (suelo aislante), caso en que el modelo subestima la seguridad real. También puede indicar que hay un neutro flotante o una fase sin retorno efectivo a tierra.

- **Diferencial que no dispara con corriente de fuga medida superior a su umbral**: señal de que el diferencial está deteriorado o que hay corriente de modo diferencial que se cancela (circuito con fuga simétrica). El modelo supone diferencial en perfecto estado.

## Modelo extendido o alternativo

El modelo extendido incluye **impedancia corporal compleja** en lugar de resistencia pura. A frecuencias distintas de 50 Hz o en condiciones específicas, el cuerpo humano presenta reactancia capacitiva significativa que reduce la corriente efectiva a las mismas tensiones.

La diferencia concreta respecto al modelo ideal es que [[R_cuerpo]] se reemplaza por la impedancia corporal Z (donde la reactancia depende de la frecuencia). A 50 Hz, la reactancia es muy pequeña comparada con la resistencia corporal para trayectorias largas (mano-pie), por lo que el modelo resistivo puro es una excelente aproximación.

**Transición explícita**: Conviene pasar al modelo extendido con impedancia compleja cuando:
- La frecuencia de la fuente supera los 1 kHz (sistemas de telecomunicaciones, variadores de velocidad)
- Se analiza el riesgo en superficies de contacto pequeñas (puntas de dedos), donde la capacitancia de la piel es relevante incluso a 50 Hz
- Se trabaja con corriente continua, donde la reactancia desaparece pero aparecen efectos electrolíticos que el modelo resistivo no captura

## Comparación operativa

| Aspecto | Modelo resistivo ideal | Modelo de impedancia compleja |
|---|---|---|
| **Parámetro corporal** | [[R_cuerpo]] constante (1000 Ω) | Impedancia variable con frecuencia |
| **Relación de corriente** | Corriente corporal calculada por Ley de Ohm estándar | Corriente calculada usando el módulo de la impedancia |
| **Umbrales usados** | IEC 60479 (50 Hz) | Umbrales ajustados por frecuencia |
| **Precisión a 50 Hz** | Alta (error < 5% en condiciones normales) | Máxima (referencia de cálculo) |
| **Complejidad** | Mínima, calculable manualmente | Requiere valor de Z según frecuencia |
| **Uso recomendado** | Diseño y verificación doméstica | Análisis de sistemas con frecuencias variables |
| **Conservadurismo** | Sobreestima el riesgo (seguro por diseño) | Más preciso pero puede subestimar en ciertos casos |
`;export{e as default};
