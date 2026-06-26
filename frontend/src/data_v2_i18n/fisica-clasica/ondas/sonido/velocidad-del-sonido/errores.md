## Errores conceptuales

### Error 1: Creer que un sonido más intenso viaja más rápido

**Por qué parece correcto**

La intensidad sonora se asocia intuitivamente con la "fuerza" con que se propaga el sonido. Si la onda es más fuerte, parece lógico que se desplace más rápido, como un corredor más potente que recorre la misma distancia en menos tiempo.

**Por qué es incorrecto**

[[v_son]] es una propiedad del medio, no de la fuente. Una perturbación de presión mayor simplemente tiene mayor amplitud, no mayor velocidad de propagación. Duplicar la potencia acústica de la fuente no cambia [[v_son]] en absoluto; solo aumenta la amplitud de la onda y, con ella, la intensidad percibida por el oyente. La velocidad de propagación la fija el medio (su rigidez [[B_mod]] y su densidad [[rho_med]]).

**Señal de detección**

El alumno calcula o afirma que [[v_son]] cambia al cambiar la amplitud de la fuente, o busca en el enunciado datos sobre la amplitud para calcular [[v_son]].

**Corrección conceptual**

Para calcular [[v_son]], solo son relevantes las propiedades del medio (temperatura, composición, estado de agregación). La amplitud de la fuente no aparece en ninguna de las fórmulas de [[v_son]]. Si el enunciado da datos de amplitud y pide [[v_son]], esos datos no son necesarios para el cálculo.

**Mini-ejemplo de contraste**

Un susurro (amplitud de presión ~0.001 Pa) y el ruido de un avión a reacción a corta distancia (~100 Pa) viajan exactamente a la misma velocidad en el mismo aire a la misma temperatura. La diferencia entre ambos sonidos es de unos 100 dB en nivel sonoro, pero su [[v_son]] es idéntica.

---

### Error 2: Creer que medios más densos transmiten el sonido más rápido

**Por qué parece correcto**

Se razona: "en un sólido hay más moléculas por unidad de volumen, las moléculas están más próximas, y pueden transmitir la vibración más rápidamente al vecino". Esta imagen cinética de moléculas que 'pasan el mensaje' de unas a otras sugiere que más densidad implica mayor velocidad de transmisión.

**Por qué es incorrecto**

La densidad actúa como inercia en la fórmula de Newton-Laplace: [[v_son]] = sqrt([[B_mod]]/[[rho_med]]). Mayor [[rho_med]] reduce [[v_son]] para el mismo [[B_mod]]. Si el sonido va más rápido en sólidos que en gases, es porque la rigidez [[B_mod]] de los sólidos es enormemente mayor que la de los gases, y ese efecto domina sobre el aumento de densidad. Por ejemplo, el acero es ~7000 veces más denso que el aire pero ~10⁷ veces más rígido, de modo que la raíz cuadrada del cociente da unas 15 veces más [[v_son]] en acero.

**Señal de detección**

El alumno ordena los medios de mayor a menor [[v_son]] según su densidad (gases primero, luego líquidos, luego sólidos), es decir, el orden inverso al correcto.

**Corrección conceptual**

El orden correcto de [[v_son]] de menor a mayor es: gases < líquidos < sólidos. En cada categoría, la rigidez es tan dominante sobre la densidad que la ordenación general se invierte respecto a la densidad. Para comparar dentro de una misma categoría, hay que evaluar el cociente [[B_mod]]/[[rho_med]] caso a caso.

**Mini-ejemplo de contraste**

El agua es ~800 veces más densa que el aire. Si la densidad acelerara el sonido, el sonido en agua debería ir 28 veces más lento (raíz de 800) que en aire. En realidad va 4.4 veces más rápido, porque el módulo de compresibilidad del agua es ~15000 veces mayor que el del aire, y ese factor domina completamente sobre el de densidad.

## Errores de modelo

### Error 1: Olvidar el factor gamma en la fórmula de la velocidad del sonido en gases (error de Newton)

**Por qué parece correcto**

La expresion mas sencilla del modulo elastico de un gas ideal es la presion de equilibrio: al comprimir el gas isotermicamente, la presion aumenta en proporcion al cociente de volumenes. Newton uso esta expresion y obtuvo una prediccion que parece dimensionalmente correcta y conceptualmente razonable.

**Por qué es incorrecto**

Las compresiones acusticas no son isotermicas sino adiabaticas: ocurren tan rapidamente que no hay tiempo para que el calor fluya entre regiones comprimidas y rarefactadas. El modulo de compresibilidad adiabatico incluye [[gamma_gas]]. Para el aire, olvidar este factor produce un resultado un 18 % menor que el real.

**Señal de detección**

El resultado de [[v_son]] en aire a 0 C es aproximadamente 280 m/s en lugar de los correctos 331 m/s. O el alumno usa la version isotermica sin el factor [[gamma_gas]].

**Corrección conceptual**

La formula correcta para un gas ideal usa el modulo adiabatico, que incorpora [[gamma_gas]]. La correccion de Laplace es esencial: para el aire, ese factor aumenta la prediccion de Newton en torno a un 18 % y la acerca al valor experimental.

**Mini-ejemplo de contraste**

A 0 C y 1 atm para aire seco, la estimacion isotermica de Newton da unos 280 m/s, mientras que la correccion adiabática de Laplace da unos 331 m/s. El valor experimental coincide con Laplace.

## Errores matemáticos

### Error 1: Usar la temperatura en grados Celsius en lugar de en kelvin

**Por qué parece correcto**

En la vida cotidiana se usa la escala Celsius para la temperatura. Los enunciados suelen dar la temperatura en °C ("el sonido en aire a 20 °C..."), y es tentador sustituir directamente ese valor en la fórmula.

**Por qué es incorrecto**

La formula de gas ideal requiere [[T_abs]] en kelvin. Si se sustituye 20 como si fuera temperatura absoluta en lugar de usar el valor cercano a 293 K, el resultado cae a unos 89 m/s, completamente erroneo. El problema es especialmente grave cerca de 0 C: usar cero como temperatura absoluta haria que [[v_son]] saliera nula, lo cual es absurdo.

**Señal de detección**

[[v_son]] calculada es mucho menor de 100 m/s para temperaturas en el rango atmosférico, o es exactamente cero para 0 °C.

**Corrección conceptual**

Siempre convertir a kelvin antes de sustituir en la formula: se suma 273.15 al valor Celsius. La temperatura absoluta es siempre positiva y mayor que 200 K para condiciones atmosfericas. Si el resultado es menor de 200 m/s en aire ordinario, casi con certeza se uso la temperatura en Celsius.

**Mini-ejemplo de contraste**

A 20 C, usar temperatura absoluta da una [[v_son]] cercana a 343 m/s. Usar 20 como si fuera kelvin da unos 89 m/s, un resultado casi cuatro veces menor y fisicamente incompatible con el aire atmosferico.

### Error 2: Usar la masa molar en g/mol en lugar de kg/mol

**Por qué parece correcto**

Las tablas quimicas habituales listan la masa molar en g/mol; para el aire seco suele aparecer como 29 g/mol. Es natural usar ese valor directamente en la formula sin convertir a kg/mol.

**Por qué es incorrecto**

La constante universal de los gases en SI requiere que [[M_mol]] este en kg/mol para que las unidades sean consistentes y el resultado de [[v_son]] salga en m/s. Si se deja el valor en gramos por mol, se arrastra un factor de mil en la masa molar y el resultado queda absurdo para aire ordinario.

**Señal de detección**

[[v_son]] calculada para el aire a temperatura ambiente es del orden de 10000 m/s en lugar de 340 m/s.

**Corrección conceptual**

En la formula de gas ideal, [[M_mol]] debe estar siempre en kg/mol. Para aire seco se usa 0.029 kg/mol, no 29. Regla mnemotecnica: si la masa molar esta en g/mol, dividir por 1000 antes de sustituir.

**Mini-ejemplo de contraste**

Con [[M_mol]] en kg/mol, el aire a temperatura ambiente da una [[v_son]] cercana a 343 m/s. Con la masa molar sin convertir, el calculo cae a unos pocos metros por segundo, lo que delata de inmediato el error de unidades.

## Errores de interpretación

### Error 1: Identificar [[v_son]] con la velocidad de desplazamiento de las partículas del medio

**Por qué parece correcto**

El sonido es una vibración de las partículas del medio. Si el sonido se propaga rápidamente, parece razonable que las partículas vibren rápidamente, y asociar "velocidad del sonido" con la velocidad de esas partículas.

**Por qué es incorrecto**

[[v_son]] es la velocidad de propagación del **patrón de compresión-rarefacción** a través del medio, no la velocidad de movimiento de las partículas individuales. Las partículas del medio oscilan localmente alrededor de su posición de equilibrio con una velocidad de desplazamiento (velocidad de partícula) que es típicamente de milímetros por segundo para sonidos audibles ordinarios, millones de veces menor que [[v_son]]. La velocidad de partícula aumenta con la amplitud de la onda; [[v_son]] no.

**Señal de detección**

El alumno usa la velocidad de oscilacion de las particulas como si fuera [[v_son]] en una relacion de longitud de onda.

**Corrección conceptual**

Distinguir explicitamente dos velocidades: [[v_son]], que es la velocidad de fase de la onda y una propiedad del medio, y la velocidad de particula, que describe la oscilacion local de las moleculas y suele ser muchisimo menor en sonidos audibles normales. Son magnitudes distintas en concepto, valor y unidades.

**Mini-ejemplo de contraste**

Para un sonido audible ordinario en aire, la velocidad maxima de particula puede estar en decimas de milimetro por segundo, mientras [[v_son]] esta en cientos de metros por segundo. Confundir ambas escalas produciria una longitud de onda microscopica, completamente absurda frente a la longitud de onda real de un tono audible.

## Regla de autocontrol rápido

Antes de dar por válido un cálculo de [[v_son]], verificar:

1. ¿Se uso temperatura en kelvin? Un valor de temperatura absoluta menor de 200 K es sospechoso para condiciones atmosfericas.
2. ¿Se incluyó el factor [[gamma_gas]] (≈ 1.4 para aire) en la fórmula del gas ideal? Sin él, [[v_son]] será un 18 % menor.
3. ¿La masa molar esta en kg/mol? Para aire seco, el valor operativo es 0.029 kg/mol, no 29.
4. ¿El resultado está en el rango esperado para el medio (aire ~300-360 m/s, agua ~1480 m/s, acero ~5100 m/s)?
5. ¿Se calculó [[v_son]] del medio, no la velocidad de partícula de la onda?

Si alguna comprobación falla, el cálculo contiene un error de principio.
