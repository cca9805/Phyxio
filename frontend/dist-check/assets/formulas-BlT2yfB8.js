const e=`formulas:

  - id: fuerza_coulomb
    title:
      es: Ley de Coulomb
      en: Coulomb's Law
    equation: "F_C = k_e * q1 * q2 / r^2"
    latex: "F_C = k_e \\\\frac{q_1 \\\\, q_2}{r^2}"
    rearrangements:
      - target: q1
        equation: "q1 = F_C * r^2 / (k_e * q2)"
        latex: "q_1 = \\\\frac{F_C \\\\, r^2}{k_e \\\\, q_2}"
      - target: q2
        equation: "q2 = F_C * r^2 / (k_e * q1)"
        latex: "q_2 = \\\\frac{F_C \\\\, r^2}{k_e \\\\, q_1}"
      - target: r
        equation: "r = sqrt(k_e * q1 * q2 / F_C)"
        latex: "r = \\\\sqrt{\\\\frac{k_e \\\\, q_1 \\\\, q_2}{F_C}}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "La fuerza eléctrica entre dos cargas puntuales es proporcional al producto de sus cargas e inversamente proporcional al cuadrado de la distancia que las separa. La constante k_e fija la escala en el sistema SI."
      en: "The electric force between two point charges is proportional to the product of their charges and inversely proportional to the square of the distance separating them. The constant k_e sets the scale in the SI system."
    constraints:
      - "Cargas puntuales o esferas con distribución simétrica evaluadas fuera de ellas"
      - "Medio uniforme (vacío o dieléctrico homogéneo)"
      - "r > 0 (las cargas no se superponen)"
      - "Cargas en reposo o a velocidades muy inferiores a c"
    validity:
      es: "Válida para cargas puntuales separadas por distancias mucho mayores que el tamaño de las cargas. Falla a distancias nucleares (menor a 10^-15 m) donde dominan fuerzas fuertes."
      en: "Valid for point charges separated by distances much larger than the charge size. Fails at nuclear distances (below 10^-15 m) where the strong force dominates."
    dimension_check: "N·m²·C^-2 · C · C / m² = N ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - equilibrio electrostático
      - campo eléctrico de carga puntual
      - ligadura atómica clásica
    interpretation_tags:
      - coulomb_force_magnitude
      - inverse_square_law
      - charge_sign_effect
      - distance_dependence
    result_semantics:
      target: F_C
      kind: signed_force
      sign_meaning:
        es: "Positivo indica repulsión (q1 y q2 del mismo signo); negativo indica atracción (signos contrarios). El módulo mide la intensidad de la interacción."
        en: "Positive indicates repulsion (q1 and q2 same sign); negative indicates attraction (opposite signs). The magnitude measures the interaction strength."
      absolute_value_meaning:
        es: "El módulo de la fuerza indica la intensidad de la interacción eléctrica: cuanto mayor, más aceleración experimenta cada carga si no hay otras fuerzas."
        en: "The force magnitude indicates the intensity of the electric interaction: the larger it is, the more acceleration each charge experiences if no other forces act."
    domain_checks:
      - id: dc_r_zero
        condition: "r <= 0"
        message:
          es: "La distancia r debe ser estrictamente positiva. Un valor nulo o negativo indica un error en los datos del problema."
          en: "The distance r must be strictly positive. A zero or negative value indicates an error in the problem data."
      - id: dc_both_charges_zero
        condition: "q1 == 0 and q2 == 0"
        message:
          es: "Ambas cargas son nulas: no existe interacción eléctrica y la fuerza es cero."
          en: "Both charges are zero: there is no electric interaction and the force is zero."
      - id: dc_large_force
        condition: "abs(F_C) > 1e6"
        message:
          es: "Fuerza mayor de 10^6 N: verifica que las cargas estén en culombios y la distancia en metros. Las cargas macroscópicas raramente superan 10^-3 C."
          en: "Force exceeding 10^6 N: verify that charges are in coulombs and distance in metres. Macroscopic charges rarely exceed 10^-3 C."
    coherence_checks:
      - id: cc_sign_consistency
        condition: "q1 * q2 > 0 and F_C < 0"
        message:
          es: "Cargas del mismo signo deberían producir fuerza repulsiva (positiva). Revisa el signo de la fuerza calculada."
          en: "Same-sign charges should produce repulsive (positive) force. Check the sign of the calculated force."
      - id: cc_attraction_consistency
        condition: "q1 * q2 < 0 and F_C > 0"
        message:
          es: "Cargas de signo contrario deberían producir fuerza atractiva (negativa). Revisa el signo de la fuerza calculada."
          en: "Opposite-sign charges should produce attractive (negative) force. Check the sign of the calculated force."
    graph_implications:
      - "La gráfica F_C frente a r muestra una curva hiperbólica de segundo orden (1/r^2): decrece rápidamente al aumentar r."
      - "En escala logarítmica la gráfica es una línea recta de pendiente -2."
      - "Para r fijo, F_C varía linealmente con cada una de las cargas."
    pedagogical_triggers:
      - id: pt_linear_error
        condition: "student_uses_1_over_r_instead_of_r_squared"
        message:
          es: "Error frecuente: usar 1/r en lugar de 1/r^2. Al duplicar r la fuerza cae a una cuarta parte, no a la mitad."
          en: "Common error: using 1/r instead of 1/r^2. Doubling r reduces the force to one quarter, not one half."
      - id: pt_units_error
        condition: "charge_not_in_coulombs"
        message:
          es: "Verifica las unidades de las cargas. Trabajar con microcoulombios sin convertir a culombios produce resultados erróneos en un factor 10^-12."
          en: "Check charge units. Working with microcoulombs without converting to coulombs produces results wrong by a factor of 10^-12."

  - id: campo_electrico_coulomb
    title:
      es: Campo eléctrico de carga puntual
      en: Electric field of a point charge
    equation: "E_C = k_e * q1 / r^2"
    latex: "E_C = k_e \\\\frac{q_1}{r^2}"
    rearrangements:
      - target: q1
        equation: "q1 = E_C * r^2 / k_e"
        latex: "q_1 = \\\\frac{E_C \\\\, r^2}{k_e}"
      - target: r
        equation: "r = sqrt(k_e * q1 / E_C)"
        latex: "r = \\\\sqrt{\\\\frac{k_e \\\\, q_1}{E_C}}"
    category: derived
    relation_type: definition
    physical_meaning:
      es: "El campo eléctrico en un punto a distancia r de una carga puntual q1 mide la fuerza por unidad de carga de prueba. Es una propiedad del espacio creada por q1, independiente de q2."
      en: "The electric field at a point at distance r from a point charge q1 measures the force per unit test charge. It is a property of space created by q1, independent of q2."
    constraints:
      - "q1 es la carga fuente puntual"
      - "r es la distancia al punto de evaluación"
      - "El campo se evalúa en vacío o medio dieléctrico homogéneo"
    validity:
      es: "Válida para cualquier distancia r > 0 desde una carga puntual ideal. En distribuciones reales de carga, válida fuera de la distribución."
      en: "Valid for any distance r > 0 from an ideal point charge. For real charge distributions, valid outside the distribution."
    dimension_check: "N·m²·C^-2 · C / m² = N/C ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - definición operativa del campo eléctrico
      - superposición de campos de múltiples cargas
      - líneas de campo
    interpretation_tags:
      - electric_field_magnitude
      - field_from_source_charge
      - radial_dependence
    result_semantics:
      target: E_C
      kind: signed_field
      sign_meaning:
        es: "Positivo si q1 es positiva (campo apunta hacia fuera, alejándose de la carga fuente); negativo si q1 es negativa (campo apunta hacia la carga fuente)."
        en: "Positive if q1 is positive (field points outward, away from source charge); negative if q1 is negative (field points toward source charge)."
      absolute_value_meaning:
        es: "El módulo del campo indica la fuerza que experimentaría una carga de prueba unitaria positiva colocada en ese punto."
        en: "The field magnitude indicates the force that a positive unit test charge placed at that point would experience."
    domain_checks:
      - id: dc_r_positive
        condition: "r <= 0"
        message:
          es: "La distancia r debe ser positiva para calcular el campo eléctrico de una carga puntual."
          en: "The distance r must be positive to calculate the electric field of a point charge."
    coherence_checks:
      - id: cc_field_force_relation
        condition: "abs(E_C) > 0 and q2 != 0"
        message:
          es: "Recuerda que la fuerza sobre una segunda carga q2 es el producto de E_C por q2. El campo es independiente de q2."
          en: "Remember that the force on a second charge q2 is the product of E_C and q2. The field is independent of q2."
    graph_implications:
      - "La gráfica E_C frente a r tiene la misma forma hiperbólica que F_C frente a r: caída cuadrática inversa."
      - "A diferencia de F_C, el campo no depende de q2 y su gráfica caracteriza a la carga fuente q1 de forma independiente."
    pedagogical_triggers:
      - id: pt_field_vs_force
        condition: "student_confuses_field_with_force"
        message:
          es: "El campo eléctrico E_C existe aunque no haya segunda carga. La fuerza F_C requiere q2. Recuerda: F_C = E_C · q2."
          en: "The electric field E_C exists even without a second charge. The force F_C requires q2. Remember: F_C = E_C · q2."
`;export{e as default};
