const e=`## Errores conceptuales

### Error 1: creer que amplitud y valor eficaz son equivalentes
Por que parece correcto:
Ambas magnitudes usan voltios o amperios y muchas veces aparecen juntas en tablas.

Senal de deteccion:
Se usa [[Vmax]] directamente donde el problema pide consumo energético o potencia media.

Mini-ejemplo de contraste:
Una señal puede tener [[Vmax]] alta y aun así requerir convertir a [[Vrms]] para evaluar [[P]].

Correccion conceptual:
[[Vmax]] describe pico instantáneo. [[Vrms]] describe equivalencia energética. No son intercambiables.

### Error 2: tratar [[phi]] como dato decorativo
Por que parece correcto:
El enfoque inicial suele centrarse en amplitud y frecuencia, dejando fase al final.

Senal de deteccion:
La potencia activa se discute sin mencionar [[phi]] ni su impacto causal.

Mini-ejemplo de contraste:
Con [[Vrms]] e [[Irms]] fijos, cambiar [[phi]] cambia [[P]] de forma significativa.

Correccion conceptual:
[[phi]] organiza la transferencia útil en AC y debe entrar explícitamente en la lectura física.

## Errores de modelo

### Error 3: asumir senoide pura en señales distorsionadas
Por que parece correcto:
Las fórmulas básicas son simples y producen resultados rápidos.

Senal de deteccion:
Se aplica la conversión estándar de pico a RMS sin revisar forma de onda.

Mini-ejemplo de contraste:
Si el osciloscopio muestra recorte o armónicos fuertes, la conversión ideal deja de ser exacta.

Correccion conceptual:
Verifica dominancia sinusoidal antes de aplicar relaciones de modelo mínimo.

### Error 4: usar relaciones temporales sin control de unidad
Por que parece correcto:
Frecuencia y frecuencia angular parecen casi la misma variable.

Senal de deteccion:
Los ciclos temporales no coinciden con medición observada.

Mini-ejemplo de contraste:
Sustituir [[omega]] por [[f]] sin factor 2π desplaza toda la escala temporal.

Correccion conceptual:
Mantén explícita la conversión entre [[f]] y [[omega]] en cada paso.

## Errores matemáticos

### Error 5: escribir período con fórmula incorrecta
Por que parece correcto:
La presencia de 2π en expresiones angulares induce confusión por analogía.

Senal de deteccion:
[[T]] calculado no coincide con reciprocidad esperada frente a [[f]].

Mini-ejemplo de contraste:
Con 50 Hz, el período correcto es 0.02 s, no 0.1256 s.

Correccion conceptual:
Usa siempre la relación inversa directa entre frecuencia y período.

### Error 6: omitir factor de fase en potencia activa
Por que parece correcto:
Multiplicar [[Vrms]] por [[Irms]] parece suficiente cuando la carga luce "estable".

Senal de deteccion:
Se reporta [[P]] sin justificación del desfase.

Mini-ejemplo de contraste:
Para igual [[Vrms]] e [[Irms]], potencia activa disminuye cuando aumenta [[phi]].

Correccion conceptual:
Incluye el factor trigonométrico asociado a [[phi]] en cualquier cálculo de [[P]].

## Errores de interpretación

### Error 7: mezclar descripción temporal y descripción energética
Por que parece correcto:
La señal puede visualizarse bien aunque el balance energético esté mal interpretado.

Senal de deteccion:
Conclusiones sobre rendimiento se basan solo en forma de [[v_t]].

Mini-ejemplo de contraste:
Una forma temporal similar puede tener distinta potencia útil por variación de fase.

Correccion conceptual:
Conecta siempre lectura temporal con [[Vrms]], [[Irms]] y [[P]].

### Error 8: ignorar trazabilidad entre instrumentos
Por que parece correcto:
Se asume que todos los equipos miden "la misma tensión".

Senal de deteccion:
No se distingue entre lectura de osciloscopio y lectura RMS.

Mini-ejemplo de contraste:
Osciloscopio reporta picos; medidor RMS reporta equivalencia energética.

Correccion conceptual:
Asigna cada medición a su magnitud física antes de comparar resultados.

## Regla de autocontrol rápido
Antes de cerrar una resolución, responde: ¿etiqueté cada dato como instantáneo, pico o eficaz?, ¿[[f]] y [[omega]] están convertidas con coherencia?, ¿[[T]] es recíproco de [[f]]?, ¿incluí [[phi]] al evaluar [[P]]? Si una respuesta falla, la conclusión no es confiable.
`;export{e as default};
