const e=`# Magnetic materials

## Conceptual context

Magnetic materials explain why the same coil can behave very differently when its core is air, aluminium, copper, ferrite, or soft iron. The external source imposes magnetic field strength [[H]], but the material responds through magnetization [[M]], modifying the total magnetic field [[B]]. This separation is essential if the whole phenomenon is not to be incorrectly assigned to free current alone.

This leaf does not focus on deriving the field of a particular geometry. Its goal is to read the medium response. The central physical question is whether a material strengthens, weakens, or concentrates the applied field. For that purpose [[mu]], [[mu_r]], and [[chi_m]] provide the compact comparison language.

> [!NOTE]
> The key idea is that [[H]] describes the applied excitation, [[M]] describes the material response, and [[B]] is the final result.

## 🟢 Essential level

A magnetic material is not a passive container for the field. Its domains, electrons, and microscopic currents may organize so that the total field [[B]] differs from the field that would exist in vacuum. In a diamagnetic material the response weakly opposes the excitation; in a paramagnetic material it weakly follows it; in a ferromagnetic material it may be strong, but only over certain ranges.

The fastest comparison quantity is [[mu_r]]. If it is close to the vacuum reference, the material barely alters the field. If it is very large over a linear segment, it concentrates much more field for the same [[H]]. If the response is read through [[chi_m]], the sign helps distinguish opposition from alignment.

> [!WARNING]
> Avoid saying that a material "has a lot of magnetism" without specifying whether you mean [[M]], [[B]], [[mu_r]], or magnetic memory.

## 🔵 Formal level

In the linear, isotropic, reversible model, microscopic complexity is replaced by constitutive relations. The first relation converts relative comparison into a permeability with units:

{{f:permeabilidad_absoluta}}

Here [[mu0]] sets the vacuum scale and [[mu_r]] expresses how far the material departs from that reference. This formula alone does not say whether the material is approaching saturation; it only defines an effective slope while the experimental segment remains linear.

The departure from vacuum is expressed by:

{{f:susceptibilidad_desde_permeabilidad}}

With positive [[chi_m]], induced magnetization follows [[H]]. With negative [[chi_m]], it opposes it. The size of [[chi_m]] measures the relative strength of the internal response, but it should not be extrapolated beyond the measured range.

The material response is connected to the excitation by:

{{f:magnetizacion_lineal}}

Finally, the total field used in magnetic-force calculations is obtained with:

{{f:campo_material_lineal}}

These relations form a conceptual chain: [[H]] is the imposed input, [[M]] is the internal response, [[mu]] and [[mu_r]] condense the effective slope, and [[B]] is the macroscopic result that would affect charges, conductors, or magnetic cores.

## 🔴 Structural level

The deep structure of the topic is the separation between source, medium, and result. [[H]] belongs to the description of free currents and boundary conditions; [[M]] belongs to the internal organization of matter; [[B]] belongs to the resulting field that enters magnetic force. If these three roles are merged, a student may obtain plausible numbers while giving the wrong physical explanation.

The linear model works as a local slope of a constitutive curve. In weak materials, that slope is often nearly constant over broad ranges. In ferromagnetic materials, however, the curve may begin with a high slope, then bend, and finally approach saturation. Therefore [[mu_r]] should not be treated as a universal immutable property: it may depend on operating point, magnetic history, and temperature.

Magnetization [[M]] also introduces the conceptual difference between reversible response and memory. If the material retains part of its magnetization when [[H]] is removed, remanence appears and the reversible linear model no longer describes the whole phenomenon. That memory requires hysteresis curves, coercivity, and energy loss per cycle.

Geometry adds another structural layer. A closed high-[[mu_r]] core concentrates flux efficiently, but an air gap may dominate the magnetic reluctance of the system. Then an excellent material alone does not guarantee a large field in the region of interest. The correct reading combines material, shape, free current, and operating range.

> [!TIP]
> When a result seems surprisingly high, first ask whether you are using a valid local slope or extrapolating a constant beyond its segment.

## Deep physical interpretation

The fine reading of a magnetic material starts with sign and ends with validity. A negative [[chi_m]] does not mean there is no response; it means the induced response points against the excitation. A small positive [[chi_m]] does not imply ferromagnetism either: it may be weak paramagnetic alignment, almost invisible without sensitive instrumentation.

In ferromagnetic materials, a large [[mu_r]] can be both useful and misleading. It is useful because it summarizes field concentration over a segment. It is misleading because it hides saturation, hysteresis, and history dependence. The dominant quantity of the leaf, [[mu_r]], must be read as a comparison criterion, not as a universal guarantee of behavior.

## Order of magnitude

In air or vacuum, [[mu_r]] is essentially of order one. In diamagnetic materials the difference from one is usually very small; in paramagnetic materials it is also usually small but aligned. In soft ferromagnetic materials, effective [[mu_r]] can range from hundreds to thousands over a favorable segment, while laboratory [[B]] values may range from milliteslas to values near a few teslas.

An absurd result appears when a huge [[mu_r]] is applied to any [[H]] without checking saturation. If a calculation predicts many teslas in an ordinary core without consulting the material curve, the linear model has probably been extrapolated outside its domain.

## Personalized resolution method

First identify which quantity controls the problem: if the source imposes free current, [[H]] is often known; if the total field is measured, [[B]] may be known; if the material is compared with vacuum, [[mu_r]] is the main clue. Then decide whether the regime is linear by checking whether the statement mentions saturation, remanence, or a hysteresis curve.

Next use the constitutive relations in physical order. Convert [[mu_r]] into [[mu]], interpret [[chi_m]], estimate [[M]] if the internal response matters, and calculate [[B]] only at the end. Close by comparing the result with orders of magnitude and with the material type stated in the problem.

## Special cases and extended example

A diamagnetic material may have negative [[chi_m]] and still produce a real effect, although small. The signal is not a large field, but a slight reduction of the response relative to vacuum. This case is useful because it forces the distinction between "weak response" and "no response".

A soft ferromagnetic core in a transformer may have high [[mu_r]] at low excitation. If the current grows too much, the increase in [[B]] stops being proportional to [[H]]. At that point the linear calculation may still produce numbers, but it no longer represents the physics of the core.

As an extended example, imagine comparing two cores for a coil. The first has a nearly constant but moderate response; the second concentrates much more field at the beginning, but saturates earlier. The best choice does not depend only on which has the larger nominal [[mu_r]], but on which keeps a useful slope over the actual [[H]] range of the device.

## Real student questions

**Why is it not enough to talk only about magnetic field?** Because [[B]] mixes source and material. To understand what changes when a core is inserted, you must separate [[H]] and [[M]].

**Does negative susceptibility mean the material cancels the whole field?** No. It means the induced magnetization weakly opposes [[H]]. Total cancellation is not the ordinary reading.

**Why does high-permeability iron not always produce more field?** Because it may saturate. When the slope falls, increasing [[H]] barely increases [[B]].

**Is relative permeability a constant of the material?** In weak linear materials it can often be treated that way over many ranges. In ferromagnets it is usually an effective property of a segment, not a universal number.

## Cross-cutting connections and study paths

This leaf connects directly with [Magnetic field](leaf:fisica-clasica/electromagnetismo/magnetismo/campo-magnetico), where [[B]] is interpreted as the field acting on charges and currents. It also connects with [Ampere's law](leaf:fisica-clasica/electromagnetismo/magnetismo/fuentes-del-campo-magnetico/ley-de-ampere), where [[H]] is related to free currents in symmetric geometries.

After this, induction topics are natural, especially transformers and self-inductance. In those topics, choosing a magnetic material is no longer a nominal matter: it controls flux, losses, saturation, and energy efficiency.

## Final synthesis

Magnetic materials are understood by separating applied excitation, internal response, and resulting field. [[mu_r]] and [[chi_m]] provide a compact reading, but they are reliable only inside the linear and reversible regime assumed by the model.
`;export{e as default};
