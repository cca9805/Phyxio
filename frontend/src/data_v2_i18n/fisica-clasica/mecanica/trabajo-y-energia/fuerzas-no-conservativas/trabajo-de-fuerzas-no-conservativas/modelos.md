# Modelos para trabajo de fuerzas no conservativas

## Modelo ideal

El modelo ideal del leaf compara dos estados del mismo sistema y atribuye la diferencia de energia mecanica al trabajo no conservativo neto. No intenta reconstruir cada instante del movimiento, sino cerrar el balance global entre [[Emi]] y [[Emf]] mediante [[Wnc]].

Este enfoque es especialmente potente cuando el enunciado ya da energias iniciales y finales, o cuando esas energias pueden construirse de forma limpia con [[Ki]], [[Ui]], [[Kf]] y [[Uf]]. El modelo convierte una descripcion narrativa en una pregunta energetica precisa: cuanta energia mecanica ha entrado o salido del sistema.

## Hipótesis

- El sistema se mantiene fijo durante todo el analisis.
- Los estados inicial y final se comparan con la misma referencia de energia potencial.
- Las interacciones conservativas se expresan mediante energia de estado.
- Los efectos no conservativos se agrupan en [[Wnc]] sin doble conteo.
- El balance final admite una interpretacion de signo coherente para [[dEm]].

Estas hipotesis no son ornamentales. Si se cambia la frontera del sistema o se altera la referencia potencial, el mismo numero puede dejar de representar la misma situacion fisica.

## Dominio de validez cuantitativo

El modelo es cuantitativamente util cuando el balance por estados domina la resolucion. Como criterio operativo, una diferencia relativa del orden de un 1 % a un 5 % entre energia de entrada y energia final puede tratarse como perdida pequena si la precision del problema es escolar; una diferencia del 20 % o mas ya exige justificar una contribucion no conservativa significativa.

Tambien hay controles de signo. Si el sistema parte con [[Emi]] = 200 J y termina con [[Emf]] = 120 J, el balance requiere un [[Wnc]] negativo. Si el calculo produce lo contrario, el error no es de redondeo sino de modelo o de lectura del sistema.

## Señales de fallo del modelo

- El valor hallado para [[Kf]] o [[Emf]] contradice una condicion fisica basica.
- Se mezclan contribuciones de dos sistemas distintos dentro del mismo balance.
- El resultado solo puede justificarse cambiando la referencia de energia a mitad del problema.
- El enunciado exige una fuerza dependiente del tiempo o de la velocidad y se intenta obtener todo a partir de un unico saldo final.
- El signo de [[Wnc]] contradice el agente descrito, por ejemplo un motor tratado como si extrajera energia sin razon.

## Modelo extendido o alternativo

Cuando el problema pide describir como cambia la fuerza no conservativa durante el recorrido, conviene pasar a un modelo extendido. Por ejemplo, rozamiento, arrastre o accion de un motor pueden necesitar una ley propia antes de integrarse en [[Wnc]]. El leaf sigue proporcionando el cierre energetico, pero ya no basta por si solo para obtener el trabajo.

Si la velocidad, el tiempo o la trayectoria importan de forma esencial, cambia de modelo hacia dinamica o hacia un tratamiento especifico de la fuerza no conservativa. Esa transicion no invalida el balance; lo coloca en el nivel correcto dentro de la resolucion.

## Comparación operativa

El balance por estados es preferible cuando se conocen energias iniciales y finales, o cuando el problema pide directamente [[Wnc]], [[Emf]] o [[dEm]]. Un modelo de fuerzas resulta mejor cuando se busca aceleracion, trayectoria o trabajo calculado desde una fuerza variable. Un modelo termico adicional resulta necesario cuando interesa seguir el destino de la energia que deja de estar disponible mecanicamente.

La decision madura no es elegir siempre el mismo camino, sino reconocer que el balance no conservativo es la herramienta central para cerrar estados y que otros modelos se acoplan a el cuando el problema necesita mas detalle.
