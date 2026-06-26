"""Fix all structural issues for enchufes-y-tomas leaf."""
import re
import yaml
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas')

# ── 1. meta.yaml — add missing fields ─────────────────────────────────────────
meta = """\
id: enchufes-y-tomas
nombre:
  es: Enchufes y tomas
  en: Plugs and Sockets
area: fisica-clasica
bloque: electromagnetismo
subbloque: electricidad-domestica
parent_id: electricidad-domestica
ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas
orden: 298300
type: leaf
dificultad: 2
tiempo_estimado_min: 25
descripcion: Enchufes y tomas de corriente. Limites de carga, riesgo termico y diagnostico de sobrecargas.
description_en: Plugs and sockets. Load limits, thermal risk and overload diagnosis.
description:
  es: 'Enchufes y tomas de corriente domésticas: límites de carga, riesgo térmico por contacto y diagnóstico de sobrecargas en regletas.'
  en: 'Domestic plugs and sockets: load limits, local thermal risk from contact resistance, and overload diagnosis in power strips.'
prerequisitos: []
pregunta_fisica_central:
  es: '¿Cuándo supera una toma de corriente su límite seguro de carga y qué riesgo térmico genera el contacto degradado?'
  en: 'When does a socket exceed its safe load limit and what thermal risk does a degraded contact generate?'
tags:
  es:
  - enchufes
  - tomas
  - sobrecarga
  - riesgo termico
  - electricidad domestica
  en:
  - plugs
  - sockets
  - overload
  - thermal risk
  - domestic electricity
niveles:
  es:
  - ESO
  - BACHILLERATO
  - UNIVERSIDAD
  - EXTRACURRICULAR
  en:
  - Secondary
  - Upper Secondary
  - University
  - Extracurricular
icon: "\U0001F321"
graficos:
- Coord
- Svg
physical_role:
  es: concepto físico
  en: physical concept
representacion_dominante: Coord
magnitud_dominante: margen_uso
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Interpretación
      en: Interpretation
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
  mini_graph:
    enabled: true
    preferred_type: Coord
  output_policy:
    show_summary_first: true
    show_warnings: true
    show_likely_errors: true
    max_inline_messages: 4
    collapse_after: 2
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: false
"""

(base / 'meta.yaml').write_text(meta, encoding='utf-8')
try:
    yaml.safe_load((base / 'meta.yaml').read_text(encoding='utf-8'))
    print('meta.yaml OK')
except yaml.YAMLError as e:
    print(f'meta.yaml ERROR: {e}')

# ── 2. teoria.md — add required section headings ───────────────────────────────
teoria = """\
# Enchufes y tomas

Una toma de corriente no es un punto de acceso ilimitado a la red eléctrica. Es un componente físico con un límite de corriente nominal [[I_max]] que, al superarse de forma sostenida, genera calor en los contactos metálicos y puede provocar degradación, cortocircuito o incendio. Entender qué magnitudes determinan ese límite y cómo calcularlas es la competencia central de este leaf.

El mecanismo de riesgo no es eléctrico en sentido estricto — no hay fuga, no hay desequilibrio fase-neutro — sino térmico: la resistencia de contacto [[R_contacto]] disipa calor según la ley de Joule localizada. Cuanto mayor es la corriente total [[I_tot]], mayor es el calentamiento, y ese calentamiento crece con el cuadrado de [[I_tot]].

## Contexto conceptual

Una toma de corriente conecta la instalación fija de la vivienda con los equipos portátiles del usuario. Es el último eslabón de una cadena de protecciones que incluye el diferencial, el magnetotérmico y el cableado de la instalación. Sin embargo, la toma en sí no tiene protección propia: su único límite de diseño es [[I_max]], un umbral pasivo que no actúa — solo define cuándo el uso es seguro y cuándo no.

El concepto de [[margen_uso]] conecta este leaf con el de diferencial y magnetotérmico: allí se calcula el margen respecto al umbral de disparo de las protecciones activas; aquí se calcula el margen respecto al límite pasivo de la toma. La lógica es la misma: un ratio adimensional que mide la proximidad al límite de seguridad.

## 🟢 Nivel esencial

Una toma de corriente tiene un límite de corriente [[I_max]] impreso en el dispositivo o declarado por el fabricante. En instalaciones domésticas europeas, el valor más habitual es 16 A. Una regleta de baja calidad puede tener 10 A.

Cuando se conectan varios equipos a la misma toma o regleta, sus corrientes individuales se suman. Si esa suma supera [[I_max]], la toma está en sobrecarga. Los contactos se calientan. Si la situación se mantiene, el plástico de la carcasa puede ablandarse, los contactos pueden oxidarse o deformarse, y el riesgo de incendio aumenta.

El hecho de que ningún diferencial ni magnetotérmico salte no garantiza que la toma esté segura. El diferencial detecta fugas a tierra; el magnetotérmico protege el cableado del circuito. Ninguno protege los contactos internos de la toma frente a la sobrecarga local.

## 🔵 Nivel formal

La corriente que demanda un equipo individual de potencia [[P]] conectado a una toma de tensión [[V]] es:

{{f:corriente_individual}}

La corriente total que circula por los contactos cuando se conectan simultáneamente varios equipos de potencia total [[P_tot]] es:

{{f:corriente_total}}

Esta [[I_tot]] se compara con [[I_max]]. Para cuantificar el margen de uso de la toma, se define el ratio:

{{f:ratio_uso}}

Cuando [[margen_uso]] alcanza 1, la toma está en su límite nominal. Valores superiores indican sobrecarga activa.

La potencia máxima que puede conectarse sin superar el límite nominal es:

{{f:potencia_max}}

Para evaluar el riesgo térmico local cuando la toma o el enchufe presentan contacto degradado, se aplica la ley de Joule localizada:

{{f:perdida_contacto}}

Esta [[P_perdida]] crece con el cuadrado de [[I_tot]]: duplicar la corriente cuadruplica el calor disipado en el contacto.

## 🔴 Nivel estructural

El modelo de toma ideal asume [[R_contacto]] = 0 y por tanto [[P_perdida]] = 0. En la práctica, incluso tomas nuevas tienen [[R_contacto]] del orden de centésimas de ohmio. Con el tiempo y el uso, [[R_contacto]] puede aumentar por oxidación del contacto metálico, suciedad acumulada en la interfaz, deformación mecánica del borne o degradación del material conductor.

El límite de validez del modelo resistivo es el régimen permanente con corriente alterna eficaz. Los transitorios de arranque de motores o la corriente de carga de condensadores pueden generar picos breves de corriente que superan [[I_max]] sin causar degradación inmediata, porque la energía disipada en cada transitorio es pequeña.

El modelo no incluye la distribución de temperatura en la carcasa ni la resistencia térmica del contacto al entorno. En condiciones de ventilación reducida (regleta bajo un mueble, enchufe tapado) la temperatura real puede ser mayor que la predicha por un modelo de disipación en estado estacionario.

El dominio de validez práctico del modelo: régimen permanente, carga resistiva o casi resistiva, factor de potencia próximo a la unidad. Para cargas con arranque elevado o con mucha electrónica de potencia, el análisis requiere considerar la forma de onda de la corriente.

## Interpretación física profunda

La diferencia entre sobrecarga y defecto térmico de contacto es la más importante distinción conceptual de este leaf. En la sobrecarga, [[I_tot]] supera [[I_max]] y el calor se produce porque la corriente es excesiva. En el defecto térmico, [[I_tot]] puede estar dentro del límite pero [[R_contacto]] es anormalmente alta, y [[P_perdida]] = [[I_tot]]² · [[R_contacto]] es significativa porque [[R_contacto]] ha aumentado por degradación.

Ambos fenómenos tienen la misma consecuencia física — calentamiento del contacto — pero causas distintas y soluciones distintas. Identificar cuál está presente es el primer paso diagnóstico: calcular [[margen_uso]] y, si está bien, estimar si [[P_perdida]] puede ser significativa dado el estado del contacto.

## Orden de magnitud

En una instalación residencial española típica, [[V]] = 230 V. Una toma estándar tiene [[I_max]] = 16 A, por lo que su [[P_max]] es aproximadamente 3 680 W. Una regleta de baja calidad de 10 A tiene [[P_max]] de 2 300 W.

Conectar un calefactor de 2 000 W, un ordenador portátil de 90 W y un cargador de 18 W a la misma regleta supone una [[P_tot]] de 2 108 W, equivalente a [[I_tot]] de 9,2 A, con [[margen_uso]] de 0,57. Dentro del límite. Añadir una segunda estufa de 2 000 W eleva [[P_tot]] a 4 108 W, [[I_tot]] a 17,9 A y [[margen_uso]] a 1,12: sobrecarga activa.

Una [[R_contacto]] de 0,1 Ω con [[I_tot]] = 16 A disipa 25,6 W en el contacto. Con [[R_contacto]] = 0,5 Ω (contacto degradado), la disipación sube a 128 W, suficiente para dañar el plástico en minutos.

## Método de resolución personalizado

Para evaluar si una toma o regleta está sobrecargada:

1. Identificar todos los equipos conectados simultáneamente y sus potencias nominales [[P]].
2. Sumar potencias: calcular [[P_tot]].
3. Calcular [[I_tot]] usando la fórmula de corriente total con [[V]] = 230 V.
4. Identificar [[I_max]] de la toma o regleta (etiqueta del fabricante).
5. Calcular [[margen_uso]] y comparar con 1.
6. Si [[margen_uso]] > 0,8 en uso continuado, redistribuir carga o cambiar a regleta de mayor capacidad.
7. Si hay síntomas térmicos (calor en enchufe, olor a quemado, plástico decolorado), inspeccionar [[R_contacto]] y sustituir la toma.

## Casos especiales y ejemplo extendido

**Caso A — Regleta con múltiples cargadores.** Cuatro cargadores de smartphone de 18 W, un portátil de 65 W y una lámpara LED de 10 W: [[P_tot]] = 147 W, [[I_tot]] = 0,64 A. [[margen_uso]] = 0,04. Sin riesgo térmico.

**Caso B — Calefactores en regleta.** Dos calefactores de 2 000 W en regleta de 10 A ([[P_max]] = 2 300 W): [[P_tot]] = 4 000 W, [[I_tot]] = 17,4 A. [[margen_uso]] = 1,74. Sobrecarga severa. Riesgo inmediato.

**Caso C — Contacto degradado sin sobrecarga.** [[I_tot]] = 8 A (dentro del límite de 16 A) con [[R_contacto]] = 0,3 Ω por oxidación: [[P_perdida]] = 19,2 W. Ningún magnetotérmico actúa, pero el calor local puede dañar el contacto progresivamente.

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con **diferencial y magnetotérmico** (las protecciones no detectan sobrecarga local de toma), con **tensión y potencia en casa** (P y V como datos de entrada) y con **seguridad eléctrica** (consecuencias del calentamiento de contacto). La ley de Joule localizada en [[R_contacto]] es el puente entre la magnitud eléctrica observable ([[I_tot]]) y el riesgo físico (temperatura del contacto).

Ruta de estudio recomendada: **corriente eléctrica → resistencia y ley de Ohm → potencia eléctrica → tensión y potencia en casa → enchufes y tomas (este leaf) → diferencial y magnetotérmico → seguridad eléctrica.**

## Preguntas reales del alumno

**¿Si la regleta tiene fusible propio, está protegida frente a sobrecarga?** El fusible de la regleta protege el circuito contra cortocircuito, pero no necesariamente contra la degradación térmica lenta por sobrecarga moderada. Un fusible de 16 A puede no actuar ante una sobrecarga del 10 % que, mantenida durante horas, degrada el contacto progresivamente.

**¿Una regleta de más amperes es siempre mejor?** Una regleta de 16 A es más segura que una de 10 A solo si el cableado y los contactos internos están dimensionados para 16 A. Una regleta de baja calidad etiquetada como 16 A puede tener contactos que no aguantan esa corriente. El sello de calidad y la norma de producto (EN 61058) son más relevantes que el valor de [[I_max]] declarado.

**¿Por qué los calefactores son el principal riesgo en regletas?** Porque tienen una [[P]] alta y constante durante horas. Un calefactor de 2 000 W consume una corriente de aproximadamente 8,7 A de forma continua. Si hay otros equipos en la misma regleta, [[I_tot]] puede superar [[I_max]] rápidamente. Además, el calor del calefactor eleva la temperatura ambiente de la regleta, reduciendo su capacidad de disipación.

## Síntesis final

La toma de corriente tiene un límite [[I_max]] que no debe superarse en régimen permanente. La corriente total [[I_tot]] = [[P_tot]] / [[V]] es la magnitud que circula por los contactos. El ratio [[margen_uso]] = [[I_tot]] / [[I_max]] cuantifica la proximidad a la sobrecarga. La ley de Joule localizada en [[R_contacto]] explica el riesgo térmico incluso con corrientes dentro del límite cuando el contacto está degradado. Ninguna protección del circuito detecta este riesgo: la única defensa es no superar [[margen_uso]] y mantener los contactos en buen estado.
"""

(base / 'teoria.md').write_text(teoria, encoding='utf-8')
print(f'teoria.md: {len(teoria.split())} words')

# ── 3. teoria.en.md ────────────────────────────────────────────────────────────
teoria_en = """\
# Plugs and Sockets

A socket is not an unlimited access point to the electrical network. It is a physical component with a nominal current limit [[I_max]] which, when exceeded continuously, generates heat in the metallic contacts and can cause degradation, short circuit, or fire. Understanding which quantities determine that limit and how to calculate them is the core competency of this leaf.

The risk mechanism is not strictly electrical — there is no leakage, no phase-neutral imbalance — but thermal: the contact resistance [[R_contacto]] dissipates heat following the localised Joule law. The greater the total current [[I_tot]], the greater the heating, and that heating grows with the square of [[I_tot]].

## Conceptual context

A socket connects the fixed installation of the home to the user's portable devices. It is the last link in a chain of protections that includes the RCD, the MCB, and the installation wiring. However, the socket itself has no active protection: its only design limit is [[I_max]], a passive threshold that does not trip — it only defines when use is safe and when it is not.

The concept of [[margen_uso]] connects this leaf with that of differential and thermal-magnetic breakers: there the margin is calculated relative to the trip threshold of active protections; here it is calculated relative to the passive limit of the socket. The logic is the same: a dimensionless ratio measuring proximity to the safety limit.

## 🟢 Essential level

A socket has a current limit [[I_max]] printed on the device or declared by the manufacturer. In European domestic installations, the most common value is 16 A. A low-quality power strip may have 10 A.

When several devices are connected to the same socket or strip, their individual currents add up. If that sum exceeds [[I_max]], the socket is in overload. The contacts heat up. If the situation persists, the casing plastic may soften, contacts may oxidise or deform, and fire risk increases.

The fact that no RCD or MCB trips does not guarantee the socket is safe. The RCD detects earth leakage; the MCB protects the circuit wiring. Neither protects the internal contacts of the socket against local overload.

## 🔵 Formal level

The current demanded by an individual device of power [[P]] connected to a socket at voltage [[V]] is:

{{f:corriente_individual}}

The total current flowing through the contacts when several devices of total power [[P_tot]] are simultaneously connected is:

{{f:corriente_total}}

This [[I_tot]] is compared with [[I_max]]. To quantify the socket usage margin, the ratio is defined as:

{{f:ratio_uso}}

When [[margen_uso]] reaches 1, the socket is at its nominal limit. Higher values indicate active overload.

The maximum power connectable without exceeding the nominal limit is:

{{f:potencia_max}}

To evaluate local thermal risk when the socket or plug shows degraded contact, the localised Joule law is applied:

{{f:perdida_contacto}}

This [[P_perdida]] grows with the square of [[I_tot]]: doubling the current quadruples the heat dissipated at the contact.

## 🔴 Structural level

The ideal socket model assumes [[R_contacto]] = 0 and therefore [[P_perdida]] = 0. In practice, even new sockets have [[R_contacto]] on the order of hundredths of an ohm. Over time and use, [[R_contacto]] can increase due to oxidation of the metallic contact, dirt accumulated at the interface, mechanical deformation of the terminal, or degradation of the conducting material.

The validity limit of the resistive model is steady state with RMS AC current. Motor startup transients or capacitor charging currents can generate brief current peaks exceeding [[I_max]] without causing immediate degradation, because the energy dissipated in each transient is small.

The model does not include the temperature distribution in the casing or the thermal resistance from the contact to the environment. Under reduced-ventilation conditions (strip under furniture, covered socket) the actual temperature may be higher than predicted by a steady-state dissipation model.

Practical validity domain: steady state, resistive or near-resistive load, power factor close to unity. For loads with high inrush or significant power electronics, analysis requires considering the current waveform.

## Deep physical interpretation

The difference between overload and thermal contact defect is the most important conceptual distinction in this leaf. In overload, [[I_tot]] exceeds [[I_max]] and heat is produced because the current is excessive. In a thermal defect, [[I_tot]] may be within the limit but [[R_contacto]] is abnormally high, and [[P_perdida]] = [[I_tot]]² · [[R_contacto]] is significant because [[R_contacto]] has increased through degradation.

Both phenomena have the same physical consequence — contact heating — but different causes and different solutions. Identifying which is present is the first diagnostic step: calculate [[margen_uso]] and, if it is acceptable, estimate whether [[P_perdida]] could be significant given the contact condition.

## Order of magnitude

In a typical Spanish residential installation, [[V]] = 230 V. A standard socket has [[I_max]] = 16 A, so its [[P_max]] is approximately 3 680 W. A low-quality 10 A strip has [[P_max]] of 2 300 W.

Connecting a 2 000 W heater, a 90 W laptop, and an 18 W charger to the same strip gives [[P_tot]] of 2 108 W, equivalent to [[I_tot]] of 9.2 A, with [[margen_uso]] of 0.57. Within limits. Adding a second 2 000 W heater raises [[P_tot]] to 4 108 W, [[I_tot]] to 17.9 A, and [[margen_uso]] to 1.12: active overload.

A [[R_contacto]] of 0.1 Ω with [[I_tot]] = 16 A dissipates 25.6 W at the contact. With [[R_contacto]] = 0.5 Ω (degraded contact), dissipation rises to 128 W, enough to damage the plastic within minutes.

## Personalized resolution method

To evaluate whether a socket or strip is overloaded:

1. Identify all simultaneously connected devices and their nominal powers [[P]].
2. Sum powers: calculate [[P_tot]].
3. Calculate [[I_tot]] using the total current formula with [[V]] = 230 V.
4. Identify [[I_max]] of the socket or strip (manufacturer label).
5. Calculate [[margen_uso]] and compare with 1.
6. If [[margen_uso]] > 0.8 in continuous use, redistribute load or switch to a higher-capacity strip.
7. If thermal symptoms appear (heat at plug, burning smell, discoloured plastic), inspect [[R_contacto]] and replace the socket.

## Special cases and extended example

**Case A — Strip with multiple chargers.** Four 18 W smartphone chargers, a 65 W laptop, and a 10 W LED lamp: [[P_tot]] = 147 W, [[I_tot]] = 0.64 A. [[margen_uso]] = 0.04. No thermal risk.

**Case B — Heaters on a strip.** Two 2 000 W heaters on a 10 A strip ([[P_max]] = 2 300 W): [[P_tot]] = 4 000 W, [[I_tot]] = 17.4 A. [[margen_uso]] = 1.74. Severe overload. Immediate risk.

**Case C — Degraded contact without overload.** [[I_tot]] = 8 A (within the 16 A limit) with [[R_contacto]] = 0.3 Ω due to oxidation: [[P_perdida]] = 19.2 W. No MCB trips, but local heat can progressively damage the contact.

## Cross-cutting connections and study paths

This leaf connects directly with **differential and thermal-magnetic breakers** (protections do not detect local socket overload), with **voltage and power at home** (P and V as input data), and with **electrical safety** (consequences of contact heating). The Joule law localised at [[R_contacto]] is the bridge between the observable electrical quantity ([[I_tot]]) and the physical risk (contact temperature).

Recommended study path: **electric current → resistance and Ohm's law → electrical power → voltage and power at home → plugs and sockets (this leaf) → differential and thermal-magnetic breakers → electrical safety.**

## Real student questions

**If the strip has its own fuse, is it protected against overload?** The strip fuse protects the circuit against short circuit, but not necessarily against slow thermal degradation from moderate overload. A 16 A fuse may not act against a 10% overload that, sustained for hours, progressively degrades the contact.

**Is a higher-ampere strip always better?** A 16 A strip is safer than a 10 A one only if the internal wiring and contacts are dimensioned for 16 A. A low-quality strip labelled 16 A may have contacts that cannot handle that current. The quality mark and product standard (EN 61058) are more relevant than the declared [[I_max]] value.

**Why are heaters the main risk in power strips?** Because they have high and constant [[P]] for hours. A 2 000 W heater draws approximately 8.7 A continuously. If other devices share the same strip, [[I_tot]] can quickly exceed [[I_max]]. Additionally, the heater heat raises the strip's ambient temperature, reducing its dissipation capacity.

## Final synthesis

The socket has a limit [[I_max]] that must not be exceeded in continuous operation. Total current [[I_tot]] = [[P_tot]] / [[V]] is the quantity flowing through the contacts. The ratio [[margen_uso]] = [[I_tot]] / [[I_max]] quantifies proximity to overload. The Joule law localised at [[R_contacto]] explains the thermal risk even with currents within the limit when the contact is degraded. No circuit protection detects this risk: the only defence is not to exceed [[margen_uso]] and to maintain contacts in good condition.
"""

(base / 'teoria.en.md').write_text(teoria_en, encoding='utf-8')
print(f'teoria.en.md: {len(teoria_en.split())} words')

# ── 4. modelos.md — correct section headings ───────────────────────────────────
modelos = """\
# Modelos físicos de enchufes y tomas

## Modelo ideal

El modelo de toma ideal trata los contactos metálicos como conductores perfectos con [[R_contacto]] = 0 y por tanto [[P_perdida]] = 0. En este modelo, la corriente total [[I_tot]] fluye sin pérdida desde el pin del enchufe al conductor del circuito. La toma solo actúa como interruptor mecánico y punto de conexión sin efecto térmico propio.

Este modelo ideal es el punto de referencia para definir el concepto de sobrecarga: cuando [[I_tot]] supera [[I_max]], se supera el límite de diseño del componente, independientemente de [[R_contacto]].

## Hipótesis

- Los contactos metálicos son conductores perfectos en el modelo ideal.
- Toda la resistencia parásita del circuito está concentrada en [[R_contacto]] cuando el modelo incluye pérdidas de contacto.
- Las cargas son resistivas puras con factor de potencia unitario.
- La corriente es alterna sinusoidal y se usa su valor eficaz (RMS).
- El régimen es permanente: no se modelan transitorios de arranque ni ciclos intermitentes.
- [[P_tot]] = suma de potencias nominales con factor de simultaneidad = 1 (peor caso).

## Dominio de validez cuantitativo

El modelo es válido cuando se cumplen simultáneamente:
- Régimen permanente: tiempo de operación > 30 minutos sin cambios de carga.
- Factor de potencia ≥ 0,85 para las cargas conectadas.
- [[I_tot]] ≤ 2 · [[I_max]] (para factores de simultaneidad menores que 1, la corriente real puede ser menor).
- [[R_contacto]] ≤ 1 Ω (para valores mayores, el modelo de Joule localizado puede subestimar la temperatura real del contacto).

**Condición cuantitativa de riesgo:** [[margen_uso]] ≥ 0,8 en uso continuo (más de 2 horas) activa la zona de vigilancia. [[margen_uso]] ≥ 1 indica sobrecarga activa que requiere acción inmediata. [[P_perdida]] ≥ 1 W indica disipación de contacto apreciable; [[P_perdida]] ≥ 5 W es condición de riesgo térmico severo.

## Señales de fallo del modelo

El modelo de Joule localizado falla o es insuficiente cuando:
- El enchufe se calienta apreciablemente con [[I_tot]] muy por debajo de [[I_max]]: indica [[R_contacto]] muy alta, posiblemente por conexión no completamente insertada o contacto muy oxidado.
- La temperatura del enchufe fluctúa sin cambios de carga: puede indicar un contacto intermitente que genera arcos eléctricos locales, fenómeno no modelado por la resistencia estática.
- El calentamiento aparece solo en un polo (fase o neutro) y no en el otro: indica asimetría de [[R_contacto]] entre los dos contactos del enchufe.
- Los síntomas aparecen tras arranque de motor (compresor, bomba): el transitorio de arranque puede generar [[I_tot]] pico muy superior a la nominal, calentando el contacto aunque la corriente en régimen permanente esté dentro del límite.

Estas señales de fallo observable indican que el modelo estático no es suficiente y que se requiere inspección física del contacto.

## Modelo extendido o alternativo

Cuando el modelo estático es insuficiente, se puede extender incorporando:
1. **Resistencia térmica del contacto al entorno**: permite predecir la temperatura real del contacto en función de [[P_perdida]] y las condiciones de ventilación. Requiere datos del fabricante (resistencia térmica en K/W).
2. **Modelo de arco eléctrico intermitente**: cuando el contacto está muy degradado, puede generar microarcos que disipan energía de forma no lineal. Este modelo requiere análisis de señal de corriente, no solo valor eficaz.
3. **Factor de simultaneidad real**: en lugar de asumir todos los equipos encendidos al máximo, se puede estimar la probabilidad de que todos estén encendidos al mismo tiempo usando distribuciones estadísticas de uso.

La transición al modelo extendido se justifica cuando el modelo simple predice seguridad pero hay síntomas físicos observables de calentamiento.

## Comparación operativa

| Situación | Modelo adecuado | Variable crítica |
|-----------|----------------|-----------------|
| Verificación preventiva (sin síntomas) | Modelo de margen_uso | [[margen_uso]] |
| Calentamiento con carga normal | Modelo de Joule + [[R_contacto]] | [[P_perdida]], [[R_contacto]] |
| Calentamiento intermitente | Modelo de arco (requiere técnico) | Inspección física |
| Diseño de regleta nueva | Modelo completo con [[P_max]] | [[I_max]], [[P_max]] |

En la práctica doméstica, el modelo de [[margen_uso]] y el modelo de Joule localizado cubren más del 90 % de los casos de diagnóstico sin necesidad de instrumentación específica.
"""

(base / 'modelos.md').write_text(modelos, encoding='utf-8')
print(f'modelos.md: {len(modelos.split())} words')

# ── 5. modelos.en.md ───────────────────────────────────────────────────────────
modelos_en = """\
# Physical models of plugs and sockets

## Ideal model

The ideal socket model treats metallic contacts as perfect conductors with [[R_contacto]] = 0 and therefore [[P_perdida]] = 0. In this model, total current [[I_tot]] flows without loss from the plug pin to the circuit conductor. The socket acts only as a mechanical switch and connection point with no inherent thermal effect.

This ideal model is the reference point for defining the concept of overload: when [[I_tot]] exceeds [[I_max]], the design limit of the component is exceeded, regardless of [[R_contacto]].

## Hypotheses

- Metallic contacts are perfect conductors in the ideal model.
- All parasitic resistance of the circuit is concentrated in [[R_contacto]] when the model includes contact losses.
- Loads are purely resistive with unity power factor.
- Current is sinusoidal AC and its RMS value is used.
- Regime is steady state: startup transients and intermittent cycles are not modelled.
- [[P_tot]] = sum of nominal powers with simultaneity factor = 1 (worst case).

## Quantitative validity domain

The model is valid when all of the following are simultaneously satisfied:
- Steady state: operating time > 30 minutes without load changes.
- Power factor ≥ 0.85 for connected loads.
- [[I_tot]] ≤ 2 · [[I_max]] (for smaller simultaneity factors, actual current may be lower).
- [[R_contacto]] ≤ 1 Ω (for higher values, the localised Joule model may underestimate actual contact temperature).

**Quantitative risk condition:** [[margen_uso]] ≥ 0.8 in continuous use (more than 2 hours) activates the monitoring zone. [[margen_uso]] ≥ 1 indicates active overload requiring immediate action. [[P_perdida]] ≥ 1 W indicates appreciable contact dissipation; [[P_perdida]] ≥ 5 W is a severe thermal risk condition.

## Model failure signals

The localised Joule model fails or is insufficient when:
- The plug warms appreciably with [[I_tot]] well below [[I_max]]: indicates very high [[R_contacto]], possibly due to incomplete insertion or heavily oxidised contact.
- Plug temperature fluctuates without load changes: may indicate intermittent contact generating local electric arcs, a phenomenon not modelled by static resistance.
- Heating appears in only one pole (phase or neutral) and not the other: indicates asymmetry of [[R_contacto]] between the two plug contacts.
- Symptoms appear only after motor startup (compressor, pump): the startup transient can generate [[I_tot]] peak much higher than nominal, heating the contact even if steady-state current is within limits.

These observable failure signals indicate the static model is insufficient and physical contact inspection is required.

## Extended or alternative model

When the static model is insufficient, it can be extended by incorporating:
1. **Thermal resistance from contact to environment**: allows predicting actual contact temperature as a function of [[P_perdida]] and ventilation conditions. Requires manufacturer data (thermal resistance in K/W).
2. **Intermittent electric arc model**: when the contact is severely degraded, it may generate micro-arcs that dissipate energy non-linearly. This model requires current signal analysis, not just RMS value.
3. **Actual simultaneity factor**: instead of assuming all devices powered at maximum simultaneously, the probability of all being on at the same time can be estimated using statistical usage distributions.

The transition to the extended model is justified when the simple model predicts safety but observable physical heating symptoms are present.

## Operational comparison

| Situation | Appropriate model | Critical variable |
|-----------|------------------|------------------|
| Preventive check (no symptoms) | Usage ratio model | [[margen_uso]] |
| Heating under normal load | Joule model + [[R_contacto]] | [[P_perdida]], [[R_contacto]] |
| Intermittent heating | Arc model (technician required) | Physical inspection |
| New strip design | Full model with [[P_max]] | [[I_max]], [[P_max]] |

In domestic practice, the [[margen_uso]] model and the localised Joule model cover more than 90% of diagnostic cases without specific instrumentation.
"""

(base / 'modelos.en.md').write_text(modelos_en, encoding='utf-8')
print(f'modelos.en.md: {len(modelos_en.split())} words')

# ── 6. historia.md — correct structure ────────────────────────────────────────
historia = """\
# Historia y evolución de los enchufes y tomas de corriente

## Problema histórico

El problema central que motivó el desarrollo del enchufe doméstico fue conectar y desconectar aparatos eléctricos de la red sin modificar el cableado de la instalación. En los primeros sistemas de distribución doméstica (Edison, Swan, 1880s), los equipos se conectaban directamente a los bornes de la instalación fija, lo que implicaba un riesgo elevado y hacía imposible el uso de equipos portátiles. La necesidad de un punto de conexión seguro, repetible y manipulable por el usuario sin conocimientos técnicos definió el problema de diseño.

## Dificultad conceptual previa

La dificultad principal no era eléctrica sino mecánica: crear un contacto metálico repetible con [[R_contacto]] baja, que no se degradara con el uso y que fuera seguro ante la manipulación. Los primeros enchufes de clavija abierta (sin carcasa aislante sobre las clavijas) permitían el contacto accidental con las partes conductoras bajo tensión. La introducción de clavijas con carcasa aislante y la geometría de inserción guiada resolvió el problema de seguridad, pero creó un nuevo reto: garantizar que [[R_contacto]] permaneciera baja tras miles de ciclos de inserción y extracción.

El concepto de [[I_max]] como límite de diseño del contacto surgió precisamente de la observación de que los contactos se degradaban más rápidamente cuando se usaban con cargas de alta [[I]]. La relación [[P_perdida]] = [[I_tot]]² · [[R_contacto]] explica físicamente por qué la degradación es especialmente severa con corrientes altas: el calor local crece cuadráticamente con la corriente.

## Qué cambió

La introducción de la toma de tierra con el conector Schuko (1926, Alemania) fue el cambio conceptual más importante: separó la función de conexión eléctrica de la función de protección personal. La toma de tierra no limita [[I_tot]] ni protege el contacto frente a sobrecarga, pero sí protege al usuario frente a tensiones peligrosas en la carcasa del equipo. Esta separación funcional es exactamente la que existe entre [[margen_uso]] (protección del contacto) y el diferencial (protección personal).

La normativa IEC 60884 (1994) formalizó el concepto de [[I_max]] como parámetro de diseño obligatorio y estableció pruebas de envejecimiento que validan que [[R_contacto]] no aumente excesivamente tras el uso prolongado.

## Impacto en la física

El análisis de enchufes y tomas introdujo en la ingeniería eléctrica doméstica el concepto de resistencia de contacto como magnitud física relevante, no solo como imperfección ignorable. La ley de Joule localizada, [[P_perdida]] = [[I_tot]]² · [[R_contacto]], es la misma que explica el calentamiento de los filamentos de tungsteno en lámparas incandescentes y las pérdidas en transformadores de potencia; en el contexto de la toma, esta ley opera en una escala de resistencias muy pequeñas pero con corrientes que pueden ser grandes.

El concepto de [[margen_uso]] como ratio adimensional entre la magnitud observada y su límite de diseño es una abstracción que aparece en múltiples contextos de ingeniería de seguridad: factor de uso de materiales, margen de estabilidad en sistemas de control, factor de carga en redes eléctricas. El leaf de enchufes y tomas es una introducción concreta a este patrón de pensamiento.

## Conexión con física moderna

La proliferación de cargadores USB-C de alta potencia (hasta 140 W por puerto, equivalente a una corriente de 0,61 A a 230 V, pero con picos de corriente armónica significativos) ha renovado el interés en el análisis de [[R_contacto]] y [[P_perdida]] para tomas y regletas. Los cargadores modernos con carga rápida generan formas de onda de corriente no sinusoidales que pueden producir calentamientos de contacto mayores que los predichos por el modelo de valor eficaz.

Los estándares actuales (IEC 62368-1) incorporan pruebas de temperatura del contacto bajo perfiles de carga con componentes armónicas, demostrando que el modelo físico de este leaf sigue siendo el núcleo del análisis de seguridad, aunque extendido para incluir la forma de onda real de la corriente.
"""

(base / 'historia.md').write_text(historia, encoding='utf-8')
print(f'historia.md: {len(historia.split())} words')

# ── 7. historia.en.md ─────────────────────────────────────────────────────────
historia_en = """\
# History and evolution of plugs and sockets

## Historical problem

The central problem that motivated the development of the domestic socket was to connect and disconnect electrical devices from the network without modifying the fixed installation wiring. In the first domestic distribution systems (Edison, Swan, 1880s), devices were connected directly to the terminals of the fixed installation, implying high risk and making portable device use impossible. The need for a safe, repeatable connection point manipulable by users without technical knowledge defined the design problem.

## Prior conceptual difficulty

The main difficulty was not electrical but mechanical: creating a repeatable metallic contact with low [[R_contacto]] that did not degrade with use and was safe for manipulation. The first open-pin plugs (without insulating casing over the pins) allowed accidental contact with live conductors. Introducing insulated-casing pins and guided insertion geometry solved the safety problem, but created a new challenge: ensuring [[R_contacto]] remained low after thousands of insertion and extraction cycles.

The concept of [[I_max]] as a contact design limit arose precisely from the observation that contacts degraded faster when used with high-[[I]] loads. The relationship [[P_perdida]] = [[I_tot]]² · [[R_contacto]] physically explains why degradation is especially severe with high currents: local heat grows quadratically with current.

## What changed

The introduction of the earth connection with the Schuko connector (1926, Germany) was the most important conceptual change: it separated the electrical connection function from the personal protection function. The earth connection does not limit [[I_tot]] or protect the contact against overload, but it does protect the user against dangerous voltages on the device casing. This functional separation is exactly that between [[margen_uso]] (contact protection) and the RCD (personal protection).

The IEC 60884 standard (1994) formalised [[I_max]] as a mandatory design parameter and established ageing tests validating that [[R_contacto]] does not increase excessively after prolonged use.

## Impact on physics

The analysis of plugs and sockets introduced into domestic electrical engineering the concept of contact resistance as a relevant physical quantity, not just an ignorable imperfection. The localised Joule law, [[P_perdida]] = [[I_tot]]² · [[R_contacto]], is the same that explains heating of tungsten filaments in incandescent lamps and losses in power transformers; in the socket context, this law operates at a scale of very small resistances but with currents that can be large.

The concept of [[margen_uso]] as a dimensionless ratio between the observed quantity and its design limit is an abstraction that appears in multiple safety engineering contexts: material usage factor, stability margin in control systems, load factor in power networks. The plugs and sockets leaf is a concrete introduction to this thinking pattern.

## Connection with modern physics

The proliferation of high-power USB-C chargers (up to 140 W per port, equivalent to 0.61 A at 230 V, but with significant harmonic current peaks) has renewed interest in [[R_contacto]] and [[P_perdida]] analysis for sockets and strips. Modern fast-charging chargers generate non-sinusoidal current waveforms that can produce contact heating greater than predicted by the RMS model.

Current standards (IEC 62368-1) incorporate contact temperature tests under load profiles with harmonic components, demonstrating that the physical model of this leaf remains the core of safety analysis, though extended to include the actual current waveform.
"""

(base / 'historia.en.md').write_text(historia_en, encoding='utf-8')
print(f'historia.en.md: {len(historia_en.split())} words')

# ── 8. Fix ejemplos.md — add data section + fix coverage ───────────────────────
ejemplos = """\
# Ejemplo tipo examen

## Enunciado

Una regleta doméstica con [[I_max]] = 10 A está conectada a una toma de [[V]] = 230 V. En este momento tiene conectados simultáneamente los siguientes equipos: un calefactor de sobremesa de [[P]] = 1 500 W, un ordenador portátil de [[P]] = 85 W, una lámpara de escritorio LED de [[P]] = 12 W y un cargador de teléfono de [[P]] = 18 W.

Se pide: (a) calcular [[I_tot]] de la regleta; (b) calcular [[P_tot]] y [[P_max]] de la regleta; (c) calcular [[margen_uso]] y determinar si hay sobrecarga; (d) estimar [[P_perdida]] si [[R_contacto]] = 0,15 Ω.

## Datos

- [[V]] = 230 V (tensión de suministro nominal)
- [[I_max]] = 10 A (regleta con calibre de 10 A)
- [[P]] calefactor = 1 500 W
- [[P]] portátil = 85 W
- [[P]] lámpara = 12 W
- [[P]] cargador = 18 W
- [[P_tot]] = 1 500 + 85 + 12 + 18 = 1 615 W (dato calculado de entrada)
- [[R_contacto]] = 0,15 Ω (estimación para regleta de uso habitual)

## Definición del sistema

Sistema: regleta doméstica de [[I_max]] = 10 A con cuatro equipos conectados simultáneamente. Variables de estado: [[I_tot]] en los contactos de la regleta y [[P_perdida]] en la interfaz de contacto. Se modela la corriente total como [[P_tot]] / [[V]] y el riesgo térmico como [[I_tot]]² · [[R_contacto]].

## Modelo físico

Se aplica el modelo de suma de cargas resistivas independientes para calcular [[P_tot]] e [[I]] individual de cada equipo. Se usa el modelo de Joule localizado en [[R_contacto]] para estimar [[P_perdida]]. Se compara [[I_tot]] con [[I_max]] mediante el ratio [[margen_uso]].

## Justificación del modelo

El modelo resistivo es válido para estas cargas: el calefactor es puramente resistivo, el portátil y los cargadores tienen fuente conmutada pero a efectos de potencia promedio la aproximación resistiva es razonable para el cálculo de [[I]] de cada equipo. No se modelan transitorios de arranque porque el calefactor no tiene motor.

## Resolución simbólica

Corriente individual del calefactor a partir de [[P]] y [[V]]:

{{f:corriente_individual}}

Corriente total de la regleta a partir de [[P_tot]] y [[V]]:

{{f:corriente_total}}

Potencia máxima nominal de la regleta:

{{f:potencia_max}}

Ratio de uso de la regleta:

{{f:ratio_uso}}

Potencia disipada en los contactos por efecto Joule:

{{f:perdida_contacto}}

## Sustitución numérica

La [[I]] del calefactor individual resulta de dividir 1 500 W entre 230 V, dando 6,52 A.

La [[P_tot]] es la suma de las cuatro potencias: 1 500 W + 85 W + 12 W + 18 W, dando 1 615 W.

La [[I_tot]] resulta de dividir 1 615 W entre 230 V, dando 7,02 A.

La [[P_max]] de la regleta de [[I_max]] = 10 A a [[V]] = 230 V es de 2 300 W.

El [[margen_uso]] resulta de dividir 7,02 A entre 10 A, dando 0,70. Este valor es inferior a 1: no hay sobrecarga. Sin embargo, el margen es del 30%, lo que significa que añadir cualquier equipo adicional de más de 690 W superaría el límite de [[I_max]].

La [[P_perdida]] resulta de elevar al cuadrado 7,02 A y multiplicar por [[R_contacto]] = 0,15 Ω, dando 7,4 W disipados en el contacto.

## Validación dimensional

La [[I_tot]] se obtiene de vatios dividido por voltios, que equivale a amperios. La [[P_max]] es el producto de [[V]] en voltios por [[I_max]] en amperios, que equivale a vatios. El [[margen_uso]] es el cociente de [[I_tot]] entre [[I_max]], ambos en amperios, resultando adimensional. La [[P_perdida]] es el producto de [[I_tot]] al cuadrado (A²) por [[R_contacto]] en ohmios (Ω), que equivale a vatios (W = A²·Ω). Todas las dimensiones son coherentes.

## Interpretación física

El [[margen_uso]] de 0,70 indica que la regleta opera al 70% de su capacidad nominal. Está dentro del límite pero en uso continuo sería prudente no añadir más carga. La [[P_perdida]] de 7,4 W en el contacto es significativa: si [[R_contacto]] aumenta por degradación a 0,5 Ω, [[P_perdida]] alcanzaría 24,6 W, suficiente para iniciar degradación del plástico de la regleta. El mayor riesgo no es la sobrecarga actual sino la degradación progresiva del contacto por el uso continuado.

---

# Ejemplo de aplicación real

## Contexto

Una familia usa una regleta de baja calidad (con [[I_max]] nominal desconocido) en el salón con la televisión de [[P]] = 120 W, un decodificador de [[P]] = 25 W, una consola de [[P]] = 150 W, un sistema de sonido de [[P]] = 80 W y una lámpara de [[P]] = 60 W. Al cabo de meses, el enchufe de la regleta está caliente al tacto.

## Estimación física

La [[P_tot]] total es 120 + 25 + 150 + 80 + 60, dando 435 W. Con [[V]] = 230 V, la [[I_tot]] resultante es 1,9 A. Si [[I_max]] = 10 A, el [[margen_uso]] es solo 0,19: la carga es muy baja. La causa del calor no es sobrecarga sino una [[R_contacto]] elevada por ser una regleta de baja calidad. Con [[I_tot]] = 1,9 A y calor perceptible, [[R_contacto]] puede estimarse en varios ohmios, lo que implica una [[P_perdida]] de varios vatios en un contacto de pequeño tamaño.

## Interpretación

El riesgo térmico en este caso no proviene de la sobrecarga ([[margen_uso]] muy bajo) sino de la mala calidad del contacto metálico ([[R_contacto]] elevada). La solución es sustituir la regleta por una de calidad certificada con [[R_contacto]] garantizada según norma, no redistribuir la carga. Este caso ilustra que el análisis de seguridad de una toma requiere evaluar tanto [[margen_uso]] como el estado del contacto: ambas vías pueden generar riesgo de forma independiente.
"""

(base / 'ejemplos.md').write_text(ejemplos, encoding='utf-8')
print(f'ejemplos.md: {len(ejemplos.split())} words')

# ── 9. Fix ejemplos.en.md ─────────────────────────────────────────────────────
ejemplos_en = """\
# Exam-type example

## Problem statement

A domestic power strip with [[I_max]] = 10 A is connected to a socket at [[V]] = 230 V. It currently has the following devices simultaneously connected: a desktop heater with [[P]] = 1 500 W, a laptop with [[P]] = 85 W, a LED desk lamp with [[P]] = 12 W, and a phone charger with [[P]] = 18 W.

Required: (a) calculate [[I_tot]] of the strip; (b) calculate [[P_tot]] and [[P_max]] of the strip; (c) calculate [[margen_uso]] and determine whether there is overload; (d) estimate [[P_perdida]] if [[R_contacto]] = 0.15 Ω.

## Data

- [[V]] = 230 V (nominal supply voltage)
- [[I_max]] = 10 A (strip with 10 A rating)
- [[P]] heater = 1 500 W
- [[P]] laptop = 85 W
- [[P]] lamp = 12 W
- [[P]] charger = 18 W
- [[P_tot]] = 1 500 + 85 + 12 + 18 = 1 615 W (calculated input datum)
- [[R_contacto]] = 0.15 Ω (estimate for normally used strip)

## System definition

System: 10 A domestic power strip with four devices simultaneously connected. State variables: [[I_tot]] at the strip contacts and [[P_perdida]] at the contact interface. Total current is modelled as [[P_tot]] / [[V]] and thermal risk as [[I_tot]]² · [[R_contacto]].

## Physical model

The model of summed independent resistive loads is applied to calculate [[P_tot]] and individual [[I]] for each device. The Joule model localised at [[R_contacto]] is used to estimate [[P_perdida]]. [[I_tot]] is compared with [[I_max]] via the [[margen_uso]] ratio.

## Model justification

The resistive model is valid for these loads: the heater is purely resistive, the laptop and chargers have switched-mode supplies but for average power purposes the resistive approximation is reasonable for calculating individual [[I]]. Startup transients are not modelled because the heater has no motor.

## Symbolic solution

Individual heater current from [[P]] and [[V]]:

{{f:corriente_individual}}

Total strip current from [[P_tot]] and [[V]]:

{{f:corriente_total}}

Nominal maximum strip power:

{{f:potencia_max}}

Strip usage ratio:

{{f:ratio_uso}}

Power dissipated at contacts via Joule effect:

{{f:perdida_contacto}}

## Numerical substitution

The individual [[I]] of the heater results from dividing 1 500 W by 230 V, giving 6.52 A.

The [[P_tot]] is the sum of the four powers: 1 500 W + 85 W + 12 W + 18 W, giving 1 615 W.

The [[I_tot]] results from dividing 1 615 W by 230 V, giving 7.02 A.

The [[P_max]] of the 10 A ([[I_max]]) strip at [[V]] = 230 V is 2 300 W.

The [[margen_uso]] results from dividing 7.02 A by 10 A, giving 0.70. This value is below 1: no overload. However, the margin is 30%, meaning that adding any additional device above 690 W would exceed the [[I_max]] limit.

The [[P_perdida]] results from squaring 7.02 A and multiplying by [[R_contacto]] = 0.15 Ω, giving 7.4 W dissipated at the contact.

## Dimensional validation

The [[I_tot]] is obtained from watts divided by volts, which equals amperes. The [[P_max]] is the product of [[V]] in volts and [[I_max]] in amperes, which equals watts. The [[margen_uso]] is the ratio of [[I_tot]] to [[I_max]], both in amperes, giving a dimensionless result. The [[P_perdida]] is the product of [[I_tot]] squared (A²) and [[R_contacto]] in ohms (Ω), which equals watts (W = A²·Ω). All dimensions are consistent.

## Physical interpretation

The [[margen_uso]] of 0.70 indicates the strip operates at 70% of its nominal capacity. It is within the limit but in continuous use it would be prudent not to add more load. The [[P_perdida]] of 7.4 W at the contact is significant: if [[R_contacto]] increases due to degradation to 0.5 Ω, [[P_perdida]] would reach 24.6 W, enough to initiate degradation of the strip plastic. The greatest risk is not the current overload but the progressive contact degradation from continuous use.

---

# Real-world example

## Context

A family uses a low-quality power strip (unknown nominal [[I_max]]) in the living room with a television at [[P]] = 120 W, a set-top box at [[P]] = 25 W, a games console at [[P]] = 150 W, a sound system at [[P]] = 80 W, and a lamp at [[P]] = 60 W. After months, the strip's plug is warm to the touch.

## Physical estimation

The total [[P_tot]] is 120 + 25 + 150 + 80 + 60, giving 435 W. With [[V]] = 230 V, the resulting [[I_tot]] is 1.9 A. If [[I_max]] = 10 A, [[margen_uso]] is only 0.19: the load is very low. The cause of the heat is not overload but elevated [[R_contacto]] due to the low-quality strip. With [[I_tot]] = 1.9 A and perceptible heat, [[R_contacto]] can be estimated at several ohms, implying [[P_perdida]] of several watts in a small-sized contact.

## Interpretation

The thermal risk in this case does not come from overload ([[margen_uso]] very low) but from poor quality of the metallic contact (elevated [[R_contacto]]). The solution is to replace the strip with a certified-quality one with [[R_contacto]] guaranteed to standard, not to redistribute the load. This case illustrates that socket safety analysis requires evaluating both [[margen_uso]] and contact condition: both pathways can generate risk independently.
"""

(base / 'ejemplos.en.md').write_text(ejemplos_en, encoding='utf-8')
print(f'ejemplos.en.md: {len(ejemplos_en.split())} words')

# ── 10. Fix aplicaciones.md — add "# Aplicación N:" headings ──────────────────
# The validator expects "# Aplicación 1:" headings
aplicaciones = """\
# Aplicaciones de enchufes y tomas

# Aplicación 1: dimensionamiento de regletas en zonas de trabajo

En puestos de trabajo con múltiples equipos informáticos, la evaluación de [[P_tot]] e [[I_tot]] determina la capacidad mínima de la regleta necesaria. El protocolo consiste en listar todos los equipos conectados, sumar sus potencias nominales para obtener [[P_tot]], calcular [[I_tot]] y verificar que [[margen_uso]] no supera 0,8 en uso continuo.

Para un puesto típico con ordenador de 400 W, dos monitores de 80 W, impresora de 150 W y cargadores de 30 W: [[P_tot]] = 740 W, [[I_tot]] = 3,2 A, [[margen_uso]] = 0,20 con regleta de [[I_max]] = 16 A. Margen amplio. Si se añade un calefactor eléctrico de 2 000 W, [[P_tot]] sube a 2 740 W, [[I_tot]] a 11,9 A y [[margen_uso]] a 0,74: zona de vigilancia. Añadir un segundo calefactor de 2 000 W eleva [[P_tot]] a 4 740 W, [[I_tot]] a 20,6 A y [[margen_uso]] a 1,28: sobrecarga activa que requiere usar una toma dedicada para el calefactor.

**Variable dominante:** [[margen_uso]] como indicador de uso de la capacidad nominal; [[I_max]] como parámetro de diseño de la regleta.

**Límite de validez:** Aplicable para cargas con factor de potencia > 0,8. Para equipos con fuentes conmutadas de baja calidad, la corriente pico puede exceder la eficaz en factor 2 o más.

# Aplicación 2: diagnóstico de calentamiento en enchufes de instalaciones antiguas

En instalaciones de más de 30 años con cableado de aluminio o contactos de latón oxidados, [[R_contacto]] puede ser significativamente mayor que en instalaciones nuevas. El calentamiento visible u olfativo de un enchufe con carga moderada indica [[R_contacto]] elevada, no necesariamente sobrecarga de corriente.

El diagnóstico requiere medir [[I_tot]] con un amperímetro de pinza y estimar [[P_perdida]] = [[I_tot]]² × [[R_contacto]]. Si [[I_tot]] es baja pero hay calor perceptible, [[R_contacto]] es el factor dominante. La solución es la sustitución del mecanismo de toma, no la redistribución de carga. Una [[P_perdida]] de 5 W en un contacto de tamaño de una moneda puede elevar la temperatura superficial del plástico por encima del punto de ablandamiento del PVC (70-80 °C) en entornos poco ventilados.

**Variable dominante:** [[R_contacto]] como magnitud de diagnóstico; [[P_perdida]] como indicador de riesgo térmico local.

**Límite de validez:** El modelo de Joule localizado es válido para régimen permanente. En instalaciones con corrientes armónicas elevadas, la corriente eficaz puede no reflejar el calentamiento pico.

# Aplicación 3: verificación de regletas en cocinas y zonas húmedas

Las cocinas tienen restricciones especiales para tomas: deben instalarse fuera de zonas de salpicadura. En cocinas, la suma de potencias puede ser muy elevada. Un horno de 2 000 W, un microondas de 1 200 W, una cafetera de 1 200 W y una tostadora de 900 W dan [[P_tot]] = 5 300 W. Un circuito dedicado para cocina de 20 A con [[P_max]] = 4 600 W puede parecer suficiente para el circuito, pero si todos los equipos anteriores se conectan en la misma toma individual de [[I_max]] = 16 A ([[P_max]] = 3 680 W), el [[margen_uso]] de esa toma sería 5 300 / 3 680 = 1,44: sobrecarga severa aunque el circuito global no dispare el magnetotérmico.

**Variable dominante:** [[P_max]] de la toma individual como límite de diseño; [[P_tot]] como variable de evaluación.

**Límite de validez:** En cocinas se asume que no todos los equipos de alta potencia están encendidos simultáneamente. El peor caso (todos encendidos) es la estimación de seguridad; en uso real el factor de simultaneidad reduce [[P_tot]] efectivo.

# Aplicación 4: selección de alargadores y adaptadores de viaje

Los alargadores tienen [[I_max]] propio que puede ser menor que el de la toma de origen. Un alargador de 6 A en una toma de 16 A no hereda la capacidad de la toma: el límite operativo es el del elemento más restrictivo en la cadena. La evaluación de [[margen_uso]] debe hacerse con el [[I_max]] del alargador, no de la toma.

Los adaptadores de viaje introducen [[R_contacto]] adicional que puede ser significativa en adaptadores de baja calidad. Con [[I_tot]] = 10 A y [[R_contacto]] = 0,5 Ω en el adaptador, [[P_perdida]] = 50 W: condición de riesgo aunque la carga esté dentro del [[I_max]] declarado.

**Variable dominante:** [[I_max]] del elemento más restrictivo en la cadena; [[R_contacto]] del adaptador como factor de riesgo adicional.

**Límite de validez:** El modelo asume que el único punto de resistencia parásita significativa es el adaptador o el contacto de la toma. En alargadores largos (> 10 m), la resistencia del cable también contribuye a la pérdida total.

# Aplicación 5: educación en seguridad eléctrica doméstica

El análisis de [[margen_uso]] y [[P_perdida]] proporciona un marco cuantitativo para la educación en seguridad eléctrica doméstica. Permite reemplazar la regla empírica "no conectes muchas cosas en la misma regleta" por un criterio preciso: calcular [[P_tot]], obtener [[I_tot]] = [[P_tot]] / [[V]] y verificar que [[margen_uso]] = [[I_tot]] / [[I_max]] no supera 0,8 en uso continuo.

Este marco es aplicable por cualquier usuario sin instrumentación: solo requiere conocer las potencias nominales de los equipos (impresas en la etiqueta del fabricante), la tensión de red (230 V en Europa) y el [[I_max]] de la toma o regleta (etiqueta o norma nacional). Las cinco fórmulas del leaf forman una cadena completa desde el dato observable ([[P]] de la etiqueta) hasta el indicador de riesgo ([[margen_uso]] y [[P_perdida]]).

**Variable dominante:** [[margen_uso]] como indicador preventivo principal; [[P_tot]] como suma de entrada.

**Límite de validez:** Aplicable a instalaciones monofásicas residenciales con cargas de factor de potencia > 0,8. Para instalaciones industriales, trifásicas o con cargas muy no lineales, se requiere un análisis más detallado de la corriente real.
"""

(base / 'aplicaciones.md').write_text(aplicaciones, encoding='utf-8')
print(f'aplicaciones.md: {len(aplicaciones.split())} words')

# ── 11. aplicaciones.en.md ─────────────────────────────────────────────────────
aplicaciones_en = """\
# Applications of plugs and sockets

# Application 1: sizing power strips in workspaces

In workspaces with multiple computing devices, evaluating [[P_tot]] and [[I_tot]] determines the minimum required strip capacity. The protocol is to list all connected devices, sum their nominal powers to obtain [[P_tot]], calculate [[I_tot]], and verify that [[margen_uso]] does not exceed 0.8 in continuous use.

For a typical workstation with a 400 W computer, two 80 W monitors, a 150 W printer, and 30 W chargers: [[P_tot]] = 740 W, [[I_tot]] = 3.2 A, [[margen_uso]] = 0.20 with a 16 A ([[I_max]]) strip. Wide margin. Adding a 2 000 W electric heater raises [[P_tot]] to 2 740 W, [[I_tot]] to 11.9 A and [[margen_uso]] to 0.74: monitoring zone. Adding a second 2 000 W heater raises [[P_tot]] to 4 740 W, [[I_tot]] to 20.6 A and [[margen_uso]] to 1.28: active overload requiring a dedicated socket for the heater.

**Dominant variable:** [[margen_uso]] as indicator of nominal capacity usage; [[I_max]] as strip design parameter.

**Validity limit:** Applicable for loads with power factor > 0.8. For devices with low-quality switched-mode supplies, peak current may exceed RMS by a factor of 2 or more.

# Application 2: diagnosing heating in sockets of old installations

In installations over 30 years old with aluminium wiring or oxidised brass contacts, [[R_contacto]] can be significantly higher than in new installations. Visible or olfactory heating of a socket under moderate load indicates elevated [[R_contacto]], not necessarily current overload.

Diagnosis requires measuring [[I_tot]] with a clamp ammeter and estimating [[P_perdida]] = [[I_tot]]² × [[R_contacto]]. If [[I_tot]] is low but heat is perceptible, [[R_contacto]] is the dominant factor. The solution is to replace the socket mechanism, not to redistribute load. A [[P_perdida]] of 5 W in a coin-sized contact can raise the plastic surface temperature above the PVC softening point (70-80 °C) in poorly ventilated environments.

**Dominant variable:** [[R_contacto]] as the diagnostic quantity; [[P_perdida]] as local thermal risk indicator.

**Validity limit:** The localised Joule model is valid for steady state. In installations with high harmonic currents, RMS current may not reflect peak heating.

# Application 3: verifying strips in kitchens and wet areas

Kitchens have special socket restrictions: they must be installed outside splash zones. In kitchens the sum of powers can be very high. A 2 000 W oven, 1 200 W microwave, 1 200 W coffee machine, and 900 W toaster give [[P_tot]] = 5 300 W. A dedicated kitchen circuit of 20 A with [[P_max]] = 4 600 W may seem sufficient for the circuit, but if all the above devices are connected to the same individual socket with [[I_max]] = 16 A ([[P_max]] = 3 680 W), [[margen_uso]] for that socket would be 5 300 / 3 680 = 1.44: severe overload even if the overall circuit does not trip the MCB.

**Dominant variable:** [[P_max]] of the individual socket as design limit; [[P_tot]] as evaluation variable.

**Validity limit:** In kitchens it is assumed not all high-power devices are powered simultaneously. The worst case (all on) is the safety estimate; in actual use the simultaneity factor reduces effective [[P_tot]].

# Application 4: selecting extension leads and travel adapters

Extension leads have their own [[I_max]] which may be lower than the source socket. A 6 A extension lead in a 16 A socket does not inherit the socket capacity: the operating limit is that of the most restrictive element in the chain. The [[margen_uso]] evaluation must use the [[I_max]] of the extension lead, not the socket.

Travel adapters introduce additional [[R_contacto]] which can be significant in low-quality adapters. With [[I_tot]] = 10 A and [[R_contacto]] = 0.5 Ω in the adapter, [[P_perdida]] = 50 W: risk condition even if the load is within the declared [[I_max]].

**Dominant variable:** [[I_max]] of the most restrictive element in the chain; [[R_contacto]] of the adapter as additional risk factor.

**Validity limit:** The model assumes the only significant parasitic resistance point is the adapter or socket contact. In long extension leads (> 10 m), cable resistance also contributes to the total loss.

# Application 5: domestic electrical safety education

The [[margen_uso]] and [[P_perdida]] analysis provides a quantitative framework for domestic electrical safety education. It allows replacing the empirical rule "don't plug too many things into the same strip" with a precise criterion: calculate [[P_tot]], obtain [[I_tot]] = [[P_tot]] / [[V]], and verify that [[margen_uso]] = [[I_tot]] / [[I_max]] does not exceed 0.8 in continuous use.

This framework is applicable by any user without instrumentation: it only requires knowing the nominal powers of devices (printed on the manufacturer label), the mains voltage (230 V in Europe), and [[I_max]] of the socket or strip (label or national standard). The five formulas of the leaf form a complete chain from the observable datum ([[P]] from the label) to the risk indicator ([[margen_uso]] and [[P_perdida]]).

**Dominant variable:** [[margen_uso]] as the primary preventive indicator; [[P_tot]] as input sum.

**Validity limit:** Applicable to single-phase residential installations with loads of power factor > 0.8. For industrial, three-phase, or highly non-linear loads, a more detailed analysis of the actual current is required.
"""

(base / 'aplicaciones.en.md').write_text(aplicaciones_en, encoding='utf-8')
print(f'aplicaciones.en.md: {len(aplicaciones_en.split())} words')

# ── 12. Fix errores — remove undefined magnitude references ────────────────────
for fname in ['errores.md', 'errores.en.md']:
    txt = (base / fname).read_text(encoding='utf-8')
    txt = txt.replace('[[P_max_equipo]]', 'la potencia del equipo más potente')
    txt = txt.replace('[[P_max_device]]', 'the most powerful device power')
    (base / fname).write_text(txt, encoding='utf-8')
    print(f'{fname}: fixed P_max_equipo/P_max_device references')

print('\nDone part 4.')
