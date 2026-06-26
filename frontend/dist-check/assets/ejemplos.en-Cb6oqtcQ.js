const e=`# Exam-type example

## Problem statement

An ideal lever has effort arm [[d_P]] = 1.20 m and load arm [[d_R]] = 0.30 m. It must support a load [[R]] = 400 N. Compute the ideal mechanical advantage [[VM]] and the ideal input force [[P]]. In a real test, the required force is measured as 125 N. Compute the real mechanical advantage [[VM_r]] and the efficiency [[eta]]. Interpret what fraction of the ideal help is preserved.

## Data

| Quantity | Value |
|---|---|
| [[d_P]] | 1.20 m |
| [[d_R]] | 0.30 m |
| [[R]] | 400 N |
| real [[P]] | 125 N |

The arms are measured from the same fulcrum. The real input force is treated as an experimental measurement of the device, not as the ideal value.

## System definition

The system is a lever in one fixed configuration. The goal is not classifying the lever type, but quantifying its performance. First, geometry is analyzed ideally through [[VM]]. Then measured forces are compared to obtain [[VM_r]] and [[eta]].

## Physical model

Ideal advantage is computed with:

{{f:ideal_mechanical_advantage}}

The ideal force required for a given load is estimated with:

{{f:ideal_effort_requirement}}

Measured real advantage is computed with:

{{f:real_mechanical_advantage}}

Efficiency is obtained by comparing real and ideal advantage:

{{f:efficiency_from_advantages}}

## Model justification

The ideal model is valid as a reference because the arms are defined and measured from the same fulcrum. The difference between ideal and real is introduced afterward through the measured force. This separation matters: geometry fixes [[VM]], while friction and deformation reduce [[VM_r]].

## Symbolic solution

First divide the effort arm by the load arm to obtain [[VM]]. With that ideal advantage, the required force can be read as load divided by advantage. Then compute [[VM_r]] by dividing real load by measured real effort. Finally, [[eta]] compares [[VM_r]] with [[VM]].

If the machine were ideal, [[VM_r]] would match [[VM]]. If the real machine requires more force, [[VM_r]] is lower and efficiency falls below 1.

## Numerical substitution

The ideal advantage is [[VM]] = 1.20 / 0.30 = 4. The 400 N load would ideally require [[P]] = 100 N. In the real test, 125 N are required, so the real advantage is [[VM_r]] = 400 / 125 = 3.2.

The efficiency is [[eta]] = 3.2 / 4 = 0.8. This means the device preserves 80 percent of the ideal advantage.

## Dimensional validation

[[VM]], [[VM_r]], and [[eta]] have no units because they are ratios. [[P]] and [[R]] are expressed in newtons. [[d_P]] and [[d_R]] are expressed in meters. Efficiency is admissible because it lies between 0 and 1.

The physical comparison is also coherent: the measured real force is larger than the ideal force, so real advantage is smaller than geometric advantage.

## Physical interpretation

The result does not mean that the machine “loses” 20 percent of the load. It means it preserves 80 percent of the geometric advantage it would have without losses. The geometry promises a force reduction by a factor of 4, but the real device delivers a factor of 3.2.

The practical reading is clear: to improve the device, there are two different paths. One can change geometry to increase [[VM]], or reduce losses to bring [[VM_r]] closer to [[VM]]. The calculation separates ideal design from real performance.

# Real-world example

## Context

A workshop uses a lever to partially lift a heavy part. The operator wants to know whether the input arm should be lengthened or whether the fulcrum should be repaired because the effort feels larger than expected. The load, applied force, and distances from the fulcrum are measured.

## Physical estimation

If [[d_P]] is four times [[d_R]], the ideal estimate predicts that input force should be about one quarter of the load. For an 800 N load, the ideal force would be near 200 N. If the operator measures 260 N, the real advantage is lower than the ideal one.

That quantitative difference points to losses. An efficiency around 0.75 does not mean the design is useless, but it does mean that friction, bending, or poor alignment consumes part of the geometric help.

## Interpretation

Mechanical advantage separates two questions: what geometry promises and what the real machine delivers. If [[VM]] is already low, arm geometry should be redesigned. If [[VM]] is high but [[eta]] is low, losses should be reduced. That distinction is the center of the leaf.

## Checklist

1. Are [[d_P]] and [[d_R]] measured from the same fulcrum?
2. Are [[R]] and [[P]] in newtons?
3. Is [[VM]] computed from arms?
4. Is [[VM_r]] computed from real forces?
5. Does [[eta]] compare the same ideal and real configuration?

An additional check is to ask what decision the number supports. If the goal is to choose a geometry, the main quantity is [[VM]]. If the goal is to evaluate a tool that already exists, the main quantity is [[VM_r]]. If the goal is to diagnose losses, the main quantity is [[eta]]. This distinction prevents the example from becoming only a list of calculations without physical interpretation.

It is also useful to check that the conclusion does not mix a design reading with a maintenance reading. Increasing [[d_P]] may improve ideal advantage, but it does not fix a fulcrum with strong friction. Lubricating the support may improve [[VM_r]], but it does not change the geometric ratio [[VM]]. The final statement should therefore say whether the problem lies in the lever geometry, in the measured forces, or in the gap between both.
`;export{e as default};
