const e=`# Errores frecuentes: Ejemplos tipicos\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
#### por que parece correcto\r
Como [[Fc]] suele aparecer al final del calculo, muchos estudiantes la tratan como "fuerza nueva" que aparece por girar.\r
\r
#### por que es incorrecto\r
La cadena causal real es la inversa: fuerzas reales generan [[Frad]], y esa resultante produce [[ac]] para cambiar direccion de la velocidad.\r
\r
#### senal de deteccion\r
El diagrama agrega fuerza centripeta extra en lugar de identificar [[Tn]], [[fs]], [[Nn]] o gravedad como fuentes reales.\r
\r
#### correccion conceptual\r
Primero dibuja fuerzas reales, luego proyecta radialmente y solo despues interpreta la suma como exigencia centripeta.\r
\r
#### mini-ejemplo\r
Mal: "ademas de tension hay fuerza centripeta".\r
Bien: "la tension [[Tn]] es la fuente radial en este caso".\r
\r
### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto\r
\r
#### por que parece correcto\r
Todas las ecuaciones del leaf contienen [[v]], [[r]] y fuerzas, por lo que parecen intercambiables.\r
\r
#### por que es incorrecto\r
Cada formula exige una escena distinta: cuerda, peralte, loop o orbita. Usarla fuera de contexto da resultados sin significado fisico.\r
\r
#### senal de deteccion\r
Se calcula velocidad orbital con datos de curva plana o se usa formula de peralte sin declarar [[th]].\r
\r
#### correccion conceptual\r
Antes de sustituir, clasificar el subcaso tipico y su fuente radial dominante.\r
\r
#### mini-ejemplo\r
Mal: usar [[mu]] en un problema orbital.\r
Bien: usar [[G]] y [[M]] cuando la fuente radial es gravitatoria.\r
\r
### Error 3: Confundir magnitudes similares\r
\r
#### por que parece correcto\r
[[Frad]] y [[Fc]] se parecen semanticamente, y [[m]] se confunde con peso.\r
\r
#### por que es incorrecto\r
[[Frad]] es la resultante radial con signo/convenio; [[Fc]] suele usarse como modulo requerido. [[m]] no es fuerza.\r
\r
#### senal de deteccion\r
Aparecen unidades de newton asignadas a [[m]] o se mezclan [[Frad]] y [[Fc]] sin explicitar convencion.\r
\r
#### correccion conceptual\r
Separar siempre "magnitud fisica", "unidad" y "rol causal" antes de operar.\r
\r
#### mini-ejemplo\r
Mal: "[[m]] = 1200 N".\r
Bien: "[[m]] = 1200 kg y el peso es [[m]] por [[g]]".\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
#### por que parece correcto\r
El modelo ideal funciona en ejercicios limpios y genera exceso de confianza.\r
\r
#### por que es incorrecto\r
Con deslizamiento, oscilaciones acopladas o trayectoria no circular, la ecuacion simple deja de representar la fisica dominante.\r
\r
#### senal de deteccion\r
La prediccion falla de forma sistematica aunque la algebra este correcta.\r
\r
#### correccion conceptual\r
Definir umbral de discrepancia y cambiar de modelo cuando se supera repetidamente.\r
\r
#### mini-ejemplo\r
Mal: mantener modelo de cuerda rigida con oscilacion grande fuera de plano.\r
Bien: introducir modelo dinamico acoplado.\r
\r
### Error 5: Ignorar los límites del modelo conocidos\r
\r
#### por que parece correcto\r
Se asume que una formula valida una vez lo es siempre.\r
\r
#### por que es incorrecto\r
Toda formula vive en un dominio de validez; fuera de el no hay garantia causal.\r
\r
#### senal de deteccion\r
Se reportan resultados sin supuestos ni condiciones de aplicacion.\r
\r
#### correccion conceptual\r
Acompanhar cada resultado con condicion de validez y margen operativo.\r
\r
#### mini-ejemplo\r
Mal: publicar velocidad segura sin mencionar estado de adherencia.\r
Bien: reportar resultado con escenario de [[mu]] declarado.\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
#### por que parece correcto\r
Las ecuaciones parecen directas y se despejan de memoria.\r
\r
#### por que es incorrecto\r
Un despeje incorrecto invierte dependencias y altera decisiones de seguridad.\r
\r
#### senal de deteccion\r
Se concluye que subir [[r]] aumenta exigencia radial a [[v]] fija.\r
\r
#### correccion conceptual\r
Verificar monotonia fisica esperada despues de cada despeje.\r
\r
#### mini-ejemplo\r
Mal: interpretar tendencia opuesta a la ecuacion radial.\r
Bien: comprobar que mayor [[r]] reduce demanda para [[v]] dada.\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
#### por que parece correcto\r
Se subestima el impacto de conversiones o de constantes como [[G]].\r
\r
#### por que es incorrecto\r
Errores de unidad cambian orden de magnitud y rompen interpretacion.\r
\r
#### senal de deteccion\r
Velocidades orbitales absurdas o resultados incompatibles con escalas reales.\r
\r
#### correccion conceptual\r
Unificar unidades SI desde el inicio y revisar dimensiones al final.\r
\r
#### mini-ejemplo\r
Mal: usar km en [[r]] con [[G]] en SI sin conversion.\r
Bien: convertir todo a SI antes de evaluar.\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite\r
\r
#### por que parece correcto\r
Muchos decimales dan apariencia de exactitud.\r
\r
#### por que es incorrecto\r
La precision numerica no reemplaza incertidumbre de modelo ni de medicion.\r
\r
#### senal de deteccion\r
Resultados con seis decimales sin discusion de margen.\r
\r
#### correccion conceptual\r
Usar cifras significativas coherentes con calidad de datos.\r
\r
#### mini-ejemplo\r
Mal: reportar velocidad limite exacta sin banda de validez.\r
Bien: reportar rango operativo y condicion de uso.\r
\r
### Error 9: Saltarte la interpretación física del resultado calculado\r
\r
#### por que parece correcto\r
Obtener un numero se confunde con resolver el problema.\r
\r
#### por que es incorrecto\r
Sin lectura causal, no se identifica que variable conviene intervenir.\r
\r
#### senal de deteccion\r
La solucion termina en ecuacion sin recomendacion fisica.\r
\r
#### correccion conceptual\r
Cerrar siempre con accion: que variable cambiar y por que reduce riesgo.\r
\r
#### mini-ejemplo\r
Mal: "resultado final obtenido".\r
Bien: "bajar [[v]] o aumentar [[r]] reduce demanda radial en este subcaso".\r
\r
## Regla de autocontrol rápido\r
\r
- ¿Identifique la fuente radial real del caso?\r
- ¿Diferencie [[Frad]] y [[Fc]] con claridad?\r
- ¿Valide unidades y orden de magnitud?\r
- ¿Declare limites del modelo?\r
- ¿Cierre con una decision fisica accionable?\r
\r
Si alguna respuesta es no, el ejercicio aun no esta cerrado.\r
`;export{e as default};
