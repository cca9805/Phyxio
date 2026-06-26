const e=`# Modelos en Mecánica de Rotación\r
\r
## Modelo ideal\r
El modelo fundamental en este bloque es el **Sólido Rígido**. Se define como un sistema de partículas cuyas distancias relativas permanecen constantes bajo cualquier fuerza externa o [[torque]] aplicado. Este modelo permite simplificar el movimiento de billones de átomos en un solo vector de rotación y un [[momento-de-inercia]] constante, evitando la necesidad de analizar cada partícula por separado. Es la piedra angular que nos permite aplicar las leyes de Newton a objetos extensos con una elegancia matemática superior.\r
\r
En el sólido rígido, se asume que no existen deformaciones elásticas ni plásticas, lo que implica que el trabajo realizado por las fuerzas internas es nulo durante la rotación. Esta abstracción es extraordinariamente útil porque reduce los infinitos grados de libertad de un cuerpo real a solo seis en el espacio (tres de traslación y tres de rotación), facilitando enormemente el cálculo de trayectorias, energías y equilibrios en sistemas mecánicos complejos.\r
\r
## Hipótesis\r
1. **Invariabilidad geométrica absoluta**: El objeto mantiene su forma y volumen bajo cualquier condición de carga mecánica.\r
2. **Eje de rotación bien definido**: El giro ocurre respecto a una línea recta (eje), que puede ser fija en el espacio o desplazarse manteniendo su orientación.\r
3. **Distribución de masa estable**: La densidad del objeto no cambia durante el movimiento, lo que garantiza que el [[momento-de-inercia]] sea una propiedad geométrica constante para un eje dado.\r
4. **Ausencia de efectos relativistas o cuánticos**: Las velocidades son mucho menores que c (\r
\r
{{f:relacion-lineal-angular-v}}\r
\r
) y las escalas son macroscópicas.\r
\r
## Dominio de validez cuantitativo\r
Este modelo es extremadamente preciso para objetos cotidianos como poleas de acero, ruedas de madera y engranajes metálicos. Se considera válido cuando la tensión de trabajo permanece por debajo del 60% del límite elástico del material y la deformación relativa máxima cumple epsilon menor que 0.001 (0.1%).\r
\r
Criterio cuantitativo explícito: para acero estructural con límite elástico típico de 250 MPa, la zona segura de uso del modelo rígido se toma como sigma menor que 150 MPa. Además, si la deformación relativa alcanza 0.005 (0.5%) o más, se abandona el modelo de sólido rígido y se adopta un modelo deformable.\r
\r
En términos cinemáticos, una condición operativa útil es mantener la aceleración centrípeta por debajo de 5000 metros por segundo al cuadrado en el borde del rotor para evitar regímenes donde la flexión dinámica altere de forma apreciable el valor efectivo de [[momento-de-inercia]].\r
\r
## Señales de fallo del modelo\r
- **Deformación visible o estructural**: Si una rueda se vuelve elíptica o se ensancha debido a la fuerza centrífuga, el modelo de sólido rígido deja de ser aplicable.\r
- **Vibraciones y resonancias internas**: La aparición de modos vibracionales indica que las distancias internas ya no son constantes.\r
- **Cambio dinámico en la distribución de masa**: Si el objeto cambia de forma voluntariamente (como un gimnasta) o involuntariamente (como un fluido en un tanque), el [[momento-de-inercia]] deja de ser constante.\r
- **Disipación térmica por histéresis**: Si el objeto se calienta significativamente debido a deformaciones internas repetidas, la energía no se conserva solo mecánicamente.\r
\r
## Modelo extendido o alternativo\r
Para sistemas que no cumplen estas hipótesis, recurrimos a la **Mecánica de Sólidos Deformables** (Elasticidad y Plasticidad) o la **Mecánica de Fluidos**. Estos modelos incluyen parámetros como el módulo de Young, el coeficiente de Poisson o la viscosidad para describir cómo el objeto cambia de forma mientras gira. **Se debe abandonar el modelo de sólido rígido y conviene cambiar de modelo deformable cuando las deformaciones relativas superan el 0.5\\% de la dimensión característica del objeto**, o cuando el cuerpo entra en régimen plástico.\r
\r
## Comparación operativa\r
Mientras que el sólido rígido permite resolver problemas mediante ecuaciones diferenciales ordinarias relativamente sencillas (\r
\r
{{f:segunda-ley-rotacion}}\r
\r
), los modelos deformables requieren el uso de tensores de tensión y deformación, resolviéndose habitualmente mediante el método de elementos finitos (MEF). El modelo de sólido rígido es la aproximación de "orden cero" esencial: proporciona la solución base sobre la cual se añaden luego las correcciones por deformación si la precisión del problema así lo requiere.\r
\r
### Transición a modelos extendidos\r
La transición desde el modelo de sólido rígido hacia modelos más complejos ocurre bajo las siguientes condiciones:\r
1. **Sólido Deformable**: Se debe cambiar a este modelo cuando las fuerzas centrífugas o los torques aplicados producen deformaciones relativas superiores al 0.1% de las dimensiones del cuerpo.\r
2. **Dinámica No Lineal**: Si el eje de giro no coincide con un eje principal de inercia y no está restringido, el sistema entrará en un régimen de precesión y nutación compleja que requiere un tratamiento vectorial completo (ecuaciones de Euler).\r
3. **Mecánica Cuántica**: Cuando el momento angular del sistema es del orden de la constante de Planck hbar, el modelo clásico falla y debe transicionarse a una descripción cuántica del espín y la rotación.`;export{e as default};
