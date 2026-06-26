# Ejemplo tipo examen

## Enunciado

Un patinador A de masa [[m1]] de 60 kg se mueve a una velocidad [[v1i]] de 4 m/s hacia la derecha sobre hielo liso. Un patinador B de masa [[m2]] de 80 kg está en reposo. Los dos patinadores chocan y se abrazan formando un único bloque (colisión totalmente inelástica). Determinar la velocidad final común [[vf]] del conjunto inmediatamente después del choque. Verificar que el sistema es aislado justificando la elección de la frontera. Calcular la [[variacion_momento_total]] total y comprobar que el balance del sistema se mantiene constante.

## Datos

- Masa individual [[m1]] de A: 60 kg
- Velocidad individual [[v1i]] de A: 4 m/s (sentido positivo)
- Masa individual [[m2]] de B: 80 kg
- Velocidad individual [[v2i]] de B: 0 m/s (en reposo)
- Tipo de colisión: inelástica total (quedan unidos)
- Fuerza externa neta [[fuerza_externa_neta]] horizontal: nula (hielo sin fricción)

## Definición del sistema

Definimos el sistema como el conjunto {patinador A + patinador B}. Las fuerzas del choque son internas al sistema: A ejerce fuerza sobre B y B ejerce fuerza sobre A en igual magnitud y sentido contrario. La fricción del hielo durante el breve instante de contacto es despreciable. Las fuerzas verticales (gravedad y normal) se cancelan entre sí. En consecuencia, la [[fuerza_externa_neta]] horizontal sobre el sistema es nula: el sistema está aislado en la dirección del movimiento. El [[momento_lineal_total]] del sistema debe conservarse.

## Modelo físico

Cada cuerpo aporta su [[momento_lineal_individual]], calculado mediante la fórmula de definición básica:

{{f:P}}

Aplicamos el principio de conservación cuando el [[impulso_externo]] es nulo. Para el cálculo del estado inicial del sistema usamos la fórmula fórmula de momento inicial, que suma los momentos individuales. El estado final se describe mediante la fórmula de acoplamiento condición de aislamiento. La condición de sistema aislado (fórmula **p**) garantiza que la [[variacion_momento_total]] (fórmula variación total de momento) sea estrictamente nula.

## Justificación del modelo

El modelo es válido porque el intervalo del choque es muy corto (milisegundos). Durante ese [[tiempo]], cualquier fuerza externa de fricción actuaría durante tan poco [[tiempo]] que el impulso resultante sería despreciable comparado con las enormes fuerzas de contacto internas. Esta es la aproximación de impulso: en colisiones rápidas, las fuerzas internas dominan y el sistema puede tratarse como aislado con un error despreciable.

## Resolución simbólica

Antes de calcular, verificamos que el sistema está aislado aplicando la condición de nulidad de fuerza externa:

{{f:cond}}

El [[momento_lineal_individual]] de cada cuerpo se define mediante la relación, donde [[m]] es la masa y [[v]] la velocidad de cada cuerpo:

{{f:P}}

Para hallar la velocidad final común [[vf]], utilizamos la igualdad de estados dinámicos:

{{f:cond}}

El momento inicial del sistema se calcula sumando las contribuciones de cada patinador:

{{f:pi}}

Para el caso general de colisión no inelástica donde los cuerpos no quedan unidos, la velocidad final [[v1f]] del cuerpo 1 se obtiene del balance:

{{f:general_1d_balance}}

En el caso particular de una explosión desde el reposo, la ley de retroceso establece:

{{f:recoil_law}}

La condición de sistema aislado asegura que la diferencia entre el estado final e inicial es cero:

{{f:DeltaP}}

## Sustitucion numérica

**Momento inicial:**
Al multiplicar la masa de A (60 kg) por su velocidad (4 m/s) y sumarle el momento de B (80 kg por 0 m/s), obtenemos un [[Pinitial]] de 240 kg·m/s.

**Velocidad final común:**
Dividiendo el momento inicial (240) entre la [[masa_total]] de los dos patinadores (140 kg), resulta una velocidad [[vf]] de aproximadamente 1,71 m/s.

**Verificación:**
El momento final [[Pfinal]] es el producto de la masa total (140) por la velocidad común (1,71), lo que devuelve 240 kg·m/s. La resta entre ambos estados es cero, confirmando que la [[variacion_momento_total]] es nula.

## Validación dimensional

La velocidad final obtenida (1,71 m/s) tiene las unidades correctas de metros por segundo. El valor es físicamente coherente, ya que es menor que la velocidad inicial del patinador A (4 m/s) pero positiva, indicando que el conjunto sigue moviéndose hacia la derecha pero con mayor inercia debido a la masa del patinador B.

## Interpretación física

La velocidad del conjunto es mucho menor que la velocidad inicial de A. Esto indica que el momento inicial de A se ha redistribuido en una masa mucho mayor (140 kg frente a los 60 kg iniciales). El [[momento_lineal_total]] se conserva porque no actúan fuerzas externas horizontales. La condición **p** se cumple, por lo tanto, lo que el patinador A pierde en velocidad, el sistema lo compensa ganando masa en movimiento, manteniendo el producto total constante.

# Ejemplo de aplicación real

## Contexto

En la reconstrucción de accidentes de tráfico, los peritos usan la conservación del momento para determinar velocidades antes del impacto. Si dos vehículos colisionan y quedan unidos, la velocidad común tras el choque permite calcular la velocidad original.

## Estimación física

Consideremos un vehículo A (1200 kg a 15 m/s) que choca contra un vehículo B (1500 kg en reposo). El [[momento_lineal_individual]] inicial del vehículo A es 18000 kg·m/s. El [[impulso_externo]] horizontal es nulo durante el instante del impacto. Aplicando la fórmula de acoplamiento inelástico, el conjunto se moverá a unos 6,7 m/s. **Orden de magnitud**: esta velocidad equivale a unos 24 km/h, un valor razonable para estimar la trayectoria de frenado posterior. La estimación confirma que, para masas del orden de 10³ kg y velocidades de decenas de m/s, los momentos son del orden de 10⁴ kg·m/s.

## Interpretación

La conservación del momento indica que la masa y la velocidad antes del impacto determinan completamente el estado dinámico posterior. Esto significa que un vehículo más pesado detenido absorbe una gran fracción de la velocidad del impactador, demostrando que la [[variacion_momento_total]] total es nula durante el brevísimo instante de la colisión.



