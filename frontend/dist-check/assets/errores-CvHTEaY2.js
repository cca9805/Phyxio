const e=`# Errores frecuentes en potencia

## Errores conceptuales

### Error 1: Confundir energia total con potencia

**Por que parece correcto**
Ambas magnitudes aparecen juntas en maquinas y consumo energetico.

**Por que es incorrecto**
[[W]] mide cantidad transferida; [[P]] mide ritmo. El mismo trabajo puede realizarse con potencias distintas si cambia [[t]].

**Senal de deteccion**
Se afirma que un sistema es mas potente solo porque entrega mas energia total.

**Correccion conceptual**
Comparar siempre energia por unidad de tiempo.

**Mini-ejemplo de contraste**
Elevar la misma carga en 2 s exige mas potencia media que elevarla en 20 s.

### Error 2: Creer que fuerza grande implica potencia grande

**Por que parece correcto**
La fuerza parece la causa directa del trabajo.

**Por que es incorrecto**
Sin movimiento del punto de aplicacion, [[v]] es cero y la potencia instantanea mecanica se anula.

**Senal de deteccion**
Se calcula potencia en una pared empujada que no se mueve.

**Correccion conceptual**
Verificar fuerza y rapidez del mismo punto.

**Mini-ejemplo de contraste**
Sostener una maleta quieta cansa fisiologicamente, pero la potencia mecanica externa ideal puede ser cero.

## Errores de modelo

### Error 3: Usar una media cuando importan picos

**Por que parece correcto**
La potencia media es facil de calcular.

**Por que es incorrecto**
Un motor o freno puede fallar por picos aunque la media sea baja.

**Senal de deteccion**
El resultado medio no explica calentamiento, saturacion o demanda maxima.

**Correccion conceptual**
Usar potencia instantanea o una funcion temporal cuando el proceso no es uniforme.

**Mini-ejemplo de contraste**
Un arranque brusco puede requerir mucha mas potencia que el promedio de todo el trayecto.

## Errores matematicos

### Error 4: Omitir el angulo entre fuerza y velocidad

**Por que parece correcto**
La forma simplificada se recuerda como producto de fuerza por rapidez.

**Por que es incorrecto**
Solo la componente de [[F]] paralela a [[v]] transfiere energia; [[theta]] no es decorativo.

**Senal de deteccion**
Se usa el modulo total de la fuerza aunque sea perpendicular.

**Correccion conceptual**
Incluir la proyeccion o usar componentes.

**Mini-ejemplo de contraste**
Una fuerza centripeta ideal puede cambiar direccion sin potencia mecanica instantanea.

### Error 5: Mezclar intervalos

**Por que parece correcto**
Los datos parecen pertenecer al mismo ejercicio.

**Por que es incorrecto**
Si [[W]] corresponde a una fase y [[t]] a otra, la potencia media no describe ningun proceso real.

**Senal de deteccion**
El intervalo usado no coincide con el tramo donde se calculo el trabajo.

**Correccion conceptual**
Definir sistema, inicio y final antes de dividir.

**Mini-ejemplo de contraste**
No se debe dividir el trabajo de aceleracion por el tiempo total de un viaje largo.

## Errores de interpretacion

### Error 6: Ignorar el signo de la potencia

**Por que parece correcto**
En catalogos suele reportarse solo potencia positiva.

**Por que es incorrecto**
En mecanica, el signo indica entrega o extraccion de energia.

**Senal de deteccion**
Frenado y motor se describen con el mismo signo sin aclaracion.

**Correccion conceptual**
Indicar si la fuerza entrega energia al sistema o la retira.

**Mini-ejemplo de contraste**
La potencia del motor sobre el coche puede ser positiva; la del freno sobre el coche es negativa.

## Regla de autocontrol rapido

Antes de aceptar un resultado, comprobar: misma fase para [[W]] y [[t]], mismo punto para [[F]] y [[v]], angulo [[theta]] correcto, unidades en watts y escala razonable. Si falla una de estas condiciones, el numero puede ser algebraicamente correcto y fisicamente inutil.
`;export{e as default};
