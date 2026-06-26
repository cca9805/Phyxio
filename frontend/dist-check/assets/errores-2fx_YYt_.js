const e=`## Errores conceptuales

### Error 1: Creer que [[DeltaS]] depende del camino

**Por qué parece correcto**

El alumno razona por analogía con el calor y el trabajo, que sí dependen del camino. Si Q y W son funciones de proceso, parece lógico que [[DeltaS]] = [[Q_rev]]/[[T]] también dependa de cómo se realice el proceso.

**Por qué es incorrecto**

[[DeltaS]] es función de estado: depende exclusivamente de los estados termodinámicos inicial y final. La integral ∫dQ_rev/T se evalúa sobre un camino reversible cualquiera que conecte ambos estados, y el resultado es siempre el mismo independientemente del camino elegido. Si el proceso real es irreversible, [[DeltaS]] tiene exactamente el mismo valor; solo cambia que Q_real ≠ [[Q_rev]].

**Señal de detección**

El alumno obtiene distintos valores de [[DeltaS]] según el camino que imagine, o intenta calcular «[[DeltaS]] del proceso irreversible» como si fuera distinto del «[[DeltaS]] del proceso reversible» entre los mismos estados.

**Corrección conceptual**

[[DeltaS]] depende solo del estado inicial y del estado final. Para calcularlo se puede elegir cualquier camino reversible conveniente. El valor obtenido es universal para esos dos estados, sin importar cómo llegó realmente el sistema de uno al otro.

**Mini-ejemplo de contraste**

Un gas ideal se expande hasta duplicar su volumen: (a) isotérmicamente y reversible, (b) en expansión libre. En ambos casos la variación de entropía del gas es la misma para los mismos estados. Si [[DeltaS]] dependiese del camino, la expansión libre daría cero por ausencia de calor real, pero eso es falso: [[DeltaS]] mide el cambio de estado.

### Error 2: Usar temperatura en Celsius en las fórmulas

**Por qué parece correcto**

En muchos problemas de calorimetría básica, las diferencias de temperatura ΔT son iguales en Celsius y en kelvin, así que el alumno generaliza: «da lo mismo usar °C o K».

**Por qué es incorrecto**

Las fórmulas de [[DeltaS]] usan cocientes de temperaturas entre [[T_f]] y [[T_i]] o divisiones por T, no diferencias. El cociente entre valores Celsius es completamente distinto del cociente entre valores kelvin. Además, si [[T_i]] = 0 °C, el denominador físico no puede tratarse como cero: debe convertirse a kelvin.

**Señal de detección**

El resultado de [[DeltaS]] es un orden de magnitud mayor del esperado, o aparece una divergencia (división por cero) cuando la temperatura inicial es 0 °C.

**Corrección conceptual**

Siempre convertir a kelvin antes de sustituir: T(K) = T(°C) + 273.15. En las fórmulas de entropía, [[T]] debe ser absoluta porque representa la escala termodinámica desde la cual se mide la dispersión energética.

**Mini-ejemplo de contraste**

Calentar agua de 20 °C a 80 °C. Incorrecto: [[DeltaS]] = m·c·ln(80/20) = m·c·ln(4) ≈ m·c·1.39. Correcto: [[DeltaS]] = m·c·ln(353/293) ≈ m·c·0.186. El error es un factor 7.5.

## Errores de modelo

### Error 3: Aplicar la fórmula isotérmica a un calentamiento

**Por qué parece correcto**

La fórmula isotérmica [[DeltaS]] = [[Q_rev]]/[[T]] es la más simple y memorable. El alumno la aplica a cualquier proceso «porque al fin y al cabo hay calor dividido por temperatura».

**Por qué es incorrecto**

La fórmula isotérmica solo es válida cuando [[T]] permanece constante durante todo el intercambio de calor. En un calentamiento, [[T]] varía continuamente de [[T_i]] a [[T_f]]. Usar una T promedio como denominador produce un error sistemático porque la función 1/T no es lineal.

**Señal de detección**

El alumno escribe [[DeltaS]] = Q/(T_promedio) o [[DeltaS]] = m·c·ΔT/T_algo en lugar de la fórmula logarítmica correcta. El resultado difiere del correcto proporcionalmente a la amplitud del rango de temperaturas.

**Corrección conceptual**

Para calentamiento con [[c_p]] constante, la fórmula correcta es la relación logarítmica del leaf:

{{f:variacion_entropia_calentamiento}}

La derivación requiere integrar el calor reversible ponderado por temperatura, lo que produce el logaritmo natural. No existe atajo algebraico válido que evite el logaritmo.

**Mini-ejemplo de contraste**

Calentar 1 kg de agua de 300 K a 400 K. Incorrecto: Q = 4186·100 = 418600 J, [[DeltaS]] = 418600/350 ≈ 1196 J/K (usando T promedio). Correcto: [[DeltaS]] = 4186·ln(400/300) ≈ 4186·0.288 ≈ 1205 J/K. En este caso el error es pequeño (~1%), pero para rangos más amplios (100 K a 1000 K) el error crece a ~15%.

### Error 4: Ignorar el cambio de fase intermedio

**Por qué parece correcto**

Si se pide calcular [[DeltaS]] de agua que pasa de −10 °C a 120 °C, el alumno aplica directamente una sola fórmula logarítmica como si fuera un único calentamiento continuo.

**Por qué es incorrecto**

Al cruzar un punto de fusión (0 °C) o ebullición (100 °C), la temperatura permanece constante mientras se absorbe calor latente. Este calor no aparece en la fórmula de calentamiento (que asume solo calor sensible). Además, [[c_p]] cambia al cambiar de fase (hielo, agua líquida y vapor tienen valores de [[c_p]] distintos).

**Señal de detección**

El alumno obtiene un [[DeltaS]] significativamente menor que el valor tabulado para el proceso completo, porque ignora las contribuciones latentes que suelen ser las dominantes (el calor latente de vaporización del agua es ≈ 2260 kJ/kg, mucho mayor que cualquier calentamiento sensible en un rango de 100 K).

**Corrección conceptual**

Dividir el cálculo en tramos: (1) calentamiento del sólido hasta T_fusión, (2) fusión isotérmica, (3) calentamiento del líquido hasta T_ebullición, (4) vaporización isotérmica, (5) calentamiento del vapor. Cada tramo usa su fórmula: logarítmica para calentamiento y [[Q_rev]]/[[T]] para cambio de fase.

**Mini-ejemplo de contraste**

1 mol de agua de 263 K a 383 K. Solo calentamiento: [[DeltaS]] = 75.3·ln(383/263) ≈ 28 J/(mol·K). Con cambios de fase: [[DeltaS]] ≈ 28 + 22 (fusión a 273 K) + 109 (vaporización a 373 K) + contribuciones adicionales ≈ 160 J/(mol·K). La diferencia es un factor 5.7.

## Errores matemáticos

### Error 5: Confundir logaritmo natural con logaritmo decimal

**Por qué parece correcto**

Muchas calculadoras tienen la tecla «log» como predeterminada y el alumno la usa sin verificar si es log₁₀ o ln. En algunos países la notación «log» se usa indistintamente.

**Por qué es incorrecto**

Las fórmulas de variación de entropía requieren el **logaritmo natural** (ln, base e). Usar log₁₀ introduce un factor de error ln(10) ≈ 2.303: el resultado queda 2.3 veces menor de lo correcto.

**Señal de detección**

[[DeltaS]] calculado es aproximadamente un 57% del valor correcto (1/2.303 ≈ 0.434). Si al multiplicar el resultado por 2.303 se obtiene el valor esperado, se confirmó el error.

**Corrección conceptual**

Siempre usar ln (logaritmo neperiano, base e ≈ 2.718). Si la calculadora solo ofrece log₁₀, convertir: ln(x) = log₁₀(x) / log₁₀(e) = log₁₀(x) · 2.3026.

**Mini-ejemplo de contraste**

Expansión isotérmica al doble de volumen: [[DeltaS]] = [[n]][[R]]·ln(2) = 8.314·0.693 ≈ 5.76 J/(mol·K). Con log₁₀: [[n]][[R]]·log₁₀(2) = 8.314·0.301 ≈ 2.50 J/(mol·K). Resultado incorrecto por un factor 2.3.

## Errores de interpretación

### Error 6: Creer que [[DeltaS]] negativo del sistema viola la segunda ley

**Por qué parece correcto**

La segunda ley se enuncia como «la entropía siempre aumenta», lo que el alumno interpreta como [[DeltaS]] ≥ 0 en todo proceso y para todo sistema.

**Por qué es incorrecto**

La segunda ley establece que [[DeltaS]]_universo = [[DeltaS]]_sistema + [[DeltaS]]_entorno ≥ 0. El sistema puede perfectamente perder entropía (enfriarse, comprimirse) siempre que el entorno gane al menos esa misma cantidad. Un refrigerador funciona así: el interior pierde entropía pero el exterior gana más.

**Señal de detección**

El alumno descarta un resultado negativo de [[DeltaS]] como «imposible» o «erróneo» sin calcular el [[DeltaS]] del entorno. También puede intentar forzar que [[DeltaS]] sea positivo cambiando signos arbitrariamente.

**Corrección conceptual**

[[DeltaS]]_sistema puede ser positivo, negativo o cero. Lo que la segunda ley prohíbe es que [[DeltaS]]_universo sea negativo. Siempre verificar el balance completo: sistema + entorno.

**Mini-ejemplo de contraste**

Condensación de 1 mol de vapor a 373 K: [[DeltaS]]_sistema = −40650/373 ≈ −109 J/(mol·K) (negativo, el sistema se ordena). [[DeltaS]]_entorno = +40650/373 ≈ +109 J/(mol·K). [[DeltaS]]_universo = 0 (proceso reversible). No hay violación.

## Regla de autocontrol rápido

Antes de dar por bueno un resultado de [[DeltaS]]:

1. **Verificar unidades**: el resultado debe estar en J/K (o J/(mol·K) si se trabaja por mol). Si aparecen unidades de J o K solas, falta un paso.
2. **Verificar signo**: calentamiento o absorción → [[DeltaS]] > 0; enfriamiento o cesión → [[DeltaS]] < 0. Si el signo contradice el proceso, revisar.
3. **Verificar orden de magnitud**: comparar con referencias conocidas (fusión del hielo ≈ 22 J/(mol·K), vaporización ≈ 109 J/(mol·K)). Si el resultado se desvía por un factor > 5 sin razón evidente, buscar error de unidades o de logaritmo.
4. **Verificar coherencia con la segunda ley**: si [[DeltaS]]_sistema < 0, calcular [[DeltaS]]_entorno y confirmar que [[DeltaS]]_universo ≥ 0.
`;export{e as default};
