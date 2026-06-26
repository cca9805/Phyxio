const e=`# Types of Levers

## Conceptual context

A lever is a bar or rigid body that rotates about a fulcrum. To classify it, it is not enough to ask whether it “helps a lot” or whether it has high mechanical advantage. Classification depends on the spatial order of three elements: fulcrum, effort, and load. That order defines [[clase_palanca]].

The effort [[P]] is the input force applied to operate the lever. The load [[R]] is the resistance to be supported, moved, or overcome. The arms [[d_P]] and [[d_R]] are measured from the fulcrum to the lines of action of those forces. The ideal mechanical advantage [[VM]] helps interpret geometry, but it does not replace class identification.

## 🟢 Essential level

There are three classical classes. In a first-class lever, the fulcrum lies between effort and load, as in scissors or a seesaw. In a second-class lever, the load lies between fulcrum and effort, as in a wheelbarrow. In a third-class lever, the effort lies between fulcrum and load, as in the human forearm.

The essential question is “which element is in the middle.” If the fulcrum is in the middle, it is first class. If the load is in the middle, it is second class. If the effort is in the middle, it is third class. This position rule is more important than the exact numerical size of the forces.

Each class has a functional reading. Second class usually favors force gain. Third class usually sacrifices force to gain displacement, speed, or control. First class can favor either effect depending on where the fulcrum is placed.

At this level, the diagram is read as a sequence. The first task is not calculation, but naming the three relevant points. That reading prevents a wheelbarrow and tweezers from being confused merely because both have arms and forces.

## 🔵 Formal level

An ideal lever is analyzed through torque equilibrium about the fulcrum:

{{f:lever_equilibrium}}

This equality states that the input torque and resisting torque compensate. It does not classify the lever by itself, but it allows the required force or arm to be computed once the geometry is known.

Ideal mechanical advantage is read as an arm ratio:

{{f:ideal_mechanical_advantage}}

If [[VM]] is greater than 1, the geometry favors force: a larger load can be balanced by a smaller effort in the ideal model. If [[VM]] is smaller than 1, there is force disadvantage, but there may be gain in displacement or speed.

The difference from the mechanical-advantage leaf is the focus. Here the lever is classified by the fulcrum-effort-load order and interpreted as a device type. [[VM]] is used as an auxiliary reading that explains the effect of the geometry, not as the only class criterion.

The formal level checks classification coherence. A typical second-class lever has the load between fulcrum and effort and often has [[d_P]] larger than [[d_R]]. But if a particular design changes that numerical tendency, the class does not change as long as the spatial order remains the same.

## 🔴 Structural level

The analysis starts by drawing the fulcrum. Then locate the effort [[P]] and the load [[R]]. Only then measure [[d_P]] and [[d_R]]. If arms are measured before deciding which element lies in the middle, one may compute a correct ratio and still classify the lever incorrectly.

A first-class lever may have [[VM]] greater than, equal to, or smaller than 1, because the fulcrum can move toward the load or toward the effort. An ideal second-class lever usually has [[d_P]] larger than [[d_R]], which favors force advantage. A third-class lever usually has [[d_P]] smaller than [[d_R]], requiring more effort than load but providing control or displacement.

The main structural criterion is that the class does not depend on the numerical force applied. Changing [[P]] or [[R]] does not turn a third-class lever into a second-class lever. The class changes only when the spatial order of fulcrum, effort, and load changes.

This structural reading is why the same equation can appear in several lever topics without making them identical. In this leaf, the equation supports classification. In a mechanical-advantage leaf, the ratio itself becomes the main object of study. Keeping that separation avoids duplicating concepts.

## Deep physical interpretation

Lever classes describe configurations, not just calculations. A wheelbarrow is second class not because it has a specific [[VM]], but because the load lies between the wheel-fulcrum and the hands-effort. The forearm is third class not because of one number, but because the muscle applies effort between the elbow-fulcrum and the load in the hand.

This reading prevents confusing classification with performance. Two first-class levers may behave very differently if the fulcrum is moved. The class states the order; mechanical advantage describes part of the quantitative effect of that order.

It also explains why a lever can be useful even without multiplying force. A third-class lever may require [[P]] greater than [[R]], but it can move the load through a larger distance or with greater precision. Mechanical usefulness depends on the goal, not only on maximizing [[VM]].

## Order of magnitude

In manual devices, arms from centimeters to meters and forces from newtons to hundreds of newtons are common. If [[d_P]] is four times [[d_R]], the ideal [[VM]] is approximately 4. In that case, a 200 N load could ideally be balanced by a 50 N effort, if the lossless model were valid.

If [[d_P]] is smaller than [[d_R]], the lever does not provide force advantage. That does not mean it is badly designed: it may be designed for speed, range of motion, or fine control. The interpretation must connect the number with the class and the function.

## Personalized resolution method

1. Draw fulcrum, effort, and load.
2. Identify which element lies between the other two.
3. Assign [[clase_palanca]] from that order.
4. Measure [[d_P]] and [[d_R]] from the fulcrum.
5. Use torque equilibrium to relate [[P]] and [[R]].
6. Compute [[VM]] only as an auxiliary geometric reading.
7. Interpret whether the design favors force, displacement, or control.

## Special cases and extended example

In scissors, the fulcrum is between the hand and the material being cut: first class. In a wheelbarrow, the wheel is at one end, the load is in the middle, and the hands are at the other end: second class. In the forearm, the elbow is the fulcrum, the biceps applies effort between elbow and hand, and the load is in the hand: third class.

Moving the fulcrum in a first-class lever may change the advantage without changing the class. Moving the load to the middle or the effort to the middle does change the class.

## Real student questions

Is the class decided by mechanical advantage?
No. It is decided by the spatial order of fulcrum, effort, and load.

Is a third-class lever worse?
Not necessarily. It usually has force disadvantage, but it can gain displacement, speed, or control.

Does a first-class lever always multiply force?
No. It depends on fulcrum position and arm ratio.

Why use torque equilibrium?
Because an ideal lever in equilibrium compares effort and load torques about the fulcrum.

## Cross-cutting connections and study paths

This leaf connects with torque of a force, the torque-sum condition, and mechanical advantage. First one learns what produces torque; then how a lever organizes forces and arms; then mechanical advantage can be studied in more detail.

It also connects with biomechanics and tool design. Many joints and tools are understood by classifying the lever first and then analyzing its force-motion trade-off.

## Final synthesis

Lever types are defined by the relative position of fulcrum, effort, and load. Torque equilibrium relates [[P]], [[R]], [[d_P]], and [[d_R]], and [[VM]] helps read the geometric effect. But [[clase_palanca]] belongs to spatial order: fulcrum in the middle, load in the middle, or effort in the middle.
`;export{e as default};
