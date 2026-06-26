const e=`# Modelos de las ecuaciones de Hamilton

## Modelo ideal

El modelo ideal usa un par canonico formado por [[qi]] y [[p]], junto con un hamiltoniano [[H]] diferenciable. Las ecuaciones de Hamilton convierten las pendientes de [[H]] en el flujo instantaneo del estado. El caso mas claro es el oscilador cuadratico, porque [[qd]] depende linealmente de [[p]] y [[pd]] depende linealmente de [[qi]].

La ventaja del modelo ideal es que separa con mucha limpieza valor energetico y direccion de movimiento. Un mismo valor de [[H]] puede corresponder a muchos puntos de fase, pero cada punto tiene un vector local propio. Esa distincion evita enseñar el hamiltoniano como una energia estatica.

## Hipotesis

- [[qi]] y [[p]] forman un par canonico.
- [[H]] esta escrito solo con variables de fase y parametros.
- [[H]] es diferenciable respecto de coordenada y momento.
- En el oscilador, [[m]] es positiva y [[k]] no negativa.
- La lectura de conservacion requiere controlar la dependencia temporal explicita [[Ht]].

## Dominio de validez cuantitativo

En el modelo cuadratico estable se exige [[m]] mayor que cero y [[k]] mayor o igual que cero. Si [[m]] es muy pequeña, un mismo [[p]] produce un [[qd]] grande; si [[k]] es muy grande, un desplazamiento pequeño produce un [[pd]] intenso. El orden de magnitud de estas pendientes determina la rapidez con la que el punto recorre el retrato de fase.

## Senales de fallo del modelo

Una señal de fallo aparece si las variables no son canonicas o si [[H]] conserva velocidades ocultas. Otra señal es obtener unidades incompatibles: una derivada respecto de [[p]] que no produce velocidad, o una derivada respecto de [[qi]] que no produce una magnitud de fuerza generalizada. Tambien hay fallo si se interpreta [[H]] constante como reposo.

## Modelo extendido o alternativo

El modelo extendido usa muchos pares canonicos. Cada par tiene su propia ecuacion de coordenada y de momento. En sistemas con restricciones, puede ser necesario un formalismo hamiltoniano con multiplicadores o restricciones primarias. En sistemas disipativos ordinarios, el flujo no suele ser hamiltoniano simple y requiere una descripcion ampliada.

Conviene cambiar a un modelo alternativo cuando las variables no son canonicas, cuando aparecen restricciones que impiden despejar velocidades de forma regular o cuando hay disipacion real que reduce energia ciclo a ciclo. En esos casos, aplicar las ecuaciones simples puede producir trayectorias cualitativamente falsas.

## Comparacion operativa

El enfoque newtoniano se centra en fuerzas y aceleraciones. El enfoque lagrangiano se centra en coordenadas y accion. El enfoque hamiltoniano se centra en flujo de fase. Conviene usar Hamilton cuando se quieren retratos de fase, estabilidad, conservacion, simetrias canonicas o puentes hacia mecanica estadistica y cuantica.

Operativamente, Newton suele ser directo para pocos cuerpos con fuerzas claras; Lagrange es eficiente con ligaduras; Hamilton es superior cuando se necesita entender geometria de estados, constantes de movimiento o simulaciones que preserven estructura. Esta eleccion es parte del modelado fisico.
`;export{e as default};
