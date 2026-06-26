const e=`# Errores frecuentes: Analisis completo\r
\r
## Errores conceptuales\r
\r
### Error 1: Creer que la fricción estática siempre vale el máximo\r
\r
**Por qué parece correcto**\r
\r
El alumno aprende la fórmula del rozamiento estático máximo y generaliza: piensa que la fricción en reposo siempre vale [[mu_e]] por [[N]]. La regla parece sencilla y universal, lo que invita a aplicarla sin matices.\r
\r
**Por qué es incorrecto**\r
\r
[[f_emax]] es una cota superior, no un valor fijo. Mientras el bloque permanece en reposo, la fricción se ajusta para igualar exactamente a [[F_ext]]. Solo alcanza el valor máximo en el instante justo antes de que el bloque arranque. Usar siempre el máximo es equivalente a decir que un muelle siempre está estirado al máximo, lo cual es absurdo.\r
\r
**Señal de detección**\r
\r
Si al resolver un problema de equilibrio la fuerza de rozamiento que calculas no depende de la fuerza aplicada sino solo de la normal, probablemente estás usando el máximo indebidamente.\r
\r
**Corrección conceptual**\r
\r
En régimen estático, la fricción real es reactiva e iguala al empuje: [[f_r]] coincide con [[F_ext]]. Solo cuando se pregunta «¿se mueve?» se compara [[F_ext]] con [[f_emax]] para decidir régimen.\r
\r
**Mini-ejemplo de contraste**\r
\r
Un bloque de 5 kg (peso de unos 49 N, con [[mu_e]] de 0.4) recibe un empuje horizontal de 10 N. Si se usa el máximo (19.6 N) como fricción real, el balance de fuerzas daría una resultante de menos 9.6 N, sugiriendo que el bloque retrocede sin motivo. La respuesta correcta es que la fricción vale 10 N y el bloque permanece en reposo.\r
\r
### Error 2: Usar el coeficiente cinético antes de verificar el régimen\r
\r
**Por qué parece correcto**\r
\r
[[mu_c]] aparece en la fórmula de la aceleración, que es el resultado «final» del problema. El alumno quiere llegar al resultado rápido y salta directamente a la ecuación dinámica sin preguntarse si hay deslizamiento.\r
\r
**Por qué es incorrecto**\r
\r
La ecuación de [[a]] solo es válida después de confirmar que [[F_ext]] supera [[F_ext_crit]]. Si el bloque está en reposo, no hay aceleración y la fricción cinética no participa. Aplicar la fórmula dinámica sin verificar el régimen puede producir una aceleración negativa sin sentido.\r
\r
**Señal de detección**\r
\r
Si el resultado de [[a]] es negativo cuando el empuje es positivo en el sentido esperado, probablemente no se verificó el umbral estático previamente.\r
\r
**Corrección conceptual**\r
\r
El procedimiento correcto es siempre secuencial: primero calcular [[N]], luego [[f_emax]], después comparar [[F_ext]] con el umbral, y solo entonces —si hay deslizamiento— usar la fórmula cinética.\r
\r
**Mini-ejemplo de contraste**\r
\r
Un bloque con umbral de 30 N recibe un empuje de 20 N. Si se aplica directamente la fórmula cinética con un rozamiento cinético de 24 N, la resultante sería negativa (menos 4 N) y la aceleración absurda. La respuesta correcta es que el bloque no se mueve y la fricción vale 20 N.\r
\r
## Errores de modelo\r
\r
### Error 3: Suponer que la normal siempre vale el peso\r
\r
**Por qué parece correcto**\r
\r
En el modelo horizontal simple, [[N]] coincide efectivamente con el peso. El alumno generaliza esta igualdad a cualquier geometría o configuración de fuerzas, lo que funciona en muchos ejercicios pero falla silenciosamente en otros.\r
\r
**Por qué es incorrecto**\r
\r
Si el empuje tiene una componente vertical (por ejemplo, se empuja hacia abajo y adelante) o si hay una cuerda tirando hacia arriba, la normal cambia. La normal se obtiene del equilibrio vertical completo, no de una receta fija. En un plano inclinado, la normal vale el peso multiplicado por el coseno del ángulo, no el peso directamente.\r
\r
**Señal de detección**\r
\r
Cuando el problema menciona empuje inclinado, cuerda con ángulo o plano inclinado y el alumno escribe directamente que la normal coincide con el peso sin justificarlo.\r
\r
**Corrección conceptual**\r
\r
Siempre plantear el equilibrio de fuerzas en la dirección perpendicular a la superficie para obtener [[N]]. Solo tras confirmar que no hay más fuerzas con componente normal se puede igualar al peso.\r
\r
**Mini-ejemplo de contraste**\r
\r
Un bloque de 10 kg sobre una mesa recibe un empuje de 50 N inclinado 30° por debajo de la horizontal. La componente vertical del empuje añade unos 25 N al apoyo. La normal sube de 98 N a 123 N. Si se usa 98 N como normal, el umbral de fricción se subestima en un 25 %, lo que puede invertir la conclusión sobre si el bloque arranca o no.\r
\r
## Errores matemáticos\r
\r
### Error 4: Restar fuerzas sin respetar el signo del eje\r
\r
**Por qué parece correcto**\r
\r
El alumno asocia «el rozamiento frena» con «se resta», y lo hace mecánicamente sin definir un eje. En muchos problemas sencillos esto da el resultado correcto por coincidencia.\r
\r
**Por qué es incorrecto**\r
\r
La segunda ley de Newton requiere sumar todas las fuerzas con su signo según el eje elegido. Si el eje positivo es hacia la derecha, el empuje es positivo y la fricción es negativa, pero si el bloque se mueve hacia la izquierda la fricción podría ser positiva. Sin un eje definido, las restas ad hoc generan errores de signo.\r
\r
**Señal de detección**\r
\r
Si al cambiar el sentido del eje el resultado cambia de valor y no solo de signo, las fuerzas no se están sumando correctamente.\r
\r
**Corrección conceptual**\r
\r
Definir siempre un eje positivo, asignar signo a cada fuerza según ese eje y aplicar la suma algebraica. La aceleración resultante hereda el signo del eje y su sentido físico se lee al final.\r
\r
**Mini-ejemplo de contraste**\r
\r
Un bloque empujado a la derecha con 50 N y fricción cinética de 30 N. Con eje positivo a la derecha, la resultante es 50 N menos 30 N, es decir 20 N positivos. Si se invierte el eje (positivo a la izquierda), el empuje es menos 50 N y la fricción más 30 N, dando menos 20 N. La magnitud es la misma; solo cambia el signo. Si el alumno obtiene magnitudes diferentes al cambiar de eje, hay un error de signo.\r
\r
## Errores de interpretación\r
\r
### Error 5: Interpretar la aceleración como velocidad\r
\r
**Por qué parece correcto**\r
\r
Ambas magnitudes describen el movimiento y tienen unidades parecidas (m/s² frente a m/s). El alumno calcula [[a]] y lo interpreta como «la rapidez del bloque», confundiendo la causa del cambio de velocidad con la velocidad misma.\r
\r
**Por qué es incorrecto**\r
\r
[[a]] indica cuánto cambia la velocidad por unidad de tiempo, no cuánto se mueve el bloque. Un bloque con aceleración de 2 m/s² que parte del reposo necesita un segundo entero para alcanzar 2 m/s de velocidad. Confundir ambas magnitudes lleva a predicciones erróneas sobre tiempos y distancias.\r
\r
**Señal de detección**\r
\r
Si el alumno escribe que el bloque «se mueve a 2 m/s²» o interpreta la aceleración como la rapidez del deslizamiento, la confusión es evidente.\r
\r
**Corrección conceptual**\r
\r
La aceleración es la derivada temporal de la velocidad. Para obtener la velocidad hay que multiplicar la aceleración por el tiempo (partiendo del reposo) o integrar si la aceleración varía. Nunca son intercambiables.\r
\r
**Mini-ejemplo de contraste**\r
\r
Un bloque arranca con [[a]] de 3 m/s². Tras 0.5 s su velocidad es 1.5 m/s, no 3 m/s. Tras 2 s la velocidad es 6 m/s. Si se interpreta [[a]] como velocidad constante, se predice que el bloque recorre 6 m en 2 s cuando en realidad recorre solo 6 m (coincidencia aquí, pero en general el desplazamiento es la mitad de lo que se creería para un solo segundo).\r
\r
## Regla de autocontrol rápido\r
\r
Después de resolver cualquier problema de rozamiento, aplica esta secuencia de verificación:\r
\r
1. Comprobar que se decidió el régimen (estático o cinético) antes de calcular la aceleración.\r
2. Verificar que [[N]] se obtuvo del equilibrio vertical completo y no se asumió igual al peso sin justificación.\r
3. Confirmar que las dimensiones del resultado son \`[L T⁻²]\` para la aceleración y \`[M L T⁻²]\` para las fuerzas.\r
4. Comprobar que el orden de magnitud de [[a]] está entre 0 y unos pocos m/s² para situaciones de laboratorio escolar.\r
5. Si [[a]] resulta negativa con el empuje en la dirección del eje positivo, el régimen elegido es incorrecto o hay un error de signos.\r
`;export{e as default};
