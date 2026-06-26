# Modelos físicos: Ejemplos de equilibrio

## Modelo ideal

El modelo base del leaf compara tres familias de casos de equilibrio traslacional: apoyo, rampa y nudo de cables. En todos ellos se supone regimen cuasiestatico y se prioriza cierre de fuerzas sobre el cuerpo aislado.

Idealizaciones principales:

- Contacto seco representado por coeficiente [[mu_s]].
- Cables ideales de masa despreciable con tension uniforme [[T]].
- Geometria plana con angulos [[alpha]] y [[theta]] bien definidos.
- Gravedad local casi constante [[g]].

## Hipótesis

1. El DCL incluye todas las fuerzas externas relevantes.
2. El sistema de ejes se mantiene coherente durante todo el calculo.
3. Las ecuaciones de proyeccion se aplican con referencia angular explicita.
4. No hay aceleracion traslacional apreciable en los ejemplos clasificados como equilibrio.

Si una hipotesis falla, la comparacion entre ejemplos pierde validez didactica y predictiva.

## Dominio de validez cuantitativo

El modelo se considera operativo cuando se cumplen condiciones como:

1. abs(sumFx) <= 0.02 * F_ref
2. abs(sumFy) <= 0.02 * F_ref
3. 0 <= [[alpha]] < 1.57 rad en rampas no verticales
4. 0 < [[theta]] <= 1.57 rad en soportes de cable simetricos
5. 0 <= [[mu_s]] <= 1.2 para contacto seco comun

Con F_ref entre 10 N y 1000 N, estos umbrales separan un cierre aceptable de un desbalance fisicamente relevante. Fuera de ese dominio, el modelo puede producir numeros, pero su lectura causal se degrada.

## Señales de fallo del modelo

- Residuos de fuerza persistentes y sistematicos pese a repetir mediciones.
- Predicciones de tension [[T]] incompatibles con capacidad del sistema real.
- Necesidad de angulos imposibles para cerrar ecuaciones.
- Contradicciones entre observacion y resultado, por ejemplo deslizamiento con adherencia supuestamente suficiente.

Estas señales indican que no basta ajustar algebra; hay que revisar hipotesis del modelo.

## Modelo extendido o alternativo

Cuando conviene cambiar de modelo? Conviene cambiar cuando el mecanismo dominante no queda representado por el esquema actual.

Ejemplos de transicion:

1. Si hay giro relevante, pasar a equilibrio con momentos.
2. Si hay deslizamiento y aceleracion, pasar a dinamica con friccion.
3. Si hay deformacion notable, pasar a modelo elastico estructural.

La transicion explicita es clave: cuando conviene cambiar de modelo, conviene pasar al modelo que representa el fenomeno que hoy aparece como residuo no explicado.

## Comparación operativa

| Aspecto | Modelo base del leaf | Modelo extendido |
|---------|----------------------|------------------|
| Cierre principal | sumFx, sumFy | fuerzas + momentos + dinamica segun caso |
| Parametros clave | [[W]], [[N]], [[W_parallel]], [[F_s_max]], [[T]] | agrega inercia, deformacion, perdidas |
| Complejidad | Baja a media | Media a alta |
| Uso recomendado | Diagnostico y comparacion didactica | Validacion de diseño y campo |
| Riesgo de mal uso | Extrapolacion fuera de dominio | Sobrecarga de complejidad innecesaria |

Dominar el modelo base permite decidir con criterio tecnico cuando escalar a modelos mas ricos.
