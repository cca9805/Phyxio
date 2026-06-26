const e=`# Models and validity\r
\r
## Ideal model\r
\r
The ideal model of the work-energy theorem treats a mechanical system of approximately constant mass [[m]] whose motion can be summarized by an initial speed [[vi]] and a final speed [[vf]], or equivalently by an initial kinetic energy [[Ki]] and a final kinetic energy [[Kf]]. The focus is not the exact force at each instant, but the global effect of all relevant interactions through a net work balance [[Wnet]] that explains the kinetic change [[dK]].\r
\r
In this model, the motion is classical, translational description is sufficient, and the system boundary remains fixed from beginning to end. That requirement is not editorial decoration. [[Ki]], [[Kf]], [[dK]], and [[Wnet]] only remain physically coherent if they describe the same object over the full process. When that condition holds, the leaf provides a compact and reliable way to close many problems by comparing states rather than rebuilding the full trajectory.\r
\r
## Hypotheses\r
\r
The first hypothesis is that the mass [[m]] does not vary appreciably during the interval. The second is that translational kinetic energy is the right state variable for reading the process. The third is that the external interactions can be summarized coherently through a single global net balance [[Wnet]]. The fourth is that the question asks for a change between states rather than for a time-resolved rate description.\r
\r
The model also assumes that dominant rotation, strong deformation, or detailed thermal conversion are not the main target of interpretation. Those effects may exist, but if they become central, the leaf needs to be extended. The key point is that the global relation between [[Wnet]] and [[dK]] must still capture the decisive mechanics of the problem.\r
\r
## Quantitative validity domain\r
\r
The model is usually robust when [[m]] stays effectively constant and when the initial and final states can be described with moderate measurement uncertainty. As an operational rule, if the relative uncertainty in the speed data is <= 5 percent and the mass remains stable, a state-based closure is generally strong enough to interpret [[Wnet]] and [[dK]] with useful reliability.\r
\r
It is also the right tool when the goal is a global balance between beginning and end, not a step-by-step reconstruction of what happened in between. If the question is whether the system gained or lost motion budget, or how severe a braking or acceleration stage was, the theorem works well. When it is time to switch models is exactly when the price of ignoring internal details becomes too large. A practical threshold is this: if a rotational, deformational, or thermal contribution is expected to exceed about 10 percent of the total balance, a purely translational reading of [[Wnet]] and [[dK]] is no longer enough on its own.\r
\r
## Model failure signals\r
\r
A clear failure signal appears when the problem demands explanation at each instant rather than only between endpoints. Another appears when the student mixes two different systems so that [[Ki]] is computed for one object while [[Wnet]] is interpreted for another. The model also fails when [[m]] changes significantly or when rotational storage becomes an important part of the mechanical budget and is being ignored.\r
\r
There is also a diagnostic signal in the answer itself. If [[vf]] ends up smaller than [[vi]] but the balance still gives positive [[Wnet]], or if the energetic scale is absurd for the real scenario, the issue is usually not arithmetic. It is a sign that the hypotheses, the system boundary, or the model choice no longer match the physical process being described.\r
\r
## Extended or alternative model\r
\r
When the process includes relevant rotation, the model should be extended to include rotational kinetic storage. When strong internal dissipation, deformation, or detailed thermal transfer matters, a wider energy balance becomes necessary. When the question asks for instantaneous force behavior, power, or detailed timing, the alternative is no longer this leaf by itself but a combined treatment with Newtonian dynamics or with a rate-based topic.\r
\r
The practical criterion is not to abandon the theorem too early, but to recognize when it stops being sufficient on its own. When it is useful to switch models is when the global balance no longer preserves the dominant physical cause that the task is asking the student to interpret.\r
\r
## Operational comparison\r
\r
Compared with a full dynamical treatment, this leaf is faster conceptually because it can move from [[vi]] to [[vf]], or from [[Ki]] to [[Kf]], without solving the whole time history. Compared with a purely descriptive explanation, it is stronger causally because it forces [[Wnet]] to be read as a real physical balance. Compared with a broader conservation-of-energy framework, it is less general but more focused when the central question is specifically the change in kinetic state.\r
\r
In practice, the comparison can be stated simply. If the main question is how much the motion changed between two states and what net work explains that change, the ideal model of this leaf is the best entry point. If the main question is how the process evolves in time, or which other energy channel dominates the balance, then it is time to move to an extended model.`;export{e as default};
