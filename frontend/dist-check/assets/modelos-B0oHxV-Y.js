const e=`## Modelo ideal

El modelo ideal considera particulas o cuerpos con masas [[m]], fuerzas activas [[F]] y aceleraciones [[a]], sometidos a ligaduras ideales. Los desplazamientos virtuales [[dr]] son instantaneos, compatibles y no desplazan el sistema fuera de la geometria permitida.

La simplificacion central es que las reacciones ideales no aportan trabajo virtual neto. Por eso el balance de [[Wv]] puede escribirse sin calcular cada reaccion, y la dinamica se expresa mediante fuerzas generalizadas [[Qj]].

## Hipótesis

- Las masas [[m]] son positivas y constantes.
- Las ligaduras son ideales.
- Los desplazamientos virtuales [[dr]] respetan las restricciones.
- Las fuerzas activas [[F]] se pueden proyectar sobre coordenadas generalizadas.
- La aceleracion [[a]] corresponde al mismo elemento que la fuerza aplicada.
- No hay impactos ni discontinuidades impulsivas dentro del intervalo analizado.

## Dominio de validez cuantitativo

Si [[F]] esta en newtons y [[dr]] en metros, [[Wv]] se estima en julios. Para desplazamientos virtuales de milimetros y fuerzas de decenas de newtons, el trabajo virtual elemental queda en centesimas de julio. Esa escala ayuda a detectar errores de unidades.

En coordenadas angulares, [[Qj]] suele tener unidades de torque. Una fuerza moderada aplicada con brazo pequeno puede producir un aporte generalizado menor que la fuerza numerica, aunque su significado sea decisivo para la ecuacion.

Como criterio cuantitativo, si el modulo de [[Wv]] supera 10^-3 J para una variacion virtual de 1 mm en un montaje pequeno, debe revisarse si la fuerza efectiva proyectada es compatible con la escala del sistema. El orden de magnitud esperado es O(fuerza por desplazamiento virtual), no una energia real acumulada.

## Señales de fallo del modelo

Una senal de fallo es que una reaccion de ligadura realice trabajo virtual y aun asi se elimine. Otra es usar desplazamientos virtuales que atraviesan una pared, estiran una cuerda inextensible o rompen una guia. Tambien falla si se confunde [[dr]] con desplazamiento real durante un intervalo temporal.

El modelo puede fallar en rozamiento, contactos no ideales, ligaduras dependientes de velocidad o choques. En esos casos, eliminar reacciones sin analizar energia o impulso produce ecuaciones incompletas.

## Modelo extendido o alternativo

El modelo extendido incorpora fuerzas de rozamiento, multiplicadores de Lagrange, fuerzas generalizadas no potenciales o restricciones no holonomas tratadas con cuidado. Tambien puede combinarse con el principio variacional para obtener la forma de Lagrange-D'Alembert.

Si se desea calcular reacciones, se puede resolver primero el movimiento reducido y luego volver a las ecuaciones completas. El principio no prohibe calcularlas; solo muestra cuando no son necesarias para obtener la evolucion.

Conviene cambiar a ese modelo extendido cuando la reaccion eliminada tiene componente sobre [[dr]], cuando aparece disipacion medible o cuando la ligadura impone una condicion de velocidad que no puede integrarse como geometria simple. En esos casos, cancelar reacciones por rutina rompe la fisica del problema.

## Comparación operativa

- Newton directo: calcula fuerzas y reacciones componente a componente.
- Trabajo virtual estatico: elimina reacciones ideales sin terminos inerciales.
- D'Alembert: agrega el termino inercial para tratar dinamica.
- Lagrange-D'Alembert: expresa el resultado en coordenadas generalizadas.
- Criterio de eleccion: usar este modelo cuando las ligaduras sean ideales y las coordenadas compatibles simplifiquen el problema.
`;export{e as default};
