const a=`# Historia funcional de las variables intensivas\r
\r
## Problema histórico\r
\r
La termodinámica necesito separar dos clases de datos que se mezclaban en la práctica: cuanto sistema habia y en que estado estaba. Los primeros termometros, manometros y medidas de densidad mostraban que una lectura podia repetirse en muestras de tamaño muy distinto. Un deposito grande y una pequeña porcion del mismo fluido podian compartir [[T]], [[P]] y [[rho]], aunque no compartieran [[m]] ni [[V]].\r
\r
## Dificultad conceptual previa\r
\r
Sin la distincion intensiva-extensiva era facil interpretar una propiedad como si fuera inventario. Se podia pensar que dos cuerpos a igual temperatura contenian igual energía, o que una muestra mayor debia tener más temperatura por tener más materia. La confusion aparecia también en mezclas: sumar lecturas locales producia resultados sin significado físico.\r
\r
## Qué cambió\r
\r
El avance consistio en reconocer que ciertas variables gobiernan tendencias de intercambio. La igualdad de [[T]] indicaba equilibrio térmico; la igualdad de [[P]] indicaba equilibrio mecánico; la concentracion o densidad permitia comparar materiales sin depender del tamaño. La clasificación de [[X_int]] como variable de estado hizo posible formular ecuaciones de estado, criterios de equilibrio y propiedades especificas con una logica comun.\r
\r
## Impacto en la física\r
\r
La distincion permitio escribir balances con extensivas y condiciones de equilibrio con intensivas. En maquinas térmicas, calorimetria, gases y cambios de fase, esta separacion evita errores de escala. Un ingeniero puede calcular inventario con [[m]] y [[V]], pero decide compatibilidad de estados con [[T]], [[P]] y [[rho]]. La termodinámica se volvio más operativa porque cada tipo de variable recibio una función física distinta.\r
\r
## Conexión con física moderna\r
\r
En física moderna, las intensivas siguen siendo esenciales. La temperatura local aparece en transporte de calor, la presión local en mecánica de fluidos y la densidad local en simulaciones de materiales. En sistemas pequeños o fuera de equilibrio, las intensivas pueden fluctuar o depender de la region, pero la idea central permanece: son lecturas de estado, no cantidades acumuladas.\r
`;export{a as default};
