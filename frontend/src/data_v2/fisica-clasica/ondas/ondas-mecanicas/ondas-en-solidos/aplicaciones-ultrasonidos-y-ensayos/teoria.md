# Aplicaciones Ultrasonidos Y Ensayos

## Idea clave
En ensayos ultrasonicos no basta con detectar un eco: hay que convertir tiempos, amplitudes y coeficientes de interfaz en informacion fisica sobre espesor, discontinuidades y calidad del material.

## 1- Que estudia este tema y por que es fundamental
Este tema integra la teoria de ondas en solidos con la practica de ensayos no destructivos (END):
- medicion de espesor por pulso-eco,
- contraste de impedancias para interpretar ecos,
- perdidas por atenuacion en el trayecto.

Es fundamental porque en inspeccion real una lectura instrumental solo es util si sabes traducirla a magnitudes fisicas validas.

## 2- Mecanismo fisico de medida ultrasonica
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

En inspeccion por ultrasonidos:
1. Un transductor emite un pulso mecanico de alta frecuencia.
2. El pulso viaja por el solido con velocidad v del material.
3. En una interfaz con cambio de impedancia Z aparecen reflexion y transmision.
4. El receptor mide tiempo de vuelo y amplitud de ecos.

Con esas medidas se estiman geometria (espesor/defecto) y estado del medio.

## 3- Magnitudes y parametros esenciales
- e: espesor o profundidad equivalente (m).
- v: velocidad ultrasónica en el material (m/s).
- t: tiempo de vuelo total ida-vuelta (s).
- rho: densidad del material (kg/m^3).
- Z: impedancia acustica mecanica (kg/(m^2*s)).
- Z1, Z2: impedancias de los dos medios en la interfaz.
- R_A: coeficiente de reflexion en amplitud.
- R_I: coeficiente de reflexion en intensidad.
- T_I: coeficiente de transmision en intensidad (incidencia normal).
- A0, Ax: amplitud de referencia y amplitud tras propagacion.
- A_dB: perdida total en dB.
- alpha_dB: atenuacion por metro (dB/m).
- alpha_Np: atenuacion por metro (Np/m).
- x: distancia de propagacion (m).
- f: frecuencia del transductor (Hz).
- lambda: longitud de onda (m).

## 4- Formulas esenciales y lectura fisica
Espesor por pulso-eco:

$$
e=\frac{v\,t}{2}
$$

Impedancia del medio:

$$
Z=\rho\,v
$$

Reflexion en amplitud (incidencia normal):

$$
R_A=\frac{Z_2-Z_1}{Z_2+Z_1}
$$

Reflexion en intensidad:

$$
R_I=\left(\frac{Z_2-Z_1}{Z_2+Z_1}\right)^2
$$

Transmision en intensidad (sin perdidas de interfaz):

$$
T_I=\frac{4Z_1Z_2}{(Z_1+Z_2)^2}
$$

Perdida total por amplitudes:

$$
A_{dB}=20\log_{10}\!\left(\frac{A_0}{A_x}\right)
$$

Atenuacion por unidad de longitud:

$$
\alpha_{dB}=\frac{A_{dB}}{x}
$$

Relacion de onda para resolucion:

$$
\lambda=\frac{v}{f}
$$

Lectura fisica importante:
- mayor salto de impedancia entre Z1 y Z2 implica eco reflejado mas intenso,
- mayor frecuencia mejora resolucion espacial (lambda menor),
- pero frecuencias altas suelen aumentar atenuacion efectiva.

## 5- Nota conceptual importante
La amplitud de un eco no depende solo del defecto. Tambien depende de:
- acoplamiento transductor-pieza,
- atenuacion del trayecto,
- orientacion del reflector,
- ganancia del equipo.

Por eso una interpretacion correcta siempre combina tiempo de vuelo + amplitud + contexto de ensayo.

## 6- Dominio de validez del modelo
Las formulas basicas de este tema son validas cuando:
- incidencia aproximadamente normal,
- trayectoria simple y bien conocida,
- regimen lineal de propagacion,
- calibracion estable del sistema.

En geometria compleja o incidencia oblicua se requieren modelos con Snell, conversion modal y trazado de rayos.

## 7- Metodo de resolucion recomendado
1. Identifica el tipo de dato medido: tiempo, amplitud o ambos.
2. Convierte todo a SI (s, m, kg/m^3, Hz).
3. Calcula primero e o distancia con pulso-eco.
4. Evalua contraste de interfaz con Z, R_A y R_I.
5. Si hay perdida de amplitud, calcula A_dB y alpha_dB.
6. Verifica orden de magnitud y coherencia experimental.
7. Cierra con interpretacion fisica: geometria + material + calidad de señal.

## 8- Errores tipicos que debes evitar
- olvidar el factor 1/2 en pulso-eco (ida y vuelta).
- usar Z sin unidades coherentes de rho y v.
- confundir coeficiente de amplitud con coeficiente de intensidad.
- comparar amplitudes sin corregir atenuacion de trayecto.
- subir frecuencia sin considerar perdida de penetracion.
- concluir defecto por un solo eco sin control de falsas indicaciones.

## 9- Ejemplo completo guiado
Datos:
- v=5900 m/s,
- t=24 us,
- rho=7850 kg/m^3,
- Z1=46.3e6, Z2=1.5e6 kg/(m^2*s),
- A0=1.00, Ax=0.32, x=0.12 m,
- f=5e6 Hz.

Paso 1- espesor por pulso-eco:

$$
e=\frac{5900\cdot24\times10^{-6}}{2}=0.0708\ \mathrm{m}
$$

Paso 2- impedancia del acero:

$$
Z=\rho v=7850\cdot5900\approx4.63\times10^7\ \mathrm{kg/(m^2 s)}
$$

Paso 3- reflexion de intensidad en interfaz acero-aire:

$$
R_I=\left(\frac{Z_2-Z_1}{Z_2+Z_1}\right)^2\approx0.88
$$

Resultado: interfaz muy reflectante, eco fuerte esperado.

Paso 4- perdida en dB y atenuacion:

$$
A_{dB}=20\log_{10}\left(\frac{1.00}{0.32}\right)\approx9.90\ \mathrm{dB}
$$

$$
\alpha_{dB}=\frac{9.90}{0.12}\approx82.5\ \mathrm{dB/m}
$$

Paso 5- longitud de onda:

$$
\lambda=\frac{5900}{5\times10^6}=1.18\times10^{-3}\ \mathrm{m}
$$

Interpretacion final:
- buena resolucion (lambda ~1.18 mm),
- fuerte reflexion en interfaz,
- perdida significativa en trayecto que debe compensarse en calibracion.

## 10- Sintesis final
Dominar aplicaciones de ultrasonidos y ensayos significa:
- traducir señales del equipo a magnitudes fisicas,
- separar efecto geometrico, de interfaz y de atenuacion,
- decidir con criterio frecuencia, alcance y fiabilidad de deteccion,
- cerrar cada problema con una conclusion tecnica defendible.
