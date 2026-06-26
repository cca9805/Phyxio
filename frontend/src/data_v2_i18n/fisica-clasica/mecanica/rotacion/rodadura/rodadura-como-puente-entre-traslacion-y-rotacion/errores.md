## Errores conceptuales

### Error 1: Mezclar traslación y rotación

**Por qué parece correcto**
La analogía lineal-angular invita a sustituir símbolos similares.

**Por qué es incorrecto**
Las magnitudes lineales y angulares tienen dimensiones distintas y necesitan una relación física.

**Señal de detección**
Aparecen unidades incompatibles o se usa radio sin justificarlo.

**Corrección conceptual**
Primero decide si describes avance, giro o rodadura.

**Mini-ejemplo de contraste**
Usar

{{f:condicion_rodadura_puente}}

 da unidades imposibles; usar

{{f:condicion_rodadura_puente}}

recupera velocidad lineal.

## Errores de modelo

### Error 1: Suponer rodadura sin comprobar contacto

**Por qué parece correcto**
Muchos problemas de ruedas la usan por defecto.

**Por qué es incorrecto**
La condición sin deslizamiento exige contacto estático compatible.

**Señal de detección**
El rozamiento requerido supera lo razonable o el enunciado habla de patinar.

**Corrección conceptual**
Declara si hay o no deslizamiento antes de calcular.

**Mini-ejemplo de contraste**
Una rueda bloqueada en hielo no cumple

{{f:condicion_rodadura_puente}}

.

## Errores matemáticos

### Error 1: Usar grados como radianes

**Por qué parece correcto**
Ambos miden ángulo.

**Por qué es incorrecto**
Las relaciones diferenciales de rotación usan radianes.

**Señal de detección**
Resultados inflados por factores cercanos a 57.3.

**Corrección conceptual**
Convierte a radianes antes de derivar o integrar.

**Mini-ejemplo de contraste**
90 no equivale a pi/2 en una fórmula diferencial.

## Errores de interpretación

### Error 1: Leer el gráfico como decoración

**Por qué parece correcto**
El cálculo parece suficiente.

**Por qué es incorrecto**
En Phyxio el gráfico valida el significado físico del resultado.

**Señal de detección**
El resultado no se puede localizar visualmente.

**Corrección conceptual**
El gráfico debe responder a la pregunta física central.

**Mini-ejemplo de contraste**
Una curva creciente con aceleración negativa indica error de signo.

## Regla de autocontrol rápido

Antes de cerrar, comprueba: modelo, unidades, signo, orden de magnitud y correspondencia gráfica.

En este leaf la regla se concreta así: identifica el avance del centro, identifica el giro, declara el radio y comprueba el contacto. Si falta una de esas piezas, no hay puente físico entre traslación y rotación. Usar la condición de rodadura sin justificar el no deslizamiento es un error de modelo, no solo un despiste algebraico.

También hay que leer el gráfico. El centro debe avanzar con [[v_cm]], la rueda debe girar con [[omega]] y el punto de contacto debe poder interpretarse como instantáneamente quieto. Si el dibujo no permite esa lectura, conviene cambiar de modelo antes de aceptar la fórmula.

Cuando este error se arrastra a hojas posteriores, aparecen fallos más grandes: se reparte mal [[K_total]], se interpreta mal [[E_total]] o se atribuye a [[tau]] una función que en realidad pertenece a la restricción geométrica. Por eso conviene corregir aquí la lectura de radio, contacto y giro.

Un control adicional es verbalizar qué ocurriría si se elimina el contacto. Si la rueda siguiera girando igual pero el centro dejara de avanzar de forma compatible, entonces la relación de rodadura no era una identidad universal. Era una condición física. Esta frase ayuda a detectar respuestas que solo repiten símbolos.

También hay errores de signo. Si se elige avance positivo hacia la derecha, el sentido positivo de giro debe elegirse de forma coherente. Un signo opuesto no siempre significa que la física sea imposible, pero sí exige explicar la convención. Sin esa explicación, el gráfico y la fórmula pueden parecer contradictorios.