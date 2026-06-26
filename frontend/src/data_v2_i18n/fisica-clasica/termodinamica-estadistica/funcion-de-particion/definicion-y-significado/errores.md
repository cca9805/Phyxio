## Errores conceptuales


### Error 1: Confundir [[funcion_particion]] con [[probabilidad_microestado]]
**Por qué parece correcto**
Como [[funcion_particion]] aparece en el denominador de la normalización, parece representar directamente una probabilidad total.
**Por qué es incorrecto**
La [[funcion_particion]] es una suma de [[peso_boltzmann]], no la probabilidad de un estado. La [[probabilidad_microestado]] nace al comparar un peso individual con esa suma.
**Señal de detección**
El alumno dice que [[funcion_particion]] debe estar entre cero y uno.
**Corrección conceptual**
Solo [[probabilidad_microestado]] está acotada como probabilidad; [[funcion_particion]] mide el total estadístico accesible.
**Mini-ejemplo de contraste**
Tres estados con pesos parecidos pueden dar una [[funcion_particion]] mayor que uno, mientras cada [[probabilidad_microestado]] sigue siendo menor que uno.


### Error 2: Creer que todos los microestados cuentan igual
**Por qué parece correcto**
La palabra suma sugiere contar estados como objetos idénticos.
**Por qué es incorrecto**
Cada [[energia_microestado]] modifica el [[peso_boltzmann]] según la [[temperatura]]. No todos los estados aportan lo mismo.
**Señal de detección**
Se calcula [[funcion_particion]] usando solo el número de estados accesibles.
**Corrección conceptual**
Primero se pondera cada estado y solo después se suma.
**Mini-ejemplo de contraste**
A baja [[temperatura]], un estado de gran [[energia_microestado]] puede aportar casi nada aunque exista.

## Errores de modelo


### Error 3: Usar [[temperatura]] Celsius
**Por qué parece correcto**
En laboratorio se mide la [[temperatura]] en grados Celsius de forma cotidiana.
**Por qué es incorrecto**
El modelo exige [[temperatura]] absoluta; la escala térmica de [[constante_boltzmann]] depende de kelvin.
**Señal de detección**
Aparecen pesos absurdos al sustituir veinte como si fuera una escala absoluta.
**Corrección conceptual**
Convertir siempre a kelvin antes de formar [[razon_energia_termica]].
**Mini-ejemplo de contraste**
Veinte grados Celsius y veinte kelvin describen situaciones térmicas radicalmente distintas.


### Error 4: Ignorar degeneraciones
**Por qué parece correcto**
Si dos estados tienen la misma [[energia_microestado]], parece que basta escribir uno.
**Por qué es incorrecto**
Cada microestado accesible aporta su propio [[peso_boltzmann]] a [[funcion_particion]].
**Señal de detección**
La [[probabilidad_microestado]] de un nivel degenerado queda demasiado baja.
**Corrección conceptual**
Contar todos los microestados o multiplicar el peso por la degeneración.
**Mini-ejemplo de contraste**
Dos estados altos iguales pueden competir con un estado bajo si la [[temperatura]] es suficiente.

## Errores matemáticos


### Error 5: Cambiar el signo del exponente físico
**Por qué parece correcto**
Al manipular exponentes se pierde de vista que el peso debe decrecer con [[energia_microestado]].
**Por qué es incorrecto**
Un mayor coste energético no puede aumentar el [[peso_boltzmann]] a [[temperatura]] fija.
**Señal de detección**
La gráfica de [[peso_boltzmann]] frente a [[razon_energia_termica]] sube.
**Corrección conceptual**
Recordar que la penalización energética reduce la contribución estadística.
**Mini-ejemplo de contraste**
Un estado excitado no debe ser más probable que el fundamental sin degeneración adicional.


### Error 6: Normalizar antes de sumar todos los pesos
**Por qué parece correcto**
Se calcula rápido una fracción con los estados visibles.
**Por qué es incorrecto**
La [[probabilidad_microestado]] depende de la [[funcion_particion]] completa, no de una suma parcial.
**Señal de detección**
Las probabilidades cambian mucho al añadir un estado que se había omitido.
**Corrección conceptual**
Construir primero todos los [[peso_boltzmann]] y después normalizar.
**Mini-ejemplo de contraste**
Un cuarto estado con peso pequeño apenas afecta; uno con peso comparable cambia todo el reparto.

## Errores de interpretación


### Error 7: Leer [[peso_boltzmann]] como probabilidad final
**Por qué parece correcto**
Ambas cantidades aumentan o disminuyen de forma relacionada.
**Por qué es incorrecto**
El [[peso_boltzmann]] no sabe cuántos competidores hay; [[probabilidad_microestado]] sí.
**Señal de detección**
Se comparan pesos de sistemas distintos como si fueran probabilidades absolutas.
**Corrección conceptual**
Usar [[peso_boltzmann]] para comparar dentro de un mismo sistema y [[probabilidad_microestado]] para predicción normalizada.
**Mini-ejemplo de contraste**
El mismo peso individual puede ser probable en un sistema de dos estados y raro en uno de cien.


### Error 8: Pensar que alta [[temperatura]] elimina la física
**Por qué parece correcto**
En el límite alto los pesos se parecen.
**Por qué es incorrecto**
La [[funcion_particion]] todavía depende del número de estados y de la estructura de [[energia_microestado]].
**Señal de detección**
Se dice que todas las probabilidades son iguales sin revisar degeneración ni accesibilidad.
**Corrección conceptual**
Alta [[temperatura]] reduce la penalización energética, pero no inventa estados ni borra restricciones.
**Mini-ejemplo de contraste**
Dos estados accesibles y diez estados accesibles no producen la misma distribución aunque los pesos sean parecidos.

## Regla de autocontrol rápido

Antes de aceptar el resultado, comprueba: [[temperatura]] en kelvin, [[peso_boltzmann]] positivo, [[funcion_particion]] como suma completa y todas las [[probabilidad_microestado]] normalizadas.