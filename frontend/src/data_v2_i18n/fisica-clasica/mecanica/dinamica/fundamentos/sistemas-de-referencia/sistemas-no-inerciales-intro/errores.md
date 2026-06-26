# Errores frecuentes: Sistemas no inerciales intro

## Errores conceptuales

### Error 1: Confundir causa con efecto

Por que parece correcto: En el marco no inercial aparecen varios terminos y puede parecer que todos son "causas reales" del mismo tipo.

Por que es incorrecto: [[F_real]] y [[F_ficticia]] no tienen el mismo estatus fisico. La primera tiene agente material; la segunda corrige la descripcion por eleccion de marco.

Senal de deteccion: El informe atribuye [[F_ficticia]] a un objeto externo concreto sin justificar la aceleracion del marco.

Mini-ejemplo de contraste: En un vagon con [[a_marco]] no nula, un objeto parece desplazarse hacia atras en el marco interno sin que exista una fuerza real horizontal adicional.

Correccion conceptual: Separar siempre "fuerza real" de "termino de marco" antes de interpretar causalidad.

### Error 2: Aplicar la formula mecanicamente sin validar el contexto

Por que parece correcto: Resolver rapido con una sola ecuacion da sensacion de eficiencia.

Por que es incorrecto: Si [[omega]] o [[a_marco]] son relevantes, usar ecuacion inercial simple introduce sesgo sistematico.

Senal de deteccion: Residuales de prediccion altos y persistentes, pero sin revisar clasificacion de marco.

Mini-ejemplo de contraste: Se calcula [[a_rel]] solo con [[F_real]] en plataforma que rota, y la trayectoria observada no coincide.

Correccion conceptual: Primero clasificar marco y luego elegir conjunto de terminos activos.

### Error 3: Confundir magnitudes similares

Por que parece correcto: [[a_marco]] y [[a_rel]] comparten unidades, y [[F_centrifuga]] y [[F_real]] comparten unidad de fuerza.

Por que es incorrecto: Cada magnitud cumple rol distinto en el modelo y en el diagnostico.

Senal de deteccion: Se reemplaza [[a_marco]] por [[a_rel]] al calcular [[F_ficticia]], o se trata [[F_centrifuga]] como fuerza de contacto.

Mini-ejemplo de contraste: Dos objetos con igual [[m]] en el mismo marco tienen igual contribucion por [[a_marco]], aunque sus fuerzas reales sean distintas.

Correccion conceptual: Definir tabla de magnitudes con significado fisico antes de operar algebraicamente.

## Errores de modelo

### Error 4: No reconocer cuando el modelo simplificado falla

Por que parece correcto: En ejercicios basicos, el modelo reducido suele funcionar y genera confianza excesiva.

Por que es incorrecto: En maniobras con [[omega]] alta o [[v_rel]] alta, ignorar [[F_coriolis]] o [[F_centrifuga]] cambia cualitativamente la trayectoria.

Senal de deteccion: Error relativo supera 10 por ciento en varias ventanas y aun asi no se cambia modelo.

Mini-ejemplo de contraste: Un controlador mantiene esquema inercial durante giro intenso y deriva lateral no explicada aumenta.

Correccion conceptual: Establecer criterio cuantitativo de transicion de modelo y aplicarlo sin excepciones informales.

### Error 5: Ignorar los limites del modelo conocidos

Por que parece correcto: Se piensa que un buen ajuste en un escenario garantiza validez universal.

Por que es incorrecto: El dominio de validez depende de escala de [[a_marco]], [[omega]], [[r]] y [[v_rel]].

Senal de deteccion: Se extrapola una calibracion de baja rotacion a regimen de alta rotacion sin revalidar.

Mini-ejemplo de contraste: Un protocolo validado en banco lineal falla al trasladarse a mesa rotante.

Correccion conceptual: Documentar limites y reevaluar umbrales al cambiar escala o geometria.

## Errores matematicos

### Error 6: Despejes algebraicos descuidados

Por que parece correcto: Las expresiones parecen sencillas y se manipulan en automatico.

Por que es incorrecto: Un signo o direccion mal tratada cambia completamente la lectura vectorial.

Senal de deteccion: Resultado numerico plausible en magnitud pero incompatible en direccion con la observacion.

Mini-ejemplo de contraste: Se cambia el sentido de [[F_ficticia]] y se obtiene aceleracion relativa opuesta a la medida.

Correccion conceptual: Fijar ejes, sentidos y convencion de signo antes de cada despeje.

### Error 7: Olvidar constantes fundamentales o unidades

Por que parece correcto: En hojas de calculo, la unidad suele quedar implicita y pasa desapercibida.

Por que es incorrecto: Mezclar rad/s, rpm, m/s y km/h sin conversion destruye coherencia cuantitativa.

Senal de deteccion: Cambios enormes de resultado al transferir datos entre sistemas sin cambiar fenomeno.

Mini-ejemplo de contraste: [[omega]] introducida en rpm y tratada como rad/s exagera [[F_centrifuga]].

Correccion conceptual: Normalizar unidades al SI antes de cualquier calculo.

## Errores de interpretacion

### Error 8: Interpretar un resultado como mas preciso que lo que el modelo permite

Por que parece correcto: Muchos decimales dan apariencia de exactitud cientifica.

Por que es incorrecto: La precision real depende de incertidumbre instrumental y validez del modelo.

Senal de deteccion: Se toman decisiones por diferencias menores que el ruido de medicion.

Mini-ejemplo de contraste: Se declara cambio de regimen por variacion de 0.01 m/s^2 con incertidumbre de 0.05 m/s^2.

Correccion conceptual: Ajustar cifras significativas al limite metrologico y al error de modelo.

### Error 9: Saltarte la interpretacion fisica del resultado calculado

Por que parece correcto: Obtener un numero final se confunde con resolver el problema.

Por que es incorrecto: Sin lectura causal no se sabe si el cambio viene del objeto o del marco.

Senal de deteccion: Informe con tablas numericas sin conclusion sobre validez de marco.

Mini-ejemplo de contraste: Se reporta [[a_rel]] sin indicar si [[system_classification]] continua como no inercial o debe cambiar.

Correccion conceptual: Cerrar siempre con interpretacion, umbral y decision de modelo.

## Regla de autocontrol rapido

1. ¿Definiste claramente [[F_real]] y [[F_ficticia]]?
2. ¿Separaste [[a_marco]] de [[a_rel]]?
3. ¿Verificaste si [[omega]] y [[v_rel]] activan terminos rotacionales?
4. ¿Comprobaste unidades SI y consistencia de signos?
5. ¿Aplicaste un umbral cuantitativo para decidir validez o cambio de modelo?
