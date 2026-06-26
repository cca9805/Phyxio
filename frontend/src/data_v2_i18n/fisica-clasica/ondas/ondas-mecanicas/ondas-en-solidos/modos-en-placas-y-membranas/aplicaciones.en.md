# Applications

## 1. Noise control in machine panels

Dominant variable: [[f_mn]], because it identifies the modes that can couple to audible excitation.
Validity limit: the model works for thin, simply supported metal panels with small vibration amplitude; it breaks down for very stiffened, heavily damped, or perforated assemblies.

Metal covers, motor housings, elevator panels, and industrial enclosures often behave as vibrating plates. When a periodic source, such as an electric motor or pump, excites a frequency close to [[f_mn]], the panel can amplify radiated sound. Modal calculation helps anticipate which modes fall inside the audible range and which regions of the plate will have the largest amplitude.

The technical intervention depends on the physical reading of the mode. Increasing [[h_placa]] raises [[rigidez_a_la_flexion_de_la_placa]] very strongly, whereas adding mass increases [[rho_s]] and lowers frequencies. Changing [[a_dim]] or [[b_dim]] through stiffeners modifies the available nodal patterns. Therefore design is not simply a matter of "making the part thicker"; it is a matter of moving the problematic mode away from the excitation or increasing its damping.

The model limit appears when the edges are not truly fixed, the plate has folds, holes, or reinforcements, or damping cannot be ignored. In those cases the analytical calculation is a first estimate and should be complemented by experimental measurement or finite-element analysis.

## 2. Percussion instruments and tensioned membranes

Dominant variable: [[tension_superficial_de_la_membrana]], because the membrane frequency is mainly set by surface tension in instruments such as drums and loudspeaker membranes.
Validity limit: the membrane model fails if tension is non-uniform, the boundary is poorly clamped, or bending stiffness becomes significant.

Drum heads, timpani, and loudspeaker membranes are understood through membrane modes. The dominant restoring effect is not [[rigidez_a_la_flexion_de_la_placa]], but the surface tension [[tension_superficial_de_la_membrana]]. Increasing [[tension_superficial_de_la_membrana]] raises all modal frequencies; increasing [[rho_mem]] lowers them. This relation explains drum tuning and also why two heads of equal size can sound different if their surface masses differ.

The ideal rectangular membrane formula:

{{f:frecuencia_modal_membrana}}

summarizes the essential dependence, although many real instruments are circular. The lasting teaching point is that each frequency corresponds to a spatial nodal pattern, not to a uniform oscillation of the whole surface. In percussion, higher modes strongly affect timbre because they do not form a simple harmonic series.

The model fails if tension is not uniform, if the boundary is poorly clamped, if the head has appreciable bending stiffness, or if vibration amplitude is large. In a real instrument, the coupled air and shell also modify the observed frequencies.

## 3. Loudspeaker, diaphragm, and microphone design

Dominant variable: [[rigidez_a_la_flexion_de_la_placa]], because bending stiffness controls the breakup of diaphragms and determines the first problematic mode in many audio devices.
Validity limit: the plate approximation is valid only when the diaphragm behaves like a thin plate and not like a highly tensioned membrane or a strongly curved shell.

Loudspeaker and microphone diaphragms must move in a controlled way. At low frequencies the surface is intended to move almost like a piston, but at higher frequencies bending modes appear. When those modes enter the useful band, the response becomes irregular: some diaphragm regions radiate in phase while others radiate in opposition.

The designer controls [[rigidez_a_la_flexion_de_la_placa]], [[rho_s]], [[a_dim]], and [[b_dim]] through material, thickness, geometry, and boundary treatment. A stiffer diaphragm pushes breakup modes to higher frequencies; a lighter one improves sensitivity but may be more susceptible to unwanted modes. Reading the nodal pattern shows where material changes, corrugations, or suspension adjustments are useful.

This application requires distinguishing plate and membrane behaviour. A rigid dome works closer to the plate model; a highly tensioned film works closer to the membrane model. Confusing both regimes leads to wrong predictions about how [[f_mn]] changes when thickness or tension is modified.

## 4. Modal testing in civil and aerospace engineering

Dominant variable: [[f_mn]], because modal frequencies are the signature of structural stiffness and boundary conditions in large plates and skins.
Validity limit: the simple rectangular plate estimate becomes inaccurate for curved, stiffened, or sandwich structures, and for panels whose boundaries are not well characterised.

Plates are not only laboratory objects. Floors, fuselage panels, covers, decks, and composite skins have two-dimensional modes that affect fatigue, vibration comfort, and structure-borne noise. In a modal test, the structure is excited with an instrumented hammer or shaker and the response is measured at several points. Spectrum peaks are associated with [[f_mn]] values, and phase maps reveal nodal patterns.

The analytical estimate:

{{f:frecuencia_modal_placa}}

is useful for checking whether a measured frequency is plausible. If an experimental mode appears much lower than expected, it may indicate less rigid boundaries, added mass, structural damage, or an incorrectly represented boundary condition. If it appears much higher, there may be stiffeners or couplings not included in the simple model.

The main limit is geometric complexity. A composite, curved, or stiffened plate is not described by a single pair [[a_dim]], [[b_dim]]. Even so, the elementary model provides the correct vocabulary: modal frequency, spatial index, nodal line, effective stiffness, and surface inertia.

## 5. Architectural acoustics and vibration control in partitions

Dominant variable: [[rho_s]], because surface inertia determines how easily a panel is excited by airborne sound.
Validity limit: the ideal plate analysis is limited when damping, joints, air cavities, or multi-panel coupling dominate sound transmission.

Light walls, windows, floating floors, and gypsum panels can transmit sound because they vibrate as plates. When an incident acoustic wave coincides with a structural mode, the partition radiates sound more efficiently to the other side. Therefore the sound insulation of a wall depends not only on mass, but also on its natural modes.

Computing [[rho_s]] with:

{{f:densidad_superficial_placa}}

helps estimate surface inertia, while [[rigidez_a_la_flexion_de_la_placa]] describes resistance to curvature. Adding a heavy layer increases mass and often improves insulation in some bands, but it can shift resonances. Changing edge fixation or decoupling panels can alter dominant modes without greatly changing total mass.

The validity of the ideal analysis is limited in real buildings because damping, imperfect joints, air cavities, and coupling with other elements are present. Nevertheless, the central idea remains operational: each panel has a modal spectrum, and noise problems appear when that spectrum couples to sources or rooms.