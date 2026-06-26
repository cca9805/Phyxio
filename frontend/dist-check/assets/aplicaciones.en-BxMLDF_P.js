const e=`## 1. Air navigation: position vector and displacement along a route\r
\r
A commercial aircraft flies from Madrid to Tokyo. The navigation system updates the **position vector** \\( \\vec{r}(t) \\) of the aircraft relative to Earth’s center every second using differential GPS. The **displacement** \\( \\Delta\\vec{r} \\) from takeoff points directly from the departure airport to the current position, whereas the **distance traveled** \\( s \\) accumulates every metre of the actual trajectory regardless of deviations caused by wind corridors or restricted airspace.\r
\r
For the whole trip, [[velocidad_media]] is computed by dividing the [[desplazamiento]] (≈ 9 560 km) by the [[intervalo_tiempo]] . [[rapidez_media]] uses the actual [[distancia]] (≈ 10 100 km) divided by the same [[intervalo_tiempo]] . The comparison between both quantities helps flight-management software estimate route efficiency and fuel consumption.\r
\r
Dominant variable: [[desplazamiento]] , because it captures the useful net connection between origin and destination and gives physical meaning to average velocity.\r
\r
Validity limit: for flights longer than roughly \\( 3\\,000\\;\\text{km} \\), Earth’s curvature makes a flat Euclidean treatment too crude. Spherical geometry becomes necessary to avoid systematic distortion in route interpretation, displacement estimation, and average-velocity analysis across continental or transoceanic paths.\r
\r
---\r
\r
## 2. Emergency braking in vehicle approval tests\r
\r
Vehicle approval protocols require the measurement of **average acceleration** during emergency braking. The test records an initial [[velocidad]] (27.8 m/s) and a final [[velocidad]] (0) on dry asphalt with ABS active, along with the elapsed [[intervalo_tiempo]] .\r
\r
The ** [[cambio_velocidad]] ** is −27.8 m/s, and the resulting [[aceleracion_media]] (dividing by [[intervalo_tiempo]] ) summarizes the global braking capability. If the stopping time is \\( 2.7\\;\\text{s} \\), the average acceleration is approximately \\( -10.3\\;\\text{m/s}^2 \\), a value close to the tyre-road adhesion limit.\r
\r
Dominant variable: [[aceleracion_media]] , because it compresses a complex transient process into a directly comparable global indicator.\r
\r
Validity limit: the average does not describe the instantaneous oscillations of \\( a(t) \\) during ABS intervention. Questions about comfort, vibration, or disc heating require time-resolved data.\r
\r
---\r
\r
## 3. Long-distance athletics: average speed versus average velocity\r
\r
In a \\( 10\\,000\\;\\text{m} \\) track race, the athlete covers a large distance but ends essentially where the race started. For a race duration of \\( 1\\,620\\;\\text{s} \\), the ** [[rapidez_media]] ** is 10 000 m ÷ 1 620 s ≈ 6.17 m/s, whereas the [[velocidad_media]] is nearly zero because the final displacement is nearly zero.\r
\r
This is not a cosmetic distinction. In athletics, records, split times, and competitive performance are reported through average speed, not average velocity, because what matters is real path covered per unit time.\r
\r
Dominant variable: [[rapidez_media]] , because it remains operationally meaningful even when the route is closed and net displacement loses relevance.\r
\r
Validity limit: average speed cannot distinguish a steady pace from a highly variable tactical effort. For fatigue studies or race strategy, time-resolved velocity is needed.\r
\r
---\r
\r
## 4. Seismology: average wave velocity for focus location\r
\r
When an earthquake occurs, different stations detect P-wave arrival at different times. From the source-station separation and the travel time, seismologists estimate the ** [[velocidad_media]] ** of propagation by dividing [[desplazamiento]] by [[intervalo_tiempo]] .\r
\r
If a station lies \\( 300\\;\\text{km} \\) from the epicentre and records the signal after \\( 52\\;\\text{s} \\), then [[velocidad_media]] ≈ 5 800 m/s, which is physically plausible for continental crust. Combined across several stations, this quantity enables rapid triangulation of the seismic focus.\r
\r
Dominant variable: [[velocidad_media]] , because it directly converts temporal delay into spatial information.\r
\r
Validity limit: the straight-path approximation works only under limited structural complexity. Deep events or long propagation paths require layered or refracted-wave models.\r
\r
---\r
\r
## 5. Gait biomechanics: average acceleration at heel strike\r
\r
In clinical gait analysis, sensors attached near the pelvis measure how the velocity of the body’s center of mass changes during each support phase. At heel strike, the forward velocity can decrease from \\( 1.30\\;\\text{m/s} \\) to \\( 1.10\\;\\text{m/s} \\) over \\( 0.12\\;\\text{s} \\). The [[cambio_velocidad]] is −0.20 m/s and the [[aceleracion_media]] is about −1.7 m/s². This rapid deceleration during heel strike is significant in gait analysis because it indicates how efficiently the body absorbs the impact energy at foot contact. Clinical norms for healthy adults suggest that this value lies within a range consistent with low injury risk; values far outside this range may indicate abnormal loading patterns linked to musculoskeletal pathologies. The combination of [[velocidad_media]] and [[aceleracion_media]] over multiple gait cycles allows physiotherapists to compare patients before and after rehabilitation, giving these two kinematic magnitudes direct diagnostic value.\r
\r
This value is clinically useful because it summarizes the global intensity of impact and allows comparison between rehabilitation sessions, footwear conditions, or patient groups.\r
\r
Dominant variable: [[aceleracion_media]] , because it provides a compact comparative measure of the change in motion during a well-defined phase.\r
\r
Validity limit: the average smooths out very short impact peaks. Footwear design, stress-injury studies, rehabilitation monitoring, and fine motor-pattern analysis require instantaneous acceleration rather than its mean value, because clinically relevant peaks may be brief, localized, and invisible once the signal is reduced to a single average over the whole support phase.\r
`;export{e as default};
