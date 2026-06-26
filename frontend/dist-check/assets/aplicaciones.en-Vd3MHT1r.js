const e=`## 1. Highway overtaking radar\r
\r
An onboard radar in a patrol car must decide whether the vehicle ahead is truly pulling away or whether both cars are moving almost together. The operational quantity is not only the speed relative to the road but the [[v_rel]] between the two cars, because that value determines approach, separation, or mutual rest. The application forces a distinction between the speed read by the patrol car and the speed both vehicles have with respect to the ground.\r
\r
In this situation the relative velocity may be small even when both cars travel at \\(120\\;\\text{km/h}\\). That detail completely changes the safety reading. A human driver or an ADAS system does not brake because of the leading car's absolute speed, but because of the rate at which the distance between both vehicles changes in time. The leaf turns that intuition into a measurable and defensible quantity.\r
\r
Dominant variable: [[v_rel]] between the patrol car and the observed vehicle.\r
\r
Validity limit: if the overtaking happens with fast lane changes or curved trajectories, a simple signed scalar reading is no longer enough.\r
\r
## 2. Boat navigation in a river\r
\r
A maintenance boat must reach a buoy while the river drifts the vessel downstream. The pilot controls the boat speed relative to the water, but the port authority needs the speed relative to the shore. Here [[v_frame]] is the current speed and [[v_abs]] is the effective boat speed relative to land. The correct composition decides whether the boat reaches the buoy or slips below it.\r
\r
This case is especially valuable because it forces a sharp separation between self-motion and medium motion. The pilot may feel that the heading is correct relative to the water and still miss the target relative to the shore. In real navigation that difference decides docking paths, channel crossings, and arrival times. The leaf stops being a school subtraction and becomes a spatial decision tool.\r
\r
Dominant variable: [[v_frame]] provided by the river current.\r
\r
Validity limit: if the current changes strongly with position or time, the constant-relative-velocity model is no longer sufficient.\r
\r
## 3. Robot on a conveyor belt\r
\r
In a packaging line, a robot must place labels on boxes moving along a conveyor. For the arm motion to close properly, the relevant quantity is the box velocity relative to the robot, not just its velocity relative to the factory floor. In this application [[v_rel]] synchronizes the fine action, while [[v_abs]] is still needed to coordinate the whole production line.\r
\r
The richness of this scenario is that two operational scales coexist. The plant engineer thinks in terms of global throughput and therefore monitors [[v_abs]] ; the local robot controller thinks in terms of contact timing and therefore needs [[v_rel]] . If both layers are mixed, the arm can look perfectly programmed on paper and still fail systematically in the final motion.\r
\r
Dominant variable: [[v_abs]] of the box relative to the floor when multiple stations must be synchronized.\r
\r
Validity limit: if the local box-robot velocity and the global box-floor velocity are mixed, the contact timing fails even if the units are correct.\r
\r
## 4. Sports video analysis with a moving camera\r
\r
A camera mounted on a motorcycle follows a racing cyclist. For the director, the cyclist may appear almost still on screen even though the rider moves quickly relative to the road. Relative velocity explains why a stable image does not imply real rest: the camera shares nearly the same speed as the cyclist and makes their [[v_rel]] small.\r
\r
This example makes the difference between visual perception and physical description especially clear. A viewer may infer from the image alone that the cyclist is moving slowly, when in fact the camera is simply sharing most of the rider's motion. In sports analysis this matters for interpreting overtakes, pace changes, and sprint finishes without being misled by the moving reference of the recording.\r
\r
Dominant variable: [[v_rel]] between cyclist and camera.\r
\r
Validity limit: if the camera rotates or accelerates sharply, a simple relative-velocity reading no longer captures the full scene geometry.\r
\r
## 5. Passenger information inside a train\r
\r
A display inside a train wants to show both the speed of the convoy relative to the track and the speed of a person walking along the corridor relative to the train itself. The system must avoid mixing both numbers as if they described the same thing. Here the value of the leaf is not faster calculation but presenting [[v_frame]] and [[v_rel]] with clear meaning so the passenger does not misread the information.\r
\r
The value of this application lies in correct physical communication. A passenger may read \\(250\\;\\text{km/h}\\) for the train and, at the same time, walk at \\(1\\;\\text{m/s}\\) inside the carriage. Neither value invalidates the other. The leaf helps build interfaces or teaching materials that do not mix observers and therefore do not turn a simple situation into an apparent contradiction.\r
\r
Dominant variable: the conceptual separation between train [[v_frame]] and the person's [[v_rel]] inside the carriage.\r
\r
Validity limit: if the interface does not make explicit who observes each velocity, the user may read two correct numbers as if they were incompatible.\r
`;export{e as default};
