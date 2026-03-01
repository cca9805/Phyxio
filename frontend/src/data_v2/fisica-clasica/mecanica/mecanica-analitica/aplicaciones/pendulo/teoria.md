# Pendulo

## Idea clave
El pendulo conecta geometria angular, torque gravitatorio y aproximaciones fisicas: es simple de plantear y profundo de interpretar.

## Recorrido de aprendizaje (de principio a fin)
- Modelas la dinamica rotacional alrededor del punto de suspension.
- Obtienes la ecuacion no lineal exacta.
- Linealizas para pequenos angulos y recuperas un oscilador armonico.
- Comparas cuando la aproximacion es valida y cuando deja de serlo.

## Variables y parametros
- L: longitud del pendulo.
- theta: desviacion angular.
- m: masa de la bobina.
- g: gravedad local.
- tau: torque restaurador.

## Ecuaciones fundamentales

$$
\tau = -mgL\sin\theta
$$

$$
\ddot\theta + \frac{g}{L}\sin\theta = 0
$$

$$
\ddot\theta + \frac{g}{L}\theta = 0 \quad (|\theta|\ll 1)
$$

$$
T \approx 2\pi\sqrt{\frac{L}{g}}
$$

## Intuicion fisica
- El signo negativo del torque indica tendencia a volver al equilibrio.
- La aproximacion sin(theta) ~ theta simplifica mucho, pero tiene rango limitado.
- Para amplitudes grandes, el periodo real aumenta frente al valor aproximado.

## Metodo de resolucion paso a paso
1. Define angulo inicial y condiciones de partida.
2. Plantea torque y ecuacion angular.
3. Decide si aplica aproximacion de pequenos angulos.
4. Calcula omega o periodo en el modelo lineal.
5. Valida con grafica si la evolucion esperada es coherente.

## Errores frecuentes
- Usar angulos en grados dentro de funciones trigonometricas sin convertir.
- Aplicar la formula del periodo lineal a amplitudes muy grandes.
- Olvidar el factor L en el torque gravitatorio.

## Conexion con otros temas
- Caso clasico de oscilacion no lineal.
- Ejemplo directo de energia potencial angular.
- Puente hacia problemas de estabilidad y caos en pendulos forzados.

## Que es calculable y que no (en Phyxio)
- Calculable: frecuencia aproximada, periodo y torque instantaneo.
- En graficas: comparacion temporal y lectura didactica del estado.
- No cubre: periodo exacto con integrales elipticas completas.
