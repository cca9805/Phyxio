# Tornillo

## Idea clave
Un tornillo es un plano inclinado enrollado sobre un cilindro. Convierte giro en avance axial y permite multiplicar fuerza.

## 1- Que estudia este tema y por que es util
Este tema explica como una accion de giro relativamente pequena puede generar una fuerza axial grande, algo esencial en prensado, fijacion y elevacion mecanica.

## 2- Mecanismo fisico real
En una vuelta completa:
- recorres una circunferencia \(2\pi r\) con la mano o herramienta,
- la carga avanza solo una distancia axial igual al paso \(p\).

Esa gran diferencia de recorridos es la base de la ventaja mecanica del tornillo.

## 3- Magnitudes esenciales
- \(R\): carga axial o resistencia (N).
- \(F\): fuerza tangencial aplicada en el mango (N).
- \(r\): radio efectivo de aplicacion (m).
- \(p\): paso de rosca o avance por vuelta (m/vuelta).
- \(\eta\): rendimiento (0 a 1).
- \(VM\): ventaja mecanica.
- \(\tau\): torque aplicado (N*m).

## 4- Formulas clave y significado
Ventaja mecanica ideal:

$$
VM_{ideal}=\frac{2\pi r}{p}
$$

Fuerza ideal requerida:

$$
F=\frac{R\,p}{2\pi r}
$$

Fuerza real con rendimiento:

$$
F=\frac{R\,p}{2\pi r\,\eta}
$$

Torque aplicado:

$$
\tau=F\,r
$$

Interpretacion:
- paso menor \(\Rightarrow\) mayor ventaja, pero mas vueltas para el mismo avance.

## 5- Dominio de validez
Modelo basico valido cuando:
- contacto de rosca estable,
- velocidad baja,
- geometria regular.

Necesita correccion cuando:
- hay desgaste fuerte,
- lubricacion variable,
- cargas dinamicas o impacto.

## 6- Metodo de resolucion
1. Identifica si piden fuerza, torque o ventaja.
2. Verifica unidades de paso y radio en metros.
3. Usa modelo ideal o real segun datos de \(\eta\).
4. Despeja simbolico.
5. Sustituye y revisa orden de magnitud.
6. Interpreta compromiso fuerza-vueltas.

## 7- Errores tipicos
- usar diametro en vez de radio.
- confundir paso con longitud total de rosca.
- olvidar factor \(2\pi\).
- ignorar rendimiento en sistemas con friccion significativa.
- no distinguir fuerza tangencial de carga axial.

## 8- Ejemplo completo guiado
Datos: \(R=10000\ \text{N}\), \(r=0.15\ \text{m}\), \(p=0.006\ \text{m}\), \(\eta=0.80\).

Paso 1. Fuerza ideal:

$$
F_{ideal}=\frac{R\,p}{2\pi r}
=\frac{10000\cdot 0.006}{2\pi\cdot 0.15}
\approx 63.7\ \text{N}
$$

Paso 2. Fuerza real:

$$
F=\frac{F_{ideal}}{\eta}
\approx \frac{63.7}{0.80}
\approx 79.6\ \text{N}
$$

Paso 3. Torque:

$$
\tau=F\,r\approx 79.6\cdot 0.15\approx 11.9\ \text{N*m}
$$

## 9- Aplicaciones reales
- Gatos mecanicos.
- Tornillos de banco y prensas.
- Husillos de ajuste fino.
- Sistemas de fijacion de precision.

## 10- Sintesis final
Dominar el tornillo es entender como la geometria helicoidal intercambia recorrido por fuerza. Ese principio permite controlar grandes cargas con esfuerzos moderados.
