const e=`## Historical problem

In the mid-eighteenth century experimenters could already store electric charge in Leyden jars — glass bottles coated with tin inside and out — but had no idea why the glass made the device work better than vacuum or air. The question was not trivial: if glass is an insulator, why does its presence increase the charge that can be stored? The electrostatics of the time lacked the concept of an electric field and any model of matter that could explain the interaction between the material and electricity.

## Prior conceptual difficulty

The central obstacle was conceptual: the physics of the time treated electricity as a fluid (or two fluids) that accumulated on the surfaces of conductors. In this framework, an insulator like glass was simply "the opposite of a conductor": something that blocked the flow of the electric fluid. There was no mechanism to explain how a material that blocked electricity could at the same time improve the storage capacity of the capacitor.

The absence of an atomic or molecular theory prevented eighteenth-century researchers from imagining that the material could have internal charges that redistributed without conducting. The electric-fluid paradigm was too coarse to capture the polarising response of materials.

## What changed

The decisive advance came with Michael Faraday in the 1830s. Faraday performed systematic measurements of the capacitance of capacitors filled with different materials and demonstrated that the capacitance was always a rational multiple of the vacuum capacitance, with a factor that depended on the material and not on the geometry. He called this factor "specific inductive capacity" — what is today [[epsilon_r]] — and proposed that the material must physically polarise under the electric field, with internal charges shifting without conducting.

Faraday had no atomic theory of the mechanism, but his macroscopic description was correct and predictive. A few years later, James Clerk Maxwell incorporated dielectric polarisation into his equations of the electromagnetic field through the electric displacement vector, completing the theoretical framework taught today.

## Impact on physics

The concept of the dielectric transformed electrostatics from a science of conducting surfaces into a physics of material media. Maxwell's introduction of the electric displacement vector allowed Gauss's law to be formulated in material media without needing information about the internal bound charges: the field inside any medium could be calculated from the free charges and the [[epsilon_r]] of the material, without tracking each microscopic dipole.

Beyond theory, Faraday's discovery had immediate technological consequences: it allowed much more compact capacitors to be designed and predicted which materials were better dielectrics before manufacturing them. The nineteenth-century telegraph industry needed reliable dielectrics for intercontinental submarine cables, and Faraday's data provided the basis for selecting them and calculating the distributed capacitance of the cables.

## Connection with modern physics

The dielectric constant [[epsilon_r]] remains a central quantity in technology. In microelectronics, the scaling of transistors has led to gate oxide layers of just a few ångströms, where [[epsilon_r]] of the gate material determines the control capacitance of the transistor. The shift from silicon dioxide ([[epsilon_r]] ≈ 3.9) to high-[[epsilon_r]] materials such as hafnium oxide ([[epsilon_r]] ≈ 25) was one of the key advances that enabled continued transistor scaling in the second half of the first decade of the twenty-first century. In optics, [[epsilon_r]] is the square of the refractive index, directly connecting electrostatics with the propagation of light. In biophysics, the high [[epsilon_r]] of water explains the ionic solubility that makes cellular life possible.
`;export{e as default};
