const e=`# Applications\r
\r
## 1. Vibracion de estructuras\r
\r
Dominant variable: [[omega]].\r
\r
Validity limit: desplazamientos pequenos respecto al equilibrio.\r
\r
En puentes y edificios, las frecuencias normales indican que excitaciones son peligrosas. El modo [[phi]] muestra la forma de deformacion asociada. The application ensena que no basta saber cuanto vibra un punto; hay que saber que patron colectivo se activa.\r
\r
The professional question is which deformation pattern concentrates risk. The criterion joins frequency and modal shape so local displacements are not read in isolation.\r
\r
## 2. Moleculas y espectros\r
\r
Dominant variable: [[phi]].\r
\r
Validity limit: enlaces cerca de equilibrio y respuesta aproximadamente armonica.\r
\r
Las moleculas vibran mediante modos colectivos que pueden asociarse a senales espectroscopicas. La matriz [[K]] representa curvaturas del potencial y [[M]] pondera masas atomicas. The student conecta autovalores con informacion fisica medible.\r
\r
The professional question is which molecular mode produces an observable signal. The criterion connects masses, curvatures, and spectrum in an interpretable way.\r
\r
## 3. Instrumentos musicales\r
\r
Dominant variable: [[omega]].\r
\r
Validity limit: amplitudes moderadas y material casi lineal.\r
\r
Una cuerda, membrana o caja resonante produce tonos por modos normales. The application muestra por que cambiar masa, tension efectiva o rigidez desplaza frecuencias. El objetivo didactico es separar tono, forma modal y amplitud.\r
\r
The professional question is which vibrational shape creates the tone. The criterion separates frequency, amplitude, and instrument geometry.\r
\r
## 4. Suspension de vehiculos\r
\r
Dominant variable: [[A]].\r
\r
Validity limit: oscilaciones pequenas alrededor de la posicion de trabajo.\r
\r
Un vehiculo puede tener modos de cabeceo, balanceo y rebote. La amplitud modal indica que modo domina bajo una excitacion concreta. Esta lectura ayuda a disenar sistemas que evitan resonancias incomodas o peligrosas.\r
\r
The professional question is which mode dominates comfort or safety. The criterion turns modal amplitude into a design decision.\r
\r
## 5. Robots y estabilidad\r
\r
Dominant variable: [[eta]].\r
\r
Validity limit: linealizacion local alrededor de una postura estable.\r
\r
En robots articulados, los modos normales permiten estudiar pequenas desviaciones de equilibrio. Si el modo crece o la frecuencia no es real, la postura no es estable bajo el modelo lineal. The application conecta mecanica analitica con control y diseno.\r
\r
The professional question is whether the posture returns to equilibrium or amplifies perturbations. The criterion uses modes to read local stability.\r
\r
\r
## Cross-application reading\r
\r
Across these applications, normal modes act as a language of stability and collective response. Frequency is not interpreted alone: it must be tied to a modal shape, a small scale, and an equilibrium around which linearization is meaningful. In structures, molecules, instruments, vehicles, or robots, the common question is which pattern is activated and why that activation matters. For students, the benefit is moving from many coupled coordinates to intelligible collective motions. For teachers, the benefit is a clear sequence: equilibrium, matrices, eigenvalues, modes, amplitudes, and validity limit. When that sequence holds, the application teaches real vibration reading, not only matrix algebra.\r
\r
\r
## Transfer criterion\r
\r
Transfer to new problems requires recognizing equilibrium and the scale where linearization is honest. First, define displacement from equilibrium and check that it is small. Then build the matrices representing inertia and stiffness, solve the modal problem, and interpret each frequency together with its shape. Finally, decide which modes participate according to initial conditions or external excitation. This criterion works in structures, molecules, instruments, vehicles, and robots. The advanced application does not end with eigenvalues, but with reading collective patterns and validity limits.\r
\r
\r
## Advanced application closure\r
\r
Advanced use of normal modes must end each application with a decision about stability and collective response. It is not enough to compute frequencies; one must explain which modal shape vibrates, which amplitude participates, which scale keeps linearization valid, and what would happen if excitation grew. In real problems, this separates a table of eigenvalues from mechanical interpretation. A student can transfer the criterion to buildings, molecules, instruments, vehicles, or robots by preserving the common chain: equilibrium, small displacement, matrices, eigenvalues, modes, and superposition. That chain turns calculation into physical reading of complex systems.\r
\r
## Advanced Modeling Criterion\r
\r
Small-oscillation analysis is used when a real system can be understood as a controlled deviation around an equilibrium configuration. The central physical decision is to check that the amplitude of [[eta]] is small enough for linear terms to dominate and that the matrices [[M]] and [[K]] faithfully represent local inertia and stiffness. In that regime, normal modes are not just a mathematical technique: they identify collective patterns that the system can sustain with a definite frequency and a stable spatial shape.\r
\r
This criterion appears in structures, molecules, crystal lattices, musical instruments, machine vibration, and the stability of mechanical configurations. If a frequency [[omega]] is real and positive, the equilibrium can respond through organized oscillation; if a zero or imaginary frequency appears, the model points to an unconstrained freedom or an instability. That is why the leaf must teach students to read the modal spectrum as a physical diagnosis rather than as a list of roots. The advanced objective is to recognize which parts of a system move together, which couplings transmit energy, and which conditions make a linear approximation unreliable.\r
\r
`;export{e as default};
