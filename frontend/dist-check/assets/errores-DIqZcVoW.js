const e=`## Errores conceptuales\r
\r
### Error 1: pensar que Kirchhoff es solo una receta\r
Por que parece correcto:\r
Se practican ejercicios repetitivos y se memoriza forma sin fisica.\r
\r
Senal de deteccion:\r
Se escriben ecuaciones sin justificar nodo o malla correspondiente.\r
\r
Mini-ejemplo de contraste:\r
Al cambiar la topologia, la receta deja de funcionar aunque la algebra sea correcta.\r
\r
Correccion conceptual:\r
Primero define principio conservativo, despues ecuacion.\r
\r
### Error 2: creer que signo negativo invalida la solucion\r
Por que parece correcto:\r
Se asocia negativo con “mal calculado”.\r
\r
Senal de deteccion:\r
Se cambia signo final para “normalizar” respuesta.\r
\r
Mini-ejemplo de contraste:\r
Una corriente negativa suele indicar direccion real opuesta al supuesto.\r
\r
Correccion conceptual:\r
Conserva el valor y corrige interpretacion de sentido.\r
\r
## Errores de modelo\r
\r
### Error 3: mezclar variables de tramos distintos\r
Por que parece correcto:\r
Se usan magnitudes cercanas en el dibujo sin verificar pertenencia.\r
\r
Senal de deteccion:\r
Se combina corriente de una rama con resistencia de otra al calcular caida.\r
\r
Mini-ejemplo de contraste:\r
Puede cerrar una cuenta local y romper cierre global de red.\r
\r
Correccion conceptual:\r
Cada ecuacion local usa variables del mismo tramo fisico.\r
\r
### Error 4: usar ecuaciones redundantes como si fueran nuevas\r
Por que parece correcto:\r
Mas ecuaciones parece igual a mas precision.\r
\r
Senal de deteccion:\r
Sistema singular o con soluciones inestables pese a datos razonables.\r
\r
Mini-ejemplo de contraste:\r
Dos balances equivalentes de nodo no agregan informacion independiente.\r
\r
Correccion conceptual:\r
Selecciona base minima independiente y usa el resto para control.\r
\r
## Errores matemáticos\r
\r
### Error 5: cambiar convencion de signos a mitad del desarrollo\r
Por que parece correcto:\r
Al pasar de nodo a malla se reinicia orientacion sin notarlo.\r
\r
Senal de deteccion:\r
Una misma rama aparece con signos opuestos sin explicacion.\r
\r
Mini-ejemplo de contraste:\r
Se obtiene numero plausible en una ecuacion y contradiccion en otra.\r
\r
Correccion conceptual:\r
Congela referencias desde el diagrama inicial.\r
\r
### Error 6: perder control dimensional\r
Por que parece correcto:\r
Se omiten unidades para agilizar calculo.\r
\r
Senal de deteccion:\r
Aparecen sumas o restas entre magnitudes incompatibles.\r
\r
Mini-ejemplo de contraste:\r
No puedes sumar corriente y tension en un mismo termino fisico.\r
\r
Correccion conceptual:\r
Verifica unidades en cada ecuacion de cierre.\r
\r
## Errores de interpretación\r
\r
### Error 7: cerrar ejercicio sin validacion cruzada\r
Por que parece correcto:\r
Una incognita coincide con expectativa y se detiene el proceso.\r
\r
Senal de deteccion:\r
No se revisan nodos secundarios ni mallas adicionales.\r
\r
Mini-ejemplo de contraste:\r
Un valor puntual correcto puede convivir con red global incoherente.\r
\r
Correccion conceptual:\r
Aplica chequeo nodal y de malla al final.\r
\r
### Error 8: confundir resultado numerico con decision tecnica\r
Por que parece correcto:\r
Se asume que resolver ecuaciones agota el problema.\r
\r
Senal de deteccion:\r
No se analiza impacto sobre proteccion, caida o seguridad.\r
\r
Mini-ejemplo de contraste:\r
Un resultado correcto puede exigir rediseno por sobrecorriente en rama.\r
\r
Correccion conceptual:\r
Traduce solucion a accion de diseno, mantenimiento o proteccion.\r
\r
## Regla de autocontrol rápido\r
Antes de aceptar una solucion, revisa: referencias fijas, ecuaciones independientes, consistencia tramo-variable, cierre de nodos criticos, cierre de mallas criticas y coherencia dimensional. Si uno falla, reabre planteo antes de interpretar.`;export{e as default};
