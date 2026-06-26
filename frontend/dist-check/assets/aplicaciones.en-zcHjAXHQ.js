const e=`## 1. Epicenter location by seismic triangulation

A network of seismological stations (minimum three) measures the [[delta_t_ps]] arrival time difference for each recorded earthquake. Each station converts its [[delta_t_ps]] into a distance [[d_foco]] using the known average velocities of the medium. A circle centred on each station with radius equal to the estimated distance is drawn. The intersection of the three circles locates the epicentre on the surface. The vertical component is obtained by adjusting the depth so that the three hypocentral distances are consistent.

The method is fast and allows automatic alerts in less than 10 seconds in dense networks like those in Japan or California. Its accuracy depends on the quality of the velocity model and on network geometry (stations well distributed azimuthally). For very distant earthquakes, Earth's curvature and mantle stratification require using travel-time curves computed with models like PREM rather than the direct linear formula.

Dominant variable: the P-S time difference measured at each station, which transforms directly into hypocentral distance.
Validity limit: for distances beyond 200 km with a homogeneous model, error exceeds 10 percent and corrected travel-time curves accounting for radial Earth structure must be used.

## 2. Hydrocarbon reservoir detection using reflection seismics

In oil and gas exploration, artificial seismic waves are generated (with vibrators or explosives) and their reflection at deep geological interfaces is recorded. The key is measuring [[v_p]] and [[v_s]] in the different layers. A rock saturated with fluid (oil or gas) shows an anomalous increase in [[ratio_vp_vs]] relative to the surrounding dry rock, because the fluid increases [[K_bulk]] while barely affecting [[G_shear]].

This contrast allows mapping reservoirs at depths of 2 to 5 km without drilling. AVO (amplitude versus offset) techniques exploit the fact that interface reflectivity depends on incidence angle, which in turn depends on the [[v_p]] and [[v_s]] contrast between layers. A change of [[ratio_vp_vs]] from 1.7 (dry rock) to 2.1 (saturated rock) is a "bright spot" anomaly directly interpretable as a potential hydrocarbon trap.

Dominant variable: the P-to-S velocity ratio in the target layer, which reveals the presence of fluids in the pores of the reservoir rock.
Validity limit: in reservoirs with very low gas saturation (below 5 percent), the effect on [[ratio_vp_vs]] may be undetectable above seismic noise levels.

## 3. Geotechnical soil classification for earthquake-resistant design

International building codes (Eurocode 8, NEHRP, NSR-10) classify foundation soil by the average [[v_s]] in the upper 30 metres (the VS30 parameter). Soft soils (VS30 below 180 m/s) dramatically amplify surface seismic waves, while hard soils or rock (VS30 above 760 m/s) transmit waves with little amplification.

Measurement of [[v_s]] is performed through cross-hole, down-hole, or MASW (multichannel analysis of surface waves) tests. The VS30 value directly determines the soil amplification factor and therefore the seismic design spectrum used to size structures. An error of 50 m/s in VS30 estimation can change the soil category (from C to D, for example) and increase design forces by 40 percent.

Dominant variable: the average S-wave velocity in the upper 30 metres of ground, which controls local seismic amplification.
Validity limit: VS30 does not capture resonance effects from deep soft layers (complex 1D site effect) nor lateral heterogeneities like sedimentary valleys that produce 2D/3D effects.

## 4. Confirmation of Earth's internal structure through shadow zones

Seismological stations located between 104 and 140 degrees angular distance from the epicentre receive no direct P waves (P shadow zone) and receive no S waves at all beyond 104 degrees. The explanation requires a liquid outer core: zero [[G_shear]] implies zero [[v_s]], completely absorbing S waves, and the sharp change in [[v_p]] refracts P waves away from the intermediate zone.

In 1936, Inge Lehmann observed weak P arrivals within the shadow zone and proposed a solid inner core that refracted them back. This discovery was confirmed with seismic velocities: the inner core has [[v_p]] of 11000 m/s and finite [[v_s]] (3500 m/s), demonstrating it is solid. Global seismology continues to use P and S waves as the only tool capable of diagnosing the physical state of layers at thousands of km depth.

Dominant variable: S-wave velocity in the different Earth layers, whose vanishing in the outer core creates the shadow zone and proves the existence of fluid.
Validity limit: the radial 1D model does not explain lateral anomalies such as the large low-shear-velocity provinces at the base of the mantle (LLSVPs), which require 3D tomography.

## 5. Underground nuclear test monitoring and CTBT verification

The Comprehensive Nuclear-Test-Ban Treaty (CTBT) is verified through a global network of seismological stations (IMS, International Monitoring System) that detect P waves generated by underground explosions. A nuclear explosion produces a characteristic seismic pattern: very energetic P waves with high frequencies (5-20 Hz) and little S-wave energy compared to a natural earthquake of the same magnitude.

Explosion-earthquake discrimination is based precisely on the apparent [[ratio_vp_vs]] and on the amplitude relationship between P and S waves: an explosion fundamentally produces radial compression (P-rich), while a natural earthquake (fault slip with shear) generates P and S in comparable proportions. Stations at 1000-3000 km detect explosions of barely 1 kiloton thanks to high sensitivity to [[v_p]] and P/S discrimination. The system can locate the event with 10 km precision using [[delta_t_ps]] from multiple stations.

Dominant variable: the amplitude ratio between P and S waves in the recorded signal, which discriminates between explosion (P dominant) and natural earthquake (P and S balanced).
Validity limit: very low-yield explosions (below 0.1 kiloton) or those conducted in decoupled cavities produce signals below the detection threshold of the network at regional distances.
`;export{e as default};
