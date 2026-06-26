const e=`# Ejemplo tipo examen

## Enunciado

Un condensador de placas paralelas tiene una separación entre placas de 4 mm y un campo eléctrico uniforme de 2.5×10⁴ N/C dirigido de la placa positiva a la negativa. Un electrón parte de la placa negativa en reposo. Determina la diferencia de potencial entre las placas, el trabajo realizado por el campo eléctrico al desplazar el electrón de placa a placa, y la velocidad del electrón al llegar a la placa positiva. Justifica el signo del trabajo y discute si el resultado sería diferente para un protón en las mismas condiciones.

## Datos

- Separación entre placas: 4 mm (equivalente a 4×10⁻³ m)
- Campo eléctrico uniforme [[E_unif]]: 2.5×10⁴ N/C
- Carga del electrón: 1.6×10⁻¹⁹ C (negativa, por tanto [[q]] del electrón vale −1.6×10⁻¹⁹ C)
- Masa del electrón: 9.11×10⁻³¹ kg
- El electrón parte del reposo desde la placa negativa

## Definición del sistema

El sistema es un condensador plano con campo uniforme [[E_unif]] entre las placas. Definimos el punto A como la posición inicial del electrón (placa negativa) y el punto B como la placa positiva. La dirección del campo va de la placa positiva (mayor potencial) a la placa negativa (menor potencial), por lo que A está a menor potencial que B.

La separación [[d_AB]] coincide con la separación entre placas medida a lo largo de la dirección del campo: 4×10⁻³ m. El electrón se mueve de A (placa negativa, menor potencial) a B (placa positiva, mayor potencial), es decir, en sentido contrario al campo.

## Modelo físico

El modelo es campo eléctrico uniforme entre placas paralelas. Se aplica la fórmula:

{{f:diferencia_potencial_campo_uniforme}}

Y para el trabajo:

{{f:diferencia_potencial_trabajo}}

Las hipótesis son: campo uniforme (válido para condensador con placas grandes respecto a la separación), régimen electrostático, y desprecio del campo fuera del condensador.

## Justificación del modelo

La uniformidad del campo es la hipótesis clave. Para un condensador plano ideal con placas grandes, el campo entre ellas es uniforme y perpendicular a las placas. La separación de 4 mm es mucho menor que las dimensiones típicas de las placas, por lo que los efectos de borde son despreciables y el modelo es válido.

## Resolución simbólica

**Diferencia de potencial entre placas:**

La diferencia de potencial [[V_AB]] entre la placa negativa (A) y la placa positiva (B) se obtiene aplicando la fórmula para campo uniforme. El desplazamiento de A a B es contrario al campo, por lo que la diferencia de potencial es negativa (el potencial en A es menor que en B).

{{f:diferencia_potencial_campo_uniforme}}

**Trabajo del campo sobre el electrón:**

El trabajo se obtiene del producto de la carga [[q]] por la diferencia de potencial [[V_AB]]:

{{f:diferencia_potencial_trabajo}}

**Velocidad final del electrón:**

Aplicando el teorema trabajo-energía cinética: el trabajo del campo iguala el cambio de energía cinética. La velocidad final se obtiene de la expresión cinética.

## Sustitución numérica

**Diferencia de potencial:**

Multiplicando [[E_unif]] por [[d_AB]]: 2.5×10⁴ × 4×10⁻³ da 100 J/C. Dado que el desplazamiento A→B es opuesto al campo, la diferencia de potencial [[V_AB]] entre la placa negativa y la positiva toma el valor de −100 V (el potencial en A es 100 V menor que en B).

Convencionalmente, se define la diferencia de potencial entre las placas del condensador como la diferencia entre la placa positiva y la negativa, que resulta positiva: el campo entre placas de un condensador de 100 V es 2.5×10⁴ N/C. Ese es el valor de [[V_AB]] tomando B como la placa positiva y A como la negativa.

**Trabajo del campo sobre el electrón:**

La carga del electrón vale −1.6×10⁻¹⁹ C. Multiplicando por la diferencia de potencial de −100 V, el producto de los dos negativos da un trabajo positivo: 1.6×10⁻¹⁷ J. Por tanto [[W_AB]] toma el valor de 1.6×10⁻¹⁷ J, lo que indica que el campo impulsa al electrón hacia la placa positiva.

**Velocidad final:**

Igualando [[W_AB]] al cambio de energía cinética (mitad del producto de masa por velocidad al cuadrado), y despejando la velocidad, se obtiene que el cuadrado de la velocidad es 2 veces 1.6×10⁻¹⁷ J dividido entre 9.11×10⁻³¹ kg, lo que da 3.51×10¹³ m²/s². La raíz cuadrada resulta en una velocidad final de cerca de 5.93×10⁶ m/s.

## Validación dimensional

Diferencia de potencial [[V_AB]]: el producto N/C por metros resulta N·m/C, es decir J/C, que es el voltio \`[M L² T⁻³ I⁻¹]\` ✓

Trabajo [[W_AB]]: el producto de coulombios por voltios resulta en julios \`[M L² T⁻²]\` ✓

Velocidad: dividir el trabajo entre la masa (J/kg) equivale a m²/s²; la raíz cuadrada da m/s \`[L T⁻¹]\` ✓

## Interpretación física

El resultado positivo para [[W_AB]] confirma que el campo eléctrico realiza trabajo positivo sobre el electrón al desplazarlo de la placa negativa a la positiva. Aunque el electrón tiene carga negativa y se mueve en sentido contrario al campo, el trabajo es positivo porque ambos factores —signo de [[q]] y signo de [[V_AB]]— son negativos y su producto resulta positivo.

Físicamente, el electrón es atraído por la placa positiva y repelido por la placa negativa: la fuerza eléctrica actúa en el sentido del movimiento del electrón, acelerándolo. Esto es coherente con el trabajo positivo calculado.

Para un protón en las mismas condiciones, la carga sería positiva: el campo lo frenaría si va de la placa negativa a la positiva (trabajo negativo). El protón sería acelerado en el sentido contrario, de la placa positiva a la negativa. Nótese que [[V_BA]] tiene el signo opuesto a [[V_AB]]: invertir el orden de los puntos invierte el signo del resultado.

---

# Ejemplo de aplicación real

## Contexto

Los **tubos de rayos catódicos** (CRT), usados en osciloscopios, monitores antiguos y televisores analógicos, aceleran electrones mediante diferencias de potencial entre electrodos. El haz de electrones se dirige con precisión hacia la pantalla para crear la imagen o la señal visualizada.

El principio es exactamente el estudiado en este leaf: una diferencia de potencial acelera los electrones, y la energía cinética que adquieren determina el brillo y la resolución de la imagen. El diseño del sistema de aceleración requiere calcular con precisión la velocidad del haz en función de la diferencia de potencial aplicada.

## Estimación física

En un osciloscopio de laboratorio, los electrones se aceleran mediante una diferencia de potencial típica de 1 kV. Consideramos un electrón que parte del reposo y es acelerado por esta diferencia de potencial.

La carga del electrón es 1.6×10⁻¹⁹ C y su masa es 9.11×10⁻³¹ kg. El trabajo realizado por el campo sobre el electrón al cruzar 1 kV de diferencia de potencial es el producto de la carga por la diferencia de potencial: 1.6×10⁻¹⁹ × 1000, que resulta en 1.6×10⁻¹⁶ J. Ese es el valor de [[W_AB]].

Igualando este trabajo a la energía cinética, el cuadrado de la velocidad es 2 × 1.6×10⁻¹⁶ / 9.11×10⁻³¹, cerca de 3.51×10¹⁴ m²/s². La raíz cuadrada de ese valor da una velocidad cerca de 1.87×10⁷ m/s, aproximadamente el 6 % de la velocidad de la luz.

## Interpretación

Este resultado ilustra la extraordinaria eficiencia de los campos eléctricos para acelerar partículas ligeras. Un electrón acelerado por solo 1 kV ya alcanza el 6 % de la velocidad de la luz, lo que permite imprimir imágenes con alta precisión espacial en la pantalla del osciloscopio.

El análisis con la diferencia de potencial muestra además que duplicar [[V_AB]] no duplica la velocidad: la duplica solo en términos de energía cinética, y la velocidad crece como la raíz cuadrada de [[V_AB]]. Por eso, alcanzar velocidades relativistas requiere diferencias de potencial de cientos de kilovoltios, lo que explica el diseño de los aceleradores de electrones de alta energía.
`;export{e as default};
