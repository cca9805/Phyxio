# Sistemas conservativos

## Idea clave
Un sistema es conservativo cuando el trabajo de sus fuerzas conservativas depende solo de estados inicial y final, no de la trayectoria. Eso permite definir una funcion potencial bien comportada.

## 1- Que estudia este tema y por que es fundamental
Este tema no solo da formulas: da criterio de modelo. Te enseña cuando puedes usar potencial y conservacion mecanica con validez fisica.

## 2- Imagen fisica correcta
Si recorres un ciclo cerrado en un campo conservativo ideal, el trabajo neto conservativo es cero. Por eso no hay "ganancia neta" de energia mecanica por completar un lazo.

**En el espacio fase:** Si graficas posicion vs velocidad, todos los puntos de una trayectoria conservativa lie en curva cerrada de energia constante (elipse para oscilador armonico, hiperbola para movimiento no confinado).

**Independencia de trayectoria:** Dos particulas que parten del mismo lugar pueden tomar caminos radicalmente distintos (directa, rodeos, espirales) pero si comienzan y terminan en los mismos puntos, el trabajo conservativo es identico.

## 3- Variables y conceptos clave
- Trabajo conservativo: $W_c$.
- Energia potencial asociada: $U$.
- Recorrido cerrado: $\oint$.

## 4- Formulas esenciales
Relacion trabajo-potencial:

$$
W_c=-\Delta U
$$

Ciclo cerrado en campo conservativo:

$$
\oint \vec F_c\cdot d\vec r=0
$$

Conservacion mecanica sin fuerzas no conservativas:

$$
\Delta(K+U)=0
$$

## 5- Dominio de validez (criterios practicos)
Valido para fuerzas realmente conservativas (gravitatoria ideal, elastica lineal ideal). Si hay rozamiento o histeresis, el sistema deja de ser conservativo.

**Lista de fuerzas conservativas comunes:**
- Gravedad uniforme: $\vec F=-mg\hat{j}$ → $U_g=mgy$.
- Resorte lineal ideal: $\vec F=-kx\hat{i}$ → $U_e=\frac{1}{2}kx^2$.
- Gravedad newtoniana: $\vec F=-\frac{GMm}{r^2}\hat{r}$ → $U_{grav}=-\frac{GMm}{r}$.
- Potencial electrostatico ideal: $\vec E=-\nabla V$ (en vacio, sin cargas moviles).

**Ruptura de conservatividad:**
- Friccion (cinetica o estatica): depende de trayectoria y velocidad.
- Resistencia del aire: depende de velocidad.
- Histéresis en materiales: energía se pierde en ciclos de deformacion.
- Campos no conservativos (campos magneticos puros sin componente electrostatica).

## 6- Metodo de resolucion
1- Identifica fuerzas presentes.
2- Separa conservativas y no conservativas.
3- Si solo hay conservativas, usa potencial y conservacion.
4- Si hay no conservativas, incorpora su trabajo aparte.
5- Verifica coherencia en un ciclo cerrado cuando aplique.

## 7- Errores tipicos
- Suponer conservativo cualquier sistema "sin motor".
- Olvidar que rozamiento rompe independencia de trayectoria.
- Usar potencial en fuerzas que no lo admiten globalmente.

## 8- Ejemplo guiado (extendido con diagrama)
Un bloque se mueve entre dos puntos A y B (altura $h_1=5$ m) y C (altura $h_2=2$ m) en un sistema sin rozamiento.

$$
W_g(A\to B)=-\Delta U_g=-mg(h_2-h_1)=-mg(-3)=3mg
$$

Como $\Delta U_g$ depende solo de altura inicial/final, ambos caminos dan el mismo trabajo gravitatorio.

**Diagrama energetico (como grafico U vs posicion):**
- Parabola para resorte: minimo en equilibrio, aumenta a ambos lados.
- Linea recta para gravedad uniforme: aumenta linealmente con altura.
- Hiperbola para atraccion newtoniana: profunda cerca del obstaculo, plana lejos.

La energia total $E_m=K+U$ es linea horizontal. Donde $E_m>U$ hay movimiento (espacio real). Donde $E_m<U$ region prohibida (el cuerpo no puede llegar ahi sin energia suficiente).

## 9- Aplicaciones reales
- Seleccion de modelo ideal en problemas de examen.
- Analisis de trayectorias alternativas con mismo estado final.
- Base para potenciales en mecanica, electricidad y campos.

## 10- Sintesis final y aproximacion avanzada
Saber reconocer un sistema conservativo es clave para elegir la herramienta correcta y simplificar de forma legitima.

**Simetria y leyes de conservacion:** El carácter conservativo de una fuerza refleja simetria subyacente. Gravedad es conservativa porque el espacio es homogeneo (no hay lugares "especiales"). Elasticidad es conservativa porque los enlaces atomicos tienen potencial simetrico.

**Analisis dinamico sin resolver ecuaciones:** En campo conservativo $U(x)$, puedes:
1. Hallar puntos de equilibrio: $\frac{dU}{dx}=0$.
2. Clasificar estabilidad: $\frac{d^2U}{dx^2}>0$ (estable) o $<0$ (inestable).
3. Predecir omovimiento sin ecuaciones: muevesey en valles de potencial, oscila alrededor de minimos, escapa si energia es suficiente.

**Extension a multiples dimensiones:** En problemas 2D/3D con fuerzas conservativas, usas el mismo principio pero trabajas con superficies de potencial (equipotenciales). Movimiento en 3D se reduce geometricamente a trayectorias dentro de "valles" definidos por forma de $U(\vec r)$.
