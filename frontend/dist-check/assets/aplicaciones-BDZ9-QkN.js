const e=`# Aplicaciones de simetrias y conservaciones

## 1. Particula libre y conservacion del momento lineal

En una mesa de aire, un deslizador que se mueve con rozamiento despreciable no encuentra una posicion privilegiada del plano. El lagrangiano [[L]] no cambia si todo el experimento se traslada una distancia fija. Esa simetria espacial se traduce en conservacion de [[P]], de modo que la relacion entre [[m]] y [[v]] no es solo una definicion numerica: es la consecuencia observable de que el espacio se comporta de la misma manera en todos los puntos del dominio.

La aplicacion es especialmente util en laboratorio porque permite diagnosticar sesgos. Si [[P]] cambia sin choque ni fuerza externa identificable, el montaje no es realmente homogeneo: puede haber inclinacion de la mesa, flujo de aire desigual o rozamiento residual. Asi, la conservacion no solo resuelve el problema; tambien audita la calidad del experimento.

Variable dominante: [[P]].
Limite de validez: falla si aparece fuerza externa horizontal apreciable, rozamiento o masa variable.

## 2. Orbitas y conservacion del momento angular

En un potencial central, la orientacion absoluta del sistema no selecciona una direccion privilegiada. Rotar todo el problema alrededor del centro no cambia [[L]], y esa simetria rotacional produce conservacion de [[J]]. En una lectura escalar simplificada, [[J]] puede relacionarse con [[r]] y [[P]], siempre que la geometria del brazo y la direccion del movimiento sean compatibles con esa reduccion.

Esta aplicacion explica por que un cuerpo en orbita acelera angularmente cuando se acerca al foco y se ralentiza cuando se aleja. No hace falta imaginar una fuerza tangencial misteriosa: si [[J]] permanece constante, el cambio de [[r]] obliga a reorganizar la componente transversal del movimiento. La conservacion actua como criterio fisico que conecta geometria y dinamica.

Variable dominante: [[J]].
Limite de validez: requiere torque externo nulo respecto del centro elegido; perturbaciones, arrastre atmosferico o cuerpos adicionales rompen la conservacion exacta.

## 3. Sistemas autonomos y conservacion de la energia

En un oscilador mecanico ideal, el lagrangiano [[L]] no depende explicitamente del tiempo. Las propiedades del sistema son las mismas hoy, dentro de un minuto o al desplazar el origen temporal del calculo. Esa invariancia temporal se expresa mediante la energia [[E]], construida con [[p_i]], [[qdi]] y [[L]]. La formula no es una suma memorizada: es la carga asociada a que las leyes no cambian con el instante de referencia.

En practica, esta aplicacion permite controlar integradores numericos. Si un solver simula un sistema autonomo conservativo y [[E]] deriva de manera sostenida, el paso temporal, el metodo o el modelo estan introduciendo una perdida artificial. Para un profesor, esta es una forma potente de conectar formalismo con control de calidad computacional.

Variable dominante: [[E]].
Limite de validez: falla con fuerzas disipativas, excitacion externa o lagrangianos dependientes explicitamente del tiempo.

## 4. Coordenadas ciclicas en mecanismos y pendulos rotantes

Una coordenada ciclica aparece cuando [[L]] no depende de esa coordenada, aunque si puede depender de su velocidad. En ese caso, el momento conjugado [[p_i]] es constante y la condicion [[dpdt]] igual a cero reduce el problema. En un pendulo con una variable angular ignorable, o en un mecanismo con simetria axial, esta propiedad permite eliminar una ecuacion diferencial y sustituirla por una cantidad conservada.

La aplicacion didactica es importante porque muestra que una variable puede ser fisicamente relevante aunque no aparezca de forma directa en [[L]]. Lo que importa es la dependencia estructural: si la coordenada es ignorable, su momento conjugado se vuelve el portador de la informacion dinamica.

Variable dominante: [[p_i]].
Limite de validez: requiere que la coordenada sea realmente ciclica y que no existan restricciones activas o fuerzas externas que dependan de ella.

## 5. Auditoria de simulaciones y experimentos mediante cargas conservadas

En simulaciones multibody, en dinamica molecular o en datos experimentales de alta frecuencia, una carga [[Q]] bien identificada funciona como una prueba de coherencia global. No se revisa solo una posicion o una velocidad, sino una estructura completa: simetria, generador [[X_i]], momento conjugado [[p_i]] y evolucion temporal. Si la carga conservada se mantiene dentro de tolerancia, el modelo gana credibilidad; si deriva, la deriva apunta hacia una ruptura de simetria o un defecto numerico.

Esta aplicacion es particularmente valiosa porque no depende de conocer de antemano toda la trayectoria exacta. Basta con saber que simetria deberia conservarse. Por eso las conservaciones se usan como monitores de calidad: detectan errores de integracion, terminos omitidos, unidades mal escaladas o fuerzas externas no declaradas.

Variable dominante: [[Q]].
Limite de validez: una carga casi constante no demuestra conservacion exacta; hay que comparar la deriva con la precision del modelo y con la escala fisica del sistema.

## Cierre aplicado

Estas aplicaciones muestran que las simetrias no son adornos teoricos. Permiten decidir que cantidades deben permanecer constantes, que datos son sospechosos y que simplificaciones tienen soporte fisico. La competencia final consiste en mirar un sistema, reconocer la simetria de [[L]], construir o interpretar la carga [[Q]] y usar su conservacion como herramienta de prediccion, diagnostico y reduccion del calculo.
`;export{e as default};
