const e=`# Aplicaciones de las variables intensivas\r
\r
## 1. Control de temperatura en procesos térmicos\r
\r
Variable dominante: [[T]]\r
\r
Límite de validez: la lectura debe representar una region suficientemente uniforme o una media definida.\r
\r
En hornos, intercambiadores y baños térmicos, la temperatura se usa para decidir si dos cuerpos pueden intercambiar calor de forma neta. Una pieza grande y una pieza pequeña pueden tener la misma [[T]], aunque la grande almacene más energía. Por eso el control de proceso no se basa solo en cantidad de material, sino en la condición térmica medida.\r
\r
La lectura de [[T]] permite comparar estados. Si un sensor marca un valor superior al objetivo, el sistema se enfria o reduce aporte energético. Si marca un valor inferior, se calienta. En ambos casos la variable no cuenta energía total; actua como indicador de direccion y compatibilidad térmica.\r
\r
En aplicaciones reales hay que distinguir temperatura local y temperatura media. Si un horno tiene zonas calientes y frias, una sola [[T]] puede ocultar gradientes. Entonces se cambia al modelo de campo o se usan varios sensores. La variable sigue siendo intensiva, pero la descripción necesita resolucion espacial.\r
\r
## 2. Seguridad en recipientes a presión\r
\r
Variable dominante: [[P]]\r
\r
Límite de validez: la presión debe estar definida para el fluido y la frontera evaluada; la fuerza total requiere area.\r
\r
En calderas, botellas de gas y circuitos hidraulicos, la presión indica el empuje por unidad de area. Dos recipientes con igual [[P]] estan sometidos a la misma intensidad mecánica local, aunque el recipiente grande contenga más masa de fluido. Esta diferencia evita comparar seguridad solo por tamaño.\r
\r
La [[P]] no se suma al conectar dos volumenes iguales en el mismo estado. Lo que puede cambiar es el inventario total y la energía almacenada. Para calcular fuerzas en paredes se multiplica por area, pero esa fuerza ya no es una variable intensiva. El diseño correcto combina lectura intensiva y geometria.\r
\r
El limite aparece cuando hay flujo rápido, golpes de ariete o diferencias de altura grandes. En esos casos una presión única puede ser insuficiente y se necesitan perfiles temporales o espaciales. La idea intensiva permanece, pero se aplica localmente.\r
\r
## 3. Densidad en identificacion de materiales\r
\r
Variable dominante: [[rho]]\r
\r
Límite de validez: masa y volumen deben referirse a la misma muestra y la muestra debe ser representativa.\r
\r
La densidad permite reconocer materiales sin depender de la cantidad medida. Un pequeño bloque de aluminio y un bloque grande del mismo material tienen distinta [[m]] y distinto [[V]], pero una [[rho]] semejante. Por eso la densidad funciona como huella de concentracion de masa.\r
\r
En laboratorio se mide masa y volumen, pero el resultado se interpreta como variable intensiva. Si se duplica el tamaño del bloque, se duplican ambas extensivas y el cociente permanece prácticamente igual. Esta propiedad permite comparar solidos, liquidos y gases con muestras de tamaños diferentes.\r
\r
La aplicación exige cuidado si el material es poroso, esta estratificado o contiene burbujas. Una densidad media puede servir para inventario, pero no para describir cada region interna. En esos casos conviene declarar si se usa densidad local, aparente o promedio.\r
\r
## 4. Mezclas y promedios ponderados\r
\r
Variable dominante: [[X_int]]\r
\r
Límite de validez: la mezcla debe admitir una ponderacion compatible y no estar dominada por efectos no lineales.\r
\r
En mezclas simples, una propiedad intensiva final suele quedar entre los valores iniciales. Si se mezclan cantidades distintas, el valor final se acerca más a la parte que aporta más materia. Esto ocurre en estimaciones de temperatura, concentracion o propiedades efectivas cuando el modelo físico permite promediar.\r
\r
La regla evita sumar intensivas. Si una porcion tiene [[X_A]] y otra tiene [[X_B]], el resultado no es la suma de ambas lecturas. La cantidad asociada, como [[m]], actua como peso. Esta logica se usa en balances energéticos simplificados, mezclas de soluciones y estimaciones de propiedades promedio.\r
\r
El limite aparece cuando hay reacciones, cambios de fase o propiedades no lineales. Entonces el promedio ponderado deja de representar la física completa y se requiere un modelo termodinámico más detallado. La ventaja del enfoque intensivo es que muestra rápidamente cuando una media simple es una aproximacion y no una ley universal.\r
\r
## 5. Equilibrio termodinámico y diagnostico de flujo\r
\r
Variable dominante: [[X_int]]\r
\r
Límite de validez: la variable comparada debe ser la que gobierna el intercambio permitido por la frontera.\r
\r
Las intensivas son criterios de equilibrio. La igualdad de [[T]] elimina la tendencia neta al intercambio de calor; la igualdad de [[P]] elimina una tendencia mecánica en fronteras moviles; la igualdad de otras intensivas controla intercambio material o composicional. Esta lectura convierte las variables intensivas en herramientas de diagnostico.\r
\r
En sistemas abiertos, las lecturas intensivas en entrada y salida indican si hay calentamiento, compresión, expansión o mezcla. El caudal cuenta cantidad por tiempo, pero [[T]], [[P]] y [[rho]] describen el estado de lo que fluye. Separar ambas cosas permite escribir balances sin perder la interpretacion física.\r
\r
La aplicación falla si la frontera no permite el intercambio correspondiente. Dos cuerpos con distinta temperatura no alcanzan equilibrio térmico si estan aislados entre si. Dos regiones con distinta presión pueden mantenerse separadas por una pared rigida. Por eso siempre se interpreta una diferencia intensiva junto con la restriccion física que podria liberar el proceso.\r
`;export{e as default};
