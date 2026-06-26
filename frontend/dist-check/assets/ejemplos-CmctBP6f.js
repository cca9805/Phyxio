const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Una onda electromagnetica plana incide perpendicularmente sobre una lamina absorbente de laboratorio. Se mide un campo electrico eficaz de 30 V/m en la zona de incidencia. La superficie iluminada tiene un area efectiva de 0.020 m2. Suponiendo propagacion en el vacio, estima la densidad media de energia, la intensidad media, la densidad de momento, la presion de radiacion y la potencia total recibida.\r
\r
El objetivo no es solo sustituir datos: hay que interpretar como una misma onda pasa de campo a energia, de energia a flujo, y de flujo a accion mecanica sobre la lamina.\r
\r
## Datos\r
\r
- Campo electrico eficaz: 30 V/m.\r
- Permitividad del vacio: 8.854e-12 F/m.\r
- Velocidad de la luz: 2.998e8 m/s.\r
- Area efectiva iluminada: 0.020 m2.\r
- Superficie: absorbente ideal con incidencia normal.\r
\r
## Definición del sistema\r
\r
El sistema es el frente de onda que atraviesa la region de la lamina. Se estudia una porcion local de la onda y despues se escala la lectura local al area [[A]]. La onda se considera plana, por lo que [[S_med]] es uniforme sobre toda la zona iluminada.\r
\r
La lamina no se modela como fuente ni como cavidad. Solo actua como superficie absorbente que recibe energia y momento. Por eso [[p_rad]] se interpreta como presion de radiacion absorbida, no como caso reflectante.\r
\r
## Modelo físico\r
\r
Usamos el modelo de onda plana en el vacio. El campo [[E0]] determina [[u_EM]], la propagacion con [[c]] determina [[S_med]], y el mismo flujo permite leer [[g_EM]], [[p_rad]] y [[P_rad]]. Tambien puede estimarse [[B0]] para comprobar el acoplamiento entre campos.\r
\r
El modelo es local y medio: no sigue la oscilacion instantanea del campo, sino su valor eficaz. Eso es adecuado porque el enunciado pide energia media, intensidad media y presion media.\r
\r
## Justificación del modelo\r
\r
El modelo vale porque la superficie es pequeña y recibe una onda descrita como plana, de modo que la intensidad no cambia de forma apreciable dentro de [[A]]. La incidencia normal permite asociar el flujo de energia al empuje normal sobre la lamina. Como la superficie se declara absorbente, no se duplica la presion por reflexion.\r
\r
Dejaria de valer si el haz estuviera enfocado en una zona comparable al tamaño de la lamina, si la superficie reflejara una parte importante de la radiacion, si el material se calentara hasta cambiar su absorcion o si la medicion de [[E0]] no representara un promedio estable.\r
\r
## Resolución simbólica\r
\r
Primero se comprueba el acoplamiento de campos para obtener [[B0]]:\r
\r
{{f:relacion_campos_rms}}\r
\r
Despues se convierte el campo eficaz [[E0]] en densidad de energia [[u_EM]]:\r
\r
{{f:densidad_energia_rms}}\r
\r
La energia por volumen avanza con [[c]] y produce la intensidad media [[S_med]]:\r
\r
{{f:intensidad_media_onda}}\r
\r
La densidad de momento [[g_EM]] se obtiene a partir de la energia volumetrica:\r
\r
{{f:densidad_momento_onda}}\r
\r
La presion absorbida [[p_rad]] se lee desde la intensidad:\r
\r
{{f:presion_radiacion_absorbente}}\r
\r
Finalmente, la potencia total recibida [[P_rad]] requiere el area efectiva [[A]]:\r
\r
{{f:potencia_incidente_area}}\r
\r
## Sustitución numérica\r
\r
Para [[B0]], dividir 30 V/m entre 2.998e8 m/s da aproximadamente 1.00e-7 T. Por tanto [[B0]] queda en el orden de decimas de microtesla, coherente con una onda de campo electrico moderado.\r
\r
Para [[u_EM]], multiplicar 8.854e-12 F/m por el cuadrado de 30 V/m da aproximadamente 7.97e-9 J/m3. Esa densidad es pequeña por volumen, pero no nula: el campo contiene energia electromagnetica distribuida.\r
\r
Para [[S_med]], multiplicar 7.97e-9 J/m3 por 2.998e8 m/s da aproximadamente 2.39 W/m2. Para [[g_EM]], dividir 7.97e-9 J/m3 entre 2.998e8 m/s da aproximadamente 2.66e-17 N s/m3.\r
\r
Para [[p_rad]], dividir 2.39 W/m2 entre 2.998e8 m/s da aproximadamente 7.97e-9 Pa. Para [[P_rad]], multiplicar 2.39 W/m2 por 0.020 m2 da aproximadamente 0.0478 W.\r
\r
## Validación dimensional\r
\r
- Campo magnetico: V/m dividido por m/s produce tesla mediante las unidades electromagneticas SI.\r
- Densidad de energia: F/m combinado con el cuadrado de V/m produce J/m3, dimension \`[M L⁻¹ T⁻²]\`.\r
- Intensidad: J/m3 multiplicado por m/s produce W/m2, dimension \`[M T⁻³]\`.\r
- Densidad de momento: J/m3 dividido por m/s produce N s/m3, dimension \`[M L⁻² T⁻¹]\`.\r
- Presion: W/m2 dividido por m/s produce Pa, dimension \`[M L⁻¹ T⁻²]\`.\r
- Potencia: W/m2 multiplicado por m2 produce W, dimension \`[M L² T⁻³]\`.\r
\r
## Interpretación física\r
\r
El resultado muestra que un campo eficaz de 30 V/m transporta una intensidad moderada de unos pocos W/m2. La densidad [[u_EM]] es muy pequeña porque el vacio almacena poca energia por volumen para campos de esa escala, pero la velocidad [[c]] convierte esa energia distribuida en un flujo apreciable. Esta es la razon fisica de que una onda pueda transferir potencia aunque la energia contenida en un metro cubico parezca reducida.\r
\r
La presion [[p_rad]] es extremadamente pequeña frente a presiones mecanicas ordinarias. Eso no significa que la radiacion no tenga momento; significa que el momento por area y tiempo es pequeño para esta intensidad. Si [[E0]] se duplicara, [[u_EM]] y [[S_med]] crecerian de forma fuerte porque dependen del cuadrado del campo eficaz, y tambien crecerian [[p_rad]] y [[P_rad]].\r
\r
La potencia [[P_rad]] depende de la lamina, no solo de la onda. Manteniendo la misma [[S_med]], una lamina diez veces mayor recibiria diez veces mas potencia total, pero la presion local seria la misma. Esta separacion entre efecto local y captura total es el criterio fisico principal del leaf.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un sensor optico recibe una radiacion casi uniforme con intensidad media de 500 W/m2 sobre una ventana absorbente de 4.0 cm2. El ingeniero quiere saber si la presion de radiacion puede deformar mecanicamente la ventana y cuanta potencia entra en el sensor.\r
\r
La situacion es realista para instrumentacion sensible: la energia puede ser tecnicamente relevante aunque el empuje sea diminuto. Se supone incidencia normal y absorcion dominante.\r
\r
## Estimación física\r
\r
El area efectiva de 4.0 cm2 corresponde a 4.0e-4 m2. Multiplicar 500 W/m2 por esa area da 0.20 W, asi que [[P_rad]] esta en la escala de decimas de vatio. Es una potencia clara para un sensor pequeño y puede importar termicamente.\r
\r
Para la presion, dividir 500 W/m2 por [[c]] da aproximadamente 1.7e-6 Pa. Esta escala es millones de veces menor que una presion atmosferica ordinaria. Por tanto [[p_rad]] no sera el mecanismo mecanico dominante salvo que el sensor sea extremadamente ligero o que la fuerza se integre durante mucho tiempo.\r
\r
La densidad de energia asociada se obtiene dividiendo la intensidad por [[c]], lo que da una escala de 1.7e-6 J/m3. La lectura fisica es que el haz entrega energia continuamente, no que almacene mucha energia en cada volumen.\r
\r
## Interpretación\r
\r
El diagnostico distingue tres decisiones de diseño. Para calentamiento y presupuesto energetico importa [[P_rad]], porque el dispositivo recibe una potencia total. Para deformacion mecanica importa [[p_rad]], porque la presion es la fuerza por area. Para entender la onda como objeto fisico importa [[u_EM]], porque muestra la energia contenida localmente.\r
\r
Si el sensor duplicara su area sin cambiar la intensidad, [[P_rad]] se duplicaria pero [[p_rad]] no cambiaria. Si en cambio se duplicara [[S_med]], subirian tanto la potencia como la presion. Esta diferencia evita sobredimensionar soportes mecanicos cuando el verdadero limite es termico, o ignorar empuje de radiacion en sistemas ultraligeros.\r
\r
`;export{e as default};
