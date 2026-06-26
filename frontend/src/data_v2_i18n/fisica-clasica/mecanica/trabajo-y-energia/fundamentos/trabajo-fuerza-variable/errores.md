# Errores comunes

## Errores conceptuales

### Error
Creer que todo problema de trabajo admite la misma receta de fuerza constante.

Por que parece correcto
La formula basica es rapida y suele aparecer en los primeros ejercicios de mecanica.

Senal de deteccion
La solucion ignora perfil variable y no define tramo entre [[x1]] y [[x2]].

Mini-ejemplo de contraste
Con el mismo desplazamiento neto, dos perfiles de fuerza pueden producir [[W]] muy distinta.

Correccion conceptual
Reconocer primero la variabilidad del perfil y tratar [[W]] como acumulacion firmada.

### Error
Interpretar [[W]] solo como modulo positivo.

Por que parece correcto
Se asocia energia con cantidad positiva y se omite su sentido de transferencia.

Senal de deteccion
No hay lectura de signo ni comentario sobre balance entre regiones de aporte y extraccion.

Mini-ejemplo de contraste
Un tramo puede sumar energia y otro restarla; el saldo no es suma de modulos.

Correccion conceptual
Mantener signo en cada contribucion y explicar su efecto causal final.

## Errores de modelo

### Error
Aplicar modelo lineal con [[k]] constante fuera del rango lineal.

Por que parece correcto
La expresion cerrada ahorra tiempo y parece universal.

Senal de deteccion
El ajuste frente a datos empeora sistematicamente al acercarse a extremos de recorrido.

Mini-ejemplo de contraste
En un resorte real, la zona final puede salirse del comportamiento lineal esperado.

Correccion conceptual
Verificar dominio lineal antes de usar [[k]] constante y escalar a tramos cuando corresponda.

### Error
Definir [[x1]] y [[x2]] en referencias espaciales distintas.

Por que parece correcto
Se cambia el origen a mitad del calculo para simplificar una parte local.

Senal de deteccion
Rehacer la cuenta con referencia unica cambia signo o escala de [[W]].

Mini-ejemplo de contraste
El mismo proceso puede parecer aporte o extraccion por inconsistencia de limites.

Correccion conceptual
Fijar referencia inicial y mantenerla hasta la interpretacion final.

## Errores matemáticos

### Error
Integrar de una vez cuando hay cambios de signo sin particion.

Por que parece correcto
Una unica integral luce mas compacta que resolver por segmentos.

Senal de deteccion
El resultado contradice lectura geometrica del area orientada en F-x.

Mini-ejemplo de contraste
Si parte del perfil esta sobre el eje y parte bajo el eje, debe existir cancelacion parcial.

Correccion conceptual
Partir el dominio en subtramos y sumar contribuciones firmadas.

### Error
Mezclar unidades al usar [[Fmed]] o limites.

Por que parece correcto
La cuenta numerica cierra aunque haya escalas incompatibles.

Senal de deteccion
Comparar con referencia integral produce discrepancias grandes sin explicacion fisica.

Mini-ejemplo de contraste
Usar centimetros en un extremo y metros en otro deforma [[W]] por factores grandes.

Correccion conceptual
Normalizar a SI antes de operar y validar dimensiones al cerrar.

## Errores de interpretación

### Error
Entregar numero final sin declarar validez de modelo.

Por que parece correcto
Muchos formatos de evaluacion priorizan resultado numerico sobre argumento fisico.

Senal de deteccion
No se reporta cuando conviene cambiar a integral por tramos ni error esperado.

Mini-ejemplo de contraste
Dos metodos pueden coincidir en un caso y divergir con pequenos cambios de intervalo.

Correccion conceptual
Incluir alcance, limites y criterio de escalado junto con el resultado.

### Error
Presentar estimacion como si fuera valor exacto.

Por que parece correcto
La aproximacion por [[Fmed]] produce una salida limpia y unica.

Senal de deteccion
No se etiqueta la salida como aproximada ni se acompana de tolerancia.

Mini-ejemplo de contraste
En perfiles no lineales severos, la media puede sesgar el trabajo de forma sistematica.

Correccion conceptual
Etiquetar estimacion, declarar criterio y comparar con referencia cuando sea posible.

## Regla de autocontrol rápido

1. Declara sistema, referencia y limites [[x1]] y [[x2]].
2. Elige entre integral exacta, integral por tramos o [[Fmed]] con justificacion.
3. Conserva signos de todas las contribuciones.
4. Verifica dimensiones y orden de magnitud.
5. Cierra con lectura fisica y limite de validez del modelo.