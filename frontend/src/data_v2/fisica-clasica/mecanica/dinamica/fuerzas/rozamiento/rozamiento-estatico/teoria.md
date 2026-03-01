# Rozamiento Estatico

## Idea clave
El rozamiento estatico es la fuerza de contacto que evita el inicio del deslizamiento relativo entre dos superficies. No es constante: se ajusta al valor necesario hasta un maximo.

## 1- Que estudia este tema y por que es importante
Este tema responde una duda central de dinamica de contacto: por que un objeto puede permanecer quieto aunque le apliques una fuerza horizontal

La respuesta es que el rozamiento estatico se adapta para equilibrar la tendencia al deslizamiento, hasta un limite fisico impuesto por los materiales en contacto.

## 2- Modelo matematico correcto
Condicion general del rozamiento estatico:

$$
f_s \le \mu_s N
$$

Valor maximo disponible:

$$
f_{s,\max}=\mu_s N
$$

Donde:
- \(f_s\): rozamiento estatico efectivo,
- \(\mu_s\): coeficiente de rozamiento estatico,
- \(N\): normal.

## 3- Diferencia clave con rozamiento dinamico
Estatico:
- actua cuando no hay deslizamiento relativo,
- su modulo se ajusta entre 0 y \(f_{s,\max}\).

Dinamico:
- actua cuando ya hay deslizamiento,
- suele modelarse aproximadamente constante:

$$
f_k = \mu_k N
$$

con \(\mu_k < \mu_s\) en muchos materiales.

## 4- Direccion y sentido fisico
El rozamiento estatico:
- es paralelo a la superficie,
- se opone a la tendencia de deslizamiento, no necesariamente a la velocidad del centro de masas.

Esto es importante en rodadura y en cuerpos con varias fuerzas aplicadas.

## 5- Umbral de arranque
Si la fuerza tangencial requerida para mantener equilibrio supera \(f_{s,\max}\), el equilibrio de contacto se rompe y comienza el deslizamiento.

Criterio de inicio:

$$
F_{\text{tangencial requerida}} > \mu_s N
$$

En el umbral:

$$
F_{\text{tangencial requerida}} = \mu_s N
$$

## 6- Relacion directa con la normal
Como \(f_{s,\max}\) depende de \(N\), cualquier cambio en la normal cambia el "margen anti-deslizamiento".

Ejemplos:
- en un plano inclinado, \(N\) baja al aumentar \(\theta\),
- si presionas mas un objeto contra la mesa, \(N\) sube y aumenta \(f_{s,\max}\).

## 7- Metodo de resolucion por casos
1. Dibuja DCL y ejes.
2. Calcula \(N\) con el eje perpendicular.
3. Plantea equilibrio tangencial suponiendo sin deslizamiento.
4. Obtiene \(f_s\) necesario.
5. Verifica condicion:

$$
|f_s| \le \mu_s N
$$

6. Si no se cumple, cambia a modelo de rozamiento dinamico.

Este flujo evita el error de imponer \(f_s=\mu_s N\) desde el inicio.

## 8- Ejemplo guiado
Bloque de \(10\,\text{kg}\) sobre horizontal con \(\mu_s=0.40\). Fuerza aplicada horizontal \(F=25\,\text{N}\).

Normal:

$$
N=mg=10\cdot 9.81=98.1\ \text{N}
$$

Rozamiento estatico maximo:

$$
f_{s,\max}=\mu_s N=0.40\cdot 98.1=39.24\ \text{N}
$$

Como \(25 < 39.24\), no desliza.

Rozamiento efectivo:

$$
f_s=25\ \text{N}
$$

en sentido opuesto a la tendencia de movimiento.

## 9- Errores tipicos
- Suponer siempre \(f_s=\mu_s N\).
- Usar \(\mu_k\) cuando aun no hay deslizamiento.
- Ignorar el sentido correcto del rozamiento.
- Calcular rozamiento sin calcular antes la normal.
- Olvidar verificar desigualdad antes de concluir equilibrio.

## 10- Sintesis final
El rozamiento estatico es una fuerza de ajuste, no una constante fija. Su papel es sostener el no-deslizamiento hasta un limite. Entender esa desigualdad y su verificacion por casos es clave para resolver correctamente planos inclinados, traccion y equilibrio con contacto.

