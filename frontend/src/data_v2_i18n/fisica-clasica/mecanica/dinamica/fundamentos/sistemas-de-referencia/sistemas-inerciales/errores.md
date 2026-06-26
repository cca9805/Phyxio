# Errores frecuentes: Sistemas inerciales

## Errores conceptuales

### Error 1: Confundir causa con efecto

Por que parece correcto: La expresion dinamica muestra varias magnitudes y parece que cualquiera podria "causar" el resultado por igual.

Por que es incorrecto: En un marco inercial, la cadena causal va de [[F_neta]] hacia [[a]] para una [[m]] dada.

Senal de deteccion: Se explica una aceleracion como si apareciera sin discutir la fuerza neta real.

Mini-ejemplo de contraste: Dos cuerpos con igual [[m]] reciben distinta [[F_neta]] y muestran distinta [[a]].

Correccion conceptual: Separar siempre causa dinamica (fuerza) y respuesta cinematica (aceleracion).

### Error 2: Aplicar la formula mecanicamente sin validar el contexto

Por que parece correcto: Se piensa que la segunda ley vale igual en cualquier referencia.

Por que es incorrecto: Si el marco no es inercial, hay que reformular e incluir terminos aparentes.

Senal de deteccion: Se observan inconsistencias entre [[F_neta]] y [[a]] y aun asi se insiste en el mismo esquema.

Mini-ejemplo de contraste: En un ascensor acelerado, la lectura de fuerzas aparentes cambia la interpretacion.

Correccion conceptual: Verificar primero si el sistema de referencia es inercial.

### Error 3: Confundir magnitudes similares

Por que parece correcto: [[v]], [[v_obs1]], [[v_obs2]] y [[V_rel]] tienen unidades parecidas y aparecen juntas.

Por que es incorrecto: Cada una cumple un rol distinto: velocidad del objeto en un marco, velocidad en otro marco y velocidad relativa entre marcos.

Senal de deteccion: Se reemplaza [[V_rel]] por [[v]] en la transformacion sin criterio fisico.

Mini-ejemplo de contraste: Si [[V_rel]] es constante, [[v_obs2]] puede cambiar aunque [[v_obs1]] no cambie en el mismo valor.

Correccion conceptual: Etiquetar explicitamente cada velocidad con su observador antes de calcular.

## Errores de modelo

### Error 4: No reconocer cuando el modelo simplificado falla

Por que parece correcto: Muchos ejercicios introductorios no muestran limites de validez.

Por que es incorrecto: La consistencia [[F_neta]]-[[m]]-[[a]] puede romperse por mala referencia o datos inconsistentes.

Senal de deteccion: residual = abs([[F_neta]] - [[m]]*[[a]]) supera tolerancia repetidamente.

Mini-ejemplo de contraste: Residual mayor a 0.10 N en varias corridas sin cambio experimental justificado.

Correccion conceptual: Declarar criterio de salida y pasar a modelo extendido cuando corresponda.

### Error 5: Ignorar los limites del modelo conocidos

Por que parece correcto: Se asume que el esquema galileano siempre vale.

Por que es incorrecto: Requiere marcos inerciales y regimen clasico.

Senal de deteccion: Se aplica igual tratamiento cuando [[V_rel]] cambia rapidamente o hay rotacion del marco.

Mini-ejemplo de contraste: Si el observador gira, la equivalencia inercial deja de ser directa.

Correccion conceptual: Revisar hipotesis antes de extrapolar resultados.

## Errores matematicos

### Error 6: Despejes algebraicos descuidados

Por que parece correcto: La operacion parece simple y se hace en automatico.

Por que es incorrecto: Un signo mal puesto en transformacion de velocidades altera toda conclusion.

Senal de deteccion: [[v_obs2]] queda con sentido opuesto al observado.

Mini-ejemplo de contraste: Confundir [[v_obs2]] = [[v_obs1]] - [[V_rel]] con suma directa.

Correccion conceptual: Fijar convencion de ejes y mantenerla en cada paso.

### Error 7: Olvidar constantes fundamentales o unidades

Por que parece correcto: Al usar datos de tablas, se asume homogeneidad automatica.

Por que es incorrecto: Mezclar m/s con km/h rompe coherencia sin que la algebra lo advierta.

Senal de deteccion: Ordenes de magnitud absurdos en [[v_obs1]] o [[v_obs2]].

Mini-ejemplo de contraste: [[V_rel]] en km/h restada a [[v_obs1]] en m/s sin conversion.

Correccion conceptual: Convertir todo al SI antes de operar.

## Errores de interpretacion

### Error 8: Interpretar un resultado como mas preciso que lo que el modelo permite

Por que parece correcto: Muchos decimales parecen evidencia de exactitud.

Por que es incorrecto: La precision real depende de incertidumbre experimental y validez del marco.

Senal de deteccion: Se concluyen diferencias fisicas por debajo del ruido de medicion.

Mini-ejemplo de contraste: Discutir cambios de 0.01 m/s^2 con incertidumbre de 0.05 m/s^2.

Correccion conceptual: Ajustar cifras significativas al limite metrologico.

### Error 9: Saltarte la interpretacion fisica del resultado calculado

Por que parece correcto: Se confunde resolver ecuacion con resolver problema.

Por que es incorrecto: Sin lectura causal no se sabe si fallo la dinamica real o la referencia elegida.

Senal de deteccion: El informe termina en resultados numericos sin explicar el fenomeno.

Mini-ejemplo de contraste: Reportar [[a_obs2]] sin discutir si confirma marco inercial.

Correccion conceptual: Cerrar siempre con lectura fisica, validez y limite del modelo.

## Regla de autocontrol rapido

1. ¿Definiste [[F_neta]], [[m]], [[a]], [[v]], [[V_rel]] y [[t]]?
2. ¿Verificaste que el marco sea inercial?
3. ¿Comprobaste coherencia entre [[v_obs1]], [[v_obs2]] y [[V_rel]]?
4. ¿El residual [[F_neta]]-[[m]]*[[a]] esta en tolerancia?
5. ¿Tu conclusion respeta incertidumbre y dominio de validez?
