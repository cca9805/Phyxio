# Errores comunes: centro de masas en cuerpos extendidos

## Errores conceptuales

### Error 1: suponer que el centro de masas siempre coincide con el centro geom?trico

**Por qué parece correcto:**
El alumno recuerda objetos homog?neos y sim?tricos, donde el centro visual y el centro de masas coinciden.

**Por qué es incorrecto:**
En un cuerpo extendido con densidad variable, el promedio ponderado se desplaza hacia la zona donde hay m?s masa. La f?rmula relevante no es una regla visual, sino la definici?n integral de la componente correspondiente.

{{f:xcm}}

**Señal de detección:**
El alumno marca el centro geom?trico sin revisar [[lambda]], [[sigma]] o [[rho]].

**Corrección conceptual:**
Primero identifica la distribuci?n de densidad y despu?s compara el resultado con la geometr?a. Si la densidad es homog?nea y hay simetr?a suficiente, el centroide puede ser v?lido. Si no, hay que integrar.

**Mini-ejemplo de contraste:**
Una barra de un metro con densidad lineal creciente hacia la derecha no se equilibra en el punto medio. Su [[xcm]] queda desplazado hacia el extremo m?s denso, aunque la forma geom?trica sea perfectamente sim?trica.

## Errores de modelo

### Error 2: ignorar la simetr?a para simplificar una coordenada del centro de masas

**Por qué parece correcto:**
Calcular todas las componentes parece m?s seguro que razonar antes de integrar.

**Por qué es incorrecto:**
La simetr?a es una condici?n f?sica, no un atajo est?tico. Si el cuerpo es sim?trico respecto a un eje, una componente como [[ycm]] o [[zcm]] puede quedar fijada sin c?lculo expl?cito.

**Señal de detección:**
El alumno desarrolla una integral larga y obtiene cero al final, sin haber explicado la simetr?a que impon?a ese resultado desde el inicio.

**Corrección conceptual:**
Antes de usar f?rmulas, dibuja ejes y decide qu? componentes est?n determinadas por simetr?a.

{{f:ycm}}

{{f:zcm}}

**Mini-ejemplo de contraste:**
Una placa rectangular homog?nea centrada en el origen tiene componentes transversales nulas por simetr?a. Integrarlas no est? mal, pero aumenta la probabilidad de errores innecesarios.

## Errores matemáticos

### Error 3: confundir masa total con masa diferencial

**Por qué parece correcto:**
El alumno recuerda que [[M]] aparece en la definici?n y la coloca dentro del integrando.

**Por qué es incorrecto:**
[[M]] normaliza el promedio al final. Dentro de la integral debe aparecer [[dm]], porque cada regi?n del cuerpo aporta una peque?a masa local.

{{f:M}}

**Señal de detección:**
La expresi?n del integrando usa la masa total como si cada punto del cuerpo tuviera toda la masa.

**Corrección conceptual:**
Sustituye [[dm]] por el diferencial correcto seg?n el modelo: lineal, superficial o volum?trico.

{{f:dm_linear}}

{{f:dm_surface}}

{{f:dm_volume}}

**Mini-ejemplo de contraste:**
En una l?mina, usar [[sigma]] con [[dA]] produce una masa diferencial. Usar [[M]] dentro de cada elemento hace que las dimensiones y la interpretaci?n fallen.

### Error 4: elegir mal los l?mites al cambiar de variable

**Por qué parece correcto:**
Los l?mites originales parecen describir la figura visible y el alumno los conserva al cambiar de coordenadas.

**Por qué es incorrecto:**
Si cambia la variable de integraci?n, cambia tambi?n el dominio. El nuevo dominio debe cubrir exactamente el mismo material, sin duplicarlo ni dejar zonas fuera.

**Señal de detección:**
El resultado cae fuera del cuerpo, contradice una simetr?a o da una masa total incompatible con la escala del objeto.

**Corrección conceptual:**
Revisa el dominio antes de integrar [[M]]. Si el dominio est? mal, todas las componentes de [[rcm]] quedan contaminadas.

**Mini-ejemplo de contraste:**
En una media l?mina circular, usar el dominio de una circunferencia completa resta el desplazamiento que deb?a aparecer. El resultado parece m?s sim?trico, pero representa otro cuerpo.

## Errores de interpretación

### Error 5: creer que el centro de masas es un punto material

**Por qué parece correcto:**
La frase centro de masas sugiere un lugar donde se concentra f?sicamente la materia.

**Por qué es incorrecto:**
[[rcm]] es una posici?n promedio. En un aro homog?neo, puede caer en el centro vac?o. En una pieza con huecos, puede estar fuera del material sin dejar de ser f?sicamente ?til.

**Señal de detección:**
El alumno afirma que toda la masa est? en el centro de masas o que no puede existir si no hay material en ese punto.

**Corrección conceptual:**
Lee el centro de masas como una herramienta para describir la traslaci?n global, no como una part?cula real pegada al cuerpo.

**Mini-ejemplo de contraste:**
Un anillo se puede equilibrar por su centro geom?trico aunque en ese punto no haya materia. Eso no contradice la definici?n; la confirma.

## Regla de autocontrol rápido

Antes de aceptar un resultado, comprueba:

1. **Unidades:** [[M]] debe ser masa; [[xcm]], [[ycm]], [[zcm]] y [[rcm]] deben tener escala de longitud.
2. **Densidad:** si [[lambda]], [[sigma]] o [[rho]] no son constantes, el centro no tiene por qu? coincidir con el centro geom?trico.
3. **Diferencial:** [[dL]], [[dA]] y [[dV]] no son intercambiables.
4. **Simetr?a:** una componente nula debe poder explicarse f?sicamente, no solo aparecer al final.


