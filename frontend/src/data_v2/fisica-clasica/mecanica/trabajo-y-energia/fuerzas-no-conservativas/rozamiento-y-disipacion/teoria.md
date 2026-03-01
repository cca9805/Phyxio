# Rozamiento y disipacion

## Idea clave
El rozamiento transforma parte de la energia mecanica en energia interna (calor). La energia total se conserva, pero la fraccion mecanica util disminuye.

## 1- Que estudia este tema y por que es fundamental
Este tema introduce el comportamiento real de sistemas mecanicos: perdidas, calentamiento y menor rendimiento frente al modelo ideal.

## 2- Imagen fisica correcta
La fuerza de rozamiento se opone al movimiento relativo. Por eso su trabajo suele ser negativo sobre el cuerpo que analizas y reduce energia mecanica disponible.

## 3- Variables y parametros
- Coeficiente de rozamiento: $\mu$.
- Fuerza normal: $N$.
- Fuerza de rozamiento: $f_r$.
- Desplazamiento: $d$.
- Trabajo disipativo: $W_r$.

## 4- Formulas esenciales
Modelo basico:

$$
f_r=\mu N
$$

Trabajo de rozamiento (sentido opuesto al movimiento):

$$
W_r=-f_r d
$$

Balance con disipacion:

$$
\Delta E_m=W_{nc}
$$

## 5- Dominio de validez (analisis de modelos)
Modelo $f_r=\mu N$ es aproximacion macroscopia clasica para contacto seco. Puede fallar en lubricacion, velocidades extremas o materiales no lineales.

**Rozamiento cinetico vs estatico:**
- Rozamiento **estatico** ($\mu_s$): antes de iniciar movimiento. Varia $0 \le f_s \le \mu_s N$.
- Rozamiento **cinetico** ($\mu_k$): durante movimiento. Aproximadamente constante $f_k=\mu_k N$, donde usualmente $\mu_k < \mu_s$.

**Modelos avanzados:**
- Rozamiento viscoso: $f_v \propto v$ (aire, agua a baja velocidad).
- Rozamiento turbulento: $f \propto v^2$ (altas velocidades).
- Histeresis material: algunas deformaciones pierden energia (goma, asfalto).

## 6- Metodo de resolucion
1- Dibuja fuerzas y sentido de movimiento.
2- Calcula $N$ con el modelo dinamico del problema.
3- Obtiene $f_r=\mu N$ y su direccion.
4- Calcula trabajo con signo correcto.
5- Integra el termino disipativo en el balance energetico.

## 7- Errores tipicos
- Poner rozamiento con el mismo sentido del desplazamiento.
- Usar siempre $\mu_k$ o $\mu_s$ sin revisar el regimen.
- Olvidar que el trabajo de rozamiento depende del recorrido.
- Confundir perdida mecanica con perdida de energia total del universo.

## 8- Ejemplo guiado
Bloque sobre horizontal: $m=5\,\text{kg}$, $\mu=0.25$, recorrido $d=8\,\text{m}$.

$$
N=mg=5\cdot9.8=49\,\text{N}
$$

$$
f_r=\mu N=0.25\cdot49=12.25\,\text{N}
$$

$$
W_r=-f_r d=-12.25\cdot8=-98\,\text{J}
$$

## 9- Aplicaciones reales y analisis tecnico
- **Frenos y distancia de parada:** Coche a 100 km/h debe frenar. Energia cinetica = $\frac{1}{2}mv^2$. Rozamiento de frenos disipa eso en calor. Mayor coeficiente $\mu$ = distancia mas corta (seguridad).\n- **Perdidas energeticas en maquinaria:** Motor de bomba: entrada mecanica $P_{in}$, salida util $P_{out}$, perdidas por friccion $P_{loss}=\mu NQ$ (donde $Q$ es flujo). Eficiencia $\\eta=P_{out}/P_{in}$.\n- **Estimacion de calor generado por friccion:** Energia disipada por rozamiento se transforma en calor. Temperatura local puede alcanzar valores altos. Ejemplo: pastillas de freno en bicicleta llanta $W_r = -\\mu N d$ se convierte en calor en el punto de contacto.\n- **Superficie de contacto y friccion:** Rozamiento depende principalm de $\\mu$ y $N$, no del area de contacto (segun modelo Coulomb). Pero en materiales reales, area muy pequena sufre desgaste extremo.\n- **Lubricacion:** Introducir lubricante reduce $\\mu$ dramaticamente (aceitado, grasa). Cambio de rozamiento cinetico seco a viscoso lubricado. Aplicacion: cojinetes, engranajes.

## 10- Sintesis final
Rozamiento y disipacion son el paso del modelo ideal al modelo real. Dominar su signo y su papel en el balance evita muchos errores de interpretacion.
