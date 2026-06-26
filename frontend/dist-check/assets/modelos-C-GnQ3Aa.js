const e=`## Modelo ideal

El modelo ideal de resonancia es el oscilador armonico amortiguado y forzado en regimen estacionario. Este modelo simplifica cualquier sistema oscilante real a tres elementos fundamentales: un cuerpo inercial que proporciona resistencia al cambio de movimiento, un resorte que proporciona fuerza recuperadora lineal, y un amortiguador viscoso que disipa energia de forma proporcional a la velocidad.

La simplificacion central consiste en asumir que el sistema responde linealmente a cualquier amplitud de excitacion, que el amortiguamiento es puramente viscoso (sin efectos de memoria ni frecuencia-dependientes), y que el regimen estacionario se alcanza instantaneamente para fines practicos. Esto permite describir la resonancia mediante ecuaciones diferenciales lineales de segundo orden con coeficientes constantes.

Las magnitudes conservadas en este modelo son la inercia, la rigidez elastica y la frecuencia natural. Las magnitudes ignoradas incluyen la inercia del propio resorte, la no linealidad del material, el amortiguamiento por radiacion de ondas, y la dependencia de la frecuencia natural con la amplitud.

## Hipótesis

- **Linealidad del resorte**: Se asume que la fuerza recuperadora es estrictamente proporcional al desplazamiento. Si se viola esta hipotesis, aparece distorsion armonica y la frecuencia de resonancia depende de la amplitud.

- **Amortiguamiento viscoso lineal**: Se asume que la fuerza disipativa es proporcional a la velocidad. Si se viola, el desplazamiento de fase entre fuerza y desplazamiento no sera exactamente noventa grados en resonancia, y el perfil de la curva de resonancia se distorsionara.

- **Excitacion armonica pura**: Se asume que la fuerza externa es una funcion sinusoidal perfecta de frecuencia unica. Si se viola, apareceran subarmonicos y superarmonicos en la respuesta, complicando el espectro de frecuencias.

- **Inercia puntual concentrada**: Se asume que toda la inercia del sistema esta concentrada en un punto sin dimensiones. Si se viola, deben considerarse modos de vibracion del propio objeto masivo, introduciendo frecuencias naturales adicionales.

- **Acoplamiento debil con el entorno**: Se asume que el sistema intercambia energia exclusivamente con la fuente externa y el amortiguador interno. Si se viola, aparecen perdidas adicionales por radiacion de ondas sonoras o termicas.

## Dominio de validez cuantitativo

La aproximacion del oscilador armonico lineal es razonablemente valida cuando:

- Las deformaciones del resorte permanecen por debajo del 10% de su longitud natural, asegurando comportamiento elastico lineal tipico de metales comunes.

- La amplitud de oscilacion es menor que 0.3 multiplicado por la longitud caracteristica del sistema, evitando que la geometria del cuerpo inercial altere significativamente la dinamica.

- El factor de calidad del sistema esta entre 1 y 1000. Factores menores a 1 indican sistemas sobreamortiguados donde el concepto de resonancia pierde sentido practico. Factores mayores a 1000 requieren considerar efectos cuanticos o no linealidades termicas.

- Frecuencias de excitacion entre 0.1 Hz y 100 MHz para sistemas mecanicos macroscopicos. Fuera de este rango, aparecen efectos distribuidos (ondas estacionarias en el propio oscilador) o cuanticos.

- Temperaturas donde las propiedades del material (modulo elastico, coeficiente de dilatacion) permanezcan estables durante el experimento.

## Señales de fallo del modelo

Los siguientes sintomas indican que el modelo lineal ya no aplica y es necesario recurrir a modelos mas complejos:

- La amplitud de resonancia medida difiere del valor teorico predicho por el factor de calidad en mas de un 20%. Esta discrepancia sugiere que la disipacion no es puramente viscosa o que hay perdidas adicionales no modeladas.

- Al variar la frecuencia forzada lentamente, se observa histeresis en la curva de respuesta: la amplitud al subir en frecuencia difiere de la amplitud al bajar. Este fenomeno es marca inequivoca de no linealidades significativas.

- El espectro de frecuencias de la respuesta contiene picos en armónicos superiores (el doble, triple de la frecuencia fundamental), indicando distorsion no lineal del movimiento.

- El sistema presenta multiples picos de resonancia cuando teoricamente deberia tener solo uno. Esto revela grados de libertad adicionales no considerados, como modos de vibracion de la estructura soporte.

- El tiempo de establecimiento del regimen estacionario es significativamente menor que el predicho teoricamente mediante la relacion tiempo de establecimiento aproximado Q dividido por pi multiplicado por el periodo natural. Esto sugiere amortiguamiento adicional no incluido en el modelo.

## Modelo extendido o alternativo

La transicion al modelo alternativo se justifica cuando aparecen señales de fallo del modelo lineal simple. Especificamente, cuando la amplitud de resonancia medida difiere mas del 20% del valor teorico, cuando se observa histeresis en la curva de respuesta, o cuando el espectro contiene armonicos superiores. Estos sintomas indican que el sistema ha abandonado el regimen lineal y requiere tratamiento no lineal.

Cuando el modelo lineal simple falla, se recurre al modelo de oscilador de Duffing, que incluye un termino cubico en la fuerza restauradora. Este modelo captura efectos como la dependencia de la frecuencia natural con la amplitud y la aparicion de resonancias subarmonicas. Es apropiado cuando las amplitudes exceden el 10% de la longitud natural del resorte o cuando se observa que el periodo depende de la amplitud.

Para sistemas con amortiguamiento complejo (frecuencia-dependiente o con memoria), se emplea el modelo de oscilador con amortiguamiento de tipo histéresis o viscoelastico, donde la respuesta depende de la historia previa del sistema. Este modelo se adopta cuando el desplazamiento de fase entre fuerza y desplazamiento difiere significativamente de los noventa grados predichos por el modelo viscoso.

En estructuras continuas (vigas, placas, puentes), el modelo apropiado es el de ondas elasticas con condiciones de contorno, que da lugar a multiples frecuencias naturales discretas (modos normales de vibracion) en lugar de una unica frecuencia. Se utiliza cuando las dimensiones del sistema son comparables a la longitud de onda de las vibraciones.

Para sistemas cuanticos a muy bajas temperaturas y altos factores de calidad, el modelo de oscilador armonico cuantico es necesario, donde la energia esta cuantizada y las fluctuaciones de punto cero limitan la amplitud minima. Aplica cuando la temperatura es inferior a la escala cuantica de energia del sistema.

## Comparacion operativa

| Aspecto | Modelo lineal simple | Modelo de Duffing | Modelo modal estructural |
|---------|---------------------|-------------------|-------------------------|
| Ecuacion caracteristica | lineal de segundo orden | no lineal con termino cubico | ecuacion de ondas con contornos |
| Numero de frecuencias naturales | una unica frecuencia | una frecuencia dependiente de amplitud | infinitas numerables (modos) |
| Fenomeno de histeresis | no presente | aparece a amplitudes grandes | puede aparecer por no linealidad geometrica |
| Complejidad computacional | analitica exacta | requiere metodos numericos o perturbativos | requiere analisis modal o elementos finitos |
| Frecuencia de resonancia | constante e independiente de amplitud | decrece o crece con amplitud segun signo de no linealidad | multiples valores fijos determinados por geometria |
| Descripcion de respuesta | sinusoidal pura | sinusoidal con armonicos superiores | superposicion de modos con sus propias amplitudes |
| Dominio tipico de aplicacion | laboratorio basico ingenieria preliminar | resonadores de alta potencia sistemas de microondas | puentes edificios estructuras aeroespaciales |

La eleccion entre modelos depende de la precision requerida, los recursos computacionales disponibles, y los fenomenos observados experimentalmente que el modelo simple no puede reproducir.
`;export{e as default};
