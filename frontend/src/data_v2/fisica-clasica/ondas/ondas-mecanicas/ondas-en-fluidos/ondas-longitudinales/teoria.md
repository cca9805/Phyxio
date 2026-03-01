# Ondas Longitudinales En Fluidos

## Idea clave
Una onda longitudinal en un fluido se propaga como sucesion de compresiones y rarefacciones. La perturbacion avanza porque la compresion local genera un gradiente de presion que empuja al elemento vecino.

## 1- Que estudia este tema y por que es fundamental
Este tema explica como viajan las perturbaciones de presion en gases y liquidos, cual es su velocidad y como conectar el modelo de onda con magnitudes medibles de acustica.

Es base para:
- sonido en aire,
- ultrasonidos en medicina e industria,
- acustica arquitectonica,
- propagacion en conductos y medios fluidos.

## 2- Mecanismo fisico de propagacion
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

En fluidos, el mecanismo es:
- compresion local,
- aumento de presion,
- empuje sobre la region adyacente,
- relajacion posterior y repeticion del proceso.

Por eso aparecen zonas alternadas de:
- compresion (presion mayor),
- rarefaccion (presion menor).

La materia del fluido oscila localmente; lo que se transporta globalmente es energia e informacion de fase.

## 3- Magnitudes y parametros que debes identificar siempre
- \(v\): velocidad de fase (m/s).
- \(\lambda\): longitud de onda (m).
- \(f\): frecuencia (Hz).
- \(T\): periodo (s).
- \(k\): numero de onda (rad/m).
- \(\omega\): frecuencia angular (rad/s).
- \(B\): modulo volumetrico efectivo del fluido (Pa).
- \(\rho\): densidad del fluido (kg/m^3).
- \(Z\): impedancia acustica \((\mathrm{Pa\,s/m})\).
- \(\hat{p}\): amplitud de presion (Pa).
- \(\hat{u}\): amplitud de velocidad de particula (m/s).
- \(I\): intensidad media (W/m^2).

## 4- Formulas esenciales y lectura fisica
Relacion de propagacion:

$$
v=\lambda f
$$

Periodo-frecuencia:

$$
T=\frac{1}{f}
$$

Conversion angular:

$$
k=\frac{2\pi}{\lambda},\qquad \omega=2\pi f
$$

Velocidad longitudinal en fluido:

$$
v=\sqrt{\frac{B}{\rho}}
$$

Impedancia acustica:

$$
Z=\rho v
$$

Relacion presion-particula:

$$
\hat{p}=Z\hat{u}
$$

Intensidad media para onda armonica plana:

$$
I=\frac{\hat{p}^2}{2Z}
$$

Ecuacion de onda de presion (marco teorico):

$$
\frac{\partial^2 p}{\partial x^2}=\frac{1}{v^2}\frac{\partial^2 p}{\partial t^2}
$$

Lectura fisica clave:
- mayor compresibilidad efectiva (menor rigidez) reduce velocidad,
- mayor densidad aumenta inercia y tiende a reducir velocidad,
- mayor impedancia implica mayor presion para la misma velocidad de particula.

## 5- Nota conceptual importante (error comun)
En regimen lineal, la velocidad de propagacion no depende de la amplitud.
Depende de propiedades del medio, principalmente \(B\) y \(\rho\).

## 6- Metodo de resolucion de problemas
1. Identifica la magnitud objetivo (\(v\), \(\lambda\), \(f\), \(Z\), \(I\), etc.).
2. Si el problema es de medio, empieza por \(v=\sqrt{B/\rho}\).
3. Conecta luego con \(v=\lambda f\) para magnitudes ondulatorias.
4. Si hay presion o intensidad, usa \(Z=\rho v\), \(\hat{p}=Z\hat{u}\), \(I=\hat{p}^2/(2Z)\).
5. Despeja simbolicamente antes de sustituir.
6. Sustituye en SI y verifica unidades.
7. Interpreta fisicamente el resultado.

## 7- Errores tipicos que debes evitar
- confundir velocidad de la onda con velocidad media del fluido.
- usar \(v=\lambda f\) sin validar coherencia de unidades.
- olvidar convertir densidad o modulo a SI.
- tratar \(\hat{p}\) e intensidad como magnitudes equivalentes.
- ignorar que la onda es longitudinal (no transversal) en fluidos simples.

## 8- Ejemplo completo guiado
Datos:
- \(B=2.20\times10^9\ \mathrm{Pa}\),
- \(\rho=1000\ \mathrm{kg/m^3}\),
- \(f=500\ \mathrm{Hz}\).

Paso 1- velocidad en el medio:

$$
v=\sqrt{\frac{B}{\rho}}=\sqrt{\frac{2.20\times10^9}{1000}}\approx 1483.24\ \mathrm{m/s}
$$

Paso 2- longitud de onda:

$$
\lambda=\frac{v}{f}=\frac{1483.24}{500}\approx 2.97\ \mathrm{m}
$$

Paso 3- impedancia:

$$
Z=\rho v=1000\cdot1483.24=1.483\times10^6\ \mathrm{Pa\,s/m}
$$

Interpretacion:
- es una onda rapida por alta rigidez volumetrica del medio,
- para una misma velocidad de particula, el medio transmite alta amplitud de presion.

## 9- Aplicaciones reales
- diagnostico por ultrasonidos.
- sonar y acustica submarina.
- control de ruido en conducciones de aire y liquidos.
- ensayos no destructivos por onda de presion.
- ingenieria de audio y acondicionamiento acustico.

## 10- Sintesis final
Dominar ondas longitudinales en fluidos significa:
- entender el mecanismo dinamico compresion-rarefaccion,
- vincular propiedades del medio con velocidad de propagacion,
- resolver con coherencia magnitudes ondulatorias y acusticas,
- interpretar resultados con criterio fisico, no solo algebraico.
