const e=`## Errores conceptuales

### Error 1: Creer que el dieléctrico conduce carga entre las placas

**Por qué parece correcto**

El alumno observa que insertar el dieléctrico cambia la carga del condensador (si está conectado a una batería) y concluye que el material permite el paso de carga de placa a placa, como un conductor parcial. La analogía con un fluido que llena un recipiente refuerza esta intuición errónea: "si el material entra, la carga también entra".

**Por qué es incorrecto**

El dieléctrico no transporta carga libre entre las placas. El aumento de carga cuando está conectado a una batería proviene de la batería, no del dieléctrico. Lo que hace el material es desplazar sus cargas ligadas microscópicamente, reduciendo el campo interior y permitiendo que la batería inyecte más carga desde el exterior para restaurar la tensión. El dieléctrico es un aislante: no hay corriente a través de él en condiciones estáticas.

**Señal de detección**

El alumno afirma que "el dieléctrico aporta carga al condensador" o que "la carga aumenta porque el material tiene carga dentro". Si el razonamiento incluye la idea de que hay corriente a través del material, el error está activo.

**Corrección conceptual**

El dieléctrico polariza sus cargas internas, pero esas cargas son ligadas y no se mueven macroscópicamente. El aumento de [[C_d]] significa que el condensador puede almacenar más carga a la misma tensión, pero esa carga extra la suministra siempre la fuente externa.

**Mini-ejemplo de contraste**

Si el dieléctrico condujera carga, al insertar el material con el condensador desconectado debería aparecer corriente. Experimentalmente no se mide ninguna corriente al insertar un buen dieléctrico en un condensador aislado: la carga en las placas permanece constante y solo cambia la tensión.

---

### Error 2: Confundir [[epsilon_r]] adimensional con la permitividad absoluta en F/m

**Por qué parece correcto**

Ambas magnitudes describen la "capacidad dieléctrica" del material. En tablas de propiedades se suelen encontrar juntas y tienen símbolos similares (\\(\\varepsilon_r\\) y \\(\\varepsilon\\)). El alumno asume que se pueden intercambiar o que la única diferencia es el nombre.

**Por qué es incorrecto**

[[epsilon_r]] es adimensional: es el cociente entre la permitividad del material y la del vacío. La permitividad absoluta tiene unidades de F/m y es el producto de [[epsilon_r]] por la permitividad del vacío. Si se usa la permitividad absoluta en la fórmula [[C_d]] = [[epsilon_r]] · [[C_0]], el resultado está multiplicado por un factor de aproximadamente 8.85 · 10⁻¹² F/m, que es un error de doce órdenes de magnitud en unidades coherentes.

**Señal de detección**

El alumno obtiene un valor de [[C_d]] que difiere del esperado por un factor de aproximadamente 8.85 · 10⁻¹² o por su inversa. También puede detectarse si el valor introducido como [[epsilon_r]] tiene unidades adjuntas.

**Corrección conceptual**

Siempre verificar que [[epsilon_r]] sea un número puro, sin unidades. Los valores típicos son: vacío = 1, aire ≈ 1.0006, vidrio ≈ 5–10, agua líquida ≈ 80. Si el valor tiene unidades de F/m, se ha usado la permitividad absoluta.

**Mini-ejemplo de contraste**

Para el vidrio ordinario, [[epsilon_r]] ≈ 7 (adimensional). La permitividad absoluta del vidrio es aproximadamente 6.2 · 10⁻¹¹ F/m. Usar 6.2 · 10⁻¹¹ en lugar de 7 en la fórmula produce un [[C_d]] doce órdenes de magnitud menor: físicamente absurdo.

## Errores de modelo

### Error 3: Asumir que [[epsilon_r]] es constante a todas las frecuencias

**Por qué parece correcto**

Las tablas de materiales suelen dar un único valor de [[epsilon_r]] sin especificar la frecuencia. El alumno generaliza ese valor a cualquier situación, incluyendo señales de radio, microondas u ópticas.

**Por qué es incorrecto**

[[epsilon_r]] depende de la frecuencia de la señal aplicada. Cada mecanismo de polarización (electrónico, iónico, orientacional) solo es efectivo hasta una frecuencia de corte característica. Por encima de esa frecuencia, ese mecanismo no contribuye a [[epsilon_r]] y el valor cae. El valor tabulado sin más especificación suele ser el estático (corriente continua o muy baja frecuencia).

**Señal de detección**

El alumno aplica el [[epsilon_r]] estático del agua (≈ 80) a un cálculo de condensador de microondas. O asume que un dieléctrico cerámico de [[epsilon_r]] alto a 50 Hz sigue teniendo ese mismo valor a 10 GHz.

**Corrección conceptual**

El modelo LHI estático es solo válido por debajo de la frecuencia de relajación del material. Para aplicaciones de alta frecuencia, es imprescindible consultar la curva [[epsilon_r]] vs. frecuencia del material específico.

**Mini-ejemplo de contraste**

El agua tiene [[epsilon_r]] ≈ 80 a 50 Hz pero solo ≈ 1.8 a frecuencias ópticas, porque la polarización orientacional (que domina el valor alto) no puede seguir el campo a esas frecuencias. Un condensador de agua diseñado con [[epsilon_r]] = 80 para señales de GHz tendría una capacitancia efectiva veinticinco veces menor.

## Errores matemáticos

### Error 4: Calcular [[C_d]] como suma en lugar de producto

**Por qué parece correcto**

El alumno relaciona "añadir un material" con "sumar una contribución". Si el dieléctrico aumenta la capacitancia, parece natural que la nueva capacitancia sea [[C_0]] más algo relacionado con [[epsilon_r]].

**Por qué es incorrecto**

La relación es multiplicativa: [[C_d]] es [[epsilon_r]] veces [[C_0]]. Esto proviene de que la polarización del dieléctrico actúa como un factor de escala sobre toda la capacitancia geométrica, no como una capacitancia adicional en paralelo. Una suma solo sería correcta si el dieléctrico parcial ocupara una fracción del área, creando un condensador adicional en paralelo.

**Señal de detección**

El alumno escribe la capacitancia resultante como [[C_0]] + (algún término con [[epsilon_r]]), o como [[C_0]] + ([[epsilon_r]] - 1) · algo. El resultado siempre es diferente del correcto por una cantidad que depende de los valores numéricos.

**Corrección conceptual**

La fórmula correcta es [[C_d]] = [[epsilon_r]] · [[C_0]]. Si [[epsilon_r]] = 5 y [[C_0]] = 10 pF, la capacitancia con dieléctrico es 50 pF, no 15 pF. La multiplicación es el único operador correcto.

**Mini-ejemplo de contraste**

Con [[epsilon_r]] = 10 y [[C_0]] = 1 nF: la suma daría 11 nF, el producto correcto da 10 nF. Para [[epsilon_r]] = 100 y [[C_0]] = 1 nF: la suma daría 101 nF, el producto correcto da 100 nF. La diferencia relativa entre suma y producto es del 1 % para [[epsilon_r]] = 100 pero del 50 % para [[epsilon_r]] = 2, donde el error es más peligroso.

## Errores de interpretación

### Error 5: Creer que el campo interior del dieléctrico es mayor que el campo externo

**Por qué parece correcto**

El alumno asocia "más material" con "mayor efecto" y concluye que el dieléctrico amplifica el campo en su interior. La analogía con una lupa concentrando la luz refuerza esta intuición: si la lente amplifica la luz, ¿por qué no el dieléctrico amplifica el campo?

**Por qué es incorrecto**

El campo [[E_d]] dentro del dieléctrico es siempre menor o igual al campo externo, nunca mayor. La polarización del material genera cargas superficiales opuestas a las de las placas, creando un campo de polarización que se opone al externo. El campo neto interior es el externo reducido por el factor [[epsilon_r]], que es mayor o igual a uno.

**Señal de detección**

El alumno obtiene [[E_d]] mayor que el campo externo aplicado, o afirma que el dieléctrico "concentra" el campo en su interior. Si el cociente entre el campo calculado y el campo externo supera la unidad, el error está presente.

**Corrección conceptual**

El campo [[E_d]] siempre es el campo externo dividido entre [[epsilon_r]]. Para [[epsilon_r]] mayor que uno, [[E_d]] es siempre menor. Solo en el vacío ([[epsilon_r]] = 1) son iguales. El dieléctrico atenúa, no amplifica, el campo.

**Mini-ejemplo de contraste**

Con campo externo de 100 kV/m y [[epsilon_r]] = 5: el campo interior es 20 kV/m, cinco veces menor. Afirmar que el campo interior es 500 kV/m sería decir que el dieléctrico crea energía de la nada, lo que viola la conservación de la energía.

## Regla de autocontrol rápido

Antes de cerrar cualquier cálculo con dieléctricos, verificar las cuatro condiciones siguientes:

1. [[epsilon_r]] es un número puro, sin unidades, mayor o igual a uno.
2. [[C_d]] es mayor o igual a [[C_0]]. Si [[C_d]] resultó menor, hay un error.
3. [[E_d]] es menor o igual al campo externo. Si [[E_d]] resultó mayor, hay un error.
4. El campo [[E_d]] calculado no supera la tensión de ruptura del material. Si la supera, la solución es físicamente inviable y hay que aumentar la separación entre placas o cambiar de material.

Si alguna de estas condiciones falla, revisar los datos de entrada antes de interpretar el resultado.
`;export{e as default};
