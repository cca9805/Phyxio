const e=`## Modelo ideal

El modelo de **lente delgada** trata la lente como una interfaz bidimensional que desvía los rayos sin introducir recorrido optico adicional por su espesor. Se conservan la distancia focal [[f]], las posiciones [[d_o]] y [[d_i]], y el aumento [[m]]. Se ignoran el espesor real del vidrio, las aberraciones esfericas, la aberracion cromatica y las perdidas por reflexion en las superficies.

La simplificacion central es que todos los rayos procedentes de un punto objeto convergen exactamente en un unico punto imagen. Esto permite sustituir la refraccion en dos superficies curvas por una unica operacion algebraica.

## Hipotesis

- El espesor de la lente es despreciable frente a [[d_o]], [[d_i]] y [[f]].
  - Si se viola, las distancias deben medirse desde los planos principales y la ecuacion simple deja de ser exacta.
- Los rayos forman angulos pequenos con el eje optico (aproximacion paraxial).
  - Si se viola, aparecen aberraciones esfericas que desplazan la imagen de la prediccion ideal.
- El medio a ambos lados de la lente es homogeneo (aire con indice unitario).
  - Si se viola, la ecuacion del fabricante requiere un factor corrector con los indices exteriores.
- La lente no presenta dispersion cromatica relevante.
  - Si se viola, cada longitud de onda tiene focal ligeramente distinta y la imagen muestra halos de color.

## Dominio de validez cuantitativo

El error relativo del modelo de lente delgada se mantiene por debajo del 1 % cuando el espesor es menor que una decima parte de la focal. Para lentes tipicas de laboratorio con focal de 100 mm, esto exige espesores menores de 10 mm.

La aproximacion paraxial se cumple razonablemente para rayos con angulo menor que 10 grados respecto al eje, lo que en una lente de 50 mm de diametro y focal de 100 mm corresponde a un orden de magnitud de 5 grados para el rayo marginal.

Para frecuencias opticas, la dispersion cromatica de vidrio BK7 produce variaciones de [[n]] del orden de 0.008 entre 400 nm y 700 nm, equivalente a un desplazamiento focal de aproximadamente el 1 % de [[f]].

## Senales de fallo del modelo

- La imagen observada en pantalla aparece borrosa en los bordes pero nitida en el centro: aberracion esferica.
- El tamano de imagen medido no coincide con el predicho por [[m]] para objetos extensos: el modelo falla para rayos marginales.
- Se observan halos de color alrededor de bordes brillantes: aberracion cromatica no contemplada por el modelo de indice unico.
- Al mover el objeto ligeramente cerca del foco, la imagen se desplaza distancias enormes e impredecibles: zona de inestabilidad del modelo.

## Modelo extendido o alternativo

El modelo extendido utiliza los **planos principales** para lentes gruesas. Las distancias se miden desde estos planos en lugar del centro fisico de la lente. La ecuacion de la lente mantiene su forma, pero [[d_o]] y [[d_i]] se redefinen. Para sistemas de multiples lentes, se emplea el formalismo de **matrices de transferencia** (matrices ABCD) que encadenan la accion de cada superficie y cada espacio libre.

Cuando conviene pasar al modelo extendido: cuando el espesor de la lente supera el 10 % de su focal, cuando se combinan dos o mas lentes en secuencia, o cuando la aberracion cromatica no es despreciable y se requiere un doblete acromatico.

## Comparacion operativa

| Criterio | Modelo de lente delgada | Modelo de planos principales |
|---|---|---|
| Precision para lentes de laboratorio | Alta (error menor del 1 %) | Muy alta |
| Complejidad de calculo | Baja (una ecuacion algebraica) | Media (requiere localizar planos) |
| Rango de aplicacion | Lentes individuales delgadas | Cualquier lente o sistema compuesto |
| Tratamiento de aberraciones | No las contempla | Parcial (esfericas con trazado exacto) |
| Adecuado para diseno industrial | Solo predisenio | Si, con software de trazado |
`;export{e as default};
