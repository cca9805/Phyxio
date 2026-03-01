# Modos En Placas Y Membranas

## Idea clave
En sistemas bidimensionales, la resonancia no se organiza en una sola secuencia 1D sino en familias de modos (m,n). Cada modo define un patron espacial propio de nodos y vientres.

## 1- Que estudia este tema y por que es fundamental
Este tema explica como vibran y resuenan membranas (dominadas por tension) y placas (dominadas por rigidez a flexion).

Es fundamental porque muchos sistemas reales no son barras 1D:
- parches de instrumentos,
- paneles estructurales,
- diafragmas de sensores,
- placas en ingenieria vibroacustica.

Si no entiendes modos 2D, puedes calcular una frecuencia y aun asi fallar en la interpretacion espacial de la vibracion.

## 2- Mecanismo fisico: por que aparecen modos en 2D
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

En membranas:
- la fuerza restauradora principal es la tension superficial Ts,
- la inercia la fija la masa superficial mu_s.

En placas delgadas:
- la fuerza restauradora principal es la rigidez a flexion D,
- la inercia la fija rho*h.

Las fronteras bloquean ciertos desplazamientos y solo permiten patrones compatibles. Por eso aparecen modos discretos (m,n).

## 3- Magnitudes y parametros que debes identificar siempre
- Ts: tension superficial efectiva (N/m).
- mu_s: masa superficial (kg/m^2).
- v: velocidad efectiva de onda en membrana (m/s).
- Lx, Ly: dimensiones activas de la geometria (m).
- m, n: indices modales enteros positivos.
- f_mn: frecuencia del modo (m,n) en Hz.
- omega_mn: frecuencia angular modal (rad/s).
- E: modulo de Young (Pa).
- nu: coeficiente de Poisson (1).
- h: espesor de placa (m).
- rho: densidad (kg/m^3).
- D: rigidez flexional de placa (N*m).

## 4- Formulas esenciales y lectura fisica
Velocidad en membrana ideal:

$$
v=\sqrt{\frac{T_s}{\mu_s}}
$$

Frecuencia modal en membrana rectangular (bordes fijos):

$$
f_{mn}=\frac{v}{2}\sqrt{\left(\frac{m}{L_x}\right)^2+\left(\frac{n}{L_y}\right)^2}
$$

Rigidez flexional de placa delgada isotropa:

$$
D=\frac{E h^3}{12\left(1-\nu^2\right)}
$$

Frecuencia angular modal aproximada de placa rectangular delgada:

$$
omega_{mn}=\pi^2\sqrt{\frac{D}{\rho h}}\left[\left(\frac{m}{L_x}\right)^2+\left(\frac{n}{L_y}\right)^2\right]
$$

Relacion con frecuencia en Hz:

$$
f_{mn}=\frac{\omega_{mn}}{2\pi}
$$

Lectura fisica clave:
- en membranas domina Ts/mu_s,
- en placas domina D/(rho h),
- en ambos casos la geometria fija la jerarquia modal,
- modos distintos pueden tener frecuencias cercanas pero patrones espaciales distintos.

## 5- Nota conceptual importante
En regimen lineal, la frecuencia modal no depende de la amplitud de oscilacion.

Depende de:
- propiedades del medio/sistema,
- condiciones de frontera,
- indices modales (m,n).

Este punto evita errores frecuentes al interpretar simulaciones o ensayos.

## 6- Dominio de validez del modelo
Estas expresiones son validas cuando:
- deformaciones pequenas (linealidad),
- material y tension aproximadamente uniformes,
- bordes bien aproximados por condiciones ideales,
- en placas, comportamiento de placa delgada (Kirchhoff-Love).

Si hay anisotropia fuerte, grandes deformaciones, acoplos no lineales o frontera compleja, se requiere modelo numerico avanzado.

## 7- Metodo de resolucion recomendado
1. Clasifica el sistema: membrana o placa.
2. Identifica frontera y dimensiones efectivas Lx y Ly.
3. Selecciona modo (m,n) segun el patron observado o pedido.
4. Calcula velocidad (membrana) o rigidez D (placa) si aplica.
5. Calcula f_mn u omega_mn con unidades SI.
6. Verifica si el resultado es coherente con escala y material.
7. Interpreta el patron nodal, no solo la cifra de frecuencia.

## 8- Errores tipicos que debes evitar
- usar formula de membrana para una placa rigida (o al reves).
- olvidar que m y n empiezan en 1 para modos no triviales en bordes fijos.
- confundir modo (2,1) con (1,2) cuando Lx != Ly.
- mezclar Hz y rad/s sin conversion.
- ignorar que un cambio pequeno de espesor h afecta mucho D (depende de h^3).
- sacar conclusiones solo por frecuencia sin validar forma modal.

## 9- Ejemplo completo guiado (membrana rectangular)
Datos:
- Ts=180 N/m,
- mu_s=0.90 kg/m^2,
- Lx=0.80 m,
- Ly=0.50 m,
- modo (m,n)=(2,1).

Paso 1- velocidad:

$$
v=\sqrt{\frac{180}{0.90}}=\sqrt{200}\approx14.14\ \mathrm{m/s}
$$

Paso 2- frecuencia modal:

$$
f_{21}=\frac{14.14}{2}\sqrt{\left(\frac{2}{0.80}\right)^2+\left(\frac{1}{0.50}\right)^2}
$$

$$
f_{21}=7.07\sqrt{6.25+4.00}=7.07\sqrt{10.25}\approx22.65\ \mathrm{Hz}
$$

Interpretacion:
- si aumentas Ts, suben todas las frecuencias,
- si aumentas mu_s, bajan,
- el patron espacial del modo (2,1) tiene una linea nodal interna paralela a y.

## 10- Sintesis final
Dominar modos en placas y membranas significa:
- distinguir mecanismo restaurador (tension o flexion),
- calcular frecuencias con geometria y material correctos,
- leer la forma modal ademas del valor numerico,
- resolver con criterio fisico y no solo sustitucion algebraica.
