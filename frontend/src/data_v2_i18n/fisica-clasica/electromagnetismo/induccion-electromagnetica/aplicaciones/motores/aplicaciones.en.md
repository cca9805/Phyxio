# Applications

## 1. Traction motor in electric vehicles

In an electric vehicle, the motor directly converts battery energy into torque on the wheels. The absence of a mechanical gearbox is possible because an electric motor's torque is maximum from rest, unlike an internal combustion engine that needs rpm to produce useful power. The motor operates with very high armature currents during acceleration from zero, where back-EMF is small and the current demand on the battery pack is maximum. At cruising speed, back-EMF accounts for most of the DC bus voltage and current drops to moderate values.

The dominant simplifying hypothesis in traction analysis is that the magnetic field is constant and uniform in the air gap throughout the operating cycle, which allows the linear current-torque model to be used. The variable that the control system regulates at every instant is armature current, because controlling current is equivalent to controlling torque and, therefore, vehicle acceleration.

Dominant variable: armature current governs instantaneous torque and, with it, vehicle acceleration.
Validity limit: the linear current-torque model loses accuracy when current exceeds the value that saturates the magnetic core, typically twice the nominal current, beyond which torque grows more slowly than current.

## 2. Hydraulic pump motor in industrial installations

Centrifugal pumps in water supply, HVAC and process industry installations are driven almost universally by electric motors. In this context, the pump's resistive torque grows with the square of rotational speed, while the motor's torque is practically constant at constant current. The stable operating point is established where both curves intersect. Reducing pump speed by half using a variable-frequency drive reduces resistive torque to one quarter and consumed power to one eighth: energy savings are quadratic with respect to speed reduction.

Analysis of this system begins with the mechanical power formula: the power delivered to the pump shaft is the product of torque and angular speed. The relevant hypothesis is that pump mechanical losses are proportional to the square of speed, which makes variable-speed drives the most effective energy-saving measure in variable-flow pumps.

Dominant variable: angular speed determines the operating point and the power consumed by the pump.
Validity limit: the quadratic pump torque model ceases to be valid if cavitation occurs or if flow drops below the pump's minimum hydraulic value, conditions not covered by the ideal motor model.

## 3. Servo motor in robotics and position control

In robotic arms and CNC machine axes, the motor operates as a servo motor: its speed and angular position are controlled with millimetric precision through electronic feedback loops. The torque required for smooth, precise movement at low speed demands that the motor generates sufficient [[tau_m]] even when [[omega]] is small and back-EMF is practically zero. In those conditions the full supply voltage is available to force armature current and torque response is instantaneous.

The critical quantity in the servo motor is the torque constant, which groups the factors [[numero_de_conductores_activos]], [[longitud_activa_del_conductor]], [[campo_magnetico_del_estator]] and [[r_a]]. A high torque constant allows the desired torque to be obtained with little current, reducing winding heating and improving precision. That is why modern servo motors use rare-earth permanent magnets, which generate fields [[campo_magnetico_del_estator]] of up to 1.2 T in a compact volume.

Dominant variable: instantaneous torque, which depends linearly on armature current, is the variable the controller regulates to produce the desired motion.
Validity limit: at very low speeds, shaft static friction can exceed the generated torque and cause jerky movement. The ideal model does not include static friction and underestimates the minimum torque needed to initiate motion.

## 4. Starter motor for internal combustion engines

The starter motor of an internal combustion car is a high-power DC motor that operates for only a few seconds. It must generate enough torque to overcome the compression resistance of the combustion engine, which can require several tens of newton-metres depending on the displacement. Under these conditions, the starter motor operates at very low speed or even standstill during the first instants, with practically zero back-EMF and maximum armature current.

The vehicle battery must supply currents of 150 A to 400 A during starting, which imposes severe requirements on the battery's internal resistance and wiring gauge. Circuit analysis during starting is based on the zero back-EMF condition: current equals battery voltage divided by total circuit resistance (winding plus cables). Starting torque is directly proportional to that current and to the stator field.

Dominant variable: maximum armature current at start-up determines the torque available to overcome combustion engine compression.
Validity limit: the model is valid for the initial instants of starting. Once the combustion engine passes the first compression stroke and begins to rotate, the starter motor speed rises and back-EMF limits current: the static model is no longer applicable.

## 5. Motor in hard drives and precision actuators

The motors in mechanical hard drives and precision optical actuators operate at the opposite end of the spectrum: very high speeds (several thousand rpm), low currents and small torque. In these systems back-EMF accounts for practically all the supply voltage and steady-state current is minimal. Mechanical power is modest in absolute value (tenths of a watt) but efficiency must be maximum to minimise heating in a confined space where thermal dissipation is difficult.

The design of these motors maximises the product [[numero_de_conductores_activos]] times [[longitud_activa_del_conductor]] times [[campo_magnetico_del_estator]] times [[r_a]] to obtain high back-EMF at low currents, reducing Joule losses. Efficiency analysis is central: high [[eta]] reduces generated heat and prolongs system life, which in a hard drive may operate uninterrupted for years.

Dominant variable: steady-state angular speed determines back-EMF and, with it, residual current and Joule losses that limit actuator lifetime.
Validity limit: at speeds above the design value, back-EMF can exceed the available supply voltage, causing current to reverse and the motor to operate as a regenerative brake, an unwanted regime in these devices.