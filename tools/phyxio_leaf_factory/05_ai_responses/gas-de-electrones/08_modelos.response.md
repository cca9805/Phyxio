# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: gas-de-electrones
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Gas de electrones
## Modelo ideal
El modelo ideal trata los electrones de conducción como un gas cuántico libre, tridimensional, homogéneo y en equilibrio. La variable que organiza todo es [[densidad_electronica]], obtenida a partir de [[numero_electrones]] y [[volumen]]. Al aumentar [[densidad_electronica]], la exclusión de Pauli obliga a ocupar estados de momento más alto, por lo que crecen [[energia_fermi]], [[temperatura_fermi]] y [[velocidad_fermi]]. La ocupación de un estado particular se describe con [[ocupacion_estado]], usando [[energia_estado]], [[potencial_quimico]] y [[temperatura_absoluta]].

## Hipótesis
- Electrones libres: si el potencial de red domina, la estructura de bandas sustituye al gas libre.
- Sistema tridimensional: si el confinamiento es 2D o 1D, cambia el conteo de estados y la dependencia con [[densidad_electronica]].
- Régimen no relativista: si [[velocidad_fermi]] se acerca a la velocidad de la luz, la fórmula de energía cinética deja de servir.
- Equilibrio térmico: si no hay [[temperatura_absoluta]] y [[potencial_quimico]] bien definidos, {{f:ocupacion_fermi_dirac_electrones}} no describe una distribución estática.
- Masa conocida: usar [[masa_electron]] como masa libre es válido solo si no se requiere masa efectiva.

## Dominio de validez cuantitativo
El modelo 3D libre es razonable para [[densidad_electronica]] de orden 10²⁶ a 10²⁹ m⁻³ en metales simples y plasmas densos no relativistas. Debe cumplirse [[temperatura_absoluta]] menor o comparable, pero normalmente muy inferior, a [[temperatura_fermi]] para hablar de gas degenerado. También se exige [[energia_fermi]] positiva y de escala eV, no MeV, y [[velocidad_fermi]] mucho menor que 3·10⁸ m/s. Para ocupaciones puntuales, [[energia_reducida]] entre -10 y 10 describe la zona activa alrededor de [[potencial_quimico]]; fuera de ese intervalo, [[ocupacion_estado]] queda prácticamente saturada o vacía.

## Señales de fallo del modelo
El modelo falla si la curva de [[energia_fermi]] frente a [[densidad_electronica]] no es creciente, si se obtiene [[energia_fermi]] negativa, si la [[temperatura_fermi]] sale menor que una temperatura ambiente típica en un metal denso, o si se mezclan cm⁻³ y m⁻³. También falla cuando aparecen brechas de banda, masas efectivas, superconductividad, interacción fuerte, desorden intenso o confinamiento nanométrico.

## Modelo extendido o alternativo
En sólidos reales se usa el modelo de bandas con masa efectiva en lugar de [[masa_electron]] libre. En semiconductores se separan electrones y huecos, y el [[potencial_quimico]] depende de dopaje y temperatura. En sistemas 2D se cambia la densidad volumétrica por densidad superficial. En materia compacta o plasmas extremos, puede requerirse un gas de electrones relativista.

## Comparación operativa
| Modelo | Cuándo usarlo | Magnitud dominante | Señal de alerta |
|---|---|---|---|
| Gas libre 3D | Metal simple, estimación rápida | [[densidad_electronica]] | Unidades de densidad dudosas |
| Fermi-Dirac puntual | Ocupación de un estado | [[ocupacion_estado]] | Falta [[potencial_quimico]] |
| Bandas electrónicas | Sólidos reales detallados | [[energia_estado]] | Hay brecha o masa efectiva |
| Gas relativista | Densidades extremas | [[velocidad_fermi]] | [[velocidad_fermi]] cercana a c |

