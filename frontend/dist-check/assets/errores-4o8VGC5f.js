const e=`## Errores conceptuales

### Error 1: Confundir atenuación con dispersión geométrica

**Por qué parece correcto**
El estudiante observa que la amplitud disminuye con la distancia y asume que toda la pérdida se debe al material mismo. Esta generalización es natural porque en la práctica ambos efectos ocurren simultáneamente y el resultado neto es una disminución de la señal.

**Por qué es incorrecto**
La dispersión geométrica es un efecto puramente geométrico independiente de las propiedades del material. En un haz divergente, la energía se distribuye sobre un área mayor, reduciendo la densidad de energía sin conversión a calor. La atenuación verdadera del material implica disipación irreversible de energía.

**Señal de detección**
Si al cambiar el diámetro del transductor o la distancia al foco modifica el valor calculado de [[alpha]], probablemente se está atribuyendo dispersión geométrica a atenuación material.

**Corrección conceptual**
La atenuación total es la suma de dispersión geométrica más atenuación intrínseca del material. Para obtener [[alpha]] verdadero, primero debe compensarse matemáticamente el efecto geométrico conocido según la geometría del haz.

**Mini-ejemplo de contraste**
Un estudiante mide la misma pieza con dos transductores de diferente diámetro y obtiene valores distintos de [[alpha]]. Concluye que el material cambió sus propiedades. Lo correcto es que la dispersión geométrica es diferente; al compensarla, ambos casos dan el mismo [[alpha]] material.

### Error 2: Asumir que la atenuación es lineal con la distancia

**Por qué parece correcto**
Para distancias cortas donde la exponencial puede aproximarse linealmente, el estudiante observa una relación aproximadamente proporcional y extrapola incorrectamente a todo el rango.

**Por qué es incorrecto**
La atenuación sigue una ley exponencial, no lineal. La aproximación lineal solo es válida para distancias mucho menores que la longitud de atenuación [[L_d]].

**Señal de detección**
Si el gráfico de amplitud vs distancia es curvo en lugar de recto, o si las predicciones lineales fallan sistemáticamente para distancias grandes.

**Corrección conceptual**
La relación correcta es exponencial. Solo en el límite de pequeñas distancias ([[x]] << [[L_d]]) la aproximación lineal es válida con pendiente proporcional a [[alpha]].

**Mini-ejemplo de contraste**
Un estudiante predice que a 10 cm la amplitud será la mitad que a 5 cm. En realidad, con [[alpha]] de 0.1 Np/m, a 5 cm la amplitud es 60% del inicial y a 10 cm es 37%, no 30% como predice el modelo lineal.

## Errores de modelo

### Error 3: Usar el modelo exponencial en medios con gradientes

**Por qué parece correcto**
El estudiante aplica la fórmula exponencial universalmente sin verificar la homogeneidad del material, asumiendo que todas las piezas siguen el mismo modelo simple.

**Por qué es incorrecto**
En materiales con gradientes de propiedades (zonas templadas, composición variable), [[alpha]] no es constante con la posición, invalidando la solución exponencial simple.

**Señal de detección**
Si el gráfico ln([[A]]/[[A0]]) vs distancia no es una línea recta sino una curva, o si diferentes regiones de la misma pieza dan valores distintos de [[alpha]].

**Corrección conceptual**
Para medios no homogéneos, debe usarse la forma integral con la integral del coeficiente de atenuación sobre la distancia, o dividir el problema en regiones homogéneas con diferentes [[alpha]].

**Mini-ejemplo de contraste**
En una pieza tratada superficialmente, el estudiante usa un único [[alpha]] y predice la misma atenuación para todo el espesor. En realidad, la zona endurecida tiene [[alpha]] tres veces mayor, haciendo que la atenuación real sea mucho mayor que la predicha.

### Error 4: Ignorar la dispersión en materiales con alta frecuencia

**Por qué parece correcto**
El estudiante usa la misma velocidad para todas las frecuencias, asumiendo que el medio es no dispersivo como en los casos simples estudiados anteriormente.

**Por qué es incorrecto**
En muchos materiales reales, especialmente a frecuencias altas (>5 MHz), la velocidad de fase depende de la frecuencia, causando distorsión de pulsos y afectando la medición de amplitud.

**Señal de detección**
Si pulsos cortos se ensanchan significativamente con la distancia, o si la velocidad medida depende de la frecuencia del transductor.

**Corrección conceptual**
Debe considerarse la relación de dispersión del material, usando [[v_f]] para cálculos de longitud de onda y [[v_g]] para propagación de pulsos.

**Mini-ejemplo de contraste**
Un estudiante mide la velocidad con un transductor de 2 MHz y obtiene 5900 m/s. Con uno de 10 MHz obtiene 5700 m/s. Concluye que hay error experimental, cuando en realidad es dispersión normal del material.

## Errores matemáticos

### Error 5: Confundir logaritmo natural con logaritmo base 10

**Por qué parece correcto**
El estudiante usa la función log de su calculadora sin verificar si es natural o base 10, asumiendo que ambas dan el mismo resultado numérico.

**Por qué es incorrecto**
La relación entre amplitudes y [[alpha]] usa logaritmo natural, mientras que las pérdidas en decibelios usan logaritmo base 10. Intercambiarlos introduce un error de factor 2.303.

**Señal de detección**
Si los valores de [[alpha]] calculados son consistentemente 2.3 veces mayores o menores que los valores tabulados del material.

**Corrección conceptual**
Para extraer [[alpha]] de mediciones de amplitud usar ln([[A]]/[[A0]]), para cálculos en dB usar 20·log10([[A]]/[[A0]]). No intercambiar las fórmulas.

**Mini-ejemplo de contraste**
Un estudiante calcula [[alpha]] usando log10 en lugar de ln y obtiene 0.23 Np/m cuando el valor real es 0.53 Np/m. Su predicción de penetración es el doble de la real.

### Error 6: Olvidar el signo negativo en el exponente

**Por qué parece correcto**
El estudiante se enfoca en la magnitud de la atenuación y descuida el signo, escribiendo la relación exponencial sin el exponente negativo en lugar de incluir el signo negativo en el exponencial.

**Por qué es incorrecto**
El signo negativo es fundamental: sin él la amplitud crecería exponencialmente con la distancia, violando la conservación de la energía.

**Señal de detección**
Si los cálculos predicen amplitudes mayores que la inicial a distancias positivas, o si [[alpha]] calculado resulta negativo.

**Corrección conceptual**
La atenuación siempre reduce la amplitud, por lo tanto el exponente debe ser negativo en la relación exponencial.

**Mini-ejemplo de contraste**
Un estudiante predice que a 5 cm una señal será el doble de intensa que en la superficie. Esto violaría la termodinámica; el resultado correcto es que será menor, nunca mayor.

## Errores de interpretación

### Error 7: Interpretar la longitud de atenuación como profundidad máxima

**Por qué parece correcto**
El estudiante asume que [[L_d]] es la distancia máxima a la cual puede realizarse el ensayo, tomando el límite físico como límite práctico.

**Por qué es incorrecto**
[[L_d]] es la distancia donde la amplitud se reduce a 37%, no donde se vuelve indetectable. La profundidad útil depende del umbral del equipo, típicamente 3-5 veces [[L_d]].

**Señal de detección**
Si se concluye que un material no puede inspeccionarse más allá de [[L_d]] cuando en la práctica se obtienen ecos a distancias mayores.

**Corrección conceptual**
[[L_d]] es una escala característica, no un límite absoluto. La profundidad máxima de detección depende del umbral de ruido del equipo y es generalmente varias veces [[L_d]].

**Mini-ejemplo de contraste**
Para [[L_d]] de 2 cm, el estudiante concluye que no puede inspeccionar más allá de 2 cm. En realidad, con equipo sensible puede detectar ecos hasta 6-10 cm, aunque con amplitud muy reducida.

### Error 8: No considerar la dependencia de [[alpha]] con la temperatura

**Por qué parece correcto**
El estudiante usa valores de [[alpha]] medidos a temperatura ambiente sin considerar que la pieza puede estar a diferente temperatura durante el ensayo.

**Por qué es incorrecto**
En muchos materiales, especialmente polímeros, [[alpha]] varía drásticamente con la temperatura, pudiendo cambiar por factores de 10 o más.

**Señal de detección**
Si los resultados de atenuación son inconsistentes entre mediciones realizadas en diferentes momentos o condiciones ambientales.

**Corrección conceptual**
Debe registrarse la temperatura y aplicar factores de corrección si el ensayo se realiza a temperaturas diferentes de las de calibración.

**Mini-ejemplo de contraste**
Un estudiante caracteriza un polímero a 20°C con [[alpha]] de 50 Np/m. Durante el ensayo a 60°C, usa el mismo valor y predice profundidad de 10 cm. En realidad, a 60°C [[alpha]] es 500 Np/m, limitando la penetración a 1 cm.

## Regla de autocontrol rápido

Para verificar que el tratamiento de la atenuación es correcto, siga esta secuencia de verificación:

Primero, confirme que la relación entre amplitud y distancia es exponencial graficando ln([[A]]/[[A0]]) vs [[x]]; debe obtener una línea recta. Segundo, verifique que el [[alpha]] calculado sea positivo y constante en todo el rango. Tercero, asegúrese de haber compensado la dispersión geométrica antes de atribuir pérdidas al material. Cuarto, compruebe que está usando logaritmo natural para cálculos de [[alpha]] y logaritmo base 10 para decibelios. Finalmente, verifique que la profundidad de detección estimada sea varias veces [[L_d]], no igual a [[L_d]].

Si alguno de estos puntos falla, revise el procedimiento antes de aceptar los resultados.
`;export{e as default};
