const e=`## 1. Bathymetric sonar for ocean floor mapping

Oceanographic research vessels and high-precision positioning systems use multibeam sonars to map the seabed with metre resolution at depths of up to 11000 m. The principle is that of the echo formula: dozens of pulses are emitted in a fan pattern towards the seabed, travel times of all echoes are measured and [[d_eco]] is calculated for each direction. The set of distances forms a high-resolution bathymetric profile.

The main technical challenge is not the formula itself, but knowing [[v_sonido]] precisely in each water layer: ocean temperature and salinity change with depth, and with them [[v_sonido]] changes. A velocity profile error of just 1% in [[v_sonido]] produces a 1% error in all calculated depths, equivalent to 100 m in a 10000 m zone. This is why oceanographic vessels measure the sound velocity profile with expendable probes (XBT) before each precision bathymetry campaign.

Dominant variable: speed of sound [[v_sonido]] in the water column, whose precision directly limits the accuracy of the resulting bathymetric chart.
Validity limit: the simple echo model is valid for flat and horizontal seabeds; on submarine slopes with gradients above 30 degrees, multiple echoes and refraction from the velocity gradient require additional geometric corrections.

---

## 2. Doppler ultrasound in cardiology to assess blood flow

Doppler ultrasound combines the echo principle (to locate anatomical structures) with the Doppler effect (to measure blood flow velocity). When the ultrasonic pulse reaches moving red blood cells inside the heart or vessels, the echo returns with a slightly different frequency from the emitted one. The frequency difference is proportional to flow velocity, and the equipment converts it into a velocity measurement in metres per second.

The most critical clinical application is the evaluation of cardiac valve disease: a stenotic valve creates an accelerated flow that Doppler detects as a high-velocity peak. The echo-distance formula allows precisely locating where the valve is relative to the transducer, while the Doppler frequency shift provides flow velocity at that exact point. Combining both pieces of information in real time allows the cardiologist to assess valve function without invasive catheterisation.

Dominant variable: the travel time [[t_vuelo]] of the structural echo (to locate the valve) and the Doppler frequency shift of the echo (to measure the flow).
Validity limit: the technique loses precision when the angle between the ultrasound beam and the flow direction exceeds 60 degrees, because the Doppler component of the motion is reduced by the cosine of the angle and angle estimation errors produce large velocity errors.

---

## 3. Industrial ultrasonics for crack detection in railway rails

Rails in service accumulate surface fatigue and can develop internal cracks that are not visible from the outside but can cause derailments. Automated ultrasonic inspection equipment mounted on inspection trains emits longitudinal and shear wave pulses into the rail interior as the train advances, and records echoes from any internal discontinuity.

The echo formula allows calculating the depth of the crack from the [[t_vuelo]] of the defect echo, using [[v_sonido]] of rail steel (approximately 5900 m/s for the longitudinal wave). An echo arriving earlier than expected for the rail base indicates an internal discontinuity: the difference in [[t_vuelo]] between the defect echo and the base echo gives the depth of the defect. Combined interpretation of longitudinal and shear waves allows distinguishing transverse cracks from longitudinal fissures, because each wave type is more sensitive to crack planes of different orientation.

Dominant variable: travel time [[t_vuelo]] of the defect echo relative to the base echo, whose difference determines the defect depth.
Validity limit: the technique does not detect cracks whose opening is smaller than the ultrasound wavelength used; at 5 MHz in steel (wavelength 1.2 mm), defects smaller than 0.6 mm opening produce reflections of insufficient amplitude to exceed the equipment detection threshold.

---

## 4. Noise control in urban environments using acoustic barriers

Motorways and railway lines in urban areas can generate traffic noise levels exceeding 80 dB at 25 m from the source. European regulations (Directive 2002/49/EC) require reducing the level to below 55 dB at residential facades. Acoustic barriers — concrete, glass or absorptive material panels of 3 to 6 m height — are the most widespread solution.

The reduction level achieved by a barrier depends on the path length difference between the direct path (source to receiver) and the diffracted path over the barrier's top edge. The greater that path difference, the greater the reduction. At 500 Hz with a path difference of 0.5 m, typical reduction is 10 to 12 dB in free field. Combined with the facade [[R_aislamiento]] of the dwelling, the sum allows meeting regulatory limits. Optimal barrier design requires knowing the source level, path geometry and target level at the receiver, calculating the required reduction as the difference between the two intensity levels [[IL]].

Dominant variable: sound intensity level [[IL]] of the traffic source and the target level at the receiver, whose difference sets the reduction requirement for the barrier.
Validity limit: barriers are effective primarily for direct sound in free field; in zones with tall buildings, reflections from opposite facades can exceed the barrier reduction by several decibels, requiring additional treatment of those surfaces.

---

## 5. Room acoustics in classical music concert halls

The acoustic design of a classical music concert hall is one of the most complex and subtle applications of sound. The goal is to achieve a reverberation time T60 in the 500 Hz band between 1.8 and 2.2 seconds, together with a sufficient direct sound level, absence of harmful echoes and uniform sound distribution at all seats.

The intensity level [[IL]] in the hall must not vary by more than 4 to 6 dB between the front and back rows. To achieve this, the geometry of the ceiling and overhead reflector panels is controlled, redirecting direct sound towards zones farther from the stage. At the same time, the [[R_aislamiento]] of the hall envelope must be high enough to block exterior noise (traffic, building services): for a high-quality concert hall, the interior background noise level must be below 25 dB, requiring facade and roof [[R_aislamiento]] typically above 55 dB.

Dominant variable: intensity level [[IL]] at different points in the hall and its spatial variation, which determines the uniformity of the acoustic experience for the audience.
Validity limit: the statistical acoustics model (Sabine) for predicting T60 is valid only in halls with a diffuse sound field distribution; in very long and narrow halls, or with very irregular geometries, ray theory or numerical simulation (BEM, FEM) is needed to predict the real level distribution and detect undesired shadow zones or acoustic focusing.
`;export{e as default};
