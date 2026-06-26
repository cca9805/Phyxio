# Kinematic quantities 

## Conceptual context 

Kinematics is the branch of physics that describes the motion of objects without considering the causes that produce it. To achieve this precise description, it relies on a set of fundamental quantities that capture where an object is, how fast it moves, and how that [[rapidez]] changes over [[tiempo]] . These quantities —[[posicion]] , [[desplazamiento]] , [[velocidad]] , and [[aceleracion]] — form a chain of successive time derivatives relative to [[tiempo]] . 

Mastering their definitions and mutual relationships is the first step in analyzing any physical phenomenon, from a vehicle's [[desplazamiento]] to an electron's motion. A common mistake is confusing [[distancia]] with [[desplazamiento]] , or [[rapidez]] with [[velocidad]] . The distinction lies in one pair being scalar quantities and the others being vectors. Understanding this difference prevents critical failures in closed trajectory problems or multidimensional motions. 

## 🟢 Essential level 

Imagine a daily journey. Your [[posicion]] indicates where you are at a given instant within a reference frame. If you leave home, go around the block, and finish at a pharmacy, the entire followed path belongs to the idea of trajectory. The total length of that path is the [[distancia]] traveled. Conversely, the straight arrow joining the starting point to the arrival point represents the [[desplazamiento]] . 

This distinction is the central idea of this module. Two motions can end at the same final point and yet have involved a very different [[distancia]] traveled. It can also happen that you cover a lot of path while the net [[desplazamiento]] is small, or even zero, if you return almost to the starting point. For that reason, one cannot simply ask how much something has moved without specifying which quantity is being measured. 

The first real physical skill here is conceptual: distinguishing what describes the actual route from what describes the net change between two positions. If this distinction fails, the [[tiempo]] based quantities built on top of it will also be misinterpreted. 

> [!TIP] 
> Quick rule: the trajectory records the actual route followed, while the [[desplazamiento]] only compares the initial point with the final one. 

## 🔵 Formal level 

In the internal language of physics, motion is structured through change relations. [[velocidad_media]] , [[rapidez_media]] , and [[aceleracion_media]] are the tools to summarize a journey. The first compares [[desplazamiento]] with [[tiempo]] , the second compares the total [[distancia]] with [[tiempo]] , and the third compares the [[cambio_velocidad]] with [[tiempo]] . 

### Average Change Relations 
We have formulas to describe the global behavior of a moving body in a [[intervalo_tiempo]] : 

1.  **Displacement Definition**: 
    Relates the [[posicion_inicial]] to the [[posicion_final]] . 

2.  **Average Velocity**: 
    It is the ratio between net [[desplazamiento]] and elapsed [[tiempo]] . 

3.  **Average Speed**: 
    Uses the total [[distancia]] traveled along the trajectory. 

4.  **Average Acceleration**: 
    Quantifies how the [[velocidad]] has varied in a given interval. To do this, we must first calculate the [[cambio_velocidad]] between [[velocidad_inicial]] and [[velocidad_final]] : 

### Instantaneous Quantities 
When the [[intervalo_tiempo]] becomes extremely small, we speak of instantaneous values. Instantaneous [[velocidad]] is the limit of the [[velocidad_media]] as [[tiempo]] approaches zero: 

Similarly, instantaneous [[aceleracion]] describes the [[cambio_velocidad]] at an exact point: 

In intrinsic coordinates, [[aceleracion]] decomposes into two parts. The tangential component measures the change in [[rapidez]] , while the normal or centripetal component measures the change in motion direction. To fully determine the motion from [[aceleracion]] , two initial conditions are required: [[posicion]] and [[velocidad]] at a reference instant. 


Additional formal relations for this leaf:

{{f:definicion_desplazamiento}}

{{f:velocidad_media}}

{{f:rapidez_media}}

{{f:aceleracion_media}}

{{f:definicion_cambio_velocidad}}

{{f:velocidad_instantanea}}

{{f:aceleracion_instantanea}}

{{f:aceleracion_como_segunda_derivada}}

## 🔴 Structural level 

The entire hierarchy of [[posicion]] , [[velocidad]] , and [[aceleracion]] rests on the mathematical operation of time differentiation. This structure reflects that classical space-time possess
Additional formal relations for this leaf:









es a smooth metric allowing for change rates of any order to be defined relative to [[tiempo]] . 

### Structural and Dimensional Foundation 
From a dimensional standpoint, each time derivative adds a reciprocal [[tiempo]] factor to the units. [[posicion]] has the dimension of length. [[velocidad]] has dimensions of length divided by [[tiempo]] . [[aceleracion]] has dimensions of length divided by the square of [[tiempo]] . This dimensional chain is the safety filter for any physical equation: all terms in a sum must share the same dimensions to be consistent. 

[[aceleracion]] can also be expressed as the second derivative of [[posicion]] with respect to [[tiempo]] : 
This reveals that [[aceleracion]] is encoded in the curvature of the [[posicion]] function. If the trajectory presented discontinuities, [[velocidad]] would diverge toward infinity and the classical model would no longer be valid. 

### Asymmetry and Model Limits 
The tangential-normal decomposition reveals a deep asymmetry: the tangential component is linked to changes in kinetic energy, while the normal component simply redirects the [[velocidad]] vector without performing work. This distinction connects kinematics to energy long before formally introducing dynamics. 

In high-speed regimes, the classical model becomes insufficient. When approaching the speed of light [[c]] , the velocity composition rules change. Likewise, the presence of intense [[g]] curves space-time, forcing [[aceleracion]] to be redefined. 

## Deep physical interpretation 

Kinematic quantities are not just numbers, but the language with which the universe narrates change. Instantaneous [[velocidad]] is always tangent to the trajectory, which means that at each instant, the moving body indicates where it intends to head. [[aceleracion]] , on the other hand, acts as a helmsman constantly correcting that intention, either by increasing the intensity of motion or by curving the path. 

The fact that exactly two initial conditions are needed has profound implications: the kinematic state of a particle is fixed by its [[posicion_inicial]] and its [[velocidad_inicial]] at a single instant of [[tiempo]] . This pair defines a point in phase space, a concept that allows predicting a system's future if we know its present state and the [[aceleracion]] governing it. 

This hierarchical structure teaches us about the continuity of nature. We cannot change [[posicion]] without going through [[velocidad]] , nor change [[velocidad]] without [[aceleracion]] . This interdependence is the basis of causality in classical physics, where motion is a fluid process governed by unbreakable geometric and temporal laws. 

## Order of magnitude 

Typical values observed in our environment: 

| Quantity | Example | Approximate value | 
| :--- | :--- | :--- | 
| [[rapidez]] of walking | Person strolling | 1.4 m/s | 
| [[rapidez]] on highway | Car at 120 km/h | 33 m/s | 
| Sports [[aceleracion]] | 0 to 100 km/h in 8 s | 3.5 m/s² | 
| Gravity on Earth [[g]] | Free fall on Earth | 9.81 m/s² | 
| Orbital [[rapidez]] | International Space Station | 7700 m/s | 
| Universal limit | Speed of light [[c]] | 299792458 m/s | 

## Personalized resolution method 

Use the Quantities Protocol to analyze any motion: 
1.  **Identify the reference frame**: Choose an origin and axes. Many errors stem from not fixing the positive direction of [[tiempo]] and space. 
2.  **Classify the data**: Note the [[posicion_inicial]] and [[posicion_final]] , as well as [[velocidad_inicial]] and [[velocidad_final]] . 
3.  **Relate the quantities**: Use change definitions. If you know [[aceleracion]] , integrate to get [[velocidad]] and [[posicion]] . 
4.  **Dimensional verification**: Check the units at each step and evaluate if the result makes physical sense. 
5.  **Decompose [[aceleracion]] **: In curved trajectories, separating the tangential and normal components simplifies the analysis. 

## Special cases and extended example 

### Case 1: Uniform Rectilinear Motion 
In this case, [[aceleracion]] is zero and [[velocidad]] is constant. [[distancia]] and [[desplazamiento]] coincide as long as there is no change in direction. 

### Case 2: Vertical Launch 
[[aceleracion]] is constant and equal to gravity [[g]] . [[velocidad]] vanishes at the highest point. Here, [[desplazamiento]] and [[distancia]] differ during the descent phase. 

### Extended Example: Drone Analysis 
A drone starts from rest and accelerates in a straight line at 2 m/s² for 5 seconds of [[tiempo]] . Then, it brakes with an [[aceleracion]] of -1 m/s² until it stops. 
Phase 1: [[velocidad_final]] reaches 10 m/s and traveled [[distancia]] is 25 meters. 
Phase 2: The drone takes 10 seconds of [[tiempo]] to brake and covers another [[distancia]] of 50 meters. 
Total result: The drone has covered a [[distancia]] of 75 meters and its net [[desplazamiento]] is also 75 meters. 

## Real student questions 

*   **Can [[velocidad]] be negative?** Yes. The sign indicates direction relative to the chosen axis. A negative value means motion in the opposite direction. 
*   **Does zero [[aceleracion]] mean rest?** No. It means [[velocidad]] is not changing. A car at constant [[rapidez]] has zero [[aceleracion]] but is not stationary. 
*   **Why are two initial conditions needed?** Because [[aceleracion]] is the second derivative of [[posicion]] . [[posicion_inicial]] and [[velocidad_inicial]] are needed. 

## Cross-cutting connections and study paths 

*   **Towards dynamics**: Kinematic quantities connect to forces through Newton's Second Law. Without mastering [[aceleracion]] , dynamics is inaccessible. 
*   **Towards energy**: The tangential component of [[aceleracion]] is directly linked to work. 
*   **Towards calculus**: The [[posicion]] , [[velocidad]] , and [[aceleracion]] chain is a practical example of derivatives and integrals. 

## Final synthesis 

Kinematic quantities ([[posicion]] , [[desplazamiento]] , [[velocidad]] , and [[aceleracion]] ) form a hierarchy that encodes motion. Distinguishing between [[distancia]] and [[desplazamiento]] prevents errors and connects geometry to energy. Two initial conditions suffice to reconstruct the trajectory from [[aceleracion]] . 
