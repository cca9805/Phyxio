const e=`# Errores frecuentes en el oscilador armonico

## Errores conceptuales

### Error 1 : creer que mayor amplitud cambia siempre el periodo

**Por qué parece correcto**: una oscilacion mas grande parece recorrer mas distancia y se espera que tarde mas.

**Por qué es incorrecto**: en el modelo armonico lineal, [[Tper]] depende de [[omega]], y [[omega]] depende de [[k]] y [[m]], no de [[A]].

**Señal de detección**: se modifica el periodo al duplicar amplitud sin cambiar masa ni rigidez.

**Corrección conceptual**: separa ritmo natural y energia de amplitud.

**Mini-ejemplo de contraste**: dos oscilaciones con distinta [[A]] pueden compartir [[Tper]] si tienen la misma [[m]] y [[k]].

### Error 2 : confundir frecuencia angular con frecuencia en hertz

**Por qué parece correcto**: ambas describen ritmo y se usan en oscilaciones.

**Por qué es incorrecto**: [[omega]] mide radianes por segundo; la frecuencia en ciclos por segundo requiere conversion.

**Señal de detección**: se interpreta [[omega]] como numero de oscilaciones por segundo sin dividir por el factor angular.

**Corrección conceptual**: especifica siempre si hablas de frecuencia angular o frecuencia ordinaria.

**Mini-ejemplo de contraste**: un valor alto de [[omega]] no significa el mismo numero de ciclos por segundo.

## Errores de modelo

### Error 3 : aplicar el modelo ideal con rozamiento fuerte

**Por qué parece correcto**: el sistema sigue oscilando durante un tiempo y parece armonico.

**Por qué es incorrecto**: si hay disipacion apreciable, [[E]] no permanece constante y la amplitud cambia con el tiempo.

**Señal de detección**: los maximos sucesivos disminuyen claramente.

**Corrección conceptual**: pasa a un modelo amortiguado si la perdida de energia por ciclo es relevante.

**Mini-ejemplo de contraste**: una masa en aire con rozamiento bajo puede aproximarse como ideal; un amortiguador viscoso no.

### Error 4 : usar rigidez constante fuera del regimen lineal

**Por qué parece correcto**: muchos muelles se etiquetan con una constante elastica.

**Por qué es incorrecto**: cerca del limite elastico o con geometria no lineal, [[k]] efectiva cambia con desplazamiento.

**Señal de detección**: el periodo medido depende de la amplitud.

**Corrección conceptual**: limita el modelo a pequenas oscilaciones o usa un potencial no cuadratico.

**Mini-ejemplo de contraste**: una pequena vibracion puede ser armonica; una deformacion grande puede no serlo.

## Errores matemáticos

### Error 5 : invertir masa y rigidez

**Por qué parece correcto**: ambas aparecen juntas en la relacion de frecuencia.

**Por qué es incorrecto**: mayor [[k]] aumenta [[omega]], mientras mayor [[m]] la reduce.

**Señal de detección**: el resultado predice que una masa mayor oscila mas rapido con el mismo muelle.

**Corrección conceptual**: revisa la tendencia antes de sustituir.

**Mini-ejemplo de contraste**: duplicar [[m]] ralentiza; duplicar [[k]] acelera.

### Error 6 : olvidar el cuadrado de la amplitud en energia

**Por qué parece correcto**: se piensa que energia crece proporcionalmente con desplazamiento.

**Por qué es incorrecto**: la energia elastica maxima es cuadratica en [[A]].

**Señal de detección**: al doblar [[A]], se dobla [[E]] en vez de cuadruplicarse.

**Corrección conceptual**: interpreta energia como area bajo fuerza restauradora lineal.

**Mini-ejemplo de contraste**: una amplitud dos veces mayor almacena cuatro veces mas energia para el mismo [[k]].

## Errores de interpretación

### Error 7 : reportar solo el numero sin diagnostico fisico

**Por qué parece correcto**: el ejercicio suele pedir un valor de frecuencia o periodo.

**Por qué es incorrecto**: el valor debe indicar si el sistema es rapido, lento, rigido, masivo o energetico.

**Señal de detección**: no se menciona que parametro domina el resultado.

**Corrección conceptual**: cierra cada calculo con una lectura causal.

**Mini-ejemplo de contraste**: un periodo grande puede deberse a masa alta o rigidez baja.

## Regla de autocontrol rápido

Antes de cerrar, comprueba cuatro cosas: [[m]] y [[k]] son positivos, [[omega]] aumenta con rigidez y disminuye con masa, [[Tper]] es positivo, y [[E]] crece con el cuadrado de [[A]]. Si alguna tendencia falla, el resultado no representa un oscilador armonico ideal.
`;export{e as default};
