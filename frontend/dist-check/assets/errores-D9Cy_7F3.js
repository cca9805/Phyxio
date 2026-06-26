const e=`# Errores frecuentes: Primera ley inercia

## Errores conceptuales

### Error 1: Confundir causa con efecto

**Por que parece correcto**: se observa movimiento y la intuicion cotidiana sugiere una fuerza neta continua en la direccion del avance.

**Senal de deteccion**: aparece razonamiento del tipo "si se mueve, entonces hay fuerza neta" sin revisar balance externo.

**Mini-ejemplo de contraste**: un disco en mesa de aire recorre tramo recto casi uniforme con resultante cercana a cero.

**Correccion conceptual**: la primera ley vincula cambio de estado con [[F_net]], no con desplazamiento visible. Puede existir [[v]] no nula con [[a]] nula. Preguntar si hay evidencia de cambio de velocidad, no solo evidencia de movimiento.

### Error 2: Aplicar la formula mecanicamente sin validar el contexto

**Por que parece correcto**: recordar una ecuacion da sensacion de suficiencia metodologica.

**Senal de deteccion**: se sustituye numericamente antes de declarar sistema y marco.

**Mini-ejemplo de contraste**: analizar un ascensor acelerado como si fuera marco inercial da conclusiones falsas de equilibrio.

**Correccion conceptual**: si marco o sistema estan mal definidos, la lectura de [[F_net]] pierde sentido fisico. Declarar sistema y marco antes de cualquier sustitucion.

### Error 3: Confundir magnitudes similares

**Por que parece correcto**: resultante nula se confunde con ausencia total de fuerzas y aceleracion nula con reposo obligatorio.

**Senal de deteccion**: se afirma que equilibrio implica reposo sin revisar valor de [[v]].

**Mini-ejemplo de contraste**: bloque sobre mesa con peso y normal equilibrados, y patin que mantiene rapidez casi constante.

**Correccion conceptual**: [[F_net]] nula puede coexistir con fuerzas individuales no nulas compensadas; [[a]] nula puede coexistir con [[v]] constante distinta de cero. Separar balance de fuerzas, estado de aceleracion y valor de velocidad.

## Errores de modelo

### Error 4: No reconocer cuando el modelo simplificado falla

**Por que parece correcto**: en muchos ejercicios la aproximacion ideal funciona bien y se extrapola sin control.

**Senal de deteccion**: la prediccion inercial se mantiene aunque la deriva temporal ya sea sistematica.

**Mini-ejemplo de contraste**: carrito parece inercial en 1 s pero pierde rapidez medible en 20 s.

**Correccion conceptual**: perturbaciones pequenas acumuladas pueden volver significativa la deriva de [[v]]. Fijar ventana temporal y tolerancia antes de afirmar equilibrio dinamico.

### Error 5: Ignorar los limites del modelo conocidos

**Por que parece correcto**: la ley se memoriza como universal sin condiciones.

**Senal de deteccion**: no se listan condiciones de validez antes de concluir.

**Mini-ejemplo de contraste**: vehiculo en curva con aceleracion lateral no es caso de movimiento inercial rectilineo.

**Correccion conceptual**: primera ley opera en marcos inerciales y escalas donde perturbaciones no modeladas siguen siendo pequenas. Escribir condiciones de validez y verificarlas con datos del escenario.

## Errores matematicos

### Error 6: Despejes algebraicos descuidados

**Por que parece correcto**: la manipulacion simbolica se hace por costumbre sin revisar causalidad.

**Senal de deteccion**: el resultado numerico contradice observaciones pero se conserva por confianza algebraica.

**Mini-ejemplo de contraste**: usar masa equivocada produce aceleracion aparente incompatible con velocidad casi constante.

**Correccion conceptual**: una cuenta formalmente correcta puede quedar fisicamente mal interpretada si mezcla hipotesis incompatibles. Comprobar unidades y coherencia fisica despues de cada paso algebraico.

### Error 7: Olvidar constantes fundamentales o unidades

**Por que parece correcto**: conversiones se dejan al final por considerarlas administrativas.

**Senal de deteccion**: aparecen saltos de orden de magnitud sin justificacion fisica.

**Mini-ejemplo de contraste**: confundir cm/s con m/s multiplica por cien la deriva reportada de [[v]].

**Correccion conceptual**: una mala conversion cambia umbrales y puede invertir la decision de modelo. Convertir a SI al inicio y mantener tabla de unidades durante la resolucion.

## Errores de interpretacion

### Error 8: Interpretar un resultado como mas preciso que lo que el modelo permite

**Por que parece correcto**: mas decimales parecen mas rigurosos.

**Senal de deteccion**: se reportan mas cifras significativas que las que admite el sensor.

**Mini-ejemplo de contraste**: reportar [[a]] con cuatro decimales cuando el sensor valida solo dos cifras utiles.

**Correccion conceptual**: la precision real la fija la incertidumbre de medicion y el alcance del modelo. Ajustar cifras significativas a incertidumbre y dominio de validez.

### Error 9: Saltarte la interpretacion fisica del resultado calculado

**Por que parece correcto**: obtener un numero da sensacion de cierre rapido.

**Senal de deteccion**: la respuesta termina en un valor numerico sin frase causal final.

**Mini-ejemplo de contraste**: calcular deriva pequena de velocidad y no decidir si es ruido o cambio dinamico real.

**Correccion conceptual**: sin lectura causal, el resultado no responde la pregunta fisica central. Cerrar siempre con conclusion causal explicita sobre conservacion o cambio de estado.

## Regla de autocontrol rapido

1. Sistema y marco declarados.
2. Lectura de [[F_net]] justificada.
3. Coherencia entre [[a]] y [[v]] verificada.
4. Tolerancias y limites explicitados.
5. Interpretacion fisica final escrita.
`;export{e as default};
