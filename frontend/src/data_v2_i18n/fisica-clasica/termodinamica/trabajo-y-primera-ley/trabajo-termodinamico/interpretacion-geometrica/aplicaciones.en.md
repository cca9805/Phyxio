# Applications

## 1. Engine diagnosis using p-V indicator

The cylinder pressure indicator technique (P-V analysis) measures the actual net work of a combustion engine by computing the area enclosed by the cycle in the p-V diagram. A piezoelectric pressure sensor and a crankshaft encoder simultaneously record p and V during each cycle. Software integrates the area and computes the mean effective pressure, which multiplied by displacement and rotational speed gives engine power.

Dominant variable: ** cycle area in the p-V diagram, directly equal to net work [[trabajo_neto_del_ciclo]] per cylinder per cycle.

Validity limit: ** the method assumes uniform pressure in the cylinder (homogeneous mixture); under detonation or uneven combustion, the p-V profile distorts and area reading overestimates actual work.

## 2. Efficiency analysis in industrial compressors

In piston compressors, the p-V diagram of the compression cycle graphically shows the work consumed by the compressor. The cycle area in the p-V diagram is the work per cycle required to compress the gas. Process engineers use this diagram to compare the actual compressor with the ideal isothermal case (minimum theoretical work) and quantify losses from irreversibilities such as heating, friction and leakage.

Dominant variable: ** compression cycle area in the p-V diagram; difference between actual area and ideal isothermal cycle area.

Validity limit: ** the actual p-V diagram includes heat transfer effects to the walls, making the process not strictly polytropic; analytical models are approximations.

## 3. Refrigeration cycle design

In vapour compression refrigeration systems (air conditioners, refrigerators), the thermodynamic cycle is represented in the p-V diagram or, more commonly, in the enthalpy-pressure diagram (Mollier diagram). Reading the area in the p-V diagram allows direct visualisation of net work consumed by the compressor and comparison of different refrigerants or cycle configurations.

Dominant variable: ** counter-clockwise cycle area in the p-V diagram, representing compressor work consumed; ratio of that area to heat extracted from the cold reservoir (coefficient of performance COP).

Validity limit: ** real refrigerants behave non-ideally (especially near phase transitions), so the ideal p-V diagram is a first approximation; the Mollier diagram with real data is more accurate.

## 4. Stirling engine cycle optimisation

The Stirling cycle, which operates with internal heat regeneration, has an ellipse-shaped p-V diagram that encloses the maximum possible net work for given pressure and volume limits. The p-V diagram shape visually shows how regeneration reduces required external heat without reducing the cycle area (and hence without reducing net work). Engineers designing Stirling engines use the p-V diagram to optimise pressure and volume ratios that maximise efficiency.

Dominant variable: ** area enclosed by the Stirling cycle in the p-V diagram, which must be maximised within the design's temperature and pressure limits.

Validity limit: ** the ideal Stirling cycle assumes reversible heat transfer in the regenerator; in practice regeneration is imperfect and the actual cycle area is smaller than the ideal.

## 5. Thermodynamic cycle simulation in education and software

The interactive p-V diagram is an educational and simulation tool that allows students or engineers to visually trace thermodynamic cycles and compute net work as enclosed area. Software such as EES (Engineering Equation Solver), REFPROP or educational platforms like Phyxio allow building the p-V diagram for any real or ideal fluid, automatically reading the cycle area and comparing different cycle configurations in real time.

Dominant variable: ** cycle area in the p-V diagram computed numerically as the sum of integrals ∫p dV for each cycle process.

Validity limit: ** the precision of the computed area depends on the numerical integration resolution and the accuracy of the fluid equation of state; for ideal gases precision is exact; for real fluids it depends on available thermodynamic data.

## 6. Quality control in industrial gas expansion processes

In the chemical and petrochemical industries, gas expansion or compression processes (expansion valves, gas turbines, process compressors) must operate within pressure and volume parameters that guarantee safety and efficiency. The p-V diagram of the actual process, measured continuously by distributed sensors, is compared with the design p-V diagram. Deviations between the actual cycle area and the expected area indicate energy losses or departures from the quasi-static model that may signal failures, leaks or equipment degradation.

Dominant variable: ** difference between the area enclosed by the actual p-V cycle and the design p-V cycle; this difference quantifies the net work loss relative to the optimal process. Monitoring this difference continuously allows engineers to detect gradual equipment degradation before it leads to a critical failure, making the p-V area a key performance indicator in predictive maintenance programmes.

Validity limit: ** the method requires that pressure and volume sensors have sufficient resolution and that the process is slow enough for the quasi-static hypothesis to be a good approximation; in very fast processes, the measured cycle area overestimates the actual work.