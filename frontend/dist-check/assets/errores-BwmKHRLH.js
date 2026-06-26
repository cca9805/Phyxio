const e=`# Errores frecuentes\r
\r
## Errores conceptuales\r
\r
### Error 1: pensar que [[K]] crece igual que [[v]]\r
Por que parece correcto: en muchas relaciones introductorias duplicar una variable duplica el resultado.\r
Señal de detección: el alumno afirma que doblar la rapidez solo dobla la energia cinetica.\r
Mini-ejemplo de contraste: con la misma [[m]], pasar de una rapidez a otra que la duplica hace que [[K]] se multiplique por cuatro.\r
Corrección conceptual: recordar que el leaf es sensible sobre todo a [[v]], porque [[K]] depende cuadraticamente de ella.\r
\r
### Error 2: interpretar una velocidad negativa como energia negativa\r
Por que parece correcto: en cinemática una componente de velocidad puede llevar signo.\r
Señal de detección: aparece una [[K]] negativa tras sustituir datos.\r
Mini-ejemplo de contraste: un coche que se mueve en sentido contrario sigue teniendo energia capaz de frenar, calentar o impactar.\r
Corrección conceptual: usar [[v]] como rapidez o modulo de la velocidad, no como componente algebraica aislada.\r
\r
## Errores de modelo\r
\r
### Error 3: aplicar el modelo traslacional cuando la rotacion importa\r
Por que parece correcto: la formula basica es simple y se recuerda con facilidad.\r
Señal de detección: el problema habla de ruedas, discos o cuerpos rodando, pero solo se usa la energia traslacional.\r
Mini-ejemplo de contraste: una rueda rodando reparte energia entre traslacion y rotacion, de modo que [[K]] traslacional no cuenta toda la historia.\r
Corrección conceptual: decidir primero si el movimiento relevante es solo traslacional o si conviene ampliar el modelo.\r
\r
### Error 4: ignorar que la masa cambia\r
Por que parece correcto: la mayoria de ejercicios introductorios dejan fija la masa [[m]].\r
Señal de detección: se aplica la misma relacion a cohetes o sistemas que expulsan materia.\r
Mini-ejemplo de contraste: si la masa disminuye durante el proceso, la lectura energetica simple ya no es suficiente.\r
Corrección conceptual: revisar siempre si [[m]] puede tomarse como aproximadamente constante antes de sustituir.\r
\r
## Errores matemáticos\r
\r
### Error 5: mezclar unidades y arruinar el orden de magnitud\r
Por que parece correcto: el estudiante recuerda la formula pero no controla el sistema de unidades.\r
Señal de detección: se usan gramos con metros por segundo o kilometros por hora sin conversion previa.\r
Mini-ejemplo de contraste: una pelota puede pasar de unos pocos julios a una cifra absurda solo por dejar la masa en gramos.\r
Corrección conceptual: convertir primero a SI y comprobar al final que [[K]], [[dK]] y [[Wnet]] queden expresadas en julios.\r
\r
### Error 6: perder el signo de [[dK]] o de [[Wnet]]\r
Por que parece correcto: a veces se cree que toda cantidad energetica debe reportarse positiva.\r
Señal de detección: una frenada produce un cambio de energia cinetica positivo sin justificacion.\r
Mini-ejemplo de contraste: si [[Kf]] es menor que [[Ki]], entonces [[dK]] debe resultar negativa y [[Wnet]] tendera a ser negativa tambien.\r
Corrección conceptual: reservar la no negatividad obligatoria para [[K]], [[Ki]] y [[Kf]], y conservar el signo cuando se habla de cambio o trabajo neto.\r
\r
## Errores de interpretación\r
\r
### Error 7: creer que conocer [[K]] basta para entender todo el movimiento\r
Por que parece correcto: una sola magnitud energetica parece resumirlo todo.\r
Señal de detección: se comparan dos sistemas con la misma [[K]] como si fueran identicos en toda respuesta mecanica.\r
Mini-ejemplo de contraste: dos sistemas pueden compartir [[K]] y sin embargo diferir mucho en momento lineal, tiempo de frenado o modo de contacto.\r
Corrección conceptual: interpretar [[K]] como una lectura potente pero parcial del estado mecanico.\r
\r
### Error 8: usar [[Wnet]] como si fuera el trabajo de una sola fuerza\r
Por que parece correcto: en ejemplos simples una sola accion parece dominar.\r
Señal de detección: la variacion [[dK]] se atribuye solo a una fuerza visible mientras otras se ignoran.\r
Mini-ejemplo de contraste: en una frenada real pueden intervenir frenos, pendiente, rozamiento y resistencia del aire.\r
Corrección conceptual: declarar que [[Wnet]] representa la suma de los trabajos de todas las fuerzas relevantes del sistema elegido.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de aceptar el resultado, revisa cuatro puntos. Primero, [[K]], [[Ki]] y [[Kf]] no pueden ser negativas. Segundo, si el sistema se frena, [[dK]] y normalmente [[Wnet]] deben ser negativas. Tercero, una pequena variacion relativa en [[v]] puede producir un gran cambio en [[K]], asi que el orden de magnitud debe revisarse con cuidado. Cuarto, si el numero no cuenta una historia fisica clara sobre por que el sistema gano o perdio energia cinetica, el ejercicio aun no esta bien cerrado.`;export{e as default};
