# Ejemplo tipo examen


## Enunciado

Una onda electromagnetica plana incide perpendicularmente sobre una lamina absorbente de laboratorio. Se mide un campo electrico eficaz de 30 V/m en la zona de incidencia. La superficie iluminada tiene un area efectiva de 0.020 m2. Suponiendo propagacion en el vacio, estima la densidad media de energia, la intensidad media, la densidad de momento, la presion de radiacion y la potencia total recibida.

El objetivo no es solo sustituir datos: hay que interpretar como una misma onda pasa de campo a energia, de energia a flujo, y de flujo a accion mecanica sobre la lamina.

## Datos

- Campo electrico eficaz: 30 V/m.
- Permitividad del vacio: 8.854e-12 F/m.
- Velocidad de la luz: 2.998e8 m/s.
- Area efectiva iluminada: 0.020 m2.
- Superficie: absorbente ideal con incidencia normal.

## Definición del sistema

El sistema es el frente de onda que atraviesa la region de la lamina. Se estudia una porcion local de la onda y despues se escala la lectura local al area [[area_iluminada]]. La onda se considera plana, por lo que [[intensidad_media_de_poynting]] es uniforme sobre toda la zona iluminada.

La lamina no se modela como fuente ni como cavidad. Solo actua como superficie absorbente que recibe energia y momento. Por eso [[p_rad]] se interpreta como presion de radiacion absorbida, no como caso reflectante.

## Modelo físico

Usamos el modelo de onda plana en el vacio. El campo [[campo_electrico_eficaz]] determina [[densidad_media_de_energia_electromagnetica]], la propagacion con [[velocidad_de_la_luz_en_el_vacio]] determina [[intensidad_media_de_poynting]], y el mismo flujo permite leer [[densidad_de_momento_electromagnetico]], [[p_rad]] y [[potencia_electromagnetica_incidente]]. Tambien puede estimarse [[campo_magnetico_eficaz]] para comprobar el acoplamiento entre campos.

El modelo es local y medio: no sigue la oscilacion instantanea del campo, sino su valor eficaz. Eso es adecuado porque el enunciado pide energia media, intensidad media y presion media.

## Justificación del modelo

El modelo vale porque la superficie es pequeña y recibe una onda descrita como plana, de modo que la intensidad no cambia de forma apreciable dentro de [[area_iluminada]]. La incidencia normal permite asociar el flujo de energia al empuje normal sobre la lamina. Como la superficie se declara absorbente, no se duplica la presion por reflexion.

Dejaria de valer si el haz estuviera enfocado en una zona comparable al tamaño de la lamina, si la superficie reflejara una parte importante de la radiacion, si el material se calentara hasta cambiar su absorcion o si la medicion de [[campo_electrico_eficaz]] no representara un promedio estable.

## Resolución simbólica

Primero se comprueba el acoplamiento de campos para obtener [[campo_magnetico_eficaz]]:

{{f:relacion_campos_rms}}

Despues se convierte el campo eficaz [[campo_electrico_eficaz]] en densidad de energia [[densidad_media_de_energia_electromagnetica]]:

{{f:densidad_energia_rms}}

La energia por volumen avanza con [[velocidad_de_la_luz_en_el_vacio]] y produce la intensidad media [[intensidad_media_de_poynting]]:

{{f:intensidad_media_onda}}

La densidad de momento [[densidad_de_momento_electromagnetico]] se obtiene a partir de la energia volumetrica:

{{f:densidad_momento_onda}}

La presion absorbida [[p_rad]] se lee desde la intensidad:

{{f:presion_radiacion_absorbente}}

Finalmente, la potencia total recibida [[potencia_electromagnetica_incidente]] requiere el area efectiva [[area_iluminada]]:

{{f:potencia_incidente_area}}

## Sustitución numérica

Para [[campo_magnetico_eficaz]], dividir 30 V/m entre 2.998e8 m/s da aproximadamente 1.00e-7 T. Por tanto [[campo_magnetico_eficaz]] queda en el orden de decimas de microtesla, coherente con una onda de campo electrico moderado.

Para [[densidad_media_de_energia_electromagnetica]], multiplicar 8.854e-12 F/m por el cuadrado de 30 V/m da aproximadamente 7.97e-9 J/m3. Esa densidad es pequeña por volumen, pero no nula: el campo contiene energia electromagnetica distribuida.

Para [[intensidad_media_de_poynting]], multiplicar 7.97e-9 J/m3 por 2.998e8 m/s da aproximadamente 2.39 W/m2. Para [[densidad_de_momento_electromagnetico]], dividir 7.97e-9 J/m3 entre 2.998e8 m/s da aproximadamente 2.66e-17 N s/m3.

Para [[p_rad]], dividir 2.39 W/m2 entre 2.998e8 m/s da aproximadamente 7.97e-9 Pa. Para [[potencia_electromagnetica_incidente]], multiplicar 2.39 W/m2 por 0.020 m2 da aproximadamente 0.0478 W.

## Validación dimensional

- Campo magnetico: V/m dividido por m/s produce tesla mediante las unidades electromagneticas SI.
- Densidad de energia: F/m combinado con el cuadrado de V/m produce J/m3, dimension `[M L⁻¹ T⁻²]`.
- Intensidad: J/m3 multiplicado por m/s produce W/m2, dimension `[M T⁻³]`.
- Densidad de momento: J/m3 dividido por m/s produce N s/m3, dimension `[M L⁻² T⁻¹]`.
- Presion: W/m2 dividido por m/s produce Pa, dimension `[M L⁻¹ T⁻²]`.
- Potencia: W/m2 multiplicado por m2 produce W, dimension `[M L² T⁻³]`.

## Interpretación física

El resultado muestra que un campo eficaz de 30 V/m transporta una intensidad moderada de unos pocos W/m2. La densidad [[densidad_media_de_energia_electromagnetica]] es muy pequeña porque el vacio almacena poca energia por volumen para campos de esa escala, pero la velocidad [[velocidad_de_la_luz_en_el_vacio]] convierte esa energia distribuida en un flujo apreciable. Esta es la razon fisica de que una onda pueda transferir potencia aunque la energia contenida en un metro cubico parezca reducida.

La presion [[p_rad]] es extremadamente pequeña frente a presiones mecanicas ordinarias. Eso no significa que la radiacion no tenga momento; significa que el momento por area y tiempo es pequeño para esta intensidad. Si [[campo_electrico_eficaz]] se duplicara, [[densidad_media_de_energia_electromagnetica]] y [[intensidad_media_de_poynting]] crecerian de forma fuerte porque dependen del cuadrado del campo eficaz, y tambien crecerian [[p_rad]] y [[potencia_electromagnetica_incidente]].

La potencia [[potencia_electromagnetica_incidente]] depende de la lamina, no solo de la onda. Manteniendo la misma [[intensidad_media_de_poynting]], una lamina diez veces mayor recibiria diez veces mas potencia total, pero la presion local seria la misma. Esta separacion entre efecto local y captura total es el criterio fisico principal del leaf.

# Ejemplo de aplicación real


## Contexto

Un sensor optico recibe una radiacion casi uniforme con intensidad media de 500 W/m2 sobre una ventana absorbente de 4.0 cm2. El ingeniero quiere saber si la presion de radiacion puede deformar mecanicamente la ventana y cuanta potencia entra en el sensor.

La situacion es realista para instrumentacion sensible: la energia puede ser tecnicamente relevante aunque el empuje sea diminuto. Se supone incidencia normal y absorcion dominante.

## Estimación física

El area efectiva de 4.0 cm2 corresponde a 4.0e-4 m2. Multiplicar 500 W/m2 por esa area da 0.20 W, asi que [[potencia_electromagnetica_incidente]] esta en la escala de decimas de vatio. Es una potencia clara para un sensor pequeño y puede importar termicamente.

Para la presion, dividir 500 W/m2 por [[velocidad_de_la_luz_en_el_vacio]] da aproximadamente 1.7e-6 Pa. Esta escala es millones de veces menor que una presion atmosferica ordinaria. Por tanto [[p_rad]] no sera el mecanismo mecanico dominante salvo que el sensor sea extremadamente ligero o que la fuerza se integre durante mucho tiempo.

La densidad de energia asociada se obtiene dividiendo la intensidad por [[velocidad_de_la_luz_en_el_vacio]], lo que da una escala de 1.7e-6 J/m3. La lectura fisica es que el haz entrega energia continuamente, no que almacene mucha energia en cada volumen.

## Interpretación

El diagnostico distingue tres decisiones de diseño. Para calentamiento y presupuesto energetico importa [[potencia_electromagnetica_incidente]], porque el dispositivo recibe una potencia total. Para deformacion mecanica importa [[p_rad]], porque la presion es la fuerza por area. Para entender la onda como objeto fisico importa [[densidad_media_de_energia_electromagnetica]], porque muestra la energia contenida localmente.

Si el sensor duplicara su area sin cambiar la intensidad, [[potencia_electromagnetica_incidente]] se duplicaria pero [[p_rad]] no cambiaria. Si en cambio se duplicara [[intensidad_media_de_poynting]], subirian tanto la potencia como la presion. Esta diferencia evita sobredimensionar soportes mecanicos cuando el verdadero limite es termico, o ignorar empuje de radiacion en sistemas ultraligeros.