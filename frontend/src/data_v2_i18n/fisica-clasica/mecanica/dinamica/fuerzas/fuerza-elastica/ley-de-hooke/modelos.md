# Modelos físicos: Ley de hooke

## Modelo ideal

El modelo ideal del leaf asume un elemento elastico lineal de rigidez efectiva [[k]] constante en el intervalo de deformacion estudiado. La variable de estado es la deformacion [[x]], y la respuesta constitutiva principal es la fuerza [[Fel]] con caracter restaurador. Para analisis de intensidad se usa [[Fm]], y para balance estatico vertical se usa [[x_eq]] junto con [[m]] y [[g]].

Este modelo no pretende describir todos los detalles microestructurales del material. Su objetivo es capturar la relacion local fuerza-deformacion con costo computacional bajo y lectura fisica clara.

## Hipótesis

Las hipotesis explicitas son:

- Material en regimen elastico recuperable, sin plastificacion en el rango operativo.
- Dependencia aproximadamente lineal de [[Fel]] con [[x]] alrededor de referencia.
- Rigidez [[k]] tratable como parametro efectivo constante en el intervalo.
- Convencion de eje declarada para interpretar correctamente el signo restaurador.
- Para equilibrio vertical, campo gravitatorio aproximadamente uniforme [[g]].

## Dominio de validez cuantitativo

El modelo lineal es defendible cuando, como guia operativa, se verifican simultaneamente criterios como:

- Deformacion acotada: $|[[x]]| \le 0.1\,L_0$ para longitud libre $L_0$ del elemento.
- Estabilidad de rigidez: variacion relativa de [[k]] menor al 10% en el intervalo medido.
- Error de ajuste lineal: R2 mayor que 0.98 en datos [[Fel]] vs [[x]].
- Coherencia restauradora: producto [[Fel]]·[[x]] <= 0 bajo la convencion adoptada.
- En equilibrio vertical: [[x_eq]] dentro del tramo lineal caracterizado experimentalmente.

Si uno o mas criterios no se cumplen, la precision del modelo puede degradarse de forma sistematica.

## Señales de fallo del modelo

Indicadores practicos de ruptura:

- Curva fuerza-deformacion con historesis apreciable en ciclos de carga/descarga.
- Deriva de [[k]] dependiente del nivel de deformacion.
- Prediccion de [[x_eq]] incompatible con geometria real del montaje.
- Diferencias persistentes medida-modelo superiores al error instrumental.
- Crecimiento de [[Uel]] no consistente con respuesta elastica estable.

## Modelo extendido o alternativo

Cuando falla la linealidad, el paso natural es migrar a una formulacion alternativa:

- Ley por tramos con rigidez secante variable.
- Modelo no lineal cubico con terminos lineal y de tercer orden para capturar endurecimiento o ablandamiento.
- Modelo histeretico para ciclos con perdida energetica.
- Modelo viscoelastico cuando hay dependencia temporal pronunciada.

Transicion explicita a modelo alternativo: si el ajuste lineal no cumple los umbrales cuantitativos definidos arriba, no se "corrige" Hooke con factores ad hoc; se cambia de modelo y se recalibran parametros con datos del nuevo regimen.

## Comparación operativa

| Aspecto | Hooke lineal local | Alternativo no lineal/histeretico |
|---------|--------------------|-----------------------------------|
| Parametro principal | [[k]] constante | Parametros dependientes de regimen |
| Variable de entrada | [[x]] | [[x]] y, en ciclos, historia previa |
| Salida principal | [[Fel]] lineal en [[x]] | [[Fel]] no lineal o con lazo |
| Energia | [[Uel]] cuadratica | Energia con disipacion posible |
| Uso recomendado | Primera aproximacion y calibracion inicial | Validacion avanzada y regimen extendido |

En resumen, el modelo ideal se usa primero por trazabilidad y simplicidad. El modelo extendido se activa cuando la evidencia cuantitativa muestra que la linealidad ya no es suficiente.
