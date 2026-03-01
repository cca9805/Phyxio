# Ondas Sismicas P Y S

## Idea clave
Las ondas sismicas P y S son ondas de volumen que viajan con velocidades distintas porque responden a mecanismos elasticos diferentes. Esa diferencia de tiempos de llegada permite estimar distancia epicentral y estructura del medio.

## 1- Que estudia este tema y por que es fundamental
Este tema estudia:
- la diferencia fisica entre ondas P (compresionales) y S (de corte),
- como se calculan sus tiempos de llegada,
- como usar \(\Delta t=t_S-t_P\) para estimar distancia.

Es fundamental en sismologia, geofisica y evaluacion de riesgo.

## 2- Mecanismo fisico de las ondas P y S
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

1. Onda P (primaria):
- desplazamiento paralelo a la propagacion,
- asociada a compresion y dilatacion,
- suele viajar mas rapido.

2. Onda S (secundaria):
- desplazamiento transversal,
- asociada a deformacion de corte,
- no se propaga en fluidos ideales sin rigidez de corte.

Por eso, en registros sismicos tipicos, primero llega P y despues S.

## 3- Magnitudes y parametros que debes identificar
- \(v_P\): velocidad de onda P (m/s).
- \(v_S\): velocidad de onda S (m/s).
- \(d\): distancia fuente-estacion (m).
- \(t_P\): tiempo de llegada P (s).
- \(t_S\): tiempo de llegada S (s).
- \(\Delta t=t_S-t_P\): diferencia de llegada (s).
- \(K\): modulo volumetrico (Pa).
- \(G\): modulo de corte (Pa).
- \(\rho\): densidad (kg/m^3).

## 4- Formulas esenciales y lectura fisica
Tiempos de llegada:

$$
t_P=\frac{d}{v_P}
$$

$$
t_S=\frac{d}{v_S}
$$

Diferencia temporal:

$$
\Delta t=t_S-t_P=d\left(\frac{1}{v_S}-\frac{1}{v_P}\right)
$$

Distancia desde \(\Delta t\):

$$
d=\frac{\Delta t}{\frac{1}{v_S}-\frac{1}{v_P}}
$$

Velocidades en medio elastico isotropo:

$$
v_P=\sqrt{\frac{K+\frac{4}{3}G}{\rho}},\qquad v_S=\sqrt{\frac{G}{\rho}}
$$

Relacion temporal directa:

$$
t_S=t_P+\Delta t
$$

Criterio fisico tipico:

$$
v_P>v_S
$$

Lectura fisica:
- mayor rigidez volumetrica/cortante tiende a aumentar velocidades,
- mayor densidad tiende a reducir velocidades,
- cuanto mayor \(\Delta t\), mayor distancia epicentral (si velocidades medias se mantienen).

## 5- Nota conceptual importante
En modelos lineales, las velocidades P y S no dependen de amplitud.
Dependen de propiedades del medio y pueden variar con profundidad y litologia.

## 6- Metodo de resolucion recomendado
1. Ordena datos y unidades (SI).
2. Si tienes \(d\), calcula \(t_P\) y \(t_S\).
3. Si tienes \(\Delta t\), calcula \(d\) con velocidades medias.
4. Comprueba que \(t_S>t_P\) y \(v_P>v_S\).
5. Interpreta el resultado en contexto geologico.

## 7- Errores tipicos
- usar km y m/s sin convertir unidades.
- intercambiar \(v_P\) y \(v_S\).
- olvidar que \(\Delta t=t_S-t_P\) debe ser positiva.
- asumir velocidades constantes en perfiles muy heterogeneos.
- concluir sin verificar orden de magnitud.

## 8- Ejemplo completo guiado
Datos:
- \(v_P=6000\ \mathrm{m/s}\),
- \(v_S=3500\ \mathrm{m/s}\),
- \(\Delta t=24\ \mathrm{s}\).

Paso 1- distancia:

$$
d=\frac{\Delta t}{\frac{1}{v_S}-\frac{1}{v_P}}
=\frac{24}{\frac{1}{3500}-\frac{1}{6000}}
\approx2.02\times10^5\ \mathrm{m}
$$

Paso 2- tiempos de llegada:

$$
t_P=\frac{d}{v_P}\approx\frac{2.02\times10^5}{6000}\approx33.7\ \mathrm{s}
$$

$$
t_S=\frac{d}{v_S}\approx57.7\ \mathrm{s}
$$

Comprobacion:

$$
t_S-t_P\approx24\ \mathrm{s}
$$

Interpretacion: la estacion esta a unos 202 km del foco (en modelo de velocidades medias constantes).

## 9- Aplicaciones reales
- localizacion rapida de epicentros.
- estimacion de estructura interna del subsuelo.
- evaluacion de amenaza sismica.
- monitorizacion de microseismicidad en ingenieria.

## 10- Sintesis final
Dominar ondas sismicas P y S significa:
- distinguir su mecanismo fisico,
- usar correctamente tiempos de llegada,
- estimar distancia con criterio y validacion,
- interpretar limitaciones del modelo en medios reales.
