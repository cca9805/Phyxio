# Physical Models: Mechanical Advantage

## Ideal model

The ideal model describes a simple machine without losses. In a lever, [[VM]] depends only on the ratio between [[d_P]] and [[d_R]]. With that ideal advantage, the required effort [[P]] for a load [[R]] is estimated.

The real model adds force measurements. The real advantage [[VM_r]] uses useful load and actually applied force. The efficiency [[eta]] compares real performance with the ideal reference.

## Hypotheses

- The machine is approximated as rigid.
- Arms are measured from the same fulcrum.
- The load [[R]] and effort [[P]] are expressed in newtons.
- The ideal model ignores friction and deformation.
- The real model uses forces measured in the same configuration.
- [[VM]], [[VM_r]], and [[eta]] are interpreted as positive ratios.

## Quantitative validity domain

The ideal model is reasonable when friction and deformation losses are small, for example if [[eta]] is greater than 0.9 in a real test. To form [[VM]], [[d_R]] must be positive. To form [[VM_r]], [[P]] must be positive. Under ordinary conditions, [[eta]] must lie between 0 and 1.

An order-of-magnitude check: if [[d_P]] = 1.0 m and [[d_R]] = 0.25 m, [[VM]] = 4. If a 400 N load ideally requires 100 N but actually requires 125 N, then [[VM_r]] = 3.2 and [[eta]] = 0.8. If [[eta]] is 1.4, a perfect machine has not been discovered; the data are incompatible.

## Model failure signals

The model fails if arms from one configuration are compared with forces measured in another. It also fails if mass in kg is used as if it were load [[R]] in newtons. Another clear warning appears when [[VM_r]] greatly exceeds [[VM]] without a measurement explanation or model change.

A didactic failure signal is interpreting [[VM]] as real performance. Geometry may promise high advantage, but if the machine bends or has friction, the user does not receive all that help.

## Extended or alternative model

When it is better to change model: if the spatial class of the lever must be studied, change to the alternative model of lever types. If losses must be studied in detail, change to an alternative model with friction, deformation, and energy efficiency. If accelerated motion is present, use rotational dynamics.

It is also better to change model if the machine cannot be represented by simple arms, such as multi-pulley systems, gears, or mechanisms with variable geometry.

## Operational comparison

| Situation | Suitable model | Criterion |
|---|---|---|
| Ideal reading of a lever | Ideal advantage | Use [[VM]] |
| Ideal force for a load | Ideal requirement | Use [[P]], [[R]], [[d_P]], [[d_R]] |
| Real tool measurement | Real advantage | Use [[VM_r]] |
| Device losses | Efficiency | Use [[eta]] |
| Identify class | Lever types | Use spatial order |

The practical rule is not to mix levels: ideal geometry first, real forces afterward, efficiency at the end.
