const e=`\uFEFF# Errores comunes: centro de masas en cuerpos extendidos\r
\r
## Errores conceptuales\r
\r
### Error 1: suponer que el centro de masas siempre coincide con el centro geom?trico\r
\r
**Por qué parece correcto:**\r
El alumno recuerda objetos homog?neos y sim?tricos, donde el centro visual y el centro de masas coinciden.\r
\r
**Por qué es incorrecto:**\r
En un cuerpo extendido con densidad variable, el promedio ponderado se desplaza hacia la zona donde hay m?s masa. La f?rmula relevante no es una regla visual, sino la definici?n integral de la componente correspondiente.\r
\r
{{f:xcm}}\r
\r
**Señal de detección:**\r
El alumno marca el centro geom?trico sin revisar [[lambda]], [[sigma]] o [[rho]].\r
\r
**Corrección conceptual:**\r
Primero identifica la distribuci?n de densidad y despu?s compara el resultado con la geometr?a. Si la densidad es homog?nea y hay simetr?a suficiente, el centroide puede ser v?lido. Si no, hay que integrar.\r
\r
**Mini-ejemplo de contraste:**\r
Una barra de un metro con densidad lineal creciente hacia la derecha no se equilibra en el punto medio. Su [[xcm]] queda desplazado hacia el extremo m?s denso, aunque la forma geom?trica sea perfectamente sim?trica.\r
\r
## Errores de modelo\r
\r
### Error 2: ignorar la simetr?a para simplificar una coordenada del centro de masas\r
\r
**Por qué parece correcto:**\r
Calcular todas las componentes parece m?s seguro que razonar antes de integrar.\r
\r
**Por qué es incorrecto:**\r
La simetr?a es una condici?n f?sica, no un atajo est?tico. Si el cuerpo es sim?trico respecto a un eje, una componente como [[ycm]] o [[zcm]] puede quedar fijada sin c?lculo expl?cito.\r
\r
**Señal de detección:**\r
El alumno desarrolla una integral larga y obtiene cero al final, sin haber explicado la simetr?a que impon?a ese resultado desde el inicio.\r
\r
**Corrección conceptual:**\r
Antes de usar f?rmulas, dibuja ejes y decide qu? componentes est?n determinadas por simetr?a.\r
\r
{{f:ycm}}

{{f:zcm}}
\r
**Mini-ejemplo de contraste:**\r
Una placa rectangular homog?nea centrada en el origen tiene componentes transversales nulas por simetr?a. Integrarlas no est? mal, pero aumenta la probabilidad de errores innecesarios.\r
\r
## Errores matemáticos\r
\r
### Error 3: confundir masa total con masa diferencial\r
\r
**Por qué parece correcto:**\r
El alumno recuerda que [[M]] aparece en la definici?n y la coloca dentro del integrando.\r
\r
**Por qué es incorrecto:**\r
[[M]] normaliza el promedio al final. Dentro de la integral debe aparecer [[dm]], porque cada regi?n del cuerpo aporta una peque?a masa local.\r
\r
{{f:M}}\r
\r
**Señal de detección:**\r
La expresi?n del integrando usa la masa total como si cada punto del cuerpo tuviera toda la masa.\r
\r
**Corrección conceptual:**\r
Sustituye [[dm]] por el diferencial correcto seg?n el modelo: lineal, superficial o volum?trico.\r
\r
{{f:dm_linear}}

{{f:dm_surface}}

{{f:dm_volume}}
\r
**Mini-ejemplo de contraste:**\r
En una l?mina, usar [[sigma]] con [[dA]] produce una masa diferencial. Usar [[M]] dentro de cada elemento hace que las dimensiones y la interpretaci?n fallen.\r
\r
### Error 4: elegir mal los l?mites al cambiar de variable\r
\r
**Por qué parece correcto:**\r
Los l?mites originales parecen describir la figura visible y el alumno los conserva al cambiar de coordenadas.\r
\r
**Por qué es incorrecto:**\r
Si cambia la variable de integraci?n, cambia tambi?n el dominio. El nuevo dominio debe cubrir exactamente el mismo material, sin duplicarlo ni dejar zonas fuera.\r
\r
**Señal de detección:**\r
El resultado cae fuera del cuerpo, contradice una simetr?a o da una masa total incompatible con la escala del objeto.\r
\r
**Corrección conceptual:**\r
Revisa el dominio antes de integrar [[M]]. Si el dominio est? mal, todas las componentes de [[rcm]] quedan contaminadas.\r
\r
**Mini-ejemplo de contraste:**\r
En una media l?mina circular, usar el dominio de una circunferencia completa resta el desplazamiento que deb?a aparecer. El resultado parece m?s sim?trico, pero representa otro cuerpo.\r
\r
## Errores de interpretación\r
\r
### Error 5: creer que el centro de masas es un punto material\r
\r
**Por qué parece correcto:**\r
La frase centro de masas sugiere un lugar donde se concentra f?sicamente la materia.\r
\r
**Por qué es incorrecto:**\r
[[rcm]] es una posici?n promedio. En un aro homog?neo, puede caer en el centro vac?o. En una pieza con huecos, puede estar fuera del material sin dejar de ser f?sicamente ?til.\r
\r
**Señal de detección:**\r
El alumno afirma que toda la masa est? en el centro de masas o que no puede existir si no hay material en ese punto.\r
\r
**Corrección conceptual:**\r
Lee el centro de masas como una herramienta para describir la traslaci?n global, no como una part?cula real pegada al cuerpo.\r
\r
**Mini-ejemplo de contraste:**\r
Un anillo se puede equilibrar por su centro geom?trico aunque en ese punto no haya materia. Eso no contradice la definici?n; la confirma.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de aceptar un resultado, comprueba:\r
\r
1. **Unidades:** [[M]] debe ser masa; [[xcm]], [[ycm]], [[zcm]] y [[rcm]] deben tener escala de longitud.\r
2. **Densidad:** si [[lambda]], [[sigma]] o [[rho]] no son constantes, el centro no tiene por qu? coincidir con el centro geom?trico.\r
3. **Diferencial:** [[dL]], [[dA]] y [[dV]] no son intercambiables.\r
4. **Simetr?a:** una componente nula debe poder explicarse f?sicamente, no solo aparecer al final.\r
\r
\r
`;export{e as default};
