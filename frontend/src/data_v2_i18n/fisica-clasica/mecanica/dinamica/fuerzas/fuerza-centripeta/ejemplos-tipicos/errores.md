# Errores frecuentes: Ejemplos tipicos

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### por que parece correcto
Como [[Fc]] suele aparecer al final del calculo, muchos estudiantes la tratan como "fuerza nueva" que aparece por girar.

#### por que es incorrecto
La cadena causal real es la inversa: fuerzas reales generan [[Frad]], y esa resultante produce [[ac]] para cambiar direccion de la velocidad.

#### senal de deteccion
El diagrama agrega fuerza centripeta extra en lugar de identificar [[Tn]], [[fs]], [[Nn]] o gravedad como fuentes reales.

#### correccion conceptual
Primero dibuja fuerzas reales, luego proyecta radialmente y solo despues interpreta la suma como exigencia centripeta.

#### mini-ejemplo
Mal: "ademas de tension hay fuerza centripeta".
Bien: "la tension [[Tn]] es la fuente radial en este caso".

### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto

#### por que parece correcto
Todas las ecuaciones del leaf contienen [[v]], [[r]] y fuerzas, por lo que parecen intercambiables.

#### por que es incorrecto
Cada formula exige una escena distinta: cuerda, peralte, loop o orbita. Usarla fuera de contexto da resultados sin significado fisico.

#### senal de deteccion
Se calcula velocidad orbital con datos de curva plana o se usa formula de peralte sin declarar [[th]].

#### correccion conceptual
Antes de sustituir, clasificar el subcaso tipico y su fuente radial dominante.

#### mini-ejemplo
Mal: usar [[mu]] en un problema orbital.
Bien: usar [[G]] y [[M]] cuando la fuente radial es gravitatoria.

### Error 3: Confundir magnitudes similares

#### por que parece correcto
[[Frad]] y [[Fc]] se parecen semanticamente, y [[m]] se confunde con peso.

#### por que es incorrecto
[[Frad]] es la resultante radial con signo/convenio; [[Fc]] suele usarse como modulo requerido. [[m]] no es fuerza.

#### senal de deteccion
Aparecen unidades de newton asignadas a [[m]] o se mezclan [[Frad]] y [[Fc]] sin explicitar convencion.

#### correccion conceptual
Separar siempre "magnitud fisica", "unidad" y "rol causal" antes de operar.

#### mini-ejemplo
Mal: "[[m]] = 1200 N".
Bien: "[[m]] = 1200 kg y el peso es [[m]] por [[g]]".

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

#### por que parece correcto
El modelo ideal funciona en ejercicios limpios y genera exceso de confianza.

#### por que es incorrecto
Con deslizamiento, oscilaciones acopladas o trayectoria no circular, la ecuacion simple deja de representar la fisica dominante.

#### senal de deteccion
La prediccion falla de forma sistematica aunque la algebra este correcta.

#### correccion conceptual
Definir umbral de discrepancia y cambiar de modelo cuando se supera repetidamente.

#### mini-ejemplo
Mal: mantener modelo de cuerda rigida con oscilacion grande fuera de plano.
Bien: introducir modelo dinamico acoplado.

### Error 5: Ignorar los límites del modelo conocidos

#### por que parece correcto
Se asume que una formula valida una vez lo es siempre.

#### por que es incorrecto
Toda formula vive en un dominio de validez; fuera de el no hay garantia causal.

#### senal de deteccion
Se reportan resultados sin supuestos ni condiciones de aplicacion.

#### correccion conceptual
Acompanhar cada resultado con condicion de validez y margen operativo.

#### mini-ejemplo
Mal: publicar velocidad segura sin mencionar estado de adherencia.
Bien: reportar resultado con escenario de [[mu]] declarado.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

#### por que parece correcto
Las ecuaciones parecen directas y se despejan de memoria.

#### por que es incorrecto
Un despeje incorrecto invierte dependencias y altera decisiones de seguridad.

#### senal de deteccion
Se concluye que subir [[r]] aumenta exigencia radial a [[v]] fija.

#### correccion conceptual
Verificar monotonia fisica esperada despues de cada despeje.

#### mini-ejemplo
Mal: interpretar tendencia opuesta a la ecuacion radial.
Bien: comprobar que mayor [[r]] reduce demanda para [[v]] dada.

### Error 7: Olvidar constantes fundamentales o unidades

#### por que parece correcto
Se subestima el impacto de conversiones o de constantes como [[G]].

#### por que es incorrecto
Errores de unidad cambian orden de magnitud y rompen interpretacion.

#### senal de deteccion
Velocidades orbitales absurdas o resultados incompatibles con escalas reales.

#### correccion conceptual
Unificar unidades SI desde el inicio y revisar dimensiones al final.

#### mini-ejemplo
Mal: usar km en [[r]] con [[G]] en SI sin conversion.
Bien: convertir todo a SI antes de evaluar.

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

#### por que parece correcto
Muchos decimales dan apariencia de exactitud.

#### por que es incorrecto
La precision numerica no reemplaza incertidumbre de modelo ni de medicion.

#### senal de deteccion
Resultados con seis decimales sin discusion de margen.

#### correccion conceptual
Usar cifras significativas coherentes con calidad de datos.

#### mini-ejemplo
Mal: reportar velocidad limite exacta sin banda de validez.
Bien: reportar rango operativo y condicion de uso.

### Error 9: Saltarte la interpretación física del resultado calculado

#### por que parece correcto
Obtener un numero se confunde con resolver el problema.

#### por que es incorrecto
Sin lectura causal, no se identifica que variable conviene intervenir.

#### senal de deteccion
La solucion termina en ecuacion sin recomendacion fisica.

#### correccion conceptual
Cerrar siempre con accion: que variable cambiar y por que reduce riesgo.

#### mini-ejemplo
Mal: "resultado final obtenido".
Bien: "bajar [[v]] o aumentar [[r]] reduce demanda radial en este subcaso".

## Regla de autocontrol rápido

- ¿Identifique la fuente radial real del caso?
- ¿Diferencie [[Frad]] y [[Fc]] con claridad?
- ¿Valide unidades y orden de magnitud?
- ¿Declare limites del modelo?
- ¿Cierre con una decision fisica accionable?

Si alguna respuesta es no, el ejercicio aun no esta cerrado.
