const e=`## Errores conceptuales

### Error 1: confundir reactancia con resistencia disipativa
Por que parece correcto:
Ambas se expresan en ohmios y ambas aparecen en ecuaciones de corriente.

Senal de deteccion:
Se concluye que una rama inductiva con [[Xl]] alta necesariamente consume mucha potencia activa.

Mini-ejemplo de contraste:
Una rama puede mostrar gran oposicion [[Xl]] y corriente [[Il]] moderada sin que eso implique disipacion activa dominante en el ideal.

Correccion conceptual:
Distingue oposicion reactiva de disipacion resistiva antes de interpretar energia.

### Error 2: creer que la oposicion inductiva es constante
Por que parece correcto:
Se memoriza una ecuacion y se usa como si fuera un valor fijo del componente.

Senal de deteccion:
Se mantiene el mismo valor de [[Xl]] al comparar escenarios con distinta [[f]].

Mini-ejemplo de contraste:
Con [[L]] fija, aumentar frecuencia debe aumentar [[Xl]] en modelo ideal.

Correccion conceptual:
Trata [[Xl]] como resultado de regimen y no como identidad inmutable del elemento.

## Errores de modelo

### Error 3: usar modelo ideal fuera de rango magnetico
Por que parece correcto:
Las cuentas son limpias y la salida numerica parece razonable.

Senal de deteccion:
La tendencia medida de [[Il]] no coincide con la tendencia esperada del modelo minimo.

Mini-ejemplo de contraste:
Si hay saturacion magnetica o perdidas de nucleo relevantes, el modelo ideal deja de describir correctamente la rama.

Correccion conceptual:
Declara umbrales de validez y cambia a modelo extendido cuando esos umbrales se superan.

### Error 4: ignorar trazabilidad metrologica
Por que parece correcto:
Se asume que cualquier valor de tension sirve para cualquier ecuacion.

Senal de deteccion:
Se mezclan mediciones de distintos instrumentos o estados de operacion sin control de consistencia.

Mini-ejemplo de contraste:
Una tension pico leida en osciloscopio no equivale automaticamente a tension RMS para relacion de corriente de rama.

Correccion conceptual:
Alinea tipo de dato, contexto de medicion y ecuacion utilizada.

## Errores matemáticos

### Error 5: mezclar Hz y rad/s sin control
Por que parece correcto:
En lenguaje informal ambas magnitudes se llaman frecuencia.

Senal de deteccion:
Los resultados cambian por factores de escala inexplicables.

Mini-ejemplo de contraste:
Usar directamente [[f]] donde la ecuacion requiere [[omega]] distorsiona [[Xl]] y arrastra error en [[Il]].

Correccion conceptual:
Fija la convencion de unidad al inicio y manten conversion explicita.

### Error 6: no convertir milihenrios a henrios
Por que parece correcto:
El prefijo se omite por rapidez en sustituciones rutinarias.

Senal de deteccion:
La oposicion estimada resulta absurdamente pequena o grande para la frecuencia dada.

Mini-ejemplo de contraste:
Un mismo valor numerico cambia tres ordenes de magnitud entre mH y H.

Correccion conceptual:
Normaliza unidades SI antes de cualquier operacion formal.

## Errores de interpretación

### Error 7: leer potencia reactiva como consumo activo
Por que parece correcto:
Ambas magnitudes aparecen en estudios de potencia y se reportan en la misma evaluacion de sistema.

Senal de deteccion:
Se juzga eficiencia del sistema solo por aumento de [[Ql]].

Mini-ejemplo de contraste:
El intercambio reactivo puede crecer sin igual crecimiento de potencia activa neta.

Correccion conceptual:
Separa explicitamente balance reactivo y balance activo.

### Error 8: cerrar solucion sin causalidad fisica
Por que parece correcto:
Una cuenta numerica cerrada produce sensacion de problema resuelto.

Senal de deteccion:
La conclusion final repite valores pero no explica que variable domino el resultado.

Mini-ejemplo de contraste:
Dos casos con misma [[V]] pueden dar distinta [[Il]] por cambios en [[L]] o [[f]].

Correccion conceptual:
Cierra cada resolucion con una lectura causa-efecto y un limite de validez.

## Regla de autocontrol rápido
Antes de validar tu respuesta, verifica cuatro puntos: tipo de magnitud de entrada, conversion de unidades, coherencia de tendencia y validez del modelo. Si cualquiera falla, la interpretacion no esta lista para uso tecnico.
`;export{e as default};
