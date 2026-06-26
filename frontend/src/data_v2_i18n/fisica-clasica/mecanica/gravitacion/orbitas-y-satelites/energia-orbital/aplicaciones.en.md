# Applications

## 1. Orbital transfer design

An orbital transfer is understood as a controlled change of energy. To move from a low orbit to a higher one, the spacecraft must make [[E]] or [[eps]] less negative. It is not enough to imagine that it "goes up"; energy must be supplied at the appropriate point so the new state is compatible with another semi-major axis [[a]].

Dominant variable: [[eps]], because it compares orbital energy before and after the maneuver without depending on spacecraft mass [[m]].

Validity limit: the ideal reading assumes short impulses and no drag. Real maneuvers include engine duration, gravity losses, perturbations, and guidance errors.

This application explains why a maneuver may increase speed at one point and nevertheless produce an orbit where average speed does not increase in a simple way. Energy fixes orbital size; maneuver geometry fixes where the change appears. In a teaching sequence, it also separates impulse, instantaneous speed, and final energy: a transfer is validated by the later energy balance, not merely by the fact that the rocket accelerates.

## 2. Escape speed and open trajectories

Escape speed is not an isolated magic speed, but the energetic condition where [[E]] or [[eps]] reaches the threshold [[E0]]. If the state remains below that threshold, the trajectory is bound. If it is above it, the object escapes with residual energy.

Dominant variable: [[E]] or [[eps]], because the sign relative to zero decides the classification. The speed [[v]] is only one part of the balance.

Validity limit: the criterion assumes a central field and no later thrust. In a real mission, other bodies may modify relative energy and change the trajectory.

This application prevents the error of deciding escape by speed alone. The same speed may be insufficient near a planet and sufficient farther away because [[U]] changes with [[r]]. Reaching escape does not mean reaching infinity during the exercise; it means having an energy state that no longer requires return in the ideal model.

## 3. Diagnosis of orbital decay

A satellite in low orbit loses energy through atmospheric drag. Although the conservative model does not describe dissipation, it diagnoses the effect: as mechanical energy is lost, the orbit becomes lower and the semi-major axis [[a]] decreases.

Dominant variable: [[E]], because it detects accumulated mechanical loss. [[K]] is also useful for seeing that local speed may increase while total energy decreases.

Validity limit: during atmospheric drag [[E]] is not conserved. The ideal model serves only as an instantaneous picture or as comparison between states before and after dissipation.

This application is didactically important because it breaks a false intuition: losing energy does not always mean moving slower at every instant. In low orbits, a satellite may move faster in a lower orbit while its total energy is more negative. For that reason, decay reports are read as loss of orbital capability, not only as altitude tables.

## 4. Selection of parking orbits

Before an interplanetary mission, a spacecraft may remain in a parking orbit. That orbit must be bound, stable, and energetically suitable so a later burn can reach escape or transfer. Orbital energy tells how much remains before the threshold [[E0]].

Dominant variable: [[eps]], because it gives the energy margin per unit mass that propulsion must supply.

Validity limit: the calculation does not include launch windows, inclination, nodes, or interplanetary geometry. It only establishes the initial energy budget.

The application shows that an orbit is not chosen only by altitude. A higher orbit is less bound and requires less energy to escape, but it may have other costs in operation, communication, or insertion. This criterion works as a preliminary filter before discussing windows, planes, phases, or communication constraints.

## 5. Comparing satellites of different mass

Two satellites with different masses can share exactly the same orbit. Their total energies [[E]] are different because they depend on [[m]], but their specific energy [[eps]] is the same if they share [[r]], [[v]], and [[M]]. This is why orbital catalogs use per-mass magnitudes when describing dynamical states.

Dominant variable: [[eps]], because it removes dependence on object mass.

Validity limit: if fuel, total mechanical work, or maneuver power are computed, one must return to [[E]] and to the real mass [[m]].

This application separates orbital description from mission energy cost. The orbital state may be identical for two objects, but the work needed to place them in that state scales with mass. The distinction is useful with different payloads: the orbital profile compares dynamics, while total energy sizes fuel and engines.

Across all five applications, orbital energy works as a diagnostic layer before detailed geometry. It tells whether the planned state is energetically allowed, whether the object remains tied to the central body, and how much margin separates the current trajectory from escape in the chosen model, before numerical propagation begins.
