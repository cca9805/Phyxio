const e=`## 1. Non-destructive testing in aerospace industries

Inspection of structural components made of aluminum and titanium alloys in commercial aircraft, fighter jets, and space rockets. Early detection of submillimeter cracks and delaminations is essential to prevent catastrophic failures and ensure operational safety during long-duration missions.

High-frequency ultrasonic systems (5-15 MHz) with phased-array transducers are implemented to detect internal defects with submillimeter resolution. Material attenuation establishes the **maximum effective inspection depth**, while dispersion determines the ability to resolve adjacent defects. The coefficient [[alpha]] varies significantly with material heat treatment and crystallographic orientation, requiring specific calibration for each component batch.

In 7075-T6 aeronautical aluminum, typical [[alpha]] values are 1-5 Np/m at 5 MHz; in Ti-6Al-4V titanium, 10-50 Np/m at the same frequency. Anisotropy in forged components can cause up to 300% variations in [[alpha]] depending on inspection direction.

Dominant variable: attenuation coefficient [[alpha]], exhibiting strong dependence on microstructure, frequency, and temperature
Validity limit: thicknesses below 3×[[L_d]] with signal-to-noise ratio above 10 dB; not valid in regions with property gradients without complete directional analysis

## 2. Biomedical material characterization

Non-invasive evaluation of mechanical and structural properties of bones, cartilage, and soft tissues for medical diagnosis and therapeutic monitoring. Ultrasonic characterization enables osteoporosis detection, tissue degeneration assessment, and healing process monitoring with high sensitivity.

Ultrasonic wave propagation in complex biological media involves multiple attenuation mechanisms: **molecular absorption**, scattering by cellular structures, and dispersion at tissue interfaces. In cortical bone, attenuation (200-500 Np/m at 1 MHz) is dominated by porous microstructure and mineralization, while in soft tissues (5-20 Np/m) viscoelastic mechanisms and water content prevail.

In healthy cortical bone, [[L_d]] ≈ 2-5 mm; in osteoporotic bone it can increase to 10 mm. In muscular tissue, [[L_d]] ≈ 50-100 mm; in adipose tissue, [[L_d]] ≈ 150-200 mm. Frequency variation follows a power law with exponent [[n]] ≈ 1.1-1.3.

Dominant variable: attenuation length [[L_d]], directly correlating with bone mineral density and tissue elasticity
Validity limit: clinical diagnosis up to depths with signal-to-noise ratio > 6 dB; not valid in presence of intestinal gas or severe calcifications causing excessive scattering

## 3. Real-time structural integrity monitoring

Implementation of advanced structural health monitoring (SHM) systems in long-span bridges, skyscrapers, hydroelectric dams, and offshore platforms. Permanent ultrasonic transducer networks are installed for continuous structural integrity monitoring and early detection of progressive deterioration.

SHM systems use repetitive ultrasonic measurements to characterize the **temporal evolution of attenuation** at critical structural points. Progressive increase in the coefficient [[alpha]] indicates material degradation from corrosion, fatigue, or microcracking. Temporal dispersion allows identifying changes in elastic properties and detecting formation of new internal interfaces.

Increases of 10-20% in [[alpha]] above baseline values typically correlate with significant damage requiring intervention. System sensitivity allows detecting changes as small as 2-3% under controlled conditions.

Dominant variable: temporal variation of attenuation coefficient Δ[[alpha]]/Δt, as early indicator of structural damage
Validity limit: structures with permanent transducer access and compensable environmental conditions; not valid with highly variable geometry or excessive vibrations

## 4. Industrial food processing

Advanced quality control in the food industry using high-power, low-frequency ultrasound. Attenuation characterization enables textural property evaluation, contaminant detection, and real-time optimization of pasteurization and homogenization processes.

Industrial ultrasonic waves (20 kHz - 1 MHz) are applied for multiple processes: cavitation sterilization, emulsion homogenization, tissue tenderization, and non-destructive foreign body detection. Attenuation varies significantly with product composition: **fat content**, moisture, air presence, and cellular structure determine [[alpha]] values.

In aqueous liquids, typical [[L_db]] values are 1-10 dB/cm; in meat products, 15-30 dB/cm; in baked products, 25-50 dB/cm. Temperature dependence follows a thermal coefficient of -0.2 to -0.5%/°C depending on food type.

Dominant variable: loss in decibels [[L_db]] per unit thickness, correlating with food composition and texture
Validity limit: relatively homogeneous products with controlled temperatures between 4-80°C; not valid with high structural heterogeneity or excessive trapped bubbles

## 5. Geophysics and seismic exploration

Detailed subsurface characterization for petroleum exploration, geotechnics, and structural geological studies. Natural and induced seismic waves experience significant attenuation and dispersion when propagating through complex rock formations with different elastic properties and interstitial fluids.

Seismic attenuation, expressed through the quality factor Q (inversely proportional to [[alpha]]), allows inferring petrophysical rock properties, detecting presence of hydrocarbons, water, and gas, and characterizing subsurface stratigraphic structure. Seismic dispersion causes different components of [[f]] to travel at different velocities, affecting seismic image resolution and requiring corrections for precise interpretation.

In unconsolidated sediments, Q typically varies between 10-100, indicating high attenuation. In consolidated sandstones and limestones, Q reaches 100-500. In crystalline igneous rocks, Q can exceed 1000, indicating low attenuation and **high propagation quality**.

Dominant variable: quality factor Q, correlating with [[alpha]] through Q = πf/(αv), where [[f]] is frequency and v is propagation velocity
Validity limit: low-frequency seismic waves (1-100 Hz) with moderate dispersion and linear medium approximation; not valid near seismic sources where amplitudes exceed elastic regime
`;export{e as default};
