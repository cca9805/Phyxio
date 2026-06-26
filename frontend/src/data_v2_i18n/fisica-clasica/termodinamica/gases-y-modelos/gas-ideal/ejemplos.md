# Ejemplo tipo examen

## Enunciado

Un cilindro con émbolo móvil contiene 2.00 mol de oxígeno gaseoso (O₂) a 27.0 °C y 1.50 atm. Se comprime el gas isocóricamente hasta que la presión alcanza 3.00 atm y, a continuación, se expande isotérmicamente hasta recuperar el volumen inicial. (a) Calcula el volumen inicial del gas. (b) Determina la temperatura al final de la compresión isocórica. (c) Calcula el volumen del gas al término de la expansión isotérmica.

## Datos

- Cantidad de sustancia ([[n]]): 2.00 mol
- Temperatura inicial ([[T]]₁): 300.15 K (27.0 °C)
- Presión inicial ([[P]]₁): 151 988 Pa (1.50 atm)
- Presión tras la compresión isocórica ([[P]]₂): 303 975 Pa (3.00 atm)
- Constante de los gases ([[R]]): 8.314 J/(mol·K)
- Proceso 1→2: isocórico ([[V]] constante)
- Proceso 2→3: isotérmico ([[T]] constante)
- Estado final: volumen igual al inicial

## Definición del sistema

Sistema: masa de O₂ encerrada en el cilindro (sistema cerrado, [[n]] = 2.00 mol constante en todo el proceso). El émbolo permite cambios de [[V]] en la segunda etapa, pero en la primera etapa se bloquea para mantener [[V]] fijo.

## Modelo físico

Se aplica la **ley del gas ideal** en cada estado.

{{f:ley_gas_ideal}}

- Etapa 1→2 (isocórico, [[V]] y [[n]] constantes): el cociente [[P]]/[[T]] se conserva.
- Etapa 2→3 (isotérmico, [[T]] y [[n]] constantes): el producto [[P]]·[[V]] se conserva.

Como [[n]] es constante en todo el proceso, la **ley combinada** es aplicable entre cualquier par de estados:

{{f:ley_combinada_gases}}

## Justificación del modelo

El oxígeno a 1.5–3 atm y temperaturas superiores a 300 K está muy alejado de su temperatura crítica (154 K) y de su punto de condensación. El factor de compresibilidad del O₂ en esas condiciones es Z ≈ 0.999, una desviación inferior al 0.1 %: el modelo de gas ideal es plenamente válido.

## Resolución simbólica

{{f:ley_gas_ideal}}

**Apartado (a):** [[V]]₁ es el cociente entre el producto [[n]]·[[R]]·[[T]]₁ y [[P]]₁. A mayor [[n]] o mayor [[T]], mayor [[V]]; a mayor [[P]], menor [[V]].

**Apartado (b):** Con [[V]] y [[n]] constantes, la ley de Gay-Lussac impone que [[T]]₂ es proporcional a [[T]]₁ y al cociente de presiones [[P]]₂/[[P]]₁. Al duplicar [[P]], la [[T]] se duplica.

**Apartado (c):** Con [[T]] y [[n]] constantes, la ley de Boyle impone que el producto [[P]]·[[V]] se conserva. Al terminar la expansión con [[V]]₃ = [[V]]₁, el sistema recupera exactamente el estado inicial en cuanto a [[V]], aunque [[P]] y [[T]] son distintas de las iniciales en términos del estado 2.

## Sustitución numérica

**Apartado (a):**

El producto [[n]]·[[R]]·[[T]]₁ vale 2.00 × 8.314 × 300.15 ≈ 4990 J. Dividiendo entre [[P]]₁ = 151 988 Pa se obtiene [[V]]₁ ≈ 0.03283 m³, equivalente a 32.83 L.

**Apartado (b):**

El cociente de presiones es 3.00/1.50 = 2.00. La temperatura final de la compresión isocórica es [[T]]₂ = 300.15 × 2.00 ≈ 600.3 K (equivalente a 327.2 °C). Al duplicar [[P]] a [[V]] fijo, la [[T]] se duplica exactamente.

**Apartado (c):**

En la expansión isotérmica ([[T]]₂ = 600.3 K, [[n]] = 2.00 mol) hasta el volumen inicial [[V]]₁ = 0.03283 m³: la [[P]] final de esta etapa es [[P]]₃ = [[n]]·[[R]]·[[T]]₂/[[V]]₁ = 2.00 × 8.314 × 600.3 / 0.03283 ≈ 303 980 Pa ≈ 3.00 atm. El sistema queda en el estado ([[P]]₃ ≈ 3 atm, [[V]]₃ = [[V]]₁, [[T]]₃ = [[T]]₂ ≈ 600 K): diferente del estado inicial en [[T]] y [[P]], igual en [[V]].

## Validación dimensional

Para el apartado (a), [[V]] es el cociente entre el producto [[n]]·[[R]]·[[T]] y [[P]]:

- Numerador: `[mol] · [J mol⁻¹ K⁻¹] · [K] = [J] = [Pa · m³]`
- Denominador: `[Pa]`
- Cociente: `[Pa · m³] / [Pa] = [m³]` ✓

## Interpretación física

El proceso isocórico (1→2) es un calentamiento a volumen fijo: la energía térmica aportada aumenta la velocidad media de las moléculas y, con ello, la frecuencia e intensidad de los choques contra las paredes; [[P]] se duplica al mismo ritmo que [[T]]. No hay trabajo mecánico en esta etapa porque el émbolo no se mueve.

La expansión isotérmica (2→3) mantiene la temperatura constante mediante intercambio de calor con el entorno. A medida que el émbolo avanza, el gas ocupa más espacio y los choques moleculares contra las paredes se distribuyen entre una área mayor: [[P]] disminuye. El producto [[P]]·[[V]] se mantiene constante porque la energía cinética media por molécula — fijada por [[T]] — no cambia. El estado final tiene el mismo [[V]] que el estado 1, pero [[T]] y [[P]] son el doble de los valores iniciales.

El ciclo completo ilustra que la historia del proceso importa: aunque [[V]] recupera su valor inicial, el gas no vuelve al estado termodinámico inicial porque [[T]] y [[P]] han cambiado. Solo se recuperaría el estado inicial completo si se añadiera una tercera etapa que devolviera [[T]] y [[P]] a sus valores de partida.

---

# Ejemplo de aplicación real

## Contexto

Un globo meteorológico se lanza desde tierra (presión exterior 1 atm, temperatura 15 °C) cargado con 3.50 mol de helio. Al alcanzar 8 km de altitud, la presión exterior desciende a 0.351 atm y la temperatura a −35 °C. La membrana del globo mantiene siempre [[P]] interior igual a la exterior. Se quiere estimar el volumen del globo al nivel del mar y a 8 km de altitud, y verificar si la ley del gas ideal es aplicable.

## Estimación física

La magnitud clave es [[V]] en cada etapa, con [[n]] = 3.50 mol fijo (membrana cerrada) y [[P]] igual a la presión exterior en cada altitud.

{{f:ley_gas_ideal}}

**Al nivel del mar** ([[P]] = 101 325 Pa, [[T]] = 288 K, [[n]] = 3.50 mol):

[[V]] es el cociente del producto [[n]]·[[R]]·[[T]] entre [[P]]. El resultado es [[V]] ≈ 0.0826 m³, equivalente a 82.6 L — el tamaño de un globo parcialmente inflado, coherente con un lanzamiento ordinario.

**A 8 km** ([[P]] = 35 565 Pa, [[T]] = 238 K, [[n]] = 3.50 mol):

[[V]] ≈ 0.219 m³, equivalente a 219 L. El **factor de expansión** es 219/82.6 ≈ 2.65: el globo se expande hasta 2.65 veces su volumen inicial. La caída de [[P]] (factor P₁/P₂ ≈ 2.85) domina sobre la caída de [[T]] (factor T₂/T₁ ≈ 0.826), produciendo una expansión neta.

## Interpretación

La expansión del globo al ascender resulta de la competencia entre dos efectos: la caída de [[P]] exterior (que tiende a expandir el globo) y la caída de [[T]] (que tiende a contraerlo). El factor neto de 2.65 refleja que la disminución de presión es el efecto dominante. Los globos meteorológicos se inflan solo parcialmente al lanzamiento precisamente para disponer de esta capacidad de expansión sin riesgo de reventarse antes de alcanzar la altitud objetivo.

El helio a estas condiciones (máximo 1 atm, temperatura mínima 238 K) está muy lejos de su temperatura crítica (5.2 K), de modo que Z ≈ 1.000: la ley del gas ideal es una aproximación excelente para este cálculo.
