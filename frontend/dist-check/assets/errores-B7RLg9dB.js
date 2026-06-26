const e=`# Errores frecuentes: Coeficiente de arrastre\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir [[C_d]] con una fuerza\r
\r
### Por que parece correcto\r
En la practica, [[C_d]] aparece en la misma ecuacion que [[F_d]] y algunos estudiantes asumen que representa una fuerza adicional.\r
\r
### Por que es incorrecto\r
[[C_d]] es adimensional y resume efecto de forma/estela; la fuerza fisica es [[F_d]].\r
\r
### Señal de deteccion\r
En la conclusion escribes que "aumenta [[C_d]] y por eso aparece una fuerza nueva" sin recalcular [[F_d]].\r
\r
### Correccion conceptual\r
Separar roles: [[C_d]] describe penalizacion aerodinamica; [[F_d]] cuantifica la fuerza resistiva resultante.\r
\r
### Mini-ejemplo\r
Dos perfiles con distinta forma pueden tener [[C_d]] diferente y, con la misma [[v]], producir diferente [[F_d]] sin introducir ninguna fuerza extra en el modelo.\r
\r
### Error 2: Tratar [[C_d]] como constante universal del objeto\r
\r
### Por que parece correcto\r
Muchos ejercicios entregan un solo valor de [[C_d]] y parece que ese numero vale siempre.\r
\r
### Por que es incorrecto\r
[[C_d]] depende de condicion de flujo, orientacion y convencion de area [[A]].\r
\r
### Señal de deteccion\r
Usas el mismo [[C_d]] en dos escenarios con distinta postura o distinto rango de [[v]] sin justificar.\r
\r
### Correccion conceptual\r
Declarar dominio de validez del valor y recalibrar cuando cambie condicion relevante.\r
\r
### Mini-ejemplo\r
Un ciclista erguido y acoplado no debe compartir automaticamente el mismo [[C_d]] aunque la bicicleta sea la misma.\r
\r
### Error 3: Comparar [[C_d]] sin fijar referencia de [[A]]\r
\r
### Por que parece correcto\r
Se piensa que comparar numeros adimensionales siempre es directo.\r
\r
### Por que es incorrecto\r
Si [[A]] no se define igual, la comparacion entre valores de [[C_d]] puede ser engañosa.\r
\r
### Señal de deteccion\r
Tus fuentes reportan [[C_d]] con convenciones distintas de area y aun asi concluyes superioridad de forma.\r
\r
### Correccion conceptual\r
Verificar y unificar referencia de [[A]] antes de comparar.\r
\r
### Mini-ejemplo\r
Un valor de [[C_d]] referido a area frontal no es directamente comparable con otro referido a area mojada.\r
\r
## Errores de modelo\r
\r
### Error 4: Aplicar el modelo fuera de su rango sin declararlo\r
\r
### Por que parece correcto\r
La ecuacion de arrastre funciona en muchos problemas introductorios y genera confianza excesiva.\r
\r
### Por que es incorrecto\r
El parametro efectivo puede variar por regimen; un solo valor de [[C_d]] puede no representar todo el rango.\r
\r
### Señal de deteccion\r
La prediccion de [[F_d]] falla sistematicamente al subir [[v]] y no revisas hipotesis.\r
\r
### Correccion conceptual\r
Introducir modelo por tramos o dependencia de [[C_d]] con condiciones cuando la estabilidad se pierde.\r
\r
### Mini-ejemplo\r
Si en baja velocidad ajusta un [[C_d]] y en alta velocidad hace falta otro muy distinto, no conviene forzar un valor unico.\r
\r
### Error 5: Ignorar lectura energetica y reportar solo [[F_d]]\r
\r
### Por que parece correcto\r
La mayoria de ejercicios pide fuerza y el estudiante cierra ahi.\r
\r
### Por que es incorrecto\r
La factibilidad operativa suele depender de [[P_d]], no solo de [[F_d]].\r
\r
### Señal de deteccion\r
Concluyes que el sistema es viable porque [[F_d]] parece moderada, pero no verificas demanda de [[P_d]].\r
\r
### Correccion conceptual\r
Completar siempre con estimacion de potencia para la velocidad de interes.\r
\r
### Mini-ejemplo\r
Dos disenos con [[F_d]] cercanas a media velocidad pueden diferir mucho en [[P_d]] al acercarse a velocidad objetivo.\r
\r
## Errores matemáticos\r
\r
### Error 6: Conversión de unidades inconsistente en [[rho]], [[A]] o [[v]]\r
\r
### Por que parece correcto\r
Las cifras parecen razonables y el calculo produce un numero coherente a simple vista.\r
\r
### Por que es incorrecto\r
Errores de conversion alteran [[F_d]] y [[P_d]] por factores grandes.\r
\r
### Señal de deteccion\r
El resultado final contradice ordenes de magnitud conocidos o cambia drasticamente al revisar unidades.\r
\r
### Correccion conceptual\r
Trabajar en SI desde el inicio y verificar dimensiones en cada etapa.\r
\r
### Mini-ejemplo\r
Usar [[A]] en cm^2 sin convertir puede inflar o reducir [[F_d]] por ordenes de magnitud.\r
\r
### Error 7: Despejar [[C_d]] sin cuidar restricciones\r
\r
### Por que parece correcto\r
El despeje algebraico parece directo y mecanico.\r
\r
### Por que es incorrecto\r
Si [[rho]], [[A]] o [[v]] son inconsistentes o nulos, el valor despejado pierde sentido fisico.\r
\r
### Señal de deteccion\r
Aparece [[C_d]] negativa o extremadamente grande sin justificacion experimental.\r
\r
### Correccion conceptual\r
Comprobar restricciones del despeje y consistencia experimental antes de interpretar.\r
\r
### Mini-ejemplo\r
Si [[v]] casi cero se usa en el despeje, pequeñas incertidumbres producen un [[C_d]] artificialmente enorme.\r
\r
## Errores de interpretación\r
\r
### Error 8: Concluir mejora aerodinamica solo con un punto de velocidad\r
\r
### Por que parece correcto\r
Un dato favorable en un punto parece suficiente para decidir.\r
\r
### Por que es incorrecto\r
La decision robusta requiere tendencia en un rango de [[v]], no un punto aislado.\r
\r
### Señal de deteccion\r
Recomiendas un diseno por una sola medicion sin contrastar comportamiento global.\r
\r
### Correccion conceptual\r
Comparar curvas o varios puntos y declarar incertidumbre.\r
\r
### Mini-ejemplo\r
Un casco puede mejorar [[C_d]] a velocidad media y no aportar ventaja clara en otra zona de operacion.\r
\r
### Error 9: Presentar precision excesiva en [[C_d]], [[F_d]] o [[P_d]]\r
\r
### Por que parece correcto\r
Mas decimales se perciben como mayor rigor.\r
\r
### Por que es incorrecto\r
La incertidumbre experimental limita precision fisica real.\r
\r
### Señal de deteccion\r
Reportas cuatro o cinco decimales sin incluir margen de error ni calidad de datos.\r
\r
### Correccion conceptual\r
Usar cifras significativas coherentes con el experimento y declarar rango de confianza.\r
\r
### Mini-ejemplo\r
Con datos de campo de baja resolucion, informar [[P_d]] con dos o tres cifras suele ser mas honesto.\r
\r
## Regla de autocontrol rápido\r
\r
Checklist de cierre:\r
\r
- [[C_d]] interpretado como parametro, no como fuerza.\r
- Referencia de [[A]] declarada y consistente.\r
- Calculo de [[F_d]] y [[P_d]] con unidades SI.\r
- Dominio de validez explicitado para el valor de [[C_d]].\r
- Conclusion vinculada a decision fisica concreta.\r
\r
Si un punto falla, corrige antes de validar resultado.`;export{e as default};
