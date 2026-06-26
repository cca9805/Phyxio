# Modelos físicos: Arrastre cuadratico

## Modelo ideal

El modelo central del leaf representa la fuerza resistiva como crecimiento cuadratico con la rapidez relativa. En forma reducida, la ley usa [[c]] como parametro agregado del medio y de la geometria, y el resultado observable principal es [[F_d]].

Este modelo es ideal porque comprime muchos efectos fluidodinamicos en una expresion operativa simple. No pretende describir todo el flujo, sino capturar el comportamiento dominante cuando la inercia del fluido gobierna la resistencia.

Las magnitudes activas del modelo son [[F_d]], [[c]], [[v]], [[rho]], [[C_d]] y [[A]]. La forma puente explica por que [[c]] no es un numero misterioso: depende de densidad del medio, coeficiente de forma y area frontal.

## Hipótesis

1. Se trabaja con rapidez relativa escalar [[v]] y con modulo de [[F_d]].
2. El cuerpo mantiene orientacion aproximadamente estable en el intervalo analizado.
3. El regimen del flujo no cambia de forma brusca durante la medicion.
4. [[C_d]] puede tratarse como aproximadamente constante en el tramo de interes.
5. [[rho]] y [[A]] se mantienen efectivamente constantes en la comparacion local.

Si una hipotesis se rompe, la ley cuadratica puede seguir siendo util como aproximacion local, pero deja de ser una descripcion global fiable.

## Dominio de validez cuantitativo

El modelo funciona bien cuando se cumplen simultaneamente criterios cuantitativos observables:

1. Error relativo de ajuste menor o igual que 0.1 en el rango de ensayo seleccionado.
2. Coherencia de escala cuadratica: al duplicar [[v]], la razon $[[F_d]](2[[v]])/[[F_d]]([[v]])$ debe acercarse a 4 con tolerancia operacional.
3. Parametros no negativos: [[c]] >= 0, [[rho]] >= 0, [[C_d]] >= 0, [[A]] > 0.
4. Rango de trabajo estable: variaciones de [[C_d]] menores que el umbral experimental acordado en el tramo analizado.

Fuera de estos rangos, los terminos ignorados por el modelo reducido dejan de ser secundarios y la prediccion pierde valor de diseño.

## Señales de fallo del modelo

- Una curva [[F_d]] frente a [[v]] que deja de crecer con convexidad consistente.
- Cambios fuertes de [[c]] al repetir mediciones en condiciones nominalmente iguales.
- Necesidad de usar valores incompatibles de [[C_d]] para explicar un mismo tramo.
- Desacuerdo sistematico entre DCL y lectura de grafica, aun con datos depurados.

Estas señales indican que no basta recalcular; hay que revisar el modelo elegido.

## Modelo extendido o alternativo

Cuando el ajuste cuadratico no es estable, se debe explicitar la transición de modelo:

1. Si el comportamiento se vuelve casi proporcional a [[v]], migrar a arrastre lineal en ese rango.
2. Si [[C_d]] cambia apreciablemente con el regimen, usar modelo por tramos con [[C_d]] variable.
3. Si hay acoplamiento con sustentacion, rotacion o vibracion, pasar a modelo aerodinamico ampliado.
4. Si se requiere precision de ingenieria fina, usar correlaciones experimentales especificas del cuerpo.

Regla de transición explicita: conviene cambiar de modelo cuando el error sistematico supere el margen aceptado o cuando la razon de escalamiento deje de ser compatible con crecimiento cuadratico.

Cuando conviene cambiar de modelo: si el ajuste por tramos con coeficiente casi constante deja de sostenerse, o si las evidencias de campo muestran que la dependencia dominante ya no responde al esquema cuadratico.

## Comparación operativa

| Aspecto | Modelo cuadratico reducido | Modelo extendido |
|---|---|---|
| Variable central | [[F_d]] con [[c]] constante | [[F_d]] con parametros dependientes del regimen |
| Requisitos de datos | [[v]] y estimacion de [[c]] | datos adicionales de regimen y geometria |
| Ventaja | Rapido, interpretable y didactico | Mayor fidelidad en escenarios complejos |
| Riesgo | Extrapolar fuera de rango | Sobrecomplejidad sin necesidad |

La estrategia correcta es secuencial: empezar con el modelo cuadratico, verificar criterios cuantitativos y escalar complejidad solo cuando los datos lo exijan.
