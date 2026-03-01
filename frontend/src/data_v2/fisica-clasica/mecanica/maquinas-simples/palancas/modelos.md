# Palancas - Modelo y validez

## Idea clave
El modelo base de palanca se apoya en equilibrio de momentos sobre un fulcro fijo. Sirve muy bien en analisis cuasiestatico.

## Modelo ideal usado en calculadora
- Barra rigida sin deformacion apreciable.
- Fulcro sin perdidas por friccion.
- Distancias medidas en perpendicular a la linea de accion.
- Estado de equilibrio: \(\sum \tau = 0\).

## Ecuaciones del modelo
$$
P\,b_P = R\,b_R
$$

$$
VM=\frac{R}{P}=\frac{b_P}{b_R}
$$

## Cuando este modelo falla
- Cargas dinamicas o impactos.
- Flexion relevante de la barra.
- Holguras y desplazamiento del fulcro efectivo.
- Friccion notable en eje o apoyos.

## Ajuste de modelo real
En diseno real se incorpora rendimiento:

$$
VM_{real}=\eta\,VM_{ideal}
$$

y se valida con ensayo de carga para calibrar \(\eta\).


