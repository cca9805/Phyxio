# Exam-type example

## Problem statement

A laboratory compares two rotors with the same total mass [[m]] of 4 kg and the same outer radius [[R_geo]] of 0.20 m, but with different mass distribution relative to the central axis. Rotor A is modeled as four equal point masses placed at the rim. Rotor B is modeled as a uniform solid disk with the same total mass and radius. The task is to:

1. Compute the moment of inertia [[I]] of both rotors about the central axis.
2. Compute the angular acceleration [[alpha]] of each rotor if the same net torque [[tau]] of 0.40 N*m is applied.
3. Interpret which rotor stores more rotational kinetic energy [[K_rot]] if both reach the same angular speed [[omega]] of 20 rad/s.

## Data

- Total mass of each rotor [[m]]: 4 kg.
- Outer radius [[R_geo]]: 0.20 m.
- For rotor A, each point mass [[m_i]] equals 1 kg.
- For rotor A, each distance to the axis [[r_i]] equals 0.20 m.
- For rotor B: uniform solid disk.
- Applied net torque [[tau]]: 0.40 N*m.
- Comparison angular speed [[omega]]: 20 rad/s.

## System definition

The rotation axis is the same in both cases: perpendicular to the rotor plane and passing through the center. This declaration is essential because the moment of inertia [[I]] is always defined relative to an explicit axis.

Rotor A is a discrete system, so its inertia is built from the discrete definition. Rotor B is a simple continuous body, but because it is a uniform solid disk it can be modeled with the tabulated result that comes from the continuous definition.

## Physical model

For rotor A, each point mass [[m_i]] contributes according to the square of [[r_i]]. For rotor B, the mass is not all at the rim: the continuous distribution is represented by differential elements [[dm]] spread from the axis to the edge. This geometric difference means that, even with the same total mass [[m]] and the same outer radius [[R_geo]], the same [[I]] is not obtained.

The key physical point is that radial distribution changes the dynamic response. The problem cannot be solved by reading only [[m]]. [[I]] must be built from the way mass occupies space relative to the axis.

## Model justification

The justification is direct. Rotor A can be treated as discrete because the masses are localized at well-separated positions. Rotor B can be treated as a uniform disk because its distribution is continuous and symmetric. Once [[I]] has been computed, the dynamic response is obtained through the rotational law and the energy comparison is closed through the rotational energy relation.

## Symbolic solution

### Rotor A: discrete system

We use the discrete definition:

{{f:definicion_discreta}}

Since the four masses are equal and placed at the same distance from the axis, the value of [[I]] is obtained by adding four identical contributions.

### Rotor B: solid disk

For a uniform disk, the tabulated result derived from the continuous definition gives a moment of inertia equal to one half of [[m]] times the square of [[R_geo]].

The starting continuous relation is:

{{f:definicion_continua}}

### Dynamic comparison

We apply the rotational law:

{{f:segunda_ley_rotacional}}

For the same [[tau]], the rotor with larger [[I]] will have smaller [[alpha]].

### Energy comparison

We use the rotational energy relation:

{{f:energia_rotacional}}

At the same [[omega]], the rotor with larger [[I]] will store larger [[K_rot]].

### Compact geometric reading

If geometry is to be condensed into one equivalent distance [[k]], we use:

{{f:radio_giro}}

## Numerical substitution

First, compute the moments of inertia.

For rotor A, each individual contribution equals 1 kg times 0.20 m squared, that is 0.04 kg*m^2. Since there are four point masses, the total result is [[I]] = 0.16 kg*m^2.

For rotor B, the uniform disk gives [[I]] = 0.5 times 4 kg times 0.20 m squared, so the result is [[I]] = 0.08 kg*m^2.

Now compute angular accelerations [[alpha]] with the same [[tau]] of 0.40 N*m.

For rotor A, [[alpha]] = 0.40 / 0.16 = 2.5 rad/s^2.

For rotor B, [[alpha]] = 0.40 / 0.08 = 5.0 rad/s^2.

Rotor B responds twice as fast because its rotational inertia is half as large with respect to the same axis.

Now compute rotational kinetic energy [[K_rot]] for [[omega]] = 20 rad/s.

For rotor A, [[K_rot]] = 0.5 times 0.16 times 20 squared = 32 J.

For rotor B, [[K_rot]] = 0.5 times 0.08 times 20 squared = 16 J.

Finally, interpret both geometries through the radius of gyration [[k]].

For rotor A, [[k]] = square root of 0.16 / 4 = 0.20 m.

For rotor B, [[k]] = square root of 0.08 / 4, approximately 0.14 m.

This confirms that rotor A behaves as if all mass were placed at the rim, whereas rotor B behaves as if mass were concentrated closer to the axis.

## Dimensional validation

At every step:

- [[I]] is expressed in kg*m^2.
- [[alpha]] is expressed in rad/s^2.
- [[K_rot]] is expressed in J.
- [[k]] is expressed in m.

The units are coherent with the relations of the leaf.

## Physical interpretation

The example shows the central idea of the leaf: with the same total mass [[m]] and the same outer radius [[R_geo]], the same inertia is not obtained when the radial distribution changes. Rotor A places all effective mass at the rim, so its [[I]] is larger. As a result, the same [[tau]] produces a smaller [[alpha]].

The same reasoning explains the energy result. At equal [[omega]], rotor A stores twice as much [[K_rot]] as rotor B because it has twice the moment of inertia. There is no contradiction: the geometry that is harder to accelerate is also the geometry that stores more energy once spinning.

This means that [[I]] does not only summarize how much matter exists, but where that matter dominates relative to the axis. When mass moves outward, each contribution gains more inertial leverage and the same [[tau]] produces a weaker angular response.

# Real-world example

## Context

In the design of a flywheel for energy recovery in an industrial machine, an engineer must choose between two options of equal total mass [[m]]: a nearly solid disk and a rotor with more mass concentrated near the rim. The design variable is not only how much mass there is, but where that mass is placed.

## Physical estimation

Before closing the design, the engineer makes a quick quantitative estimate. If the flywheel has total mass [[m]] of 10 kg and maximum radius [[R_geo]] of 0.30 m, an order-of-magnitude reading suggests that [[I]] should be on the order of 1 kg*m^2. That scale already indicates the expected dynamic response. If the goal is a rotor that changes [[omega]] easily, such an [[I]] may be too high. If the goal is to store [[K_rot]] and smooth fluctuations, it may be desirable.

Suppose two alternatives are available:

- Compact option: [[I]] = 0.45 kg*m^2.
- Peripheral option: [[I]] = 0.90 kg*m^2.

With the same motor torque [[tau]] of 3 N*m, the estimated angular accelerations [[alpha]] are 6.7 rad/s^2 for the compact option and 3.3 rad/s^2 for the peripheral option.

If both reach the same [[omega]] of 50 rad/s, the stored energies [[K_rot]] are approximately 560 J and 1125 J, respectively.

## Interpretation

The engineering reading is clear: moving mass outward penalizes immediate dynamic response but improves energy-storage capacity. In other words, a geometry with larger [[k]] and larger [[I]] filters speed fluctuations more strongly, even though it requires more effort to start or stop.

The dominant variable here is not only [[m]], but the equivalent radial distribution expressed by [[k]] or directly by [[I]]. In a later design stage, the system must also respect real material limits associated with stress or effective surface-density quantities such as [[sigma]], so that the gain in inertia does not compromise rotor safety.