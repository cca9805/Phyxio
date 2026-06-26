# Modelos y alcance

## Modelo ideal

El modelo ideal trata el contacto como rozamiento seco de Coulomb. La superficie ejerce una normal [[N]] y el par de materiales se resume mediante un coeficiente [[mu]] constante. Con esas dos magnitudes se obtiene [[fr]], que despues permite calcular [[Wr]] y [[Edis]].

{{f:fuerza_rozamiento_cinetico}}

El modelo no describe la microfisica del contacto. Su objetivo es resolver balances energeticos macroscopicos cuando el detalle de rugosidades, temperatura y desgaste puede quedar absorbido en [[mu]].

## Hipótesis

- El cuerpo desliza realmente; no se analiza adherencia estatica sin movimiento.
- [[mu]] permanece aproximadamente constante durante el tramo.
- [[N]] es positiva y puede determinarse con la geometria y las fuerzas verticales.
- [[d]] representa distancia de deslizamiento acumulada.
- La energia disipada [[Edis]] no vuelve como energia mecanica util durante el intervalo.

En horizontal, si no hay otras fuerzas verticales ni aceleracion vertical, [[N]] = [[m]][[g]] y se puede usar:

{{f:trabajo_rozamiento_horizontal}}

## Dominio de validez cuantitativo

Como criterio escolar e ingenieril basico, el modelo es razonable para velocidades moderadas, contacto seco o lubricacion ligera, calentamiento pequeno y cambios de [[mu]] menores que un orden de magnitud. Si [[mu]] cambia de 0,8 a 0,2 durante el proceso, el modelo de coeficiente constante ya no representa el sistema.

Tambien debe cumplirse [[N]] > 0, [[m]] > 0, [[g]] > 0 y [[t]] > 0 cuando se calcule [[Pdis]]. Si [[d]] = 0, el trabajo por rozamiento en ese tramo es cero aunque exista contacto.

## Señales de fallo del modelo

El modelo empieza a fallar si aparece lubricacion hidrodinamica, rodadura dominante, desgaste visible, calentamiento intenso, fusion local, vibracion con saltos de contacto o resistencia de un fluido comparable al rozamiento seco.

Una senal practica de fallo es que el resultado prediga una [[Pdis]] muy alta durante mucho tiempo sin elevar temperatura ni modificar [[mu]]. Otra senal es que [[Wr]] no pueda explicar la diferencia entre [[Emi]] y [[Emf]] porque hay motores, impactos o arrastre adicional.

## Modelo extendido o alternativo

Cuando conviene cambiar a un modelo alternativo es cuando la fuerza resistente depende claramente de la velocidad, de la temperatura o del espesor de lubricante. En ese caso puede usarse rozamiento viscoso, arrastre lineal, arrastre cuadratico, resistencia a la rodadura o un modelo termico acoplado.

El balance energetico general se conserva, pero ya no basta con atribuir todo a [[fr]] = [[mu]][[N]]. Hay que identificar cada trabajo no conservativo y sumarlo antes de interpretar [[dEm]].

## Comparación operativa

El modelo ideal responde rapido a problemas de energia perdida por contacto. El modelo extendido responde mejor a frenos reales, cojinetes, neumaticos calientes y sistemas lubricados. La comparacion operativa es sencilla: si [[Edis]] y [[Pdis]] salen coherentes con el comportamiento observable, Coulomb sirve; si el resultado contradice temperatura, desgaste o velocidad, hay que cambiar de modelo.
