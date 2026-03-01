# Ondas Superficiales Rayleigh

## Idea clave
Las ondas Rayleigh son ondas elasticas superficiales que se propagan a lo largo de la superficie libre de un solido. Su amplitud decae con la profundidad y su velocidad es menor que la velocidad de corte del material.

## 1- Que estudia este tema y por que es fundamental
Este tema explica:
- como se generan ondas Rayleigh en superficies,
- por que su energia queda confinada cerca de la frontera libre,
- como estimar su velocidad desde propiedades elasticas del medio.

Es fundamental para sismica, ultrasonidos de superficie, monitorizacion de dano y diagnostico no destructivo.

## 2- Mecanismo fisico de propagacion superficial
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

En Rayleigh, la respuesta combina:
- componente longitudinal superficial,
- componente de corte superficial,
- movimiento eliptico de particulas cerca de la superficie.

La amplitud decrece rapidamente al alejarse de la superficie, por eso se habla de onda superficial guiada por frontera libre.

## 3- Magnitudes y parametros que debes identificar
- \(v_S\): velocidad de corte en volumen (m/s).
- \(v_R\): velocidad Rayleigh (m/s).
- \(\nu\): coeficiente de Poisson (1).
- \(c_R\): factor Rayleigh adimensional, \(v_R\approx c_R v_S\).
- \(\lambda\): longitud de onda superficial (m).
- \(f\): frecuencia (Hz).
- \(T\): periodo (s).
- \(k\): numero de onda (rad/m).
- \(\omega\): frecuencia angular (rad/s).
- \(z_p\): profundidad caracteristica de penetracion (m).
- \(G\): modulo de corte (Pa).
- \(\rho\): densidad (kg/m^3).

## 4- Formulas esenciales y lectura fisica
Velocidad de corte en volumen:

$$
v_S=\sqrt{\frac{G}{\rho}}
$$

Factor Rayleigh aproximado:

$$
c_R\approx\frac{0.87+1.12\nu}{1+\nu}
$$

Velocidad Rayleigh:

$$
v_R\approx c_R v_S
$$

Relacion de propagacion superficial:

$$
v_R=\lambda f
$$

Periodo y conversion angular:

$$
T=\frac{1}{f},\qquad k=\frac{2\pi}{\lambda},\qquad \omega=2\pi f
$$

Profundidad de penetracion (escala e-folding aproximada):

$$
z_p\approx\frac{1}{k}=\frac{\lambda}{2\pi}
$$

Atenuacion con profundidad (modelo conceptual):

$$
A(z)\propto e^{-kz}
$$

Criterio fisico tipico:

$$
v_R<v_S<v_L
$$

Lectura fisica:
- al aumentar \(\nu\), cambia \(c_R\) y por tanto \(v_R\),
- al aumentar \(G\), suben \(v_S\) y \(v_R\),
- Rayleigh es sensible a dano superficial por su confinamiento en profundidad reducida.

## 5- Nota conceptual importante
En regimen lineal, la velocidad Rayleigh no depende de amplitud.
Depende de propiedades del material y del estado elastico efectivo.

## 6- Metodo de resolucion de problemas
1. Si falta \(v_S\), calcula con \(G\) y \(\rho\).
2. Calcula \(c_R\) desde \(\nu\).
3. Obtiene \(v_R\approx c_R v_S\).
4. Usa \(v_R=\lambda f\) para hallar \(\lambda\), \(f\) o \(T\).
5. Estima penetracion con \(z_p\approx\lambda/(2\pi)\).
6. Verifica orden de magnitud e interpreta.

## 7- Errores tipicos
- confundir onda Rayleigh con onda de corte de volumen.
- asumir \(v_R=v_S\) sin correccion por \(c_R\).
- ignorar el decaimiento con profundidad.
- usar \(\nu\) fuera de rango fisico del modelo.
- no comprobar unidades SI.

## 8- Ejemplo completo guiado
Datos:
- \(G=30\times10^9\ \mathrm{Pa}\),
- \(\rho=7800\ \mathrm{kg/m^3}\),
- \(\nu=0.29\),
- \(f=12\ \mathrm{kHz}\).

Paso 1- velocidad de corte:

$$
v_S=\sqrt{\frac{30\times10^9}{7800}}\approx1961\ \mathrm{m/s}
$$

Paso 2- factor Rayleigh:

$$
c_R\approx\frac{0.87+1.12(0.29)}{1+0.29}\approx0.926
$$

Paso 3- velocidad Rayleigh:

$$
v_R\approx0.926\cdot1961\approx1816\ \mathrm{m/s}
$$

Paso 4- longitud de onda:

$$
\lambda=\frac{v_R}{f}=\frac{1816}{12000}\approx0.151\ \mathrm{m}
$$

Paso 5- penetracion:

$$
z_p\approx\frac{\lambda}{2\pi}\approx0.024\ \mathrm{m}
$$

Interpretacion: la onda transporta la mayor parte de su energia en una capa superficial de pocos centimetros.

## 9- Aplicaciones reales
- evaluacion de fisuras superficiales en piezas.
- geofisica de superficie y microtremores.
- caracterizacion no destructiva de revestimientos.
- monitorizacion de infraestructura con sensores de superficie.

## 10- Sintesis final
Dominar ondas Rayleigh significa:
- entender su naturaleza superficial y su decaimiento en profundidad,
- estimar su velocidad desde propiedades elasticas,
- resolver problemas con criterio fisico y no solo algebraico,
- interpretar por que son tan utiles para diagnostico superficial.
