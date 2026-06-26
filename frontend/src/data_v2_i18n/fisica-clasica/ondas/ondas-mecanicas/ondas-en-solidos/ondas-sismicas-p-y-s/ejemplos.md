# Ejemplo tipo examen


## Enunciado

Un sismo se produce a 80 km de profundidad bajo una estacion sismologica. La corteza terrestre en esa region tiene modulo de compresibilidad de 75 GPa, modulo de cizalla de 32 GPa y densidad de 2800 kg/m3. Determinar las velocidades de las ondas P y S, el cociente de velocidades, el coeficiente de Poisson y la diferencia de tiempos de llegada P-S.

## Datos

- Profundidad (distancia al foco): 80 km, equivalente a 80000 m
- Modulo de compresibilidad: 75 GPa, equivalente a 75×10⁹ Pa
- Modulo de cizalla: 32 GPa, equivalente a 32×10⁹ Pa
- Densidad del medio: 2800 kg/m3

## Definición del sistema

El sistema es un medio solido isotropo y homogeneo (corteza terrestre simplificada) entre el hipocentro y la estacion superficial. La propagacion se asume en linea recta (sin refraccion por capas).

## Modelo físico

Se aplica el modelo de **medio elastico isotropo infinito** con propagacion de ondas de cuerpo (P y S). Las magnitudes centrales son [[v_p]], [[v_s]], [[modulo_de_compresibilidad]], [[modulo_de_cizalla]], [[rho_medio]], [[ratio_vp_vs]], [[nu_poisson]], [[delta_t_ps]] y [[d_foco]].

## Justificación del modelo

El modelo es valido porque la longitud de onda sismica a frecuencias tipicas (0.1–10 Hz) es del orden de kilometros, mucho mayor que las heterogeneidades minerales. La distancia de 80 km permite asumir trayectoria recta sin refraccion significativa en una corteza aproximadamente uniforme. Si la distancia fuera mayor o el medio estratificado, habria que usar dromocronas corregidas.

## Resolución simbólica

Para la velocidad P se aplica:

{{f:velocidad_onda_p}}

Para la velocidad S:

{{f:velocidad_onda_s}}

El cociente de velocidades:

{{f:relacion_vp_vs_poisson}}

Para la diferencia de tiempos:

{{f:diferencia_tiempos_sismo}}

## Sustitución numérica

Calculando [[v_p]]: la raiz cuadrada de (75×10⁹ mas 4/3 por 32×10⁹) dividido entre 2800. El numerador da 75×10⁹ mas 42.67×10⁹, que es 117.67×10⁹. Dividiendo entre 2800 resulta 42.02×10⁶. La raiz cuadrada da aproximadamente 6483 m/s. Por tanto [[v_p]] ≈ 6483 m/s.

Calculando [[v_s]]: la raiz cuadrada de 32×10⁹ dividido entre 2800, que es 11.43×10⁶. La raiz cuadrada da aproximadamente 3381 m/s. Por tanto [[v_s]] ≈ 3381 m/s.

El [[ratio_vp_vs]] es 6483 dividido entre 3381, que da aproximadamente 1.917.

Para [[nu_poisson]]: usando la formula inversa, (1.917² menos 2) dividido entre (2 por 1.917² menos 2), que es (3.675 menos 2) dividido entre (7.35 menos 2), es decir 1.675 dividido entre 5.35. Por tanto [[nu_poisson]] ≈ 0.313.

Para [[delta_t_ps]]: 80000 por (1/3381 menos 1/6483), que es 80000 por (0.000296 menos 0.000154), es decir 80000 por 0.000142. Por tanto [[delta_t_ps]] ≈ 11.3 s.

## Validación dimensional

- [[v_p]] y [[v_s]]: `[M L⁻¹ T⁻²]` dividido entre `[M L⁻³]` da `[L² T⁻²]`; la raiz cuadrada resulta `[L T⁻¹]` ✓
- [[ratio_vp_vs]]: velocidad entre velocidad, adimensional `[1]` ✓
- [[nu_poisson]]: adimensional `[1]` ✓
- [[delta_t_ps]]: `[L]` por `[T L⁻¹]` da `[T]` ✓

## Interpretación física

Los valores obtenidos son coherentes con corteza continental intermedia. La [[v_p]] de 6483 m/s esta en el rango tipico (5500–6500 m/s), lo que confirma que los modulos y densidad son representativos. La [[v_s]] de 3381 m/s tambien encaja en el rango esperado (3000–3700 m/s).

El [[ratio_vp_vs]] de 1.92 es ligeramente superior al valor de Poisson ideal (1.73), lo que indica un [[nu_poisson]] de 0.31, compatible con rocas de composicion intermedia (granitica-basaltica) con algo de saturacion de fluidos en fracturas o poros.

La diferencia de tiempos de 11.3 segundos es lo que un sismografo registraria: primero el tren de ondas P (compresion vertical dominante) y 11.3 segundos despues el tren S (movimiento horizontal). Este intervalo permite inmediatamente estimar la distancia al foco: si se conocen las velocidades del medio, basta multiplicar [[delta_t_ps]] por el factor inverso para obtener [[d_foco]].

Si la densidad fuera mayor (manto superior, 3300 kg/m3 en lugar de 2800), ambas velocidades disminuirian pero el [[ratio_vp_vs]] se mantendria similar porque depende del cociente de modulos, no directamente de la densidad.

# Ejemplo de aplicación real


## Contexto

Una red sismica regional registra un terremoto. La estacion A mide una diferencia P-S de 8.5 segundos, la estacion B mide 12.2 segundos y la estacion C mide 15.7 segundos. Se asumen velocidades promedio para corteza superior: [[v_p]] de 6000 m/s y [[v_s]] de 3460 m/s.

## Estimación física

Con las velocidades conocidas, el factor (1/[[v_s]] menos 1/[[v_p]]) vale (1/3460 menos 1/6000), que es aproximadamente 1.223×10⁻⁴ s/m.

Para la estacion A: [[d_foco]] es 8.5 dividido entre 1.223×10⁻⁴, que da aproximadamente 69.5 km.
Para la estacion B: [[d_foco]] es 12.2 dividido entre 1.223×10⁻⁴, que da aproximadamente 99.8 km.
Para la estacion C: [[d_foco]] es 15.7 dividido entre 1.223×10⁻⁴, que da aproximadamente 128.4 km.

Con tres distancias y las posiciones conocidas de las estaciones, se traza un circulo de radio correspondiente alrededor de cada estacion. El punto de interseccion de los tres circulos localiza el epicentro. La profundidad se obtiene como la componente vertical de la distancia hipocentral.

## Interpretación

Este metodo de triangulacion fue inventado a principios del siglo XX y sigue siendo la base de los sistemas automaticos de alerta temprana. La precision depende de la calidad del modelo de velocidades: en zonas con corteza heterogenea, se usan modelos 3D que refractan las trayectorias y corrigen los tiempos. Para alertas rapidas, basta con una sola estacion y un [[delta_t_ps]] para estimar la distancia aproximada y activar protocolos de seguridad.