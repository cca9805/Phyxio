# Canonical Transformations

## Conceptual context

Canonical Transformations is an advanced analytical-mechanics leaf devoted to changes of chart, symplectic preservation, generating functions, new variables, and equivalence of Hamiltonian descriptions. It appears after the basic Hamiltonian and Lagrangian language because it assumes that the student already distinguishes coordinates, momenta, energy functions, action, and model validity. Its purpose is not to add symbolic sophistication, but to give a criterion for deciding when a formal operation keeps the same physical system.

The magnitudes used in this leaf are [[q]], [[p]], [[Q]], [[P]], [[K]], [[Fgen]], [[C]]. They must be read as physical objects inside one coherent model, not as isolated letters. The student should be able to say what each magnitude measures, which assumptions make it meaningful, and what would break if the model were applied outside its domain.

## 🟢 Essential level

A canonical transformation answers a precise question: if old variables are replaced by new variables, am I still describing the same Hamiltonian system or only changing notation? The condition [[C]] does not validate algebraic convenience; it validates preservation of bracket structure and therefore of Hamilton's equations. The generating function la funcion generatriz is the bridge that makes that change controllable.

At this level, the important learning result is qualitative control. A student must be able to explain why the dominant quantity [[C]] matters before using the formulas. If the answer is only a number, the leaf has not been understood. The number is acceptable only after the student identifies the preserved structure, the approximation being used, or the equivalence between descriptions.

This also gives the teacher a clear diagnostic. If a learner can name the variables but cannot explain why the relation is valid, the difficulty is not algebraic; it is physical interpretation. The first intervention should therefore ask what structure is being tested and what assumption would make the result false.

## 🔵 Formal level

The formal contract of the leaf is expressed by these relations:

{{f:relacion_generatriz_tipo2}}

{{f:coordenada_nueva_generatriz}}

{{f:hamiltoniano_transformado}}

{{f:condicion_canonica_poisson}}

Each formula must be inserted as a statement about the model. The first relation defines the operative object of the leaf. The second relation shows how that object acts inside the dynamics. The third relation gives a criterion or a reduced version that is useful in problem solving. The fourth relation fixes a special structural condition that prevents the formalism from becoming arbitrary.

The variables [[q]], [[p]], [[Q]], [[P]], [[K]], [[Fgen]], [[C]] must therefore be synchronized across magnitudes, formulas, and interpretation. A valid calculation starts by identifying the physical role of [[C]], continues by checking whether the domain assumptions apply, and only then manipulates the equation. This order is essential in advanced mechanics because algebra can look correct even when the physical model has already failed.

The formal calculation must be read as an audit of the change of chart. First the old momentum is obtained from the generator; then the new coordinate is obtained; then the Hamiltonian is corrected if the generator depends on time. The canonical condition is not optional: it decides whether the new equations are still Hamilton equations and not a deformed dynamics.

## 🔴 Structural level

Structurally, this leaf separates useful coordinates from legitimate coordinates. A change may simplify the original Hamiltonian and still fail to be canonical. If it is canonical, the transformed Hamiltonian [[K]] produces the same kind of flow in the new variables. If the generator depends on time, [[K]] is not a copy of the original Hamiltonian; it includes the dynamical cost of changing description.

The structural reading is what separates this leaf from a procedural exercise. It asks whether the description is invariant, separable, conservative, linearized, or canonically admissible. A result that cannot answer that question is incomplete even if the substitutions are correct. In advanced mechanics, the goal is to preserve the architecture of the model while simplifying its calculation.

For this reason, limiting cases are part of the theory. A free particle, a harmonic oscillator, an autonomous Hamiltonian, or a stable equilibrium must be recovered when the leaf is specialized to that situation. If the limiting case is not recovered, the formal relation has probably been used outside the domain where it has physical meaning.

The deep structure is symplectic. A change can shorten an expression and still destroy oriented phase areas or canonical relations. When the transformation is legitimate, the system keeps its dynamical identity even though the descriptive variables change. This is the basis of action-angle variables and many perturbation methods.

## Deep physical interpretation

The deep interpretation is causal: [[C]] matters because it determines what the formalism preserves or changes. It can indicate a conserved observable, a valid change of variables, an action front, or a collective oscillation pattern. The student should read it as a cause of model structure, not as a decorative output.

## Order of magnitude

The order-of-magnitude check depends on the scale of the original system. In a regular mechanical problem, action-like quantities must remain comparable with energy times time, frequencies must remain compatible with the natural time scale, and dimensionless structural checks must stay close to their expected exact values. A deviation of more than roughly ten percent under an assumption labeled small, canonical, or separable is a warning sign.

## Personalized resolution method

First, identify the physical system and the variables [[q]], [[p]], [[Q]], [[P]], [[K]], [[Fgen]], [[C]]. Second, state the assumption that makes the advanced formalism legal. Third, choose the formula that tests that assumption. Fourth, interpret the result before simplifying. Fifth, compare with a limiting case. Sixth, decide whether the model has answered the original physical question.

## Special cases and extended example

In the simplest special case, the formal criterion becomes exact and can be checked without numerical integration. In a more realistic case, it becomes a diagnostic: it says whether a transformation, conservation law, separation, or linearized mode can be trusted. The extended example should therefore include both a symbolic step and a physical reading.

## Real student questions

Students usually ask whether this topic is only mathematical. The answer is no: it is mathematical language used to protect physical meaning. Another common question is whether the formulas replace Newton's laws. They do not erase them; they reorganize them so that structure, symmetry, and reduction become visible.

## Cross-cutting connections and study paths

This leaf connects with Hamilton's equations, Legendre transforms, variational principles, conservation laws, stability, perturbation theory, and numerical mechanics. It should be studied after the student can read generalized coordinates and before tackling modern topics where structure-preserving methods are essential.

## Final synthesis

As an operational closure, this topic must make clear that changing variables is not the same as changing physics. A student who masters the leaf can propose a generator, obtain new variables, check the canonical condition, and explain whether the new Hamiltonian keeps the same dynamics or introduces a necessary time correction.


After this leaf, the student should be able to use Canonical Transformations as a physical criterion. The final competence is not memorizing equations, but deciding when the advanced description is legitimate, what it preserves, and what kind of mechanical question it can answer.

This competence also reviews solutions in other topics: if a variable change simplifies but does not preserve structure, the result is no longer equivalent Hamiltonian mechanics. The leaf works as a legitimacy filter.
