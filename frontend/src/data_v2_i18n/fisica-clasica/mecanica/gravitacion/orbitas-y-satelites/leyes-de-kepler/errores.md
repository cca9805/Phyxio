# Errores frecuentes en leyes de kepler

## Errores conceptuales

### Error 1 : colocar la masa central en el centro de la elipse

**Por qué parece correcto**: muchos dibujos escolares muestran la elipse centrada y el cuerpo central en una posicion visualmente simetrica. Si no se distingue centro y foco, parece natural poner [[M]] en el centro geometrico.

**Por qué es incorrecto**: la primera ley situa la masa central en un foco. Por eso [[r]] se mide desde el foco y cambia con [[theta]] cuando [[e]] no es cero.

**Señal de detección**: el estudiante usa [[b]] o el centro de la elipse para calcular distancias al Sol o a la Tierra.

**Corrección conceptual**: dibuja centro, focos y punto orbital por separado. La distancia fisica de la ley es focal, no radial desde el centro geometrico.

**Mini-ejemplo de contraste**: en una orbita con [[e]] apreciable, el pericentro y el apocentro no estan a la misma distancia de [[M]], aunque pertenezcan a la misma elipse.

### Error 2 : creer que la rapidez orbital es constante

**Por qué parece correcto**: en la orbita circular introductoria, [[r]] y la rapidez pueden ser constantes. Esa imagen se transfiere indebidamente a toda orbita.

**Por qué es incorrecto**: la segunda ley conserva [[dA_dt]], no la rapidez lineal. Cerca del foco se recorre mas arco en el mismo tiempo.

**Señal de detección**: se afirma que tiempos iguales implican arcos iguales.

**Corrección conceptual**: compara sectores de area, no longitudes de trayectoria. El reloj de Kepler es areal.

**Mini-ejemplo de contraste**: dos sectores con distinta longitud de arco pueden corresponder al mismo intervalo temporal si tienen igual area barrida desde el foco.

## Errores de modelo

### Error 3 : aplicar la forma comparativa a masas centrales distintas

**Por qué parece correcto**: la forma comparativa es simple y parece depender solo de [[a1]], [[a2]], [[T1]] y [[T2]].

**Por qué es incorrecto**: esa comparacion cancela [[G]] y [[M]] solo si ambas orbitas comparten la misma masa central. Si cambia [[M]], cambia [[mu]] y el reloj orbital.

**Señal de detección**: se comparan una orbita lunar y una orbita terrestre con la misma razon de semiejes sin mencionar la masa central.

**Corrección conceptual**: verifica primero el centro atractivo. Si no es el mismo, usa la tercera ley absoluta o la forma con [[mu]].

**Mini-ejemplo de contraste**: un semieje de cierto valor alrededor de la Tierra y alrededor del Sol no produce el mismo periodo.

### Error 4 : usar Kepler como modelo exacto en orbitas perturbadas

**Por qué parece correcto**: muchas orbitas reales se parecen a elipses durante intervalos cortos.

**Por qué es incorrecto**: rozamiento, empuje, achatamiento del planeta o terceros cuerpos pueden cambiar [[a]], [[e]] y el plano orbital.

**Señal de detección**: se predice una reentrada o una precesion usando una elipse fija.

**Corrección conceptual**: usa Kepler como referencia inicial y cambia a modelo perturbado si los cambios acumulados importan.

**Mini-ejemplo de contraste**: un satelite bajo puede tener un periodo kepleriano instantaneo, pero su [[a]] disminuye lentamente por arrastre.

## Errores matemáticos

### Error 5 : escalar el periodo linealmente con el semieje

**Por qué parece correcto**: si una longitud se duplica, se espera intuitivamente que el tiempo tambien se duplique.

**Por qué es incorrecto**: la tercera ley tiene potencia tres medios en la comparacion entre semiejes y periodos.

**Señal de detección**: si [[a2]] es el doble de [[a1]], se responde que [[T2]] es el doble de [[T1]].

**Corrección conceptual**: calcula con la potencia correcta y revisa si el resultado supera el factor lineal.

**Mini-ejemplo de contraste**: duplicar [[a]] aumenta el periodo por un factor mayor que dos, no por dos exacto.

### Error 6 : mezclar unidades en la tercera ley absoluta

**Por qué parece correcto**: en astronomia se usan kilometros, unidades astronomicas, dias y anos con naturalidad.

**Por qué es incorrecto**: la forma con [[G]] y [[M]] exige coherencia dimensional estricta si se quiere [[T]] en segundos.

**Señal de detección**: [[a]] esta en kilometros y [[G]] en SI, o [[M]] se introduce en masas solares sin conversion.

**Corrección conceptual**: convierte a SI antes de aplicar la forma absoluta, o usa una forma comparativa si el problema lo permite.

**Mini-ejemplo de contraste**: la forma comparativa tolera unidades comunes en [[a1]] y [[a2]], pero la absoluta no tolera mezclas con [[G]].

## Errores de interpretación

### Error 7 : confundir excentricidad con energia

**Por qué parece correcto**: [[e]] se parece visualmente a otros simbolos usados para energia especifica en otros leaf.

**Por qué es incorrecto**: aqui [[e]] mide forma orbital. No decide por si sola si una orbita esta ligada ni sustituye al analisis energetico.

**Señal de detección**: se interpreta una orbita mas excentrica como necesariamente mas energetica o de periodo mayor.

**Corrección conceptual**: separa forma, periodo y energia. En este leaf [[a]] controla la escala de [[T]], mientras [[e]] controla el achatamiento.

**Mini-ejemplo de contraste**: dos orbitas con el mismo [[a]] pueden tener distinto [[e]] y aun asi compartir periodo ideal.

### Error 8 : leer la segunda ley como una formula de posicion

**Por qué parece correcto**: la expresion de [[dA_dt]] parece una ecuacion que deberia dar directamente donde esta el cuerpo.

**Por qué es incorrecto**: la segunda ley es un criterio de barrido temporal. Para obtener posicion se necesita integrar el movimiento o usar relaciones orbitales adicionales.

**Señal de detección**: se intenta despejar [[theta]] solo desde [[dA_dt]] sin intervalo temporal ni geometria.

**Corrección conceptual**: usa la segunda ley para comparar tiempos y ritmos, no como solucion completa de posicion.

**Mini-ejemplo de contraste**: saber que el area por segundo es constante no basta para ubicar el planeta sin saber el area acumulada desde una referencia.

## Regla de autocontrol rápido

Antes de cerrar un ejercicio, responde tres preguntas. Primera: estoy usando el foco correcto para medir [[r]]. Segunda: comparo areas o periodos, no arcos ni radios de forma indiscriminada. Tercera: las orbitas comparten masa central si uso la forma comparativa. Si alguna respuesta falla, el calculo puede parecer limpio pero no representa una orbita kepleriana correcta.
