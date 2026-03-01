# Ejemplos De Equilibrio (Traslacion)

## Idea clave
Los ejemplos de equilibrio no se resuelven por memoria de "casos", sino por metodo: DCL correcto, ejes bien elegidos y sumatorias igualadas a cero.

## 1- Que se aprende en este subtema
Aqui entrenas la parte operativa de la estatica traslacional: pasar de una situacion fisica real a ecuaciones que se puedan resolver sin ambiguedad.

La condicion central es:

$$
\sum \vec F = \vec 0
$$

y por componentes en 2D:

$$
\sum F_x = 0, \qquad \sum F_y = 0
$$

## 2- Como funciona el metodo en la practica
El equilibrio ocurre cuando las fuerzas se compensan vectorialmente. No significa ausencia de fuerzas, sino balance exacto entre ellas.

Metodo robusto:
1. Aislar un cuerpo.
2. Dibujar su DCL con fuerzas externas reales.
3. Elegir ejes utiles.
4. Proyectar fuerzas en esos ejes.
5. Plantear sumatorias nulas y resolver.
6. Verificar sentido fisico del resultado.

## 3- Ejemplo A: bloque sobre mesa horizontal
Sistema en reposo con fuerza horizontal aplicada y rozamiento estatico.

En x:

$$
\sum F_x = F - f_s = 0 \Rightarrow f_s = F
$$

En y:

$$
\sum F_y = N - mg = 0 \Rightarrow N = mg
$$

Condicion de consistencia:

$$
|f_s| \le \mu_s N
$$

Si no se cumple, el reposo no es posible y el modelo de equilibrio deja de aplicar.

## 4- Ejemplo B: masa colgante en reposo
Solo hay tension hacia arriba y peso hacia abajo.

$$
\sum F_y = T - mg = 0
$$

$$
T = mg
$$

Este caso fija una idea esencial: una fuerza puede ser grande, pero si esta equilibrada por otra, la aceleracion sigue siendo cero.

## 5- Ejemplo C: bloque en plano inclinado en reposo
Con angulo \(\theta\):

$$
P_{\parallel}=mg\sin\theta, \qquad P_{\perp}=mg\cos\theta
$$

Eje normal al plano:

$$
\sum F_{\perp}=N-mg\cos\theta=0 \Rightarrow N=mg\cos\theta
$$

Eje paralelo al plano:

$$
\sum F_{\parallel}=f_s-mg\sin\theta=0 \Rightarrow f_s=mg\sin\theta
$$

Condicion de no deslizamiento:

$$
mg\sin\theta \le \mu_s mg\cos\theta
$$

$$
\tan\theta \le \mu_s
$$

## 6- Que se calcula exactamente en estos problemas
Se calculan reacciones de contacto (N), tensiones (T), rozamientos (\(f_s\) o \(f_k\)) y rangos de fuerza compatibles con equilibrio.

No se calcula aqui equilibrio rotacional completo (\(\sum \tau = 0\)); eso pertenece al bloque de momentos.

## 7- Errores que destruyen el planteo
- Mezclar fuerzas internas en el DCL.
- Elegir ejes sin justificar y perder signos.
- Forzar \(f_s=\mu_sN\) en todos los casos (solo en inminencia de deslizamiento).
- Concluir equilibrio porque "el cuerpo esta quieto" sin revisar condiciones.

## 8- Como validar una solucion antes de darla por buena
1. Unidades correctas en todas las fuerzas (N).
2. Signo compatible con el sentido asumido.
3. Magnitud plausible para el contexto.
4. Si hay rozamiento estatico, comprobar \(|f_s| \le \mu_sN\).

## 9- Lectura fisica final de los resultados
Cada resultado debe traducirse: "esta fuerza es la que compensa tal componente". Si no puedes explicarlo en palabras, falta comprension del equilibrio.

## 10- Sintesis de dominio
Dominas ejemplos de equilibrio cuando puedes resolver situaciones nuevas sin cambiar el algoritmo: DCL, ejes, sumatorias, verificacion fisica.