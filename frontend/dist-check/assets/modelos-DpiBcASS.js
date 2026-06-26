const e=`# Ecuación de Continuidad — Modelos y validez

## Modelo ideal
El modelo ideal de la ecuación de continuidad se basa en la conservación macroscópica del **Caudal volumétrico Q**. Consideramos el flujo de un fluido a través de un conducto rígido de sección variable, donde la masa que atraviesa una superficie de control es independiente del tiempo. Bajo esta visión, el fluido se comporta como una corriente inagotable y rígida donde la relación entre el **Área de la sección transversal A** y la **Velocidad media del fluido v** es estrictamente geométrica. Es el modelo estándar utilizado en hidráulica civil, arquitectura de redes de agua y enseñanza básica de fluidos.

## Hipótesis
Para que el modelo simplificado de continuidad volumétrica sea una representación fiel de la realidad, se deben cumplir las siguientes condiciones simplificadoras:
- **Fluido incompresible**: Asumimos que la **Densidad del fluido [[rho]]** es constante. Esto ignora las ondas de presión y la elasticidad del fluido.
- **Flujo estacionario**: Las variables en cada punto del espacio no cambian con el tiempo. Ignoramos el encendido y apagado de bombas o el golpe de ariete.
- **Flujo unidimensional (Línea de corriente)**: Suponemos que el fluido se mueve paralelo al eje del conducto y que la velocidad es uniforme en toda la sección. Esto colapsa el vector velocidad en una magnitud escalar media.
- **Paredes impermeables**: No hay fugas, inyecciones de masa laterales ni porosidad en el conducto.

## Dominio de validez cuantitativo
El éxito de este modelo depende de mantenerse lejos de los regímenes donde la masa "se esconde" tras cambios de densidad o transitorios rápidos. Los límites numéricos son:
- **Número de Mach (Ma)**: El modelo es válido si Ma < 0.3. Por encima de este valor (aprox. 100\\,m/s en aire), el error por ignorar la compresibilidad supera el 5\\%.
- **Líquidos comunes**: Para agua, aceites y combustibles líquidos en condiciones estándar, el error del modelo es inferior al 1\\%, ya que su **Densidad del fluido [[rho]]** varía menos de un 0.01\\% ante cambios de presión típicos.
- **Escala Temporal**: El flujo debe ser estacionario en una escala de tiempo mucho mayor que el tiempo de tránsito (t_{est} \\gg L/v).

## Señales de fallo del modelo
Cuando una o más de las hipótesis anteriores se violan, el modelo empieza a arrojar resultados físicamente imposibles o inconsistentes:
- **Paradoja de la Singularidad**: Si el **Área de la sección transversal A** tiende a cero, el modelo predice una velocidad infinita. En la realidad, esto genera una caída de presión tal que el fluido cavita o el flujo se bloquea (choking).
- **Inconsistencia de Caudal**: Si al medir experimentalmente el **Caudal volumétrico Q** en la entrada y la salida hay una diferencia mayor al 2\\%, existe una fuga no modelada o una acumulación de gas atrapado en el sistema.
- **Ruidos y Vibraciones**: Son señales de flujo no estacionario o turbulento que invalidan la aproximación de velocidad media constante.

## Modelo extendido o alternativo
Cuando el modelo ideal fracasa, recurrimos a formulaciones que reintegran la física omitida. La transición explícita hacia estos modelos alternativos ocurre cuando conviene cambiar a:
1. **Caudal Másico ([[m_dot]])**: Es el modelo superior que integra la ley de continuidad másica. Es obligatorio para gases, procesos de combustión y altas velocidades aerodinámicas. Considera que la masa se conserva aunque el volumen cambie.
2. **Modelo de Perfil Viscoso**: Introduce el coeficiente de Coriolis para corregir el hecho de que el fluido va más lento cerca de las paredes. Mejora la precisión en el cálculo de energía.
3. **Dinámica de Fluidos Computacional (CFD)**: Resuelve las ecuaciones diferenciales de Navier-Stokes en 3D. No asume flujo unidimensional y permite modelar torbellinos y recirculaciones donde la continuidad simple A ? v no tiene sentido.

## Comparación operativa

| Situación | Modelo Recomendado | Magnitud Estrella | Justificación |
| :--- | :--- | :--- | :--- |
| **Goteo de grifo** | Ideal Incompresible | **Caudal volumétrico Q** | Velocidades bajas, densidad constante. |
| **Escape de turbina** | Compresible Másico | **Caudal másico [[m_dot]]** | Altas temperaturas y cambios de densidad. |
| **Riego por goteo** | Red Nodal | **Caudal volumétrico Q** | Múltiples salidas; balance de sumatorios. |
| **Vena de cohete** | Másico / CFD | **Caudal másico [[m_dot]]** | Máxima precisión requerida; Ma > 1. |

Este esquema permite al analista elegir la herramienta correcta: mientras que la ingeniería civil vive en el **Caudal volumétrico Q** constante, la aeroespacial depende críticamente del **Caudal másico [[m_dot]]**.`;export{e as default};
