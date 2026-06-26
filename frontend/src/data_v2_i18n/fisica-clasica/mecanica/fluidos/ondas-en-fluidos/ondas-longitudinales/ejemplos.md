# Ejemplos de Ondas Longitudinales

# Ejemplo tipo examen

## Enunciado
Un transductor ultrasónico de alta precisión sumergido en agua destilada ([[[[rho]]]] = 1000  kg/m^3, [[B]] = 2.2 x 10^9  Pa) se utiliza para detectar imperfecciones microscópicas en el casco de un barco. El dispositivo emite una onda longitudinal armónica pura con una frecuencia fija [[f]] = 1  MHz (10^6  Hz). Se registra que la amplitud de presión acústica máxima generada en el foco emisor es de [[p_hat]] = 50  kPa (5 x 10^4  Pa). Considerando que el medio se comporta como un fluido ideal y que la propagación es adiabática debido a la alta rapidez de oscilación que impide el flujo de calor entre zonas de compresión y rarefacción, determine detalladamente:
1. La rapidez de propagación [[c]] del sonido en este medio específico.
2. La longitud de onda [[lambda]] de la señal emitida, que define la resolución del sistema de detección.
3. El número de onda [[k]] (periodicidad espacial) y la frecuencia angular [[omega]] (temporal periodicity) de la onda.
4. La amplitud de desplazamiento [[s_hat]] de las moléculas de agua durante el paso de la onda.
5. La intensidad sonora I de la onda en el punto de emisión.

## Datos
- Densidad del agua [[rho]] = 1000  kg/m^3.
- Módulo de compresibilidad [[B]] = 2.2 x 10^9  Pa.
- Frecuencia [[f]] = 1 x 10^6  Hz.
- Amplitud de presión [[p_hat]] = 5 x 10^4  Pa.

## Definición del sistema
El sistema se define como un volumen de agua destilada homogéneo e isotrópico. Se analiza una región alejada de las paredes (campo lejano) donde la onda puede aproximarse como una onda plana progresiva. El sistema está en equilibrio térmico y mecánico antes de la llegada de la perturbación, y despreciamos efectos gravitatorios o gradientes de presión por profundidad para este análisis local. El fluido se trata como un continuo elástico, lo cual es la base fundamental de la acústica lineal.

## Modelo físico
Se emplea el **Modelo de Acústica Lineal**. Este modelo utiliza la relacion dinamica del medio para determinar la rapidez a partir de [[B]] y [[rho]]. Además, se basa en la relacion constitutiva entre amplitud de presion y desplazamiento molecular para vincular [[p_hat]] con [[s_hat]]. Esto sucede porque el medio reacciona elásticamente a las compresiones volumétricas, convirtiendo el movimiento de las partículas en variaciones de presión local de forma proporcional. El efecto de esta perturbación es una onda que transporta energía sin transporte neto de materia.

## Justificación del modelo
El uso de la acústica lineal está plenamente justificado ya que la amplitud de presión generada (50  kPa) representa apenas un 0.002% del módulo de compresibilidad del agua (2.2  GPa). Esta baja magnitud garantiza que la causa de la perturbación no sea lo suficientemente fuerte como para entrar en el régimen de ondas de choque. Además, a una frecuencia de 1  MHz, la longitud de onda resultante es mucho mayor que la distancia entre las moléculas de agua (aprox. 0.3  nm), lo que valida la hipótesis de medio continuo. El proceso es adiabático porque la frecuencia es tan alta que las fluctuaciones de temperatura no tienen tiempo de propagarse por conducción, causando que la energía se conserve localmente en la onda.

## Resolucion simbolica
La rapidez de propagacion se obtiene con la relacion de velocidad del fluido.

{{f:velocidad_fluido}}

La longitud de onda se obtiene despues con la relacion fundamental de propagacion.

{{f:onda_fundamental}}

Las constantes de fase se calculan mediante la periodicidad espacial y temporal de la onda.

{{f:numero_onda_def}}

{{f:omega_def}}

La amplitud de desplazamiento molecular se determina a partir de la relacion presion-desplazamiento.

{{f:relacion_amplitudes}}

La intensidad se estima como transporte energetico por unidad de area; se mantiene como lectura derivada, no como formula nuclear del leaf.

## Sustitucion numerica
1. Con [[B]] = 2.2 por 10^9 Pa y [[rho]] = 1000 kg/m^3, la rapidez de propagacion resulta [[c]] = 1483.24 m/s. Esta rapidez es causada directamente por la alta rigidez del agua comparada con el aire.
2. Para [[f]] = 1 MHz, la longitud de onda resulta [[lambda]] = 1.483 mm. La razon de este valor milimetrico es el efecto combinado de la alta frecuencia de la fuente y la inercia del medio.
3. La periodicidad espacial da [[k]] = 4236.4 rad/m y la periodicidad temporal da [[omega]] = 6.283 por 10^6 rad/s.
4. La amplitud de desplazamiento resultante es [[s_hat]] = 5.36 nm, un valor nanometrico coherente con la resistencia del agua a comprimirse.
5. La intensidad estimada es 842.7 W/m^2, lo que indica una onda energeticamente intensa aunque el desplazamiento molecular sea muy pequeno.

## Validacion dimensional
- Rapidez: el cociente entre presion y densidad tiene dimension de velocidad al cuadrado; su raiz da m/s.
- Amplitud de desplazamiento: dividir una presion entre rigidez por numero de onda deja una longitud.
- Intensidad: el transporte de energia por area y tiempo queda expresado en W/m^2.

## Interpretación física
El resultado obtenido [[c]] aprox. 1483  m/s **significa** que la rapidez de propagación es consecuencia directa de las propiedades elásticas del agua. La longitud de onda milimétrica (1.48  mm) nos **indica** una limitación física en la resolución del sensor: no podrá detectar grietas menores a este tamaño porque la onda no "chocaría" con ellas de forma efectiva. Un resultado impactante es la amplitud de desplazamiento de solo 5  nanómetros; la causa de este valor tan bajo es la enorme resistencia del agua a ser comprimida. El efecto es que la energía se transmite predominantemente como variaciones de presión [[p_hat]]. Esto sucede porque los enlaces intermoleculares en el líquido son muy rígidos. La relación de causa y efecto entre la fuerza de la fuente y la respuesta del medio define todo el fenómeno acústico aquí descrito.

---

# Ejemplo de aplicación real

## Contexto
**Ecografía Doppler y Flujometría:** En medicina clínica, el estudio de las ondas longitudinales es la causa principal de nuestra capacidad para medir la velocidad sanguínea de forma no invasiva. Se emiten ondas de ultrasonido que rebotan en los glóbulos rojos. Debido a que las células se mueven, el efecto Doppler causa un cambio en la frecuencia reflejada.

## Estimación física
Si consideramos un equipo de ecografía operando a 5  MHz en tejidos con densidad [[rho]] = 1060  kg/m^3 y módulo [[B]] = 2.15 x 10^9  Pa, **estimamos** cuantitativamente que la velocidad del sonido será de aproximadamente 1424  m/s. Para un flujo sanguíneo de 0.5  m/s alejándose de la sonda, el cambio de frecuencia Doppler será:
cambio de frecuencia = 2 [[f]] (v/[[c]]) cos theta aprox. 3511  Hz.
Este **orden de magnitud** de pocos kilohercios es lo que permite al equipo procesar la señal de forma electrónica y audible.

## Interpretación
Esta diferencia de frecuencia de 3.5  kHz **significa** que el efecto Doppler cae en el rango audible, lo cual es un efecto afortunado de las escalas de velocidad biológica. La razón por la que esto es útil es que permite a los médicos transformar un efecto físico en una señal sonora interpretable. El resultado nos **indica** que cualquier error en la medición suele ser una variación inesperada en [[c]] por cambios en la rigidez del tejido. Debido a que el ultrasonido interactúa mecánicamente con el medio, es una herramienta de diagnóstico sin igual. Este fenómeno es la base de la medicina preventiva cardiovascular moderna.
