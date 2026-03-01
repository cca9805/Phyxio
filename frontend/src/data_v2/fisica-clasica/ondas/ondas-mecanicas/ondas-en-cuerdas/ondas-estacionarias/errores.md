# Ondas Estacionarias En Cuerdas - Errores Comunes

## Idea clave
El error dominante es no respetar condiciones modales discretas impuestas por la frontera.

## 1- Errores conceptuales
- tratar n como variable continua.
- confundir onda viajera con estacionaria.
- suponer nodos moviles.

## 2- Errores de formula
- usar \(f_n\) sin incluir n.
- usar \(\lambda\) de onda viajera en vez de \(\lambda_n=2L/n\).
- olvidar calcular v del medio cuando no se da.

## 3- Errores de unidades
- \(\mu_l\) mal convertida.
- L en cm sin pasar a m.
- reportar frecuencia sin Hz.

## 4- Protocolo de correccion
1. Confirma frontera fija-fija.
2. Verifica n entero.
3. Recalcula v, luego f_n y lambda_n.
4. Comprueba coherencia espacial del modo.

## 5- Cierre
Sin validacion modal, el resultado puede parecer correcto y no representar un modo fisicamente permitido.
