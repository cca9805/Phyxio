# Errores Comunes en Densidad

## Errores conceptuales

### Error 1: Confusión entre masa total y densidad
**por qué parece correcto**: Un objeto masivo (como un barco) genera una impresión visual de "pesadez" que el cerebro asocia instintivamente con una alta densidad.
**por qué es incorrecto**: La densidad [[rho]] es una propiedad intensiva; depende de la relación m/V, no de la cantidad total de materia. Un barco flota porque su densidad media (incluyendo el aire en su interior) es menor que la del agua, a pesar de tener miles de toneladas de masa.
**señal de detección**: El alumno afirma que un objeto se hundirá "porque pesa mucho", sin considerar el volumen que ocupa.
**corrección conceptual**: Recuerde que la densidad mide la concentración de masa, no la acumulación. Un iceberg gigante es menos denso que un pequeño perdigón de plomo.
**mini-ejemplo**: 
- *Equivocado*: "El transatlántico se hunde porque tiene mucha masa".
- *Correcto*: "El transatlántico flota porque su masa total dividida por su volumen total es menor que la del agua".

### Error 2: Creer que la densidad de un líquido es inmutable
**por qué parece correcto**: En la mayoría de los problemas de hidrostática elemental, el agua siempre se toma como 1000 kg/m al cubo, lo que crea la falsa ilusión de que es una constante física universal.
**por qué es incorrecto**: La densidad de cualquier fluido cambia con la temperatura y, en menor medida, con la presión. El agua a 90^circC es significativamente menos densa que a 4^circC.
**señal de detección**: Se ignora la dilatación térmica en problemas donde hay cambios significativos de temperatura.
**corrección conceptual**: La densidad es una función del estado termodinámico, con [[rho]] dependiente de presión y temperatura. Para líquidos, el efecto de la temperatura es el dominante.
**mini-ejemplo**:
- *Fallo*: Usar la misma densidad para agua fría y agua hirviendo en un balance de masa preciso.
- *Realidad*: El agua caliente ocupa más volumen para la misma masa, por lo que su densidad es menor.

## Errores de modelo

### Error 3: Aplicar el modelo de fluido homogéneo a mezclas no miscibles
**por qué parece correcto**: Es tentador promediar las densidades de dos líquidos (como agua y aceite) para obtener una "densidad del sistema".
**por qué es incorrecto**: Si los fluidos no se mezclan, no forman un medio continuo homogéneo. Habrá una interfaz clara y cada fase mantendrá su propia densidad [[rho]].
**señal de detección**: Se intenta calcular una única presión hidrostática usando un promedio de densidades en un tanque estratificado.
**corrección conceptual**: En sistemas multifásicos, cada fluido debe tratarse por separado con su propio valor de [[rho]].
**mini-ejemplo**:
- *Límite*: Suponer que una mezcla de 1 L de mercurio y 1 L de agua tiene una densidad de (13.6 + 1)/2 = 7.3 g/cm al cubo.
- *Alternativa*: Hay dos capas; la presión en el fondo es la suma de las presiones de cada capa individual.

## Errores matemáticos

### Error 4: Inversión de la fórmula (V/m en lugar de m/V)
**por qué parece correcto**: Ante la presión de un examen, el alumno puede recordar vagamente que "es una división" y colocar los términos de forma aleatoria.
**por qué es incorrecto**: La definición física exige masa por unidad de volumen. Invertir la fórmula nos da el **volumen específico**, que es una magnitud distinta.
**señal de detección**: El análisis dimensional da unidades de m al cubo/kg, lo cual es el inverso de lo esperado.
**corrección conceptual**: Piense siempre en la unidad: "kilogramos por cada metro cúbico". El "por" indica división por el volumen.
**mini-ejemplo**:
- *Sin sentido*: Dividir el volumen entre la masa y obtener un valor muy bajo, incompatible con un líquido ordinario.
- *Con sentido*: Dividir la masa entre el volumen y obtener una masa volumétrica de 500 kg/m al cubo.

## Errores de interpretación

### Error 5: No distinguir entre densidad absoluta y gravedad específica ([[SG]])
**por qué parece correcto**: Ambos números suelen ser parecidos en magnitud cuando se trabaja en unidades de g/cm al cubo (donde la densidad del agua es 1).
**por qué es incorrecto**: [[rho]] tiene unidades (kg/m al cubo); [[SG]] es adimensional. Confundirlos provoca errores masivos cuando se trabaja en el Sistema Internacional.
**señal de detección**: El alumno dice que la gravedad específica del mercurio es "13.6 kg/m al cubo".
**corrección conceptual**: La gravedad específica es un ratio. Multiplique [[SG]] por la densidad del agua (1000) para obtener la densidad absoluta.
**mini-ejemplo**:
- *Confusión*: "La densidad es 0.8". (¿0.8 qué? ¿0.8 kg/m al cubo es aire o 0.8 g/cm al cubo es aceite?).
- *Claridad*: "La gravedad específica es 0.8, por lo tanto la densidad es 800 kg/m al cubo".

## Regla de autocontrol rápido
Antes de entregar un resultado, pase el fluido por el **Filtro de los Tres Estados**:
1. ¿Es un **gas**? Su densidad debe estar cerca de 1 kg/m al cubo. Si le da 1000, ha calculado un líquido.
2. ¿Es un **líquido**? Su densidad debe estar cerca de 1000 kg/m al cubo. Si le da 1, ha calculado un gas.
3. ¿El objeto **flota**? Su densidad debe ser menor que la del medio. Si le da mayor y el problema dice que flota, revise el signo o el despeje.
Si el resultado obtenido para el agua es 1 kg/m al cubo, ha olvidado el factor de conversión de litros a metros cúbicos.
