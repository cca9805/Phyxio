# Ondas Superficiales En Fluidos

## Idea clave
Una onda superficial se propaga en la interfase fluido-aire porque una deformacion local de la superficie genera fuerzas restauradoras y transfiere la perturbacion al elemento vecino. En escalas habituales domina la gravedad; en longitudes de onda muy pequenas puede dominar la tension superficial.

## 1- Que estudia este tema y por que es fundamental
Este tema estudia como se propagan las ondas en la superficie de un fluido, como cambia su velocidad con la profundidad y por que aparecen efectos de dispersion.

Es clave para:
- oceanografia y prediccion de oleaje,
- ingenieria costera,
- hidraulica de canales,
- interpretacion fisica de energia y transporte en superficie.

## 2- Mecanismo fisico real de propagacion
La propagacion no ocurre porque el agua viaje en bloque con la onda, sino porque cada porcion de fluido oscila alrededor de su equilibrio y transmite la perturbacion.

Cadena causal:
1. Una perturbacion eleva o deprime la superficie.
2. La gravedad intenta restaurar el nivel medio.
3. La inercia del fluido impide volver instantaneamente al equilibrio.
4. El exceso o defecto de nivel se transmite lateralmente.

Resultado:
- se transporta energia e informacion,
- no hay transporte neto de masa en una direccion unica (en primera aproximacion lineal).

## 3- Regimenes por profundidad relativa
Se usa el parametro adimensional:

$$
kh=k\,h
$$

donde \(k=2\pi/\lambda\).

Lectura de regimen:
- agua profunda: \(kh\gtrsim 3\),
- agua somera: \(kh\lesssim 0.3\),
- zona intermedia: transicion entre ambos modelos.

## 4- Magnitudes y parametros que debes identificar siempre
- \(v\): velocidad de fase (m/s).
- \(\lambda\): longitud de onda (m).
- \(f\): frecuencia (Hz).
- \(T\): periodo (s).
- \(k\): numero de onda (rad/m).
- \(\omega\): frecuencia angular (rad/s).
- \(g\): gravedad (m/s^2).
- \(h\): profundidad (m).
- \(kh\): parametro de regimen (1).
- \(v_g\): velocidad de grupo (m/s).
- \(\sigma\): tension superficial (N/m), relevante en ondas cortas.
- \(\rho\): densidad del fluido (kg/m^3).

## 5- Formulas esenciales y lectura fisica
Relacion ondulatoria general:

$$
v=\lambda f
$$

Periodo y frecuencia:

$$
T=\frac{1}{f}
$$

Numero de onda y frecuencia angular:

$$
k=\frac{2\pi}{\lambda},\qquad \omega=2\pi f
$$

Dispersion en agua profunda (gravedad dominante):

$$
\omega^2=gk
$$

Velocidad de fase en profunda:

$$
v=\sqrt{\frac{g\lambda}{2\pi}}
$$

Velocidad de fase en somera:

$$
v=\sqrt{gh}
$$

Dispersion general gravedad:

$$
\omega^2=gk\tanh(kh)
$$

Dispersion capilar-gravedad (marco avanzado):

$$
\omega^2=\left(gk+\frac{\sigma}{\rho}k^3\right)\tanh(kh)
$$

Velocidad de grupo:

$$
v_g=\frac{d\omega}{dk}
$$

Casos limite:

$$
v_g=\frac{v}{2}\ \text{(profunda)},\qquad v_g=v\ \text{(somera)}
$$

## 6- Nota conceptual critica (error comun)
En regimen lineal, la velocidad de propagacion no depende de la amplitud.
Depende de propiedades del medio y del regimen (profundidad relativa, gravedad y, en ondas muy cortas, tension superficial).

## 7- Metodo de resolucion de problemas
1. Identifica datos: \(\lambda\), \(T\), \(f\), \(h\), \(g\).
2. Calcula \(k=2\pi/\lambda\) y luego \(kh\).
3. Decide modelo: profunda, somera o transicion.
4. Aplica la formula de velocidad adecuada.
5. Conecta con \(v=\lambda f\) y \(T=1/f\) para completar magnitudes faltantes.
6. Verifica unidades y orden de magnitud.
7. Interpreta fisicamente el resultado.

## 8- Errores tipicos que debes evitar
- usar \(v=\sqrt{gh}\) en profunda sin comprobar \(kh\).
- usar \(v=\sqrt{g\lambda/(2\pi)}\) en somera sin comprobar \(kh\).
- confundir velocidad de fase con velocidad de grupo.
- ignorar que la onda puede ser dispersiva.
- asumir transporte neto de agua igual al avance de la cresta.

## 9- Ejemplo completo guiado
Datos:
- \(\lambda=50\ \mathrm{m}\),
- \(h=30\ \mathrm{m}\),
- \(g=9.81\ \mathrm{m/s^2}\).

Paso 1- numero de onda y regimen:

$$
k=\frac{2\pi}{\lambda}=\frac{2\pi}{50}=0.1257\ \mathrm{rad/m}
$$

$$
kh=0.1257\cdot 30=3.77
$$

Como \(kh\gtrsim 3\), usamos aproximacion de agua profunda.

Paso 2- velocidad de fase:

$$
v=\sqrt{\frac{g\lambda}{2\pi}}=\sqrt{\frac{9.81\cdot 50}{2\pi}}\approx 8.84\ \mathrm{m/s}
$$

Paso 3- frecuencia y periodo:

$$
f=\frac{v}{\lambda}=\frac{8.84}{50}=0.1768\ \mathrm{Hz}
$$

$$
T=\frac{1}{f}\approx 5.66\ \mathrm{s}
$$

Lectura fisica: la onda tiene periodo de varios segundos, consistente con oleaje gravitatorio de gran escala.

## 10- Sintesis final
Dominar ondas superficiales significa:
- entender el mecanismo dinamico de propagacion,
- clasificar correctamente el regimen con \(kh\),
- usar el modelo fisico adecuado en cada caso,
- interpretar velocidad de fase y de grupo con criterio.
