const a=`## Modelo ideal

El modelo ideal trata la Tierra (o la region de interes) como un **medio elastico isotropo, homogeneo e infinito**. En este marco, las ondas P y S se propagan en linea recta con velocidades constantes determinadas por [[K_bulk]], [[G_shear]] y [[rho_medio]]. No hay refraccion, reflexion, dispersion ni atenuacion.

Este modelo permite derivar las formulas fundamentales de [[v_p]] y [[v_s]] y la relacion lineal entre [[delta_t_ps]] y [[d_foco]].

## Hipotesis

- **Isotropia**: las propiedades elasticas no dependen de la direccion. Violacion: en rocas laminadas o cristales, las velocidades varian con el angulo de propagacion y aparecen modos quasi-P y quasi-S.
- **Homogeneidad**: las propiedades no varian en el espacio. Violacion: en medio estratificado, las ondas se refractan y las dromocronas se curvan.
- **Elasticidad lineal**: la tension es proporcional a la deformacion. Violacion: cerca del foco, deformaciones grandes introducen no linealidades y roturas.
- **Sin atenuacion**: la amplitud no decrece por absorcion intrinseca. Violacion: a frecuencias altas o en medios parcialmente fundidos, el factor Q reduce la amplitud.
- **Longitud de onda mucho mayor que heterogeneidades**: el medio parece continuo. Violacion: si la longitud de onda es comparable al tamaño de grano o fracturas, aparece scattering.

## Dominio de validez cuantitativo

- Frecuencias sismicas tipicas: 0.01–10 Hz, con longitudes de onda de 500 m a 800 km. El modelo es valido mientras la longitud de onda sea al menos un orden de magnitud mayor que las heterogeneidades del medio.
- Distancias epicentrales < 200 km para el modelo de velocidades constantes.
- Error en distancia estimada menor al 5 % cuando [[d_foco]] es menor de 100 km con corteza uniforme.
- Para profundidades mayores de 200 km, la variacion de densidad y modulos con la presion invalida la hipotesis de homogeneidad.

## Senales de fallo del modelo

- La distancia estimada con tres estaciones no converge en un punto unico: indica que la velocidad no es uniforme entre estaciones.
- El [[ratio_vp_vs]] medido cambia sistematicamente con la distancia: indica anisotropia o estratificacion.
- El [[delta_t_ps]] observado para un sismo lejano (> 1000 km) difiere mas de un 15 % del predicho con velocidades constantes: las dromocronas reales son curvas.
- Ausencia completa de ondas S en registros a mas de 104 grados de distancia angular: indica paso por el nucleo liquido (modelo 1D ya insuficiente).

## Modelo extendido o alternativo

El **modelo radial PREM** (Preliminary Reference Earth Model) describe la variacion de [[K_bulk]], [[G_shear]] y [[rho_medio]] con la profundidad en capas concentricas. Permite calcular dromocronas curvas y zonas de sombra.

Para estudios de detalle, se usan **modelos tomograficos 3D** que incorporan anomalias laterales de velocidad debidas a placas subducidas, plumas mantellares y variaciones litologicas.

Cuando conviene pasar al modelo PREM: cuando la distancia epicentral supera 200 km o cuando se trabaja con sismos profundos (> 70 km). Para estudios de reservorios, la transicion al modelo anisotropo es necesaria cuando la variacion azimutal de velocidades supera el 5 %.

## Comparacion operativa

| Criterio | Modelo homogeneo isotropo | Modelo PREM / estratificado |
|---|---|---|
| Complejidad | Baja: una formula analitica | Media-alta: integracion numerica |
| Precision a < 100 km | Alta (error < 5 %) | Igual o ligeramente mejor |
| Precision a > 500 km | Baja (error > 15 %) | Alta (error < 3 %) |
| Zonas de sombra | No las predice | Las explica naturalmente |
| Datos necesarios | K, G, rho constantes | Perfil radial completo |
| Uso tipico | Sismos locales, ensenanza | Sismologia global, alerta |
`;export{a as default};
