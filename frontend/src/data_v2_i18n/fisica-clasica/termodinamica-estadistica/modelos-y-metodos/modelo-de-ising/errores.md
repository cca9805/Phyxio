## Errores conceptuales


### Error 1: Creer que cada [[espin]] es una flecha clásica completa
**Por qué parece correcto**
El dibujo habitual muestra flechas arriba y abajo, así que parece una descripción literal.

**Por qué es incorrecto**
En este leaf, [[espin]] es una variable binaria del modelo. No describe todas las orientaciones ni toda la física cuántica.

**Señal de detección**
El razonamiento habla de ángulos continuos sin cambiar de modelo.

**Corrección conceptual**
Usa Ising para decisiones binarias de orientación, no para rotaciones arbitrarias.

**Mini-ejemplo de contraste**
Un material con momentos que giran en un plano requiere otro modelo; Ising solo separa dos estados.


### Error 2: Confundir [[magnetizacion_total]] con orden local perfecto
**Por qué parece correcto**
Una [[magnetizacion_total]] grande sugiere muchos espines alineados.

**Por qué es incorrecto**
Puede haber dominios, fronteras y fluctuaciones aunque el promedio sea alto.

**Señal de detección**
Se afirma que no existen defectos porque [[magnetizacion_media]] es cercana a 1.

**Corrección conceptual**
Lee la magnetización como señal global, no como mapa completo.

**Mini-ejemplo de contraste**
Dos redes con igual [[magnetizacion_media]] pueden tener dominios muy distintos.

## Errores de modelo


### Error 3: Ignorar el signo del [[acoplamiento]]
**Por qué parece correcto**
El símbolo J se usa a menudo como “intensidad” positiva.

**Por qué es incorrecto**
El signo de [[acoplamiento]] cambia si se favorece alineación o alternancia.

**Señal de detección**
La energía baja se asocia siempre a espines iguales.

**Corrección conceptual**
Antes de interpretar [[energia_ising]], fija el convenio físico de J.

**Mini-ejemplo de contraste**
Un [[acoplamiento]] ferromagnético favorece vecinos iguales; uno antiferromagnético favorece vecinos opuestos.


### Error 4: Aplicar el modelo a cualquier imán real sin límites
**Por qué parece correcto**
El modelo reproduce ideas de magnetización y transición.

**Por qué es incorrecto**
No incluye anisotropías, defectos, dinámica real ni interacciones largas.

**Señal de detección**
Se usa una red simple para predecir exactamente un material complejo.

**Corrección conceptual**
Trátalo como modelo mínimo y declara sus hipótesis.

**Mini-ejemplo de contraste**
Un cristal con impurezas requiere parámetros locales o modelos extendidos.

## Errores matemáticos


### Error 5: Sumar mal la [[magnetizacion_media]]
**Por qué parece correcto**
Parece bastar con contar espines positivos.

**Por qué es incorrecto**
La [[magnetizacion_total]] debe incluir signos y la media debe dividirse por [[numero_espines]].

**Señal de detección**
La [[magnetizacion_media]] sale fuera del intervalo físico esperado.

**Corrección conceptual**
Suma valores de [[espin]] con signo y normaliza.

**Mini-ejemplo de contraste**
Con tres espines arriba y uno abajo, la suma no es 3, sino el balance firmado.


### Error 6: Usar [[beta_termica]] sin unidades coherentes
**Por qué parece correcto**
La expresión parece puramente simbólica.

**Por qué es incorrecto**
[[beta_termica]] depende de [[constante_boltzmann]] y [[temperatura]], y debe ser compatible con energía.

**Señal de detección**
El exponente del peso estadístico conserva unidades.

**Corrección conceptual**
Comprueba que el producto de [[beta_termica]] por [[energia_ising]] sea adimensional.

**Mini-ejemplo de contraste**
Mezclar eV y joules sin conversión cambia [[probabilidad_configuracion]].

## Errores de interpretación


### Error 7: Leer menor [[energia_ising]] como mayor [[temperatura]]
**Por qué parece correcto**
Energía y [[temperatura]] aparecen juntas en el peso de Boltzmann.

**Por qué es incorrecto**
La energía describe configuración; la [[temperatura]] controla tolerancia a configuraciones costosas.

**Señal de detección**
Se dice que una configuración baja en energía “está más fría”.

**Corrección conceptual**
Distingue estado microscópico, energía configuracional y baño térmico.

**Mini-ejemplo de contraste**
A la misma [[temperatura]], dos configuraciones pueden tener distinta [[energia_ising]].


### Error 8: Pensar que [[campo_externo]] solo suma una corrección menor
**Por qué parece correcto**
A veces el término de interacción parece el protagonista.

**Por qué es incorrecto**
Un campo fuerte puede romper la simetría y dominar [[magnetizacion_total]].

**Señal de detección**
La predicción ignora el signo de h aunque el campo sea grande.

**Corrección conceptual**
Compara efecto de [[campo_externo]] con [[acoplamiento]] y [[temperatura]].

**Mini-ejemplo de contraste**
Un campo intenso puede alinear espines incluso con agitación térmica apreciable.

## Regla de autocontrol rápido

Antes de interpretar, comprueba tres cosas: signo de [[acoplamiento]], escala [[constante_boltzmann]]·[[temperatura]] y normalización de [[magnetizacion_media]] por [[numero_espines]].