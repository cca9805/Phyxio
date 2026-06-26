const e=`# Errores frecuentes en energia potencial gravitatoria\r
\r
## Errores conceptuales\r
\r
### Error 1: confundir [[U]] con una energia siempre positiva\r
Por que parece correcto: muchas magnitudes energeticas escolares se presentan sin discutir referencia.\r
Senal de deteccion: aparece [[U]] positiva en estado ligado sin declarar cambio de referencia.\r
Mini-ejemplo de contraste: en referencia al infinito, orbita baja requiere [[U]] negativa.\r
Correccion conceptual: declarar referencia antes del calculo y sostenerla en todo el ejercicio.\r
\r
## Errores de modelo\r
\r
### Error 2: usar aproximacion local fuera de dominio\r
Por que parece correcto: la forma local parece mas rapida y familiar.\r
Senal de deteccion: se aplica [[h]] y [[g]] en cambios de radio comparables al radio planetario.\r
Mini-ejemplo de contraste: si h/r supera un umbral pequeno, el error de [[DeltaU]] crece y cambia lectura.\r
Correccion conceptual: cambiar al modelo general con [[ri]] y [[rf]] cuando la escala radial no es local.\r
\r
## Errores matematicos\r
\r
### Error 3: invertir el orden de estados en [[DeltaU]]\r
Por que parece correcto: el estudiante sustituye datos sin mapear estado inicial y final.\r
Senal de deteccion: resultado de signo contradice el sentido fisico del desplazamiento.\r
Mini-ejemplo de contraste: proceso de ascenso debe mostrar [[DeltaU]] positiva bajo referencia estandar.\r
Correccion conceptual: escribir primero narrativa de estados, luego sustitucion numerica.\r
\r
### Error 4: olvidar coherencia entre [[Wg]] y [[DeltaU]]\r
Por que parece correcto: se mezclan convenciones de trabajo sin validar signo.\r
Senal de deteccion: se obtiene [[Wg]] con mismo signo que [[DeltaU]] en proceso conservativo.\r
Mini-ejemplo de contraste: si gravedad entrega energia cinetica, [[Wg]] debe oponerse a [[DeltaU]].\r
Correccion conceptual: usar siempre chequeo cruzado de conservacion antes de cerrar respuesta.\r
\r
## Errores de interpretacion\r
\r
### Error 5: cerrar con numero sin lectura fisica\r
Por que parece correcto: el procedimiento algebraico parece completo.\r
Senal de deteccion: no se explica que implican signos de [[DeltaU]], [[DeltaK]] o [[E]].\r
Mini-ejemplo de contraste: dos resultados numericos similares pueden implicar regimenes fisicos opuestos.\r
Correccion conceptual: agregar una frase final sobre estado ligado, transferencia y sentido del movimiento.\r
\r
## Regla de autocontrol rapido\r
\r
Si el problema es radial, primero define estados [[ri]] y [[rf]]. Si el proceso es conservativo, verifica oposicion de signos entre [[Wg]] y [[DeltaU]]. Si la escala no es local, evita usar [[h]] y [[g]] como modelo principal. Si la interpretacion final no menciona estado energetico y consecuencia dinamica, la solucion todavia no esta completa.\r
\r
Una rutina adicional muy util es dividir siempre la revision en tres capas. Capa de datos: comprobar unidades y orden de estados. Capa de modelo: confirmar si corresponde aproximacion local o expresion radial completa. Capa de lectura fisica: asegurar que la conclusion traduzca signos en comportamiento mecanico. Esta rutina evita que un resultado numericamente correcto termine siendo conceptualmente incorrecto.\r
\r
Tambien conviene registrar un mini checklist de examen. Pregunta uno: la referencia energetica quedo declarada. Pregunta dos: el signo de [[DeltaU]] coincide con el sentido del desplazamiento radial. Pregunta tres: [[Wg]] cumple oposicion de signo en caso conservativo. Pregunta cuatro: la conclusion menciona estado ligado o no ligado cuando aplica. Si alguna respuesta es negativa, la solucion no esta cerrada.`;export{e as default};
