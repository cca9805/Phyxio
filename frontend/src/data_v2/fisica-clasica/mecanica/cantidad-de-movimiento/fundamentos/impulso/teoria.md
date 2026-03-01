# Impulso

## Idea clave
El impulso mide el efecto total de una fuerza aplicada durante un intervalo de tiempo.

No importa solo cuán grande sea la fuerza.
Importa cuánto tiempo actúa.

La relación fundamental es:

$$
\vec{J}=\Delta \vec{p}
$$

El impulso es el mecanismo mediante el cual una interacción cambia el momento lineal.

---

## 1- Qué estudia este subtema y por qué es fundamental
Este subtema estudia cómo una fuerza aplicada en el tiempo produce una variación de momento.

Es fundamental porque:

- Permite analizar impactos.
- Permite trabajar con fuerzas variables.
- Conecta dinámica con colisiones.
- Explica por qué amortiguar un golpe reduce daños.

Muchos fenómenos reales no tienen aceleración constante.  
El impulso es la herramienta adecuada cuando la interacción es breve e intensa.

---

## 2- Cómo funciona físicamente
Una fuerza aplicada durante un tiempo cambia el estado dinámico del cuerpo.

La segunda ley en forma general dice:

$$
\vec{F}=\frac{d\vec{p}}{dt}
$$

Integrando en el tiempo:

$$
\int_{t_1}^{t_2} \vec{F}(t)\,dt = \vec{p}_2 - \vec{p}_1
$$

El área bajo la curva fuerza-tiempo es el impulso.

Interpretación:
- Fuerza grande + tiempo pequeño puede producir mismo efecto que
- Fuerza pequeña + tiempo grande.

---

## 3- Magnitudes y parámetros que debes identificar siempre
- $$\vec{F}(t)$$: fuerza neta.
- $$\Delta t$$: intervalo de interacción.
- $$\vec{J}$$: impulso.
- $$\vec{p}_1, \vec{p}_2$$: momento inicial y final.
- $$m$$: masa.
- $$\vec{v}_1, \vec{v}_2$$: velocidades antes y después.

Unidad:
$$
1\ \text{N·s} = 1\ \text{kg·m/s}
$$

---

## 4- Fórmulas esenciales y lectura física

Definición general:

$$
\vec{J}=\int_{t_1}^{t_2}\vec{F}(t)\,dt
$$

Si la fuerza es constante:

$$
\vec{J}=\vec{F}\Delta t
$$

Teorema impulso-momento:

$$
\vec{J}=\Delta \vec{p}
$$

Lectura física importante:

- El impulso cambia el momento, no directamente la velocidad.
- A mayor tiempo de interacción, menor fuerza media para mismo cambio de momento.
- La dirección del impulso es la dirección del cambio de momento.

---

## 5- Condiciones de validez y límites del modelo
El modelo es válido cuando:

- Se trabaja en régimen clásico.
- El intervalo de tiempo está bien definido.
- Se consideran correctamente las fuerzas externas.

En impactos muy complejos puede haber:
- deformaciones no lineales,
- fuerzas internas muy variables,
pero el teorema impulso-momento sigue siendo válido si se aplica correctamente.

---

## 6- Método de resolución paso a paso
1. Definir sistema.
2. Establecer eje y signos.
3. Identificar momento inicial y final.
4. Calcular $$\Delta \vec{p}$$.
5. Igualar a $$\vec{J}$$.
6. Si piden fuerza media:

$$
\vec{F}_{\text{media}}=\frac{\vec{J}}{\Delta t}
$$

7. Verificar coherencia física.

---

## 7- Preguntas lógicas de un alumno (y respuesta corta)

**¿Por qué aparece el tiempo?**  
Porque una fuerza necesita tiempo para cambiar el estado dinámico.

**¿Puede haber impulso sin fuerza constante?**  
Sí. La definición general usa integral.

**¿El impulso siempre aumenta la velocidad?**  
No. Puede cambiar su dirección o disminuirla.

**¿Impulso y momento tienen la misma unidad?**  
Sí. Porque el impulso es el cambio de momento.

---

## 8- Ejemplo guiado completo

Un balón de $$0.50\ \text{kg}$$ cambia su velocidad de $$-10\ \text{m/s}$$ a $$+15\ \text{m/s}$$ en $$0.02\ \text{s}$$.

Momento inicial:

$$
p_1=0.50(-10)=-5\ \text{kg·m/s}
$$

Momento final:

$$
p_2=0.50(15)=7.5\ \text{kg·m/s}
$$

Cambio:

$$
\Delta p=12.5\ \text{kg·m/s}
$$

Impulso:

$$
J=12.5\ \text{N·s}
$$

Fuerza media:

$$
F_{\text{media}}=\frac{12.5}{0.02}=625\ \text{N}
$$

Interpretación:
El impulso es grande porque cambia completamente dirección y magnitud.

---

## 9- Aplicaciones reales

### 1- Seguridad vial
Airbags y zonas deformables aumentan $$\Delta t$$ y reducen $$F_{\text{media}}$$.

### 2- Deporte
Raquetas, bates y botas modifican el tiempo de contacto para optimizar transferencia de impulso.

### 3- Ingeniería estructural
Ensayos de impacto evalúan resistencia mediante impulso aplicado.

### 4- Robótica
Control de contactos suaves para evitar daños mecánicos.

### 5- Balística y propulsión
El impulso del gas sobre el proyectil determina su cambio de momento.

Lectura física:
Siempre que un sistema cambia bruscamente su estado dinámico, el impulso está presente.

---

## 10- Síntesis final

El impulso es la herramienta que permite conectar fuerza y cambio de movimiento cuando la interacción ocurre en el tiempo.

La idea esencial es:

$$
\vec{J}=\Delta \vec{p}
$$

Con esta ecuación puedes entender impactos, seguridad, transferencia de movimiento y diseño mecánico con criterio físico sólido.