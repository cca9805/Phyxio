# Propuesta de Estructuración Didáctica: Bloque de Electromagnetismo

Para integrar las fórmulas avanzadas de forma coherente con la filosofía de **Phyxio** y siguiendo el modelo del bloque de **Mecánica**, se propone un enfoque **híbrido** (creación de nuevos hojas/leaves y expansión de las existentes). 

La regla general del proyecto dicta que **cada leaf debe representar una única unidad conceptual o aplicación autodidacta**. Por lo tanto, no debemos sobrecargar hojas elementales (como la Ley de Coulomb) con ecuaciones complejas (como Poisson o tensores relativistas), sino estructurar el conocimiento de forma modular y progresiva.

---

## 1. Expansión de Leafs Existentes (Continuidad Didáctica)

Esta estrategia se aplica a conceptos que ya tienen una base establecida y donde añadir fórmulas complejas complementa la física del dispositivo o material sin cambiar el tema de estudio.

### A. Subbloque: [Electrostatica > Aplicaciones](file:///c:/Users/USER/Desktop/Phyxio/frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electrostatica/aplicaciones)

*   #### [MODIFY] [condensadores](file:///c:/Users/USER/Desktop/Phyxio/frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electrostatica/aplicaciones/condensadores/formulas.yaml)
    *   **Didáctica**: Centralizar el concepto de capacidad para diferentes simetrías físicas en una sola calculadora/experimento.
    *   **Nuevas fórmulas**:
        *   Capacidad de un condensador esférico: $C = 4\pi\epsilon_0 \frac{ab}{b-a}$
        *   Capacidad de un condensador cilíndrico: $C = \frac{2\pi\epsilon_0 L}{\ln(b/a)}$
        *   Capacidad de una esfera conductora aislada: $C = 4\pi\epsilon_0 R$

*   #### [MODIFY] [dielectricos](file:///c:/Users/USER/Desktop/Phyxio/frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electrostatica/aplicaciones/dielectricos/formulas.yaml)
    *   **Didáctica**: Conectar la descripción microscópica de polarización con los campos macroscópicos.
    *   **Nuevas fórmulas**:
        *   Vector Desplazamiento Eléctrico: $\mathbf{D} = \epsilon_0 \mathbf{E} + \mathbf{P}$
        *   Vector Polarización en medios lineales: $\mathbf{P} = \epsilon_0 (\varepsilon_r - 1)\mathbf{E}$

### B. Subbloque: [Magnetismo](file:///c:/Users/USER/Desktop/Phyxio/frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/magnetismo)

*   #### [MODIFY] [materiales-magneticos](file:///c:/Users/USER/Desktop/Phyxio/frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/magnetismo/materiales-magneticos/formulas.yaml)
    *   **Didáctica**: Completar la formulación de campos auxiliares magnéticos en medios materiales.
    *   **Nuevas fórmulas**:
        *   Relación general de campos: $\mathbf{B} = \mu_0(\mathbf{H} + \mathbf{M})$
        *   Magnetización en medios lineales: $\mathbf{M} = \chi_m \mathbf{H}$

---

## 2. Creación de Nuevos Leafs (Conceptos Avanzados Específicos)

Esta estrategia se reserva para formalismos matemáticos independientes o aplicaciones didácticas con suficiente peso teórico, tal como ocurre en Mecánica con *Mecánica Analítica* o *Sólido Rígido 3D*.

### A. Subbloque: [Electrostatica > Campo Electrostatico](file:///c:/Users/USER/Desktop/Phyxio/frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electrostatica/campo-electrostatico)

*   #### [NEW] `ecuaciones-de-poisson-y-laplace`
    *   **Didáctica**: Introduce las ecuaciones diferenciales parciales rectoras del potencial electrostático y el concepto de problemas de contorno.
    *   **Fórmulas**:
        *   Ecuación de Poisson: $\nabla^2 V = -\frac{\rho}{\epsilon_0}$
        *   Ecuación de Laplace: $\nabla^2 V = 0$
        *   Operador Laplaciano en coordenadas cartesianas, cilíndricas y esféricas.

*   #### [NEW] `dipolo-electrico`
    *   **Didáctica**: Analizar el comportamiento del dipolo como el bloque de construcción de la materia polarizable.
    *   **Fórmulas**:
        *   Momento dipolar: $\mathbf{p} = q\mathbf{d}$
        *   Potencial dipolar: $V(\mathbf{r}) = \frac{1}{4\pi\epsilon_0} \frac{\mathbf{p} \cdot \hat{\mathbf{r}}}{r^2}$
        *   Campo eléctrico dipolar: $\mathbf{E}(\mathbf{r}) = \frac{1}{4\pi\epsilon_0 r^3} [3(\mathbf{p} \cdot \hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{p}]$
        *   Torque y energía en campo externo: $\boldsymbol{\tau} = \mathbf{p} \times \mathbf{E}$, $U = -\mathbf{p}\cdot\mathbf{E}$

### B. Subbloque: [Magnetismo > Campo Magnetico](file:///c:/Users/USER/Desktop/Phyxio/frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/magnetismo/campo-magnetico)

*   #### [NEW] `dipolo-magnetico`
    *   **Didáctica**: El análogo magnético al dipolo eléctrico. Muy útil para introducir el espín y el magnetismo atómico.
    *   **Fórmulas**:
        *   Momento dipolar magnético: $\mathbf{m} = I\mathbf{A}$
        *   Torque en campo externo: $\boldsymbol{\tau} = \mathbf{m} \times \mathbf{B}$
        *   Energía potencial dipolar: $U = -\mathbf{m}\cdot\mathbf{B}$

### C. Subbloque: [Ecuaciones De Maxwell](file:///c:/Users/USER/Desktop/Phyxio/frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/ecuaciones-de-maxwell)

*   #### [NEW] `condiciones-de-contorno`
    *   **Didáctica**: Unificar las discontinuidades de los campos electromagnéticos en fronteras físicas en un solo leaf interactivo (con gráficos de líneas de campo quebrándose en la interfaz).
    *   **Fórmulas**:
        *   $D_{1n} - D_{2n} = \sigma_f$
        *   $E_{1t} - E_{2t} = 0$
        *   $B_{1n} - B_{2n} = 0$
        *   $H_{1t} - H_{2t} = K_{f} \times \hat{n}$

*   #### [NEW] `formalismo-covariante`
    *   **Didáctica**: Nivel universitario avanzado. Explica la unificación del espacio-tiempo y la naturaleza relativista del campo electromagnético.
    *   **Fórmulas**:
        *   Tensor electromagnético: $F^{\mu\nu} = \partial^\mu A^\nu - \partial^\nu A^\mu$
        *   Ecuación de Maxwell covariante: $\partial_\mu F^{\mu\nu} = \mu_0 J^\nu$
        *   Transformaciones de Lorentz de los campos $\mathbf{E}$ y $\mathbf{B}$.

### D. Subbloque: [Ondas Electromagneticas](file:///c:/Users/USER/Desktop/Phyxio/frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/ondas-electromagneticas)

*   #### [NEW] `lineas-de-transmision`
    *   **Didáctica**: Conexión entre la teoría de circuitos de corriente alterna y la propagación de ondas electromagnéticas guiadas.
    *   **Fórmulas**:
        *   Ecuaciones del telegrafista (sistema diferencial acoplado).
        *   Impedancia característica $Z_0$ y constante de propagación $\gamma$.
