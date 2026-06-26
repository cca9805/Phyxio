## Errores conceptuales


### Error 1: pensar que flujo constante induce fem

**Por qué parece correcto**

La intuicion equivocada nace de asociar campo magnetico con accion electrica directa. Si hay campo atravesando la espira, parece que deberia aparecer tension.

**Por qué es incorrecto**

Faraday exige cambio de flujo enlazado. Un [[flujo_magnetico]] constante puede existir sin producir [[epsilon_ind]] media.

**Señal de detección**

El alumno predice fem aunque el iman, la espira y el campo permanecen en la misma configuracion.

**Corrección conceptual**

Busca siempre [[cambio_de_flujo_magnetico]]. Sin cambio de flujo durante [[intervalo_de_tiempo]], no hay fem inducida media.

**Mini-ejemplo de contraste**

Un iman quieto frente a una espira quieta puede crear flujo estable. Al mover el iman, aparece cambio de flujo y entonces se induce fem.

## Errores de modelo


### Error 2: usar campo total en lugar de componente efectiva

**Por qué parece correcto**

El campo magnetico se suele dar como un valor unico, y el alumno lo sustituye directamente por costumbre.

**Por qué es incorrecto**

El flujo depende de la parte que atraviesa la superficie. En el modelo uniforme, esa parte queda representada por [[campo_magnetico_perpendicular_efectivo]], no por cualquier componente tangente.

**Señal de detección**

El resultado no cambia al girar la espira, o usa el mismo flujo aunque el campo sea tangente al area.

**Corrección conceptual**

Antes de calcular flujo, decide que componente cruza la superficie enlazada y que area efectiva participa.

**Mini-ejemplo de contraste**

Una espira paralela a las lineas de campo puede tener area geometrica grande y flujo casi nulo. Girarla cambia el flujo aunque el campo no cambie.

## Errores matemáticos


### Error 3: olvidar convertir el intervalo temporal

**Por qué parece correcto**

El dato temporal suele venir en milisegundos o microsegundos, y la sustitucion parece directa. La conversion se percibe como un detalle administrativo.

**Por qué es incorrecto**

La rapidez de cambio de flujo usa segundos. Un error de unidad cambia [[rapidez_media_de_cambio_de_flujo]] y [[epsilon_ind]] por factores enormes.

**Señal de detección**

La fem calculada resulta absurdamente pequeña para un cambio brusco o enorme para un cambio lento.

**Corrección conceptual**

Convierte [[intervalo_de_tiempo]] a segundos antes de dividir [[cambio_de_flujo_magnetico]]. Despues aplica [[numero_de_espiras]] y el signo de Lenz.

**Mini-ejemplo de contraste**

Cambiar el mismo flujo en milisegundos no equivale a cambiarlo en segundos. La fem responde a la rapidez, no solo al tamaño del cambio.

## Errores de interpretación


### Error 4: leer solo el modulo y olvidar Lenz

**Por qué parece correcto**

En muchos ejercicios se pide solo una tension numerica, y el signo parece una convencion secundaria.

**Por qué es incorrecto**

El signo de [[epsilon_ind]] indica la polaridad que se opone al cambio de flujo. Sin el, no se sabe que sentido tendra la corriente inducida.

**Señal de detección**

El alumno da un valor positivo sin discutir si el flujo aumenta o disminuye segun la normal elegida.

**Corrección conceptual**

Primero encuentra el modulo si hace falta, pero despues interpreta la polaridad con la oposicion al cambio de flujo.

**Mini-ejemplo de contraste**

Si el flujo aumenta hacia una normal elegida, la fem inducida se orienta para oponerse a ese aumento. Si el flujo disminuye, la polaridad se invierte.

## Regla de autocontrol rápido

Antes de sustituir, verifica cuatro puntos: superficie enlazada, normal elegida, cambio de flujo y tiempo en segundos. Si no puedes decir cual es [[cambio_de_flujo_magnetico]], no estas aplicando Faraday sino mirando un estado magnetico.

Despues revisa tres coherencias: [[numero_de_espiras]] multiplica solo espiras equivalentes, [[campo_magnetico_perpendicular_efectivo]] representa la componente que atraviesa y el signo de [[epsilon_ind]] debe expresar oposicion al cambio.