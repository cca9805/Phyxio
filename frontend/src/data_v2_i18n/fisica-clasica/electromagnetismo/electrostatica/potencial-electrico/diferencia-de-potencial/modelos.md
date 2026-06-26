## Modelo ideal

El modelo estándar de la diferencia de potencial trata el campo eléctrico como un campo conservativo en el vacío. [[diferencia_de_potencial]] se define como el trabajo por unidad de carga positiva que el campo realiza al mover una carga de A a B, siendo este trabajo independiente de la trayectoria elegida.

Para el caso de campo uniforme —el más frecuente en bachillerato— el modelo simplifica el cálculo: la diferencia de potencial es proporcional al campo y a la proyección del desplazamiento sobre la dirección del campo. Esta simplificación conserva toda la física relevante para sistemas con simetría plana.

## Hipótesis

- Las cargas fuente están en reposo: régimen electrostático, sin corrientes variables.
- El medio es el vacío o un dieléctrico lineal homogéneo e isótropo: la permitividad es constante en el espacio y en el tiempo.
- El campo eléctrico es conservativo: la circulación del campo sobre cualquier camino cerrado es nula.
- La carga de prueba [[carga_de_prueba]] es suficientemente pequeña para no perturbar el campo que se mide.
- En el caso de campo uniforme: la distribución de carga tiene simetría plana y los efectos de borde son despreciables.

Violar cualquiera de estas hipótesis invalida el modelo en mayor o menor medida: campos variables en el tiempo destruyen el carácter conservativo; medios inhomogéneos cambian la permitividad local; cargas de prueba grandes perturban el campo fuente.

## Dominio de validez cuantitativo

El modelo conservativo clásico es aplicable dentro de estas condiciones cuantitativas:

- **Régimen quasi-estático**: la frecuencia de variación del campo debe cumplir f < 1 MHz para dimensiones de laboratorio menores de 1 m, garantizando que la contribución magnética al potencial sea despreciable (< 1 % del potencial escalar).
- **Escala energética**: las diferencias de potencial deben ser inferiores a 0.511 MV, por encima de la cual la QED modifica el comportamiento del vacío.
- **Escala de distancias**: la integración clásica es válida para r > 10⁻¹⁰ m; a distancias menores los efectos cuánticos son dominantes.
- **Aproximación de campo uniforme**: la fórmula campo por distancia introduce un error inferior al 1 % cuando las dimensiones laterales de las placas son al menos 10 veces mayores que la separación [[distancia_entre_puntos]].

## Señales de fallo del modelo

El modelo deja de ser aplicable ante los siguientes síntomas observables:

- La diferencia de potencial medida entre dos puntos depende de la trayectoria del instrumento: señal inequívoca de campo no conservativo (campo variable en el tiempo o campo magnético inducido).
- El campo calculado supera 3×10⁶ N/C en presencia de aire: se produce ruptura dieléctrica y el vacío clásico deja de ser válido como modelo del medio.
- Los resultados cambian significativamente al desplazar las cargas fuente con la misma geometría nominal: indica que la carga de prueba está perturbando el campo.
- Los cálculos de campo uniforme dan resultados distintos cerca de los bordes del condensador respecto al centro: efecto de borde activo, modelo de campo uniforme invalido en esa región.

## Modelo extendido o alternativo

Cuando el régimen quasi-estático no es suficiente, se emplea el modelo electromagnético completo de Maxwell. En este modelo, el potencial escalar ya no basta y debe complementarse con un potencial vectorial magnético; la diferencia de potencial queda definida solo a lo largo de trayectorias específicas y depende del gauge elegido.

Una extensión práctica importante es el modelo de medios dieléctricos: en un material con permitividad relativa mayor que la unidad, la diferencia de potencial para la misma distribución de cargas libres se reduce, ya que las cargas ligadas del dieléctrico compensan parcialmente el campo eléctrico.

Cuando conviene pasar al modelo extendido: cuando la frecuencia del campo supera 1 MHz para dimensiones de laboratorio, o cuando el dieléctrico entre los electrodos no es homogéneo. Cambiar a la formulación completa de Maxwell cuando los efectos de inducción magnética son detectables en la medida.

## Comparación operativa

| Situación | Modelo adecuado | Precisión / Limitación |
|-----------|----------------|----------------------|
| Condensador plano en vacío, lejos de bordes | Campo uniforme: diferencia de potencial proporcional al campo y a la separación | Error inferior al 1 % para placas grandes |
| Carga puntual o distribución simétrica | Potencial de Coulomb: integración analítica de la fuerza por unidad de carga | No aplica en medios inhomogéneos |
| Campo oscilante, frecuencia superior a 1 MHz | Maxwell completo: potencial escalar más potencial vectorial magnético | Requiere elección de gauge |
| Medio dieléctrico con permitividad conocida | Modelo ideal con permitividad efectiva del material dieléctrico | Requiere conocer la permitividad relativa |