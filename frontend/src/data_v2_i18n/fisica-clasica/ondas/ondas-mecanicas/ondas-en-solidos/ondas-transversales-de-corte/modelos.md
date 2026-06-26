## Modelo ideal

El modelo ideal representa un solido elastico, isotropo, homogeneo y continuo sometido a pequenas deformaciones. La onda es plana localmente, su polarizacion es perpendicular a la propagacion y el material responde de forma lineal. En este marco, [[v_s]] depende de [[modulo_de_cizalla]] y [[rho_medio]], mientras [[lambda_s]], [[impedancia_transversal]] y [[u_s]] se interpretan como magnitudes derivadas.

## Hipótesis

- El medio conserva rigidez de corte positiva.
- La amplitud [[amplitud_transversal]] es pequena frente a la escala geometrica relevante.
- La longitud de onda [[lambda_s]] es grande frente a granos, poros, fibras y defectos.
- La densidad [[rho_medio]] y el modulo [[modulo_de_cizalla]] no cambian de forma apreciable durante la propagacion.
- No domina la disipacion viscosa ni la conversion entre modos.

## Dominio de validez cuantitativo

Como regla de orden de magnitud, [[lambda_s]] debe superar al menos 10 veces la escala microestructural que se pretende promediar. La deformacion transversal debe ser pequena, de modo que [[amplitud_transversal]] sea mucho menor que [[lambda_s]]. Para un ensayo ultrasonico de megahercios en metal, esto suele exigir amplitudes micrometricas o menores. En suelos, el modelo lineal funciona mejor para deformaciones pequenas; ante movimientos fuertes, [[modulo_de_cizalla]] efectivo se degrada.

## Señales de fallo del modelo

El modelo falla si la velocidad medida depende fuertemente de [[f_onda]], si aparece atenuacion no explicada, si las dos polarizaciones transversales viajan a velocidades distintas o si [[v_s]] calculada no es menor que [[v_p]]. Tambien falla cuando el material se comporta como fluido en la escala temporal del experimento.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: si hay anisotropia, estratificacion, viscoelasticidad, plasticidad, fisuracion o microestructura comparable a [[lambda_s]]. El modelo extendido puede usar modulos dependientes de frecuencia, tensores elasticos anisotropos, medios poroelasticos o propagacion multicapa con conversion entre ondas P, SV y SH.

## Comparación operativa

El modelo ideal sirve para calculos rapidos, interpretacion inicial y control dimensional. El modelo extendido sirve para diagnostico fino, inversion sismica, ensayos de materiales complejos y prediccion en geometria real. La decision practica consiste en comparar la escala de la onda, la linealidad de la respuesta y la homogeneidad del medio.

En la practica, la frontera entre modelo ideal y modelo extendido se decide con observables. Si la curva de llegada cambia al variar [[f_onda]], si el pulso se ensancha sin explicacion instrumental o si la polarizacion se divide en dos velocidades, el modelo isotropo ya no captura el fenomeno. Si, por el contrario, los tiempos de llegada son estables, las amplitudes son pequenas y la longitud de onda promedia el material, el modelo ideal proporciona una lectura robusta.