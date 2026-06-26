const e=`# Ejemplo tipo examen

## Enunciado

Un bloque de [[m]] = 12 kg se arrastra sobre un piso horizontal mediante una cuerda que aplica una fuerza de modulo [[Fm]] = 80 N con un angulo [[theta]] = 35 deg respecto del eje horizontal. Se pide obtener las componentes [[Fx]] y [[Fy]] de la fuerza aplicada, reconstruir el modulo desde componentes y discutir como cambia el contacto vertical cuando [[Fy]] aumenta.

Ademas, para enlazar con el caso de plano inclinado, considera un segundo escenario: el mismo bloque se ubica sobre una rampa de [[theta]] = 20 deg sin empuje externo, con [[g]] = 9.81 m/s^2. Calcula [[Ppar]] y [[Pperp]] para interpretar tendencia al deslizamiento y carga normal.

## Datos

- Caso horizontal: [[Fm]] = 80 N, [[theta]] = 35 deg.
- Caso inclinado: [[m]] = 12 kg, [[g]] = 9.81 m/s^2, [[theta]] = 20 deg.
- Magnitudes de apoyo para lectura fisica: [[N]], [[fk]], [[muk]], [[a]], [[T]], [[W]].
- Convencion: eje x horizontal positivo hacia la derecha, eje y positivo hacia arriba.

## Definicion del sistema

Sistema 1: bloque sobre superficie horizontal con una fuerza oblicua. Sistema 2: bloque sobre rampa con ejes rotados, uno paralelo a la rampa y otro perpendicular. En ambos casos el objetivo del leaf es convertir una fuerza vectorial en componentes escalares que permitan decidir causa fisica dominante en cada eje.

## Modelo fisico

Se adopta un modelo de cuerpo rigido puntual con gravedad uniforme [[g]] y descomposicion en ejes ortogonales. Para el caso horizontal, las componentes de la fuerza aplicada se obtienen con proyecciones trigonometrica estandar:

{{f:comp_cartesianas}}

{{f:comp_cartesianas_fx}}

{{f:comp_cartesianas_fy}}

Si conocemos componentes, el modulo se reconstruye por pitagoras:

{{f:modulo_desde_componentes}}

Para el caso inclinado, el peso total [[W]] = [[m]]*[[g]] se separa en componente paralela y perpendicular a la rampa:

{{f:comp_plano_inclinado}}

{{f:comp_plano_inclinado_paralela}}

{{f:comp_plano_inclinado_perpendicular}}

Esta arquitectura conecta directamente la lectura grafica con el balance dinamico: [[Ppar]] impulsa el deslizamiento, [[Pperp]] condiciona el contacto y por tanto el rango de [[N]] y de [[fk]] = [[muk]]*[[N]].

## Justificacion del modelo

El modelo es valido porque la geometria angular esta declarada y los ejes se eligen de forma consistente con cada escenario. En el caso horizontal, [[theta]] se mide desde x; por eso seno y coseno se asignan segun la proyeccion sobre x e y. En el caso inclinado, [[theta]] es el angulo de la rampa, por lo que el peso se reparte en [[Ppar]] y [[Pperp]].

La ventaja didactica es que el mismo patron matematico se aplica en contextos distintos: una fuerza externa inclinada y una fuerza peso sobre ejes rotados. Esa continuidad evita memorizar recetas separadas.

El limite del modelo aparece cuando el angulo de referencia no coincide con el declarado, cuando la superficie cambia y obliga a introducir [[fk]] variable, o cuando se usan valores de [[muk]] sin validar si el movimiento es estatico o cinetico. En ese punto, se requiere ampliar el modelo de contacto.

## Resolucion simbolica

Caso horizontal:

1) Obtener [[Fx]] y [[Fy]] desde [[Fm]] y [[theta]].

{{f:comp_cartesianas_fx}}

{{f:comp_cartesianas_fy}}

2) Verificar consistencia reconstruyendo [[Fm]].

{{f:modulo_desde_componentes}}

3) Lectura fisica: si [[Fy]] sube, la carga efectiva vertical sobre el piso baja; eso modifica [[N]] y, por extension, el maximo [[fk]] disponible.

Caso inclinado:

1) Descomponer peso en ejes de rampa.

{{f:comp_plano_inclinado_paralela}}

{{f:comp_plano_inclinado_perpendicular}}

2) Coherencia global del reparto.

{{f:comp_plano_inclinado}}

3) Lectura fisica: [[Ppar]] compite con friccion y determina signo de [[a]] sobre la rampa; [[Pperp]] determina rango de [[N]] y condiciona estabilidad de contacto.

## Sustitucion numerica

Caso horizontal:

- [[Fx]] = 80*cos(35 deg) = 65.5 N
- [[Fy]] = 80*sin(35 deg) = 45.9 N
- Reconstruccion: [[Fm]] = sqrt(65.5^2 + 45.9^2) = 80.0 N (redondeo)

Caso inclinado:

- [[W]] = [[m]]*[[g]] = 12*9.81 = 117.72 N
- [[Ppar]] = 12*9.81*sin(20 deg) = 40.3 N
- [[Pperp]] = 12*9.81*cos(20 deg) = 110.6 N

Lectura de impacto en contacto:

- Con [[muk]] de 0.20, la friccion disponible es proporcional a [[N]].
- Con [[N]] aprox [[Pperp]], [[fk]] aprox 22.1 N.
- Como [[Ppar]] = 40.3 N > [[fk]], la tendencia es deslizar con [[a]] no nula hacia abajo.

## Validacion dimensional

- Las componentes [[Fx]] y [[Fy]] mantienen unidad de newton, coherente con una proyeccion de fuerza.
- La reconstruccion de modulo conserva unidad de fuerza y respeta la estructura pitagorica del vector.
- En plano inclinado, el producto de [[m]] por [[g]] mantiene unidad de fuerza para [[Ppar]] y [[Pperp]].
- En contacto, [[fk]] depende de [[muk]] y [[N]], con [[muk]] adimensional.

Todas las expresiones mantienen coherencia de unidades, por lo que el error residual probable no es dimensional sino geometrico (referencia angular) o de signo.

## Interpretacion fisica

La clave del leaf no es solo calcular numeros, sino separar causalidad por ejes. [[Fx]] controla el efecto horizontal neto de la fuerza aplicada; [[Fy]] modifica la carga vertical y por tanto cambia el margen de adherencia. En rampa, [[Ppar]] es la porcion del peso que empuja al movimiento y [[Pperp]] la porcion que comprime el contacto.

Este reparto explica decisiones de ingenieria: para reducir deslizamiento no basta aumentar [[m]]; hay que intervenir en [[muk]] o en [[theta]], porque esos terminos cambian de forma directa el balance [[Ppar]] versus [[fk]]. Tambien explica por que dos situaciones con mismo [[W]] pueden tener dinamicas distintas: la geometria redistribuye la misma fuerza total en componentes con roles fisicos diferentes.

En diagnostico, el test mas robusto es comprobar que ningun componente supera en modulo al vector total y que la suma vectorial reconstruye [[Fm]] o [[W]]. Si esa consistencia falla, el problema no esta en la fisica del sistema sino en la eleccion de ejes o funciones trigonometricas.

# Ejemplo de aplicacion real

## Contexto

En una planta de empaquetado, una caja de [[m]] = 18 kg sube por una banda inclinada 15 deg mientras un rodillo motorizado aplica una tension [[T]] inclinada respecto de la banda para mantener ritmo constante. El equipo de mantenimiento necesita interpretar por que, en ciertos turnos, la caja patina al inicio aunque el motor entregue el mismo torque nominal.

Para responder, registran angulo de banda, humedad superficial (que altera [[muk]]), corriente del motor y velocidad de la banda. El objetivo no es solo calcular una fuerza, sino identificar variable dominante de la perdida de adherencia.

## Estimacion fisica

Orden de magnitud rapido:

- [[W]] = [[m]]*[[g]] aprox 176.6 N.
- [[Ppar]] = [[m]]*[[g]]*sin(15 deg) aprox 45.7 N.
- [[Pperp]] = [[m]]*[[g]]*cos(15 deg) aprox 170.6 N.

Si en turno seco [[muk]] = 0.35, el umbral de friccion cinetica equivalente es [[fk]] aprox 59.7 N, superior a [[Ppar]], por lo que el sistema no deberia patinar. Si en turno humedo [[muk]] cae a 0.20, [[fk]] aprox 34.1 N, menor que [[Ppar]], y aparece deslizamiento inicial. Esta estimacion cuantitativa permite anticipar fallo sin esperar paro de linea.

Adicionalmente, la orientacion de [[T]] cambia el reparto en ejes. Si el operador reajusta mal el angulo del rodillo, parte de [[T]] deja de ayudar al eje paralelo y se desperdicia en componente perpendicular, modificando [[N]] y el balance de adherencia.

## Interpretacion

La lectura fisica operativa es clara: la variable que explica el salto de comportamiento no es el torque nominal del motor sino la combinacion geometria-contacto, dominada por [[muk]] y por el reparto de componentes de [[T]] y [[W]]. Con igual potencia, un pequeno cambio en humedad o en angulo efectivo puede mover el sistema de regimen estable a regimen con patinaje.

El protocolo recomendado es medir [[theta]], estimar [[Ppar]] y [[Pperp]], y comparar [[Ppar]] con el margen de friccion estimado [[fk]]. Si el margen es bajo, se corrige superficie o tension antes de subir velocidad. Esta estrategia reduce paradas, evita desgaste prematuro y conecta directamente el calculo del leaf con decisiones de mantenimiento.

La misma metodologia se reutiliza en cintas de mineria, ascensores inclinados y transporte aeroportuario de equipaje: primero se descompone, luego se identifica componente dominante, y por ultimo se decide accion sobre el parametro mas sensible.
`;export{e as default};
