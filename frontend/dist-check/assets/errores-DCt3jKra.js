const e=`# Errores comunes: ventaja mecánica

## Errores conceptuales

### Error 1: creer que [[VM]] es rendimiento real

**Por qué parece correcto**
La ventaja ideal parece decir cuánto ayuda la máquina.

**Por qué es incorrecto**
[[VM]] solo describe geometría ideal. El rendimiento real se lee con [[VM_r]] y [[eta]].

**Señal de detección**
Se afirma que la fuerza real debe coincidir exactamente con la ideal.

**Corrección conceptual**
Separa diseño ideal, medición real y eficiencia.

**Mini-ejemplo**
Una palanca con [[VM]] = 4 puede entregar [[VM_r]] = 3.2 si hay pérdidas.

### Error 2: pensar que ventaja alta siempre es mejor

**Por qué parece correcto**
Una [[VM]] grande reduce fuerza ideal.

**Por qué es incorrecto**
Puede exigir más recorrido, menor velocidad o un diseño incómodo.

**Señal de detección**
Se elige siempre la mayor [[VM]] sin considerar la función.

**Corrección conceptual**
Interpreta ventaja junto con recorrido, rapidez y control.

**Mini-ejemplo**
Un mecanismo de precisión puede preferir [[VM]] menor que 1 para ganar control.

## Errores de modelo

### Error 3: mezclar configuraciones ideal y real

**Por qué parece correcto**
Los datos parecen pertenecer a la misma máquina.

**Por qué es incorrecto**
[[VM]], [[VM_r]] y [[eta]] deben referirse a la misma geometría y carga.

**Señal de detección**
Se usa [[d_P]] de una posición del apoyo y [[P]] medido con otra.

**Corrección conceptual**
Anota configuración, carga y punto de apoyo para cada medida.

**Mini-ejemplo**
No compares [[VM]] de una palanca larga con [[VM_r]] medido después de acortar el brazo.

### Error 4: usar masa como si fuera resistencia

**Por qué parece correcto**
En lenguaje cotidiano se habla de levantar “kilogramos”.

**Por qué es incorrecto**
[[R]] es una fuerza en newtons, no una masa en kg.

**Señal de detección**
Se sustituye 20 kg directamente como [[R]] = 20 N.

**Corrección conceptual**
Convierte masa a peso cuando la resistencia sea el peso.

**Mini-ejemplo**
Una masa de 20 kg pesa aproximadamente 196 N cerca de la Tierra.

## Errores matemáticos

### Error 5: invertir la razón de brazos

**Por qué parece correcto**
Ambos brazos aparecen como cociente.

**Por qué es incorrecto**
En este leaf [[VM]] se calcula como [[d_P]] dividido por [[d_R]].

**Señal de detección**
Una palanca con brazo de entrada largo sale con ventaja menor que 1.

**Corrección conceptual**
Escribe primero qué brazo corresponde a potencia y cuál a resistencia.

**Mini-ejemplo**
Si [[d_P]] = 1 m y [[d_R]] = 0.25 m, [[VM]] = 4.

### Error 6: calcular eficiencia con porcentajes mezclados

**Por qué parece correcto**
La eficiencia suele expresarse en porcentaje.

**Por qué es incorrecto**
La fórmula usa razones decimales compatibles. Mezclar 80 con 0.8 altera el resultado.

**Señal de detección**
[[eta]] sale 80 en lugar de 0.8.

**Corrección conceptual**
Calcula primero como razón y convierte a porcentaje solo al final.

**Mini-ejemplo**
[[VM_r]] = 3.2 y [[VM]] = 4 dan [[eta]] = 0.8, es decir, 80 %.

## Errores de interpretación

### Error 7: aceptar [[eta]] mayor que 1 sin revisar

**Por qué parece correcto**
Puede parecer que una máquina real supera el diseño ideal.

**Por qué es incorrecto**
En el modelo ordinario, la ventaja real no debe superar la ideal sin cambiar de modelo.

**Señal de detección**
[[VM_r]] es mayor que [[VM]] con los mismos datos.

**Corrección conceptual**
Revisa unidades, configuración y medidas.

**Mini-ejemplo**
Si [[VM]] = 4 y [[VM_r]] = 5, probablemente se mezclaron datos.

### Error 8: usar ventaja mecánica para clasificar palancas

**Por qué parece correcto**
La ventaja describe una función importante de la palanca.

**Por qué es incorrecto**
La clase depende del orden espacial de apoyo, potencia y resistencia.

**Señal de detección**
Se llama “segunda clase” a toda palanca con [[VM]] mayor que 1.

**Corrección conceptual**
Usa el leaf de tipos de palancas para clasificar y este leaf para cuantificar rendimiento.

**Mini-ejemplo**
Una palanca de primera clase también puede tener [[VM]] mayor que 1.

## Regla de autocontrol rápido

Antes de cerrar, comprueba que brazos y fuerzas pertenecen a la misma configuración, que las fuerzas están en newtons, que [[VM]] usa brazos, que [[VM_r]] usa fuerzas reales y que [[eta]] queda entre 0 y 1.
`;export{e as default};
