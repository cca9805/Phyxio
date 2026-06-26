const e=`# History and Evolution of the Concept

## Historical problem

Throughout most of the 20th century, domestic electrical installations were maintained with an **exclusively corrective approach**: repairs were only made after a manifest failure occurred. This reactive paradigm dominated both private homes and residential buildings, where technical intervention was requested only when there was already evident failure: power outage, permanent protection tripping, or in the worst cases, fire.

The cost of this approach was high: urgent repairs, replacement of damaged wiring, and above all, safety risks that could have been avoided. Social perception of electrical risk was divided between irrational fear ("electricity is dangerous") and excessive unconcern ("if it works, there's no problem").

## Prior conceptual difficulty

The fundamental obstacle was that **it was ignored that many serious failures have detectable previous stages**. Before a connection point produces a fire or power cutoff, it usually goes through intermediate phases:

- Anomalous heating perceptible by touch
- Slight smell of hot plastic
- Sporadic circuit breaker tripping under certain conditions
- Mechanical looseness in the connector
- Discoloration of the housing

These early signals were systematically ignored or normalized ("it has always heated up a bit", "sometimes it trips, but works again"), allowing damage to progress until catastrophic failure was reached.

## What changed

From the 1970s-1980s onwards, the electrical industry began formally adopting **preventive maintenance**, a concept transferred from heavy industry and industrial installations. The key elements of this change were:

- **Systematic incident recording**: Document not only failures, but "near-failures" and anomalies
- **Scheduled periodic inspections**: Regular reviews without waiting for severe symptoms
- **Condition indicators**: Measure temperature, insulation resistance, connection looseness
- **Intervention limits**: Establish numerical thresholds to decide when to act

The massive adoption of these practices drastically improved safety and service continuity, demonstrating that most serious incidents are predictable and preventable.

## Impact on physics

The deepest change was the transformation of the risk concept:

| Era | Risk Concept | Approach | Methodology |
|:---|:---|:---|:---|
| **Pre-1970** | Random and unpredictable event | Corrective | Repair after failure |
| **1970-2000** | Predictable wear by time | Preventive by scheduling | Fixed periodic reviews |
| **2000-present** | Measurable process with physical variables | Predictive by condition | Technical indicator monitoring |

Risk went from being seen as **luck** ("I had bad luck with the installation") to being seen as **physical process** where observable magnitudes —temperature, contact resistance, exposure time— determine evolution towards failure.

### Key scientific contributions

- **Thermal Effect (1841)**: James Prescott Joule establishes the quantitative relationship between current, resistance, and dissipated heat, physical foundation of all thermal analysis in electrical connections.

- **Failure Analysis (20th century)**: The aeronautical and nuclear industries develop systematic Failure Mode and Effects Analysis (FMEA) methodologies, later adapted to electrical installations.

- **Infrared Thermography (since 1960)**: The availability of accessible thermal cameras allows detecting hot spots non-invasively, revolutionizing predictive maintenance.

- **Electrical Asset Management (ISO 55000, 2014)**: International standardization including condition-based risk assessment as a key element of installation management.

## Connection with modern physics

Basic sensorization and digital tracking today allow closing the complete risk management cycle:

1. **Detection**: Temperature sensors, tripping records, real-time consumption meters
2. **Analysis**: Software that automatically calculates estimated [[P_joule]] and accumulates [[E_joule]] history
3. **Intervention**: Automatic alerts when risk thresholds are exceeded
4. **Verification**: Confirmation of improvement through new measurements after intervention

"Smart homes" increasingly include temperature monitoring at critical points and electrical risk alerts based on the principles of this leaf, democratizing access to predictive maintenance that was previously only available to industrial installations.

### Historical lesson for the student

The history of electrical risks teaches that **the majority of serious accidents are preventable** if early signals are recognized and action is taken before the degradation process reaches its end. The technical evaluation method using [[P_joule]] is not an unnecessary complication: it is the practical application of a century of learning about how to prevent electrical fire through systematic observation of physical magnitudes.
`;export{e as default};
