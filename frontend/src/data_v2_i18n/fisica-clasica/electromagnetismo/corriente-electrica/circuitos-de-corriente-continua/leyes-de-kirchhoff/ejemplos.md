# Ejemplo tipo examen


## Enunciado

Se analiza una red de corriente continua con un nodo de tres ramas y un lazo resistivo principal. Se pide obtener corriente de salida nodal, verificar cierre de malla y justificar interpretacion fisica de signos y magnitudes.

## Datos

Se miden dos corrientes de rama en el nodo principal y la tension de la fuente del lazo. Tambien se conocen dos resistencias de la malla y una resistencia local de un tramo de interes para verificacion adicional.

## Definición del sistema

En el nodo participan [[corriente_de_rama_1]], [[corriente_de_rama_2]] y [[corriente_de_rama_3]]. En la malla participan [[tension_de_fuente]], [[corriente_de_malla]], [[resistencia_1]] y [[resistencia_2]]. En la verificacion local participan [[caida_de_tension]], [[corriente_de_malla]] y [[resistencia_equivalente_local]]. El objetivo es cerrar red con coherencia conservativa y trazabilidad de signo.

## Modelo físico

Se usa modelo DC lineal con elementos concentrados. Conservacion de carga para nodo, conservacion de potencial para malla y relacion constitutiva local para tramo resistivo.

El anclaje al leaf es explicito: el cierre nodal conecta [[corriente_de_rama_1]], [[corriente_de_rama_2]] y [[corriente_de_rama_3]]; el cierre de malla conecta [[tension_de_fuente]], [[corriente_de_malla]], [[resistencia_1]] y [[resistencia_2]]; y la verificacion local conecta [[caida_de_tension]], [[corriente_de_malla]] y [[resistencia_equivalente_local]] en el mismo tramo fisico.

## Justificación del modelo

El sistema opera en regimen estable y las ramas analizadas son resistivas en la ventana de trabajo. No hay evidencia de transitorio dominante ni de comportamiento no lineal que invalide el cierre basico.

Tambien se exige coherencia metrologica: las magnitudes usadas pertenecen al mismo estado operativo y conservan la misma convencion de signos. Sin esta condicion, un aparente desbalance podria venir de referencia inconsistente y no de un problema fisico real.

Fisicamente, el modelo se justifica porque las relaciones del leaf representan mecanismos identificables: [[corriente_de_rama_1]], [[corriente_de_rama_2]] y [[corriente_de_rama_3]] describen continuidad de carga en nodo; [[tension_de_fuente]], [[resistencia_1]] y [[resistencia_2]] describen reparto de potencial en lazo; [[caida_de_tension]], [[corriente_de_malla]] y [[resistencia_equivalente_local]] describen disipacion local. No son ecuaciones decorativas, sino restricciones de conservacion sobre objetos reales de la red.

## Resolución simbólica

Balance nodal:

{{f:kcl_nodo}}

Esta ecuacion expresa conservacion de carga entre [[corriente_de_rama_1]], [[corriente_de_rama_2]] y [[corriente_de_rama_3]] con referencia fija.

Balance de malla:

{{f:kvl_malla}}

Esta ecuacion expresa cierre de potencial de lazo entre la fuente [[tension_de_fuente]] y las caidas asociadas a [[resistencia_1]] y [[resistencia_2]].

Relación local:

{{f:ohm_aux}}

Esta relacion mantiene coherencia local al vincular [[caida_de_tension]], [[corriente_de_malla]] y [[resistencia_equivalente_local]] en un mismo componente.

## Sustitución numérica

Se sustituyen valores medidos en el balance nodal para obtener [[corriente_de_rama_3]]. El resultado se conserva con su signo original para interpretar direccion real respecto a la referencia.

Luego se sustituyen datos de [[tension_de_fuente]], [[resistencia_1]] y [[resistencia_2]] en la ecuacion de malla para estimar [[corriente_de_malla]]. Este valor se utiliza para contrastar caidas de potencial de cada tramo y verificar que la suma algebraica del lazo se mantenga.

Con [[corriente_de_malla]] y [[resistencia_equivalente_local]] del tramo local, se estima [[caida_de_tension]] y se compara con medicion directa. Si la diferencia supera tolerancia esperada, se revisa si la resistencia efectiva de conexion fue correctamente representada.

## Validación dimensional

En el nodo, todos los terminos estan en amperios. En la malla, todos los terminos estan en voltios. En la relacion local, el producto de corriente por resistencia produce tension. El cierre dimensional completo valida consistencia de formulacion.

Tambien se aplica validacion de tendencia. Con fuente fija, aumentar resistencia equivalente reduce corriente de malla. Con corrientes de entrada mayores en nodo, la corriente de salida compatible debe aumentar en magnitud algebraica.

## Interpretación física

El balance nodal expresa continuidad de carga. El balance de malla expresa cierre energetico de potencial en lazo. La relacion local conecta ambos niveles con comportamiento de tramo.

La lectura del signo es clave. Si una corriente resulta negativa, no se corrige por estetica; se interpreta como direccion real opuesta a la suposicion. Esta interpretacion hace al resultado util para diagnostico, no solo para examen.

La solucion completa se acepta cuando nodo, malla y tramo son compatibles entre si. Si uno de los tres niveles falla, el problema no esta cerrado aunque una incognita aislada parezca razonable.

Por eso la interpretacion final no se limita a reportar cifras: identifica que magnitud gobierna el reparto de corriente, que magnitud gobierna el reparto de potencial y que evidencia de medicion sostiene la decision tecnica.

La lectura fisica final tambien separa causa y sintoma. Un desbalance de [[corriente_de_rama_3]] puede ser sintoma de una conexion degradada; la causa se confirma al contrastar cierre de malla con [[tension_de_fuente]] y caidas estimadas. Esta cadena causal convierte el resultado en accion de mantenimiento concreta.

Ademas, la interpretacion incorpora criterio de decision: si el cierre nodal mejora al repetir medicion con nueva referencia, el problema era metrologico; si persiste con consistencia de signos, la hipotesis dominante pasa a ser degradacion fisica de rama o contacto. Esta distincion evita correcciones cosmeticas y orienta intervencion efectiva.

# Ejemplo de aplicación real


## Contexto

En un tablero de control se observan disparos intermitentes en una rama secundaria bajo carga variable. La inspeccion visual no identifica falla clara. Se adopta enfoque de Kirchhoff para localizar inconsistencias de red con mediciones rapidas.

## Estimación física

Se miden corrientes en el nodo de distribucion y se evalua cierre con ecuacion nodal. El cierre no se cumple dentro de tolerancia, lo que sugiere problema de rama o de medicion.

Luego se mide lazo de alimentacion y se verifica ecuacion de malla. La suma de caidas no coincide con la fuente medida, indicando posible resistencia no modelada en conexion.

Se mide caida local en el tramo sospechoso y se estima resistencia efectiva con relacion local. El valor resultante es mayor que nominal, consistente con degradacion de contacto.

Con esta evidencia, el equipo prioriza intervencion puntual en la conexion degradada en lugar de reemplazo masivo de componentes. El tiempo de parada disminuye y la falla deja de repetirse.

## Interpretación

El caso muestra que Kirchhoff aporta valor operativo cuando se usa en capas: nodo para continuidad de carga, malla para cierre de potencial y tramo para validar componente.

No se trata solo de obtener numeros, sino de convertir mediciones dispersas en una narrativa causal verificable. Esa narrativa mejora mantenimiento, reduce ensayo-error y fortalece confiabilidad.

Ademas, el proceso deja trazabilidad para futuras auditorias: que se midio, que ecuacion no cerro, que hipotesis se ajusto y que accion se tomo. Esa trazabilidad es parte de la calidad tecnica del diagnostico.