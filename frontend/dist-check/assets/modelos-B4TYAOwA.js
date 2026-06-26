const e=`# Modelos físicos: Arrastre cuadratico\r
\r
## Modelo ideal\r
\r
El modelo central del leaf representa la fuerza resistiva como crecimiento cuadratico con la rapidez relativa. En forma reducida, la ley usa [[c]] como parametro agregado del medio y de la geometria, y el resultado observable principal es [[F_d]].\r
\r
Este modelo es ideal porque comprime muchos efectos fluidodinamicos en una expresion operativa simple. No pretende describir todo el flujo, sino capturar el comportamiento dominante cuando la inercia del fluido gobierna la resistencia.\r
\r
Las magnitudes activas del modelo son [[F_d]], [[c]], [[v]], [[rho]], [[C_d]] y [[A]]. La forma puente explica por que [[c]] no es un numero misterioso: depende de densidad del medio, coeficiente de forma y area frontal.\r
\r
## Hipótesis\r
\r
1. Se trabaja con rapidez relativa escalar [[v]] y con modulo de [[F_d]].\r
2. El cuerpo mantiene orientacion aproximadamente estable en el intervalo analizado.\r
3. El regimen del flujo no cambia de forma brusca durante la medicion.\r
4. [[C_d]] puede tratarse como aproximadamente constante en el tramo de interes.\r
5. [[rho]] y [[A]] se mantienen efectivamente constantes en la comparacion local.\r
\r
Si una hipotesis se rompe, la ley cuadratica puede seguir siendo util como aproximacion local, pero deja de ser una descripcion global fiable.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo funciona bien cuando se cumplen simultaneamente criterios cuantitativos observables:\r
\r
1. Error relativo de ajuste menor o igual que 0.1 en el rango de ensayo seleccionado.\r
2. Coherencia de escala cuadratica: al duplicar [[v]], la razon $[[F_d]](2[[v]])/[[F_d]]([[v]])$ debe acercarse a 4 con tolerancia operacional.\r
3. Parametros no negativos: [[c]] >= 0, [[rho]] >= 0, [[C_d]] >= 0, [[A]] > 0.\r
4. Rango de trabajo estable: variaciones de [[C_d]] menores que el umbral experimental acordado en el tramo analizado.\r
\r
Fuera de estos rangos, los terminos ignorados por el modelo reducido dejan de ser secundarios y la prediccion pierde valor de diseño.\r
\r
## Señales de fallo del modelo\r
\r
- Una curva [[F_d]] frente a [[v]] que deja de crecer con convexidad consistente.\r
- Cambios fuertes de [[c]] al repetir mediciones en condiciones nominalmente iguales.\r
- Necesidad de usar valores incompatibles de [[C_d]] para explicar un mismo tramo.\r
- Desacuerdo sistematico entre DCL y lectura de grafica, aun con datos depurados.\r
\r
Estas señales indican que no basta recalcular; hay que revisar el modelo elegido.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando el ajuste cuadratico no es estable, se debe explicitar la transición de modelo:\r
\r
1. Si el comportamiento se vuelve casi proporcional a [[v]], migrar a arrastre lineal en ese rango.\r
2. Si [[C_d]] cambia apreciablemente con el regimen, usar modelo por tramos con [[C_d]] variable.\r
3. Si hay acoplamiento con sustentacion, rotacion o vibracion, pasar a modelo aerodinamico ampliado.\r
4. Si se requiere precision de ingenieria fina, usar correlaciones experimentales especificas del cuerpo.\r
\r
Regla de transición explicita: conviene cambiar de modelo cuando el error sistematico supere el margen aceptado o cuando la razon de escalamiento deje de ser compatible con crecimiento cuadratico.\r
\r
Cuando conviene cambiar de modelo: si el ajuste por tramos con coeficiente casi constante deja de sostenerse, o si las evidencias de campo muestran que la dependencia dominante ya no responde al esquema cuadratico.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo cuadratico reducido | Modelo extendido |\r
|---|---|---|\r
| Variable central | [[F_d]] con [[c]] constante | [[F_d]] con parametros dependientes del regimen |\r
| Requisitos de datos | [[v]] y estimacion de [[c]] | datos adicionales de regimen y geometria |\r
| Ventaja | Rapido, interpretable y didactico | Mayor fidelidad en escenarios complejos |\r
| Riesgo | Extrapolar fuera de rango | Sobrecomplejidad sin necesidad |\r
\r
La estrategia correcta es secuencial: empezar con el modelo cuadratico, verificar criterios cuantitativos y escalar complejidad solo cuando los datos lo exijan.\r
`;export{e as default};
