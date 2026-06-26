# Applications

## 1. Meteorology and weather forecasting

Atmospheric temperature is the most fundamental meteorological quantity and the one with the greatest impact on daily life, agriculture, and energy. Weather services worldwide measure [[T_C]] at 2 metres above the ground in a standard shelter (Stevenson screen), following World Meteorological Organization standards. Numerical weather prediction models calculate temperature internally in kelvin within general circulation models, which use ideal gas thermodynamics and atmospheric radiation equations requiring [[T_K]].

For public communication, data are converted to the local scale: Celsius in Europe, Latin America, Asia, and Oceania; Fahrenheit in the US. Meteorological warning thresholds (heat waves, frosts) are defined in [[T_C]] in most of the world and in [[T_F]] in the US, with [[DeltaT]] values determining the intensity of the event relative to the normal climate of the area.

Aviation temperature forecasting uses both Celsius and Fahrenheit: METAR (aeronautical meteorological) reports use Celsius worldwide, but US ground personnel work in Fahrenheit, so scale conversion is a daily operation at airports with international traffic.

Dominant variable: [[T_C]] is the standard working scale in international meteorology; [[DeltaT]] quantifies the intensity of thermal events relative to climatic normals.
Validity limit: the homogeneous temperature model at the measurement point is valid for spatial scales larger than the turbulent mixing length (~10 m). At smaller scales (urban microclimate, heat islands), [[T_C]] can vary by several degrees within metres.

## 2. Medicine and body temperature control

Normal human body temperature is approximately 37 °C (98.6 °F, 310 K). Clinical measurement of [[T_C]] is one of the primary vital signs: a temperature above 38 °C indicates fever; above 40 °C indicates high fever with neurological risk; below 35 °C indicates hypothermia. The required precision is ±0.1 °C, achievable with calibrated clinical thermometers.

In intensive care units, patients with induced therapeutic hypothermia (used to protect the brain after cardiac arrest) are maintained at [[T_C]] between 32 and 34 °C (305–307 K). Precise control of [[DeltaT]] during cooling (normally 1 °C/hour) and rewarming is critical to avoid cardiovascular complications.

In cryosurgery, tissues are destroyed at temperatures of –20 °C to –40 °C (253–233 K). Liquid nitrogen, at 77 K (–196 °C), is the most widely used cryogenic agent. Unit conversion is a constant operation in clinical settings because equipment displays in Celsius but cryoprobe manufacturers specify temperatures in kelvin.

Dominant variable: [[T_C]] with decimal-degree precision is the central clinical quantity; [[DeltaT]] controls the rate of therapeutic heating or cooling processes.
Validity limit: temperature measured at one body location is representative of the core state only when there is local thermal equilibrium; in cases of shock or severe hypothermia, gradients of several degrees between the surface and the core may exist.

## 3. Food industry and cold chain

Preservation of perishable food requires strict control of [[T_C]] throughout the entire chain: from raw material to consumer. The critical ranges are regulated by health standards in Celsius: meat must be kept below 4 °C, frozen goods below –18 °C, and safe cooking requires exceeding 70 °C at the centre of the food for at least two minutes.

Temperature logs in cold stores and refrigerated transport use electronic sensors that record [[T_C]] every 15 to 30 minutes. Cold chain breakage is defined as any positive [[DeltaT]] that brings the product above the permitted threshold for longer than a stipulated time. This thermal-temporal criterion integrates both [[T_C]] and [[DeltaT]] to determine product suitability.

Food exporters to the US must comply with regulations with thresholds in [[T_F]] (FDA), while their internal inspections and European regulations use Celsius; scale conversion is a constant operational task for exporting companies.

Dominant variable: [[T_C]] at critical control points (HACCP) determines the microbiological safety of food; [[DeltaT]] of cold chain breakage is the temperature incident indicator.
Validity limit: safe temperature thresholds are statistical (bacterial load reduction), not absolute physical thresholds; the validity of the model depends on the initial microbial load of the product.

## 4. Semiconductor engineering and integrated circuits

Integrated circuits generate heat during operation and their performance and reliability depend critically on operating [[T_K]]. Component datasheets specify the operating temperature range in Celsius (typically –40 °C to 85 °C for industrial, or –55 °C to 125 °C for military/space), but derating models (performance reduction with temperature) and Arrhenius equations for reliability use [[T_K]].

The Arrhenius equation for mean time between failures of a component uses [[T_K]] in the denominator of the exponent. Confusing [[T_C]] with [[T_K]] in this equation completely shifts the reliability curve and can lead to designing systems that fail decades earlier than calculated.

Modern processors integrate temperature sensors that measure [[T_C]] every millisecond to trigger thermal throttling (frequency reduction) before the chip reaches maximum operating temperature. [[DeltaT]] between the current value and the safety threshold determines the response of the thermal management system.

Dominant variable: [[T_K]] in reliability models and [[T_C]] in operating specifications; [[DeltaT]] between ambient temperature and chip junction temperature determines the required heat dissipation.
Validity limit: Arrhenius models for semiconductors are valid in the range where the dominant degradation mechanism is thermal activation; at extreme temperatures other mechanisms (electromigration, radiation) may dominate and do not follow the same law.

## 5. Oceanography and climate change

Sea surface temperature (SST) is one of the key variables of the climate system. It is measured in Celsius from buoys, ships, and satellites, with a precision of ±0.1 °C. SST anomalies (difference from the historical mean of the 1981–2010 period) are [[DeltaT]] relative to the reference climatology and are the standard way to communicate ocean warming.

Global climate models calculate internally in kelvin and use [[T_K]] in atmospheric radiation equations and evaporation parameterisations. Global temperature projections for 2100 are expressed as [[DeltaT]] relative to the pre-industrial period, with values of +1.5 °C, +2 °C, or +4 °C depending on the emissions scenario. This [[DeltaT]] is numerically identical in Celsius and kelvin, which facilitates scientific communication without scale ambiguity.

The El Niño phenomenon is characterised by a positive [[T_C]] anomaly in the central equatorial Pacific of more than 0.5 °C relative to the mean for at least five consecutive quarters. This threshold operates in Celsius because it is a [[DeltaT]] relative to climatology, not an absolute temperature.

Dominant variable: [[DeltaT]] as an anomaly relative to the reference climatology is the standard quantity for communicating climate change; [[T_K]] is the internal calculation scale of general circulation models.
Validity limit: SST anomalies are representative of the surface ocean layer (~10 m depth); changes in deep ocean temperature follow centennial timescales and are not directly reflected in SST at decadal scales.
