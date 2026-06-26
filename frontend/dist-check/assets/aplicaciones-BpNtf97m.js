const e=`# Aplicaciones\r
\r
## 1. Diseno de bandas inclinadas en centros logisticos\r
\r
En centros de clasificacion, las bandas inclinadas trasladan paquetes entre niveles. El equipo de diseno debe decidir inclinacion [[theta]], capacidad de traccion y condiciones de contacto para evitar retrocesos. El DCL permite separar el efecto de [[Ppar]] que empuja hacia abajo del plano, la reaccion normal [[N]] y la contribucion de friccion ([[fs]] o [[fk]]), ademas de las fuerzas de arrastre que se modelan como [[T]] o fuerza equivalente sobre la carga.\r
\r
Cuando la carga media aumenta, [[m]] y [[P]] aumentan, por lo que tambien cambia el balance por eje. Sin DCL, la reaccion tipica es aumentar potencia del motor. Con DCL, primero se verifica si el cuello de botella es realmente potencia o perdida de margen por contacto.\r
\r
Variable dominante: [[Ppar]]\r
Límite de validez: si la carga cambia de geometria durante el traslado y altera el punto de apoyo de forma severa, el modelo simple de bloque rigido puede quedarse corto.\r
\r
## 2. Seguridad en rampas de carga de camiones\r
\r
En operaciones de carga manual, un operario mueve bultos por una rampa. El DCL se usa para estimar esfuerzo seguro y riesgo de deslizamiento. El peso [[P]] se descompone en [[Ppar]] y [[Pperp]], y con ello se estima la demanda tangencial que debe compensarse con friccion y fuerza aplicada.\r
\r
El valor practico es inmediato: si el balance tangencial exige superar de manera frecuente la cota estatica, el protocolo debe cambiar. Puede reducirse [[theta]], modificarse la superficie para elevar [[mu_s]], o ajustarse procedimiento para repartir carga.\r
\r
Este enfoque evita decisiones intuitivas peligrosas, como culpar al operario sin analizar la fisica del contacto. Tambien permite documentar por que una rampa aparentemente funcional en turno seco se vuelve critica en turno humedo.\r
\r
Variable dominante: [[mu_s]]\r
Límite de validez: en presencia de impactos o tirones bruscos, se requiere modelo transitorio porque la aproximacion cuasiestatica subestima picos de fuerza.\r
\r
## 3. Diagnostico de deslizamiento en cintas de manufactura\r
\r
En lineas de manufactura, piezas avanzan sobre cintas con cambios de velocidad. Cuando aparecen eventos de deslizamiento inesperado, el DCL ayuda a distinguir si el problema es de mando (fuerza de arrastre insuficiente) o de interfaz (caida de [[mu_k]] y [[mu_s]] por contaminacion).\r
\r
El analisis por ejes evita errores de lectura. A veces el indicador global de velocidad sugiere falla mecanica, pero el balance muestra que [[Fy]] sigue estable y que la variacion principal esta en [[Fx]] por perdida de friccion util.\r
\r
En auditoria, esta aplicacion mejora trazabilidad: cada incidente se registra con diagrama, supuestos y variables criticas. Esto reduce diagnosticos por ensayo y error.\r
\r
Variable dominante: [[Fx]]\r
Límite de validez: si existe vibracion estructural intensa acoplada al sistema de transporte, se necesita incluir dinamica adicional y no solo balance estatico por ejes.\r
\r
## 4. Verificacion de tensiones en sistemas de poleas de izado ligero\r
\r
En izado ligero, la tension [[T]] de cables determina si el sistema puede mover una carga sin generar oscilacion peligrosa. Un DCL por nodo o por cuerpo permite identificar componente vertical de tension, carga normal sobre guias y demanda de aceleracion [[a]].\r
\r
La ventaja del DCL es que unifica comunicacion entre mantenimiento y operaciones. Mantenimiento valida integridad mecanica; operaciones valida perfiles de arranque. Ambos equipos usan el mismo mapa de fuerzas para discutir causas.\r
\r
Si la aceleracion objetivo exige [[Fx]] o [[Fy]] incompatibles con limites operativos, se ajusta perfil de arranque antes de exigir mas al hardware. Eso previene desgaste prematuro.\r
\r
Variable dominante: [[T]]\r
Límite de validez: en presencia de elasticidad significativa de cable y oscilacion tridimensional, el modelo plano simplificado deja de capturar la dinamica principal.\r
\r
## 5. Rehabilitacion y biomecanica de empuje asistido\r
\r
En dispositivos de rehabilitacion, pacientes empujan plataformas inclinadas con resistencia regulable. El DCL traduce la tarea en balance fisico: componente paralela del peso, reaccion normal, friccion de contacto y fuerza aplicada por el usuario.\r
\r
Esto permite configurar ejercicios por regimen, no solo por carga nominal. En fase inicial se busca adherencia estable con [[fs]] dentro de margen. En fase avanzada se permite mayor demanda tangencial cuidando que el sistema no entre en deslizamiento no controlado.\r
\r
El enfoque mejora seguridad y progresion terapeutica porque cada ajuste se justifica por variables fisicas observables, no por criterio subjetivo.\r
\r
Variable dominante: [[fs]]\r
Límite de validez: cuando el gesto del paciente incluye aceleraciones bruscas fuera del plano de trabajo, el modelo bidimensional debe ampliarse.\r
\r
## Sintesis operativa\r
\r
Estas aplicaciones muestran una idea comun: el DCL no es una formalidad escolar, sino una herramienta de decision. Separar fuerzas por agente, eje y regimen reduce errores de interpretacion y acelera acciones correctivas.\r
\r
En terminos de gestion, usar DCL como lenguaje comun permite que diferentes areas comparen el mismo problema con el mismo marco fisico: diseno discute [[theta]], operacion discute [[T]], mantenimiento discute [[mu_s]] y [[mu_k]], seguridad discute margenes sobre [[N]] y [[Fy]].\r
\r
Tambien mejora el aprendizaje organizacional: cada evento deja una huella de diagrama, supuestos y resultado. Con el tiempo, esa base de casos evita repetir fallas y eleva calidad de respuesta tecnica.\r
\r
Como regla transferible, antes de ajustar cualquier setpoint conviene responder tres preguntas: que fuerzas existen, en que eje dominan y en que regimen de contacto opera el sistema. Esa secuencia simple evita una fraccion grande de decisiones ciegas en mecanica aplicada.\r
`;export{e as default};
