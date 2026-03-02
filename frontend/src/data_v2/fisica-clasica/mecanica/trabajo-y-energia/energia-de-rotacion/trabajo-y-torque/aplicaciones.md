# Aplicaciones técnicas

## 1. Motores eléctricos—diseño de potencia y selección

**Contexto**: Selección correcta de motor requiere conocimiento de torque **y** velocidad angular de la carga, no solo potencia nominal.

**Cálculo de ejemplo**:
Bomba centrífuga industrial requiere:
- Torque de arranque: $\tau_{start} = 500$ N·m
- Torque nominal (operación estable): $\tau_{nom} = 200$ N·m
- Velocidad nominal: $\omega = 300$ rad/s (~2865 rpm)
- Potencia nominal: $P = 200 \times 300 = 60$ kW

**Selección de motor**:
- Motor deben entregar $P \geq 60$ kW a 2865 rpm
- Torque instantaneo durante arranque >500 N·m (requiere motor sobre-dimensionado ~70 kW o arrancador suave)
- Curva característica $\tau(\omega)$ del motor debe "engranar" con curva de carga de bombear

**Decisión técnica**: 
- Motor de jaula de ardilla simple: funciona bien en velocidad constante pero torque arranque bajo
- Motor con rotor bobinado + reostato: mejor control de arranque, pero mantenimiento mayor
- Convertidor VFD (variador frecuencia): motor puede funcionar a velocidades variables, eficiencia optimizada ~85% vs. 60% en arranques directos

---

## 2. Sistemas de freno y embrague—absorción controlada de energía

**Contexto**: Frenos convierten energía rotacional en calor; embragues acoplan/desacoplan rotación entre ejes. Ambos requieren cálculo de trabajo/potencia disipada.

**Cálculo de freno de disco**:
- Volante motor de $I = 50$ kg·m² a $\omega_i = 100$ rad/s debe detenerse en 5 segundos
- Energía a disipar: $E_k = 0.5 \times 50 \times (100)^2 = 250$ kJ
- Potencia media: $P = 250,000 / 5 = 50$ kW

**Decisión de diseño**:
- Área de frenado mínima: $A = P / (p_{fricción} \times v_{tangencial})$ donde $p_{fricción} \approx 100$ kPa (max seguro)
- Temperatura disco: $\Delta T \propto$ energía disipada / (masa × capacidad térmica)
- Aumento ~250°C es típico en frenada de emergencia industrial
- Materiales: pastilla de fricción con coeficiente $\mu \approx 0.4$ incluso a alta temperatura

---

## 3. Turbomaquinaria—turbinas a gas, vapor, hidráulicas

**Contexto**: En turbinas, el fluido (gas o líquido) entra con velocidad y presión, impacta álabes rotores, entrega torque. Trabajo de torque se convierte en potencia eléctrica.

**Ejemplo: Turbina de vapor en central eléctrica**
- Vapor entra a 500°C, 10 MPa
- Potencia mecánica disponible: 100 MW
- Velocidad de rotación: 3000 rpm = 314 rad/s
- Torque promedio: $\tau = P / \omega = (100 \times 10^6) / 314 \approx 318,500$ N·m = 318.5 kN·m

**Trabajo en ciclo de operación**:
- En 1 segundo: 50 revoluciones → trabajo total $W = 100$ MJ/s = 100 MW ✓

**Decisión de diseño**:
- Álabes deben soportar fuerzas centrífugas enormes (tensión en raíz ~500 MPa)
- Material: superaleaciones de Ni (Inconel) resisten a 1000°C
- Eficiencia termodinámica: ~40% (energía térmica vapor → energía mecánica torque)
- Eficiencia mecánica: ~98% (pérdidas fricción cojinetes, vapor residual)

---

## 4. Herramientas rotativas industriales—taladros, sierras, rectificadoras

**Contexto**: Herramientas requieren torque específico para cortar/mecanizar; el trabajo realizado se disipa como calor, virutas, deformación.

**Ejemplo: Taladro de percusión**
- Torque de rotación: $\tau = 30$ N·m
- RPM nominal: 1500 rpm = 157 rad/s
- Potencia: $P = 30 \times 157 = 4716$ W ≈ 4.7 kW
- Distancia penetración en acero: ~50 mm = 50 vueltas
- Ángulo total: $\Delta\theta = 50 \times 2\pi = 314$ rad
- Trabajo de rotación: $W = 30 \times 314 = 9420$ J ≈ 9.4 kJ

**Control de potencia** en herramientas profesionales:
- Control electrónico de torque limita pico a valores seguros (evita "kickback" peligroso)
- Embrague de torque: cuando resistencia excede cierto nivel, motor se desacopla
- Limitador de velocidad: protege trabajo de aceleración descontrolada

---

## 5. Sistemas de control y robótica—servomotores y actuadores

**Contexto**: Robots industriales y brazos articulados requieren control preciso de torque en cada articulación (junta). Trabajo/potencia se calcula para cada grado de libertad.

**Ejemplo: Brazo robot de 6 ejes**
- Junta 1 (base): $\tau_1 = 500$ N·m, $\omega_1 = 10$ rad/s → $P_1 = 5$ kW
- Junta 2 (hombro): $\tau_2 = 300$ N·m, $\omega_2 = 8$ rad/s → $P_2 = 2.4$ kW
- Junta 3 (codo): $\tau_3 = 150$ N·m, $\omega_3 = 6$ rad/s → $P_3 = 0.9$ kW
- ...etc
- **Potencia total requerida**: ~15 kW pico durante movimiento combinado

**Decisión de diseño**:
- Servomotores BLDC (sin escobilhas) + reductores de engranajes planetarios
- Feedback de torque/posición vía sensores para control en lazo cerrado
- Sincronización de juntas: trabajo en una junta NO se debe transferir a otras (aislamiento mecánico con reductores retos)
- Inercia reflejada en motor: debe calcularse cuidadosamente para evitar oscilaciones (inestabilidad).

**Aplicación práctica**:
- Trabajo total para levantar pieza 10 kg desde altura 0 a 1.5 m (movimiento de 6 ejes):
	$$W_{total} = mgh + \text{pérdidas fricción/inercia} \approx 10 \times 10 \times 1.5 + 20\% \approx 180 \text{ J}$$
	(Pérdidas ~20% de trabajo mecánico ideal)
- En 2 segundos: potencia media = 90 W por ciclo (~50 ciclos/h → consumo taller ~4 kWh para 50 ciclos)

---

## Síntesis Integrada

Trabajo y torque son conceptos centrales en:
- **Selección de motores**: Potencia nominal + curva torque(velocidad)
- **Diseño de frenos**: Capacidad de absorber energía sin daño térmico
- **Turbinas/generadores**: Conversión de energía primaria (caloriférica, potencial gravitatoria) a energía mecánica rotacional
- **Herramientas/mecanizado**: Trabajo requerido para corte depende de material, velocidad angular, avance
- **Robótica**: Sincronización de juntas con control preciso de fuerzas/torques