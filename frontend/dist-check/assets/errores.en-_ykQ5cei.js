const n=`## Conceptual errors

### Error 1: Always saying least action

**Why it seems correct**  
The historical phrase least action appears in many texts and suggests an intuitive idea of economy.

**Why it is incorrect**  
The general criterion is stationarity of [[S]], not an absolute minimum. The local condition is [[deltaS]]=0.

**Detection signal**  
The student claims that every physical path has the lowest possible action without checking stability.

**Conceptual correction**  
Use stationary action and distinguish a minimum, a local maximum, and a saddle point.

## Model errors

### Error 2: Varying temporal or spatial endpoints without declaring it

**Why it seems correct**  
When comparing paths, it seems natural to move the initial or final point too.

**Why it is incorrect**  
The principle used in this leaf fixes [[t1]], [[t2]], and the endpoint configurations. If they move, the problem changes.

**Detection signal**  
The variation modifies the duration or destination while the same equation is still applied.

**Conceptual correction**  
First declare what remains fixed and which variations are admissible.

## Mathematical errors

### Error 3: Treating [[S]] as an ordinary function of one number

**Why it seems correct**  
The notation resembles a function and the student looks for a simple derivative.

**Why it is incorrect**  
[[S]] is a functional: it receives a complete path [[qi]]. The relevant derivative is a variation.

**Detection signal**  
The student tries to differentiate [[S]] only with respect to one isolated position.

**Conceptual correction**  
Think in families of paths and compatible changes of the whole function.

## Interpretation errors

### Error 4: Confusing [[Ri]] with a Cartesian force

**Why it seems correct**  
The residual often has the dimension of a generalized force.

**Why it is incorrect**  
[[Ri]] belongs to the chosen generalized coordinate and comes from varying [[L]], not from automatically projecting a Cartesian force.

**Detection signal**  
[[Ri]] is compared in newtons without checking the unit of [[qi]].

**Conceptual correction**  
Read [[Ri]] as the local stationary-action condition in the corresponding coordinate.

## Quick self-control rule

Before accepting a variational derivation, check: 1) [[L]] describes one system; 2) [[t1]] and [[t2]] are fixed; 3) variations respect endpoints and constraints; 4) all formulas used belong to the leaf or are cited as external relations; 5) [[deltaS]] is interpreted as stationarity, not as decorative smallness.
`;export{n as default};
