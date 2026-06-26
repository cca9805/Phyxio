const e=`# Errores frecuentes: Sistemas no inerciales intro\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
Por que parece correcto: En el marco no inercial aparecen varios terminos y puede parecer que todos son "causas reales" del mismo tipo.\r
\r
Por que es incorrecto: [[F_real]] y [[F_ficticia]] no tienen el mismo estatus fisico. La primera tiene agente material; la segunda corrige la descripcion por eleccion de marco.\r
\r
Senal de deteccion: El informe atribuye [[F_ficticia]] a un objeto externo concreto sin justificar la aceleracion del marco.\r
\r
Mini-ejemplo de contraste: En un vagon con [[a_marco]] no nula, un objeto parece desplazarse hacia atras en el marco interno sin que exista una fuerza real horizontal adicional.\r
\r
Correccion conceptual: Separar siempre "fuerza real" de "termino de marco" antes de interpretar causalidad.\r
\r
### Error 2: Aplicar la formula mecanicamente sin validar el contexto\r
\r
Por que parece correcto: Resolver rapido con una sola ecuacion da sensacion de eficiencia.\r
\r
Por que es incorrecto: Si [[omega]] o [[a_marco]] son relevantes, usar ecuacion inercial simple introduce sesgo sistematico.\r
\r
Senal de deteccion: Residuales de prediccion altos y persistentes, pero sin revisar clasificacion de marco.\r
\r
Mini-ejemplo de contraste: Se calcula [[a_rel]] solo con [[F_real]] en plataforma que rota, y la trayectoria observada no coincide.\r
\r
Correccion conceptual: Primero clasificar marco y luego elegir conjunto de terminos activos.\r
\r
### Error 3: Confundir magnitudes similares\r
\r
Por que parece correcto: [[a_marco]] y [[a_rel]] comparten unidades, y [[F_centrifuga]] y [[F_real]] comparten unidad de fuerza.\r
\r
Por que es incorrecto: Cada magnitud cumple rol distinto en el modelo y en el diagnostico.\r
\r
Senal de deteccion: Se reemplaza [[a_marco]] por [[a_rel]] al calcular [[F_ficticia]], o se trata [[F_centrifuga]] como fuerza de contacto.\r
\r
Mini-ejemplo de contraste: Dos objetos con igual [[m]] en el mismo marco tienen igual contribucion por [[a_marco]], aunque sus fuerzas reales sean distintas.\r
\r
Correccion conceptual: Definir tabla de magnitudes con significado fisico antes de operar algebraicamente.\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuando el modelo simplificado falla\r
\r
Por que parece correcto: En ejercicios basicos, el modelo reducido suele funcionar y genera confianza excesiva.\r
\r
Por que es incorrecto: En maniobras con [[omega]] alta o [[v_rel]] alta, ignorar [[F_coriolis]] o [[F_centrifuga]] cambia cualitativamente la trayectoria.\r
\r
Senal de deteccion: Error relativo supera 10 por ciento en varias ventanas y aun asi no se cambia modelo.\r
\r
Mini-ejemplo de contraste: Un controlador mantiene esquema inercial durante giro intenso y deriva lateral no explicada aumenta.\r
\r
Correccion conceptual: Establecer criterio cuantitativo de transicion de modelo y aplicarlo sin excepciones informales.\r
\r
### Error 5: Ignorar los limites del modelo conocidos\r
\r
Por que parece correcto: Se piensa que un buen ajuste en un escenario garantiza validez universal.\r
\r
Por que es incorrecto: El dominio de validez depende de escala de [[a_marco]], [[omega]], [[r]] y [[v_rel]].\r
\r
Senal de deteccion: Se extrapola una calibracion de baja rotacion a regimen de alta rotacion sin revalidar.\r
\r
Mini-ejemplo de contraste: Un protocolo validado en banco lineal falla al trasladarse a mesa rotante.\r
\r
Correccion conceptual: Documentar limites y reevaluar umbrales al cambiar escala o geometria.\r
\r
## Errores matematicos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
Por que parece correcto: Las expresiones parecen sencillas y se manipulan en automatico.\r
\r
Por que es incorrecto: Un signo o direccion mal tratada cambia completamente la lectura vectorial.\r
\r
Senal de deteccion: Resultado numerico plausible en magnitud pero incompatible en direccion con la observacion.\r
\r
Mini-ejemplo de contraste: Se cambia el sentido de [[F_ficticia]] y se obtiene aceleracion relativa opuesta a la medida.\r
\r
Correccion conceptual: Fijar ejes, sentidos y convencion de signo antes de cada despeje.\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
Por que parece correcto: En hojas de calculo, la unidad suele quedar implicita y pasa desapercibida.\r
\r
Por que es incorrecto: Mezclar rad/s, rpm, m/s y km/h sin conversion destruye coherencia cuantitativa.\r
\r
Senal de deteccion: Cambios enormes de resultado al transferir datos entre sistemas sin cambiar fenomeno.\r
\r
Mini-ejemplo de contraste: [[omega]] introducida en rpm y tratada como rad/s exagera [[F_centrifuga]].\r
\r
Correccion conceptual: Normalizar unidades al SI antes de cualquier calculo.\r
\r
## Errores de interpretacion\r
\r
### Error 8: Interpretar un resultado como mas preciso que lo que el modelo permite\r
\r
Por que parece correcto: Muchos decimales dan apariencia de exactitud cientifica.\r
\r
Por que es incorrecto: La precision real depende de incertidumbre instrumental y validez del modelo.\r
\r
Senal de deteccion: Se toman decisiones por diferencias menores que el ruido de medicion.\r
\r
Mini-ejemplo de contraste: Se declara cambio de regimen por variacion de 0.01 m/s^2 con incertidumbre de 0.05 m/s^2.\r
\r
Correccion conceptual: Ajustar cifras significativas al limite metrologico y al error de modelo.\r
\r
### Error 9: Saltarte la interpretacion fisica del resultado calculado\r
\r
Por que parece correcto: Obtener un numero final se confunde con resolver el problema.\r
\r
Por que es incorrecto: Sin lectura causal no se sabe si el cambio viene del objeto o del marco.\r
\r
Senal de deteccion: Informe con tablas numericas sin conclusion sobre validez de marco.\r
\r
Mini-ejemplo de contraste: Se reporta [[a_rel]] sin indicar si [[system_classification]] continua como no inercial o debe cambiar.\r
\r
Correccion conceptual: Cerrar siempre con interpretacion, umbral y decision de modelo.\r
\r
## Regla de autocontrol rapido\r
\r
1. ¿Definiste claramente [[F_real]] y [[F_ficticia]]?\r
2. ¿Separaste [[a_marco]] de [[a_rel]]?\r
3. ¿Verificaste si [[omega]] y [[v_rel]] activan terminos rotacionales?\r
4. ¿Comprobaste unidades SI y consistencia de signos?\r
5. ¿Aplicaste un umbral cuantitativo para decidir validez o cambio de modelo?\r
`;export{e as default};
