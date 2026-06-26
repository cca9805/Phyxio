const e=`# Aplicaciones del trabajo de fuerzas no conservativas

## 1. Frenado de un vehiculo

Un vehiculo que se detiene transforma parte de su energia mecanica en calor en discos, pastillas y neumaticos. El balance con [[Wnc]] permite estimar si la energia mecanica final disminuye en la cuantia esperada y separar la lectura global del detalle termico posterior.

**Variable dominante:** [[Wnc]]

**Límite de validez:** el modelo resume el saldo energetico global; no sustituye un modelo de frenado con variacion temporal de fuerza, adherencia o temperatura.

Esta aplicacion ayuda a explicar por que dos frenadas con igual velocidad inicial pueden exigir tratamientos distintos si el sistema incluye pendientes, motores regenerativos o perdidas adicionales. El balance energetico muestra el saldo; la ingenieria de frenos detalla como se produce.

En el aula, esta escena permite comparar un caso puramente disipativo con otro en el que existe recuperacion energetica. El signo y el valor de [[Wnc]] cambian el relato fisico de la frenada, incluso si el estado final visible es el mismo: un vehiculo detenido.

## 2. Elevadores y montacargas

En un elevador, el motor realiza trabajo no conservativo positivo para aumentar la energia potencial de la cabina y, si acelera, tambien la energia cinetica. El balance entre [[Emi]] y [[Emf]] permite comprobar si el aporte mecanico es razonable frente a la subida y detectar perdidas internas.

**Variable dominante:** [[Emf]]

**Límite de validez:** la lectura por estados funciona bien para tramos definidos; si interesa el arranque, la frenada o el control fino, se necesita dinamica temporal.

Didacticamente, esta escena deja claro que "no conservativo" no es sinonimo de "disipativo". El mismo formalismo que describe una perdida por rozamiento describe tambien un aporte util de un motor.

Ademas, el balance permite distinguir entre subir una carga lentamente y subirla con velocidad final apreciable. En ambos casos crece la energia potencial, pero solo en el segundo aparece tambien una contribucion cinetica final que debe reflejarse dentro de [[Emf]].

## 3. Ensayo de maquinaria con rendimiento mecanico

En maquinas reales se compara la energia mecanica entregada por un actuador con la energia mecanica que aparece finalmente en la carga. La diferencia se interpreta mediante un saldo no conservativo y permite razonar sobre rendimiento, vibraciones y perdidas por contacto.

**Variable dominante:** [[dEm]]

**Límite de validez:** hace falta definir si [[Wnc]] representa trabajo motor bruto o trabajo no conservativo neto del sistema completo.

Esta aplicacion es valiosa para el profesorado porque obliga a discutir fronteras de sistema. Una misma cifra de energia puede tener significados distintos si el sistema incluye o excluye engranajes, guias o resistencias internas.

Tambien es util para interpretar informes tecnicos simplificados. Si una maquina recibe mucho trabajo no conservativo bruto pero el cambio final de energia mecanica es moderado, el modelo invita a preguntar donde se ha ido la diferencia y que parte del dispositivo la explica.

## 4. Entrenamiento deportivo y biomecanica simplificada

Al saltar, pedalear o empujar un trineo, el cuerpo realiza trabajo sobre un sistema mecanico externo. En una primera aproximacion, el balance por estados permite comparar cuanta energia mecanica final se ha generado respecto a la inicial y vincularla con una actuacion muscular efectiva.

**Variable dominante:** [[Wnc]]

**Límite de validez:** el cuerpo humano no es un motor ideal; para estudiar metabolismo, elasticidad muscular o eficiencia fisiologica se requieren modelos adicionales.

La aplicacion muestra que el leaf no se limita a objetos inertes. Tambien permite discutir situaciones de aporte mecanico activo, siempre que se explicite con claridad que energia se esta siguiendo y que agente queda fuera del sistema.

En un problema introductorio, esta lectura basta para comparar dos acciones mecanicas. En un estudio mas fino, el profesor puede mostrar por que el balance energetico debe completarse con biomecanica, eficiencia muscular y disipacion interna.

## 5. Validacion de simulaciones educativas y laboratorios

En una practica de laboratorio o en una simulacion, se pueden medir energias iniciales y finales para inferir [[Wnc]]. Si el saldo calculado no coincide con el mecanismo esperado, el experimento revela perdidas no consideradas, datos mal tomados o una frontera de sistema incoherente.

**Variable dominante:** [[Wnc]]

**Límite de validez:** la conclusion depende de la calidad de las medidas energeticas y de que las referencias de potencial se mantengan constantes.

Esta aplicacion conecta directamente con la alfabetizacion experimental. El alumno no usa el balance solo para resolver problemas cerrados, sino para diagnosticar si un modelo mecanico describe realmente lo que ocurre en una experiencia concreta.

Tambien ayuda a revisar simulaciones. Si una escena digital declara un mecanismo disipativo pero la energia mecanica no cambia como deberia, el error no es solo visual: afecta al modelo fisico que el recurso transmite.

En conjunto, estas cinco aplicaciones muestran por que el balance no conservativo es una herramienta transversal. Permite pasar de un problema escolar a una lectura tecnica sin cambiar de lenguaje fisico: sistema, estados, trabajo neto y criterio de coherencia.
`;export{e as default};
