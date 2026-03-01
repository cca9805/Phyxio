# Régimen subamortiguado

## Idea clave
En régimen subamortiguado el sistema sigue oscilando, pero con amplitud decreciente por disipación. Es el comportamiento más común en sistemas reales que vibran sin perder inmediatamente su carácter periódico.

## 1- Qué estudia este subtema y por qué es fundamental
Estudia la respuesta temporal de un oscilador con disipación moderada, donde hay oscilación y decaimiento exponencial simultáneos.

Es fundamental porque describe fenómenos reales de suspensión, vibración estructural y control dinámico donde ni el modelo ideal ni el sobreamortiguado representan bien la respuesta observada.

## 2- Cómo funciona físicamente
La fuerza disipativa extrae energía en cada ciclo. El sistema intenta oscilar por restauración, pero cada paso pierde parte de su energía mecánica.

Resultado: oscilación amortiguada con envolvente decreciente.

## 3- Magnitudes y parámetros que debes identificar siempre
- \(m\): masa (kg).
- \(c\): coeficiente viscoso (N·s/m).
- \(k\): rigidez (N/m).
- \(\omega_n=\sqrt{k/m}\): frecuencia natural no amortiguada.
- \(\zeta=c/(2\sqrt{km})\): razón de amortiguamiento.
- \(\omega_d=\omega_n\sqrt{1-\zeta^2}\): frecuencia amortiguada.

## 4- Fórmulas esenciales y lectura física
Ecuación dinámica:

$$
m\ddot x+c\dot x+kx=0
$$

Condición subamortiguada:

$$
0<\zeta<1
$$

Solución temporal:

$$
x(t)=A_0e^{-\zeta\omega_n t}\cos(\omega_d t+\varphi)
$$

Envolvente:

$$
|x(t)|\le A_0e^{-\zeta\omega_n t}
$$

## 5- Condiciones de validez y límites del modelo
- amortiguamiento aproximadamente viscoso lineal;
- parámetros \(m,c,k\) cuasi constantes;
- excitación externa despreciable en el intervalo analizado.

## 6- Método de resolución paso a paso
1. Calcula \(\omega_n\) y \(\zeta\).
2. Verifica que \(0<\zeta<1\).
3. Obtén \(\omega_d\).
4. Usa condiciones iniciales para \(A_0,\varphi\).
5. Evalúa respuesta y envolvente en el tiempo.

## 7- Preguntas lógicas de un alumno (y respuesta corta)
**¿Oscila para siempre?**
Matemáticamente tiende a cero asintóticamente; físicamente se vuelve imperceptible tras varios ciclos.

**¿La frecuencia cambia por amortiguamiento?**
Sí: \(\omega_d<\omega_n\).

**¿Más amortiguamiento siempre es mejor?**
Depende: demasiado amortiguamiento puede ralentizar el asentamiento.

## 8- Ejemplo guiado completo
Datos: \(m=1\,\text{kg}\), \(k=100\,\text{N/m}\), \(c=6\,\text{N·s/m}\).

$$
\omega_n=\sqrt{100}=10\,\text{rad/s}
$$

$$
\zeta=\frac{6}{2\sqrt{100}}=0.30
$$

$$
\omega_d=10\sqrt{1-0.3^2}=9.54\,\text{rad/s}
$$

Hay oscilación amortiguada con decaimiento exponencial.

## 9- Aplicaciones reales
- Suspensiones automotrices en diseño básico.
- Soportes antivibratorios industriales.
- Instrumentos de medida con aguja amortiguada.

## 10- Síntesis final
El régimen subamortiguado combina periodicidad y disipación. Es el punto de equilibrio entre respuesta rápida y control de vibración en muchos sistemas reales.
