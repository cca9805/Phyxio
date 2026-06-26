# Ejemplo tipo examen

## Enunciado

Un buque oceanografico utiliza un sonar activo para medir la profundidad del fondo marino en una zona de aguas frias del Atlantico Norte. El equipo emite un pulso ultrasonico y el eco del fondo llega al receptor 3.6 segundos despues de la emision. La temperatura del agua es de 5 °C, lo que corresponde a una velocidad del sonido de 1462 m/s. Calcular la profundidad del fondo marino y determinar si el valor es coherente con una zona de llanura abisal.

Ademas, en cubierta, la maquinaria del buque genera un nivel de intensidad sonora de 92 dB en el puente de mando. El reglamento maritimo exige que el nivel de ruido en ese espacio de trabajo no supere los 75 dB. Calcular cuantos decibelios de aislamiento debe proporcionar la mampara que separa la sala de maquinas del puente para cumplir el reglamento.

## Datos

- Tiempo de vuelo del eco del sonar: 3.6 s
- Velocidad del sonido en agua a 5 °C: 1462 m/s
- Nivel de intensidad de la maquinaria en sala de maquinas: 92 dB
- Nivel maximo permitido en puente de mando: 75 dB

## Definición del sistema

El sistema de sonar consiste en un transductor emisor-receptor en el casco del buque, el medio de propagacion (agua de mar a 5 °C) y el fondo marino como superficie reflectante. El pulso viaja verticalmente hacia abajo, se refleja en el fondo y regresa al transductor. El sistema de aislamiento acustico consiste en la sala de maquinas como recinto emisor, la mampara de separacion y el puente de mando como recinto receptor.

## Modelo físico

Para la distancia por sonar: modelo de eco en medio homogeneo isotropo sin perdidas, que aplica la relacion de distancia por eco. Para el nivel de aislamiento requerido: el reglamento impone una diferencia entre [[IL_fuente]] y [[IL_rec]], que en condiciones de campo difuso es aproximadamente igual al indice de reduccion sonora [[R_aislamiento]] de la mampara.

## Justificación del modelo

El modelo de medio homogeneo es adecuado para esta aplicacion porque las aguas frias del Atlantico Norte a 5 °C tienen un perfil de velocidad relativamente uniforme en aguas profundas, y la medicion de un solo eco no requiere el perfilado de velocidad que seria necesario para sonar de alta precision en aguas con termoclina pronunciada. Para el problema de aislamiento, el modelo de diferencia de nivel equivalente a [[R_aislamiento]] es una aproximacion conservadora aceptable para una estimacion de diseño inicial.

## Resolución simbólica

Profundidad del fondo marino mediante la formula de eco:

{{f:distancia_eco}}

Aislamiento requerido de la mampara: la diferencia de nivel entre la sala de maquinas y el puente debe ser al menos 92 dB menos 75 dB. El indice de reduccion sonora necesario es esa diferencia de nivel.

{{f:aislamiento_requerido}}

La lectura de los niveles en dB se basa en la definicion logaritmica:

{{f:nivel_intensidad}}

En esa escala, el nivel [[IL]] resume una intensidad fisica [[I]] expresada respecto a la referencia auditiva.

## Sustitución numérica

Para la profundidad, introduciendo en la formula de eco: el producto de [[v_sonido]] de 1462 m/s por [[t_vuelo]] de 3.6 s da 5263.2 m. Dividiendo entre 2 se obtiene [[d_eco]] aproximadamente igual a 2631.6 m, redondeando a 2632 m.

Para el aislamiento requerido: [[IL_fuente]] de 92 dB menos [[IL_rec]] de 75 dB da 17 dB. Por tanto, la mampara debe tener un indice de reduccion sonora [[R_aislamiento]] de al menos 17 dB.

## Validación dimensional

Para la profundidad: [[v_sonido]] en m/s multiplicado por [[t_vuelo]] en s da metros; dividiendo entre 2 (adimensional) el resultado sigue en metros. Verificacion dimensional: `[L T⁻¹] · [T] = [L]`. Para el aislamiento: la diferencia de dos valores en dB da un resultado en dB, que es la unidad de [[R_aislamiento]].

## Interpretación física

La profundidad calculada de aproximadamente 2632 m es coherente con la llanura abisal del Atlantico Norte, cuya profundidad tipica esta entre 2000 y 4000 m. El valor es fisicamente plausible y confirma que el modelo de velocidad constante a 1462 m/s a 5 °C es una buena aproximacion para esta medicion.

El aislamiento minimo requerido de 17 dB es relativamente modesto y alcanzable con una mampara de acero naval de espesor estandar. Una mampara de acero de 6 mm tiene tipicamente un [[R_aislamiento]] de 27 a 30 dB a frecuencias medias, lo que proporciona un margen de seguridad de 10 dB sobre el minimo exigido. Sin embargo, el analisis deberia extenderse a bajas frecuencias (maquinaria diesel), donde el aislamiento de elementos constructivos ligeros puede caer por debajo del valor de frecuencias medias.

La operacion de division entre 2 es el punto critico del calculo de sonar: un tecnico que olvide ese factor reportaria una profundidad de 5264 m, casi el doble del valor real, lo que podria confundirse con una fosa oceanica cuando en realidad es una llanura abisal normal.

---

# Ejemplo de aplicación real

## Contexto

La ecografia medica es la aplicacion del sonido mas utilizada en diagnostico medico en todo el mundo, con mas de 200 millones de ecografias realizadas anualmente. El principio es identico al del sonar: un transductor piezoel·lectrico emite un pulso ultrasonico de alta frecuencia (entre 2 y 15 MHz) que penetra en los tejidos del paciente. En cada interfaz donde cambia la impedancia acustica (limite entre distintos tejidos u organos), parte del pulso se refleja y regresa al transductor. El equipo registra el tiempo de vuelo de cada eco y reconstruye una imagen de las estructuras internas.

Para una ecografia abdominal tipica en adulto, se usa un transductor de 3.5 MHz. La velocidad del sonido en tejido blando es de aproximadamente 1540 m/s. El rino derecho de un paciente se localiza a 8 cm de la superficie cutanea. El eco de la pared anterior del rino llega al transductor aproximadamente 104 microsegundos despues de la emision.

## Estimación física

Aplicando la formula de eco con [[v_sonido]] de 1540 m/s y [[t_vuelo]] de 104 microsegundos: el producto de ambos valores da 0.16016 m, y dividiendo entre 2 se obtiene 0.08008 m, aproximadamente 8 cm. Este valor coincide con la posicion anatomica conocida del rino, confirmando que la formula de eco con el valor correcto de [[v_sonido]] en tejido produce la localizacion correcta sin errores significativos.

La longitud de onda del ultrasonido a 3.5 MHz en tejido blando es de aproximadamente 0.44 mm. Esto significa que estructuras mayores de 1 mm pueden distinguirse en la imagen ecografica, lo que es suficiente para diagnosticar calulos renales mayores de 2 mm, quistes y masas de varios centimetros.

## Interpretación

La ecografia medica ilustra como la formula de eco —en apariencia muy simple— se convierte en una herramienta de diagnostico de alta precision cuando se controla con cuidado [[v_sonido]] del medio y la frecuencia del pulso. El equipo ecografico moderno realiza miles de pulsos por segundo en distintas direcciones y combina los ecos para reconstruir una imagen en tiempo real con resolucion submilimetrica.

La limitacion principal de la tecnica es que [[v_sonido]] varia entre tejidos (1450 m/s en grasa, 1540 m/s en musculo, 3500 m/s en hueso). El equipo asume un unico valor de calibracion (1540 m/s), lo que introduce distorsiones geometricas en interfases entre tejidos de distinta velocidad. Esta es la razon por la que las estructuras oseas producen sombras en la imagen ecografica: el hueso tiene [[v_sonido]] muy diferente al del tejido blando, lo que distorsiona los ecos de las estructuras situadas detras.
