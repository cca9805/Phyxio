# Ecuación de Navier-Stokes Intro — Aplicaciones

## 1. Diseño de redes de tuberías industriales

En instalaciones de agua potable, sistemas hidráulicos y plantas industriales, las tuberías deben dimensionarse con un equilibrio entre pérdida de presión admisible y coste de la instalación. La ley de Hagen-Poiseuille (derivada directamente de NS laminar) da la presión necesaria para mover un caudal determinado a través de una tubería de radio R, longitud L y viscosidad [[mu]]:

La **dependencia en R^4** implica que duplicar el radio reduce la presión necesaria en un factor de 16 para el mismo caudal. Esta sensibilidad extrema guía la elección de diámetros en sistemas de baja pérdida de carga.

Variable dominante: gradiente de presión -partial p/partial x

Límite de validez: [[Re]] < 2300 (flujo laminar); en fluido viscoso o caudales pequeños. Para agua en redes de distribución a alta velocidad ([[Re]] > 4000) se usa Darcy-Weisbach con el factor de Moody.

---

## 2. Microfluídica y dispositivos lab-on-chip

Los dispositivos de análisis bioquímico integrado (lab-on-chip) operan con canales de ancho w aprox 10–500\,mum. A esas escalas, [[Re]] ll 1 y Navier-Stokes se reduce a la ecuación de Stokes completamente lineal:

Esta linealidad permite diseñar mezcladores, separadores de células y sistemas de control de flujo con soluciones analíticas exactas de NS. El perfil parabólico de velocidad es fundamental para calcular el tiempo de residencia de partículas y la dispersión de solutos (dispersión de Taylor).

Variable dominante: viscosidad dinámica [[mu]] del fluido de transporte

Límite de validez: canal recto de sección uniforme, flujo plenamente desarrollado, fluido newtoniano. Los fluidos biológicos (sangre completa, mucosidades) pueden comportarse como no newtonianos a bajas velocidades de corte.

---

## 3. Lubricación en rodamientos y cojinetes hidrodinámicos

En un cojinete hidrodinámico, el lubricante que separa el eje del casquillo es una película delgada de aceite entre dos superficies con movimiento relativo. El balance de Navier-Stokes en esta película (hipótesis h ll R; ecuación de Reynolds de lubricación) produce la presión que soporta la carga axial:

El diseño del cojinete requiere calcular el mínimo espesor de película h_min (evitando contacto metal-metal) y la viscosidad mínima del aceite en las condiciones de operación. La **viscosidad** es la variable de control: aceites más viscosos soportan más carga, pero generan más calor por fricción interna.

Variable dominante: viscosidad dinámica [[mu]] del lubricante

Límite de validez: números de Reynolds de película Re_f = [[rho]] U h/[[mu]] < 1000; hipótesis de lubricación (película delgada, h ll dimensión lateral). Falla cuando el lubricante sufre cavitación o cuando la temperatura sube tanto que [[mu]] cae por debajo del mínimo requerido.

---

## 4. Biomecánica vascular y circulación sanguínea

La sangre fluye por las arterias y venas a través de las mismas ecuaciones de Navier-Stokes (con correcciones para no-newtonianidad a bajas tasas de corte). En la arteria coronaria en reposo, [[Re]] aprox 200–400 y el flujo es laminar pulsátil. En la aorta, [[Re]] aprox 3000–4000 y el flujo es intermitentemente turbulento.

La magnitud fisiológica clave es el **esfuerzo de corte en la pared** (wall shear stress, WSS):

Valores de WSS < 0.4 Pa en zonas de bifurcación arterial se asocian con mayor riesgo de aterosclerosis; valores > 40 Pa se asocian con daño endotelial. Las simulaciones NS de la geometría vascular real (obtenida por imagen médica) permiten identificar estas zonas de riesgo antes del evento clínico.

Variable dominante: esfuerzo de corte en pared asociado al intercambio de momento cerca de la pared arterial.

Límite de validez: la sangre puede aproximarse como newtoniana en tasas de corte altas; en tasas bajas conviene usar modelos no newtonianos como Carreau-Yasuda.

---

## 5. Flujo en filtros y medios porosos

En un medio poroso (filtro, suelo, membrana), el fluido se mueve por canales microscópicos a velocidades muy bajas. La ecuación de Darcy (derivada de NS para Re_poro ll 1) establece que la velocidad de filtración es proporcional al gradiente de presión:

donde k es la permeabilidad del medio (m²). Navier-Stokes en escala de poro explica la **resistencia hidráulica** del filtro, el tiempo de ciclo de filtración y el efecto del taponamiento (fouling): cuando los poros se reducen, k disminuye y la presión requerida para el mismo caudal aumenta según NS.

Variable dominante: viscosidad [[mu]] del fluido filtrado (controla la pérdida de presión por unidad de espesor del filtro)

Límite de validez: Re_poro = [[rho]] u d_p / [[mu]] < 10 (flujo de Darcy lineal); para Re_poro > 10 se usa la correción de Forchheimer con término inercial betarho u^2.

En diseno clinico e industrial, esta aplicacion se usa para decidir diametros, rugosidad y potencia de bombeo con margen de seguridad. Tambien permite comparar escenarios operativos antes de construir prototipos, reduciendo costos de prueba y fallos por subestimacion de perdidas viscosas. Ademas, estas aplicaciones facilitan la trazabilidad tecnica del diseno y la comunicacion entre equipos de operacion y mantenimiento.