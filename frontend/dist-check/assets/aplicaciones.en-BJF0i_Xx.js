const e=`# Applications\r
\r
## 1. Variables accion-angulo\r
\r
Dominant variable: [[C]].\r
\r
Validity limit: transformacion regular con corchetes canonicos preservados.\r
\r
En sistemas periodicos, pasar a variables accion-angulo simplifica la dinamica sin cambiar el sistema. La transformacion es aceptable solo si conserva la estructura canonica. This application muestra por que una coordenada conveniente no basta: debe mantener la forma de Hamilton.\r
\r
The professional question is whether the new variables simplify without deforming the flow. The criterion avoids choosing attractive coordinates that no longer represent the same system.\r
\r
## 2. Perturbaciones orbitales\r
\r
Dominant variable: [[K]].\r
\r
Validity limit: generatriz suave y terminos perturbativos pequenos.\r
\r
En mecanica celeste, una generatriz puede eliminar terminos rapidos del hamiltoniano efectivo. El hamiltoniano transformado no es una copia ingenua del original; incluye la correccion temporal si existe. La lectura fisica es que se ha cambiado la descripcion sin perder equivalencia dinamica.\r
\r
The professional question is whether removing fast terms preserves the slow dynamics. The criterion shows that the effective energy correction must be justified.\r
\r
## 3. Sistemas con referencias moviles\r
\r
Dominant variable: [[Fgen]].\r
\r
Validity limit: cambio temporal conocido y no singular.\r
\r
Cuando se usa un marco que rota o se desplaza, la funcion generatriz controla el coste dinamico del cambio. The student ve por que aparecen terminos nuevos y por que no deben tratarse como fuerzas misteriosas. Son consecuencia de exigir que el cambio siga siendo canonico.\r
\r
The professional question is whether the moving frame introduces effects through the change of description. The criterion turns those terms into controlled consequences.\r
\r
## 4. Diseno de integradores simplecticos\r
\r
Dominant variable: [[C]].\r
\r
Validity limit: discretizacion que conserva la forma simplectica.\r
\r
En computacion, una transformacion discreta puede conservar energia de forma aproximada pero destruir estructura de fase. El criterio canonico ayuda a construir algoritmos que respetan la geometria. The application conecta calculo numerico con fisica, no con estetica de trayectorias.\r
\r
The professional question is whether the numerical step preserves symplectic structure. The criterion favors physical stability over misleading local accuracy.\r
\r
## 5. Reduccion de grados de libertad\r
\r
Dominant variable: [[Q]].\r
\r
Validity limit: nuevas variables independientes y reversibles.\r
\r
Al elegir variables nuevas, algunas coordenadas pueden volverse ciclicas y simplificar el problema. The application ensena a distinguir reduccion legitima de perdida de informacion. Si no puede reconstruirse el sistema original, el cambio no es una transformacion canonica completa.\r
\r
The professional question is whether variable reduction preserves reconstructability. The criterion avoids losing information under an overly aggressive simplification.\r
\r
\r
## Cross-application reading\r
\r
Across these applications, a canonical transformation acts as a legitimacy test for a change of description. Shorter equations are not enough: the change must preserve the structure that makes the dynamics Hamiltonian. In action-angle variables, orbital perturbations, moving frames, or symplectic algorithms, the same question returns: do the new variables describe the same system or introduce another mechanics? For students, the benefit is learning to distrust substitutions that are too convenient. For teachers, the benefit is an assessable criterion: generator, new variables, canonical condition, transformed Hamiltonian, and physical reconstruction. When that chain holds, the application shows real reduction, not symbolic manipulation.\r
\r
\r
## Transfer criterion\r
\r
Transfer to new problems requires recognizing that algebraic convenience is not enough. First, state which old variables are abandoned and which new variables are introduced. Then state the generator or equivalent criterion connecting both descriptions. Finally, check canonical preservation and interpret the transformed Hamiltonian. This criterion works in perturbations, moving frames, action-angle variables, and numerical methods. The advanced application does not end with simpler coordinates, but with proving that those coordinates still describe the same mechanical flow and allow reconstruction of the original system.\r
\r
\r
## Advanced application closure\r
\r
Advanced use of canonical transformations must end each application with a decision about physical equivalence. It is not enough to show that equations look simpler; one must prove that the change preserves brackets, keeps reconstruction possible, and justifies any change in the Hamiltonian. In real problems, this separates an intelligent coordinate choice from silent loss of information. A student can transfer the criterion to perturbations, non-inertial frames, symplectic integrators, or action-angle variables by preserving the common chain: generator, variables, canonical condition, transformed Hamiltonian, and flow reading. That chain makes the application mechanics, not cosmetic change.\r
\r
## Professional Selection Criterion\r
\r
A canonical transformation is chosen when it reduces physical complexity while preserving Hamiltonian structure. In a real problem, it is not enough for the new variables to look convenient: they must preserve phase-space information, keep the conjugate relation between coordinates and momenta, and turn the new [[K]] into a more readable description. In celestial mechanics, Hamiltonian optics, perturbation theory, and molecular dynamics, this choice separates fast and slow motion, isolates invariants, and avoids unnecessary direct integrations. The point is not to rename variables, but to reveal which combination of variables contains the essential behavior of the system.\r
\r
This criterion also prevents a common advanced-course mistake: assuming that every algebraically valid substitution is physically legitimate. A substitution may simplify an equation and still destroy phase-space area or mix conjugate variables in an invalid way. That is why the applications of this leaf insist on checking the canonical condition before interpreting trajectories, effective energies, or constants of motion. The resulting habit is transferable to every advanced Hamiltonian model.\r
\r
`;export{e as default};
