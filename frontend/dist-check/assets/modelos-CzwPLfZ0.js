const e=`# Modelos físicos: Ley de hooke\r
\r
## Modelo ideal\r
\r
El modelo ideal del leaf asume un elemento elastico lineal de rigidez efectiva [[k]] constante en el intervalo de deformacion estudiado. La variable de estado es la deformacion [[x]], y la respuesta constitutiva principal es la fuerza [[Fel]] con caracter restaurador. Para analisis de intensidad se usa [[Fm]], y para balance estatico vertical se usa [[x_eq]] junto con [[m]] y [[g]].\r
\r
Este modelo no pretende describir todos los detalles microestructurales del material. Su objetivo es capturar la relacion local fuerza-deformacion con costo computacional bajo y lectura fisica clara.\r
\r
## Hipótesis\r
\r
Las hipotesis explicitas son:\r
\r
- Material en regimen elastico recuperable, sin plastificacion en el rango operativo.\r
- Dependencia aproximadamente lineal de [[Fel]] con [[x]] alrededor de referencia.\r
- Rigidez [[k]] tratable como parametro efectivo constante en el intervalo.\r
- Convencion de eje declarada para interpretar correctamente el signo restaurador.\r
- Para equilibrio vertical, campo gravitatorio aproximadamente uniforme [[g]].\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo lineal es defendible cuando, como guia operativa, se verifican simultaneamente criterios como:\r
\r
- Deformacion acotada: $|[[x]]| \\le 0.1\\,L_0$ para longitud libre $L_0$ del elemento.\r
- Estabilidad de rigidez: variacion relativa de [[k]] menor al 10% en el intervalo medido.\r
- Error de ajuste lineal: R2 mayor que 0.98 en datos [[Fel]] vs [[x]].\r
- Coherencia restauradora: producto [[Fel]]·[[x]] <= 0 bajo la convencion adoptada.\r
- En equilibrio vertical: [[x_eq]] dentro del tramo lineal caracterizado experimentalmente.\r
\r
Si uno o mas criterios no se cumplen, la precision del modelo puede degradarse de forma sistematica.\r
\r
## Señales de fallo del modelo\r
\r
Indicadores practicos de ruptura:\r
\r
- Curva fuerza-deformacion con historesis apreciable en ciclos de carga/descarga.\r
- Deriva de [[k]] dependiente del nivel de deformacion.\r
- Prediccion de [[x_eq]] incompatible con geometria real del montaje.\r
- Diferencias persistentes medida-modelo superiores al error instrumental.\r
- Crecimiento de [[Uel]] no consistente con respuesta elastica estable.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando falla la linealidad, el paso natural es migrar a una formulacion alternativa:\r
\r
- Ley por tramos con rigidez secante variable.\r
- Modelo no lineal cubico con terminos lineal y de tercer orden para capturar endurecimiento o ablandamiento.\r
- Modelo histeretico para ciclos con perdida energetica.\r
- Modelo viscoelastico cuando hay dependencia temporal pronunciada.\r
\r
Transicion explicita a modelo alternativo: si el ajuste lineal no cumple los umbrales cuantitativos definidos arriba, no se "corrige" Hooke con factores ad hoc; se cambia de modelo y se recalibran parametros con datos del nuevo regimen.\r
\r
## Comparación operativa\r
\r
| Aspecto | Hooke lineal local | Alternativo no lineal/histeretico |\r
|---------|--------------------|-----------------------------------|\r
| Parametro principal | [[k]] constante | Parametros dependientes de regimen |\r
| Variable de entrada | [[x]] | [[x]] y, en ciclos, historia previa |\r
| Salida principal | [[Fel]] lineal en [[x]] | [[Fel]] no lineal o con lazo |\r
| Energia | [[Uel]] cuadratica | Energia con disipacion posible |\r
| Uso recomendado | Primera aproximacion y calibracion inicial | Validacion avanzada y regimen extendido |\r
\r
En resumen, el modelo ideal se usa primero por trazabilidad y simplicidad. El modelo extendido se activa cuando la evidencia cuantitativa muestra que la linealidad ya no es suficiente.\r
`;export{e as default};
