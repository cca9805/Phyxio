# Ondas Transversales De Corte

## Idea clave
Las ondas de corte en solidos se propagan gracias a la rigidez cortante del material. Si no hay modulo de corte efectivo, no puede sostenerse una onda transversal de corte.

## 1- Que estudia este tema y por que es fundamental
Este tema describe la propagacion de perturbaciones transversales asociadas a deformacion cortante en solidos.

Es fundamental para:
- sismica (ondas S),
- ultrasonidos de corte en inspeccion,
- dinamica estructural,
- caracterizacion de modulo de corte en materiales.

## 2- Mecanismo fisico de propagacion
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

En corte:
- un plano del material se desplaza respecto a otro,
- aparece esfuerzo cortante restaurador,
- ese esfuerzo impulsa la perturbacion al siguiente elemento.

Por eso la velocidad de corte depende de:
- rigidez cortante \(G\),
- inercia volumetrica \(\rho\).

## 3- Magnitudes y parametros que debes identificar
- \(v_S\): velocidad de onda de corte (m/s).
- \(G\): modulo de corte (Pa).
- \(\rho\): densidad (kg/m^3).
- \(\tau\): esfuerzo cortante (Pa).
- \(\gamma\): deformacion cortante (1).
- \(n\): indice modal (entero positivo).
- \(L\): longitud efectiva (m).
- \(f_n\): frecuencia modal (Hz).
- \(\lambda_n\): longitud modal (m).
- \(f\): frecuencia (Hz).
- \(T\): periodo (s).
- \(k\): numero de onda (rad/m).
- \(\omega\): frecuencia angular (rad/s).

## 4- Formulas esenciales y lectura fisica
Relacion cortante constitutiva:

$$
\tau=G\gamma
$$

Velocidad de corte en solido isotropo:

$$
v_S=\sqrt{\frac{G}{\rho}}
$$

Frecuencia modal fija-fija:

$$
f_n=\frac{n v_S}{2L}
$$

Longitud modal fija-fija:

$$
\lambda_n=\frac{2L}{n}
$$

Frecuencia modal fija-libre:

$$
f_n=\frac{(2n-1)v_S}{4L}
$$

Relacion ondulatoria:

$$
v_S=\lambda f
$$

Periodo y conversion angular:

$$
T=\frac{1}{f},\qquad k=\frac{2\pi}{\lambda},\qquad \omega=2\pi f
$$

Lectura fisica:
- mayor \(G\) eleva \(v_S\),
- mayor \(\rho\) reduce \(v_S\),
- mayor \(L\) reduce frecuencias modales.

## 5- Nota conceptual importante
En regimen lineal, la velocidad de corte no depende de amplitud.
Depende de propiedades del medio y de la frontera modal.

## 6- Metodo de resolucion de problemas
1. Identifica que el modo es de corte (no longitudinal).
2. Calcula \(v_S=\sqrt{G/\rho}\) si no se conoce.
3. Selecciona familia modal segun frontera.
4. Usa \(v_S=\lambda f\) para completar variables.
5. Comprueba unidades SI y orden de magnitud.
6. Interpreta la influencia de \(G\), \(\rho\) y \(L\).

## 7- Errores tipicos
- usar formula longitudinal en problemas de corte.
- olvidar convertir GPa a Pa.
- asumir una frontera modal incorrecta.
- confundir \(\tau\) con \(\sigma\).
- no validar si \(n\) es entero modal.

## 8- Ejemplo completo guiado
Datos:
- \(G=26\times10^9\ \mathrm{Pa}\),
- \(\rho=2700\ \mathrm{kg/m^3}\),
- \(L=0.80\ \mathrm{m}\),
- fija-fija,
- \(n=2\).

Paso 1- velocidad de corte:

$$
v_S=\sqrt{\frac{G}{\rho}}=\sqrt{\frac{26\times10^9}{2700}}\approx 3103\ \mathrm{m/s}
$$

Paso 2- frecuencia modal:

$$
f_2=\frac{2v_S}{2L}=\frac{3103}{0.80}\approx 3879\ \mathrm{Hz}
$$

Paso 3- longitud modal:

$$
\lambda_2=\frac{2L}{2}=0.80\ \mathrm{m}
$$

Verificacion:

$$
v_S\approx\lambda_2 f_2\approx0.80\cdot3879\approx3103\ \mathrm{m/s}
$$

## 9- Aplicaciones reales
- identificacion de ondas S en geofisica.
- inspeccion por ultrasonidos de corte.
- diagnostico modal de componentes mecanicos.
- caracterizacion elastica de materiales.

## 10- Sintesis final
Dominar ondas transversales de corte significa:
- entender su mecanismo fisico cortante,
- seleccionar modelo modal correcto,
- resolver con consistencia dimensional,
- interpretar resultado en terminos de rigidez e inercia.
