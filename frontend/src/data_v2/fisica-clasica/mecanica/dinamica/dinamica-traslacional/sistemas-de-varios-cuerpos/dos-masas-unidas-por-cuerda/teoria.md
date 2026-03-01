# Dos Masas Unidas Por Cuerda

## Idea clave
En un sistema de dos masas unidas por cuerda ideal, ambas comparten el mismo modulo de aceleracion. El movimiento aparece por desbalance de pesos, mientras la tension actua como fuerza interna que acopla las dos ecuaciones.

## 1- Que estudia este subtema y por que importa
Este subtema estudia el caso minimo de dinamica acoplada: dos cuerpos que no se pueden analizar de forma aislada porque su movimiento esta enlazado por una cuerda.

Es fundamental porque te obliga a combinar:
- diagramas de cuerpo libre por separado,
- una restriccion cinematica comun,
- y una lectura global del sistema.

## 2- Imagen fisica correcta del mecanismo
Si \(m_2>m_1\):
- \(m_2\) baja,
- \(m_1\) sube,
- ambas con igual \(|a|\).

La propagacion dinamica ocurre asi:
1. El desbalance gravitatorio genera resultante externa neta.
2. La cuerda transmite esa informacion mecanica mediante tension.
3. Cada masa responde con la misma magnitud de aceleracion por la restriccion de longitud.

## 3- Variables que debes identificar sin error
- \(m_1,m_2\): masas (kg).
- \(g\): gravedad (m/s^2).
- \(T\): tension en cuerda (N).
- \(a\): aceleracion compartida en modulo (m/s^2).
- \(F_{ext}\): resultante externa sobre el sistema completo (N).

## 4- Ecuaciones base y lectura fisica
Ecuacion para \(m_2\) (tomando positivo hacia abajo en su lado):

$$
m_2g-T=m_2a
$$

Ecuacion para \(m_1\) (tomando positivo hacia arriba en su lado):

$$
T-m_1g=m_1a
$$

Sumando ambas ecuaciones:

$$
(m_2-m_1)g=(m_1+m_2)a
$$

Aceleracion del sistema:

$$
a=\frac{(m_2-m_1)g}{m_1+m_2}
$$

Tension (dos formas equivalentes):

$$
T=m_1(g+a)=m_2(g-a)
$$

Forma cerrada de tension:

$$
T=\frac{2m_1m_2}{m_1+m_2}g
$$

## 5- Que se calcula y por que ese orden
Orden robusto:
1. Elegir sentidos positivos coherentes en cada masa.
2. Escribir una ecuacion de Newton por cuerpo.
3. Imponer aceleracion comun por cuerda ideal.
4. Sumar/restar para despejar \(a\).
5. Sustituir \(a\) en una ecuacion para hallar \(T\).

Por que asi
- porque \(T\) es interna al par de masas,
- y la suma elimina esa interna dejando solo el efecto externo neto.

## 6- Metodo operativo para resolver sin fallos
1. Dibuja ambos DCL completos.
2. Define signos antes de escribir ecuaciones.
3. Verifica que \(a\) tenga sentido con la masa mayor.
4. Comprueba \(T>0\) y unidades en N.
5. Contrasta resultado con limites fisicos (casos extremos).

## 7- Errores tipicos que debes evitar
- Cambiar el convenio de signos entre ecuaciones.
- Usar tensiones distintas en cuerda ideal.
- Olvidar que ambas masas tienen mismo modulo de aceleracion.
- Concluir \(a=g\) sin justificar limite fisico.

## 8- Ejemplo guiado completo
Datos: \(m_1=2\,\text{kg}\), \(m_2=5\,\text{kg}\), \(g=9.8\,\text{m/s}^2\).

Aceleracion:

$$
a=\frac{(5-2)9.8}{2+5}=4.2\,\text{m/s}^2
$$

Tension por \(m_1\):

$$
T=m_1(g+a)=2(9.8+4.2)=28\,\text{N}
$$

Comprobacion por \(m_2\):

$$
T=m_2(g-a)=5(9.8-4.2)=28\,\text{N}
$$

## 9- Aplicaciones reales
- Contrapesos en elevacion de cargas.
- Ensayos didacticos tipo maquina de Atwood.
- Calibracion de sensores de fuerza y tension.
- Modelos simplificados de arranque en mecanismos acoplados.

## 10- Sintesis final
Dominar este subtema significa interpretar un sistema acoplado completo: no resolver fuerzas sueltas, sino cerrar un modelo coherente entre cuerpos, restriccion de cuerda y resultado fisico final.
