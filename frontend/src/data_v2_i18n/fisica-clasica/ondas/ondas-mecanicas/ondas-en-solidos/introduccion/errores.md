## Errores conceptuales


### Error 1: Confundir el módulo elástico según el tipo de onda

**Por qué parece correcto**

El alumno sabe que la velocidad depende de un módulo elástico y la densidad, y aplica la primera fórmula que recuerda sin verificar si es la adecuada para el modo de onda.

**Por qué es incorrecto**

Las ondas longitudinales en barras delgadas usan [[modulo_de_young]]; las ondas transversales usan [[modulo_de_cizalladura]]. Si se usa el módulo equivocado, la velocidad calculada tiene un error del 40% al 70% respecto al valor correcto. En sólidos extensos, además, se usa el módulo de onda plana (combinación de E y ν) que da una velocidad aún mayor que la de barra.

**Señal de detección**

La velocidad transversal calculada resulta mayor que la longitudinal, lo cual es físicamente imposible en un sólido isótropo.

**Corrección conceptual**

Antes de sustituir valores, identificar el tipo de onda. Longitudinal en barra: [[modulo_de_young]]. Transversal: [[modulo_de_cizalladura]]. Longitudinal en medio extenso: módulo de onda plana. Siempre verificar que la velocidad transversal sea menor que la longitudinal.

**Mini-ejemplo de contraste**

Acero con [[modulo_de_young]] de 200 GPa, [[modulo_de_cizalladura]] de 80 GPa, [[rho]] de 7800 kg/m³. Velocidad longitudinal (barra): aproximadamente 5064 m/s. Velocidad transversal: aproximadamente 3202 m/s. Si se usa [[modulo_de_young]] para la transversal erróneamente, se obtiene 5064 m/s (un 58% mayor que el valor correcto).


### Error 2: Olvidar la raíz cuadrada

**Por qué parece correcto**

El alumno recuerda que la velocidad es proporcional al cociente módulo/densidad y calcula directamente ese cociente sin extraer la raíz.

**Por qué es incorrecto**

El resultado sin raíz cuadrada tiene unidades de m²/s² (no m/s) y da valores absurdamente altos (millones de m/s, superiores a la velocidad de la luz).

**Señal de detección**

El resultado de [[v_fase]] tiene órdenes de magnitud de 10⁶ o superiores, o las unidades no cuadran dimensionalmente.

**Corrección conceptual**

La fórmula siempre incluye la raíz cuadrada. Verificar dimensionalmente: √(Pa / (kg/m³)) da m/s. Sin la raíz, Pa/(kg/m³) da m²/s², que no son unidades de velocidad.

**Mini-ejemplo de contraste**

Con [[modulo_de_young]] de 200 GPa y [[rho]] de 7800 kg/m³: sin raíz se obtiene 25.6 × 10⁶ m²/s² (no tiene sentido). Con raíz: 5064 m/s (valor correcto y con las unidades adecuadas).


### Error 3: Usar unidades inconsistentes

**Por qué parece correcto**

El alumno obtiene los datos de diferentes fuentes: el módulo en GPa y la densidad en g/cm³, y los sustituye directamente sin convertir al sistema internacional.

**Por qué es incorrecto**

Si [[modulo_de_young]] se deja en GPa (10⁹ Pa) pero [[rho]] se deja en g/cm³ (10³ kg/m³) sin conversión coherente, los factores 10⁹ y 10³ pueden cancelarse parcialmente dando resultados que parecen razonables pero son incorrectos.

**Señal de detección**

El resultado difiere en un factor √10, √100 o √1000 del valor tabulado.

**Corrección conceptual**

Convertir todo al sistema internacional antes de sustituir: [[modulo_de_young]] en Pa, [[rho]] en kg/m³. El resultado saldrá directamente en m/s.

**Mini-ejemplo de contraste**

Aluminio: si se sustituye [[modulo_de_young]] como 69 (sin 10⁹) y [[rho]] como 2.7 (sin 10³), se obtiene √(69/2.7) ≈ 5.05 m/s, que es absurdamente bajo. Con las unidades correctas: √(69×10⁹/2700) ≈ 5055 m/s.

## Errores de modelo


### Error 4: Aplicar la fórmula de barra delgada a un medio extenso

**Por qué parece correcto**

La fórmula de barra delgada es más simple y aparece primero en los libros de texto. El alumno la aplica a cualquier sólido sin considerar su geometría.

**Por qué es incorrecto**

En un medio extenso (dimensiones transversales comparables o mayores que la longitud de onda), la velocidad longitudinal es mayor que en barra delgada porque el material circundante impide la expansión lateral. La velocidad en medio extenso incorpora el coeficiente de Poisson y puede ser un 10% a 20% mayor.

**Señal de detección**

La velocidad calculada para un bloque macizo es inferior al valor medido experimentalmente o tabulado para ese material en geometría extensa.

**Corrección conceptual**

Identificar la geometría: si el frente de onda cubre una sección mucho mayor que la longitud de onda, usar el módulo de onda plana en lugar de [[modulo_de_young]] solo. Para acero, la velocidad en medio extenso es de unos 5900 m/s frente a 5064 m/s en barra.

**Mini-ejemplo de contraste**

Acero: velocidad en barra delgada ([[modulo_de_young]] sola) unos 5064 m/s. Velocidad en medio extenso (módulo de onda plana) unos 5900 m/s. La diferencia del 16% puede ser significativa en ensayos de precisión.

## Errores matemáticos

### Error: Olvidar la raíz cuadrada en la fórmula de velocidad

La fórmula de velocidad de fase incluye siempre una raíz cuadrada del cociente entre el módulo elástico y la densidad. Un error algebraico frecuente es calcular directamente [[modulo_de_young]] dividido entre [[rho]] sin extraer la raíz. El resultado tiene unidades de m²/s² en lugar de m/s y da valores absurdamente altos (del orden de millones). Si [[v_fase]] supera 50000 m/s en un sólido, casi con certeza falta la raíz cuadrada.

### Error: Errores de conversión de unidades

Al usar datos de tablas, [[modulo_de_young]] suele darse en GPa y [[rho]] en g/cm³. Si se sustituyen directamente sin convertir a Pa y kg/m³, los factores 10⁹ y 10³ se cancelan parcialmente y el resultado puede parecer razonable pero está equivocado. Siempre convertir al sistema internacional antes de sustituir.

## Errores de interpretación


### Error 5: Creer que la [[frecuencia]] cambia al cambiar de medio

**Por qué parece correcto**

El alumno observa que la longitud de onda cambia cuando la onda pasa a otro medio y concluye que la [[frecuencia]] también debe cambiar.

**Por qué es incorrecto**

La [[frecuencia]] la fija la fuente y se conserva en todas las interfaces. Lo que cambia es [[lambda]] porque [[v_fase]] es diferente en cada medio. La condición de continuidad temporal en la interfaz impone que la [[frecuencia]] sea la misma a ambos lados.

**Señal de detección**

El alumno calcula frecuencias diferentes a ambos lados de una interfaz, o modifica [[frecuencia]] al cambiar de material.

**Corrección conceptual**

La [[frecuencia]] se conserva siempre. Al cambiar de medio: [[lambda]] nueva es igual a la nueva [[v_fase]] dividida entre la misma [[frecuencia]]. Solo cambia la longitud de onda, nunca la [[frecuencia]].

**Mini-ejemplo de contraste**

Onda de 1 MHz pasando de aluminio (velocidad 5055 m/s, longitud de onda 5.06 mm) a acero (velocidad 5900 m/s, longitud de onda 5.90 mm). La [[frecuencia]] sigue siendo 1 MHz en ambos medios; solo la longitud de onda se adapta.

## Regla de autocontrol rápido

Antes de dar por bueno un cálculo de velocidad de onda en sólidos, verificar:
1. [[v_fase]] está entre 50 y 12000 m/s para sólidos reales.
2. La velocidad transversal es siempre menor que la longitudinal en el mismo material.
3. Las unidades del resultado son m/s y el análisis dimensional cuadra.
4. Si el material es un fluido, solo hay onda longitudinal (la transversal no existe).
5. Si la [[frecuencia]] se mantiene igual a ambos lados de una interfaz, el cálculo es coherente.