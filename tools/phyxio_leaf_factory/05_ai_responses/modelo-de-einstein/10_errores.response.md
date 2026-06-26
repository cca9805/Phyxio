# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: modelo-de-einstein
# Target response file: errores.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Modelo de einstein

## Errores conceptuales

### Error 1: Tratar la [[temperatura_einstein]] como la [[temperatura]] real

**Por qué parece correcto**
Ambas magnitudes se expresan en kelvin y aparecen juntas en el cálculo, así que puede parecer que describen el mismo termómetro.

**Por qué es incorrecto**
La [[temperatura]] describe el estado térmico del sólido; la [[temperatura_einstein]] describe una escala propia del material, ligada a [[frecuencia_angular_einstein]] mediante [[constante_planck_reducida]] y [[constante_boltzmann]].

**Señal de detección**
El resultado cambia “porque cambia el material”, pero el alumno dice que el sólido se ha calentado.

**Corrección conceptual**
Separa estado y material: [[temperatura]] es variable experimental; [[temperatura_einstein]] es parámetro del modelo.

**Mini-ejemplo de contraste**
Dos sólidos a 300 K pueden tener distinto [[calor_especifico_molar_volumen_constante]] si sus [[temperatura_einstein]] son distintas.

### Error 2: Pensar que baja [[temperatura]] siempre significa poco calor almacenado

**Por qué parece correcto**
En lenguaje cotidiano, frío se asocia con poca energía.

**Por qué es incorrecto**
El modelo distingue [[energia_interna]] y [[capacidad_calorifica_volumen_constante]]. La energía de punto cero puede existir aunque el cambio de energía al calentar sea pequeño.

**Señal de detección**
Se interpreta un [[calor_especifico_molar_volumen_constante]] bajo como ausencia total de energía vibracional.

**Corrección conceptual**
Lee el calor específico como sensibilidad térmica, no como cantidad total almacenada.

**Mini-ejemplo de contraste**
A muy baja [[temperatura]], la [[energia_interna]] conserva parte cuántica, pero el sólido apenas acepta energía térmica adicional.

## Errores de modelo

### Error 3: Usar Einstein cuando el sólido muestra ley cúbica

**Por qué parece correcto**
El modelo de Einstein es cuántico, así que parece suficiente para cualquier sólido frío.

**Por qué es incorrecto**
Una ley aproximadamente cúbica de [[calor_especifico_molar_volumen_constante]] a baja [[temperatura]] indica modos acústicos distribuidos, no una sola [[frecuencia_angular_einstein]].

**Señal de detección**
La gráfica experimental baja suavemente con una potencia, mientras la curva de Einstein cae demasiado rápido.

**Corrección conceptual**
Usa Einstein para ver cuantización con frecuencia única; usa Debye si importa el espectro de fonones.

**Mini-ejemplo de contraste**
Si entre 2 K y 20 K el ajuste mejora con una dependencia cúbica, una única [[temperatura_einstein]] es mala brújula.

### Error 4: Aplicar la versión molar a un número finito de átomos

**Por qué parece correcto**
Ambas versiones hablan de capacidad térmica del mismo sólido.

**Por qué es incorrecto**
La expresión molar usa [[constante_gases]], mientras la capacidad total de un conjunto finito depende de [[numero_atomos]] y [[constante_boltzmann]].

**Señal de detección**
El resultado tiene unidades de J mol⁻¹ K⁻¹ cuando el problema pedía J K⁻¹.

**Corrección conceptual**
Elige [[calor_especifico_molar_volumen_constante]] para un mol y [[capacidad_calorifica_volumen_constante]] para el sistema completo.

**Mini-ejemplo de contraste**
Un nanocristal y un mol de material pueden tener el mismo régimen, pero no la misma capacidad total.

## Errores matemáticos

### Error 5: Calcular mal el [[parametro_reducido]]

**Por qué parece correcto**
La razón entre dos temperaturas parece simétrica.

**Por qué es incorrecto**
El modelo usa el cociente definido por la escala de Einstein y la [[temperatura]]. Invertirlo cambia los límites: lo que era régimen clásico se vuelve congelación artificial.

**Señal de detección**
Al subir [[temperatura]], el cálculo predice menor activación térmica.

**Corrección conceptual**
Aplica la referencia:

{{f:parametro_reducido_einstein}}

y revisa si el resultado disminuye cuando aumenta [[temperatura]].

**Mini-ejemplo de contraste**
Si [[temperatura]] se duplica con [[temperatura_einstein]] fija, [[parametro_reducido]] debe reducirse.

### Error 6: Confundir exponencial con aproximación lineal

**Por qué parece correcto**
En muchos problemas de calorimetría se espera una relación casi proporcional.

**Por qué es incorrecto**
El [[calor_especifico_molar_volumen_constante]] de Einstein contiene dependencia exponencial; a baja [[temperatura]] la caída no se corrige con una regla de tres.

**Señal de detección**
El cálculo da valores similares para 50 K y 100 K cuando [[temperatura_einstein]] es grande.

**Corrección conceptual**
Usa la fórmula completa:

{{f:calor_especifico_molar_einstein}}

y evalúa el régimen antes de aproximar.

**Mini-ejemplo de contraste**
Cerca de [[temperatura_einstein]], duplicar [[temperatura]] puede cambiar mucho la pendiente; muy por encima, el cambio se aplana.

## Errores de interpretación

### Error 7: Leer la curva como una recta

**Por qué parece correcto**
Muchas gráficas escolares entrenan a buscar pendiente constante.

**Por qué es incorrecto**
La gráfica de [[calor_especifico_molar_volumen_constante]] frente a [[temperatura]] es saturante: crece y luego se aproxima al límite clásico.

**Señal de detección**
Se habla de “proporcionalidad directa” en todo el intervalo.

**Corrección conceptual**
Interpreta pendiente y curvatura: el desbloqueo cuántico domina al principio y la saturación domina al final.

**Mini-ejemplo de contraste**
Entre baja e intermedia [[temperatura]] la subida es fuerte; a alta [[temperatura]] añadir kelvin apenas cambia el valor molar.

### Error 8: Ignorar unidades absolutas

**Por qué parece correcto**
Los grados Celsius son cotidianos y las diferencias de temperatura parecen intercambiables.

**Por qué es incorrecto**
El [[parametro_reducido]] usa una razón de temperaturas absolutas; introducir Celsius altera el sentido físico de la escala.

**Señal de detección**
Aparecen valores negativos o cero de [[temperatura]] en una fórmula cuántica térmica.

**Corrección conceptual**
Convierte siempre [[temperatura]] a kelvin antes de calcular.

**Mini-ejemplo de contraste**
0 °C no significa ausencia térmica: en el modelo debe escribirse como 273 K.

## Regla de autocontrol rápido

Antes de aceptar el resultado, verifica tres luces del panel: [[temperatura]] en kelvin, [[parametro_reducido]] con orientación correcta y [[calor_especifico_molar_volumen_constante]] compatible con el régimen frente a [[temperatura_einstein]].

