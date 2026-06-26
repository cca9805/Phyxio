# Wave Equation

## Conceptual context

The **wave equation** is not a formula for direct numerical substitution. It is a differential law that states when a disturbance can propagate as a wave in a linear medium. Its central idea is to compare the spatial shape of the disturbance with its temporal change.

Within the wave block, this equation has a structural role: it connects the concept of disturbance with concrete models of strings, sound, light, or signals. It explains why certain shapes travel, why medium speed matters, and why a harmonic solution is not a decorative drawing.

## 🟢 Essential level

A traveling wave has shape and change. The shape is observed by looking at how [[y]] varies along [[x]]. The change is observed by looking at how [[y]] evolves with [[t]]. The wave equation joins those two readings.

If a string is strongly curved in one region, local motion changes more rapidly. The speed [[v]] measures how that change is transmitted through the medium. The amplitude [[A]] only scales the visible size of the disturbance.

The essential idea is local: one does not need to imagine the whole string at once. It is enough to inspect a small neighborhood and ask whether the observed shape can produce the later change.

> [!TIP]
> The essential question is not "which number comes out", but whether the spatial shape of the disturbance is compatible with the observed temporal evolution.

## 🔵 Formal level

The one-dimensional form of the law relates the second temporal derivative to the second spatial derivative:

{{f:ecuacion_onda_1d}}

The temporal part measures local acceleration of the disturbance. The spatial part measures curvature. The constant [[v]] appears squared because it converts spatial curvature into temporal acceleration with coherent units.

The formal step is to stop looking only at the height of the profile. The law compares operators applied to [[y]]: one reads how the motion changes in time and the other reads how the shape changes in space. Two points with the same displacement can evolve differently if they belong to regions with different spatial neighborhoods. This is the difference between describing a graph and applying a dynamical law.

An important family of solutions is the traveling harmonic wave:

{{f:solucion_armonica}}

This expression does not define every possible wave, but it serves as a base solution. [[A]] fixes the vertical scale, [[k]] fixes spatial repetition, and [[omega]] fixes the temporal rate of phase. Substituting this form into the law leads to the phase-speed relation:

{{f:velocidad_fase}}

The formal reading is clear: [[v]] does not come from amplitude, but from the quotient between temporal phase rate and spatial repetition. Therefore two solutions with different amplitude can propagate at the same speed if they share the medium and phase relation.

Formal control means reading each symbol through its physical role. [[A]] changes the size of the disturbance, [[k]] compresses or stretches the profile in space, and [[omega]] sets the temporal phase rate. The equation requires those choices to be compatible with the same [[v]]. If the quotient between temporal scale and spatial scale does not match the medium speed, the expression does not represent a physical solution of that system.

## 🔴 Structural level

The wave equation expresses an architecture of local coupling. Each point of the medium does not evolve in isolation: its state is constrained by the shape presented by neighboring regions. On a string, tension transmits that mechanical information; in a fluid, compressions and rarefactions do it; in electromagnetic fields, field equations produce an equivalent structure.

The deep point is that the law selects admissible evolutions, not isolated drawings. A graph of [[y]] versus [[x]] may be compatible with many different temporal histories. To accept one as a wave of the model, the dependence on [[t]] must close with the spatial dependence and with the speed [[v]] of the medium.

There are also structural limits. The form written here assumes a linear medium, approximate homogeneity, and a stable speed [[v]]. Linearity means that doubling the disturbance does not change the medium response. Homogeneity means that equivalent regions obey the same speed. Stable speed means that profile components do not separate because they have different scales.

Validity analysis compares observations with those hypotheses. If speed depends on frequency, dispersion appears and the pulse spreads. If [[A]] decreases with distance, a loss term is needed. If the disturbance modifies tension, density, or stiffness, nonlinearity appears. If nearby ends exist, boundaries select modes and reflections. Then the simple equation remains a reference, but it must yield to a model with losses, dispersion, boundaries, or nonlinearity.

A complete structural reading also includes superposition and boundaries. Superposition depends on the linearity of the operator, not on a drawing rule. A fixed end, a junction between media, or a cavity does not change the local law, but it restricts which solutions can exist. The depth of the model lies in combining local law, boundary conditions, and medium properties without confusing those three levels.

The practical signal for changing model is clear: if the shape travels with little deformation, the ideal equation works; if the pulse spreads, fades, or generates new frequencies, more physical structure is required.

> [!WARNING]
> The wave equation does not say that every curve is a wave. Only disturbances whose temporal evolution keeps balance with spatial curvature are solutions.

This structural view is also useful when a graph is available. The eye should not only follow crests; it should compare where the profile bends strongly, where the scale set by [[k]] is short, and where the evolution expected from [[v]] is faster.

## Deep physical interpretation

The wave equation teaches one to read a disturbance as a process, not as a drawing. Spatial curvature is a clue to how the shape "pushes" the system to change. Where the curve bends more, the model requires a stronger temporal response.

This explains why a harmonic solution is so useful. The sinusoidal function keeps its shape while advancing: it changes phase position, but preserves a stable relation between curvature and acceleration. That stability allows phase speed to be discussed without following every element of the medium point by point.

## Order of magnitude

On a classroom string, [[v]] may lie between 1 m/s and 100 m/s. In sound in air, speed is of order hundreds of m/s. In light, the scale is hundreds of millions of m/s. These differences show that the same mathematical structure can represent very different physical domains.

An absurd result is detected by comparing scales. If a laboratory string gives a speed comparable to light, units have been mixed or a relation has been used outside its domain. If [[k]] is enormous for a wavelength visibly drawn on a string, the spatial scale was probably measured incorrectly.

## Personalized resolution method

First identify whether the problem asks you to verify a law or use a solution. If it asks for verification, compare spatial curvature and temporal change. If it asks for a concrete disturbance, use the harmonic solution and fix [[x]] and [[t]].

Second, separate parameters: [[A]] scales height, [[k]] controls spatial structure, [[omega]] controls temporal phase rate, and [[v]] connects both phase rates. Third, check the domain: linear medium, stable speed, and sufficiently small amplitude.

## Special cases and extended example

A pulse can satisfy the wave equation even if it is not sinusoidal. The harmonic solution is an elementary piece, not the only possible case. Many shapes can be built as combinations of harmonic components if the medium is linear.

Subtle case: a standing wave may come from two opposite traveling waves and still obey the equation. In it there is no net advance of crests, but the balance between spatial curvature and temporal change remains the key.

Extended example: if a string admits a solution with large [[k]] and proportionally large [[omega]], [[v]] can remain the same. The wave looks more compressed in space and oscillates faster, but phase advances with the same speed if the phase quotient is preserved.

## Real student questions

**Why does a second derivative appear?** Because the law relates temporal acceleration to spatial curvature, not merely position to time.

**Does amplitude change wave speed?** In the ideal linear model, [[A]] scales the disturbance, but [[v]] depends on medium properties and the phase relation.

**Is every sine curve automatically a solution?** Only if its parameters [[k]], [[omega]], and [[v]] respect the phase relation required by the law.

**Why does this apply to many different waves?** Because many linear systems share the same structure: a local variable changes in time according to how it is curved in space.

## Cross-cutting connections and study paths

Before this leaf, it is useful to master [concept of a wave](leaf:fisica-clasica/ondas/fundamentos/concepto-de-onda), [phase](leaf:fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/fase), and [propagation speed](leaf:fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/velocidad-de-propagacion). Afterward, the equation prepares standing waves, superposition, dispersion, and transported energy.

It also connects with continuum mechanics and electromagnetism. In each domain the material quantities change, but the central question remains: what relation does the dynamics impose between spatial form and temporal evolution?

## Final synthesis

The wave equation is the law that turns a spatial shape into a compatible temporal evolution. Its central reading is the balance between curvature, temporal change, and propagation speed; harmonic solutions are privileged examples, not mere drawings.
