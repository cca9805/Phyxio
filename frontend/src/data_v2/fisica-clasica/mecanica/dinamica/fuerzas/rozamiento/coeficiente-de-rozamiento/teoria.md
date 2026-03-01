# Coeficiente De Rozamiento

## Idea clave
El coeficiente de rozamiento es un parametro adimensional que relaciona la fuerza de rozamiento con la normal en modelos de contacto seco. Hay un coeficiente estatico \(\mu_s\) y otro dinamico \(\mu_k\), y normalmente \(\mu_s > \mu_k\).

## 1- Que representa realmente \(\mu\)
No es una constante universal del "material aislado". Representa el comportamiento del par de superficies en contacto bajo ciertas condiciones.

Depende de:
- rugosidad efectiva,
- limpieza y contaminacion,
- lubricacion,
- temperatura,
- estado de desgaste.

Por eso un mismo material puede tener distintos \(\mu\) segun contexto.

## 2- Definiciones operativas
En el umbral de deslizamiento:

$$
f_{s,\max}=\mu_s N
$$

Durante deslizamiento:

$$
f_k=\mu_k N
$$

Despejes:

$$
\mu_s=\frac{f_{s,\max}}{N},\qquad \mu_k=\frac{f_k}{N}
$$

## 3- Por que hay dos coeficientes
En reposo relativo, las micro-uniones entre superficies pueden sostener mas fuerza antes de romperse (regimen estatico).

Cuando ya hay deslizamiento, esas uniones se forman y rompen continuamente, y la resistencia media suele ser menor (regimen dinamico).

Resultado tipico:

$$
\mu_k < \mu_s
$$

## 4- Unidades y control dimensional
\(\mu\) no tiene unidades porque es cociente de dos fuerzas:

$$
[\mu] = \frac{[F]}{[N]} = 1
$$

Si al calcular \(\mu\) te sale con unidades, hay error de planteamiento o conversion.

## 5- Metodo experimental por fuerzas
Ensayo estatico:
1. Incrementa fuerza tangencial lentamente.
2. Registra fuerza justo antes de deslizar (\(f_{s,\max}\)).
3. Calcula \(\mu_s=f_{s,\max}/N\).

Ensayo dinamico:
1. Mantiene deslizamiento aproximadamente uniforme.
2. Mide fuerza de arrastre media (\(f_k\)).
3. Calcula \(\mu_k=f_k/N\).

## 6- Metodo del angulo critico (plano inclinado)
Para inicio de deslizamiento en un plano inclinado:

$$
mg\sin\theta_c = \mu_s mg\cos\theta_c
$$

por tanto:

$$
\mu_s=\tan\theta_c
$$

Este metodo evita dinamometro y es muy usado en laboratorio docente.

## 7- Uso correcto en resolucion de problemas
1. Decide si el cuerpo desliza o no.
2. Si no desliza, verifica:

$$
|f_s| \le \mu_s N
$$

3. Si desliza, usa:

$$
f_k=\mu_k N
$$

4. No intercambies \(\mu_s\) y \(\mu_k\).
5. Calcula siempre \(N\) antes de usar \(\mu\).

## 8- Ejemplo guiado
Bloque en horizontal, \(N=120\ \text{N}\). Se mide:
- umbral de arranque \(f_{s,\max}=48\ \text{N}\),
- en deslizamiento uniforme \(f_k=36\ \text{N}\).

Entonces:

$$
\mu_s = \frac{48}{120}=0.40
$$

$$
\mu_k = \frac{36}{120}=0.30
$$

Interpretacion: el arranque requiere mayor fuerza tangencial que mantener el deslizamiento.

## 9- Errores tipicos
- Suponer \(f_s=\mu_s N\) siempre.
- Aplicar \(\mu_k\) cuando aun no hay deslizamiento.
- Tomar \(\mu\) como inmutable para cualquier condicion.
- Olvidar que si \(N\) cambia, cambia el rozamiento maximo o dinamico.
- Reportar \(\mu\) con unidades.

## 10- Sintesis final
El coeficiente de rozamiento es un parametro de modelo, no una constante magica. Bien usado, permite cuantificar y predecir transicion al deslizamiento y resistencia durante movimiento con gran utilidad en dinamica aplicada.

