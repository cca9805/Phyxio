const e=`## Modelo ideal

El modelo ideal trata la reflexion y la transmision como un problema unidimensional de incidencia normal de ondas planas en una interfaz plana, perfecta e infinita entre dos medios elasticos lineales, homogeneos e isotropos. La interfaz esta perfectamente unida (contacto rigido). La unica informacion necesaria es la impedancia acustica de cada medio, definida como el producto de densidad por velocidad de onda.

Bajo estas condiciones, el problema tiene solucion analitica cerrada: los coeficientes [[R_amp]] y [[T_amp]] se expresan algebraicamente en funcion del cociente de impedancias. No hay conversion de modo, no hay dispersion, no hay disipacion.

## Hipotesis

- Incidencia normal: la onda llega perpendicularmente a la interfaz. Si hay angulo, aparece conversion de modo y se necesitan las ecuaciones de Zoeppritz.

- Interfaz plana e infinita: la curvatura y los bordes de la interfaz se desprecian. Si la interfaz tiene rugosidad del orden de la longitud de onda, aparece dispersion difusa.

- Medios homogeneos e isotropos: las propiedades son uniformes y no dependen de la direccion. Si hay gradientes de impedancia, la reflexion se distribuye a lo largo del gradiente en lugar de concentrarse en un punto.

- Union perfecta (contacto rigido): no hay deslizamiento ni separacion en la interfaz. Si hay lubricante, aire atrapado o desunion parcial, los coeficientes cambian y pueden aparecer reflexiones multiples.

- Regimen elastico lineal: las amplitudes son suficientemente pequeñas para que la superposicion sea valida. En amplitudes extremas (ondas de choque), la no linealidad modifica la reflexion.

## Dominio de validez cuantitativo

El modelo es valido cuando el angulo de incidencia es inferior a 5 grados (desviacion menor del 1 % respecto a incidencia normal exacta). La longitud de onda debe ser mucho mayor que la rugosidad superficial de la interfaz para evitar dispersion difusa: tipicamente la rugosidad debe ser inferior a un decimo de la longitud de onda.

Para ondas ultrasonicas de 5 MHz en acero (longitud de onda de aproximadamente 1.2 mm), la interfaz puede considerarse plana si su rugosidad es inferior a 0.1 mm. Para ondas sismicas (frecuencias de 1-50 Hz, longitudes de onda de kilometros), casi cualquier interfaz geologica es "plana" a la escala de la onda.

Los coeficientes en amplitud satisfacen: −1 <= [[R_amp]] <= 1 y 0 <= [[T_amp]] <= 2. Los coeficientes en energia satisfacen: 0 <= [[R_E]] <= 1 y 0 <= [[T_E]] <= 1, con [[R_E]] + [[T_E]] exactamente igual a 1.

## Señales de fallo del modelo

- El eco medido difiere significativamente del predicho por la formula: posible desunion parcial, capa intermedia o rugosidad excesiva.

- Aparecen señales a tiempos no esperados: reflexiones multiples (reverberaciones) que el modelo de interfaz unica no predice.

- Se detectan ondas transversales donde solo deberia haber longitudinales: incidencia no normal o interfaz inclinada respecto al haz.

- La señal de eco depende de la frecuencia: la interfaz no es "infinita" a la escala de la onda (difraccion) o hay un gradiente de impedancia.

## Modelo extendido o alternativo

El modelo extendido inmediato es la reflexion en incidencia oblicua (ecuaciones de Zoeppritz), que incluye conversion de modo PP, PS, SP, SS y permite calcular angulos criticos y reflexion total.

Para interfaces con capas intermedias, se usa el modelo de capa de espesor finito (interferencia constructiva/destructiva segun el espesor relativo a la longitud de onda). Esto es la base del diseño de capas de adaptacion de impedancia (cuarto de longitud de onda).

Para interfaces rugosas, se usan modelos de dispersion difusa (teoria de Kirchhoff o metodos numericos) que estiman cuanta energia se redistribuye fuera de la direccion especular.

Cuando conviene pasar al modelo extendido: cuando el angulo de incidencia supere 10 grados, cuando la interfaz tenga espesor o gradiente, cuando la rugosidad supere un decimo de la longitud de onda, o cuando se detecte conversion de modo no explicada por el modelo simple.

## Comparacion operativa

| Criterio | Modelo ideal (incidencia normal) | Modelo extendido (Zoeppritz) |
|---|---|---|
| Variables de entrada | [[Z_1]], [[Z_2]] | [[Z_1]], [[Z_2]], velocidades P y S, angulo |
| Coeficientes de salida | 2 (R, T) | 4 (PP, PS, SP, SS) por cara |
| Conversion de modo | No | Si |
| Angulo critico | No existe | Si, depende del cociente de velocidades |
| Complejidad analitica | Aritmetica simple | Ecuaciones matriciales |
| Aplicabilidad | Ensayos normales, interfaces bien definidas | Sismologia AVO, inspeccion angular |
`;export{e as default};
