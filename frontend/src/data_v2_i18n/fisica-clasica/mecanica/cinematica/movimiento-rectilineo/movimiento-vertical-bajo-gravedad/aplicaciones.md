## 1. Seguridad en parques infantiles: altura de caída en un tobogán

En el diseño de un tobogán alto, un ingeniero no solo mira la estética o la longitud de la rampa. También necesita estimar qué ocurre si un niño pierde el contacto con una parte elevada y entra en un tramo de caída aproximadamente vertical. Si la diferencia de altura útil es de \( 1{,}8\;\text{m} \), el análisis del movimiento vertical bajo gravedad permite estimar la velocidad de llegada al final del tramo y valorar si la superficie de impacto debe amortiguar más energía.

Variable dominante: `h`, porque la altura disponible condiciona directamente la energía potencial inicial y el valor de la velocidad alcanzada al descender.

Límite de validez: este modelo solo es razonable si el tramo analizado puede tratarse como caída casi vertical y si el rozamiento con el aire sigue siendo despreciable frente al efecto de la gravedad.

---

## 2. Baloncesto: lectura del punto más alto en un tiro libre

Cuando un entrenador analiza un tiro libre grabado con cámara lenta, le interesa saber si el balón alcanza una altura suficiente antes de descender hacia el aro. En la vecindad del punto más alto, la velocidad vertical se anula durante un instante, aunque la gravedad sigue actuando. El modelo de movimiento vertical bajo gravedad ayuda a interpretar ese momento crítico y a distinguir entre “velocidad cero” y “aceleración cero”, que no significan lo mismo.

Variable dominante: `v`, porque el cambio de signo de la velocidad vertical marca la transición entre ascenso y descenso y permite identificar el máximo de la trayectoria.

Límite de validez: el análisis deja de ser puro movimiento vertical si se quiere describir toda la parábola del balón, porque entonces interviene también el componente horizontal y el problema pasa a ser bidimensional.

---

## 3. Drones de reparto: tiempo de descenso controlado

Un dron que libera una pequeña carga desde una altura conocida debe estimar cuánto tarda el paquete en llegar al suelo si, tras la liberación, el movimiento inicial puede aproximarse como vertical. En aplicaciones logísticas de baja altura, este cálculo sirve para sincronizar apertura de compuertas, alertas acústicas o sistemas de detección de impacto. Aquí el interés principal no está en la altura final, sino en la escala temporal del proceso.

Desde el punto de vista operativo, esta estimación temporal permite decidir márgenes de seguridad. Si el sistema libera la carga demasiado cerca del suelo, el paquete puede no estabilizarse antes del impacto; si la libera demasiado alto, aumenta el tiempo de exposición al viento lateral y a errores de puntería. Por eso el tiempo de caída no es un dato accesorio, sino una variable de diseño.

Variable dominante: `t`, porque la decisión operativa depende del tiempo de vuelo y no solo de la altura o de la velocidad instantánea.

Límite de validez: en cuanto la carga presenta mucha superficie o masa pequeña, el rozamiento con el aire deja de ser despreciable y el tiempo real de descenso se separa del valor predicho por caída libre ideal.

---

## 4. Ensayo de laboratorio: contraste entre velocidad y altura

En una práctica de bachillerato, un grupo lanza hacia arriba una esfera de acero y mide varias alturas y tiempos con una cámara de alta velocidad. El objetivo no es solo obtener un resultado final, sino comprobar que la relación entre altura y velocidad puede analizarse sin pasar siempre por el tiempo. En ese contexto, la ecuación de Torricelli se vuelve útil porque enlaza directamente el estado cinemático con la posición vertical.

Variable dominante: `v`, porque la comparación experimental se centra en cómo cambia la velocidad cuando cambia la altura, especialmente cerca del punto de subida máxima y durante la fase de descenso.

Límite de validez: el método exige que la referencia espacial esté bien calibrada y que el lanzamiento no introduzca oscilaciones laterales significativas, porque entonces la lectura ya no sería estrictamente unidimensional.

---

## 5. Ingeniería forense: reconstrucción de una caída desde marcas de impacto

En una investigación técnica, un perito puede necesitar estimar desde qué altura aproximada cayó una herramienta que impactó en una cubierta inferior. Si la evidencia disponible permite estimar la velocidad de impacto y el trayecto puede aproximarse como vertical, el modelo bajo gravedad proporciona una primera reconstrucción razonable del suceso. En este caso, el análisis no se usa para enseñar una fórmula, sino para reconstruir un episodio físico pasado a partir de magnitudes observables.

Además, una reconstrucción de este tipo puede servir para discriminar entre hipótesis incompatibles. Una marca de impacto puede corresponder a una caída libre simple, a un lanzamiento inicial hacia abajo o a una trayectoria alterada por contactos intermedios. El modelo vertical ideal no resuelve por sí solo toda la investigación, pero sí ofrece una primera criba física para separar escenarios plausibles de otros que no encajan con las magnitudes observadas.

Variable dominante: `h`, porque la pregunta práctica central es recuperar una altura inicial compatible con la velocidad final observada.

Límite de validez: esta reconstrucción preliminar falla si hubo rebotes, contacto previo con otras superficies, velocidad inicial vertical no conocida o efectos aerodinámicos apreciables durante la caída.
