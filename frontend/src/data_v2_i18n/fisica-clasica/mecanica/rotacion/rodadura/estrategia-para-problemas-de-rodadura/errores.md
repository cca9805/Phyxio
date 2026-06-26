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

{{f:aceleracion_rodadura_plano}}

 da unidades imposibles; usar

{{f:aceleracion_rodadura_plano}}

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

{{f:aceleracion_rodadura_plano}}

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

La regla completa añade una pregunta de método: ¿la incógnita pertenece a una causa, a una restricción o a un balance? Si la incógnita es [[a_cm]], no basta con copiar una relación de aceleración; hay que comprobar que [[I]], [[m]], [[R]], [[g]] y [[phi]] pertenecen al modelo. Si la incógnita es [[K_total]] o [[E_total]], el error típico es olvidar que la energía de rodadura se reparte entre avance y giro. Si aparece [[tau]], el DCL debe explicar qué fuerza lo produce.

Otro error frecuente consiste en resolver por energía y después afirmar el sentido del rozamiento sin haber usado dinámica. La energía puede dar rapidez, pero no determina por sí sola una fuerza de contacto. También ocurre lo contrario: se escriben ecuaciones de fuerzas para hallar una rapidez final cuando el balance de energía era más corto y más transparente. La estrategia correcta no premia el método más largo, sino el que responde a la pregunta física.

Un último control es gráfico. En el SVG debe verse la condición de rodadura, en el DCL deben verse peso, normal y rozamiento estático, y en el Coord debe verse cómo cambian la aceleración o la energía al variar parámetros. Si el cálculo dice que aumenta [[a_cm]] al aumentar [[I]] en el mismo plano, la lectura física contradice la fórmula. Si el cálculo conserva [[E_total]] durante un deslizamiento con disipación, el modelo está mal elegido.