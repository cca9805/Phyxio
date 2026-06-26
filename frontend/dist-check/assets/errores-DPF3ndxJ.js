const e=`## Errores conceptuales

### Error 1: Confundir [[L]] con energia mecanica total

**Por que parece correcto**  
Ambas expresiones usan [[T]] y [[V]], de modo que el estudiante identifica automaticamente una combinacion energetica con la energia total.

**Por que es incorrecto**  
El lagrangiano [[L]] se define con una resta y cumple una funcion variacional. No coincide, en general, con la energia mecanica conservada.

**Senal de deteccion**  
Se intenta interpretar cada valor de [[L]] como energia disponible del sistema.

**Correccion conceptual**  
Distinguir funcion generadora de la ecuacion dinamica y magnitud energetica conservada.

**Mini-ejemplo de contraste**  
En un oscilador, [[L]] puede hacerse cero en un instante concreto sin que el sistema este detenido ni haya perdido su capacidad de seguir moviendose.

## Errores de modelo

### Error 2: Introducir la misma accion en [[V]] y en [[Qi]]

**Por que parece correcto**  
Cuando una fuerza conocida aparece en el enunciado, se tiende a incorporarla por todas las vias posibles para no olvidarla.

**Por que es incorrecto**  
Si una influencia ya esta representada mediante potencial, volver a sumarla como fuerza generalizada duplica su efecto.

**Senal de deteccion**  
La ecuacion devuelve una aceleracion demasiado grande o no recupera el limite conservativo al anular la accion externa.

**Correccion conceptual**  
Decidir primero si la accion entra en [[V]] o en [[Qi]], y mantener una sola ruta.

**Mini-ejemplo de contraste**  
Si una fuerza elastica ya se representa mediante [[V]], volver a sumarla como [[Qi]] equivale a exigir que el resorte actue dos veces.

## Errores matematicos

### Error 3: Derivar respecto de [[qi]] cuando corresponde derivar respecto de [[qdi]]

**Por que parece correcto**  
La notacion se parece y la lectura rapida oculta que cada derivada mide una sensibilidad distinta.

**Por que es incorrecto**  
El momento conjugado [[pi]] nace de la dependencia de [[L]] con la velocidad generalizada [[qdi]], no con la coordenada [[qi]].

**Senal de deteccion**  
El supuesto [[pi]] pierde unidades o no permite construir correctamente [[Ri]].

**Correccion conceptual**  
Separar siempre derivada en coordenada y derivada en velocidad antes de simplificar.

**Mini-ejemplo de contraste**  
En un lagrangiano con dependencia cuadratica en [[qdi]], derivar respecto de [[qi]] no produce el termino proporcional a la velocidad que define [[pi]].

## Errores de interpretacion

### Error 4: Tratar [[pi]] como momento lineal en cualquier coordenada

**Por que parece correcto**  
En coordenadas cartesianas simples, el momento conjugado coincide con magnitudes familiares.

**Por que es incorrecto**  
En coordenadas angulares o generalizadas, [[pi]] adopta otra forma y su significado depende de la variable elegida.

**Senal de deteccion**  
Se asignan unidades o interpretaciones de traslacion a un problema rotacional.

**Correccion conceptual**  
Leer [[pi]] como momento conjugado, no como una etiqueta universal de momento lineal.

**Mini-ejemplo de contraste**  
En una coordenada angular, [[pi]] puede expresar respuesta rotacional; imponerle sin mas las unidades de momento lineal rompe la interpretacion.

## Regla de autocontrol rapido

Antes de cerrar una derivacion, comprobar cuatro puntos: 1) [[L]] esta construido con [[T]] y [[V]] coherentes; 2) [[Qi]] no duplica una contribucion potencial; 3) [[pi]] se obtiene desde [[qdi]]; 4) [[Ri]] conduce al cierre correcto, conservativo o forzado. Si uno falla, la ecuacion final no es confiable.

La utilidad de esta regla no es burocratica. Obliga a revisar el modelo antes de enamorarse de una expresion final compacta. En mecanica analitica, un fallo pequeno en la seleccion de terminos no se corrige al final con algebra: contamina toda la derivacion.
`;export{e as default};
