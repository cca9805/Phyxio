const e=`# Modelos del flujo magnetico

## Modelo ideal

El modelo ideal de flujo magnetico supone un campo [[B]] uniforme, una superficie plana de area [[A]] y una orientacion constante resumida por [[cos_theta]]. En ese caso, [[Phi_B]] se interpreta como un producto geometrico: intensidad del campo, tamano de la superficie y eficacia de orientacion.

La simplificacion central es que toda la superficie ve el mismo campo y la misma normal. Por eso [[B_perp]] tiene un unico valor y el flujo puede leerse como campo normal acumulado sobre el area. Este modelo conserva el signo orientado de [[Phi_B]], pero ignora variaciones locales del campo.

## Hipótesis

- El campo [[B]] es uniforme sobre toda la superficie; si no lo es, distintas zonas aportan flujos diferentes.
- La superficie es plana o puede sustituirse por un area efectiva [[A]]; si es curva, la normal cambia punto a punto.
- El factor [[cos_theta]] describe la orientacion respecto a la normal, no respecto al plano.
- La normal se mantiene fija al comparar [[Phi_i]] y [[Phi_f]]; si cambia la convencion, el signo de [[DeltaPhi]] pierde sentido.

## Dominio de validez cuantitativo

El modelo uniforme es razonable cuando la variacion relativa de [[B]] sobre la superficie es menor del 5 % y cuando la superficie puede tratarse como plana dentro de la escala del campo. En bobinas de laboratorio pequenas, esta aproximacion suele ser buena si el iman o solenoide genera una region central casi uniforme.

Como orden de magnitud, una espira de 0.01 m² en un campo de 0.1 T produce flujos del orden de 10⁻³ Wb cuando esta bien orientada. Si el area aumenta diez veces, el flujo maximo aumenta diez veces solo si el campo sigue siendo uniforme en toda la nueva region.

## Señales de fallo del modelo

Una señal clara de fallo es que dos partes de la superficie esten sometidas a campos con direcciones opuestas. En ese caso, sumar un unico [[B]] por toda [[A]] exagera el flujo porque no recoge cancelaciones internas.

Otra señal es que el resultado prediga [[Phi_B]] mayor que [[Phi_max]] en valor absoluto. Tambien falla cuando la superficie gira mientras se mide, cuando se deforma o cuando el campo procede de una fuente cercana que cambia rapidamente con la distancia.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: si el campo no es uniforme, si la superficie no tiene normal unica o si la precision requerida es mejor que unos pocos porcentajes. La transicion natural consiste en dividir la superficie en parches pequenos, calcular el aporte normal de cada uno y sumar los aportes orientados.

En un tratamiento universitario, el modelo alternativo es el flujo como suma continua sobre la superficie. La diferencia concreta es que [[B_perp]] deja de ser global y pasa a ser una lectura local. Para una bobina con muchas espiras, ademas, el flujo enlazado debe considerar cuantas vueltas comparten el mismo campo.

## Comparación operativa

| Criterio | Modelo uniforme | Modelo por suma local |
|---|---|---|
| Precision | Buena si [[B]] varia menos del 5 % | Mejor para campos no uniformes |
| Datos necesarios | [[B]], [[A]] y [[cos_theta]] | Mapa espacial del campo y geometria detallada |
| Coste conceptual | Bajo | Medio o alto |
| Uso tipico | Espira plana en campo casi uniforme | Bobinas cerca de imanes, superficies curvas |
| Limite principal | Ignora cancelaciones internas | Requiere mas informacion experimental |
`;export{e as default};
