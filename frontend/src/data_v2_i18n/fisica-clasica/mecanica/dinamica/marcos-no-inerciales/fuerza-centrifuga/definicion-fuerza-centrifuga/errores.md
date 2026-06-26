# Errores frecuentes: Definicion fuerza centrifuga

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### Por que parece correcto
Porque el resultado [[F_cf]] aparece al final de una cuenta y da la impresion de ser "la causa" de lo que sucede.

#### Por que es incorrecto
En este leaf, [[F_cf]] es una lectura inercial de marco rotatorio; no es la causa material primaria de la trayectoria.

#### Senal de deteccion
Se afirma que [[F_cf]] "empuja" por si sola sin distinguir marco de referencia.

#### Correccion conceptual
Separar descripcion en marco rotatorio y fuerzas reales en marco inercial.

#### Mini-ejemplo
Si una masa gira a [[omega]] constante, la interaccion real de soporte mantiene la trayectoria; [[F_cf]] organiza la descripcion del observador que gira.

### Error 2: Aplicar la formula mecanicamente sin validar el contexto

#### Por que parece correcto
La formula funciona en muchos ejercicios y parece universal.

#### Por que es incorrecto
Fuera de su dominio, el modelo simple pierde precision aunque el algebra este bien ejecutada.

#### Senal de deteccion
Se calcula [[F_cf]] sin comprobar estabilidad de giro ni definicion de [[r]].

#### Correccion conceptual
Antes de calcular, verificar hipotesis del modelo y calidad de datos.

#### Mini-ejemplo
Usar [[m]], [[omega]] y [[r]] de una maquina con fuerte vibracion sin filtrar transitorios produce una lectura engañosa.

### Error 3: Confundir magnitudes similares

#### Por que parece correcto
[[omega]], [[v]] y [[a_cf]] aparecen relacionadas y pueden parecer intercambiables.

#### Por que es incorrecto
Cada magnitud cumple un rol distinto: regimen angular, regimen tangencial o lectura por unidad de masa.

#### Senal de deteccion
Se sustituyen valores de [[v]] en ecuaciones de [[omega]] sin pasar por la relacion correspondiente.

#### Correccion conceptual
Usar conversion explicita y mantener trazabilidad de unidades.

#### Mini-ejemplo
Primero aplicar la relacion tangencial del leaf para obtener [[v]] o [[omega]] coherente; despues calcular [[F_cf]].

## Errores de modelo

### Error 4: No reconocer cuando el modelo simplificado falla

#### Por que parece correcto
En condiciones nominales el modelo responde bien y genera confianza.

#### Por que es incorrecto
Cuando aparecen efectos no modelados, la diferencia prediccion-medicion crece y el modelo deja de representar el sistema.

#### Senal de deteccion
Desviaciones repetidas mayores al 10% entre calculo y medicion.

#### Correccion conceptual
Cambiar a modelo extendido cuando la discrepancia supera umbral operacional.

#### Mini-ejemplo
Si [[F_cf]] calculada es 80 N y la lectura repetida es 95 N, no conviene seguir con el modelo minimo sin diagnostico adicional.

### Error 5: Ignorar los limites del modelo conocidos

#### Por que parece correcto
El resultado numerico puede verse razonable a primera vista.

#### Por que es incorrecto
Un numero plausible no valida hipotesis mal planteadas.

#### Senal de deteccion
No se documenta el limite de validez junto al resultado.

#### Correccion conceptual
Incluir siempre condicion de uso y criterio de descarte del modelo.

#### Mini-ejemplo
Reportar [[a_cf]] sin aclarar que hubo transitorio de arranque fuerte lleva a decisiones inseguras.

## Errores matematicos

### Error 6: Despejes algebraicos descuidados

#### Por que parece correcto
El despeje parece mecanico y rapido.

#### Por que es incorrecto
Un despeje sin control dimensional puede cambiar totalmente la escala fisica.

#### Senal de deteccion
Unidades finales no coinciden con N o m/s^2 segun la salida esperada.

#### Correccion conceptual
Hacer chequeo dimensional en cada paso critico.

#### Mini-ejemplo
Escribir [[F_cf]] = [[m]] [[omega]] [[r]] en lugar de [[m]] [[omega]]^2 [[r]] reduce artificialmente la carga estimada.

### Error 7: Olvidar constantes o unidades

#### Por que parece correcto
En tareas rapidas las unidades se omiten por costumbre.

#### Por que es incorrecto
La omision de unidades rompe comparabilidad y puede generar errores de orden de magnitud.

#### Senal de deteccion
Resultados incompatibles entre dos rutas algebraicas supuestamente equivalentes.

#### Correccion conceptual
Normalizar unidades SI y verificar equivalencia entre rutas con [[omega]] y [[v]].

#### Mini-ejemplo
Si [[v]] se toma en km/h y [[r]] en m sin conversion, [[F_cf]] queda inflada de manera severa.

## Errores de interpretacion

### Error 8: Sobreestimar precision del resultado

#### Por que parece correcto
Muchos decimales transmiten falsa sensacion de exactitud.

#### Por que es incorrecto
La precision de salida no puede superar la calidad del modelo ni de la medicion.

#### Senal de deteccion
Se reporta un valor con exceso de cifras sin intervalo ni contexto.

#### Correccion conceptual
Ajustar cifras significativas al nivel real de incertidumbre.

#### Mini-ejemplo
Publicar [[F_cf]] = 28.81234 N cuando [[m]] y [[r]] tienen dos cifras utiles no agrega informacion fisica real.

### Error 9: Quedarse solo con el numero

#### Por que parece correcto
El ejercicio parece terminado al obtener una cifra.

#### Por que es incorrecto
Sin interpretacion causal no hay criterio de decision.

#### Senal de deteccion
No se explica que variable domina el comportamiento ni que riesgo operativo implica.

#### Correccion conceptual
Cerrar siempre con lectura fisica y limite de validez.

#### Mini-ejemplo
Un aumento de [[omega]] del 20% puede elevar [[F_cf]] mucho mas que 20%; si no se interpreta, se subestima el riesgo.

## Regla de autocontrol rapido

1. ¿La unidad final coincide con la magnitud reportada?
2. ¿El resultado respeta el orden de magnitud esperado?
3. ¿Se distinguio marco rotatorio de fuerzas reales?
4. ¿Se explicito limite de validez del modelo?
5. ¿Se tradujo el numero a decision operativa?
