const e=`\uFEFF# Errores frecuentes: Aceleracion relativa

## Errores conceptuales

### Error 1: Confundir causa con efecto

Por que parece correcto: Al ver una aceleracion medida, el estudiante asume que pertenece solo al objeto y no al cambio de observador.

Por que es incorrecto: [[a_rel]] depende de [[a_A]] y [[a_B]]; no es una propiedad aislada del objeto.

Senal de deteccion: Se afirma que cambiar de marco no modifica la aceleracion relativa en ningun caso.

Mini-ejemplo de contraste: Si [[a_A]] se mantiene y [[a_B]] aumenta en el mismo eje, [[a_rel]] disminuye.

Correccion conceptual: Separar siempre aceleracion del objeto y aceleracion del observador antes de interpretar.

### Error 2: Aplicar la formula mecanicamente sin validar el contexto

Por que parece correcto: La ecuacion de composicion parece universal.

Por que es incorrecto: Solo aplica en traslacion galileana sin rotacion relativa relevante.

Senal de deteccion: Se usa la misma regla en un marco que gira sin agregar terminos no inerciales.

Mini-ejemplo de contraste: En un carrusel no basta la resta simple de aceleraciones traslacionales.

Correccion conceptual: Verificar primero tipo de marco y condiciones del modelo.

### Error 3: Confundir magnitudes similares

Por que parece correcto: [[a_rel]], [[a_A]] y [[a_B]] tienen la misma unidad y suelen aparecer juntas.

Por que es incorrecto: Cada magnitud tiene rol fisico diferente y no son intercambiables.

Senal de deteccion: Se reemplaza [[a_B]] por [[a_A]] en despejes por similitud de simbolos.

Mini-ejemplo de contraste: Si [[a_B]] es cero, [[a_rel]] coincide con [[a_A]]; si no, ya no coincide.

Correccion conceptual: Anotar definicion operacional de cada magnitud antes del calculo.

## Errores de modelo

### Error 4: No reconocer cuando el modelo simplificado falla

Por que parece correcto: Muchos ejercicios introductorios no muestran limites.

Por que es incorrecto: En presencia de rotacion o alta complejidad, el modelo simple deja residual alto.

Senal de deteccion: El residual de composicion supera tolerancia de forma sistematica.

Mini-ejemplo de contraste: Medicion repetida con residual mayor que 0.10 m/s^2 en varios ensayos.

Correccion conceptual: Escalar a modelo no inercial o mejorar trazabilidad de ejes y tiempo.

### Error 5: Ignorar los limites del modelo conocidos

Por que parece correcto: Se asume que toda transformacion de aceleracion es galileana.

Por que es incorrecto: El regimen clasico y la ausencia de rotacion son condiciones de aplicacion.

Senal de deteccion: Se reportan conclusiones fuertes sin declarar hipotesis de validez.

Mini-ejemplo de contraste: Interpretar datos de plataforma rotante con modelo de traslacion pura.

Correccion conceptual: Declarar dominio de validez y umbrales antes de concluir.

## Errores matematicos

### Error 6: Despejes algebraicos descuidados

Por que parece correcto: La resta de vectores parece trivial.

Por que es incorrecto: Un signo mal asignado cambia completamente la interpretacion fisica.

Senal de deteccion: El resultado predice tendencia opuesta a los datos experimentales.

Mini-ejemplo de contraste: Confundir [[a_rel]] = [[a_A]] - [[a_B]] con [[a_rel]] = [[a_A]] + [[a_B]].

Correccion conceptual: Fijar convencion de ejes y mantenerla en todo el procedimiento.

### Error 7: Olvidar constantes fundamentales o unidades

Por que parece correcto: Al ser aceleraciones, se asume que ya estan homogeneizadas.

Por que es incorrecto: Mezclar unidades o escalas temporales rompe consistencia.

Senal de deteccion: Resultados con orden de magnitud absurdo.

Mini-ejemplo de contraste: Mezclar datos en m/s^2 con datos procesados en cm/s^2 sin conversion.

Correccion conceptual: Unificar unidades SI y verificar dimensiones en cada paso.

## Errores de interpretacion

### Error 8: Interpretar un resultado como mas preciso que lo que el modelo permite

Por que parece correcto: Un numero con muchos decimales parece exacto.

Por que es incorrecto: La precision real depende de incertidumbre y de validez de hipotesis.

Senal de deteccion: Se concluyen diferencias fisicas por debajo del ruido instrumental.

Mini-ejemplo de contraste: Discutir una diferencia de 0.01 m/s^2 con sensor de incertidumbre 0.05 m/s^2.

Correccion conceptual: Ajustar cifras significativas a la calidad de medicion.

### Error 9: Saltarte la interpretacion fisica del resultado calculado

Por que parece correcto: Se cree que obtener [[a_rel]] numerica es suficiente.

Por que es incorrecto: Sin lectura causal no se sabe si el cambio viene de [[a_A]] o de [[a_B]].

Senal de deteccion: Informe termina en ecuaciones sin explicar mecanismo fisico.

Mini-ejemplo de contraste: Reportar [[a_rel]] sin discutir comportamiento del observador y del objeto.

Correccion conceptual: Cerrar siempre con lectura causal y condicion de validez.

## Regla de autocontrol rapido

1. ¿Definiste claramente [[a_rel]], [[a_A]], [[a_B]] y [[t]]?
2. ¿Verificaste que el marco sea de traslacion sin rotacion relevante?
3. ¿Mantienes una sola convencion de ejes?
4. ¿El residual de composicion esta dentro del umbral?
5. ¿Tu conclusion respeta incertidumbre y dominio de validez?\r
`;export{e as default};
