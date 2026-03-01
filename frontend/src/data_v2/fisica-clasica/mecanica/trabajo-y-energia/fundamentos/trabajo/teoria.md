# Trabajo mecanico

## Idea clave
El trabajo mecanico mide transferencia de energia por accion de una fuerza durante un desplazamiento. Sin desplazamiento no hay trabajo, y la orientacion entre fuerza y movimiento decide el signo.

## 1- Que estudia este tema y por que es fundamental
Este tema establece la puerta de entrada al analisis energetico: pasar de fuerzas a cambios de energia. Sin dominar trabajo, conservacion y potencia se vuelven formulas sueltas.

## 2- Imagen fisica correcta: cuando una fuerza transfiere energia
Si una fuerza tiene componente en el sentido del desplazamiento, aumenta la energia mecanica del cuerpo (trabajo positivo). Si se opone, la reduce (trabajo negativo). Si es perpendicular, no transfiere energia mecanica por desplazamiento.

**Analisis vectorial profundo:** El trabajo es un producto escalar $W = \vec F \cdot \vec d = |\vec F||\vec d|\cos\theta$. Su valor depende de:
- Magnitud de la fuerza efectiva en la direccion del desplazamiento.
- El angulo relativo entre los dos vectores.
- En 2D/3D, solo la componente paralela al movimiento contribuye al trabajo mecanico. Componentes perpendiculares son realizadas por otras fuerzas.

**Lectura fisica en componentes:** En movimiento sobre plano inclinado, la fuerza peso tiene componentes que hacen trabajo diferente que el plano normal, que hace cero trabajo (perpendicular al movimiento).

## 3- Magnitudes que debes identificar siempre
- Fuerza resultante o fuerza concreta que actua: $F$ (N).
- Desplazamiento del punto de aplicacion: $d$ (m).
- Angulo entre $\vec F$ y $\vec d$: $\theta$ (rad o deg).
- Trabajo: $W$ (J).

## 4- Formulas esenciales y lectura fisica
Definicion para fuerza constante:

$$
W = \vec F \cdot \vec d = Fd\cos\theta
$$

Casos clave:

$$
\theta=0^\circ \Rightarrow W=+Fd
$$

$$
\theta=180^\circ \Rightarrow W=-Fd
$$

$$
\theta=90^\circ \Rightarrow W=0
$$

Unidad:

$$
1\ \text{J}=1\ \text{N}\cdot\text{m}
$$

## 5- Dominio de validez
La expresion $W=Fd\cos\theta$ es exacta cuando la fuerza puede considerarse constante en modulo y direccion en el tramo analizado. Si la fuerza varia, debes pasar a formulacion diferencial/integral.

## 6- Metodo de resolucion para problemas de trabajo (extendido)
1- Dibuja todas las fuerzas (peso, normal, fricccion, aplicada) y desplazamiento.
2- Descompone cada fuerza en componentes paralela y perpendicular al movimiento.
3- Solo la componente paralela contribuye al trabajo.
4- Calcula trabajo de cada fuerza por separado:
   - Trabajo positivo: fuerza y movimiento forman angulo < 90°.
   - Trabajo negativo: angulo > 90°.
   - Trabajo nulo: angulo = 90°.
5- Summa todos los trabajos para obtener trabajo neto (o usa teorema trabajo-energia).
6- Sustituye en SI, revisa unidades (J) y orden de magnitud.
7- Contrasta: $W_{net} = \Delta K$ (cambio de energia cinetica).

## 7- Errores tipicos que debes evitar
- Usar el angulo con el eje en lugar del angulo entre vectores.
- Olvidar el signo del coseno cuando la fuerza se opone al movimiento.
- Confundir trabajo de una fuerza concreta con trabajo neto.
- Aplicar fuerza constante cuando el enunciado implica variacion.

## 8- Ejemplo guiado completo
Un bloque se desplaza $d=5\,\text{m}$ en horizontal. Una fuerza de $20\,\text{N}$ forma $60^\circ$ con el desplazamiento.

$$
W=Fd\cos\theta=20\cdot5\cdot\cos60^\circ=100\cdot0.5=50\,\text{J}
$$

Lectura: la fuerza transfiere $50\,\text{J}$ de energia mecanica al bloque.

## 9- Aplicaciones reales y análisis técnico
- **Arrastre de cargas en industria:** Una grúa eleva carga mientras el rozamiento hace trabajo negativo. El motor debe vencer ambos.
- **Trabajo de motores eléctricos:** Potencia > trabajo/tiempo permite acelerar cargas en tiempos cortos. Diseño eficiente minimiza rozamientos (trabajo negativo).
- **Frenado mecanico:** Frenos realizan trabajo negativo para convertir energia cinetica en calor. Mayor fuerza de frenado = detención más rápida.
- **Análisis de máquinas simples:** Poleas, palancas, tornillos redistribuyen fuerzas pero no crean trabajo neto. El trabajo de entrada iguala el de salida en máquinas ideales.
- **Montañas y deportes:** En descensos, la gravedad realiza trabajo positivo (acelera). En ascensos, el atleta realiza trabajo contra gravedad (descelera sin motor).

## 10- Sintesis final y conexiones avanzadas
Dominar trabajo significa leer transferencia energetica directamente desde fuerzas y desplazamientos. Es la base común de energia cinetica, potencial y conservacion.

**Perspectiva energética:** El trabajo es el mecanismo por el cual las fuerzas modifican la energia mecanica de un sistema. Sin trabajo, no hay cambio de energia cinetica ni almacenamiento en potencial.

**Conexión con potencial:** Fuerzas conservativas (como la gravedad) pueden expresarse como gradiente de una funcion potencial: $\vec F = -\nabla U$. El trabajo de fuerzas conservativas se transforma directamente en cambio de energia potencial: $W_{cons} = -\Delta U$.

**En sistemas complejos:** Descomponer el trabajo total en componentes (trabajo de fricccion, trabajo de motores, trabajo gravitatorio) permite análisis energetico detallado y diagnosis de perdidas de eficiencia.
