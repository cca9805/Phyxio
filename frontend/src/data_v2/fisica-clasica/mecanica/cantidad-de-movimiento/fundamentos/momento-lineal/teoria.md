# Momento lineal

## Idea clave
El **momento lineal** (también llamado **cantidad de movimiento**) mide la “inercia en movimiento” de un cuerpo o sistema.  
No basta con saber que algo va rápido: importa **cuánta masa** lleva ese movimiento y **en qué dirección**.

- Misma velocidad, más masa ⇒ más momento.
- Misma masa, más velocidad ⇒ más momento.
- Cambiar el momento requiere **interacción** (fuerza durante un tiempo).

---

## 1- Qué estudia este subtema y por qué es fundamental
Este subtema enseña a **definir, calcular e interpretar** el momento lineal con criterio físico, y a conectar esa idea con la dinámica real:

- Por qué el momento lineal es la magnitud que “se transmite” en choques y empujes.
- Cómo aparece la segunda ley de Newton en su forma más general.
- Cómo pensar sistemas de varios cuerpos sin perder el control.

Es fundamental porque muchas situaciones reales no se entienden bien solo con “velocidad”:

- Colisiones (coche, bola, proyectil).
- Retroceso y propulsión (cohetes, armas, chorros).
- Interacciones breves e intensas (martillazos, golpes).
- Sistemas donde la fuerza varía en el tiempo.

Sin esta base, los ejercicios se vuelven “sustituir y ya”. Con esta base, sabes **qué magnitud conservar, qué magnitud cambia y por qué**.

---

## 2- Cómo funciona físicamente
Imagina un patinete vacío y otro con una persona encima. Si ambos van a 5 m/s:

- tienen la misma velocidad,
- pero no cuesta lo mismo frenarlos,
- ni “empujan” igual si chocan con algo.

Eso es exactamente lo que captura el momento lineal.

El momento lineal no es una etiqueta matemática: describe la “resistencia” del movimiento a ser cambiado.  
Y como es **vector**, no solo importa cuánto, sino hacia dónde.

---

## 3- Magnitudes y parámetros que debes identificar siempre
- $$m$$: masa (kg).
- $$\vec{v}$$: velocidad (m/s).
- $$\vec{p}$$: momento lineal (kg·m/s).
- $$\Delta \vec{p}$$: cambio de momento.
- $$\vec{F}$$: fuerza neta (N).
- $$t$$: tiempo (s).

En problemas de sistema:
- $$\vec{P}$$: momento total del sistema.
- $$\vec{p}_i$$: momento de cada partícula/cuerpo.

Claves:
- Dirección de $$\vec{p}$$ = dirección de $$\vec{v}$$.
- Si el movimiento es 2D o 3D, **se trabaja por componentes**.

---

## 4- Fórmulas esenciales y lectura física
Definición:
$$
\vec{p} = m\vec{v}
$$

Momento total de un sistema:
$$
\vec{P}=\sum_i \vec{p}_i=\sum_i m_i\vec{v}_i
$$

Conexión dinámica (forma general de la 2ª ley):
$$
\vec{F}_{\text{net}}=\frac{d\vec{p}}{dt}
$$

Si la masa es constante (caso típico):
$$
\vec{F}_{\text{net}}=m\vec{a}
$$

Lectura física importante:
- Una fuerza no “crea velocidad” de la nada: **cambia momento**.
- A igualdad de fuerza, el cambio de momento depende del tiempo de interacción.
- En choques, lo que se intercambia no es “velocidad”, es **momento** (y energía puede o no conservarse, pero eso es otro tema).

---

## 5- Condiciones de validez y límites del modelo
Estas expresiones son válidas en mecánica clásica cuando:
- velocidades no relativistas ($$v \ll c$$),
- masas constantes (sin pérdida/ganancia de masa apreciable),
- no se consideran efectos relativistas ni radiación relevante.

En situaciones como cohetes (masa variable) o velocidades cercanas a $$c$$, hay que ampliar el modelo.

---

## 6- Método de resolución paso a paso
1. Define el sistema: ¿un cuerpo o varios?
2. Elige referencia y ejes (x, y, …).  
3. Escribe $$\vec{p}=m\vec{v}$$ para cada cuerpo.
4. Si es sistema: calcula $$\vec{P}=\sum \vec{p}_i$$ por componentes.
5. Si hay fuerzas: usa $$\vec{F}_{\text{net}}=d\vec{p}/dt$$ para relacionar dinámica y cambio de momento.
6. Verifica unidades: kg·m/s.
7. Interpreta: ¿qué significa el valor? ¿es grande o pequeño? ¿en qué dirección apunta?

---

## 7- Preguntas lógicas de un alumno (y respuesta corta)
**¿Momento lineal y velocidad no son “lo mismo”?**  
No. La velocidad no incluye masa. Dos cuerpos con la misma velocidad pueden tener momentos muy distintos.

**¿Por qué es vector?**  
Porque el movimiento tiene dirección, y el “coste” de cambiarlo depende de la dirección del cambio.

**¿Qué pasa si $$v=0$$?**  
Entonces $$\vec{p}=0$$ aunque la masa sea grande. En reposo no hay momento lineal (pero puede haber energía potencial, etc.).

**¿Cuándo se usa “momento total”?**  
Cuando analizas varios cuerpos a la vez: choques, explosiones, empujes internos.

---

## 8- Ejemplo guiado completo
Datos:  
Cuerpo A: $$m_A=2.0\ \text{kg}$$, $$v_A=3.0\ \text{m/s}$$ hacia +x.  
Cuerpo B: $$m_B=1.5\ \text{kg}$$, $$v_B=4.0\ \text{m/s}$$ hacia -x.

Paso 1. Momentos individuales:
$$
p_A=m_A v_A=2.0\cdot 3.0=6.0\ \text{kg·m/s}
$$
Dirección +x ⇒ $$\vec{p}_A=+6.0\,\hat{i}$$

$$
p_B=m_B v_B=1.5\cdot 4.0=6.0\ \text{kg·m/s}
$$
Dirección -x ⇒ $$\vec{p}_B=-6.0\,\hat{i}$$

Paso 2. Momento total:
$$
\vec{P}=\vec{p}_A+\vec{p}_B=+6.0\,\hat{i}-6.0\,\hat{i}=0
$$

Interpretación:
- El sistema tiene momento total cero: “globalmente” no tiene tendencia neta a moverse en +x o -x.
- Esto no significa que no haya movimiento interno: ambos cuerpos se mueven, pero sus momentos se compensan.

---

## 9- Aplicaciones reales
- Choques entre vehículos (reconstrucción de accidentes).
- Balística básica y retroceso.
- Propulsión (chorro, hélice, cohete).
- Movimiento del centro de masas (conservación del momento total).
- Análisis de impactos (deporte, ingeniería, materiales).

---

## 10- Síntesis final
El momento lineal es la magnitud que:
- une masa y velocidad en una sola idea física,
- se modifica por fuerzas (interacciones),
- se suma en sistemas,
- y es clave para entender choques y transferencias de movimiento con criterio.