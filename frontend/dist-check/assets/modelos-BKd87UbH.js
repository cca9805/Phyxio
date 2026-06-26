const e=`# Modelos físicos

## Modelo ideal

El modelo ideal es una onda electromagnetica monocromatica que se propaga en un medio lineal, homogeneo e isotropo. El medio se resume mediante un indice efectivo [[n]], y ese indice permite obtener la velocidad de fase [[v_m]] y la longitud de onda dentro del material [[lambda_m]].

Este modelo separa lo que aporta la fuente de lo que aporta el medio. La fuente fija la frecuencia; el medio cambia la velocidad y la escala espacial. [[c]] permanece como referencia de vacio, no como velocidad material salvo que el indice sea practicamente uno.

## Hipótesis

- El medio se trata como lineal; si hay respuesta no lineal, [[n]] puede depender de la intensidad.
- El material se considera homogeneo; si cambia punto a punto, la propagacion requiere un modelo espacial.
- El medio se toma isotropo; si hay anisotropia, el indice depende de direccion o polarizacion.
- Las perdidas por absorcion se consideran pequeñas; si crecen, hay que modelar atenuacion.
- La onda es aproximadamente monocromatica; si es un pulso corto, [[v_m]] no basta para describir transporte.

Estas hipotesis son razonables para vidrio, agua, aire, plasticos transparentes o fibras ideales en una primera estimacion.

## Dominio de validez cuantitativo

Como criterio practico, el modelo simple es razonable si el indice cambia poco dentro del ancho espectral de la fuente y si la absorcion no reduce de forma apreciable la amplitud en la distancia estudiada. Para una estimacion de aula, una variacion relativa inferior al 5 % suele permitir usar un indice efectivo.

El rango tipico de muchos dielectricos transparentes queda entre 1 < [[n]] y [[n]] < 2.5. Tambien se exige que [[n]], [[v_m]] y [[lambda_m]] sean positivas; valores nulos o negativos no representan el regimen ordinario de este leaf.

## Señales de fallo del modelo

El modelo falla si predice una velocidad mayor que [[c]] en un medio ordinario, si atribuye un cambio de frecuencia a una frontera estacionaria o si usa el mismo indice para regiones espectrales muy separadas. Tambien falla cuando se aplica a metamateriales, plasmas o medios anisotropos sin declarar hipotesis adicionales.

Una señal experimental de fallo es que distintos colores se separen o que un pulso se ensanche. Esos efectos no son errores del electromagnetismo; indican que el modelo de indice unico se quedo corto.

## Modelo extendido o alternativo

El modelo extendido es dispersivo o absorbente. Cuando conviene pasar al modelo extendido: si [[n]] depende de la frecuencia, si el material absorbe de forma apreciable, si la onda es un pulso corto o si se pregunta por transporte de energia e informacion. La transicion al modelo dispersivo ocurre cuando una unica velocidad de fase deja de describir lo observado.

En ese caso se introduce velocidad de grupo, indice complejo o coeficientes de absorcion. El leaf actual sigue siendo la base conceptual, pero ya no basta con un unico indice real para todo el fenomeno.

## Comparación operativa

Modelo ideal: usa un [[n]] real unico, es rapido y claro para estimar [[v_m]] y [[lambda_m]], y resulta adecuado para ondas monocromaticas con perdidas pequeñas. Su limite es que no describe absorcion, dispersion fuerte ni ensanchamiento de pulsos.

Modelo extendido: usa dispersion, perdidas o velocidad de grupo. Es mas preciso para datos reales y enlaces opticos, pero exige mas parametros del material y de la señal. Operativamente, se empieza por el modelo ideal y se cambia cuando aparecen señales observables de fallo.
`;export{e as default};
