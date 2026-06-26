const e=`## Errores conceptuales

### Error 1: confundir reactancia con resistencia disipativa
Por que parece correcto:
Ambas se expresan en ohmios y aparecen en ecuaciones de corriente.

Senal de deteccion:
Se concluye que una rama capacitiva "consume" potencia activa por el solo hecho de tener oposición.

Mini-ejemplo de contraste:
Una rama puede tener [[Xc]] baja y [[Ic]] alta sin disipación activa dominante en el ideal.

Correccion conceptual:
Distingue oposición reactiva de disipación resistiva antes de interpretar energía.

### Error 2: creer que la oposición capacitiva es constante
Por que parece correcto:
Se aprende una fórmula y luego se aplica como si fuera un valor fijo de componente.

Senal de deteccion:
Se mantiene el mismo valor de reactancia al comparar escenarios con frecuencias distintas.

Mini-ejemplo de contraste:
Al subir frecuencia en un mismo capacitor, la oposición debe disminuir en el ideal.

Correccion conceptual:
Trata [[Xc]] como resultado de régimen, no como propiedad inmutable.

## Errores de modelo

### Error 3: usar modelo ideal fuera de rango operativo
Por que parece correcto:
Las cuentas son limpias y el resultado parece razonable.

Senal de deteccion:
La tendencia medida de corriente no coincide con la tendencia del modelo mínimo.

Mini-ejemplo de contraste:
Si pérdidas y temperatura alteran fuertemente la respuesta, el modelo ideal deja de ser suficiente.

Correccion conceptual:
Declara umbrales de validez y cambia de modelo cuando esos umbrales se superan.

### Error 4: ignorar trazabilidad metrológica
Por que parece correcto:
Se asume que cualquier lectura de tensión sirve para cualquier fórmula.

Senal de deteccion:
Se mezclan datos de distintos instrumentos y condiciones sin advertirlo.

Mini-ejemplo de contraste:
Una tensión pico tomada en osciloscopio no equivale automáticamente a tensión eficaz de cálculo.

Correccion conceptual:
Alinea tipo de medición, estado de operación y ecuación utilizada.

## Errores matemáticos

### Error 5: mezclar Hz y rad/s sin control
Por que parece correcto:
Ambas magnitudes suelen llamarse "frecuencia" en lenguaje informal.

Senal de deteccion:
Los resultados cambian por factores inexplicables de escala.

Mini-ejemplo de contraste:
Usar directamente frecuencia en hertz donde la ecuación requiere frecuencia angular distorsiona [[Xc]].

Correccion conceptual:
Establece la convención de unidad al inicio y mantén conversión explícita.

### Error 6: no convertir microfaradios a faradios
Por que parece correcto:
El prefijo se omite por rapidez en sustituciones rutinarias.

Senal de deteccion:
La corriente estimada es absurdamente pequeña o exageradamente grande.

Mini-ejemplo de contraste:
Un mismo valor numérico cambia seis órdenes de magnitud entre microfaradios y faradios.

Correccion conceptual:
Normaliza unidades SI antes de cualquier operación formal.

## Errores de interpretación

### Error 7: leer potencia reactiva como consumo activo
Por que parece correcto:
Ambas potencias se reportan con magnitudes energéticas del sistema.

Senal de deteccion:
Se concluye eficiencia baja solo por aumento de magnitud reactiva.

Mini-ejemplo de contraste:
El intercambio reactivo puede aumentar sin implicar igual aumento de energía neta consumida.

Correccion conceptual:
Diferencia explícitamente balance reactivo de balance activo.

### Error 8: concluir sin explicar causalidad física
Por que parece correcto:
La resolución numérica entrega un valor y parece cerrar el problema.

Senal de deteccion:
La conclusión final repite números pero no dice qué variable dominó el resultado.

Mini-ejemplo de contraste:
Dos casos con igual tensión pueden requerir corrientes distintas por cambios en frecuencia o capacidad.

Correccion conceptual:
Cierra toda resolución con una lectura de causa-efecto y límite de validez.

## Regla de autocontrol rápido
Antes de validar tu respuesta, verifica cuatro puntos: tipo de magnitud de entrada, conversión de unidades, coherencia de tendencia y validez del modelo. Si cualquiera de estos puntos falla, la interpretación no está lista para uso técnico.
`;export{e as default};
