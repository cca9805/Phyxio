# Applications

## 1. Magnetic sensors near a continuous transition
Dominant variable: [[susceptibilidad]]
Validity limit: 10^-5 < |[[temperatura_reducida]]| < 10^-1 and sufficiently weak external field

In magnetic sensors, a large [[susceptibilidad]] converts weak perturbations into measurable signals. Near [[temperatura_critica]], the material responds collectively because [[longitud_correlacion]] has grown and many regions no longer act independently. This can improve sensitivity to small fields, but it also amplifies noise, thermal drift, and residual fields. The useful prediction is not simply “closer is better.” If |[[temperatura_reducida]]| becomes too small, finite-size rounding and experimental instability can dominate. The design goal is a window where [[susceptibilidad]] is high but still reproducible. Engineers also track [[temperatura_reducida]] during heating and cooling cycles to separate genuine critical response from instrumental drift. If the curve depends on sweep direction, the equilibrium assumption is weakened and the calibration is no longer universal.

## 2. Fluids near the critical point
Dominant variable: [[longitud_correlacion]]
Validity limit: [[longitud_correlacion]] must remain below the optical or sample scale being observed

In fluids near a critical point, density fluctuations become visible because [[longitud_correlacion]] increases. The system can scatter light strongly, not because new particles appear, but because extended regions fluctuate coherently. Measuring how [[longitud_correlacion]] changes with [[temperatura_reducida]] helps estimate [[exponente_critico_nu]] and diagnose whether the experiment is truly in the critical window. If the signal saturates near [[temperatura_critica]], the cause may be limited resolution, impurities, or finite sample size. This application constrains how close the experiment can move toward the critical point while remaining interpretable. In precision optical cells, this information guides illumination, observation volume, and thermal ramp speed. A ramp that is too fast can create [[temperatura]] gradients that mimic critical fluctuations.

## 3. Ferroelectric materials
Dominant variable: [[parametro_de_orden]]
Validity limit: continuous transition without strong hysteresis or locked domains

In ferroelectrics, [[parametro_de_orden]] may represent spontaneous polarization. Its decrease near [[temperatura_critica]] characterizes the loss of internal order. A critical law with [[exponente_critico_beta]] allows comparison of samples with different thermal treatments. If two samples have the same exponent but different [[amplitud_critica]], they may share an approximate critical class while having different material scales. This application predicts loss of polarization and helps select operating ranges. If strong hysteresis appears, the simple critical model should be replaced by a domain-based or possibly first-order description. Measurements at several frequencies also reveal whether domains follow equilibrium or remain partially frozen. That decision determines whether the fitted exponent has physical meaning.

## 4. Statistical simulations
Dominant variable: [[temperatura_reducida]]
Validity limit: lattice size large enough and several sizes used to check finite-size scaling

In simulations of spin or lattice models, [[temperatura_reducida]] organizes data for [[parametro_de_orden]], [[susceptibilidad]], [[longitud_correlacion]], and [[calor_especifico]]. The advantage is that the calculation can be repeated with different system sizes. If the [[susceptibilidad]] peak grows with size and shifts toward [[temperatura_critica]], the data support critical behavior. This application measures exponents and checks universality. A peak alone is not enough: log-slope stability and data collapse must be consistent with [[exponente_critico_gamma]] and [[exponente_critico_nu]]. Simulations can also measure fluctuations and spatial correlations directly, which is difficult in many experiments. This makes them a testing ground for separating universal critical effects from microscopic model details.

## 5. Thermal design in functional materials
Dominant variable: [[calor_especifico]]
Validity limit: critical anomaly separable from regular background contributions

Near a continuous transition, [[calor_especifico]] can show an anomaly that changes how the material stores thermal energy. In functional materials, this affects stability, dissipation, and response to changes in [[temperatura]]. Measuring [[calor_especifico]] as a function of [[temperatura_reducida]] helps identify [[exponente_critico_alpha]] or at least classify the anomaly as a peak, cusp, or weak growth. The application predicts ranges where the material buffers or amplifies thermal changes. The practical limit is that the regular background can hide the singular part, so noncritical contributions must be subtracted before interpreting exponents. This reading matters in cryogenic design, thermal-memory materials, and devices using smooth phase changes. A misread anomaly can overestimate the energy the material can absorb near [[temperatura_critica]].

Together, the five applications show that criticality is not only a theoretical ornament: it is used to measure sensitivity, spatial range, loss of order, and thermal anomalies. The common condition is careful control of [[temperatura_reducida]] and not confusing a curve rounded by real limitations with the ideal divergence of the model. In every case, thermal uncertainty, effective sample size, and possible external fields should be reported, because these three factors can change the reading of [[susceptibilidad]], [[longitud_correlacion]], or [[calor_especifico]] without changing the underlying microscopic physics. Reliable use therefore requires both a scaling law and an experimental audit trail. A practical report should state the fitted interval, the side of [[temperatura_critica]], and whether the exponent remains stable when nearby points are removed. That extra discipline prevents a merely curved background from being dressed up as universal critical behavior. It also makes comparison between materials honest, because amplitudes are material-dependent while critical exponents are the quantities normally tested for universality.