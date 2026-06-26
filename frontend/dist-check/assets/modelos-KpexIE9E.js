const e=`# Modelos fisicos: Coeficiente de arrastre\r
\r
## Modelo ideal\r
\r
Este leaf usa un modelo donde [[C_d]] funciona como parametro adimensional que resume como la forma y la orientacion del cuerpo afectan el arrastre en un regimen dado. El valor de [[C_d]] no es una propiedad universal del objeto en cualquier condicion, sino una descripcion efectiva valida cuando se mantienen una referencia de area [[A]], un rango de velocidad [[v]] y condiciones de flujo comparables.\r
\r
Las idealizaciones principales son:\r
\r
- Se fija una definicion consistente de area de referencia [[A]].\r
- Se asume que [[C_d]] puede tratarse como casi constante en la ventana de estudio.\r
- La densidad [[rho]] del fluido se considera estable en el intervalo de medicion.\r
- Se trabaja con rapidez relativa [[v]] bien definida respecto al fluido.\r
\r
Con esas hipotesis, el modelo permite vincular forma del cuerpo, fuerza de arrastre [[F_d]] y potencia de arrastre [[P_d]] de manera operativa.\r
\r
## Hipótesis\r
\r
Hipotesis de trabajo del leaf:\r
\r
- Hipotesis geometrica: la forma efectiva del cuerpo no cambia de manera importante durante la comparacion.\r
- Hipotesis de regimen: el flujo permanece en una zona donde la parametrizacion por [[C_d]] mantiene sentido fisico.\r
- Hipotesis de referencia: toda comparacion usa la misma convencion de [[A]].\r
- Hipotesis energetica: la potencia [[P_d]] se interpreta para tramos de velocidad casi estacionaria.\r
\r
Romper cualquiera de estas hipotesis puede convertir un buen ajuste numerico en una mala interpretacion fisica.\r
\r
## Dominio de validez cuantitativo\r
\r
En practica, conviene declarar criterios cuantitativos minimos:\r
\r
1. Variacion relativa de [[C_d]] pequena dentro del rango principal de [[v]] usado para ajuste.\r
2. Error relativo entre prediccion y dato medido dentro del umbral definido por protocolo.\r
3. Coherencia de [[F_d]] y [[P_d]] con tendencias esperadas al variar [[v]].\r
4. Trazabilidad de condiciones de ensayo (medio, postura, area de referencia).\r
\r
Un criterio operativo razonable en laboratorio didactico es aceptar el modelo en el tramo donde el error medio quede por debajo de 10 % y no aparezcan cambios abruptos de [[C_d]] al incrementar [[v]]. Si el error crece de forma sistematica o la dispersion de [[C_d]] se dispara, el tramo deja de ser apto para interpretacion con un unico valor efectivo.\r
\r
## Señales de fallo del modelo\r
\r
Senales tipicas de fallo:\r
\r
- Un mismo cuerpo requiere valores incompatibles de [[C_d]] en subrangos cercanos sin cambio experimental declarado.\r
- La potencia [[P_d]] inferida no coincide con consumo observado en condiciones supuestamente equivalentes.\r
- Cambiar solo la postura produce salto grande de [[F_d]] que no fue registrado en la definicion de [[A]].\r
- La lectura de graficas deja de ser consistente con el mecanismo de estela esperado.\r
\r
Estas senales no implican descartar toda la fisica del problema; implican que hay que refinar el marco de modelado.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando el modelo con [[C_d]] casi constante deja de ser suficiente, hay dos rutas utiles:\r
\r
- Modelo por tramos: definir ventanas de [[v]] con [[C_d]] efectivo diferente.\r
- Modelo con dependencia explicita de regimen: incorporar variacion de [[C_d]] con condiciones del flujo.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo con [[C_d]] efectivo casi constante | Modelo extendido |\r
|---------|---------------------------------------------|------------------|\r
| Complejidad | Baja | Media o alta |\r
| Datos requeridos | Pocos, bien controlados | Mayor cobertura experimental |\r
| Interpretacion rapida | Muy buena | Menos inmediata |\r
| Extrapolacion | Riesgosa fuera de rango | Mejor, si se calibra bien |\r
| Uso tipico | Diagnostico inicial y comparacion | Diseno fino y validacion robusta |\r
\r
Transicion explicita a modelo alternativo: conviene cambiar cuando [[C_d]] deja de ser estable en el rango objetivo, cuando el error sistematico supera el umbral aceptado o cuando la conclusion depende de ajustar "a mano" parametros sin justificacion fisica.\r
\r
En resumen, el modelo ideal es excelente para leer el impacto de forma y estela sobre [[F_d]] y [[P_d]], siempre que se declare y respete su dominio cuantitativo.`;export{e as default};
