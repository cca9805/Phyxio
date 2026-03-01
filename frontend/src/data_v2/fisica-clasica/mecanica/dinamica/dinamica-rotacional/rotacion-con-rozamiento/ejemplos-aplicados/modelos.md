# Ejemplos Aplicados · Modelos

Modelo principal usado en este subtema:

$$
\tau_{net}=\tau_{ap}-\tau_{roz},\qquad \alpha=\frac{\tau_{net}}{I}
$$

## 1- Modelo de cuerpo rigido con eje fijo
- El eje no cambia durante el analisis.
- El momento de inercia se toma constante en el intervalo estudiado.

## 2- Modelo de torque resistente efectivo
- \(\tau_{roz}\) representa perdidas agregadas (contacto, freno, resistencias).
- En primera aproximacion, puede tratarse constante por tramos.

## 3- Modelo cinematico de cierre (si alpha constante)

$$
\omega(t)=\omega_0+\alpha t
$$

Permite conectar dinamica instantanea con evolucion temporal.

## 4- Limites del modelo
No cubre directamente:
- \(I\) variable con el tiempo,
- \(\tau_{roz}(\omega)\) fuertemente no lineal,
- ejes moviles o flexibilidad estructural.

Aun asi, es el modelo base correcto para la mayoria de ejercicios academicos y muchas estimaciones de ingenieria inicial.
