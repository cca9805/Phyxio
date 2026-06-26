# Ejemplo tipo examen

## Enunciado

Un refrigerador opera entre un espacio a temperatura [[T_C]] de 263 K (menos 10 grados Celsius) y el ambiente a [[T_H]] de 303 K (30 grados Celsius). En cada ciclo, el refrigerador extrae [[Q_C]] de 800 J del interior y el compresor realiza un trabajo [[W]] de 350 J. Determinar: (a) el calor rechazado [[Q_H]] al ambiente, (b) la variacion de entropia total [[Delta_S_total]], y (c) el trabajo minimo de Carnot para la misma extraccion de calor.

## Datos

- Temperatura del foco frio: [[T_C]] = 263 K
- Temperatura del foco caliente: [[T_H]] = 303 K
- Calor extraido del foco frio: [[Q_C]] = 800 J
- Trabajo del compresor: [[W]] = 350 J
- Incognitas: [[Q_H]], [[Delta_S_total]], trabajo minimo

## Definicion del sistema

El sistema es el fluido refrigerante que opera en un ciclo cerrado entre dos focos termicos. El foco frio es el interior del refrigerador a 263 K. El foco caliente es el ambiente exterior a 303 K. El ciclo es un ciclo invertido que consume trabajo [[W]] del compresor para transferir calor [[Q_C]] del foco frio al foco caliente.

## Modelo fisico

Se aplica el modelo de ciclo invertido en regimen estacionario. La primera ley de la termodinamica establece la conservacion de energia: [[Q_H]] es [[Q_C]] mas [[W]]. La segunda ley, expresada como variacion de entropia total [[Delta_S_total]], verifica la viabilidad termodinamica del proceso. Los focos se consideran de capacidad infinita con temperaturas constantes [[T_C]] y [[T_H]].

## Justificacion del modelo

El modelo de primera y segunda ley aplicado al ciclo invertido es apropiado porque el sistema opera ciclicamente entre dos focos a temperaturas conocidas [[T_C]] y [[T_H]]. La hipotesis de focos de capacidad infinita es valida para un refrigerador domestico donde el ambiente y el interior mantienen temperaturas aproximadamente constantes. La relacion [[Q_H]] igual a [[Q_C]] mas [[W]] es exacta por conservacion de energia, y la condicion [[Delta_S_total]] mayor o igual a cero es universal por la segunda ley. El trabajo minimo de Carnot proporciona la referencia teorica adecuada porque establece la cota inferior termodinamica del trabajo necesario.

## Resolucion simbolica

Aplicando la primera ley al ciclo invertido completo:

{{f:balance_energetico_ciclo_invertido}}

De la primera ley: [[Q_H]] es [[Q_C]] mas [[W]].

Aplicando la segunda ley para verificar viabilidad:

{{f:segunda_ley_ciclo_invertido}}

La variacion de entropia total es: [[Delta_S_total]] es [[Q_H]] dividido entre [[T_H]] menos [[Q_C]] dividido entre [[T_C]].

Para el trabajo minimo, aplicando la formula del ciclo de Carnot invertido:

{{f:trabajo_minimo_carnot}}

El trabajo minimo de Carnot es: [[W]] minimo es [[Q_C]] multiplicado por ([[T_H]] menos [[T_C]]) dividido entre [[T_C]].

## Sustitucion numerica

Sustituyendo los datos numericos en las expresiones simbolicas obtenidas:

Apartado a: calor rechazado al foco caliente.
[[Q_H]] = [[Q_C]] + [[W]] = 800 + 350 = 1150 J.

Apartado b: variacion de entropia total del universo.
[[Delta_S_total]] = [[Q_H]] / [[T_H]] - [[Q_C]] / [[T_C]] = 1150 / 303 - 800 / 263 = 3.795 - 3.042 = 0.753 J/K.

Apartado c: trabajo minimo de Carnot para la misma extraccion.
[[W]] minimo = [[Q_C]] * ([[T_H]] - [[T_C]]) / [[T_C]] = 800 * (303 - 263) / 263 = 800 * 40 / 263 = 121.7 J.

## Validacion dimensional

[[Q_H]]: julios mas julios da julios. Correcto.
[[Delta_S_total]]: julios dividido entre kelvin menos julios dividido entre kelvin da J/K. Correcto.
[[W]] minimo: julios por kelvin dividido entre kelvin da julios. Correcto.

## Interpretacion fisica

El calor rechazado [[Q_H]] de 1150 J es mayor que [[Q_C]] de 800 J en exactamente los 350 J del trabajo, confirmando la conservacion de energia del ciclo invertido. La [[Delta_S_total]] de 0.753 J/K es positiva, confirmando que el ciclo cumple la segunda ley y es termodinamicamente viable: el universo gana entropia neta, como debe ser en todo proceso real.

El trabajo minimo de Carnot de 121.7 J es considerablemente menor que los 350 J reales. Esto indica que el ciclo real presenta irreversibilidades significativas, concentradas principalmente en la compresion no isentropica y en las diferencias finitas de temperatura en los intercambiadores. La fraccion de Carnot es 121.7 dividido entre 350, dando 34.8 por ciento, lo que sugiere un rendimiento isentropico del compresor moderado pero dentro de rangos tipicos para refrigeradores domesticos.

Si la [[Delta_S_total]] hubiera resultado negativa, indicaria un error en los datos o un proceso imposible. En un ciclo de Carnot ideal con el mismo [[Q_C]] de 800 J, el trabajo seria solo 121.7 J y la [[Delta_S_total]] seria exactamente cero.

# Ejemplo de aplicacion real

## Contexto

Un tecnico de mantenimiento mide que un aire acondicionado split extrae calor del interior a 24 grados Celsius ([[T_C]] de 297 K) y lo rechaza al exterior a 38 grados Celsius ([[T_H]] de 311 K). La potencia electrica del compresor es 900 W y la capacidad de refrigeracion indicada es 3200 W. El tecnico quiere verificar si los datos son termodinamicamente coherentes aplicando el balance energetico y la segunda ley.

## Estimacion fisica

Como estimacion de orden de magnitud, el trabajo minimo de Carnot para extraer [[Q_C]] de 3200 W del interior es aproximadamente 3200 multiplicado por 14 dividido entre 297, dando un valor razonable de 151 W. El trabajo real de 900 W es unas 6 veces el minimo, lo que es algo elevado pero no imposible para un equipo con perdidas reales significativas. Este orden de magnitud confirma que los datos no violan limites termodinamicos fundamentales.

{{f:trabajo_minimo_carnot}}

El balance energetico da [[Q_H]] de 3200 mas 900, igual a 4100 W. La [[Delta_S_total]] por segundo es 4100 dividido entre 311 menos 3200 dividido entre 297, dando 13.18 menos 10.77, igual a 2.41 W/K. Este valor positivo confirma viabilidad termodinamica.

{{f:balance_energetico_ciclo_invertido}}

## Interpretacion

Los datos son termodinamicamente coherentes: [[Q_H]] de 4100 W cumple la primera ley y la [[Delta_S_total]] positiva de 2.41 W/K cumple la segunda ley. El cociente entre trabajo real y trabajo minimo de Carnot es 900 dividido entre 151, dando 5.96, lo que indica irreversibilidades elevadas pero dentro de rangos tipicos para equipos split de gama media con intercambiadores de aire. El COP implicito es [[Q_C]] dividido entre [[W]], es decir 3200 dividido entre 900, dando 3.56, coherente con equipos de clasificacion energetica A. La razon de la elevada irreversibilidad respecto al minimo de Carnot es la diferencia de temperatura efectiva en los intercambiadores (mayor que la nominal [[T_H]] menos [[T_C]]) y las perdidas mecanicas del compresor scroll.
