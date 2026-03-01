# Potencia mecanica

## Idea clave
La potencia mide rapidez de transferencia de energia. Dos procesos pueden realizar el mismo trabajo total, pero el mas rapido tiene mayor potencia.

## 1- Que estudia este tema y por que es fundamental
Este tema responde cuanto tarda un sistema en transferir energia util. Es esencial para comparar motores, maquinas y procesos de frenado/aceleracion.

## 2- Imagen fisica correcta: cantidad vs ritmo
Trabajo y energia dicen "cuanto"; potencia dice "por unidad de tiempo". No confundas energia total con capacidad de entrega instantanea.

## 3- Magnitudes que debes reconocer
- Trabajo total: $W$ (J).
- Intervalo temporal: $\Delta t$ (s).
- Potencia media: $P_{med}$ (W).
- Potencia instantanea: $P$ (W).
- Velocidad y fuerza para expresion dinamica: $\vec v,\vec F$.

## 4- Formulas esenciales
Potencia media:

$$
P_{med}=\frac{W}{\Delta t}
$$

Potencia instantanea:

$$
P=\frac{dW}{dt}
$$

Relacion mecanica traslacional:

$$
P=\vec F\cdot\vec v=Fv\cos\theta
$$

Unidad:

$$
1\ \text{W}=1\ \text{J/s}
$$

## 5- Dominio de validez
La expresion $P=\vec F\cdot\vec v$ vale para la potencia instantanea de esa fuerza sobre ese punto de aplicacion. Si quieres potencia neta del sistema, usa fuerza neta o balance energetico total segun el modelo.

## 6- Metodo de resolucion (ampliado)
1- Decide si piden potencia media o instantanea.
2- Si tienes $W$ y tiempo, usa cociente $P_{med}=W/\Delta t$.
3- Si tienes fuerza y velocidad, usa producto escalar $P=\vec F\cdot\vec v=Fv\cos\theta$.
   - Recuerda incluir el angulo entre fuerza y velocidad (no siempre paralelos).
4- Verifica signo: potencia negativa implica extraccion de energia mecanica (frenos, fricccion).
5- **Para sistemas con perdidas:** $P_{entrada}=P_{util}+P_{perdidas}$. Eficiencia: $\eta=P_{util}/P_{entrada}$.
6- Comprueba orden de magnitud del resultado (kW para motores de vehiculos, W para aparatos domesticos).

## 7- Errores tipicos
- Confundir W (watt) con W (trabajo) por contexto.
- Usar potencia media como si fuera instantanea.
- Ignorar angulo entre fuerza y velocidad.
- Perder conversiones de kW a W.

## 8- Ejemplo guiado
Un motor ejerce $F=1200\,\text{N}$ sobre un vehiculo que se mueve a $v=18\,\text{m/s}$ con fuerza y velocidad paralelas.

$$
P=Fv=1200\cdot18=21600\,\text{W}=21.6\,\text{kW}
$$

## 9- Aplicaciones reales y analisis tecnico
- **Potencia de motores de traccion:** Un auto de 1200 N de empuje a 18 m/s = 21.6 kW. Un camion cargado necesita mayor potencia para misma velocidad (mayor resistencia).
- **Dimensionado de bombas y compresores:** Una bomba debe suministrar potencia $P=\rho g h Q$ donde $Q$ es caudal y $h$ altura. Bombas mas grandes = mayor potencia instalada.
- **Calculo de potencia de frenado:** Frenos disipan energia cinetica. Coche de 1000 kg a 20 m/s tiene $K=200$ kJ. Si frena en 5 s, potencia media de disipacion $P=40$ kW (distribuida en pastillas/discos).
- **Eficiencia de máquinas:** Motor electrico con 100 W entrada y 80 W mecanica util tiene eficiencia 80%, perdidas 20 W (calor). En operacion continua, perdidas suman costo energetico.
- **Deportes y cuerpo humano:** Ciclista en subida larga mantiene ~200 W. Esfuerzo anaerobico breve puede alcanzar 2000 W pero no es sostenible.

## 10- Sintesis final y reflexion energetica
Potencia es el puente entre energia y tiempo. Dominarla permite comparar rendimiento operativo real de sistemas que, en energia total, podrian parecer equivalentes.

**Insight crucial:** Dos sistemas pueden hacer mismo trabajo pero diferentes potencias. Ejemplo: levantar carga 10 m:
- Motor debil lentamente: bajo W/s (baja potencia).
- Motor potente muy rapido: alto W/s (alta potencia).
Ambos realizan mismo trabajo total, pero el motor potente lo hace en menos tiempo.

**En diseño de máquinas:** La potencia instalada determina velocidad operativa y productividad. Mayor potencia = ciclos mas rapidos = mas producccion. Pero tambien consume mas energia, por lo que balancear potencia con eficiencia es clave en ingenieria.

**Medida experimental:** En laboratorio, potencia instantanea se estima midiendo fuerza y velocidad simultaneamente. Potencia media se obtiene integrando potencia instantanea o dividiendo trabajo total por tiempo.
