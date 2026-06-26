## Modelo ideal

El modelo ideal utilizado en este leaf es el de **gas ideal monoatómico o diatómico clásico**. En esta aproximación, consideramos que el sistema está compuesto por partículas puntuales que no experimentan fuerzas de atracción ni de repulsión mutua, y cuyo volumen propio es absolutamente despreciable en comparación con el volumen total del contenedor.

Bajo estas premisas, la **energía interna** [[energia_interna]] se simplifica enormemente, ya que la energía potencial molecular debida a las interacciones a distancia se anula por completo. Así, la energía del sistema queda reducida exclusivamente a la **energía cinética molecular** de traslación (y rotación en el caso de gases diatómicos), dependiendo únicamente de la **[[temperatura]] absoluta** del sistema.

---

## Hipótesis

Para estructurar este modelo físico, asumimos las siguientes hipótesis fundamentales:
- **Partículas puntuales**: Las moléculas no ocupan volumen físico, lo que simplifica la geometría y las colisiones del sistema.
- **Ausencia de fuerzas intermoleculares**: No existen interacciones de largo alcance entre partículas. Si estas fuerzas existieran, la energía interna [[energia_interna]] variaría al cambiar la distancia promedio entre moléculas, haciendo que dependiera del volumen.
- **Choques elásticos**: Toda la energía cinética se conserva en las colisiones moleculares, impidiendo pérdidas hacia grados de libertad no contemplados.
- **Grados de libertad constantes**: Se asume que los coeficientes molares como [[capacidad_calorifica_a_volumen_constante]] no varían en el rango de temperaturas analizado.

---

## Dominio de validez cuantitativo

La aproximación de gas ideal presenta un dominio de validez bien delimitado por condiciones físicas de baja densidad:
- El modelo es sumamente preciso para presiones moderadas o bajas, típicamente por debajo de las 10 atmósferas.
- En términos de [[temperatura]], es aplicable siempre que la energía térmica del gas sea mucho mayor que la energía de enlace intermolecular. Cuantitativamente, para gases como el helio o el nitrógeno, esto se cumple en rangos donde la [[temperatura]] absoluta es mayor que el límite de condensación, es decir, para T > 5 K o T > 80 K respectivamente.
- Bajo estas condiciones, la desviación de la energía interna respecto al gas real es menor al 1 %, manteniendo el mismo **orden de magnitud** que la predicción teórica ideal.

---

## Señales de fallo del modelo

El estudiante o investigador puede identificar que el modelo de gas ideal ha fallado mediante los siguientes síntomas observables en los datos experimentales:
- **Dependencia del volumen**: Si al realizar una expansión isotérmica (donde la [[temperatura]] permanece constante) se detecta una variación de energía interna [[variacion_de_energia_interna]] distinta de cero o un intercambio de calor que no coincide con el trabajo medido.
- **Variación de la capacidad calorífica**: Si al medir el coeficiente molar [[capacidad_calorifica_a_volumen_constante]] a temperaturas elevadas, su valor aumenta debido a la activación de grados de libertad vibracionales moleculares que el modelo clásico considera inactivos.
- **Presión crítica superada**: Cuando la presión del sistema supera el umbral crítico de la sustancia, provocando que el gas se desvíe significativamente de la ley de proporcionalidad lineal entre [[energia_interna]] y [[temperatura]].

---

## Modelo extendido o alternativo

Para superar las limitaciones del modelo ideal, recurrimos a aproximaciones más robustas como la **ecuación de van der Waals** o el desarrollo virial. En estos modelos extendidos, se introduce un término de atracción intermolecular (parámetro de cohesión) y un volumen de exclusión física de las partículas (covolumen).

Como consecuencia, la energía interna [[energia_interna]] real incluye una contribución potencial negativa que depende inversamente del volumen molar. La variación de energía interna ya no es solo función de la [[temperatura]], sino que aumenta al expandir el gas real a [[temperatura]] constante debido al trabajo realizado contra las fuerzas atractivas.

> [!NOTE]
> **Cuando conviene pasar al modelo extendido**: esta transición es necesaria en aplicaciones industriales de alta presión, licuación de gases, criogenia extrema o cuando se trabaja con vapores densos próximos a su curva de saturación.

---

## Comparación operativa

A continuación se presenta una comparación entre el comportamiento del modelo ideal y el modelo real:

| Criterio | Modelo ideal de gas | Modelo de gas real (van der Waals) |
|---|---|---|
| **Dependencia de magnitudes** | Depende únicamente de la [[temperatura]] absoluta | Depende tanto de la [[temperatura]] absoluta como del volumen del sistema |
| **Energía potencial intermolecular** | Despreciable por completo (asume fuerzas de interacción nulas) | Considera la energía atractiva de cohesión como un término negativo |
| **Capacidad calorífica** | Constante e independiente de la [[temperatura]] | Variable con la [[temperatura]] debido a efectos cuánticos y vibracionales |
| **Precisión matemática** | Alta a bajas presiones y densidades diluidas | Elevada en rangos de alta densidad y cercanía al punto crítico |
| **Complejidad de cálculo** | Baja, con relaciones lineales sencillas | Media-alta, requiriendo integraciones respecto al volumen |