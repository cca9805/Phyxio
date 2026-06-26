const e=`# Modelos para ondas transversales de corte\r
\r
## Modelo ideal\r
\r
El modelo ideal representa un solido elastico, isotropo, homogeneo y continuo sometido a pequenas deformaciones. La onda es plana localmente, su polarizacion es perpendicular a la propagacion y el material responde de forma lineal. En este marco, [[v_s]] depende de [[G_shear]] y [[rho_medio]], mientras [[lambda_s]], [[Z_s]] y [[u_s]] se interpretan como magnitudes derivadas.\r
\r
## Hipótesis\r
\r
- El medio conserva rigidez de corte positiva.\r
- La amplitud [[A_s]] es pequena frente a la escala geometrica relevante.\r
- La longitud de onda [[lambda_s]] es grande frente a granos, poros, fibras y defectos.\r
- La densidad [[rho_medio]] y el modulo [[G_shear]] no cambian de forma apreciable durante la propagacion.\r
- No domina la disipacion viscosa ni la conversion entre modos.\r
\r
## Dominio de validez cuantitativo\r
\r
Como regla de orden de magnitud, [[lambda_s]] debe superar al menos 10 veces la escala microestructural que se pretende promediar. La deformacion transversal debe ser pequena, de modo que [[A_s]] sea mucho menor que [[lambda_s]]. Para un ensayo ultrasonico de megahercios en metal, esto suele exigir amplitudes micrometricas o menores. En suelos, el modelo lineal funciona mejor para deformaciones pequenas; ante movimientos fuertes, [[G_shear]] efectivo se degrada.\r
\r
## Señales de fallo del modelo\r
\r
El modelo falla si la velocidad medida depende fuertemente de [[f_onda]], si aparece atenuacion no explicada, si las dos polarizaciones transversales viajan a velocidades distintas o si [[v_s]] calculada no es menor que [[v_p]]. Tambien falla cuando el material se comporta como fluido en la escala temporal del experimento.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando conviene pasar al modelo extendido: si hay anisotropia, estratificacion, viscoelasticidad, plasticidad, fisuracion o microestructura comparable a [[lambda_s]]. El modelo extendido puede usar modulos dependientes de frecuencia, tensores elasticos anisotropos, medios poroelasticos o propagacion multicapa con conversion entre ondas P, SV y SH.\r
\r
## Comparación operativa\r
\r
El modelo ideal sirve para calculos rapidos, interpretacion inicial y control dimensional. El modelo extendido sirve para diagnostico fino, inversion sismica, ensayos de materiales complejos y prediccion en geometria real. La decision practica consiste en comparar la escala de la onda, la linealidad de la respuesta y la homogeneidad del medio.\r
\r
\r
En la practica, la frontera entre modelo ideal y modelo extendido se decide con observables. Si la curva de llegada cambia al variar [[f_onda]], si el pulso se ensancha sin explicacion instrumental o si la polarizacion se divide en dos velocidades, el modelo isotropo ya no captura el fenomeno. Si, por el contrario, los tiempos de llegada son estables, las amplitudes son pequenas y la longitud de onda promedia el material, el modelo ideal proporciona una lectura robusta.\r
`;export{e as default};
