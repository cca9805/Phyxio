"""Genera interpretacion.yaml y amplía archivos markdown cortos."""
import yaml
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas')

# ── interpretacion.yaml ────────────────────────────────────────────────────────
interp = """\
version: 2
id: interpretacion-enchufes-y-tomas
leaf_id: enchufes-y-tomas
nombre:
  es: Interpretacion de Enchufes y tomas
  en: Interpretation of Plugs and Sockets
scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: electricidad-domestica
  parent_id: electricidad-domestica
  ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas
dependencies:
  formulas:
  - corriente_individual
  - corriente_total
  - potencia_max
  - perdida_contacto
  - ratio_uso
  magnitudes:
  - P
  - P_tot
  - V
  - I
  - I_tot
  - I_max
  - P_max
  - R_contacto
  - P_perdida
  - margen_uso
output_contract:
  sections:
  - summary
  - physical_reading
  - coherence
  - model_validity
  - graph_reading
  - likely_errors
  - next_step
result_blocks:
  summary:
    title:
      es: Resumen fisico
      en: Physical summary
  physical_reading:
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    title:
      es: Lectura del grafico
      en: Graph reading
  likely_errors:
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    title:
      es: Siguiente paso
      en: Next step
targets:
  margen_uso:
    summary_rules:
    - id: mu_overload
      when: 'margen_uso >= 1'
      status: error
      text:
        es: 'margen_uso >= 1: la toma esta en sobrecarga activa. I_tot supera I_max. Desconectar equipos inmediatamente.'
        en: 'margen_uso >= 1: socket in active overload. I_tot exceeds I_max. Disconnect devices immediately.'
    - id: mu_warning
      when: 'margen_uso >= 0.8 and margen_uso < 1'
      status: warning
      text:
        es: 'margen_uso en zona de vigilancia (80-100% del nominal). No conectar mas equipos a esta toma en uso continuado.'
        en: 'margen_uso in monitoring zone (80-100% of rating). Do not connect more devices in continuous use.'
    - id: mu_ok
      when: 'margen_uso < 0.8'
      status: ok
      text:
        es: 'margen_uso < 0.8: la toma opera dentro de su rango seguro. Margen disponible para carga adicional.'
        en: 'margen_uso < 0.8: socket operates within safe range. Margin available for additional load.'
    coherence_rules:
    - id: mu_coherence
      when: 'true'
      status: ok
      text:
        es: margen_uso debe ser el cociente de I_tot entre I_max. Verificar que ambas magnitudes esten en amperios.
        en: margen_uso must be the ratio of I_tot to I_max. Verify both quantities are in amperes.
    physical_reading_rules:
    - id: mu_physical
      when: 'margen_uso >= 0.8'
      status: warning
      text:
        es: Un margen_uso elevado indica que los contactos de la toma estan sometidos a una corriente proxima o superior al limite de diseno. El calentamiento de los contactos aumenta con el cuadrado de I_tot.
        en: A high margen_uso indicates socket contacts are subject to current close to or above the design limit. Contact heating increases with the square of I_tot.
    model_validity_rules:
    - id: mu_validity
      when: 'true'
      status: ok
      text:
        es: El modelo de margen_uso es valido para regimen permanente con cargas resistivas. Para transitorios de arranque, el margen_uso instantaneo puede ser mayor que el calculado con potencia nominal.
        en: The margen_uso model is valid for steady state with resistive loads. For startup transients, instantaneous margen_uso may be higher than calculated from nominal power.
    graph_rules:
    - id: mu_graph
      when: 'true'
      status: info
      text:
        es: En el grafico, margen_uso se representa en el eje Y con una linea de referencia en 1 (limite) y otra en 0.8 (umbral de vigilancia). La distancia entre I_tot y la linea I_max es el margen disponible.
        en: On the graph, margen_uso is shown on the Y axis with a reference line at 1 (limit) and another at 0.8 (monitoring threshold). The distance between I_tot and the I_max line is the available margin.
    likely_errors:
    - id: mu_error
      when: 'margen_uso >= 1'
      status: error
      text:
        es: Un margen_uso mayor que 1 indica sobrecarga. El error mas comun es creer que el magnetotermico del circuito protegera la toma; en general, el magnetotermico tiene un calibre igual o mayor que I_max de la toma y puede no actuar antes de que el contacto se dande.
        en: A margen_uso greater than 1 indicates overload. The most common error is believing the circuit MCB will protect the socket; in general, the MCB has a rating equal to or greater than I_max of the socket and may not trip before the contact is damaged.
    next_step_rules:
    - id: mu_next
      when: 'margen_uso >= 0.8'
      status: warning
      text:
        es: Con margen_uso >= 0.8, calcular P_perdida para estimar el riesgo termico local. Considerar redistribuir la carga a otra toma o circuito.
        en: With margen_uso >= 0.8, calculate P_perdida to estimate local thermal risk. Consider redistributing load to another socket or circuit.
  I_tot:
    summary_rules:
    - id: Itot_summary
      when: 'true'
      status: info
      text:
        es: I_tot es la corriente total que circula por los contactos de la toma. Compararla con I_max para evaluar el margen de uso.
        en: I_tot is the total current flowing through the socket contacts. Compare with I_max to evaluate the usage margin.
    coherence_rules:
    - id: Itot_coherence
      when: 'true'
      status: ok
      text:
        es: I_tot debe ser la suma de las corrientes individuales de todos los equipos encendidos simultaneamente, o equivalentemente P_tot/V.
        en: I_tot must be the sum of individual currents of all simultaneously powered devices, or equivalently P_tot/V.
    physical_reading_rules:
    - id: Itot_physical
      when: 'I_tot > I_max'
      status: error
      text:
        es: I_tot supera I_max. La toma esta en sobrecarga. Los contactos estan sometidos a una corriente por encima de su limite de diseno.
        en: I_tot exceeds I_max. The socket is in overload. Contacts are subject to current above their design limit.
    model_validity_rules:
    - id: Itot_validity
      when: 'true'
      status: ok
      text:
        es: I_tot calculada como P_tot/V asume factor de potencia unitario. Para cargas con factor de potencia bajo, I_tot real puede ser mayor.
        en: I_tot calculated as P_tot/V assumes unity power factor. For loads with low power factor, actual I_tot may be higher.
    graph_rules:
    - id: Itot_graph
      when: 'true'
      status: info
      text:
        es: I_tot se muestra como barra o curva en el grafico de corrientes. La linea horizontal en I_max es el umbral de referencia.
        en: I_tot is shown as a bar or curve in the current graph. The horizontal line at I_max is the reference threshold.
    likely_errors:
    - id: Itot_error
      when: 'true'
      status: warning
      text:
        es: Error frecuente: usar la corriente del equipo mas potente como I_tot en lugar de sumar todas las corrientes simultaneas.
        en: Frequent error: using the most powerful device current as I_tot instead of summing all simultaneous currents.
    next_step_rules:
    - id: Itot_next
      when: 'true'
      status: info
      text:
        es: Con I_tot conocida, calcular margen_uso = I_tot/I_max y P_perdida = I_tot^2 * R_contacto para completar el diagnostico.
        en: With I_tot known, calculate margen_uso = I_tot/I_max and P_perdida = I_tot^2 * R_contacto to complete the diagnosis.
  P_perdida:
    summary_rules:
    - id: Pp_high
      when: 'P_perdida > 5'
      status: error
      text:
        es: 'P_perdida > 5 W: disipacion de contacto elevada. Riesgo termico local significativo. Inspeccionar y sustituir la toma si es necesario.'
        en: 'P_perdida > 5 W: high contact dissipation. Significant local thermal risk. Inspect and replace socket if necessary.'
    - id: Pp_medium
      when: 'P_perdida >= 1 and P_perdida <= 5'
      status: warning
      text:
        es: 'P_perdida entre 1 y 5 W: disipacion moderada. Vigilar la temperatura del contacto, especialmente en uso continuado.'
        en: 'P_perdida between 1 and 5 W: moderate dissipation. Monitor contact temperature, especially in continuous use.'
    - id: Pp_ok
      when: 'P_perdida < 1'
      status: ok
      text:
        es: 'P_perdida < 1 W: disipacion de contacto baja. Sin riesgo termico apreciable en condiciones normales.'
        en: 'P_perdida < 1 W: low contact dissipation. No appreciable thermal risk under normal conditions.'
    coherence_rules:
    - id: Pp_coherence
      when: 'true'
      status: ok
      text:
        es: 'P_perdida = I_tot^2 * R_contacto. Verificar que I_tot esta en amperios y R_contacto en ohmios para obtener P_perdida en vatios.'
        en: 'P_perdida = I_tot^2 * R_contacto. Verify I_tot is in amperes and R_contacto in ohms to get P_perdida in watts.'
    physical_reading_rules:
    - id: Pp_physical
      when: 'true'
      status: info
      text:
        es: P_perdida crece con el cuadrado de I_tot. Duplicar la corriente cuadruplica la disipacion local. Este efecto hace que el riesgo termico sea especialmente sensible a la corriente.
        en: P_perdida grows with the square of I_tot. Doubling the current quadruples local dissipation. This effect makes thermal risk especially sensitive to current.
    model_validity_rules:
    - id: Pp_validity
      when: 'true'
      status: ok
      text:
        es: El modelo de Joule localizado es valido en regimen permanente. P_perdida estimada es el limite inferior; en condiciones de ventilacion reducida, la temperatura real puede ser mayor.
        en: The localised Joule model is valid in steady state. Estimated P_perdida is the lower bound; under reduced ventilation conditions, actual temperature may be higher.
    graph_rules:
    - id: Pp_graph
      when: 'true'
      status: info
      text:
        es: P_perdida se muestra como curva parabolica en funcion de I_tot. La forma parabolica ilustra visualmente por que duplicar la carga es mucho mas peligroso que sumar la misma carga dos veces.
        en: P_perdida is shown as a parabolic curve as a function of I_tot. The parabolic shape visually illustrates why doubling load is much more dangerous than adding the same load twice.
    likely_errors:
    - id: Pp_error
      when: 'true'
      status: warning
      text:
        es: Error frecuente: ignorar P_perdida porque R_contacto parece pequeña comparada con la resistencia de la carga. P_perdida puede ser significativa aunque R_contacto sea pequeña si I_tot es alta.
        en: Frequent error: ignoring P_perdida because R_contacto seems small compared to load resistance. P_perdida can be significant even if R_contacto is small when I_tot is high.
    next_step_rules:
    - id: Pp_next
      when: 'P_perdida >= 1'
      status: warning
      text:
        es: Con P_perdida >= 1 W, evaluar si el contacto presenta signos de degradacion (calor perceptible, decoloracion, olor). Si los hay, sustituir la toma.
        en: With P_perdida >= 1 W, evaluate whether the contact shows signs of degradation (perceptible heat, discolouration, smell). If so, replace the socket.
  P_max:
    summary_rules:
    - id: Pmax_summary
      when: 'true'
      status: info
      text:
        es: P_max es la potencia maxima que puede conectarse a la toma sin superar I_max en regimen permanente con carga resistiva.
        en: P_max is the maximum power connectable to the socket without exceeding I_max in steady state with resistive load.
    coherence_rules:
    - id: Pmax_coherence
      when: 'true'
      status: ok
      text:
        es: P_max = V * I_max. Con V = 230 V e I_max = 16 A, P_max = 3680 W. Con I_max = 10 A, P_max = 2300 W.
        en: P_max = V * I_max. With V = 230 V and I_max = 16 A, P_max = 3680 W. With I_max = 10 A, P_max = 2300 W.
    physical_reading_rules:
    - id: Pmax_physical
      when: 'P_tot >= P_max'
      status: error
      text:
        es: P_tot supera P_max. La carga conectada excede la capacidad nominal de la toma. Reducir P_tot.
        en: P_tot exceeds P_max. Connected load exceeds socket nominal capacity. Reduce P_tot.
    model_validity_rules:
    - id: Pmax_validity
      when: 'true'
      status: ok
      text:
        es: P_max es una estimacion de primer orden para cargas resistivas puras. Para cargas inductivas o con arranques elevados, la potencia admisible real puede ser menor.
        en: P_max is a first-order estimate for purely resistive loads. For inductive or high-inrush loads, actual admissible power may be lower.
    graph_rules:
    - id: Pmax_graph
      when: 'true'
      status: info
      text:
        es: P_max se muestra como linea de referencia horizontal en el grafico de potencia total. P_tot se compara con esa linea.
        en: P_max is shown as a horizontal reference line in the total power graph. P_tot is compared with that line.
    likely_errors:
    - id: Pmax_error
      when: 'true'
      status: warning
      text:
        es: No confundir P_max de la toma individual con la potencia maxima del circuito (determinada por el magnetotermico). Pueden ser valores distintos.
        en: Do not confuse P_max of the individual socket with the maximum circuit power (determined by the MCB). These may be different values.
    next_step_rules:
    - id: Pmax_next
      when: 'P_tot >= P_max * 0.8'
      status: warning
      text:
        es: Con P_tot >= 0.8 * P_max, calcular margen_uso para confirmar el nivel de uso de la toma y decidir si redistribuir carga.
        en: With P_tot >= 0.8 * P_max, calculate margen_uso to confirm socket usage level and decide whether to redistribute load.
"""

(base / 'interpretacion.yaml').write_text(interp, encoding='utf-8')
try:
    yaml.safe_load((base / 'interpretacion.yaml').read_text(encoding='utf-8'))
    print('interpretacion.yaml OK')
except yaml.YAMLError as e:
    print(f'interpretacion.yaml ERROR: {e}')

# ── Ampliar teoria.md ──────────────────────────────────────────────────────────
teoria_extra = """
## Preguntas reales del alumno

**¿Si la regleta tiene fusible propio, está protegida frente a sobrecarga?** El fusible de la regleta protege el circuito contra cortocircuito, pero no necesariamente contra la degradación térmica lenta por sobrecarga moderada. Un fusible de 16 A puede no actuar ante una sobrecarga del 10 % que, mantenida durante horas, degrada el contacto progresivamente.

**¿Una regleta de más amperes es siempre mejor?** Una regleta de 16 A es más segura que una de 10 A solo si el cableado y los contactos internos están dimensionados para 16 A. Una regleta de baja calidad etiquetada como 16 A puede tener contactos que no aguantan esa corriente. El sello de calidad y la norma de producto (EN 61058) son más relevantes que el valor de [[I_max]] declarado.

**¿Por qué los calefactores son el principal riesgo en regletas?** Porque tienen una [[P]] alta y constante durante horas. Un calefactor de 2 000 W consume [[I]] de 8,7 A de forma continua. Si hay otros equipos en la misma regleta, [[I_tot]] puede superar [[I_max]] rápidamente. Además, el calor del calefactor eleva la temperatura ambiente de la regleta, reduciendo su capacidad de disipación.
"""

teoria_path = base / 'teoria.md'
t = teoria_path.read_text(encoding='utf-8')
t = t.rstrip() + '\n' + teoria_extra.lstrip()
teoria_path.write_text(t, encoding='utf-8')
print(f'teoria.md: {len(t.split())} words')

# ── Ampliar teoria.en.md ───────────────────────────────────────────────────────
teoria_en_extra = """
## Real student questions

**If the strip has its own fuse, is it protected against overload?** The strip fuse protects the circuit against short circuit, but not necessarily against slow thermal degradation from moderate overload. A 16 A fuse may not act against a 10% overload that, sustained for hours, progressively degrades the contact.

**Is a higher-ampere strip always better?** A 16 A strip is safer than a 10 A one only if the internal wiring and contacts are dimensioned for 16 A. A low-quality strip labelled 16 A may have contacts that cannot handle that current. The quality mark and product standard (EN 61058) are more relevant than the declared [[I_max]] value.

**Why are heaters the main risk in power strips?** Because they have high and constant [[P]] for hours. A 2 000 W heater draws [[I]] of 8.7 A continuously. If other devices share the same strip, [[I_tot]] can quickly exceed [[I_max]]. Additionally, the heater heat raises the strip's ambient temperature, reducing its dissipation capacity.
"""

ten_path = base / 'teoria.en.md'
ten = ten_path.read_text(encoding='utf-8')
ten = ten.rstrip() + '\n' + teoria_en_extra.lstrip()
ten_path.write_text(ten, encoding='utf-8')
print(f'teoria.en.md: {len(ten.split())} words')

# ── Ampliar historia.en.md ─────────────────────────────────────────────────────
hist_en_extra = """
## Contemporary relevance

The physical analysis of [[margen_uso]] and [[P_perdida]] provides the quantitative basis for standards that previously relied on empirical rules. Modern socket testing standards (IEC 60884, EN 61058) specify maximum [[R_contacto]] in new condition and minimum durability under repeated plug-in cycles precisely because contact degradation is the dominant failure mode in domestic sockets.

The proliferation of fast chargers and USB-C power delivery devices (up to 140 W per port) in the 2020s has renewed interest in contact thermal analysis, as multiple high-power chargers connected simultaneously can approach [[P_max]] of a standard socket even without traditional high-power appliances.
"""

hen_path = base / 'historia.en.md'
hen = hen_path.read_text(encoding='utf-8')
hen = hen.rstrip() + '\n' + hist_en_extra.lstrip()
hen_path.write_text(hen, encoding='utf-8')
print(f'historia.en.md: {len(hen.split())} words')

# ── Ampliar modelos.en.md ──────────────────────────────────────────────────────
mod_en_extra = """
## Summary of model applicability

The three models described above cover the main diagnostic scenarios for domestic sockets:

1. **Contact resistance model** (Joule localised): use when there are thermal symptoms at a socket with load within [[I_max]]. The dominant variable is [[R_contacto]].
2. **Nominal current limit model** (usage ratio): use for preventive evaluation of sockets and strips before connecting new devices. The dominant variable is [[margen_uso]].
3. **Simultaneous load sum model**: use for calculating [[P_tot]] and [[I_tot]] from device labels. The key assumption is worst-case simultaneity.

These three models share the same set of magnitudes: [[P]], [[P_tot]], [[V]], [[I]], [[I_tot]], [[I_max]], [[P_max]], [[R_contacto]], [[P_perdida]], and [[margen_uso]]. Their formulas form a coherent calculation chain that goes from observed data (device powers) to diagnostic indicators (margen_uso, P_perdida).
"""

men_path = base / 'modelos.en.md'
men = men_path.read_text(encoding='utf-8')
men = men.rstrip() + '\n' + mod_en_extra.lstrip()
men_path.write_text(men, encoding='utf-8')
print(f'modelos.en.md: {len(men.split())} words')

# ── Ampliar ejemplos.en.md ─────────────────────────────────────────────────────
ej_en_extra = """
This case also highlights the difference between two independent risk pathways in socket safety: (1) the overload pathway, where [[I_tot]] exceeds [[I_max]] and the contact heats due to excessive current; and (2) the degraded contact pathway, where [[R_contacto]] is elevated and [[P_perdida]] is significant even with modest [[I_tot]]. A rigorous safety evaluation must check both pathways, not just [[margen_uso]]. The preventive replacement of low-quality strips and the periodic inspection of plug contacts in high-use areas are the practical actions derived from this two-pathway analysis.
"""

ejn_path = base / 'ejemplos.en.md'
ejn = ejn_path.read_text(encoding='utf-8')
ejn = ejn.rstrip() + '\n' + ej_en_extra.lstrip()
ejn_path.write_text(ejn, encoding='utf-8')
print(f'ejemplos.en.md: {len(ejn.split())} words')

# ── Ampliar aplicaciones.en.md ─────────────────────────────────────────────────
aplen_path = base / 'aplicaciones.en.md'
aplen = aplen_path.read_text(encoding='utf-8')
aplen_extra = """

The five applications described in this leaf span the full range of domestic socket safety scenarios: from proactive sizing of workspace strips (Application 1) to reactive diagnosis of heating in ageing installations (Application 2), special-context verification (Application 3), component selection in the supply chain (Application 4), and user-level safety education (Application 5). Together they demonstrate that the same set of five formulas and ten magnitudes is sufficient to address the complete range of domestic socket safety questions at the level of residential electrical engineering.
"""
aplen = aplen.rstrip() + '\n' + aplen_extra.lstrip()
aplen_path.write_text(aplen, encoding='utf-8')
print(f'aplicaciones.en.md: {len(aplen.split())} words')

print('\nDone part 3.')
