# Espectro Electromagnetico

## Idea clave
El espectro electromagnetico ordena la radiacion EM por frecuencia, longitud de onda y energia. Todas las bandas obedecen las mismas relaciones fisicas, pero sus interacciones con la materia y sus usos tecnologicos cambian radicalmente.

## 1- Que fenomeno explica este subtema y por que importa
Este subtema explica como una sola teoria conecta radio, microondas, infrarrojo, visible, ultravioleta, rayos X y gamma.

Importa porque permite:
- convertir rapidamente entre \(f\), \(\lambda\) y energia,
- entender por que distintas bandas tienen efectos fisicos distintos,
- elegir la banda adecuada en problemas de comunicacion, imagen o seguridad.

## 2- Estructura fisica del espectro
El espectro es continuo, pero se divide en bandas por conveniencia fisica y tecnologica.

Tendencias globales:
- al aumentar frecuencia, disminuye longitud de onda,
- al aumentar frecuencia, aumenta energia por foton,
- la penetracion, absorcion y riesgo biologico dependen de banda y material.

## 3- Variables y parametros que debes identificar (ver tab `Leyenda`)
- \(c\): velocidad de la luz en vacio (m/s).
- \(\lambda\): longitud de onda (m).
- \(f\): frecuencia (Hz).
- \(h\): constante de Planck (J*s).
- \(E\): energia por foton (J).
- \(E_{eV}\): energia por foton en electronvoltios (eV).
- \(n\): indice de refraccion del medio (1).
- \(v\): velocidad de propagacion en medio (m/s).

## 4- Formulacion matematica esencial
Relacion base en vacio:

$$
c=\lambda f
$$

Energia del foton:

$$
E=hf
$$

Relacion energia-longitud de onda:

$$
E=\frac{hc}{\lambda}
$$

Conversion de unidades de energia:

$$
E_{eV}=\frac{E}{e}
$$

donde \(e=1.602\times10^{-19}\,\mathrm{C}\).

Propagacion en medio:

$$
v=\frac{c}{n}
$$

Lectura fisica clave:
- frecuencia la fija la fuente,
- al entrar en un medio cambia \(v\) y \(\lambda\),
- la energia del foton depende de \(f\), no de amplitud clasica.

## 5- Modelo y condiciones de validez (ver tab `Modelo y validez`)
Modelo base valido cuando:
- propagacion electromagnetica clasica en regimen lineal,
- conversiones entre magnitudes espectrales en contextos no relativistas,
- bandas descritas por intervalos aproximados de uso.

Requiere refinamiento cuando:
- hay interacciones cuanticas detalladas con materia,
- hay dispersion compleja o medios fuertemente absorbentes,
- se necesita modelo microscopico de transiciones electronicas.

## 6- Visualizacion guiada (ver tab `Graficas`)
En `Graficas` valida:
1. Inversidad \(\lambda\)-\(f\).
2. Crecimiento de energia con frecuencia.
3. Ubicacion relativa de bandas del espectro.

Si un punto no cae en su banda esperada, revisa unidades (Hz, m, eV).

## 7- Metodo general de resolucion (ver tab `Calculadora`)
1. Identifica magnitud pedida (\(f\), \(\lambda\), \(E\), banda).
2. Convierte datos a SI.
3. Usa relacion minima necesaria.
4. Despeja en simbolico.
5. Sustituye y verifica orden de magnitud.
6. Interpreta en terminos de banda y aplicacion.

## 8- Errores frecuentes y como evitarlos (ver tab `Errores`)
- confundir unidades de \(\lambda\) (nm, um, m),
- usar \(c\) de vacio en un problema que pide medio sin corregir,
- mezclar energia en J con eV sin conversion,
- suponer fronteras de bandas como cortes exactos e inmutables,
- concluir riesgo biologico solo por "nombre" de banda sin contexto de dosis.

## 9- Conexion teoria-practica (ver tabs `Ejemplos` y `Practica`)
Este subtema se domina cuando puedes pasar de una frecuencia numerica a su banda, su energia y su posible aplicacion tecnica con justificacion fisica.

## 10- Ejemplo guia corto
Datos: \(\lambda=500\,\mathrm{nm}=5.0\times10^{-7}\,\mathrm{m}\).

Paso 1- frecuencia:

$$
f=\frac{c}{\lambda}=\frac{3.0\times10^8}{5.0\times10^{-7}}=6.0\times10^{14}\,\mathrm{Hz}
$$

Paso 2- energia:

$$
E=hf=(6.626\times10^{-34})(6.0\times10^{14})=3.98\times10^{-19}\,\mathrm{J}
$$

Paso 3- energia en eV:

$$
E_{eV}=\frac{3.98\times10^{-19}}{1.602\times10^{-19}}\approx2.48\,\mathrm{eV}
$$

Interpretacion: radiacion en visible con energia de foton tipica de ese rango.

## 11- Aplicaciones reales (ver tab `Aplicaciones`)
- radio y telecomunicaciones,
- radar y teledeteccion,
- termografia infrarroja,
- imagen medica con rayos X,
- analisis astronomico multibanda.

## 12- Sintesis final
Dominar el espectro electromagnetico significa convertir y ubicar magnitudes espectrales con criterio fisico para tomar decisiones tecnicas correctas.
