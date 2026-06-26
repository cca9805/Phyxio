const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Una partícula se mueve sobre el plano y, en un instante, su estado se entrega en forma polar con [[r]]=3.2 m y [[theta]]=2.20 rad. El examen pide: convertir a coordenadas cartesianas [[x]] y [[y]], verificar coherencia dimensional y de cuadrante, y justificar si la representación elegida es adecuada para una situación con o sin ligadura radial. Además, se pide estimar grados de libertad para un sistema tridimensional de [[n]]=2 entidades con [[C]]=3 ligaduras independientes.\r
\r
## Datos\r
\r
- Magnitudes de posición: [[x]], [[y]], [[r]], [[theta]].\r
- Magnitudes estructurales: [[n]], [[C]], [[f]].\r
- Convención angular: positiva antihoraria desde eje x positivo.\r
- Supuesto de unidades: distancia en metros, ángulo en radianes.\r
\r
## Definición del sistema\r
\r
El sistema base es una partícula puntual en un dominio plano euclídeo. Esa definición permite expresar el mismo estado con pares de variables equivalentes. Si no hay ligadura adicional, el estado posicional requiere dos variables independientes. Si se impone radio fijo, el conjunto independiente se reduce.\r
\r
La segunda parte del ejercicio usa un sistema estructural diferente, con entidades discretas tridimensionales, para aplicar conteo de grados de libertad y contrastar representación geométrica con independencia real.\r
\r
## Modelo físico\r
\r
El modelo físico usa relaciones de proyección entre [[r]], [[theta]] y las componentes [[x]], [[y]]. También usa regla de conteo estructural para [[f]]. Las magnitudes núcleo se conectan así: [[r]] determina escala espacial; [[theta]] determina orientación; [[x]] y [[y]] son proyecciones; [[n]] y [[C]] determinan independencia efectiva.\r
\r
{{f:posicion_generalizada}}\r
\r
{{f:velocidad_generalizada}}\r
\r
{{f:energia_cinetica_generalizada}}

En esta capa, [[q]] fija la configuración elegida y [[qdot]] describe su cambio temporal. El mapa devuelve [[r_vec]], su derivada devuelve [[v]] y, con [[m]], permite evaluar [[T]] sin confundir rapidez física con velocidad de una coordenada. Si el mapa depende de [[t]], esa dependencia también contribuye a la velocidad.

{{f:x_desde_polar}}
\r
{{f:y_desde_polar}}\r
\r
{{f:radio_cartesiano}}\r
\r
{{f:grados_libertad}}\r
\r
## Justificación del modelo\r
\r
El modelo vale porque describe dos tareas distintas con ecuaciones de significado físico directo: cambio de representación geométrica y conteo de independencia estructural. Es válido mientras se mantengan las hipótesis: plano euclídeo para conversiones, convención angular explícita y ligaduras independientes para el conteo.\r
\r
Dejaría de valer sin ajustes si las ligaduras fueran no holónomas, si se mezclaran unidades de [[theta]], o si la configuración estuviera en una región donde la parametrización elegida no fuera estable para la interpretación requerida.\r
\r
## Resolución simbólica

Primero, se declara la capa generalizada que da sentido físico a la elección de coordenadas:

{{f:posicion_generalizada}}

{{f:velocidad_generalizada}}

{{f:energia_cinetica_generalizada}}

Después, la proyección polar a cartesiana se usa como ejemplo operativo dentro de esa carta:
\r
{{f:x_desde_polar}}\r
\r
{{f:y_desde_polar}}\r
\r
Segundo, verificación de reconstrucción radial:\r
\r
{{f:radio_cartesiano}}\r
\r
Tercero, conteo estructural de independencia:\r
\r
{{f:grados_libertad}}\r
\r
Estas relaciones se usan de manera encadenada para conservar causalidad física: orientación y escala producen proyecciones, y estructura de ligaduras produce dimensión efectiva.\r
\r
## Sustitución numérica\r
\r
Con [[r]]=3.2 m y [[theta]]=2.20 rad, se aproximan coseno y seno como cos(2.20)≈-0.588 y sin(2.20)≈0.809.\r
\r
Entonces:\r
- [[x]]≈3.2*(-0.588)=-1.88 m.\r
- [[y]]≈3.2*(0.809)=2.59 m.\r
\r
Reconstrucción:\r
- [[r]]_rec≈sqrt((-1.88)^2+(2.59)^2)=sqrt(3.53+6.71)=sqrt(10.24)=3.20 m.\r
\r
Conteo estructural con [[n]]=2 y [[C]]=3:\r
- [[f]]=3*2-3=3.\r
\r
Interpretación intermedia: en el plano para una sola partícula sin ligadura radial hay dos coordenadas independientes posicionales; en el ejemplo estructural 3D con dos entidades y tres ligaduras quedan tres grados de libertad efectivos.\r
\r
## Validación dimensional\r
\r
La dimensión de [[x]] y [[y]] debe ser longitud. Como [[r]] tiene unidad de metro y seno/coseno son adimensionales, las proyecciones conservan unidad de metro. El chequeo de reconstrucción radial mantiene dimensión de longitud por raíz de suma de cuadrados homogéneos.\r
\r
Para el conteo de [[f]], [[n]] y [[C]] son adimensionales enteros, por lo que [[f]] también es adimensional. Si alguna entrada de conteo no fuera entero no negativo, la lectura física sería inválida.\r
\r
## Interpretación física\r
\r
El resultado [[x]]<0 y [[y]]>0 confirma que el estado está en segundo cuadrante, coherente con [[theta]]=2.20 rad. Esto aporta una validación física adicional más allá de la aritmética: la orientación angular realmente explica el signo de las proyecciones.\r
\r
Si [[r]] aumentara manteniendo [[theta]] fijo, [[x]] y [[y]] crecerían proporcionalmente en magnitud sin cambiar de signo. Si [[theta]] cambiara de cuadrante con [[r]] fijo, cambiaría el reparto entre proyección horizontal y vertical. Esa sensibilidad muestra por qué [[r]] y [[theta]] son coordenadas útiles cuando la geometría tiene estructura radial.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un equipo de simulación desarrolla un módulo para inspección orbital de una herramienta alrededor de un eje. Inicialmente, el motor numérico usa [[x]] y [[y]] como estados dinámicos y aplica una corrección de radio en cada paso para mantener trayectoria circular. El sistema funciona en casos simples, pero en escenarios de alta frecuencia introduce ruido numérico acumulativo.\r
\r
Se decide rediseñar el modelo: usar [[theta]] como estado principal y tratar [[r]] como parámetro fijo cuando la ligadura radial es dominante. Luego, reconstruir [[x]] y [[y]] solo para visualización y telemetría.\r
\r
## Estimación física\r
\r
Benchmark interno de 5000 pasos:\r
- Modelo cartesiano corregido: error radial medio 3.4 mm y tiempo relativo 1.00.\r
- Modelo con coordenada generalizada angular: error radial medio 1.1 mm y tiempo relativo 0.68.\r
\r
La reducción de error no proviene de una mejor integración aislada, sino de la eliminación de redundancia de estado. Al modelar independencia real, el sistema necesita menos compensaciones numéricas y mantiene mejor coherencia geométrica.\r
\r
## Interpretación\r
\r
La decisión física es clara: cuando la ligadura principal fija [[r]], usar [[theta]] como coordenada generalizada dominante mejora estabilidad y lectura causal. Las coordenadas cartesianas siguen siendo útiles, pero como salidas derivadas, no como núcleo dinámico redundante.\r
\r
Este caso muestra continuidad con teoría y modelo: seleccionar coordenadas por estructura del sistema, no por costumbre de representación. El impacto práctico es doble: cálculo más robusto y argumentos más defendibles al justificar por qué una variable se elige como estado independiente.
`;export{e as default};
