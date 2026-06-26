const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un bloque de [[m]] = 12 kg se mueve sobre un plano inclinado de [[theta]] = 25 grados. El bloque esta unido por una cuerda que ejerce [[T]] paralela al plano hacia arriba. El contacto con el plano puede estar en regimen estatico o cinetico segun la condicion de arrastre. Se pide construir el diagrama de cuerpo libre, proyectar por ejes tangencial-normal y determinar [[ax]] y [[ay]] para dos escenarios: sin deslizamiento y con deslizamiento.\r
\r
Adicionalmente, se solicita justificar cuando usar [[fs]] o [[fk]], verificar coherencia dimensional, y cerrar con interpretacion fisica de regimen.\r
\r
## Datos\r
\r
- [[m]] = 12 kg\r
- [[g]] = 9.81 m/s^2\r
- [[theta]] = 25 grados\r
- [[mu_s]] = 0.42\r
- [[mu_k]] = 0.30\r
- Tension aplicada [[T]] = 70 N\r
- Convencion: eje x paralelo al plano y eje y normal al plano\r
- Estado A: adherencia (sin deslizamiento)\r
- Estado B: deslizamiento descendente\r
\r
## Definición del sistema\r
\r
Sistema aislado: bloque.\r
\r
Interacciones externas consideradas en el DCL:\r
\r
- Peso [[P]], aplicado por la Tierra.\r
- Normal [[N]], aplicada por el plano.\r
- Tension [[T]], aplicada por la cuerda.\r
- Rozamiento de contacto: [[fs]] o [[fk]] segun regimen.\r
\r
No se incluyen fuerzas internas del bloque porque no pertenecen al balance externo.\r
\r
## Modelo físico\r
\r
Se aplica mecanica clasica con fuerzas externas proyectadas por ejes:\r
\r
{{f:newton_vectorial}}\r
\r
{{f:newton_x}}\r
\r
{{f:newton_y}}\r
\r
{{f:componentes_peso_plano}}\r
\r
{{f:equilibrio_vertical}}\r
\r
{{f:rozamiento_estatico}}\r
\r
{{f:rozamiento_cinetico}}\r
\r
El modelo requiere declarar primero el regimen de contacto y luego elegir la ecuacion de rozamiento correspondiente.\r
\r
## Justificación del modelo\r
\r
Este modelo es apropiado porque el sistema es macroscópico, la velocidad es moderada y la aproximacion de rigidez del bloque/plano es razonable. Se considera [[g]] uniforme y se desprecia deformacion significativa del contacto.\r
\r
La descomposicion del peso en [[Ppar]] y [[Pperp]] es necesaria porque los ejes no son horizontal-vertical, sino adaptados al plano. Esto simplifica el balance por ejes y permite distinguir claramente condicion normal de condicion tangencial.\r
\r
El rozamiento se modela por dos leyes dependiendo del estado:\r
\r
- Si no hay deslizamiento, [[fs]] cumple una cota con [[mu_s]] y [[N]].\r
- Si hay deslizamiento, [[fk]] queda fijado por [[mu_k]] y [[N]].\r
\r
Por tanto, la validez del resultado depende de la consistencia entre hipotesis de regimen y observacion fisica.\r
\r
## Resolución simbólica\r
\r
1) Proyeccion del peso:\r
\r
- [[Ppar]] = [[m]]*[[g]]*sin([[theta]])\r
- [[Pperp]] = [[m]]*[[g]]*cos([[theta]])\r
\r
2) Eje normal (y):\r
\r
Si no hay separacion del plano, [[ay]] = 0 y el balance vertical da [[N]] aproximadamente igual a [[Pperp]].\r
\r
3) Escenario A (sin deslizamiento):\r
\r
- Se verifica si existe [[fs]] tal que satisfaga el balance tangencial.\r
- Condicion de existencia: [[fs]] <= [[mu_s]]*[[N]].\r
\r
4) Escenario B (con deslizamiento descendente):\r
\r
- El rozamiento pasa a [[fk]] = [[mu_k]]*[[N]].\r
- El balance tangencial con [[T]], [[Ppar]] y [[fk]] determina [[Fx]] y por tanto [[ax]].\r
\r
6) Cierre vectorial global:\r
\r
{{f:newton_vectorial}}\r
\r
En esta lectura, [[Fext]] resume la accion externa total y debe ser coherente con las proyecciones por eje.\r
\r
5) Lectura por ejes:\r
\r
- [[Fy]] controla contacto y estabilidad normal.\r
- [[Fx]] controla cambio de velocidad sobre el plano.\r
\r
## Sustitución numérica\r
\r
1) Peso total:\r
\r
[[P]] = [[m]]*[[g]] = 12*9.81 = 117.72 N\r
\r
2) Componentes del peso:\r
\r
- [[Ppar]] aprox 117.72*sin(25) aprox 49.75 N\r
- [[Pperp]] aprox 117.72*cos(25) aprox 106.68 N\r
\r
3) Normal aproximada en apoyo:\r
\r
[[N]] aprox 106.68 N\r
\r
4) Cota estatica:\r
\r
[[mu_s]]*[[N]] aprox 0.42*106.68 aprox 44.81 N\r
\r
Para sostener adherencia, el [[fs]] requerido por balance tangencial debe ser menor o igual a 44.81 N.\r
\r
5) Rozamiento cinetico:\r
\r
[[fk]] aprox [[mu_k]]*[[N]] aprox 0.30*106.68 aprox 32.00 N\r
\r
6) Balance tangencial en escenario de deslizamiento descendente:\r
\r
La lectura cuantitativa da que el efecto combinado de [[T]] y [[fk]] puede compensar parcialmente [[Ppar]], pero el signo final de [[Fx]] depende de la direccion de rozamiento elegida segun movimiento relativo.\r
\r
En este caso de referencia, si el bloque desliza hacia abajo, [[fk]] apunta hacia arriba del plano. Entonces la tendencia neta se reduce frente al peso paralelo.\r
\r
## Validación dimensional\r
\r
- [[P]], [[N]], [[T]], [[fk]], [[fs]], [[Fx]] y [[Fy]] en N.\r
- [[a]], [[ax]], [[ay]] en m/s^2.\r
- [[mu_s]] y [[mu_k]] adimensionales.\r
- [[theta]] adimensional en formula trigonometrica.\r
\r
No se detecta conflicto dimensional. La consistencia final depende de signos y regimen de contacto.\r
\r
## Interpretación física\r
\r
La lectura principal es causal: el diagrama separa correctamente el rol de cada fuerza. [[P]] no actua alineado con el plano, por eso se descompone en [[Ppar]] y [[Pperp]]. [[Pperp]] controla carga normal y condiciona [[N]], mientras [[Ppar]] compite con [[T]] y rozamiento en el eje tangencial.\r
\r
Ademas, el vector [[Fext]] funciona como chequeo de consistencia: si las componentes por eje estan bien planteadas, la lectura vectorial global coincide con la tendencia de movimiento observada.\r
\r
Esto implica que un mismo valor de [[T]] puede producir resultados dinamicos distintos si cambian [[theta]], [[mu_s]] o [[mu_k]]. Por tanto, no hay una "fuerza unica de movimiento"; hay balance de interacciones con direcciones especificas.\r
\r
Si el estado es adherente, [[fs]] se adapta hasta cota y puede mantener [[ax]] cercano a cero. Si el estado cruza umbral, aparece [[fk]] y el sistema cambia de respuesta. Ese cambio de regimen es fisicamente significativo y no puede modelarse manteniendo la misma ecuacion de rozamiento.\r
\r
En conclusion, el DCL no solo resuelve un numero: organiza decision de modelo, explica sensibilidad a parametros y entrega criterio operativo para predecir deslizamiento.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En una banda inclinada de paqueteria, cajas de masa variable suben mediante arrastre por correa lateral. El equipo de operaciones observa que algunos paquetes pesados retroceden en ciertos turnos aun cuando el control mantiene la misma tension nominal. Se sospecha variacion de superficie de contacto por polvo fino y humedad.\r
\r
## Estimación física\r
\r
Tomemos un lote con [[m]] promedio de 18 kg y [[theta]] de 20 grados:\r
\r
- [[P]] aprox 176.6 N\r
- [[Ppar]] aprox 60.4 N\r
- [[Pperp]] aprox 165.8 N\r
\r
Si el contacto seco ofrece [[mu_s]] = 0.45, la cota de [[fs]] ronda 74.6 N. Si en turno humedo [[mu_s]] cae a 0.25, la cota baja a 41.5 N.\r
\r
Lectura cuantitativa: la caida de cota es de 33.1 N. Ese cambio de escala explica por que la misma estrategia de arrastre puede sostener adherencia en un turno y fallar en otro. En orden de magnitud, el margen pasa de alrededor de 10^1 N alto a un margen mucho mas estrecho.\r
\r
Si ademas aparece deslizamiento, el modelo con [[fk]] usando [[mu_k]] mas bajo reduce aun mas la capacidad de compensar [[Ppar]]. Por eso el comportamiento observado es coherente con transicion de regimen de contacto.\r
\r
## Interpretación\r
\r
El diagnostico correcto no es "la maquina pierde fuerza" en abstracto. El DCL muestra que el problema puede estar dominado por interfaz: cambia [[mu_s]], cambia cota de [[fs]], cambia criterio de no deslizamiento.\r
\r
Esto significa que la accion operativa debe combinar control y mantenimiento superficial. Aumentar tension puede ayudar, pero si no se estabiliza contacto, el sistema seguira alternando entre regimens con dispersion alta.\r
\r
Interpretacion causal final: el desempeno de transporte depende del balance entre [[T]], [[Ppar]] y capacidad de contacto determinada por [[N]], [[mu_s]] y [[mu_k]]. El DCL permite separar causa raiz de sintoma y reduce decisiones de ajuste ciego.\r
`;export{e as default};
