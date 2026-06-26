const r=`# Errores comunes\r
\r
## Errores conceptuales\r
\r
### Error\r
Creer que todo problema de trabajo admite la misma receta de fuerza constante.\r
\r
Por que parece correcto\r
La formula basica es rapida y suele aparecer en los primeros ejercicios de mecanica.\r
\r
Senal de deteccion\r
La solucion ignora perfil variable y no define tramo entre [[x1]] y [[x2]].\r
\r
Mini-ejemplo de contraste\r
Con el mismo desplazamiento neto, dos perfiles de fuerza pueden producir [[W]] muy distinta.\r
\r
Correccion conceptual\r
Reconocer primero la variabilidad del perfil y tratar [[W]] como acumulacion firmada.\r
\r
### Error\r
Interpretar [[W]] solo como modulo positivo.\r
\r
Por que parece correcto\r
Se asocia energia con cantidad positiva y se omite su sentido de transferencia.\r
\r
Senal de deteccion\r
No hay lectura de signo ni comentario sobre balance entre regiones de aporte y extraccion.\r
\r
Mini-ejemplo de contraste\r
Un tramo puede sumar energia y otro restarla; el saldo no es suma de modulos.\r
\r
Correccion conceptual\r
Mantener signo en cada contribucion y explicar su efecto causal final.\r
\r
## Errores de modelo\r
\r
### Error\r
Aplicar modelo lineal con [[k]] constante fuera del rango lineal.\r
\r
Por que parece correcto\r
La expresion cerrada ahorra tiempo y parece universal.\r
\r
Senal de deteccion\r
El ajuste frente a datos empeora sistematicamente al acercarse a extremos de recorrido.\r
\r
Mini-ejemplo de contraste\r
En un resorte real, la zona final puede salirse del comportamiento lineal esperado.\r
\r
Correccion conceptual\r
Verificar dominio lineal antes de usar [[k]] constante y escalar a tramos cuando corresponda.\r
\r
### Error\r
Definir [[x1]] y [[x2]] en referencias espaciales distintas.\r
\r
Por que parece correcto\r
Se cambia el origen a mitad del calculo para simplificar una parte local.\r
\r
Senal de deteccion\r
Rehacer la cuenta con referencia unica cambia signo o escala de [[W]].\r
\r
Mini-ejemplo de contraste\r
El mismo proceso puede parecer aporte o extraccion por inconsistencia de limites.\r
\r
Correccion conceptual\r
Fijar referencia inicial y mantenerla hasta la interpretacion final.\r
\r
## Errores matemáticos\r
\r
### Error\r
Integrar de una vez cuando hay cambios de signo sin particion.\r
\r
Por que parece correcto\r
Una unica integral luce mas compacta que resolver por segmentos.\r
\r
Senal de deteccion\r
El resultado contradice lectura geometrica del area orientada en F-x.\r
\r
Mini-ejemplo de contraste\r
Si parte del perfil esta sobre el eje y parte bajo el eje, debe existir cancelacion parcial.\r
\r
Correccion conceptual\r
Partir el dominio en subtramos y sumar contribuciones firmadas.\r
\r
### Error\r
Mezclar unidades al usar [[Fmed]] o limites.\r
\r
Por que parece correcto\r
La cuenta numerica cierra aunque haya escalas incompatibles.\r
\r
Senal de deteccion\r
Comparar con referencia integral produce discrepancias grandes sin explicacion fisica.\r
\r
Mini-ejemplo de contraste\r
Usar centimetros en un extremo y metros en otro deforma [[W]] por factores grandes.\r
\r
Correccion conceptual\r
Normalizar a SI antes de operar y validar dimensiones al cerrar.\r
\r
## Errores de interpretación\r
\r
### Error\r
Entregar numero final sin declarar validez de modelo.\r
\r
Por que parece correcto\r
Muchos formatos de evaluacion priorizan resultado numerico sobre argumento fisico.\r
\r
Senal de deteccion\r
No se reporta cuando conviene cambiar a integral por tramos ni error esperado.\r
\r
Mini-ejemplo de contraste\r
Dos metodos pueden coincidir en un caso y divergir con pequenos cambios de intervalo.\r
\r
Correccion conceptual\r
Incluir alcance, limites y criterio de escalado junto con el resultado.\r
\r
### Error\r
Presentar estimacion como si fuera valor exacto.\r
\r
Por que parece correcto\r
La aproximacion por [[Fmed]] produce una salida limpia y unica.\r
\r
Senal de deteccion\r
No se etiqueta la salida como aproximada ni se acompana de tolerancia.\r
\r
Mini-ejemplo de contraste\r
En perfiles no lineales severos, la media puede sesgar el trabajo de forma sistematica.\r
\r
Correccion conceptual\r
Etiquetar estimacion, declarar criterio y comparar con referencia cuando sea posible.\r
\r
## Regla de autocontrol rápido\r
\r
1. Declara sistema, referencia y limites [[x1]] y [[x2]].\r
2. Elige entre integral exacta, integral por tramos o [[Fmed]] con justificacion.\r
3. Conserva signos de todas las contribuciones.\r
4. Verifica dimensiones y orden de magnitud.\r
5. Cierra con lectura fisica y limite de validez del modelo.`;export{r as default};
