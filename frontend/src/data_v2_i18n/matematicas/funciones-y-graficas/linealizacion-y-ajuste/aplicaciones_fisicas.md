# Aplicaciones fisicas

## 1. Resortes

Aparece al ajustar fuerza frente a estiramiento. Se calcula la pendiente `k`, que significa constante elastica del muelle. El error peligroso es incluir deformaciones grandes donde el muelle ya no obedece una ley lineal y concluir una constante falsa.

## 2. Gases

Aparece al representar presion frente a temperatura o volumen inverso. Se calcula una constante de proporcionalidad que conecta el gas con el modelo ideal. El resultado significa comportamiento compatible con una ley simple. El error peligroso es mezclar temperaturas Celsius con escalas absolutas cuando el modelo requiere kelvin.

## 3. Decaimiento y enfriamiento

Aparece al graficar `ln(y)` frente al tiempo. Se calcula una tasa de decaimiento o constante temporal. El resultado significa perdida proporcional al estado actual. El error peligroso es ajustar una recta al dato original y convertir una tasa relativa en una tasa absoluta falsa.

## 4. Campos e intensidad

Aparece en leyes de potencia, como intensidad frente a distancia. Se calcula un exponente mediante grafica log-log. El resultado significa como cambia la magnitud al escalar la distancia. El error peligroso es ignorar offsets o fondo experimental antes de tomar logaritmos.

## 5. Calibracion instrumental

Aparece al comparar lectura de un sensor con valores conocidos. Se calcula pendiente de calibracion y corte. El resultado permite convertir lecturas en magnitudes reales. El error peligroso es borrar el corte porque molesta, cuando puede representar offset sistematico.
