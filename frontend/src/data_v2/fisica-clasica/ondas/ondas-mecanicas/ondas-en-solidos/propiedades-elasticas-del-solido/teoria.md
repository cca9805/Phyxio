# Propiedades Elasticas Del Solido

## Idea clave
Las propiedades elasticas de un solido determinan como responde a una deformacion y, por tanto, como se propagan las ondas mecanicas en su interior. La velocidad de onda depende de rigidez elastica e inercia del material.

## 1- Que estudia este tema y por que es fundamental
Este tema conecta elasticidad y propagacion ondulatoria. No se trata solo de conocer modulos \(E\), \(G\) o \(K\), sino de entender que describen fisicamente y como gobiernan las velocidades \(v_L\) y \(v_T\).

Sin este enlace, la resolucion de problemas queda en sustituciones mecanicas. Con este enlace, puedes predecir como cambia la propagacion al variar material, densidad o estado tensional.

## 2- Mecanismo fisico: de deformacion a onda
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

En solidos:
- la deformacion axial se opone mediante rigidez longitudinal,
- la deformacion de corte se opone mediante rigidez de corte,
- la inercia (\(\rho\)) retrasa la respuesta y modula la velocidad.

Resultado: dos tipos principales de velocidad en un mismo material:
- \(v_L\): onda longitudinal,
- \(v_T\): onda transversal de corte.

## 3- Magnitudes y parametros que debes identificar siempre
- \(\sigma\): esfuerzo normal (Pa).
- \(\epsilon\): deformacion unitaria (1).
- \(E\): modulo de Young (Pa).
- \(G\): modulo de corte (Pa).
- \(K\): modulo volumetrico (Pa).
- \(\nu\): coeficiente de Poisson (1).
- \(\rho\): densidad (kg/m^3).
- \(v_L\): velocidad longitudinal (m/s).
- \(v_T\): velocidad transversal (m/s).
- \(Z_L\), \(Z_T\): impedancias elasticas efectivas.

## 4- Formulas esenciales y lectura fisica
Ley de Hooke uniaxial:

$$
\sigma=E\epsilon
$$

Velocidad transversal:

$$
v_T=\sqrt{\frac{G}{\rho}}
$$

Velocidad longitudinal isotropa general:

$$
v_L=\sqrt{\frac{K+\frac{4}{3}G}{\rho}}
$$

Aproximacion axial en barra delgada:

$$
v_L\approx\sqrt{\frac{E}{\rho}}
$$

Relaciones constitutivas utiles:

$$
E=2G(1+\nu)
$$

$$
K=\frac{E}{3(1-2\nu)}
$$

Impedancias:

$$
Z_L=\rho v_L,\qquad Z_T=\rho v_T
$$

Relacion entre velocidades:

$$
\frac{v_L}{v_T}=\sqrt{\frac{2(1-\nu)}{1-2\nu}}
$$

Lectura fisica clave:
- mayor rigidez \(\Rightarrow\) mayor velocidad,
- mayor densidad \(\Rightarrow\) menor velocidad,
- en materiales isotropos usuales, \(v_L>v_T\).

## 5- Nota conceptual critica
En regimen lineal, la velocidad de onda no depende de la amplitud.
Depende de parametros del medio (modulos elasticos y densidad).

## 6- Metodo de resolucion de problemas
1. Identifica tipo de deformacion (axial o corte).
2. Elige el modulo elastico relevante (\(E\), \(G\), \(K\)).
3. Calcula velocidad con la formula apropiada.
4. Si faltan modulos, usa relaciones constitutivas con \(\nu\).
5. Verifica unidades: Pa, kg/m^3, m/s.
6. Comprueba orden de magnitud para el material.
7. Interpreta resultado: que propiedad domina.

## 7- Errores tipicos que debes evitar
- usar \(E\) cuando el problema es de corte puro.
- tratar \(E\), \(G\), \(K\) como magnitudes equivalentes.
- mezclar GPa y Pa sin conversion.
- usar \(\rho\) en g/cm^3 sin convertir.
- confundir velocidad de onda con velocidad de particula.

## 8- Ejemplo completo guiado
Datos:
- \(E=210\times10^9\ \mathrm{Pa}\),
- \(\nu=0.30\),
- \(\rho=7850\ \mathrm{kg/m^3}\).

Paso 1- modulo de corte:

$$
G=\frac{E}{2(1+\nu)}=\frac{210\times10^9}{2(1.30)}\approx 80.77\times10^9\ \mathrm{Pa}
$$

Paso 2- velocidad transversal:

$$
v_T=\sqrt{\frac{G}{\rho}}=\sqrt{\frac{80.77\times10^9}{7850}}\approx 3207\ \mathrm{m/s}
$$

Paso 3- velocidad longitudinal aproximada:

$$
v_L\approx\sqrt{\frac{E}{\rho}}=\sqrt{\frac{210\times10^9}{7850}}\approx 5172\ \mathrm{m/s}
$$

Interpretacion:
- el material transmite mas rapido deformacion longitudinal que de corte,
- el orden de magnitud es consistente con acero estructural.

## 9- Aplicaciones reales
- ensayos ultrasonicos de materiales.
- monitorizacion de integridad estructural.
- diseno vibroacustico de componentes.
- sismica de medios solidos y rocas.
- calibracion de modelos numericos elastodinamicos.

## 10- Sintesis final
Dominar propiedades elasticas del solido significa:
- comprender la fisica de los modulos,
- conectarlos con velocidades de onda,
- resolver con criterio de validez,
- interpretar resultados como diagnostico del material.
