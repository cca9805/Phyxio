# Velocidad Del Sonido

## Idea clave
La velocidad del sonido no la fija la fuente: la fija el medio. La fuente fija la frecuencia, pero la rapidez de propagacion depende de rigidez, densidad y estado termodinamico del material.

## 1- Que fenomeno explica este subtema y por que importa
Este subtema responde una pregunta clave: por que el sonido viaja mucho mas rapido en agua o solidos que en aire, y por que cambia con la temperatura del gas.

Es fundamental porque permite:
- elegir el modelo correcto segun medio,
- evitar errores al usar formulas fuera de su rango,
- interpretar variaciones reales de tiempo de llegada, resonancia y diseno acustico.

## 2- Mecanismo dinamico de la velocidad en un medio
La propagacion sonora necesita dos ingredientes fisicos:
- restauracion elastica (el medio tiende a recuperar su estado),
- inercia (la masa del medio se opone a acelerarse).

Por eso, de forma cualitativa:
- mayor rigidez efectiva \(\Rightarrow\) mayor velocidad,
- mayor densidad efectiva \(\Rightarrow\) menor velocidad.

La fuente puede cambiar amplitud o frecuencia, pero no decide por si sola la velocidad del sonido en ese medio.

## 3- Variables y parametros que debes identificar (ver tab `Leyenda`)
- \(v\): velocidad del sonido (m/s).
- \(\lambda\): longitud de onda (m).
- \(f\): frecuencia (Hz).
- \(T_c\): temperatura en Celsius (degC).
- \(T_K\): temperatura absoluta en Kelvin (K).
- \(B\): modulo volumetrico o de compresion (Pa).
- \(\rho\): densidad del medio (kg/m^3).
- \(\gamma\): coeficiente adiabatico del gas (1).
- \(R\): constante universal de los gases (J/(mol*K)).
- \(M\): masa molar del gas (kg/mol).
- \(p_0\): presion de equilibrio del medio (Pa).

## 4- Formulacion matematica esencial
Relacion ondulatoria basica:

$$
v=\lambda f
$$

Aproximacion practica en aire seco cercano a ambiente:

$$
v\approx331+0.6T_c
$$

Modelo mecanico general en medio compresible:

$$
v=\sqrt{\frac{B}{\rho}}
$$

Modelo de gas ideal (proceso adiabatico):

$$
v=\sqrt{\frac{\gamma R T_K}{M}}
$$

Forma equivalente para gas ideal:

$$
v=\sqrt{\frac{\gamma p_0}{\rho}}
$$

Lectura fisica:
- en aire, al aumentar \(T\) sube \(v\),
- en liquidos y solidos, la mayor rigidez eleva \(v\),
- para una fuente fija, si \(v\) cambia con medio, \(\lambda\) cambia y \(f\) se mantiene.

## 5- Modelo y condiciones de validez (ver tab `Modelo y validez`)
Las expresiones funcionan bien cuando:
- perturbaciones pequenas,
- medio aproximadamente homogeneo,
- regimen lineal sin choques,
- parametros del medio bien definidos.

Debes corregir o refinar cuando:
- hay gradientes termicos fuertes,
- hay mezcla de fases o porosidad compleja,
- domina atenuacion/dispersión no incluida en el modelo simple.

## 6- Visualizacion guiada (ver tab `Graficas`)
En `Graficas` valida:
1. Que al subir \(T_c\) en aire suba \(v\).
2. Que para \(f\) fija, \(\lambda\) cambie en proporcion a \(v\).
3. Que los resultados de distintos medios mantengan orden fisico razonable.

Si el valor calculado contradice esas tendencias, revisa unidades y modelo elegido.

## 7- Metodo general de resolucion (ver tab `Calculadora`)
1. Identifica medio y estado (aire, agua, solido, gas ideal).
2. Define la incognita real y unidad objetivo.
3. Selecciona la formula de velocidad adecuada al contexto.
4. Despeja simbolicamente antes de sustituir.
5. Convierte magnitudes a SI (especialmente temperaturas y densidades).
6. Verifica orden de magnitud.
7. Interpreta el resultado fisicamente.

## 8- Errores frecuentes y como evitarlos (ver tab `Errores`)
- usar \(T_c\) en formula que exige \(T_K\),
- aplicar \(v\approx331+0.6T_c\) fuera de su rango,
- confundir frecuencia de la fuente con velocidad del medio,
- mezclar propiedades de aire con agua o solidos,
- no comprobar coherencia de unidades en \(B\), \(\rho\), \(M\).

## 9- Conexion teoria-practica (ver tabs `Ejemplos` y `Practica`)
Este subtema se domina cuando puedes justificar por que cambia \(v\), no solo calcular cuanto vale.

Ese criterio impacta en todos los problemas de eco, resonancia, tiempo de vuelo y diseno acustico.

## 10- Ejemplo guia corto
Datos: aire a \(25^\circ\mathrm{C}\), fuente de \(f=500\,\mathrm{Hz}\).

Paso 1- velocidad aproximada en aire:

$$
v\approx331+0.6\cdot25=346\,\mathrm{m/s}
$$

Paso 2- longitud de onda:

$$
\lambda=\frac{v}{f}=\frac{346}{500}=0.692\,\mathrm{m}
$$

Interpretacion: para la misma fuente, un medio con mayor velocidad daria una longitud de onda mayor.

## 11- Aplicaciones reales (ver tab `Aplicaciones`)
- localizacion por tiempo de vuelo,
- ultrasonidos y ensayos no destructivos,
- modelado de salas y ruido industrial,
- meteorologia acustica y sensores en gases.

## 12- Sintesis final
Dominar la velocidad del sonido significa seleccionar modelo correcto, respetar unidades y explicar fisicamente por que el resultado tiene ese valor en ese medio.
