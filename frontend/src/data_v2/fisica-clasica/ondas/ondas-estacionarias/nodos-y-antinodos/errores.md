# Errores Frecuentes En Nodos Y Antinodos

## 1- Llamar nodo a cualquier punto con y=0 instantaneo
Nodo exige y=0 para todo tiempo.

## 2- Usar lambda generica en vez de lambda_n
El patron estacionario depende del modo n.

## 3- Contar mal nodos en extremos
En fija-fija los extremos tambien son nodos.

## 4- Confundir d_NN con d_NA
d_NN = lambda_n/2 y d_NA = lambda_n/4.

## 5- Mezclar frontera fija-fija con abierta-cerrada
Cambian forma modal y conteos permitidos.

## 6- Resolver frecuencia sin validar forma
f_n y patron espacial deben corresponder al mismo n.

## 7- Ignorar longitud efectiva
L efectiva puede diferir de longitud geometrica nominal.

## 8- Redondear posiciones demasiado pronto
En modos altos se acumula error espacial.

## 9- No usar SI
L y lambda_n en metros, f en Hz, v en m/s.

## 10- Cerrar sin mapa modal
Siempre es util listar nodos/antinodos esperados en el sistema.
