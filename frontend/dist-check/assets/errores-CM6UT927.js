const e=`## Errores conceptuales
### Error 1: creer que la corriente se consume al atravesar resistencias
Por que parece correcto:
La intuicion cotidiana confunde caida de tension con perdida de corriente, y eso lleva a pensar que [[I]] disminuye tras cada componente.
Senal de deteccion:
Si en una rama serie reportas valores distintos de [[I]] para [[R1]], [[R2]] y [[R3]], hay incoherencia topologica.
Mini-ejemplo de contraste:
Con una sola ruta cerrada, la carga no puede elegir caminos alternativos; por eso el flujo de corriente es comun.
Correccion conceptual:
Distinguir entre corriente comun y reparto de [[Vi]]. Lo que cambia en serie es la caida local, no la corriente de rama.

### Error 2: suponer que [[Req]] puede ser menor que una resistencia individual positiva
Por que parece correcto:
Se mezcla sin querer la regla de paralelo con el caso serie.
Senal de deteccion:
Si [[Req]] calculada sale menor que [[R1]] o [[R2]] siendo todas positivas, el resultado no es fisicamente consistente.
Mini-ejemplo de contraste:
En serie cada [[Ri]] agrega oposicion; no existe cancelacion pasiva entre resistencias.
Correccion conceptual:
Usar siempre la regla de suma para serie y validar monotonia de [[Req]].

## Errores de modelo
### Error 3: usar modelo ideal cuando la carga externa altera el reparto
Por que parece correcto:
El esquema de pizarra muestra serie pura y se asume que esa topologia no cambia al conectar la salida.
Senal de deteccion:
La [[Vi]] de salida cae de forma notable al conectar la carga real.
Mini-ejemplo de contraste:
Un repartidor en vacio puede dar salida esperada, pero con carga baja la red efectiva deja de ser la ideal inicial.
Correccion conceptual:
Incluir impedancia de carga en el modelo cuando su magnitud no es mucho mayor que el tramo de salida.

### Error 4: ignorar deriva termica de [[Ri]]
Por que parece correcto:
Se trabaja con valores nominales y se olvida que calentamiento cambia parametros.
Senal de deteccion:
[[I]] medida deriva con el tiempo aun con [[Vt]] estable.
Mini-ejemplo de contraste:
Si un componente se calienta, su resistencia efectiva cambia y modifica [[Req]].
Correccion conceptual:
Verificar estabilidad temporal y, si hace falta, pasar a modelo extendido con dependencia termica.

## Errores matemáticos
### Error 5: mezclar ohm y kiloohm sin conversion
Por que parece correcto:
Los numeros parecen razonables en papel, pero las unidades no son homogéneas.
Senal de deteccion:
[[I]] sale dos o tres ordenes de magnitud fuera de rango esperado.
Mini-ejemplo de contraste:
Una resistencia en kiloohm escrita como ohm produce corrientes exageradas.
Correccion conceptual:
Normalizar unidades antes de calcular [[Req]] y [[I]].

### Error 6: no cerrar malla con [[Vt]]
Por que parece correcto:
Se confia en resultados intermedios y se omite comprobacion final.
Senal de deteccion:
La suma de [[Vi]] no reconstruye la fuente.
Mini-ejemplo de contraste:
Un signo invertido en una caida local puede arruinar todo el balance aunque el resto de cuentas parezca correcto.
Correccion conceptual:
Incluir cierre de malla como paso obligatorio de validacion.

## Errores de interpretación
### Error 7: concluir que menor [[I]] implica siempre mayor seguridad
Por que parece correcto:
Se observa solo la variable global de corriente y se ignora la distribucion local.
Senal de deteccion:
Un resistor concentra gran [[Vi]] y potencia, aunque la corriente total sea moderada.
Mini-ejemplo de contraste:
Incrementar un [[Ri]] puede reducir [[I]] global y al mismo tiempo aumentar esfuerzo local en ese elemento.
Correccion conceptual:
Interpretar conjuntamente [[I]], [[Vi]] y potencia por componente.

### Error 8: leer una sola magnitud y declarar el problema resuelto
Por que parece correcto:
La respuesta numerica de una ecuacion se confunde con comprension fisica completa.
Senal de deteccion:
No se discuten condiciones de validez ni sensibilidad a carga.
Mini-ejemplo de contraste:
Un resultado correcto en nominal puede fallar en operacion real por tolerancia o carga externa.
Correccion conceptual:
Acompanhar cada resultado con causalidad fisica, dominio de validez y chequeo de coherencia.

## Regla de autocontrol rápido
1. Confirmar topologia serie real antes de aplicar ecuaciones.
2. Normalizar unidades de [[R1]], [[R2]], [[R3]], [[Ri]] y [[Vt]].
3. Calcular [[Req]] y verificar que sea no negativa y coherente.
4. Calcular [[I]] y revisar orden de magnitud.
5. Calcular [[Vi]] por elemento y validar reparto fisico.
6. Cerrar malla frente a [[Vt]].
7. Evaluar si carga o temperatura exigen migrar de modelo.

Si estas siete verificaciones se cumplen, la probabilidad de error conceptual, matematico y de interpretacion cae de forma drastica.
`;export{e as default};
