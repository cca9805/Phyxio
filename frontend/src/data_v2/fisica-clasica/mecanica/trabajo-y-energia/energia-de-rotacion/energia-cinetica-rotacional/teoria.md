# Energia cinetica rotacional

## Idea clave
La energia asociada al giro depende de cuanto gira el cuerpo ($\omega$) y de como esta distribuida su masa respecto al eje ($I$).

## 1- Que estudia este tema y por que es fundamental
Este tema extiende energia cinetica traslacional a sistemas rotacionales y explica por que dos cuerpos con la misma masa pueden requerir distinta energia para girar igual de rapido.

## 2- Imagen fisica correcta
El momento de inercia $I$ actua como "inercia al giro". A igual $\omega$, mayor $I$ implica mayor energia almacenada en rotacion.

## 3- Variables clave
- Momento de inercia: $I$ (kg m^2).
- Velocidad angular: $\omega$ (rad/s).
- Energia cinetica rotacional: $E_{rot}$ (J).

## 4- Formula esencial

$$
E_{rot}=\frac{1}{2}I\omega^2
$$

Cambio entre estados:

$$
\Delta E_{rot}=\frac{1}{2}I(\omega_f^2-\omega_i^2)
$$

## 5- Dominio de validez (analisis detallado)
Modelo de cuerpo rigido con eje definido y $I$ conocido/constante respecto a ese eje. Si cambia el eje o la configuracion de masa, cambia $I$.

**Momentos de inercia comunes:**
- Vara delgada (eje en centro): $I=\frac{1}{12}mL^2$.
- Disco solido (eje perpendicular por centro): $I=\frac{1}{2}mR^2$.
- Esfera solida: $I=\frac{2}{5}mR^2$.
- Cilindro hueco: $I=mR^2$.
- Teorema de Steiner: si gira respecto a eje paralelo a distancia $d$: $I=I_c+md^2$ (donde $I_c$ es respecto al centro de masa).

**Limite aplicable:** Formula vale para cuerpos rigidos. Si el cuerpo se deforma durante giro (resorte enrollado, liquido en recipiente), hay perdidas adicionales.

## 6- Metodo de resolucion
1- Identifica eje de giro y momento de inercia correcto.
2- Determina estados angular inicial y final.
3- Calcula energia o variacion con formula rotacional.
4- Relaciona con trabajo de torque o conservacion segun enunciado.

## 7- Errores tipicos
- Usar $I$ de otra geometria o de otro eje.
- Introducir $\omega$ en rpm sin convertir a rad/s.
- Confundir energia rotacional con traslacional.
- Olvidar que ambos terminos pueden coexistir en rodadura.

## 8- Ejemplo guiado
Disco con $I=0.6\,\text{kg m}^2$ acelera de $\omega_i=4$ a $\omega_f=10\,\text{rad/s}$:

$$
\Delta E_{rot}=\frac{1}{2}\cdot0.6\cdot(10^2-4^2)=0.3\cdot84=25.2\,\text{J}
$$

## 9- Aplicaciones reales y analisis en sistemas
- **Volantes de inercia:** Acumulan energia rotacional $\frac{1}{2}I\omega^2$. Auto con volante pesado (largo $I$) mantiene mejor velocidad estable, pero requiere torque mayor para cambiar revoluciones.\n- **Sistemas de transmision:** Poleas y ruedas dentadas con $I$ diferentes. Si polea motriz gira rapido/lento o tiene $I$ grande/pequeno, afecta energia de todo el sistema segun conservacion de momento angular.\n- **Maquinaria con ejes y rotores:** Bomba centrifuga gira a 3600 rpm. Energia rotacional se invierte en bombear liquido. Si se detiene bruscamente, esa energia se disipa (rozamiento, impacto).\n- **Conservacion de energia en rodadura pura:** Esfera que rueda sin deslizar tiene energia total $E=\frac{1}{2}mv^2+\frac{1}{2}I\omega^2$. Con $v=R\\omega$ (rodadura pura) e $I=\\frac{2}{5}mR^2$, resulta $E=\\frac{7}{10}mv^2 > \\frac{1}{2}mv^2$ (traslacion sola).\n- **Energia de frenado rotacional:** Disco en motor que gira a $\\omega$ almacena energia rotacional. Freno debe disipar toda esa energia (calor en almohadillas).

## 10- Sintesis final
La energia cinetica rotacional permite cuantificar el costo energetico del giro y es imprescindible en cualquier analisis de dinamica rotacional.
