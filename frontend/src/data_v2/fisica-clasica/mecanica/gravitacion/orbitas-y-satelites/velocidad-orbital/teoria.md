# Velocidad orbital

## Idea clave
La velocidad orbital es la velocidad que permite que la gravedad actúe exactamente como aceleración centrípeta, curvando la trayectoria sin que el satélite caiga al cuerpo central ni escape de él.

## 1- ¿Qué estudia este subtema y por qué es esencial?
Este subtema estudia cómo calcular la velocidad necesaria para mantenerse en órbita alrededor de una masa central.

Es esencial porque conecta directamente:
- dinámica (fuerza gravitatoria),
- cinemática curvilínea (aceleración centrípeta),
- y energía orbital (ligadura o escape).

## 2- ¿Por qué un satélite "cae" y a la vez orbita?
Un satélite en órbita está en caída libre permanente, pero con velocidad tangencial suficiente para que la superficie del cuerpo central "se curve" al mismo ritmo que su trayectoria. No flota por ausencia de gravedad: orbita porque la gravedad está continuamente cambiando su dirección de movimiento.

## 3- Caso circular: deducción física paso a paso
En órbita circular de radio \(r\), la gravedad aporta la aceleración centrípeta:

$$
G\frac{Mm}{r^2}=m\frac{v_c^2}{r}
$$

Se simplifica \(m\) (masa del satélite) y queda:

$$
v_c=\sqrt{\frac{GM}{r}}
$$

Conclusión importante: para órbita circular ideal, \(v_c\) no depende de la masa del satélite.

## 4- Órbita elíptica: velocidad instantánea (vis-viva)
Cuando la órbita no es circular, la velocidad depende de la posición instantánea:

$$
v^2=GM\left(\frac{2}{r}-\frac{1}{a}\right)
$$

donde \(a\) es el semieje mayor.

Lectura física:
- en periapsis (\(r\) menor), \(v\) mayor,
- en apoapsis (\(r\) mayor), \(v\) menor.

## 5- Velocidad de escape y relación con órbita
Velocidad de escape local:

$$
v_{esc}=\sqrt{\frac{2GM}{r}}
$$

Relación útil en el mismo radio:

$$
v_{esc}=\sqrt{2}\,v_c
$$

Interpretación:
- \(v<v_{esc}\) puede producir órbita ligada,
- \(v\ge v_{esc}\) permite trayectoria no ligada (si no hay otras pérdidas).

## 6- Variables y magnitudes que debes identificar
- \(G\): constante de gravitación.
- \(M\): masa central.
- \(r\): distancia al centro de masa.
- \(R\): radio del cuerpo central.
- \(h\): altura sobre superficie.
- \(v_c\): velocidad orbital circular.
- \(v\): velocidad orbital instantánea (general).
- \(a\): semieje mayor.
- \(T\): período orbital.

## 7- Preguntas lógicas de alumno (respuestas directas)
**¿Si subo a mayor altura orbital, necesito más velocidad o menos?**
Menos velocidad circular instantánea, porque \(v_c\propto 1/\sqrt{r}\).

**¿Por qué en órbitas bajas se va "más rápido" que en geosíncrona?**
Porque cerca del planeta la gravedad es más intensa y requiere mayor curvatura dinámica por unidad de tiempo.

**¿Puedo usar altura \(h\) directamente en fórmulas?**
No. Debes usar \(r=R+h\), medido desde el centro del cuerpo central.

**¿La masa del satélite cambia su velocidad orbital circular?**
No en el modelo ideal de dos cuerpos con \(M\gg m\).

## 8- Método de resolución paso a paso
1. Determina tipo de órbita: circular o elíptica.
2. Convierte datos a SI.
3. Calcula radio absoluto \(r=R+h\) si te dan altura.
4. Elige fórmula: \(v_c\), vis-viva o \(v_{esc}\).
5. Resuelve primero simbólicamente y luego numéricamente.
6. Si procede, calcula período: \(T=2\pi r/v_c\) (caso circular).
7. Verifica orden de magnitud y coherencia física.

## 9- Ejemplo guiado
Datos: Tierra \(M=5.97\times10^{24}\,\mathrm{kg}\), \(R=6.37\times10^6\,\mathrm{m}\), satélite a \(h=4.00\times10^5\,\mathrm{m}\).

Radio orbital:

$$
r=R+h=6.77\times10^6\,\mathrm{m}
$$

Velocidad circular:

$$
v_c=\sqrt{\frac{GM}{r}}\approx 7.67\times10^3\,\mathrm{m/s}
$$

Período:

$$
T=\frac{2\pi r}{v_c}\approx 5.55\times10^3\,\mathrm{s}\approx 92.5\,\mathrm{min}
$$

## 10- Síntesis final
Dominar velocidad orbital significa entender cuándo usar cada modelo (circular, vis-viva, escape), interpretar físicamente el resultado y evitar errores de geometría radial. Es el puente operativo entre gravitación teórica y diseño orbital real.
