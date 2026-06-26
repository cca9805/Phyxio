const e=`# Ropes

## Conceptual context

A taut string is the cleanest classical example of a **mechanical standing wave**. The disturbance is transverse, but energy first travels along the string through two opposite traveling waves. When the ends are fixed, those waves reflect and only some patterns are reinforced in a stable way. The visible result is not a wave moving forward, but a shape that vibrates with fixed nodes and alternating antinodes.

This leaf treats the string as a **specific physical system**, not only as a general geometric condition. Three real choices matter: the vibrating length [[L]], the tension [[T]], and the linear density [[mu]]. From them one obtains the propagation speed [[v]] and then the modal frequency [[f_n]] for each mode number [[n]].

## 🟢 Essential level

A string fixed at both ends cannot adopt any arbitrary standing shape. The ends must remain at rest, so they act as nodes. Between them only patterns with an integer number of antinodes fit. Therefore [[n]] is not a decorative label: it counts a possible vibration shape.

The essential idea is that the string combines **geometry and mechanics**. Geometry decides how many waves fit through [[L]] and [[lambda_n]]. Mechanics decides how fast those waves travel through [[T]] and [[mu]]. If the string is made tighter, the disturbance is communicated sooner. If the string is heavier per metre, it responds with more inertia.

> [!NOTE]
> The standing string is not motionless. What stays fixed is the spatial pattern of nodes and antinodes.

## 🔵 Formal level

The first formal step is to obtain the speed of the transverse waves that run along the string. In the ideal model, that speed depends on the longitudinal pull and the mass per unit length.

{{f:velocidad_cuerda_tensa}}

This relation does not say that tension turns into speed by simple direct proportionality. The square root expresses a balance between an action that transmits force, [[T]], and distributed inertia, [[mu]]. Therefore increasing tension strongly gives a moderate rise in [[v]], while using a denser string lowers the speed.

The second step joins the speed with the fixed-end condition. For mode [[n]], the allowed frequency is tied to the vibrating length:

{{f:frecuencia_modo_cuerda}}

The same string has a ladder of frequencies. If [[L]] and [[v]] remain fixed, every integer increase in [[n]] raises [[f_n]]. The fundamental mode corresponds to the first pattern with one antinode; higher modes introduce more antinodes and internal nodes.

The modal wavelength follows from the spatial fit:

{{f:longitud_onda_modo_cuerda}}

Thus [[lambda_n]] is not chosen freely. The string forces an integer number of half-wavelengths to fit between fixed ends. This is the mathematical reason why harmonics appear as discrete possibilities.

## 🔴 Structural level

The deep structure of the phenomenon is a **double selection**. First, the string selects a family of spatial shapes because its ends impose nodes. Second, its mechanical properties assign a time scale to each shape. The same geometry with another tension or another linear density keeps the nodes and antinodes, but shifts all frequencies.

The dependence has important consequences. Increasing [[L]] separates the end nodes and allows longer patterns; therefore it lowers the frequency scale. Increasing [[T]] makes transmission of the disturbance more effective; therefore it raises [[v]] and then [[f_n]]. Increasing [[mu]] distributes more mass in every metre; therefore it lowers speed and makes the string deeper. Increasing [[n]] does not modify the material string, but selects a more compressed spatial pattern.

The model becomes unreliable when its assumptions stop describing the real object. In a thick guitar string, bending stiffness shifts high modes and separates them from the ideal series. With large amplitudes, tension changes during oscillation and nonlinearity appears. With strong damping, the pattern may be visible only briefly even though the natural frequency exists.

There is also a subtle difference between a **driven** string and a **resonant** string. A string can be moved with almost any frequency, but only near its natural frequencies does a large stable standing pattern appear. The Coord graph should reflect this reading: the integer mode determines the antinode count, while [[T]], [[mu]], and [[L]] set the quantitative label of [[f_n]].

> [!WARNING]
> If [[n]] is not an integer, you are not describing a natural mode of an ideal fixed-fixed string.

## Deep physical interpretation

The standing string is a reading of **compatibility**. The spatial shape is not imposed from outside as an arbitrary drawing; it appears because reflected waves reinforce only if they return with phase compatible with the fixed ends. Each return of the disturbance must rebuild the same pattern instead of erasing it.

Frequency is not an isolated property of the instrument or an isolated property of the mode. [[f_n]] is born from combining the spatial pattern with the speed [[v]]. Therefore the same note can be raised by tightening the string, shortening the vibrating span, or using a lighter string. The three actions change different physical causes, although all can move the final frequency.

## Order of magnitude

In a laboratory string with [[L]] close to 1 m, tension of tens of newtons, and [[mu]] of a few grams per metre, [[v]] usually falls between tens and a few hundreds of metres per second. That gives fundamental frequencies from tens to hundreds of hertz. If a calculation gives several megahertz for a visible classroom string, a too small [[mu]] or a unit conversion error is likely.

Comparing orders of magnitude detects mistakes. A string ten times heavier per metre does not lower frequency tenfold, because a square root is involved. A string ten times shorter can raise frequency much more directly when the other quantities remain comparable.

## Personalized resolution method

First identify the real vibrating span [[L]], not the total material length. Then decide whether the string can be treated as uniform and taut. With [[T]] and [[mu]], compute the speed [[v]]. Next choose an integer mode [[n]] and obtain [[lambda_n]] to check the spatial fit. Finally compute [[f_n]] and test whether the value makes sense for the observed string.

The quickest self-check is visual: the selected mode must have [[n]] antinodes and nodes at both ends. If the drawing does not match the mode used in the calculation, the numerical frequency is disconnected from the phenomenon.

## Special cases and extended example

The fundamental case has one antinode. It is didactically stable because it shows that the whole string contains half a modal wavelength. In the second mode a central node and two antinodes appear; here [[lambda_n]] matches [[L]], explaining a common error: believing that this equality always holds.

In real strings, high modes are not always perfect multiples of the fundamental. String stiffness, contact with supports, and dissipation introduce corrections. In musical instruments these deviations matter because they affect timbre and fine tuning. Introductory problems ignore them to isolate the main mechanism.

As a mental example, think of a string shortened by pressing it against a fret. [[L]] decreases, the spatial pattern is compressed, and frequency rises. If one also switches to a thicker string, [[mu]] increases and frequency tends to fall. The final sound comes from the balance between those effects.

## Real student questions

**Why are the ends nodes?** Because a fixed end cannot move transversely. The string can pull on the support, but the ideal contact point does not follow the oscillation.

**Does mode [[n]] mean number of nodes?** In an ideal fixed-fixed string, [[n]] counts antinodes. Nodes include the ends and internal nodes, so the two counts should not be identified without care.

**Why does a tighter string sound higher?** Because larger [[T]] raises [[v]], and a disturbance that covers the same pattern sooner produces larger [[f_n]].

**Why does a thicker string sound lower?** Because larger [[mu]] brings more inertia per metre. The disturbance propagates more slowly and the natural frequencies fall.

## Cross-cutting connections and study paths

This leaf connects directly with [Standing-wave condition](leaf:fisica-clasica/ondas/ondas-estacionarias/condicion-de-estacionariedad), where the general geometric criterion is studied. Here the mechanical cause specific to strings is added: tension and linear density.

It also prepares the study of resonance, harmonics, and musical sound. A string is a natural bridge between mechanical waves, transported energy, and sound perception, because it turns a spatial pattern into an audible frequency.

## Final synthesis

A standing string fixes its modes by geometry and its frequencies by mechanics. [[L]] and [[n]] select the shape; [[T]] and [[mu]] determine [[v]]; together, these quantities produce [[f_n]] and explain why only certain frequencies stand out as stable modes.
`;export{e as default};
