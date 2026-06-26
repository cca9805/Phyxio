# Ejemplo tipo examen: el tren y el andén

## Enunciado

Un tren se desplaza con velocidad constante de 12 m/s respecto al andén. Dentro del vagón, una pasajera camina hacia la parte delantera con velocidad constante de 1.5 m/s respecto al suelo del tren. En el instante inicial [[t_global]] = 0, el origen del marco del tren [[O']] coincide con la puerta del vagón, y esta puerta está a 48 m por delante del origen del marco del andén [[O]] . La pasajera está a 2 m por delante de la puerta dentro del vagón. Se pide hallar la posición de la pasajera respecto al andén y su velocidad respecto al andén al cabo de 4 s.

## Datos

Tomaremos dos marcos de referencia [[frame_sigma]] . El primero es el marco del andén (marco fijo), con origen [[O]] en una marca pintada sobre el suelo. El segundo es el marco del vagón (marco móvil), con origen [[O']] en la puerta del coche. Usaremos el mismo eje x positivo hacia la derecha para ambos marcos y el mismo tiempo clásico [[t_global]] .

Datos numéricos:
- Velocidad del marco móvil [[v_frame]] = 12 m/s.
- Velocidad de la pasajera en el marco móvil [[v_prime]] = 1.5 m/s.
- Posición inicial del origen móvil respecto al fijo x0 = 48 m.
- Posición inicial de la pasajera respecto al origen móvil posici?n interna inicial de 2 m.
- Tiempo de observación [[t_global]] = 4 s.

La ventaja de escribir los datos así es que ya se distingue que la [[v_frame]] pertenece al movimiento relativo entre marcos y que la [[v_prime]] pertenece a la posición de la pasajera dentro del tren. Si se mezclan esas dos capas demasiado pronto, el problema pierde sentido físico aunque la suma numérica final parezca limpia.

## Definición del sistema

El sistema físico relevante es la pasajera, pero la pregunta no puede responderse sin definir con precisión el observador. Por eso no basta con decir "la posición de la pasajera"; hay que especificar si es respecto al marco del andén o al marco del vagón [[frame_sigma]] . El origen [[O]] del andén y el origen [[O']] del vagón no son intercambiables. Cada uno fija su propia coordenada cero y su propia lectura de la posición [[r_vec]] .

## Modelo físico

Se adopta un modelo galileano con dos marcos que se mueven uno respecto al otro con velocidad constante [[v_frame]] . En este modelo el evento físico es único, pero su descripción cambia al cambiar de marco [[frame_sigma]] . La magnitud que se traduce entre marcos es la posición [[r_vec]] ; la magnitud que vincula ambos marcos es la [[v_frame]] ; y el parámetro común es el [[t_global]] .

## Justificación del modelo

Este modelo es válido porque el tren no acelera de forma apreciable durante el intervalo analizado, ambos ejes se consideran paralelos y no hace falta introducir efectos relativistas. El cambio de observador solo exige una traducción galileana. Despreciamos oscilaciones pequeñas de la marcha o variaciones en el paso de la pasajera, porque no cambian la idea física dominante: distinguir la velocidad propia de la pasajera dentro del tren de la velocidad del tren respecto al suelo.

## Resolución simbólica

Primero describimos a la pasajera en el marco del tren (móvil):
x'(t) = x'_0 + v' * t

Después, traducimos esa posición al marco del andén (fijo) usando la **transformación galileana de posición**:

{{f:trans_galileo_pos}}

Sustituyendo la expresión del movimiento interno en la transformación queda:
x(t) = (x'_0 + v' * t) + x_0 + v_f * t

Agrupando por significado físico:
x(t) = (x'_0 + x_0) + (v' + v_f) * t

Aparecen dos contribuciones: el desplazamiento inicial acumulado y el efecto de las velocidades sumadas. Para la velocidad respecto al andén [[v]] , aplicamos la **transformación galileana de velocidad**:

{{f:trans_galileo_vel}}

{{f:invarianza_tiempo}}

{{f:invarianza_distancia}}

## Sustitución numérica

La posición de la pasajera respecto al vagón al cabo de 4 s es:
x'(4) = 2 + 1.5 * 4 = 8 m

La posición del origen del vagón respecto al andén al mismo tiempo es:
x_{origen}(4) = 48 + 12 * 4 = 96 m

Por tanto, la posición total de la pasajera respecto al andén es:
x(4) = 8 + 96 = 104 m

La velocidad de la pasajera respecto al andén [[v]] es:
v = 1.5 + 12 = 13.5 m/s

## Validación dimensional

La ecuación de posición combina longitudes ([L]), mientras que la de velocidad conserva unidades de [L/T]. No hay incoherencia dimensional. Además, el signo es razonable: tanto la pasajera como el tren avanzan hacia la derecha, así que la velocidad respecto al andén debe ser mayor que la velocidad respecto al vagón y positiva.

## Interpretación física

El resultado x(4) = 104 m no significa que la pasajera haya "cambiado de realidad". Significa que la misma persona está siendo descrita desde otro marco [[frame_sigma]] , con otro origen [[O]] y con una parte adicional de movimiento debida al desplazamiento del marco móvil. La velocidad de 13.5 m/s tampoco contradice la de 1.5 m/s observada dentro del tren; ambas son correctas para sus respectivos observadores.

---

# Ejemplo de aplicación real: almacén automatizado

## Contexto

En un almacén automatizado, una cámara va montada sobre una plataforma móvil que recorre un pasillo a velocidad constante [[v_frame]] . La cámara debe identificar si una caja situada sobre una cinta secundaria se desplaza respecto a la plataforma o si está quieta en ella. Para el software de visión, necesita decidir desde qué marco [[frame_sigma]] está describiendo la escena.

## Estimación física

Tomamos una plataforma de 2 m/s y una caja de 0,3 m/s respecto a la plataforma; por tanto la lectura desde el suelo ronda 2,3 m/s, mientras que para el agarre local domina 0,3 m/s. Esta estimación cuantitativa muestra por qué elegir marco cambia la decisión de control.

La plataforma avanza a 2 m/s respecto al suelo, mientras la caja se mueve a solo 0.3 m/s respecto a la plataforma. Si el algoritmo confunde ambos niveles, concluirá que la caja se desplaza rápido aunque esté casi quieta respecto a la pinza del robot. El valor dominante para el seguimiento global es la [[v_frame]] , pero para el control de agarre local lo es la velocidad de la caja dentro del marco de la plataforma.

## Interpretación

La decisión operativa cambia con el marco elegido. Si el objetivo es evitar que la plataforma choque con un estante, interesa el marco fijo al suelo. Si el objetivo es cerrar la pinza sobre la caja, interesa un marco que acompañe a la plataforma y deje casi constante la posición [[r_vec]] relativa. El mismo evento produce dos descripciones útiles y ninguna es prescindible.
