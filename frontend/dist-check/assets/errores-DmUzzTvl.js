const e=`# Errores frecuentes en resistencias en paralelo\r
\r
## Errores conceptuales\r
### Error 1: Tratar paralelo como serie\r
Por que parece correcto:\r
Se ve una lista de resistencias y se aplica la regla más recordada de suma directa.\r
\r
Senal de deteccion:\r
[[Req]] queda mayor que la menor rama activa.\r
\r
Mini-ejemplo de contraste:\r
Con dos ramas de valor distinto, la red total debe conducir más que cada rama individual.\r
\r
Correccion conceptual:\r
Usar suma de recíprocos o suma de conductancias según la representación elegida.\r
\r
### Error 2: Suponer corrientes iguales en todas las ramas\r
Por que parece correcto:\r
Se confunde igualdad de tensión con igualdad de corriente.\r
\r
Senal de deteccion:\r
Se reporta [[I1]] igual a [[I2]] con [[R1]] y [[R2]] claramente diferentes.\r
\r
Mini-ejemplo de contraste:\r
En ramas con resistencia diferente, la de menor resistencia debe absorber más corriente para la misma [[V]].\r
\r
Correccion conceptual:\r
Separar mentalmente reglas de serie y paralelo antes de comenzar cálculos.\r
\r
## Errores de modelo\r
### Error 3: Incluir en el modelo una rama que no está conectada\r
Por que parece correcto:\r
El esquema teórico original tenía tres ramas y se mantiene sin revisar montaje real.\r
\r
Senal de deteccion:\r
El balance de [[It]] no coincide con medición aun con unidades correctas.\r
\r
Mini-ejemplo de contraste:\r
Si una rama está abierta, su corriente es nula y no debe contribuir al cierre total.\r
\r
Correccion conceptual:\r
Actualizar topología efectiva antes de aplicar ecuaciones.\r
\r
### Error 4: Ignorar resistencia de cable cuando sí es relevante\r
Por que parece correcto:\r
Se asume que el cable siempre tiene impacto despreciable.\r
\r
Senal de deteccion:\r
La diferencia entre predicción y medición supera el umbral aceptable de práctica.\r
\r
Mini-ejemplo de contraste:\r
En corrientes altas y conductores largos, la caída en cable puede modificar reparto de ramas.\r
\r
Correccion conceptual:\r
Cambiar a modelo extendido cuando conviene cambiar de modelo por impacto operativo.\r
\r
## Errores matematicos\r
### Error 5: Mezclar ohm y kiloohm en una misma sustitución\r
Por que parece correcto:\r
Los números parecen razonables a simple vista y no se percibe la escala.\r
\r
Senal de deteccion:\r
Corrientes de rama con órdenes de magnitud incompatibles con la fuente.\r
\r
Mini-ejemplo de contraste:\r
Una rama de kiloohm bajo pocos voltios no puede producir corriente de amperios en régimen lineal.\r
\r
Correccion conceptual:\r
Normalizar unidades antes de operar y verificar escala al final.\r
\r
### Error 6: Sumar corrientes sin convención de signo consistente\r
Por que parece correcto:\r
Se copia el resultado parcial de cada rama sin revisar referencia de sentido.\r
\r
Senal de deteccion:\r
[[It]] cambia de valor según el orden de escritura de la suma.\r
\r
Mini-ejemplo de contraste:\r
Con una única convención, el cierre nodal debe ser único y reproducible.\r
\r
Correccion conceptual:\r
Fijar orientación de corrientes al inicio y mantenerla en todo el desarrollo.\r
\r
## Errores de interpretacion\r
### Error 7: Concluir que una rama es segura solo por corriente moderada\r
Por que parece correcto:\r
Se observa una corriente no extrema y se omite análisis térmico local.\r
\r
Senal de deteccion:\r
Componente caliente en rama con resistencia baja y ventilación deficiente.\r
\r
Mini-ejemplo de contraste:\r
Dos ramas con corrientes cercanas pueden disipar diferente según resistencia y montaje.\r
\r
Correccion conceptual:\r
Interpretar resultados de corriente junto con criterio térmico y de protección.\r
\r
### Error 8: Aceptar resultado numérico sin contraste de tendencia\r
Por que parece correcto:\r
La cuenta cierra y se toma como verdad final.\r
\r
Senal de deteccion:\r
Agregar una rama conductora produce menor corriente total en el reporte.\r
\r
Mini-ejemplo de contraste:\r
En paralelo pasivo, mayor conductancia total debe asociarse a mayor demanda de corriente para la misma tensión.\r
\r
Correccion conceptual:\r
Incluir siempre chequeo de tendencia física además del chequeo algebraico.\r
\r
## Regla de autocontrol rapido\r
Antes de cerrar un ejercicio, confirma cuatro puntos: [[Req]] menor que cada rama activa, suma de corrientes de rama coherente con [[It]], unidades homogéneas en toda sustitución y tendencia física consistente al agregar o retirar ramas.`;export{e as default};
