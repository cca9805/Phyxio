# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: gas-de-electrones
# Target response file: errores.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Gas de electrones
## Errores conceptuales
### Error 1: Confundir [[energia_fermi]] con energía media
**Por qué parece correcto**
La palabra “energía” invita a pensar en un valor representativo de todos los electrones.

**Por qué es incorrecto**
[[energia_fermi]] es una frontera de llenado, no el promedio de [[energia_estado]]. Indica hasta dónde se ocupan estados a muy baja [[temperatura_absoluta]].

**Señal de detección**
El alumno dice que todos los electrones “tienen” [[energia_fermi]].

**Corrección conceptual**
Lee [[energia_fermi]] como borde superior ocupado en el modelo ideal.

**Mini-ejemplo de contraste**
En un metal, muchos electrones ocupan estados por debajo de [[energia_fermi]], no exactamente en ella.

### Error 2: Pensar que subir [[temperatura_absoluta]] elimina Pauli
**Por qué parece correcto**
La temperatura permite excitaciones y parece liberar estados.

**Por qué es incorrecto**
La exclusión sigue actuando; solo se suaviza [[ocupacion_estado]] alrededor de [[potencial_quimico]].

**Señal de detección**
Aparecen ocupaciones imposibles o se ignora {{f:ocupacion_fermi_dirac_electrones}}.

**Corrección conceptual**
La temperatura redistribuye probabilidades, no borra el límite fermiónico.

**Mini-ejemplo de contraste**
A 300 K, un metal conserva frontera de ocupación porque [[temperatura_fermi]] es enorme.

## Errores de modelo
### Error 3: Usar gas libre para cualquier sólido
**Por qué parece correcto**
Muchos libros introducen electrones de metal como libres.

**Por qué es incorrecto**
Bandas, brechas y masa efectiva pueden cambiar la relación entre [[densidad_electronica]] y [[energia_fermi]].

**Señal de detección**
Se aplica [[masa_electron]] libre a un semiconductor sin justificarlo.

**Corrección conceptual**
Comprueba si el problema pide estimación libre o modelo de bandas.

**Mini-ejemplo de contraste**
Sodio metálico admite estimación libre; silicio dopado requiere más cuidado.

### Error 4: Ignorar la dimensionalidad
**Por qué parece correcto**
La palabra densidad parece universal.

**Por qué es incorrecto**
La fórmula {{f:energia_fermi_gas_electrones_3d}} supone [[volumen]] y conteo 3D.

**Señal de detección**
Se usa [[densidad_electronica]] volumétrica en una lámina 2D.

**Corrección conceptual**
Antes de calcular, decide si el sistema es 3D, 2D o 1D.

**Mini-ejemplo de contraste**
Un metal macroscópico usa [[volumen]]; un gas electrónico en grafeno no sigue igual dependencia.

## Errores matemáticos
### Error 5: Mezclar cm⁻³ con m⁻³
**Por qué parece correcto**
Las densidades electrónicas suelen venir en notación científica parecida.

**Por qué es incorrecto**
Un factor 10⁶ en [[densidad_electronica]] altera mucho [[energia_fermi]].

**Señal de detección**
Sale una [[temperatura_fermi]] absurda para un metal común.

**Corrección conceptual**
Convierte siempre [[densidad_electronica]] a m⁻³ antes de usar la fórmula.

**Mini-ejemplo de contraste**
10²² cm⁻³ equivale a 10²⁸ m⁻³, no a 10²² m⁻³.

### Error 6: Olvidar la raíz en [[velocidad_fermi]]
**Por qué parece correcto**
La relación energía-velocidad se manipula deprisa.

**Por qué es incorrecto**
[[velocidad_fermi]] procede de energía cinética y no escala linealmente con [[energia_fermi]].

**Señal de detección**
La rapidez calculada supera valores razonables para metales.

**Corrección conceptual**
Usa {{f:velocidad_fermi}} y revisa unidades kg, J y m/s.

**Mini-ejemplo de contraste**
Duplicar [[energia_fermi]] no duplica exactamente la escala de comparación energética total.

## Errores de interpretación
### Error 7: Leer [[ocupacion_estado]] como número total de electrones
**Por qué parece correcto**
“ocupación” suena a cantidad acumulada.

**Por qué es incorrecto**
[[ocupacion_estado]] es una probabilidad media para un estado de [[energia_estado]], no [[numero_electrones]].

**Señal de detección**
Se compara [[ocupacion_estado]] con el tamaño de la muestra.

**Corrección conceptual**
Distingue estado individual, conteo total y densidad.

**Mini-ejemplo de contraste**
[[ocupacion_estado]] cercana a 1 no significa que haya un electrón total en el metal.

### Error 8: Olvidar el papel del [[potencial_quimico]]
**Por qué parece correcto**
El gráfico puede parecer depender solo de [[energia_estado]] y [[temperatura_absoluta]].

**Por qué es incorrecto**
La transición se centra alrededor de [[potencial_quimico]], que fija la referencia de ocupación.

**Señal de detección**
La [[energia_reducida]] se calcula sin restar la referencia correcta.

**Corrección conceptual**
Localiza siempre [[potencial_quimico]] antes de interpretar probabilidades.

**Mini-ejemplo de contraste**
Dos estados con igual [[energia_estado]] pueden tener distinta [[ocupacion_estado]] si cambia [[potencial_quimico]].

## Regla de autocontrol rápido
Antes de aceptar el resultado, verifica: [[densidad_electronica]] en m⁻³, [[energia_fermi]] positiva, [[temperatura_absoluta]] comparada con [[temperatura_fermi]], y [[ocupacion_estado]] entre 0 y 1.

