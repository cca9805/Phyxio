# Models

## Ideal model

The ideal model is the starting point of the leaf. It assumes a linear spring response, negligible losses, and a single state variable that captures the stored energy. In this framework, [[Ue]] summarizes the energetic behavior of the system without needing the full time history.

This model is appropriate when deformation is small or moderate and the material remains inside its elastic zone. Its main advantage is clarity: it allows a direct move from observed deformation to stored energy with very few variables and a clean physical interpretation.

## Hypotheses

The model rests on three strong hypotheses. First, deformation is measured from the natural length. Second, the force-deformation relation remains linear. Third, the dissipative part is small enough to ignore in the first approximation. When any of these assumptions fails, the result is no longer a full description of the system.

In school-level use, these hypotheses are accepted because they provide a clear reading of the problem and because they are reliable for moderate deformations. The point is not to treat them as dogma, but as working conditions that must be checked before calculating.

## Quantitative validity domain

The validity domain should not be guessed only by intuition. A practical rule is to keep the relative deformation below a safety threshold, for example when the extension or compression is clearly small compared with the natural length. Another useful criterion is to verify that the force-deformation curve stays close to a straight line.

Operationally, if the response stops being proportional as the load increases, the linear model is no longer enough. The same happens if the piece shows mechanical memory, residual deformation, or visible stiffness changes. That quantitative threshold turns the model into a decision tool rather than a symbolic formula.

## Model failure signals

Failure signals appear when the spring no longer returns to its original state, when the applied stress leaves permanent marks, or when the predicted energy does not match the observation in a stable way. Failure also occurs when the algebra is consistent but the physical reading of the system is not.

Another signal is extreme sensitivity to very small deformation changes. If a tiny variation in [[x]] produces behavior that the real setup cannot support, the model must be revised before the calculation continues. The goal is to detect the mismatch early, not justify it at the end.

## Extended or alternative model

When the system leaves the ideal regime, the next step is to introduce losses, nonlinearities, or extra couplings. In some problems it is enough to keep the stored-energy idea and add a dissipative correction. In others, the spring must be described by a nonlinear law or by a combination of equivalent springs.

The transition is explicit: when the relative deformation exceeds the safe linear range, when hysteresis appears, or when the force-deformation curve is no longer close to a straight line, it is worth switching to the alternative model before continuing the calculation.

The alternative model does not invalidate the ideal one; it places it in its proper domain. That is why [[We]] remains useful as a conceptual reference, but it no longer represents the full balance by itself when friction or strong hysteresis appear.

## Operational comparison

Comparing models helps the learner decide quickly. The ideal model suits clean problems, the extended version works when losses matter, and the nonlinear model is needed when geometry or material behavior stops being proportional. The right choice depends on the physical question and on the required precision.

In practice the workflow is simple: identify the elastic element, check whether the range is linear, compute the corresponding energy, and only then decide whether the model must be expanded. That order avoids unnecessary mistakes and keeps the solution aligned with the real system.