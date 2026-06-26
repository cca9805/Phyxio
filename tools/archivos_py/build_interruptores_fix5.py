"""Fix5: render math in errores/modelos, formula id in text in ejemplos, R_on coverage, cognitive_load."""
import re
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/interruptores')

# ── 1. errores.md — fix inline equation "P = [[I]]^2 x R" ───────────────────
errores = (base / 'errores.md').read_text(encoding='utf-8')
errores = errores.replace(
    'Aplicar siempre P = [[I]]^2 x R para la potencia disipada en una resistencia. Verificar dimensiones: A^2 x ohm = W, no A x ohm = V.',
    'Aplicar siempre la ley de Joule: la potencia disipada en [[R_on]] crece con el cuadrado de [[I]]. Verificar dimensiones: amperios al cuadrado multiplicado por ohmios da vatios, no voltios.'
)
(base / 'errores.md').write_text(errores, encoding='utf-8')
print('errores.md: render math fixed')

# ── 2. errores.en.md — same fix ───────────────────────────────────────────────
errores_en = (base / 'errores.en.md').read_text(encoding='utf-8')
errores_en = errores_en.replace(
    'Always use P = [[I]]^2 x R. Check dimensions: A squared times ohm equals watts.',
    'Always apply Joule\'s law: power dissipated in [[R_on]] grows with the square of [[I]]. Check dimensions: amperes squared times ohms gives watts, not volts.'
)
(base / 'errores.en.md').write_text(errores_en, encoding='utf-8')
print('errores.en.md: render math fixed')

# ── 3. modelos.md — fix remaining inline equation ─────────────────────────────
modelos = (base / 'modelos.md').read_text(encoding='utf-8')
# Find and fix I_pico = k · I_nominal sentence
modelos = re.sub(
    r'I_pico\s*=\s*k\s*[·x×]\s*I_nominal[^.]*\.',
    'la corriente de arranque es varios multiplos de [[I]] nominal durante un breve transitorio.',
    modelos
)
modelos = re.sub(
    r'La energ[ií]a del transitorio[^.]*\.',
    'La energia del transitorio depende de esa corriente de arranque, de [[R_on]] y de la duracion del transitorio.',
    modelos
)
(base / 'modelos.md').write_text(modelos, encoding='utf-8')
print('modelos.md: inline eq fixed')

# ── 4. ejemplos.md — fix "id de formula visible como texto" ──────────────────
# The validator sees "corriente" as a formula id appearing as prose because sentences like
# "la formula de corriente", "corriente resulta", "la corriente de maniobra se obtiene aplicando:"
# appear before/after {{f:corriente}}. The fix: don't use the word "corriente" as a formula label
# in prose near {{f:corriente}} references.
ejemplos = (base / 'ejemplos.md').read_text(encoding='utf-8')

# Fix "## Modelo fisico" section — "corriente" appears as part of explanation
ejemplos = ejemplos.replace(
    'El interruptor real se modela como una resistencia [[R_on]] en serie con la carga. Cuando conduce la corriente [[I]], disipa una potencia [[P_on]] proporcional al cuadrado de [[I]] y a [[R_on]]. Durante el tiempo [[t_on]] de conduccion, la energia total disipada es [[E_on]]. Las tres formulas del leaf describen completamente este comportamiento para carga resistiva en regimen permanente.',
    'El interruptor real se modela como una resistencia [[R_on]] en serie con la carga. Al conducir [[I]], disipa [[P_on]] proporcional al cuadrado de [[I]] y a [[R_on]]. Durante [[t_on]], la energia total disipada es [[E_on]]. Las tres formulas del leaf describen completamente este comportamiento para carga resistiva en regimen permanente.'
)
# Fix "## Resolucion simbolica" intro text
ejemplos = ejemplos.replace(
    'La corriente de maniobra se obtiene aplicando:',
    '[[I]] del interruptor se obtiene aplicando:'
)
ejemplos = ejemplos.replace(
    'La perdida resistiva en el contacto se obtiene aplicando:',
    '[[P_on]] en el contacto se obtiene aplicando:'
)
ejemplos = ejemplos.replace(
    'La energia disipada durante el periodo de conduccion se obtiene aplicando:',
    '[[E_on]] durante la conduccion se obtiene aplicando:'
)
# Fix "## Sustitucion numerica" 
ejemplos = ejemplos.replace(
    'Aplicando las tres formulas del leaf con los datos del enunciado se obtiene: la corriente [[I]] es de 8,70 A, la perdida [[P_on]] es de 6,05 W, y la energia diaria [[E_on]] es de 130680 J equivalente a 36,3 Wh por dia de conduccion.',
    'Aplicando las tres formulas del leaf con los datos del enunciado: [[I]] = 8,70 A, [[P_on]] = 6,05 W, [[E_on]] = 130680 J = 36,3 Wh por dia.'
)
# Fix second example
ejemplos = ejemplos.replace(
    'Aplicando la formula de corriente del leaf con [[P]] = 800 W y [[V]] = 230 V se obtiene [[I]] = 3,48 A. Con [[R_on]] = 0,05 ohm, la formula de perdida da [[P_on]] = 0,61 W',
    'Aplicando las formulas del leaf: [[I]] = 3,48 A con [[P]] = 800 W y [[V]] = 230 V. Con [[R_on]] = 0,05 ohm, [[P_on]] = 0,61 W'
)
ejemplos = ejemplos.replace(
    'la formula de energia da [[E_on]] diaria de aproximadamente 3 Wh',
    '[[E_on]] diaria es de aproximadamente 3 Wh'
)
# Fix interpretation section mentioning "corriente"
ejemplos = ejemplos.replace(
    'El modelo estatico predice [[P_on]] baja',
    'El modelo estatico obtiene [[P_on]] baja'
)
(base / 'ejemplos.md').write_text(ejemplos, encoding='utf-8')
print('ejemplos.md: formula id text fixed')

# ── 5. ejemplos.en.md — same fixes ───────────────────────────────────────────
ejemplos_en = (base / 'ejemplos.en.md').read_text(encoding='utf-8')
ejemplos_en = ejemplos_en.replace(
    'The real switch is modelled as a resistance [[R_on]] in series with the load. When conducting current [[I]], it dissipates power [[P_on]] proportional to the square of [[I]] and to [[R_on]]. During conduction time [[t_on]], the total energy dissipated is [[E_on]]. The three leaf formulas completely describe this behaviour for resistive load in steady state.',
    'The real switch is modelled as a resistance [[R_on]] in series with the load. When conducting [[I]], it dissipates [[P_on]] proportional to the square of [[I]] and to [[R_on]]. During [[t_on]], total dissipated energy is [[E_on]]. The three leaf formulas completely describe this behaviour for resistive load in steady state.'
)
ejemplos_en = ejemplos_en.replace(
    'The switching current is obtained by applying:',
    '[[I]] of the switch is obtained by applying:'
)
ejemplos_en = ejemplos_en.replace(
    'The resistive loss at the contact is obtained by applying:',
    '[[P_on]] at the contact is obtained by applying:'
)
ejemplos_en = ejemplos_en.replace(
    'The energy dissipated during the conduction period is obtained by applying:',
    '[[E_on]] during the conduction period is obtained by applying:'
)
ejemplos_en = ejemplos_en.replace(
    'Applying the three leaf formulas with the given data yields: current [[I]] of 8.70 A, loss [[P_on]] of 6.05 W, and daily energy [[E_on]] of 130680 J equivalent to 36.3 Wh per day of conduction.',
    'Applying the three leaf formulas: [[I]] = 8.70 A, [[P_on]] = 6.05 W, [[E_on]] = 130680 J = 36.3 Wh per day.'
)
ejemplos_en = ejemplos_en.replace(
    'Applying the current formula with [[P]] = 800 W and [[V]] = 230 V gives [[I]] = 3.48 A. With [[R_on]] = 0.05 ohm, the loss formula gives [[P_on]] = 0.61 W',
    'Applying the leaf formulas: [[I]] = 3.48 A with [[P]] = 800 W and [[V]] = 230 V. With [[R_on]] = 0.05 ohm, [[P_on]] = 0.61 W'
)
ejemplos_en = ejemplos_en.replace(
    'the energy formula gives daily [[E_on]] of approximately 3 Wh',
    'daily [[E_on]] is approximately 3 Wh'
)
(base / 'ejemplos.en.md').write_text(ejemplos_en, encoding='utf-8')
print('ejemplos.en.md: formula id text fixed')

# ── 6. modelos.en.md — ensure R_on is tagged as [[R_on]] everywhere ──────────
modelos_en = (base / 'modelos.en.md').read_text(encoding='utf-8')
# Check if R_on is being used as bare text anywhere
bare_ron = re.findall(r'(?<!\[)(?<!\[R_on)R_on(?!\])', modelos_en)
print(f'modelos.en.md bare R_on occurrences: {len(bare_ron)}')
# Replace bare R_on (not already wrapped) with [[R_on]]
modelos_en2 = re.sub(r'(?<!\[)R_on(?!\])', '[[R_on]]', modelos_en)
if modelos_en2 != modelos_en:
    (base / 'modelos.en.md').write_text(modelos_en2, encoding='utf-8')
    print('modelos.en.md: R_on wrapped')

# ── 7. teoria.md — check and fix cognitive_load (esencial must not have formulas) ──
teoria = (base / 'teoria.md').read_text(encoding='utf-8')
formal_marker = '## 🔵 Nivel formal'
esencial_end = teoria.find(formal_marker)
if esencial_end > 0:
    esencial = teoria[:esencial_end]
    rest = teoria[esencial_end:]
    formula_refs = re.findall(r'\{\{f:\w+\}\}', esencial)
    print(f'teoria.md esencial formula refs: {formula_refs}')
    if formula_refs:
        for ref in set(formula_refs):
            esencial = re.sub(r'\n*\{\{f:\w+\}\}\n*', '\n\n', esencial)
        (base / 'teoria.md').write_text(esencial + rest, encoding='utf-8')
        print('teoria.md: esencial formulas removed')
    else:
        print('teoria.md: no formulas in esencial — checking word distribution')
        # Check word counts per level
        esencial_words = len(re.findall(r'\b\w+\b', esencial))
        formal_start = rest.find('## 🟠 Nivel estructural')
        if formal_start > 0:
            formal_part = rest[:formal_start]
        else:
            formal_part = rest
        formal_words = len(re.findall(r'\b\w+\b', formal_part))
        print(f'  esencial words: {esencial_words}, formal words: {formal_words}')

# ── 8. Verify final word counts ───────────────────────────────────────────────
for fname in ['ejemplos.md', 'ejemplos.en.md', 'aplicaciones.md', 'aplicaciones.en.md']:
    p = base / fname
    txt = p.read_text(encoding='utf-8')
    w = len(re.findall(r'\b\w+\b', txt))
    print(f'{fname}: {w} words')

print('\nFix5 done.')
