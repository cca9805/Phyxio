const e=`# Exam-type example

## Problem statement

A wheelbarrow is modeled as an ideal lever. The wheel acts as the fulcrum, the load [[R]] = 300 N is at [[d_R]] = 0.40 m from the fulcrum, and the hands apply the effort [[P]] at [[d_P]] = 1.20 m from the fulcrum. Identify [[clase_palanca]], compute [[P]] for equilibrium, and obtain the ideal mechanical advantage [[VM]]. Explain why classification does not depend only on the value of [[VM]].

## Data

| Quantity | Value |
|---|---|
| [[R]] | 300 N |
| [[d_R]] | 0.40 m |
| [[d_P]] | 1.20 m |
| [[clase_palanca]] | second class |

The load lies between fulcrum and effort. The forces are treated as perpendicular to their arms and the model is ideal.

## System definition

The system is the wheelbarrow as a rigid lever. The fulcrum is the wheel, the load is the carried weight, and the effort is the force applied by the hands. Wheel friction and structural deformation are not analyzed. Classification is decided by the fulcrum-load-effort order.

## Physical model

The torque equilibrium condition for the ideal lever is:

{{f:lever_equilibrium}}

The auxiliary reading of ideal mechanical advantage is:

{{f:ideal_mechanical_advantage}}

These formulas quantify geometry, but class is identified first: because the load is in the middle, [[clase_palanca]] corresponds to a second-class lever.

## Model justification

The model is valid because forces are applied about one same fulcrum and the arms [[d_P]] and [[d_R]] are measured from that fulcrum. The wheelbarrow is approximated as rigid and the forces are represented by their main lines of action. The class is not inferred from the effort being smaller, but from the relative position of fulcrum, load, and hands.

## Symbolic solution

For equilibrium, the effort torque must equal the load torque. Solve [[P]] from the equality between [[P]] times [[d_P]] and [[R]] times [[d_R]]. Then compute [[VM]] as the ratio between effort arm and load arm.

The qualitative reading predicts the result: because [[d_P]] is larger than [[d_R]], the required effort should be smaller than the load. That matches the usual role of a second-class lever.

## Numerical substitution

The required effort balances 300 N applied at 0.40 m with a force applied at 1.20 m. The load torque is 120 N m. Dividing by 1.20 m gives [[P]] = 100 N.

The ideal mechanical advantage is [[VM]] = 1.20 / 0.40 = 3. This means that, in the ideal model, the geometry can balance a load three times larger than the applied effort.

## Dimensional validation

In the torque equality, both sides have units of N m. The effort [[P]] is in N and [[VM]] has no unit because it is a ratio between two lengths. The classification [[clase_palanca]] has no unit: it is a geometric label.

The physical check is coherent: the wheelbarrow reduces the needed force because the effort acts with a longer arm than the load.

## Physical interpretation

The result does not mean that every second-class lever has exactly [[VM]] = 3. It means that this particular wheelbarrow, with these distances, has an ideal advantage of 3. The class remains the same while the load stays between wheel and hands; the advantage changes if the load is moved or the arms change.

The key interpretation separates two levels: [[clase_palanca]] describes spatial order, while [[VM]] describes the geometric effect of distances. Confusing them leads to classifying by number instead of configuration.

# Real-world example

## Context

A student compares a wheelbarrow, scissors, and tweezers. The goal is to identify the lever type in each case before discussing mechanical advantage. The criterion is to locate fulcrum, effort, and load, and then decide which element is in the middle.

## Physical estimation

In the wheelbarrow, the wheel is the fulcrum, the load is in the middle, and the hands apply effort at the end: second class. In scissors, the screw lies between the hand and the material being cut: first class. In tweezers, the finger effort usually lies between the elastic support and the resistance at the tip: third class.

Quantitatively, if a wheelbarrow has [[d_P]] about three times [[d_R]], [[VM]] is expected to be near 3. In third-class tweezers, [[d_P]] is usually smaller than [[d_R]], so [[VM]] is expected below 1, but the tip gains displacement.

This estimate is enough to predict the intended function before exact measurement. The wheelbarrow should feel force-saving because the hands act far from the wheel. Tweezers should feel precise rather than force-multiplying because the effort is applied between support and tip. Scissors depend on where the material is placed relative to the screw, so the same first-class tool can cut differently near the pivot and near the tips.

## Interpretation

Classification helps understand device function before calculation. A second-class lever usually helps lift loads. A third-class lever may be force-disadvantaged, but it provides control and displacement. A first-class lever can be adapted to force or motion depending on fulcrum position.

The physical interpretation is that lever class is a map of roles. It tells which point anchors the motion, where the user acts, and where the load responds. Once that map is clear, [[VM]] becomes a useful quantitative annotation rather than the identity of the device.

## Checklist

1. Is the fulcrum located?
2. Where does the effort [[P]] act?
3. Where does the load [[R]] act?
4. Which element is in the middle?
5. Is [[VM]] used as interpretation rather than as a replacement for [[clase_palanca]]?
`;export{e as default};
