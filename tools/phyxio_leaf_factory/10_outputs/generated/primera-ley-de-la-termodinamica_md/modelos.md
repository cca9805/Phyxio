# Primera ley de la termodinamica

## Modelo ideal

El modelo ideal de la primera ley considera un sistema cerrado con frontera clara, sin intercambio de materia y con todas las transferencias energeticas clasificadas como [[calor_intercambiado]] o [[trabajo_sobre_sistema]]. En esta version se usa una convencion concreta: el calor es positivo si entra al sistema y el trabajo es positivo si el entorno realiza trabajo sobre el sistema. Bajo estas condiciones, [[variacion_energia_interna]] se interpreta como la acumulacion neta de energia interna entre dos estados.

## Hipótesis

- El sistema es cerrado. Si entra o sale masa, el balance debe incluir energia transportada por esa masa.
- La frontera del sistema esta bien definida. Si cambia el sistema elegido, cambian los signos y las transferencias.
- [[calor_intercambiado]] y [[trabajo_sobre_sistema]] estan medidos en la misma unidad. Si se mezclan J, kJ y calorias, el balance pierde sentido.
- La convencion de trabajo se mantiene constante. Si se usa trabajo hecho por el sistema, no puede aplicarse sin cambio de signo la forma de este leaf.
- Los estados inicial y final estan definidos. Sin ellos, [[energia_interna_inicial]], [[energia_interna_final]] y [[variacion_energia_interna]] no tienen lectura fisica precisa.

## Dominio de validez cuantitativo

El balance simple es adecuado cuando las transferencias omitidas son mucho menores que las incluidas, por ejemplo inferiores al 1 % del termino dominante. En calorimetria de laboratorio puede aceptarse si las perdidas termicas al ambiente son menores que 5 % de [[calor_intercambiado]]. En gases comprimidos lentamente, el trabajo de frontera debe estimarse con la presion externa y el cambio de volumen; si el rozamiento o las fugas superan el 5-10 %, se necesita un modelo mas detallado. En un ciclo, el criterio cuantitativo clave es que [[variacion_energia_interna]] debe volver a cero dentro del error experimental.

## Señales de fallo del modelo

El modelo falla si el resultado predice aumento de energia interna mientras el sistema claramente se enfria y realiza trabajo sin recibir energia. Tambien falla si aparece masa cruzando la frontera, si hay reacciones quimicas no contabilizadas, si el sistema tiene resistencias electricas alimentadas desde fuera o si se mezclan signos de trabajo. Otra señal es obtener [[variacion_energia_interna]] distinta de cero en un ciclo cerrado sin justificar acumulacion.

## Modelo extendido o alternativo

Cuando conviene cambiar de modelo: se debe pasar al modelo de volumen de control si hay flujo de masa, a un modelo con potencia si el proceso se analiza por unidad de tiempo, o a un modelo termoquimico si hay reaccion. El motivo es que la primera ley sigue siendo valida, pero el inventario de terminos aumenta. En maquinas reales se anaden trabajo de eje, energia cinetica, energia potencial, perdidas y rendimiento.

## Comparación operativa

| Criterio | Modelo cerrado simple | Modelo extendido |
|---|---|---|
| Sistema | Masa fija | Masa fija o flujo |
| Terminos | [[calor_intercambiado]], [[trabajo_sobre_sistema]], [[variacion_energia_interna]] | Calor, trabajo, masa, potencia, perdidas |
| Uso tipico | Calorimetria, piston ideal, procesos de aula | Turbinas, compresores, motores, reactores |
| Riesgo principal | Signo del trabajo | Omitir terminos energeticos |
| Comprobacion | Unidades y signos | Balance completo y rendimiento |
