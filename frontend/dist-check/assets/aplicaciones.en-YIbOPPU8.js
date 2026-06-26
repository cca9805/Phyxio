const e=`# Practical applications: reference frames [[frame_sigma]] \r
\r
## 1. Fixed camera tracking on a track\r
\r
On a test track, a camera anchored to the ground records an electric car passing by, along with an accompanying drone. The specific decision is to determine whether the velocity shown in the video corresponds to the car relative to the ground or relative to the drone. If the analyst does not fix the [[frame_sigma]] of the fixed camera from the start, they end up mixing the car's displacement with the moving sensor's displacement, and the temporal reading loses meaning.\r
\r
Here, the ground-fixed frame is convenient because the goal is to compare the trajectory with marks painted on the asphalt. The application shows why the position [[r_vec]] is not raw data from the object, but a magnitude linked to an origin [[O]] and an observer. Switching to a drone-associated frame might simplify visual tracking, but it would hide the information the engineer needs to certify the test.\r
\r
**Dominant variable**: Position [[r_vec]] of the car relative to the fixed track frame.\r
\r
**Validity limit:** The fixed camera reading is valid only if the ground frame remains inertial during the test.\r
\r
## 2. Picking robot on a conveyor belt\r
\r
In a logistics center, a conveyor belt carries boxes toward a robotic arm mounted on a moving guide. The real decision is to choose from which frame the gripper closure will be programmed. If the software uses a ground-fixed frame, the box appears to move at a significant speed; if it uses the guide's frame, the same box can be seen as nearly stationary during the moment of grasp.\r
\r
The application is different from the track because here, stabilizing a local maneuver is what matters. The technician needs to separate the frame velocity [[v_frame]] from the small relative correction of the box. If they confuse the two, the gripper will arrive late. The case makes it clear that the best frame is not the most "true" one, but the one that makes the specific decision simplest.\r
\r
**Dominant variable**: Moving frame velocity [[v_frame]] relative to the warehouse floor.\r
\r
**Validity limit:** The warehouse comparison is valid while the moving guide keeps nearly constant velocity during grasping.\r
\r
## 3. Passenger information inside a train\r
\r
An information system wants to show the passenger two pieces of data: the train's speed relative to the track and a person's walking speed through the hallway relative to the carriage. The design decision consists of not presenting both values as if they measured the same thing. If the interface does not distinguish frames, the user might wrongly interpret that walking inside the train changes the convoy's commercial speed.\r
\r
This application forces a differentiation of levels: the passenger's internal motion within the frame and the motion of the entire frame relative to the track. The leaf appears here as an interface criterion: two readings can be correct and yet misleading if it is not made explicit from which reference frame [[frame_sigma]] they are formulated.\r
\r
**Dominant variable**: Reference frame [[frame_sigma]] chosen for each operational message.\r
\r
**Validity limit:** Passenger information must keep train-relative and track-relative velocities separated; acceleration requires another model.\r
\r
## 4. Docking maneuver with a floating platform\r
\r
During docking, a floating platform moves slowly relative to the pier while one operator observes from the deck and another from the shore. The same position vector [[r_vec]] of the hook can be nearly constant for the onboard operator and, at the same time, decrease rapidly for the shore observer.\r
\r
If the change of observer is not made explicit, a command like "we are stationary now" can be locally true and globally false. The example teaches why the correct reference not only simplifies calculations but also coordinates decisions among people looking at the same event from different frames.\r
\r
**Dominant variable**: Lateral position [[r_vec]] of the hook relative to the pier (safety frame).\r
\r
**Validity limit:** The docking command is reliable only after choosing pier frame or floating-platform frame as the safety reference.\r
\r
## 5. Video analysis in a teaching laboratory\r
\r
In a laboratory, a cart is recorded with both a fixed and a moving camera. The didactic decision is to show that the two videos do not contradict each other even if they produce different coordinates. The student can see that the crossing event occurs only once, but the position reading [[r_vec]] depends on the chosen origin [[O]] and the velocity [[v]] changes due to the presence of [[v_frame]] .\r
\r
The pedagogical value is high because it makes visible a common error: believing that an "absolute" position exists and that the observer only adds noise to the measurement. The leaf teaches that measuring is, by definition, measuring relative to something.\r
\r
**Dominant variable**: Explicit choice of origin [[O]] and common time [[t_global]] .\r
\r
**Validity limit:** The laboratory comparison requires synchronized clocks and parallel axes between fixed and moving cameras.\r
\r
\r
## Cierre operativo\r
\r
This case is valid only if the chosen frame remains approximately inertial, the axes remain parallel, and relative velocity between observers can be treated as constant during the maneuver. Outside those conditions an extended model must be declared before interpreting the result. La decisi?n pr?ctica siempre empieza nombrando observador, origen, eje positivo y magnitud dominante; despu?s se comprueba si el cambio de marco simplifica la tarea o si oculta una condici?n relevante. Esta disciplina evita que dos mediciones correctas parezcan contradictorias por haber sido le?das desde sistemas de referencia distintos.\r
`;export{e as default};
