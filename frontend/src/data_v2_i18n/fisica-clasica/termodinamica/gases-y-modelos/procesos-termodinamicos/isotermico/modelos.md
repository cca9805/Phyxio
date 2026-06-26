## Modelo ideal

El modelo isotermico ideal describe un gas perfectamente ideal en contacto con un foco termico de capacidad calórica infinita, que evoluciona de forma **cuasiestatica y reversible** entre dos estados de equilibrio. En este modelo, la temperatura [[T]] es estrictamente constante, el gas obedece la ecuacion de estado del gas ideal en todo momento, y la transformacion puede representarse exactamente como una hiperbola en el diagrama presion-volumen.

El modelo ignora la viscosidad interna del gas, las perdidas por turbulencia, los gradientes de temperatura entre el nucleo del gas y las paredes del recipiente, y cualquier irreversibilidad del proceso. El foco termico se modela como una fuente de calor sin temperatura propia que varia, capaz de ceder o absorber calor sin modificar su estado termodinamico.

## Hipótesis

- El gas obedece la ecuacion de estado del gas ideal: sin volumen propio de las moleculas y sin interacciones entre ellas.
- El proceso es **cuasiestatico**: suficientemente lento para que el gas este en equilibrio termodinamico en cada instante.
- El proceso es **reversible**: no hay irreversibilidades internas ni externas.
- El foco termico tiene capacidad calórica infinita y temperatura absolutamente constante igual a [[T]].
- El sistema esta **cerrado**: [[n]] es constante durante todo el proceso.
- Las paredes del recipiente son perfectamente conductoras; no hay resistencia termica al flujo de calor.

Violar la hipotesis de proceso cuasiestatico es la ruptura mas frecuente: si el proceso es rapido, el gas no sigue la hiperbola y el trabajo real es menor que el calculado.

## Dominio de validez cuantitativo

El modelo isotermico ideal es una buena aproximacion cuando la presion del gas es menor de 10 atm y la temperatura es mayor de 50 K por encima del punto de condensacion. Bajo estas condiciones, las desviaciones respecto a la ley de Boyle son inferiores al 1 % para la mayoria de gases diatomicos como nitrogeno y oxigeno.

El tiempo caracteristico del proceso debe ser mayor de 10 veces el tiempo de equilibracion termica del recipiente con su entorno para que la aproximacion isotermica sea valida dentro del margen de error del 5 %.

A presiones mayores de 100 atm, las desviaciones del factor de compresibilidad respecto a la unidad pueden superar el 10 %, invalidando la ley de Boyle. El modelo tambien falla a temperaturas por debajo de 1.5 veces la temperatura critica del gas, donde las interacciones intermoleculares son significativas.

## Señales de fallo del modelo

- La temperatura medida al final del proceso difiere de [[T]] en mas de un 2 %: el proceso fue demasiado rapido o hubo perdidas termicas.
- El producto [[p2]] por [[V2]] difiere del producto [[p1]] por [[V1]] en mas de un 5 %: desviaciones del gas ideal o variacion de temperatura real.
- El trabajo medido experimentalmente (por ejemplo, mediante la fuerza sobre el embolo e integracion) es sistematicamente menor que el calculado con la formula logaritmica: el proceso tiene irreversibilidades.
- La curva pV medida no coincide con la hiperbola teorica sino que tiene una forma mas "abombada" o "aplastada": el gas no era ideal o la temperatura no fue constante.

## Modelo extendido o alternativo

Para gases reales donde las interacciones moleculares son significativas, el modelo isotermico puede extenderse usando la **ecuacion de estado de Van der Waals**. Esta ecuacion incorpora el volumen propio de las moleculas mediante el parametro b y las fuerzas de atraccion mediante el parametro a. El trabajo isotermico para un gas de Van der Waals tiene un termino adicional que depende del cociente de volumenes y de la densidad molecular.

Para procesos con gradientes termicos reales, el modelo extendido incluye la conduccion de calor como proceso acoplado. En este caso la hiperbola del diagrama pV se convierte en una curva intermedia entre la isoterma perfecta y la adiabatica, dependiendo de la velocidad del proceso relativa al tiempo de equilibracion termica.

Cuando conviene pasar al modelo extendido: cuando la presion supera los 20 atm, cuando el gas es poliatomico pesado como el SF6 o el CO2 a alta presion, o cuando la velocidad del proceso supera el 10 % del tiempo de equilibracion termica estimado.

## Comparación operativa

| Aspecto | Modelo ideal | Modelo real o extendido |
|---|---|---|
| Ecuacion de estado | pV igual a nRT | Van der Waals con parametros a y b |
| Producto pV | Constante exactamente | Constante solo aproximadamente |
| Trabajo | Integral logaritmica exacta | Integral mas compleja con correcciones |
| Representacion pV | Hiperbola perfecta | Hiperbola distorsionada a altas presiones |
| Aplicabilidad | Gases diatomicos por debajo de 10 atm | Gases reales y procesos rapidos |

El modelo ideal es suficiente para problemas de bachillerato y primer ciclo universitario. El modelo extendido se usa en ingenieria quimica, criogenia y diseño de compresores de alta presion.
