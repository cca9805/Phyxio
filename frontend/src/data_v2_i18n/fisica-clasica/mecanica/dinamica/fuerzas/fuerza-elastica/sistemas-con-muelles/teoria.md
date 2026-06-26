# Sistemas con muelles

## Contexto conceptual

Este leaf responde una pregunta de diseño muy concreta: como cambia la respuesta global de un sistema elastico cuando los muelles se conectan en serie o en paralelo. La clave no es memorizar una suma, sino entender que la topologia modifica la rigidez equivalente [[keq]] y, con ella, el comportamiento completo del sistema.

En un sistema con muelles, la magnitud global [[keq]] convive con magnitudes locales como [[k1]], [[k2]], [[x1]], [[x2]], [[F1]] y [[F2]]. Tambien aparecen magnitudes de lectura global como [[Fel]], [[Fm]] y [[x]], y en configuraciones verticales entran [[m]], [[g]] y [[x_eq]]. El valor didactico del leaf esta en integrar esas capas en una narrativa unica y coherente.

Este enfoque permite pasar de la intuicion mecanica a decisiones trazables: elegir arquitectura, validar dominio lineal y justificar por que una configuracion cumple mejor el objetivo fisico del problema.

## 🟢 Nivel esencial

En nivel esencial, piensa en dos preguntas practicas:

1. ¿Quiero que el sistema sea mas blando o mas rigido?
2. ¿Me importa mas repartir deformacion o repartir fuerza?

La conexion serie suele aumentar cumplimiento mecanico: para una misma carga, la deformacion total suele crecer. La conexion paralelo suele aumentar rigidez: para una misma deformacion, la fuerza total crece. Esta intuicion ya permite decisiones preliminares sin entrar aun en algebra detallada.

Tambien es esencial distinguir variables globales y locales. El sistema completo tiene una respuesta agregada, pero cada componente interno puede trabajar en condiciones distintas. Ignorar esta distincion provoca errores de seguridad: un resultado global razonable puede ocultar sobrecarga local.

Por ultimo, en vertical no basta con "funciona o no"; se evalua hundimiento estatico y margen disponible de recorrido. Esta lectura conceptual prepara la transicion al nivel formal sin saturar el arranque con simbolos.

## 🔵 Nivel formal

El nucleo formal de este leaf esta en siete relaciones complementarias:

**Ley de Hooke equivalente (vectorial):**

{{f:hooke_equivalente_1d}}

**Ley de Hooke equivalente (modulo):**

{{f:hooke_equivalente_modulo}}

**Rigidez equivalente en paralelo:**

{{f:paralelo_dos_muelles}}

**Rigidez equivalente en serie:**

{{f:serie_dos_muelles}}

**Reparto de deformacion en serie:**

{{f:reparto_serie}}

**Reparto de fuerza en paralelo:**

{{f:reparto_paralelo}}

**Posicion de equilibrio vertical:**

{{f:equilibrio_vertical}}

Estas relaciones no compiten entre si; se encadenan segun la pregunta del problema. Una ruta tipica es:

1. Elegir topologia y calcular [[keq]] con serie o paralelo.
2. Pasar a respuesta global con [[Fel]] o [[Fm]] a partir de [[x]].
3. Si se requiere detalle interno, calcular [[x1]], [[x2]], [[F1]], [[F2]].
4. Si el montaje es vertical, estimar [[x_eq]] usando [[m]] y [[g]].

La ventaja formal de este encadenamiento es que evita mezclar niveles de descripcion. Primero estructura, luego respuesta global, despues reparto interno y finalmente condicion de montaje.

Un segundo beneficio formal es la verificabilidad. Cada etapa produce un chequeo parcial: comparacion de [[keq]] con [[k1]] y [[k2]], coherencia de signo entre [[Fel]] y [[x]], cierre de reparto con [[x1]] y [[x2]] o con [[F1]] y [[F2]], y lectura de hundimiento [[x_eq]] frente al recorrido util. Estos chequeos intermedios reducen errores acumulados y convierten la resolucion en un proceso auditable.

## 🔴 Nivel estructural

El nivel estructural responde cuando dejar de confiar en el modelo lineal ideal. Cuatro señales practicas:

1. Curva fuerza-deformacion con pendiente variable en el rango operativo.
2. Historesis notable entre carga y descarga.
3. Reparto interno incompatible con limites individuales de componente.
4. Diferencia sistematica entre medicion y prediccion por encima de tolerancia.

Cuando eso ocurre, no se "ajusta" la respuesta con parches numericos sin base fisica. Se declara fin de dominio y se migra a modelo alternativo: rigidez por tramos, viscoelasticidad o curva experimental directa.

Este criterio protege la unicidad del leaf: aqui se estudia arquitectura elastica lineal y su lectura operativa; el salto a fenomenos no lineales se hace de forma explicita, no encubierta.

En entornos de diseño real, este nivel estructural tambien organiza la comunicacion entre equipos. El analista de ensayo reporta si la hipotesis lineal se mantiene, el analista de calculo reporta sensibilidad de [[keq]] y reparto interno, y el responsable de producto decide si el riesgo residual es aceptable. Cuando esa cadena se corta, el proyecto suele terminar en sobrecostes por retrabajo.

Tambien conviene distinguir fallo de modelo y fallo de montaje. Si el cierre interno no se cumple, primero se revisa fijacion mecanica, holgura y unidades; solo despues se concluye que el modelo lineal no alcanza. Esta disciplina evita descartar un modelo valido por una implementacion deficiente.

Por ultimo, el nivel estructural aporta criterio de escalamiento. No todo desvio exige un modelo complejo: si el error es pequeño y dentro del margen de aplicacion, el modelo ideal puede seguir siendo suficiente para la decision en curso. El criterio correcto es "precisión necesaria para la decision", no "maxima complejidad posible".

## Interpretación física profunda

La interpretacion profunda pide leer el sistema como compromiso entre sensibilidad y robustez. Si aumenta [[keq]], disminuye desplazamiento bajo carga pero crece fuerza para una deformacion dada. Si disminuye [[keq]], mejora absorcion de desplazamiento pero puede crecer hundimiento estatico [[x_eq]] en montaje vertical.

Otra lectura clave es local vs global. [[Fm]] total puede parecer segura mientras una rama acumula carga excesiva en [[F1]] o [[F2]]. O bien [[x]] total puede parecer aceptable mientras [[x1]] excede limite elastico local. Por eso la interpretacion profesional nunca se queda solo en la variable equivalente.

Tambien debe mantenerse coherencia causal: la fuerza restauradora [[Fel]] se opone a la deformacion [[x]]. Si el signo no respeta ese principio, hay error de convension o de modelado.

## Orden de magnitud

Referencias utiles para chequeo rapido:

**[[Fel]]**: 0.1 - 10000 N

**[[Fm]]**: 0 - 10000 N

**[[keq]]**: 1 - 1e6 N/m

**[[k1]]**: 1 - 100000 N/m

**[[k2]]**: 1 - 100000 N/m

**[[x]]**: 0.001 - 1 m

**[[x1]]**: 0.001 - 0.5 m

**[[x2]]**: 0.001 - 0.5 m

**[[F1]]**: 0 - 5000 N

**[[F2]]**: 0 - 5000 N

**[[m]]**: 0.01 - 1000 kg

**[[g]]**: 9.78 - 9.83 m/s^2 (Tierra)

**[[x_eq]]**: 0.001 - 0.5 m

Estos rangos no reemplazan validacion experimental, pero sirven para detectar rapidamente errores de unidades o de topologia.

## Método de resolución personalizado

1. Identificar arquitectura (serie, paralelo o mixta).
2. Calcular [[keq]] con la relacion adecuada.
3. Obtener respuesta global [[Fel]] o [[Fm]] frente a [[x]].
4. Calcular reparto interno [[x1]], [[x2]], [[F1]], [[F2]] cuando sea relevante.
5. En vertical, verificar [[x_eq]] con [[m]] y [[g]].
6. Cerrar con chequeo de signo, orden de magnitud y validez del rango lineal.

## Casos especiales y ejemplo extendido

Caso limite util: [[k1]] mucho menor que [[k2]] en serie. En ese extremo, [[keq]] queda dominada por el muelle blando y [[x1]] concentra la mayor parte de la deformacion. En paralelo ocurre lo contrario: la rama mas rigida aporta mayor fraccion de fuerza.

Ejemplo extendido recomendado: resolver un mismo problema en serie y paralelo con igual [[x]], luego comparar [[Fm]], reparto interno y [[x_eq]] bajo una misma [[m]] vertical. Ese contraste fija de forma robusta la intuicion del leaf.

## Preguntas reales del alumno

**¿Serie siempre es mejor para absorber golpes?**
No siempre. Depende del recorrido disponible y del limite de carga de cada componente.

**¿Puedo ignorar [[F1]] y [[F2]] si ya tengo [[Fm]]?**
No en diseño real. Las cargas de rama pueden definir el fallo local.

**¿Por que [[x_eq]] importa en reposo?**
Porque condiciona margen dinamico antes de cualquier excitacion adicional.

**¿Si el calculo cierra numericamente ya termine?**
Falta validar dominio lineal y coherencia fisica del reparto interno.

## Conexiones transversales y rutas de estudio

Conecta de forma directa con ley de Hooke local, energia mecanica, vibraciones lineales y diseño de suspensiones. Dominar este leaf simplifica decisiones en problemas donde la arquitectura de elementos elasticos domina la respuesta global.

Ruta sugerida: primero contraste serie/paralelo, luego reparto interno, despues equilibrio vertical, y finalmente validacion de limites del modelo.

## Síntesis final

La idea central es clara: en sistemas con muelles, la topologia cambia la fisica efectiva. El parametro [[keq]] resume el sistema, pero una solucion completa exige revisar magnitudes internas y limites de validez.

Con ese enfoque, este leaf deja de ser una coleccion de formulas y se convierte en un metodo de modelado para tomar decisiones tecnicas con trazabilidad fisica.
