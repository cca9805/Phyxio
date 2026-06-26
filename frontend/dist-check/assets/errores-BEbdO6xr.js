const e=`## Errores conceptuales

### Error 1: Creer que un espejo convexo puede formar imagenes reales

**Por que parece correcto**
El alumno sabe que los espejos concavos forman imagenes reales y generaliza: si un espejo curvo forma imagenes reales, otro espejo curvo tambien deberia poder hacerlo.

**Por que es incorrecto**
Un espejo convexo tiene foco virtual detras de la superficie. Los rayos reflejados siempre divergen y nunca convergen en un punto real. La imagen es siempre virtual, derecha y reducida, independientemente de donde se coloque el objeto.

**Senal de deteccion**
El alumno obtiene un valor positivo de [[d_i]] al resolver un problema con espejo convexo, o dibuja rayos que convergen delante del espejo convexo.

**Correccion conceptual**
En un espejo convexo, [[f]] es negativo. La ecuacion del espejo siempre da [[d_i]] negativo para [[d_o]] positivo y [[f]] negativo. La imagen se forma detras del espejo.

**Mini-ejemplo de contraste**
Con [[f]] igual a menos 0.10 m y [[d_o]] igual a 0.20 m, la ecuacion del espejo da [[d_i]] igual a menos 0.067 m. El signo negativo confirma imagen virtual, no real.

### Error 2: Pensar que la imagen en un espejo plano esta "en" la superficie del espejo

**Por que parece correcto**
El alumno ve su reflejo "en el espejo" y asocia la posicion de la imagen con la superficie fisica.

**Por que es incorrecto**
La imagen se forma a la misma distancia detras del espejo que el objeto delante de el. Si el objeto esta a 1 m del espejo, la imagen esta a 1 m detras del espejo, no en la superficie.

**Senal de deteccion**
El alumno afirma que la distancia de la imagen al espejo es cero, o dibuja la imagen sobre la superficie reflectante.

**Correccion conceptual**
Un espejo plano equivale a [[R]] infinito, [[f]] infinito. La ecuacion del espejo da [[d_i]] igual a menos [[d_o]]: la imagen esta tan lejos detras del espejo como el objeto delante.

**Mini-ejemplo de contraste**
Si el objeto esta a 2 m del espejo, la imagen esta a 2 m detras del espejo. La distancia total entre objeto e imagen es 4 m, no 2 m.

## Errores de modelo

### Error 3: Aplicar la ecuacion del espejo esferico a un espejo parabolico

**Por que parece correcto**
El alumno aprende una formula general para espejos y la aplica a cualquier superficie curva sin distinguir entre perfiles.

**Por que es incorrecto**
La ecuacion del espejo se deriva bajo la aproximacion paraxial para superficies esfericas. Un espejo parabolico tiene una forma diferente que elimina la aberracion esferica pero no sigue exactamente la misma relacion para rayos marginales.

**Senal de deteccion**
El alumno calcula la posicion de la imagen en un espejo parabolico usando la ecuacion del espejo y obtiene resultados que no coinciden con la convergencia real de los rayos.

**Correccion conceptual**
Para espejos parabolicos, la distancia focal es exacta para rayos paralelos al eje, pero la relacion entre distancias de objeto e imagen requiere trazado de rayos cuando el objeto esta a distancia finita.

**Mini-ejemplo de contraste**
En un espejo esferico con gran apertura, los rayos marginales convergen a una distancia distinta de los paraxiales (aberracion esferica). En un espejo parabolico, todos los rayos paralelos convergen en el foco exacto, pero un objeto cercano no cumple la ecuacion simple.

## Errores matematicos

### Error 4: Confundir el radio de curvatura con la distancia focal

**Por que parece correcto**
Ambas magnitudes se expresan en metros y se refieren a distancias sobre el eje optico, lo que lleva al alumno a intercambiarlas.

**Por que es incorrecto**
La distancia focal es exactamente la mitad del radio de curvatura. Usar [[R]] donde deberia ir [[f]] duplica el error en la posicion de la imagen.

**Senal de deteccion**
El alumno obtiene valores de [[d_i]] que difieren sistematicamente por un factor cercano a 2 respecto a los valores esperados.

**Correccion conceptual**
Siempre verificar que [[f]] es igual a [[R]] dividido por 2 antes de sustituir en la ecuacion del espejo. No usar [[R]] directamente en la ecuacion del espejo.

**Mini-ejemplo de contraste**
Con [[R]] igual a 0.40 m: la focal correcta es 0.20 m. Si se usa 0.40 m como focal, el resultado de [[d_i]] se desvía por un factor de 2 respecto al valor correcto.

## Errores de interpretacion

### Error 5: Suponer que aumento negativo significa imagen mas pequena

**Por que parece correcto**
El alumno asocia "negativo" con "menos" o "reduccion" y concluye que [[M]] negativo implica imagen reducida.

**Por que es incorrecto**
El signo de [[M]] indica la orientacion, no el tamano. [[M]] negativo significa imagen **invertida**; el tamano lo da el valor absoluto. Un aumento de menos 3 significa una imagen invertida y tres veces mayor que el objeto.

**Senal de deteccion**
El alumno calcula [[M]] igual a menos 2 y afirma que la imagen es "la mitad del objeto" o que esta "reducida".

**Correccion conceptual**
El modulo de [[M]] da el factor de escala: mayor que uno indica imagen aumentada, menor que uno indica imagen reducida. El signo solo indica orientacion: negativo es invertida, positivo es derecha.

**Mini-ejemplo de contraste**
[[M]] igual a menos 3: la imagen es tres veces mayor que el objeto y esta invertida. [[M]] igual a 0.5: la imagen es la mitad del objeto y esta derecha. El signo y el modulo transmiten informacion distinta.

## Regla de autocontrol rapido

Antes de dar por bueno un resultado de espejos, verificar tres puntos clave:

1. **Signo de [[f]]**: concavo positivo, convexo negativo. Si el signo no coincide con el tipo de espejo, hay error.
2. **Signo de [[d_i]]**: positivo para imagen real, negativo para virtual. Comprobar que es coherente con la posicion del objeto respecto al foco.
3. **Signo y modulo de [[M]]**: negativo indica invertida, positivo indica derecha. El modulo indica el tamano relativo. No confundir orientacion con tamano.
`;export{e as default};
