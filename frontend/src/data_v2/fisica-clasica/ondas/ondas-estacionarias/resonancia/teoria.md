# Resonancia

## Idea clave
La resonancia ocurre cuando la frecuencia de excitacion coincide con una frecuencia propia permitida por la frontera del sistema. En ese punto la respuesta se amplifica y el modo asociado domina el patron de oscilacion.

## 1- Que estudia este tema y por que es fundamental
Este tema estudia la condicion de maxima respuesta en sistemas ondulatorios estacionarios.

Es fundamental porque:
- conecta frecuencia forzada con modos propios,
- explica picos de amplitud y selectividad espectral,
- permite predecir cuando una excitacion es segura o peligrosa.

Sin esta base, es facil confundir una oscilacion grande transitoria con resonancia real.

## 2- Mecanismo fisico de la resonancia
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

Cuando el sistema se excita periodicamente:
- si f_exc lejos de f_n, la transferencia de energia por ciclo es limitada,
- si f_exc ~ f_n, el aporte de energia se suma en fase,
- la amplitud crece hasta que perdidas y aporte se equilibran.

Resultado:
- aparece un pico de respuesta centrado en f0 (aprox f_n),
- el ancho del pico se relaciona con amortiguamiento y factor Q.

## 3- Magnitudes y parametros esenciales
- n: modo permitido por frontera (1,2,3,...).
- L: longitud efectiva del sistema (m).
- v: velocidad de onda en el medio (m/s).
- lambda_n: longitud de onda modal (m).
- f_n: frecuencia propia del modo n (Hz).
- f_exc: frecuencia de excitacion (Hz).
- f0: frecuencia del pico resonante (Hz).
- Delta_f: ancho de banda de media potencia (Hz).
- Q: factor de calidad (1).
- zeta: amortiguamiento equivalente (1).

## 4- Formulas esenciales y lectura fisica
Frecuencia modal (frontera equivalente, p.ej. fija-fija):

$$
f_n=\frac{nv}{2L}
$$

Longitud de onda modal:

$$
\lambda_n=\frac{2L}{n}
$$

Condicion de resonancia modal:

$$
f_{exc}\approx f_n
$$

Identificacion del pico:

$$
f_0\approx f_n
$$

Factor de calidad:

$$
Q=\frac{f_0}{\Delta f}
$$

Ancho de banda:

$$
\Delta f=\frac{f_0}{Q}
$$

Amortiguamiento aproximado (pico estrecho):

$$
zeta\approx\frac{1}{2Q}
$$

Lectura fisica importante:
- Q alto -> pico estrecho y respuesta muy selectiva,
- Q bajo -> pico ancho y menor amplificacion maxima,
- la frontera define que f_n existen y por tanto donde puede aparecer resonancia.

## 5- Nota conceptual importante
Resonancia no significa amplitud infinita en sistemas reales. Las perdidas, no linealidades y limites estructurales acotan la respuesta.

## 6- Dominio de validez del modelo
Valido cuando:
- regimen lineal cercano al modo dominante,
- frontera bien aproximada,
- excitacion casi monofrecuencia,
- amortiguamiento moderado para usar Q y Delta_f con sentido clasico.

Si hay no linealidad fuerte o acoplo multimodal intenso, se requiere modelo modal extendido.

## 7- Metodo de resolucion recomendado
1- Identifica frontera y familia modal del sistema.
2- Calcula f_n y lambda_n del modo relevante.
3- Compara f_exc con f_n para evaluar cercania a resonancia.
4- Si hay datos de pico, calcula Q=f0/Delta_f.
5- Estima zeta si se pide amortiguamiento.
6- Verifica unidades y orden de magnitud.
7- Cierra con interpretacion de riesgo, selectividad y respuesta.

## 8- Errores tipicos que debes evitar
- usar formula modal de frontera incorrecta.
- confundir f_exc con f_n sin comprobar proximidad.
- llamar resonancia a cualquier amplitud alta fuera de pico.
- calcular Q con ancho que no es de media potencia.
- olvidar que Delta_f depende de amortiguamiento real.

## 9- Ejemplo completo guiado
Datos:
- sistema fija-fija,
- L=1.00 m,
- v=120 m/s,
- modo n=2,
- pico medido en f0=118 Hz,
- ancho de media potencia Delta_f=4 Hz.

Paso 1- frecuencia modal teorica:

$$
f_2=\frac{2\cdot120}{2\cdot1.00}=120\ \mathrm{Hz}
$$

Paso 2- comparacion con pico:

$$
f_0\approx118\ \mathrm{Hz}\approx f_2
$$

Resonancia del modo 2 consistente.

Paso 3- factor de calidad:

$$
Q=\frac{118}{4}=29.5
$$

Paso 4- amortiguamiento equivalente:

$$
zeta\approx\frac{1}{2Q}=\frac{1}{59}\approx0.017
$$

Interpretacion:
- sistema selectivo moderado,
- resonancia clara alrededor del modo 2,
- amortiguamiento bajo pero no extremo.

## 10- Sintesis final
Dominar resonancia significa:
- unir frontera, modos y excitacion,
- identificar correctamente picos y ancho de banda,
- cuantificar selectividad con Q,
- interpretar la respuesta para diseno, medida y seguridad.
