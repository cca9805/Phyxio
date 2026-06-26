# Reference frames [[frame_sigma]] 

## Conceptual context

Talking about motion without specifying where it is observed from is a conceptual trap. In this leaf, the central object is not an isolated formula, but the complete structure with which an observer describes a phenomenon. This structure is summarized by four operational pieces: the frame [[frame_sigma]] , the origin [[O]] , the position vector [[r_vec]] , and the relative velocity of the moving frame [[v_frame]] . Only when these pieces are fixed does it make sense to ask about the position or velocity of a body.

The key point is that the physical event does not change when the observer changes, but its description does. A passenger may be at rest relative to the carriage and in motion relative to the platform; a camera mounted on a drone may see a target as stable while for a fixed camera it crosses the entire screen; a sensor on a belt may register a nearly constant position while an operator fixed to the ground sees the package advancing. The phenomenon is one, but each [[frame_sigma]] reorganizes the reading of [[r_vec]] , sign, and temporal evolution.

This is why this topic is not a preliminary detail of kinematics. It is the condition that makes data comparable. When the student learns to choose the frame before writing calculations, they stop using the equation as a recipe and start using it as a controlled translation of a scene. That is the dominant idea of the leaf: changing the reference frame changes the description of the motion, not the fact that the motion exists.

---

## 🟢 Essential level

The correct entry to the topic is purely conceptual. Before looking at symbols, it is useful to answer three short questions: who is observing, from what origin are they measuring, and with what clock are they comparing events. If two people answer differently, they are no longer describing exactly the same magnitude, even if they are talking about the same body. In other words: a position does not live alone, it is always attached to a well-declared reference frame [[frame_sigma]] .

The most useful intuition is that of the train and the platform. For the passenger, the suitcase resting on the floor of the carriage maintains a nearly constant position within the car; for the platform observer, that same suitcase moves forward because the entire carriage moves relative to the ground. This level must be explainable without equations: changing the observer modifies the description, and the first serious error appears when results from different frames are compared as if they were data of the same type.

---

## 🔵 Formal level

Once the scene is fixed, notation orders intuition. In this leaf, [[frame_sigma]] names the frame from which the problem is described; [[O]] fixes the spatial zero of that frame; [[r_vec]] represents the position of the body relative to that origin; [[v_frame]] measures the velocity with which one frame moves relative to another; and [[t_global]] reminds us that, in classical mechanics, both observers share the same temporal parameter. If any of these elements are missing, the equation may seem correct and still be useless.

The central relationship of the topic is the **Galilean position transformation**. Written with the leaf's notation, it expresses that the position measured in one frame is obtained by adding the position measured in the other frame and the displacement accumulated by the moving frame itself:

{{f:trans_galileo_pos}}

This equation is not used to decorate a deduction, but to answer a specific question: how a single trajectory is translated when the observer changes. If the student knows that [[r_vec]] belongs to the chosen frame and that [[v_frame]] belongs to the relationship between frames, they stop adding velocities and positions without criteria.

Velocity is interpreted with the same logic. If a passenger walks inside the carriage, the carriage observer measures [[v_prime]] and the platform observer measures [[v]] . The velocity transformation adds the carriage's velocity [[v_frame]] to the internal reading. The important thing is not to memorize the sum, but to distinguish two levels: the internal motion of the body within the frame and the motion of the entire frame relative to another:

{{f:trans_galileo_vel}}

There are also two classical invariances that order the interpretation. The first states that two Galilean frames compare the same **spatial separation** [[r_vec]] when they measure the same segment simultaneously:

{{f:invarianza_distancia}}

The second states that both share the same [[t_global]] . These invariances are not philosophical ornaments: they are the reason why the problem can be closed with a single common chronology:

{{f:invarianza_tiempo}}

The correct use of formal expressions requires reading discipline. First, the frame is chosen. Then, the location of [[O]] is declared. Next, [[r_vec]] is written with the appropriate sign. Only at the end is it decided how [[v_frame]] enters. This order avoids the typical confusion of putting a number in an equation before knowing whom it belongs to. Algebra does not correct a poorly chosen frame; it only propagates the error with more precision.

---

## 🔴 Structural level

The Galilean model works because it simplifies the world in a very specific way. It assumes inertial or quasi-inertial frames, parallel axes, constant relative velocities, and a common time for all observers in the problem. As long as these hypotheses hold, changing [[frame_sigma]] reorders the description without breaking physical coherence. The result may change sign, value, or even transition from rest to motion, but it does not stop referring to the same event.

The structure begins to strain when any of these hypotheses break. If the moving frame accelerates appreciably, if one observer rotates relative to the other, or if the comparison mixes different instants, the simple transformation is no longer enough. It also fails when two different origins are used without declaration: the student thinks they are comparing positions, but in reality, they are mixing [[r_vec]] from incompatible geometric scenes. At that point, the equation is not wrong because of an algebraic detail; it is wrong because it no longer corresponds to the mechanism described by the leaf.

The most reliable indicator of failure is qualitative. If a suitcase at rest inside the train ends up with zero velocity for the platform, or if a moving and a fixed camera produce descriptions that cannot be reconciled with a single [[t_global]] , the problem does not need more calculations: it needs a frame review. The advanced competence of the topic consists of detecting this failure before closing the result.

---

## Deep physical interpretation

The intellectual gain of the leaf is learning to separate physical reality from description. The event does not depend on the observer, but the value of [[r_vec]] does; the object does not change nature, but its velocity reading depends on the chosen [[frame_sigma]] ; the collision, the meeting, or the rest still occur, even though each observer expresses them with different coordinates. This separation is deep because it teaches not to confuse the measurement tool with the measured phenomenon.

Read this way, the reference frame is no longer an administrative trámite. Choosing the frame well is deciding what information becomes simple, what magnitudes are compared directly, and where the dominant conceptual error lies. A frame that follows the body may reveal a simple geometry; a frame fixed to the ground may be better for interpreting arrival times. Neither is "the true one" on its own: it is true for the specific question to be answered.

---

## Order of magnitude

Reasonable numbers for [[v_frame]] usually fall within very familiar scales: an airport belt can move in the range of 10^{-1} to 10^{0} m/s, an urban train in the range of 10^1 m/s, and a laboratory vehicle even less. These scales are useful because they allow for quick absurdity detection. If a school exercise makes a person walking inside a carriage appear with a speed of hundreds of meters per second, a long proof is not needed to suspect the frame or the sign.

It is also advisable to review the order of magnitude of [[r_vec]] . In a laboratory, a few meters are usually reasonable; in a track or road problem, tens or hundreds of meters; in a temporal graph animation, massive displacements in minimal times often reveal that the origin or the clock was mixed up. The order of magnitude does not solve the problem, but it avoids accepting a translation between frames that is already physically misadjusted.

---

## Personalized resolution method

1. Explicitly name the [[frame_sigma]] of each observer and decide which one simplifies the physical question.
2. Fix the origin [[O]] and the positive sign in each description.
3. Write [[r_vec]] and, if necessary, the body's own velocity within the accompanying frame.
4. Introduce [[v_frame]] as the velocity of the moving frame relative to the fixed frame.
5. Check at the end if the change of observer only alters the description and not the event.

This method matters because it attacks the most frequent error of the topic: comparing legitimate magnitudes that belong to different observers. When each symbol is assigned to its frame before substituting data, the resolution becomes much shorter and more defensible.

---

## Special cases and extended example

### Apparent rest
An object can have constant [[r_vec]] in one frame and, at the same time, move uniformly in another. This scenario is not an exception: it is the heart of the topic. If the student understands it, they understand why a suitcase resting on the train does not contradict the train advancing relative to the platform.

### Shifted origins
Another useful case is two observers who share [[t_global]] but not spatial origin. It is not enough to say "it is at una coordenada de 5 m": one must say relative to which [[O]] .

---

## Real student questions

- **If the motion is the same, why does a different velocity come out?** The physical motion has not changed, only the partition between own motion and frame motion.
- **How do I know which is the best frame?** Choose the one that makes the dominant relationship simplest. If you want to know how a passenger moves inside the train, the carriage frame clarifies first; for a post, the ground frame.

---

## Cross-cutting connections and study paths

This leaf connects directly with relative velocity, meeting and pursuit problems, graphical analysis, and, later, with the frontier where classical mechanics is no longer sufficient. It also prepares the reading for many dynamics problems: before deciding on forces or accelerations, it is useful to know from which frame they will be interpreted.

---

## Final synthesis

Mastering reference frames means choosing a [[frame_sigma]] , fixing an origin [[O]] , and interpreting [[r_vec]] unambiguously. Changing the observer changes the description of the motion, not the physical event described.

Remember:
1. The frame [[frame_sigma]] is the tool, not the phenomenon.
2. The [[v_frame]] is the "translation velocity" between descriptions.
3. The time [[t_global]] is the only common thread shared by all Galilean observers.
4. A result without a declared frame is physically incomplete.
