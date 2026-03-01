# Rozamiento y disipacion

## Idea clave
El rozamiento transforma parte de la energia mecanica en energia interna (calor). La energia total se conserva, pero la fraccion mecanica util disminuye.

## 1- Que estudia este tema y por que es fundamental
Este tema introduce el comportamiento real de sistemas mecanicos: perdidas, calentamiento y menor rendimiento frente al modelo ideal.

## 2- Imagen fisica correcta
La fuerza de rozamiento se opone al movimiento relativo. Por eso su trabajo suele ser negativo sobre el cuerpo que analizas y reduce energia mecanica disponible.

## 3- Variables y parametros
- Coeficiente de rozamiento: $\mu$.
- Fuerza normal: $N$.
- Fuerza de rozamiento: $f_r$.
- Desplazamiento: $d$.
- Trabajo disipativo: $W_r$.

## 4- Formulas esenciales
Modelo basico:

$$
f_r=\mu N
$$

Trabajo de rozamiento (sentido opuesto al movimiento):

$$
W_r=-f_r d
$$

Balance con disipacion:

$$
\Delta E_m=W_{nc}
$$

## 5- Dominio de validez
Modelo $f_r=\mu N$ es aproximacion macroscopia clasica para contacto seco. Puede fallar en lubricacion, velocidades extremas o materiales no lineales.

## 6- Metodo de resolucion
1- Dibuja fuerzas y sentido de movimiento.
2- Calcula $N$ con el modelo dinamico del problema.
3- Obtiene $f_r=\mu N$ y su direccion.
4- Calcula trabajo con signo correcto.
5- Integra el termino disipativo en el balance energetico.

## 7- Errores tipicos
- Poner rozamiento con el mismo sentido del desplazamiento.
- Usar siempre $\mu_k$ o $\mu_s$ sin revisar el regimen.
- Olvidar que el trabajo de rozamiento depende del recorrido.
- Confundir perdida mecanica con perdida de energia total del universo.

## 8- Ejemplo guiado
Bloque sobre horizontal: $m=5\,\text{kg}$, $\mu=0.25$, recorrido $d=8\,\text{m}$.

$$
N=mg=5\cdot9.8=49\,\text{N}
$$

$$
f_r=\mu N=0.25\cdot49=12.25\,\text{N}
$$

$$
W_r=-f_r d=-12.25\cdot8=-98\,\text{J}
$$

## 9- Aplicaciones reales
- Frenos y distancia de parada.
- Perdidas energeticas en maquinaria.
- Estimacion de calor generado por friccion.

## 10- Sintesis final
Rozamiento y disipacion son el paso del modelo ideal al modelo real. Dominar su signo y su papel en el balance evita muchos errores de interpretacion.
