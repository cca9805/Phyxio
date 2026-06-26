const e=`# Modelos de la transformacion de Legendre

## Modelo ideal

El modelo ideal supone un sistema mecanico regular con una coordenada generalizada [[qi]], una velocidad generalizada [[qdi]] y un lagrangiano [[L]] diferenciable. La transformacion reemplaza [[qdi]] por [[p]] y construye [[H]] como funcion de espacio de fases.

En el caso cuadratico, [[p]] es proporcional a [[qdi]], de modo que la inversion es inmediata. Este modelo es el que debe usarse para introducir el formalismo porque separa con claridad tres pasos: derivar, invertir y sustituir.

## Hipotesis

- [[L]] depende de [[qdi]] de forma suficientemente suave.
- La pendiente [[DLv]] define un unico [[p]] para cada velocidad.
- La relacion entre [[qdi]] y [[p]] puede invertirse localmente.
- La masa efectiva [[m]] no es nula en el caso cuadratico.
- La energia potencial [[V]] no depende de la velocidad si se quiere interpretar [[H]] como energia mecanica ordinaria.

## Dominio de validez cuantitativo

La regularidad se evalua por la curvatura del lagrangiano respecto de la velocidad. En el modelo cuadratico, esa curvatura es la masa efectiva [[m]]. Si [[m]] es positiva y de orden fisico razonable, velocidades distintas producen momentos distintos y la transformacion no pierde informacion.

El orden de magnitud tambien controla la lectura numerica. Si [[m]] es muy pequeña, una variacion moderada de [[p]] puede implicar una gran variacion de [[qdi]]. Si [[m]] es muy grande, el mismo cambio de momento altera poco la velocidad.

## Senales de fallo del modelo

Una señal de fallo aparece si [[L]] no contiene alguna velocidad: entonces [[p]] puede ser cero o quedar impuesto como restriccion, y no se puede recuperar [[qdi]]. Otra señal es que varias velocidades distintas generen el mismo momento. En ambos casos la transformacion ordinaria debe sustituirse por un tratamiento con restricciones.

Tambien falla la interpretacion energetica simple si el lagrangiano depende explicitamente del tiempo, si [[V]] depende de la velocidad o si se trabaja en coordenadas no inerciales sin revisar terminos adicionales.

## Modelo extendido o alternativo

El modelo extendido usa varias coordenadas generalizadas. Entonces cada coordenada tiene su momento conjugado y la regularidad exige que la matriz de segundas derivadas respecto de las velocidades sea invertible. El paso conceptual es el mismo, pero la inversion ya no es una division simple.

Cuando la matriz no es invertible, el enfoque alternativo es el formalismo hamiltoniano con restricciones. En ese caso, algunos momentos no determinan velocidades sino condiciones que reducen el espacio de fases permitido.

## Comparacion operativa

El modelo lagrangiano es mas comodo para construir ecuaciones desde coordenadas y ligaduras. El modelo hamiltoniano es mas comodo para analizar espacio de fases, conservacion, estabilidad y estructuras canonicas. La transformacion de Legendre indica cuando ambos modelos son dos descripciones equivalentes de la misma dinamica y cuando conviene detenerse porque la equivalencia no esta garantizada.
`;export{e as default};
