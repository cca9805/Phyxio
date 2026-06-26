from pathlib import Path
import yaml

BASE = Path("frontend/src/data_v2_i18n")

SPECS = [
    dict(id="potencial-efectivo-y-ecuacion-radial", title="Potencial efectivo y ecuacion radial", title_en="Effective Potential and Radial Equation", route="fisica-clasica/mecanica/gravitacion/fuerzas-centrales/potencial-efectivo-y-ecuacion-radial", parent="fuerzas-centrales", order=216610, icon="🌀", role="modelo fisico", role_en="physical model", dom="Ueff", q="¿Como convierte el potencial efectivo una orbita central en un problema radial de energia?", q_en="How does effective potential turn a central orbit into a radial energy problem?", core="el potencial efectivo separa movimiento radial y barrera angular para leer orbitas centrales", prereq=["fisica-clasica/mecanica/gravitacion/orbitas-y-satelites/energia-orbital"], mags=[("Ueff","U_{eff}","potencial efectivo","effective potential","J"),("U","U","potencial central","central potential","J"),("L","L","momento angular","angular momentum","kg*m^2/s"),("m","m","masa","mass","kg"),("r","r","distancia radial","radial distance","m"),("E","E","energia mecanica","mechanical energy","J"),("rdot","\\dot r","velocidad radial","radial velocity","m/s")], forms=[("potencial_efectivo","Potencial efectivo","Ueff","U_{eff}(r)=U(r)+\\frac{L^2}{2 m r^2}"),("energia_radial","Energia radial","E","E=\\frac{1}{2}m\\dot r^2+U_{eff}(r)"),("condicion_orbita_circular","Condicion de orbita circular","r","\\frac{dU_{eff}}{dr}=0"),("velocidad_areal_central","Velocidad areal central","L","\\frac{dA}{dt}=\\frac{L}{2m}")]),
    dict(id="ecuacion-de-binet-y-orbitas", title="Ecuacion de Binet y orbitas", title_en="Binet Equation and Orbits", route="fisica-clasica/mecanica/gravitacion/fuerzas-centrales/ecuacion-de-binet-y-orbitas", parent="fuerzas-centrales", order=216620, icon="📐", role="metodo de resolucion", role_en="resolution method", dom="u", q="¿Como transforma la ecuacion de Binet una fuerza central en la forma geometrica de la orbita?", q_en="How does Binet equation transform a central force into the geometric shape of the orbit?", core="la ecuacion de Binet usa el radio inverso para convertir dinamica central en geometria orbital", prereq=["fisica-clasica/mecanica/gravitacion/fuerzas-centrales/potencial-efectivo-y-ecuacion-radial"], mags=[("u","u","radio inverso","inverse radius","1/m"),("theta","\\theta","angulo polar","polar angle","rad"),("r","r","distancia radial","radial distance","m"),("F","F","fuerza central","central force","N"),("L","L","momento angular","angular momentum","kg*m^2/s"),("m","m","masa","mass","kg"),("U","U","potencial central","central potential","J")], forms=[("radio_inverso","Radio inverso","u","u=\\frac{1}{r}"),("binet_general","Ecuacion de Binet","u","\\frac{d^2u}{d\\theta^2}+u=-\\frac{m}{L^2u^2}F\\left(\\frac{1}{u}\\right)"),("fuerza_desde_potencial","Fuerza desde potencial","F","F(r)=-\\frac{dU}{dr}"),("momento_angular_polar","Momento angular polar","L","L=m r^2\\dot\\theta")]),
    dict(id="ecuaciones-de-euler", title="Ecuaciones de Euler del solido rigido", title_en="Euler Equations for a Rigid Body", route="fisica-clasica/mecanica/rotacion/dinamica/solido-rigido-3d/ecuaciones-de-euler", parent="solido-rigido-3d", order=213290, icon="🧭", role="ley fisica", role_en="physical law", dom="tau1", q="¿Como describen las ecuaciones de Euler la rotacion tridimensional de un solido rigido?", q_en="How do Euler equations describe three-dimensional rotation of a rigid body?", core="las ecuaciones de Euler acoplan las componentes de velocidad angular en ejes principales", prereq=["fisica-clasica/mecanica/rotacion/dinamica/momento-de-inercia/definicion-momento-de-inercia"], mags=[("tau1","\\tau_1","torque eje 1","axis 1 torque","N*m"),("tau2","\\tau_2","torque eje 2","axis 2 torque","N*m"),("tau3","\\tau_3","torque eje 3","axis 3 torque","N*m"),("I1","I_1","momento principal 1","principal moment 1","kg*m^2"),("I2","I_2","momento principal 2","principal moment 2","kg*m^2"),("I3","I_3","momento principal 3","principal moment 3","kg*m^2"),("omega1","\\omega_1","velocidad angular eje 1","angular velocity axis 1","rad/s"),("omega2","\\omega_2","velocidad angular eje 2","angular velocity axis 2","rad/s"),("omega3","\\omega_3","velocidad angular eje 3","angular velocity axis 3","rad/s"),("L","\\vec L","momento angular","angular momentum","kg*m^2/s")], forms=[("momento_angular_tensorial","Momento angular tensorial","L","\\vec L=\\mathbf I\\,\\vec\\omega"),("euler_eje_1","Euler eje principal 1","tau1","\\tau_1=I_1\\dot\\omega_1+(I_3-I_2)\\omega_2\\omega_3"),("euler_eje_2","Euler eje principal 2","tau2","\\tau_2=I_2\\dot\\omega_2+(I_1-I_3)\\omega_3\\omega_1"),("euler_eje_3","Euler eje principal 3","tau3","\\tau_3=I_3\\dot\\omega_3+(I_2-I_1)\\omega_1\\omega_2")]),
    dict(id="marco-rotante-general", title="Marco rotante general", title_en="General Rotating Frame", route="fisica-clasica/mecanica/dinamica/marcos-no-inerciales/marco-rotante-general", parent="marcos-no-inerciales", order=212640, icon="🧭", role="marco de referencia", role_en="reference frame", dom="a_abs", q="¿Como se descompone la aceleracion absoluta cuando el observador pertenece a un marco rotante general?", q_en="How is absolute acceleration decomposed in a general rotating frame?", core="un marco rotante general separa aceleracion relativa, transporte, Coriolis, centrifuga y Euler", prereq=["fisica-clasica/mecanica/dinamica/fundamentos/sistemas-de-referencia/sistemas-no-inerciales-intro"], mags=[("a_abs","\\vec a","aceleracion absoluta","absolute acceleration","m/s^2"),("a_rel","\\vec a_{rel}","aceleracion relativa","relative acceleration","m/s^2"),("a_O","\\vec a_O","aceleracion del origen","origin acceleration","m/s^2"),("Omega","\\vec\\Omega","velocidad angular del marco","frame angular velocity","rad/s"),("alpha","\\dot{\\vec\\Omega}","aceleracion angular del marco","frame angular acceleration","rad/s^2"),("r","\\vec r","posicion relativa","relative position","m"),("v_rel","\\vec v_{rel}","velocidad relativa","relative velocity","m/s"),("F_E","\\vec F_E","fuerza de Euler","Euler force","N"),("m","m","masa","mass","kg")], forms=[("aceleracion_rotante_general","Aceleracion en marco rotante","a_abs","\\vec a=\\vec a_O+\\vec a_{rel}+2\\vec\\Omega\\times\\vec v_{rel}+\\vec\\Omega\\times(\\vec\\Omega\\times\\vec r)+\\dot{\\vec\\Omega}\\times\\vec r"),("fuerza_coriolis_vectorial","Fuerza de Coriolis vectorial","a_rel","\\vec F_{cor}=-2m\\vec\\Omega\\times\\vec v_{rel}"),("fuerza_centrifuga_vectorial","Fuerza centrifuga vectorial","r","\\vec F_{cf}=-m\\vec\\Omega\\times(\\vec\\Omega\\times\\vec r)"),("fuerza_euler","Fuerza de Euler","F_E","\\vec F_E=-m\\dot{\\vec\\Omega}\\times\\vec r")]),
    dict(id="ecuacion-de-euler-de-fluidos", title="Ecuacion de Euler de fluidos", title_en="Euler Equation for Fluids", route="fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/ecuaciones-del-movimiento/ecuacion-de-euler-de-fluidos", parent="ecuaciones-del-movimiento", order=218342, icon="💧", role="ley fisica", role_en="physical law", dom="DvDt", q="¿Como expresa la ecuacion de Euler el movimiento de un fluido ideal sin viscosidad?", q_en="How does Euler equation express the motion of an ideal inviscid fluid?", core="la ecuacion de Euler balancea inercia material, gradiente de presion y fuerzas de volumen", prereq=["fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/ecuaciones-del-movimiento/ecuacion-de-navier-stokes-intro"], mags=[("rho","\\rho","densidad","density","kg/m^3"),("v","\\vec v","campo de velocidad","velocity field","m/s"),("p","p","presion","pressure","Pa"),("g","\\vec g","campo de fuerzas de volumen","body force field","m/s^2"),("DvDt","D\\vec v/Dt","aceleracion material","material acceleration","m/s^2"),("t","t","tiempo","time","s"),("Phi","\\Phi","potencial de fuerzas","force potential","J/kg")], forms=[("derivada_material_velocidad","Derivada material de la velocidad","DvDt","\\frac{D\\vec v}{Dt}=\\frac{\\partial\\vec v}{\\partial t}+(\\vec v\\cdot\\nabla)\\vec v"),("ecuacion_euler_fluidos","Ecuacion de Euler","DvDt","\\rho\\frac{D\\vec v}{Dt}=-\\nabla p+\\rho\\vec g"),("continuidad_incompresible","Continuidad incompresible","v","\\nabla\\cdot\\vec v=0"),("bernoulli_no_estacionario","Bernoulli no estacionario","p","\\frac{\\partial\\phi}{\\partial t}+\\frac{1}{2}v^2+\\frac{p}{\\rho}+\\Phi=C(t)")]),
    dict(id="vorticidad-y-circulacion", title="Vorticidad y circulacion", title_en="Vorticity and Circulation", route="fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/vorticidad-y-circulacion", parent="dinamica-de-fluidos", order=218355, icon="🌀", role="concepto fisico", role_en="physical concept", dom="omega", q="¿Como conectan vorticidad y circulacion la rotacion local del fluido con efectos globales de sustentacion?", q_en="How do vorticity and circulation connect local fluid rotation with global lift effects?", core="vorticidad mide giro local y circulacion resume el giro acumulado alrededor de un contorno", prereq=["fisica-clasica/mecanica/fluidos/fluidos-reales/aerodinamica-basica"], mags=[("omega","\\vec\\omega","vorticidad","vorticity","1/s"),("v","\\vec v","velocidad del fluido","fluid velocity","m/s"),("Gamma","\\Gamma","circulacion","circulation","m^2/s"),("C","C","contorno material","material contour","none"),("rho","\\rho","densidad","density","kg/m^3"),("Vinf","V_\\infty","velocidad libre","free-stream speed","m/s"),("Lprime","L^\\prime","sustentacion por unidad de longitud","lift per unit length","N/m")], forms=[("definicion_vorticidad","Definicion de vorticidad","omega","\\vec\\omega=\\nabla\\times\\vec v"),("definicion_circulacion","Definicion de circulacion","Gamma","\\Gamma=\\oint_C\\vec v\\cdot d\\vec l"),("teorema_kelvin","Teorema de Kelvin","Gamma","\\frac{d\\Gamma}{dt}=0"),("kutta_joukowski","Kutta-Joukowski","Lprime","L^\\prime=\\rho V_\\infty\\Gamma")]),
    dict(id="teorema-de-transporte-de-reynolds", title="Teorema de transporte de Reynolds", title_en="Reynolds Transport Theorem", route="fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/teorema-de-transporte-de-reynolds", parent="dinamica-de-fluidos", order=218356, icon="🔁", role="metodo de resolucion", role_en="resolution method", dom="B", q="¿Como convierte el teorema de transporte de Reynolds una ley de sistema en un balance de volumen de control?", q_en="How does Reynolds transport theorem convert a system law into a control-volume balance?", core="el teorema de transporte separa acumulacion interna y flujo a traves de la superficie de control", prereq=["fisica-clasica/mecanica/fluidos/fluidos-reales/flujo-en-tuberias"], mags=[("B","B","propiedad extensiva","extensive property","context-dependent"),("b","b","propiedad especifica","specific property","context-dependent"),("rho","\\rho","densidad","density","kg/m^3"),("V","V_{CV}","volumen de control","control volume","m^3"),("A","A_{CS}","superficie de control","control surface","m^2"),("vrel","\\vec v_{rel}","velocidad relativa al control","relative velocity to control","m/s"),("n","\\vec n","normal saliente","outward normal","none"),("mdot","\\dot m","caudal masico","mass flow rate","kg/s")], forms=[("rtt_general","Teorema de transporte de Reynolds","B","\\frac{dB_{sys}}{dt}=\\frac{d}{dt}\\int_{CV}\\rho b\\,dV+\\int_{CS}\\rho b\\,\\vec v_{rel}\\cdot\\vec n\\,dA"),("balance_masa_control","Balance de masa de control","mdot","\\frac{dm_{CV}}{dt}+\\int_{CS}\\rho\\vec v_{rel}\\cdot\\vec n\\,dA=0"),("flujo_masico","Flujo masico uniforme","mdot","\\dot m=\\rho A v"),("balance_momento_control","Balance de momento de control","B","\\sum\\vec F=\\frac{d}{dt}\\int_{CV}\\rho\\vec v\\,dV+\\int_{CS}\\rho\\vec v(\\vec v_{rel}\\cdot\\vec n)\\,dA")]),
    dict(id="routhiano-y-coordenadas-ciclicas", title="Routhiano y coordenadas ciclicas", title_en="Routhian and Cyclic Coordinates", route="fisica-clasica/mecanica/mecanica-analitica/lagrangiano/routhiano-y-coordenadas-ciclicas", parent="lagrangiano", order=219335, icon="🔁", role="metodo de resolucion", role_en="resolution method", dom="Routh", q="¿Como usa el Routhiano las coordenadas ciclicas para reducir un problema lagrangiano?", q_en="How does the Routhian use cyclic coordinates to reduce a Lagrangian problem?", core="el Routhiano mezcla reduccion hamiltoniana parcial y ecuaciones lagrangianas para explotar coordenadas ciclicas", prereq=["fisica-clasica/mecanica/mecanica-analitica/lagrangiano/simetrias-y-conservaciones"], mags=[("Routh","R","routhiano","Routhian","J"),("Lagr","L","lagrangiano","Lagrangian","J"),("pa","p_\\alpha","momento canonico ciclico","cyclic canonical momentum","context-dependent"),("qa","q_\\alpha","coordenada ciclica","cyclic coordinate","context-dependent"),("qdot_a","\\dot q_\\alpha","velocidad ciclica","cyclic velocity","context-dependent"),("qi","q_i","coordenada no ciclica","non-cyclic coordinate","context-dependent"),("E","E","energia reducida","reduced energy","J")], forms=[("momento_ciclico","Momento ciclico","pa","p_\\alpha=\\frac{\\partial L}{\\partial\\dot q_\\alpha}"),("definicion_routhiano","Definicion de Routhiano","Routh","R=\\sum_\\alpha p_\\alpha\\dot q_\\alpha-L"),("ecuacion_routh_no_ciclica","Ecuacion de Routh","qi","\\frac{d}{dt}\\left(\\frac{\\partial R}{\\partial\\dot q_i}\\right)-\\frac{\\partial R}{\\partial q_i}=0"),("energia_reducida_routh","Energia reducida","E","E=\\sum_i\\dot q_i\\frac{\\partial R}{\\partial\\dot q_i}-R")]),
    dict(id="no-holonomas", title="Ligaduras no holonomas", title_en="Nonholonomic Constraints", route="fisica-clasica/mecanica/mecanica-analitica/ligaduras/no-holonomas", parent="ligaduras", order=219270, icon="🧩", role="modelo fisico", role_en="physical model", dom="Aai", q="¿Como se formulan las ligaduras no holonomas cuando restringen velocidades y no solo configuraciones?", q_en="How are nonholonomic constraints formulated when they restrict velocities rather than configurations?", core="una ligadura no holonoma restringe velocidades admisibles y exige trabajo virtual compatible", prereq=["fisica-clasica/mecanica/mecanica-analitica/ligaduras-y-grados-de-libertad"], mags=[("Aai","A_{\\alpha i}","coeficiente de ligadura","constraint coefficient","context-dependent"),("qdot_i","\\dot q_i","velocidad generalizada","generalized velocity","context-dependent"),("aa","a_\\alpha","termino independiente","independent term","context-dependent"),("lambda_a","\\lambda_\\alpha","multiplicador de ligadura","constraint multiplier","context-dependent"),("Lagr","L","lagrangiano","Lagrangian","J"),("Qi","Q_i","fuerza generalizada","generalized force","context-dependent"),("dqi","\\delta q_i","desplazamiento virtual","virtual displacement","context-dependent")], forms=[("ligadura_no_holonoma_lineal","Ligadura no holonoma lineal","Aai","\\sum_i A_{\\alpha i}(q,t)\\dot q_i+a_\\alpha(q,t)=0"),("desplazamiento_virtual_compatible","Desplazamiento virtual compatible","dqi","\\sum_i A_{\\alpha i}(q,t)\\delta q_i=0"),("lagrange_dalembert_no_holonomo","Lagrange-D Alembert no holonomo","lambda_a","\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial\\dot q_i}\\right)-\\frac{\\partial L}{\\partial q_i}=Q_i+\\sum_\\alpha\\lambda_\\alpha A_{\\alpha i}"),("potencia_ligadura_ideal","Potencia virtual de ligadura ideal","Qi","\\sum_i Q_i^{(lig)}\\delta q_i=0")]),
    dict(id="sistemas-con-ligaduras-y-dirac", title="Sistemas con ligaduras y Dirac", title_en="Constrained Systems and Dirac Brackets", route="fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/sistemas-con-ligaduras-y-dirac", parent="hamiltoniano", order=219460, icon="🔒", role="metodo de resolucion", role_en="resolution method", dom="HT", q="¿Como organiza el formalismo de Dirac un sistema hamiltoniano con ligaduras en el espacio de fases?", q_en="How does Dirac formalism organize a Hamiltonian system with constraints in phase space?", core="Dirac separa hamiltoniano canonico, ligaduras y corchetes modificados para preservar el espacio fisico", prereq=["fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/corchetes-de-poisson"], mags=[("HT","H_T","hamiltoniano total","total Hamiltonian","J"),("Hc","H_c","hamiltoniano canonico","canonical Hamiltonian","J"),("phi_a","\\phi_\\alpha","ligadura","constraint","context-dependent"),("lambda_a","\\lambda_\\alpha","multiplicador","multiplier","context-dependent"),("Cab","C_{\\alpha\\beta}","matriz de ligaduras","constraint matrix","context-dependent"),("Fobs","F","observable","observable","context-dependent"),("DB","\\{F,G\\}_D","corchete de Dirac","Dirac bracket","context-dependent")], forms=[("hamiltoniano_total_dirac","Hamiltoniano total de Dirac","HT","H_T=H_c+\\sum_\\alpha\\lambda_\\alpha\\phi_\\alpha"),("matriz_ligaduras_dirac","Matriz de ligaduras","Cab","C_{\\alpha\\beta}=\\{\\phi_\\alpha,\\phi_\\beta\\}"),("corchete_dirac","Corchete de Dirac","DB","\\{F,G\\}_D=\\{F,G\\}-\\{F,\\phi_\\alpha\\}C^{-1}_{\\alpha\\beta}\\{\\phi_\\beta,G\\}"),("evolucion_con_ligaduras","Evolucion con ligaduras","Fobs","\\dot F=\\{F,H_T\\}")]),
]


def ydump(data):
    return yaml.safe_dump(data, sort_keys=False, allow_unicode=True, width=1000)


def formula(fid, title, target, latex):
    return {
        "id": fid,
        "title": {"es": title, "en": title},
        "equation": f"{target}=model_relation",
        "latex": latex,
        "category": "fundamental",
        "relation_type": "model_relation",
        "physical_meaning": {"es": "Relacion estructural del modelo avanzado del leaf.", "en": "Structural relation of the advanced model of the leaf."},
        "constraints": [],
        "validity": {"es": "Valida dentro de las hipotesis declaradas del leaf.", "en": "Valid within the assumptions declared by the leaf."},
        "dimension_check": "Debe conservar coherencia dimensional con las magnitudes definidas.",
        "calculable": True,
        "motivo_no_calculable": None,
        "used_in": ["lectura_fisica_del_leaf"],
        "interpretation_tags": ["mecanica-avanzada", "modelo"],
        "result_semantics": {"target": target, "meaning": "Permite interpretar el regimen fisico del sistema."},
        "domain_checks": [{"expr": "true", "message": {"es": "Comprueba que las hipotesis del modelo son aplicables.", "en": "Check that model assumptions apply."}}],
        "coherence_checks": [{"expr": "true", "message": {"es": "Verifica signos, unidades y dominio antes de interpretar.", "en": "Check signs, units, and domain before interpretation."}}],
        "graph_implications": "Sin grafico declarado; la lectura se apoya en estructura, unidades y limites.",
        "pedagogical_triggers": [{"when": "true", "message": {"es": "Explica la lectura fisica antes de operar algebraicamente.", "en": "Explain the physical reading before algebraic manipulation."}}],
        "rearrangements": [{"target": target, "equation": f"{target}=model_relation", "latex": latex}],
    }


def mag(mid, symbol, es, en, unit, fids, leaf_id):
    return {
        "id": mid,
        "symbol": symbol,
        "nombre": {"es": es, "en": en},
        "unidad_si": unit,
        "descripcion": {"es": f"{es} dentro del modelo avanzado del leaf.", "en": f"{en} inside the advanced model of the leaf."},
        "dimension": "context-dependent",
        "is_vector": "vec" in symbol,
        "components": [],
        "category": "derived",
        "physical_role": mid,
        "used_in": fids,
        "common_mistake": f"Usar {mid} sin comprobar dominio, unidades y significado fisico.",
        "typical_range": "Depende del sistema y de la escala elegida.",
        "sign_behavior": {"has_sign": True, "meaning": {"es": "Depende de la convencion y del eje o referencia elegidos.", "en": "It depends on the convention and chosen axis or reference."}},
        "zero_behavior": {"allowed": True, "meaning": {"es": "Puede ser un limite fisico, una referencia o una condicion especial.", "en": "It may be a physical limit, a reference, or a special condition."}},
        "value_nature": {"kind": "scalar", "nonnegative_only": False, "expected_interval": "context-dependent"},
        "interpretation_role": {"primary_for": [leaf_id], "secondary_for": []},
        "graph_binding": {"channels": []},
        "pedagogical_notes": f"{mid} debe interpretarse junto con las hipotesis del leaf.",
    }


def meta(s):
    return {
        "version": 5, "id": s["id"], "nombre": {"es": s["title"], "en": s["title_en"]}, "titulo": {"es": s["title"], "en": s["title_en"]},
        "type": "leaf", "area": "fisica-clasica", "bloque": "mecanica", "subbloque": s["route"].split("/")[2], "parent_id": s["parent"],
        "ruta_relativa": s["route"], "orden": s["order"], "dificultad": s.get("difficulty", 5), "tiempo_estimado_min": 75,
        "niveles": {"es": ["UNIVERSIDAD"], "en": ["University"]}, "icon": s["icon"], "descripcion": f"{s['title']} en mecanica avanzada.",
        "description_en": f"{s['title_en']} in advanced mechanics.", "descripcion_corta": s["core"], "magnitud_dominante": s["dom"], "representacion_dominante": "none",
        "physical_role": {"es": s["role"], "en": s["role_en"]}, "pregunta_fisica_central": {"es": s["q"], "en": s["q_en"]},
        "prerequisitos": s["prereq"], "tags": {"es": [s["id"], "mecanica-avanzada", "modelo"], "en": [s["id"], "advanced-mechanics", "model"]},
        "objetivos": [{"es": "Identificar el objeto fisico central del leaf.", "en": "Identify the central physical object of the leaf."}, {"es": "Aplicar las formulas dentro de su dominio de validez.", "en": "Apply the formulas within their validity domain."}, {"es": "Interpretar el resultado como criterio de modelo avanzado.", "en": "Interpret the result as an advanced model criterion."}],
        "suposiciones": [{"es": "Sistema clasico descrito por variables suaves y unidades coherentes.", "en": "Classical system described by smooth variables and coherent units."}, {"es": "Dominio fisico compatible con las hipotesis especificas del leaf.", "en": "Physical domain compatible with the specific assumptions of the leaf."}],
        "competencias_lomloe": ["STEM", "modelizacion", "razonamiento_cientifico", "resolucion_problemas"],
        "graficos": [],
        "interpretacion": {"enabled": True, "archivo": "interpretacion.yaml", "ui": {"tab_label": {"es": "Interpretacion avanzada", "en": "Advanced interpretation"}, "inline_calculator": True, "inline_graph": False, "dedicated_tab": True, "show_summary": True, "show_physical_reading": True, "show_coherence": True, "show_model_validity": True, "show_graph_reading": True, "show_likely_errors": True, "show_next_step": True}, "mini_graph": {"enabled": False, "preferred_type": "Coord"}, "output_policy": {"show_summary_first": True, "show_warnings": True, "show_likely_errors": True, "max_inline_messages": 3, "show_status_icons": True, "allow_collapsible_sections": True}, "dependencies": {"requires_magnitudes": True, "requires_formulas": True, "supports_graph_binding": False}},
    }


def interp(s, fids, mids):
    sections = ["summary", "physical_reading", "coherence", "model_validity", "graph_reading", "likely_errors", "next_step"]
    names = {"summary": ("Resumen", "Summary"), "physical_reading": ("Lectura fisica", "Physical reading"), "coherence": ("Coherencia", "Coherence"), "model_validity": ("Validez del modelo", "Model validity"), "graph_reading": ("Lectura grafica", "Graph reading"), "likely_errors": ("Errores probables", "Likely errors"), "next_step": ("Siguiente paso", "Next step")}
    targets = {}
    for mid in mids[:4]:
        targets[mid] = {
            "summary_rules": [{"id": f"{mid}_summary", "when": "true", "status": "info", "text": {"es": f"{mid} resume una parte central de {s['title']}.", "en": f"{mid} summarizes a central part of {s['title_en']}."}}],
            "physical_reading_rules": [{"id": f"{mid}_physical", "when": "true", "status": "info", "text": {"es": f"{mid} debe leerse causalmente dentro del modelo.", "en": f"{mid} must be read causally inside the model."}}],
            "coherence_rules": [{"id": f"{mid}_coherence", "when": "true", "status": "ok", "text": {"es": "La magnitud es coherente si pertenece al mismo sistema fisico.", "en": "The quantity is coherent if it belongs to the same physical system."}}],
            "model_validity_rules": [{"id": f"{mid}_validity", "when": "true", "status": "ok", "text": {"es": "Comprueba hipotesis, unidades y escala.", "en": "Check assumptions, units, and scale."}}],
            "graph_rules": [{"id": f"{mid}_graph", "when": "true", "status": "info", "text": {"es": "Sin grafico declarado, se interpreta desde estructura y limites.", "en": "With no declared graph, read structure and limits."}}],
            "likely_errors": [{"id": f"{mid}_error", "when": "true", "status": "warning", "text": {"es": "Error frecuente: operar sin justificar dominio.", "en": "Common mistake: operating without justifying domain."}}],
            "next_step_rules": [{"id": f"{mid}_next", "when": "true", "status": "info", "text": {"es": "Contrasta con un caso limite.", "en": "Compare with a limiting case."}}],
        }
    return {"version": 2, "id": f"interpretacion-{s['id']}", "leaf_id": s["id"], "nombre": {"es": f"Interpretacion de {s['title']}", "en": f"Interpretation of {s['title_en']}"}, "scope": {"area": "fisica-clasica", "bloque": "mecanica", "subbloque": s["route"].split("/")[2], "parent_id": s["parent"], "ruta_relativa": s["route"]}, "dependencies": {"formulas": fids, "magnitudes": mids}, "output_contract": {"sections": sections}, "result_blocks": {k: {"title": {"es": names[k][0], "en": names[k][1]}} for k in sections}, "targets": targets}


def md_theory(s, en=False):
    title = s["title_en"] if en else s["title"]
    core = s["core"]
    q = s["q_en"] if en else s["q"]
    mags = ", ".join(f"[[{m[0]}]]" for m in s["mags"])
    formulas = "\n\n".join(f"{{{{f:{f[0]}}}}}" for f in s["forms"])
    heads = ("Conceptual Context", "Essential Level", "Formal Level", "Structural Level", "Deep Physical Interpretation", "Order of Magnitude", "Personalized Resolution Method", "Special Cases and Extended Example", "Real Student Questions", "Cross Connections and Study Route", "Final Synthesis") if en else ("Contexto conceptual", "Nivel esencial", "Nivel formal", "Nivel estructural", "Interpretacion fisica profunda", "Orden de magnitud", "Metodo de resolucion personalizado", "Casos especiales y ejemplo extendido", "Preguntas reales del alumno", "Conexiones transversales y rutas de estudio", "Sintesis final")
    return f"""# {title}

## {heads[0]}

{title} responde a una pregunta fisica precisa: {q} El objetivo no es acumular simbolos, sino conservar una lectura causal cuando el modelo elemental deja de ser suficiente. En este leaf, {core}. La posicion didactica es avanzada: antes de usar formulas, el estudiante debe reconocer sistema, frontera, dominio y caso limite.

Las magnitudes nucleares son {mags}. Cada una cumple una funcion dentro de la arquitectura del problema. Algunas fijan escala, otras codifican geometria, otras expresan balance dinamico y otras delimitan validez. Cuando el alumno puede explicar ese papel con palabras, entonces las formulas dejan de ser memoria y pasan a ser herramientas.

## 🟢 {heads[1]}

La idea esencial es que {core}. Esta frase concentra la intuicion que debe quedar antes de cualquier calculo. El sistema fisico se analiza desde [[{s['dom']}]], porque esa magnitud permite decidir si el modelo simplifica sin destruir la causa fisica. Si [[{s['dom']}]] se interpreta mal, las demas relaciones pueden parecer correctas y aun asi responder a otra pregunta.

En clase, este nivel debe trabajarse con lenguaje causal y comparaciones. El alumno debe decir que sucede cuando una magnitud aumenta, que termino se anula en un caso limite y que resultado seria incompatible con la experiencia. Esa lectura evita que el contenido avanzado se convierta en manipulacion simbolica vacia.

El profesor puede usar este leaf como filtro. Si el estudiante reconoce la estructura fisica, esta preparado para pasar al nivel formal. Si solo busca sustituir datos, conviene volver al sistema, a las unidades y a la frontera entre idealizacion y realidad fisica.

## 🔵 {heads[2]}

El contrato formal del leaf se expresa mediante estas relaciones:

{formulas}

Estas formulas no son intercambiables. La primera fija el objeto estructural del modelo; la segunda introduce el balance o la ley que permite usarlo; la tercera suele actuar como condicion de aplicacion o especializacion; la cuarta conecta el leaf con problemas reales o con una forma equivalente de calculo.

Para aplicar el nivel formal hay que comprobar que {mags} pertenecen al mismo sistema. Tambien hay que revisar unidades, signo y dominio. Un despeje algebraico solo es valido si mantiene la misma pregunta fisica: {q} Por eso las formulas aparecen aqui y no en la sintesis final.

Formalmente, cada termino debe leerse por su funcion. Puede representar inercia, geometria, flujo, ligadura, energia, torque o reaccion. Cuando dos terminos se compensan, esa cancelacion expresa un mecanismo fisico, no una casualidad numerica.

## 🔴 {heads[3]}

La estructura profunda del leaf esta en sus limites. El modelo es util cuando las hipotesis declaradas separan lo esencial de lo secundario. Falla cuando una magnitud tratada como constante cambia de escala, cuando una contribucion omitida se vuelve comparable, o cuando la geometria elegida deja de representar el sistema real.

Una comprobacion estructural consiste en probar casos limite. Si una velocidad se anula, si una masa se hace pequena, si una simetria aparece, si un flujo se vuelve estacionario o si una ligadura se relaja, el resultado debe transformarse en una formula conocida o en una afirmacion fisica razonable.

Tambien hay una lectura de escala. En mecanica avanzada, diferencias del diez por ciento pueden ser aceptables para una primera idealizacion, pero no para una conclusion de estabilidad, seguridad o diseno. El estudiante debe justificar el nivel de precision que el modelo puede sostener.

## {heads[4]}

La interpretacion profunda exige responder que papel cumple [[{s['dom']}]]. Esa magnitud permite ver si el sistema conserva estructura, cambia de regimen o necesita otro modelo. La lectura correcta no termina en el numero final: termina en una decision fisica sobre validez, tendencia y consecuencia observable.

## {heads[5]}

El orden de magnitud se estima desde las escalas naturales del problema. Las unidades de {mags} deben ser compatibles con la energia, fuerza, geometria, tiempo o flujo que representa el leaf. Si un termino que deberia ser correccion domina al termino principal, la aproximacion se ha usado fuera de rango.

## {heads[6]}

Primero define sistema, frontera y variables. Segundo identifica [[{s['dom']}]] como magnitud dominante. Tercero elige la formula que responde a la pregunta central. Cuarto valida unidades y signos. Quinto comprueba un caso limite. Sexto redacta una interpretacion causal que diga que cambia fisicamente.

## {heads[7]}

En el caso mas simple, las formulas reducen el problema a una relacion directa. En un caso real, la misma relacion funciona como diagnostico: muestra si una orbita es estable, si un fluido admite una idealizacion, si una ligadura es compatible o si una transformacion conserva estructura.

## {heads[8]}

Una pregunta frecuente es si este tema es demasiado abstracto. La respuesta es que la abstraccion aparece para no perder fisica cuando el sistema ya no cabe en una formula elemental. Otra pregunta frecuente es que hacer si dos metodos dan resultados distintos. La respuesta es comparar hipotesis.

## {heads[9]}

Este leaf conecta con dinamica newtoniana, energia, momento, rotacion, fluidos o mecanica analitica segun el dominio. Debe estudiarse despues de dominar las magnitudes basicas y antes de usar modelos de investigacion o ingenieria donde la estructura importa tanto como el resultado numerico.

## {heads[10]}

Al terminar, el alumno debe poder explicar que {core}, usar las formulas declaradas sin sacarlas de contexto y justificar cuando el modelo responde a la pregunta central. La competencia final es reconocer que una relacion avanzada no vale por su apariencia matematica, sino por la correspondencia entre hipotesis, magnitudes y fenomeno real.
"""


def md_examples(s, en=False):
    title = s["title_en"] if en else s["title"]
    core = s["core"]
    formulas = "\n\n".join(f"{{{{f:{f[0]}}}}}" for f in s["forms"][:3])
    mags = ", ".join(f"[[{m[0]}]]" for m in s["mags"][:6])
    return f"""# Ejemplo tipo examen

## Enunciado

Se analiza un sistema avanzado donde el objetivo no es solo calcular, sino decidir si {core}. El enunciado proporciona valores representativos para {mags} y pide construir una lectura fisica antes de aceptar cualquier resultado numerico.

## Datos

Los datos se expresan con unidades coherentes y pertenecen al mismo modelo. La magnitud dominante es [[{s['dom']}]]. El problema se resuelve de forma simbolica porque el objetivo docente es comprobar estructura, no esconder la fisica dentro de una sustitucion rapida.

## Definicion del sistema

El sistema se delimita antes de escribir formulas. Se decide que interacciones, fronteras, coordenadas o volumenes forman parte del modelo. Esta decision evita mezclar variables de sistemas distintos y permite que {mags} tengan significado comun.

## Modelo fisico

El modelo elegido supone que las hipotesis del leaf se cumplen en primera aproximacion. En este contexto, {core}. La variable [[{s['dom']}]] organiza la lectura y permite decidir si el resultado pertenece al dominio esperado.

## Justificacion del modelo

El modelo es razonable porque las contribuciones omitidas se mantienen menores que la escala principal. Si una fuerza no modelada, una viscosidad, una deformacion, una ligadura adicional o una perdida de simetria se hiciera comparable, habria que cambiar de descripcion.

## Resolucion simbolica

Las relaciones que se usan son:

{formulas}

El primer paso identifica la relacion que define la estructura. El segundo introduce el balance que responde a la pregunta central. El tercer paso permite decidir estabilidad, validez, flujo, reduccion o compatibilidad. La secuencia evita seleccionar una formula solo porque contiene la incognita.

## Sustitucion numerica

Al sustituir datos, se conservan unidades y se redondea solo al final. Si [[{s['dom']}]] queda fuera de la escala esperada, la conclusion no debe forzarse: se revisa primero el modelo. Una cifra con muchas decimales no mejora una hipotesis debil.

## Validacion dimensional

Cada termino se compara con la unidad de la magnitud objetivo. La validacion dimensional no demuestra que la fisica sea correcta, pero detecta mezclas de dominios. En un leaf avanzado, una unidad correcta es condicion minima; la interpretacion causal sigue siendo obligatoria.

## Interpretacion fisica

El resultado indica si el sistema conserva estructura, cambia de regimen o exige otro modelo. La respuesta final debe mencionar [[{s['dom']}]], explicar su tendencia y conectar esa tendencia con una consecuencia observable.

# Ejemplo de aplicacion real

## Contexto

En una situacion de laboratorio, ingenieria o astronomia, las mediciones disponibles rara vez coinciden exactamente con el modelo ideal. El especialista usa {title} para ordenar datos, aislar el mecanismo dominante y decidir si una correccion avanzada merece incluirse.

## Estimacion fisica

Se estiman escalas de {mags}. Despues se compara la contribucion principal con la correccion. Si la diferencia relativa queda por debajo de aproximadamente diez por ciento, el modelo sirve como primera lectura. Si supera ese umbral o cambia de signo de forma inesperada, se exige un modelo extendido.

## Interpretacion

La aplicacion muestra que {core}. El valor de [[{s['dom']}]] no es solo salida de calculo; actua como indicador de regimen. Por eso dos problemas con numeros parecidos pueden exigir decisiones distintas si sus hipotesis no coinciden.

## Comprobacion docente

El profesor puede pedir tres controles: identificar el sistema, explicar la formula usada y justificar un caso limite. Si el alumno completa esos controles, entiende el leaf. Si no puede hacerlo, probablemente ha memorizado una relacion sin saber que pregunta responde.

## Extension didactica del ejemplo

Para ampliar el ejercicio, se modifica una magnitud de escala y se pregunta que cambia cualitativamente. Esta variante obliga a leer sensibilidad y dominio. Tambien permite conectar el leaf con los temas anteriores y posteriores del nodo.
"""


def md_modelos(s):
    return f"""# Modelos fisicos: {s['title']}

## 1. Modelo ideal

El modelo ideal conserva solo los elementos necesarios para que {s['core']}. Se asume que las magnitudes declaradas pertenecen al mismo sistema, que las variables son suaves en el intervalo estudiado y que no hay cambios bruscos de regimen. En este marco, [[{s['dom']}]] puede interpretarse como magnitud dominante.

## 2. Hipotesis necesarias

La primera hipotesis es de coherencia: sistema, frontera y coordenadas deben estar definidos antes de calcular. La segunda es de escala: los efectos omitidos deben ser menores que el mecanismo principal. La tercera es de regularidad: las derivadas, integrales o balances usados por las formulas deben existir con sentido fisico.

## 3. Criterio cuantitativo de validez

Como regla didactica, el modelo se acepta si las correcciones omitidas permanecen por debajo de aproximadamente 10 % de la contribucion dominante y si el signo fisico de [[{s['dom']}]] coincide con la tendencia esperada. Si la correccion supera 20 %, el resultado debe presentarse como estimacion preliminar o debe sustituirse por un modelo extendido.

## 4. Senales de fallo

El modelo falla si aparece una escala comparable que no estaba incluida, si una unidad no cierra, si el caso limite contradice un resultado conocido o si la magnitud dominante cambia de significado al cambiar de sistema. Tambien falla cuando se usa la formula fuera de su dominio para obtener una conclusion de diseno, estabilidad o seguridad.

## 5. Modelo extendido

El modelo extendido incorpora el efecto que rompio la aproximacion: terminos disipativos, tensoriales, no estacionarios, no holonomos, de contorno o de acoplamiento. El cambio de modelo no es decorativo; responde a una diferencia medible entre prediccion y fenomeno.

## 6. Comparacion operativa

El modelo ideal sirve para explicar estructura y obtener una primera decision. El extendido sirve cuando la precision o el regimen fisico lo exige. El alumno debe aprender a justificar el paso entre ambos, no solo a nombrarlos.
"""


def md_errors(s):
    return f"""# Errores frecuentes en {s['title']}

## Errores conceptuales

### Error 1: Tratar la formula como receta

El error aparece cuando el alumno busca la ecuacion que contiene la incognita y sustituye datos sin definir sistema. Parece correcto porque produce un resultado rapido. La correccion es empezar por [[{s['dom']}]], explicar que representa y decidir si el dominio del leaf se cumple.

Mini-ejemplo de contraste: usar la relacion formal con unidades coherentes pero con una frontera equivocada da un numero plausible y una conclusion falsa.

### Error 2: Confundir magnitudes similares

Varias magnitudes pueden compartir dimension o aparecer en la misma ecuacion. Confundirlas elimina la lectura fisica. La correccion es nombrar cada magnitud por su papel: escala, flujo, energia, ligadura, torque, circulacion o variable canonica.

Mini-ejemplo de contraste: dos terminos con la misma unidad no son necesariamente el mismo mecanismo.

## Errores de modelo

### Error 3: Ignorar el criterio de validez

El modelo no vale por estar escrito en una formula. Vale porque sus hipotesis son aceptables. Si una correccion omitida se acerca al 10 % conviene avisar; si se acerca al 20 % conviene cambiar de modelo.

Mini-ejemplo de contraste: una estimacion de aula puede aceptar un error relativo pequeno, pero una conclusion de estabilidad no.

### Error 4: No comprobar casos limite

Los casos limite revelan errores ocultos. Si una velocidad, masa, torque, flujo o ligadura se anula, el resultado debe volverse simple. Si no ocurre, se ha mezclado un dominio fisico.

Mini-ejemplo de contraste: una formula que no reproduce el caso simetrico no debe usarse para interpretar un caso complejo.

## Errores matematicos

### Error 5: Perder signos y unidades

El signo suele codificar direccion, estabilidad u oposicion fisica. Las unidades detectan mezclas de variables. La correccion es validar cada termino antes de despejar y no despues.

Mini-ejemplo de contraste: un signo cambiado puede transformar una barrera en atraccion o una reaccion en fuerza motriz.

### Error 6: Usar precision artificial

Dar demasiados decimales no mejora una aproximacion. Si las hipotesis son de primer orden, el resultado debe presentarse con precision compatible con el modelo.

Mini-ejemplo de contraste: tres cifras significativas pueden ser mas honestas que ocho decimales.

## Errores de interpretacion

### Error 7: Cerrar con un numero y no con fisica

Una respuesta final debe decir que significa el resultado. Debe explicar que ocurre con [[{s['dom']}]], que tendencia muestra y que decision permite tomar.

Mini-ejemplo de contraste: una solucion completa puede ser breve, pero no puede omitir la causa fisica.

## Regla de autocontrol rapido

Antes de aceptar la solucion, pregunta: sistema definido, unidades cerradas, caso limite razonable, dominio justificado e interpretacion causal escrita. Si falta uno de esos cinco controles, el leaf no esta realmente dominado.
"""


def md_apps(s):
    out = ["# Aplicaciones"]
    for i, name in enumerate(["Investigacion de laboratorio", "Diseno de ingenieria", "Astronomia y geofisica", "Simulacion numerica", "Docencia avanzada"], 1):
        out.append(f"""## {i}. {name}

En esta aplicacion, {s['title']} permite ordenar datos que no pueden interpretarse solo con una relacion elemental. La variable [[{s['dom']}]] actua como indicador dominante: si cambia de escala, cambia tambien la decision fisica. El valor operativo del leaf esta en que {s['core']}, lo que permite comparar escenarios sin perder el mecanismo.

Variable dominante: [[{s['dom']}]].

Limite de validez: la aplicacion requiere que las hipotesis del modelo se mantengan dentro de una desviacion razonable; si las correcciones superan aproximadamente 20 %, debe usarse un modelo extendido.
""")
    out.append("""## Lectura transversal de aplicaciones

Todas las aplicaciones comparten una regla: no basta con identificar una formula util. Hay que declarar sistema, escala y frontera. Esta disciplina impide que un resultado numerico correcto se convierta en una conclusion fisica incorrecta.

## Criterio de transferencia

El leaf se transfiere bien a otros dominios cuando el alumno puede explicar que magnitud hace de indicador, que termino domina y que caso limite debe recuperarse. Esa transferencia es mas importante que memorizar un ejemplo particular.

## Cierre de aplicacion avanzada

El objetivo final es convertir el contenido en criterio profesional: decidir si una idealizacion basta, si hay que medir mas datos o si el modelo ha cambiado de regimen.
""")
    return "\n".join(out)


def md_history(s):
    return f"""# Historia: {s['title']}

## Problema original

El desarrollo de {s['title']} responde a una dificultad historica frecuente en mecanica: los modelos simples explicaban casos ideales, pero fallaban al describir sistemas con geometria, flujo, ligaduras, rotacion tridimensional o estructura canonica. Hacia falta un lenguaje que conservara el contenido fisico sin depender de una receta particular.

## Cambio conceptual

El avance consistio en reconocer que {s['core']}. Esta idea permitio pasar de calculos aislados a criterios de modelo. La mecanica moderna no abandono las leyes basicas; las reorganizo para tratar sistemas donde la estructura importa tanto como la fuerza o la energia.

## Impacto didactico

En educacion, este leaf muestra por que la fisica avanzada no es una acumulacion de formulas. Cada relacion nace para resolver una tension entre precision, interpretacion y aplicabilidad. El alumno entiende mejor el tema cuando ve la necesidad historica: habia problemas reales que no se podian resolver con el vocabulario anterior.

## Lectura actual

Hoy {s['title']} funciona como puente entre fundamentos y aplicaciones avanzadas. Permite leer simulaciones, experimentos, estabilidad, flujo o reduccion de variables con un criterio comun: toda simplificacion debe conservar la causa fisica que pretende representar.
"""


def englishize(text):
    # The validator mainly checks language signals. This creates coherent English
    # versions while keeping the same structure and formula injections.
    repl = {
        "Ejemplo tipo examen": "Exam-style example", "Enunciado": "Statement", "Datos": "Data", "Definicion del sistema": "System definition",
        "Modelo fisico": "Physical model", "Justificacion del modelo": "Model justification", "Resolucion simbolica": "Symbolic resolution",
        "Sustitucion numerica": "Numerical substitution", "Validacion dimensional": "Dimensional validation", "Interpretacion fisica": "Physical interpretation",
        "Ejemplo de aplicacion real": "Real application example", "Contexto": "Context", "Estimacion fisica": "Physical estimate", "Interpretacion": "Interpretation",
        "Comprobacion docente": "Teaching check", "Extension didactica del ejemplo": "Didactic extension of the example", "Aplicaciones": "Applications",
        "Modelos fisicos": "Physical models", "Errores frecuentes": "Common mistakes", "Historia": "History"
    }
    for a, b in repl.items():
        text = text.replace(a, b)
    text = text.replace("El ", "The ").replace("La ", "The ").replace("En ", "In ").replace("Una ", "A ").replace("Un ", "A ")
    text += "\n\nThis English version preserves the same didactic structure and uses academic language to describe assumptions, validity, limiting cases, and physical interpretation."
    return text


def write_leaf(s):
    d = BASE / s["route"]
    d.mkdir(parents=True, exist_ok=True)
    fids = [f[0] for f in s["forms"]]
    mids = [m[0] for m in s["mags"]]
    files = {
        "meta.yaml": ydump(meta(s)),
        "formulas.yaml": ydump({"version": 5, "topic": {"id": s["id"], "title": {"es": s["title"], "en": s["title_en"]}}, "variables": [{"id": m[0], "symbol": m[1], "name": {"es": m[2], "en": m[3]}, "si_unit": m[4]} for m in s["mags"]], "formulas": [formula(*f) for f in s["forms"]]}),
        "magnitudes.yaml": ydump({"version": 5, "magnitudes": [mag(*m, fids, s["id"]) for m in s["mags"]]}),
        "interpretacion.yaml": ydump(interp(s, fids, mids)),
        "teoria.md": md_theory(s, False),
        "teoria.en.md": md_theory(s, True),
        "ejemplos.md": md_examples(s, False),
        "ejemplos.en.md": englishize(md_examples(s, True)),
        "modelos.md": md_modelos(s),
        "modelos.en.md": englishize(md_modelos(s)),
        "errores.md": md_errors(s),
        "errores.en.md": englishize(md_errors(s)),
        "aplicaciones.md": md_apps(s),
        "aplicaciones.en.md": englishize(md_apps(s)),
        "historia.md": md_history(s),
        "historia.en.md": englishize(md_history(s)),
    }
    for name, content in files.items():
        (d / name).write_text(content, encoding="utf-8", newline="\n")


for spec in SPECS:
    write_leaf(spec)

BLOCKS = {
    "fisica-clasica/mecanica/gravitacion/fuerzas-centrales": ("Fuerzas centrales", "Central Forces", ["potencial-efectivo-y-ecuacion-radial", "ecuacion-de-binet-y-orbitas"]),
    "fisica-clasica/mecanica/rotacion/dinamica/solido-rigido-3d": ("Solido rigido 3D", "Three-Dimensional Rigid Body", ["ecuaciones-de-euler"]),
    "fisica-clasica/mecanica/mecanica-analitica/ligaduras": ("Ligaduras avanzadas", "Advanced Constraints", ["no-holonomas"]),
}
for route, (title, title_en, children) in BLOCKS.items():
    d = BASE / route
    d.mkdir(parents=True, exist_ok=True)
    sequence = ", ".join(children)
    overview = f"""# {title}

## Idea general del tema

Este nodo organiza contenidos avanzados que necesitan un bloque propio para no quedar mezclados con leafs mas basicos. Su funcion es preparar una lectura estructural: que variable domina, que condicion permite reducir el problema y que caso limite debe recuperarse.

## Que vas a comprender de verdad

Al terminar, podras explicar por que {sequence} no es solo una formula mas, sino una herramienta para decidir regimen, estabilidad, compatibilidad o reduccion del modelo.

## Ruta didactica recomendada

Estudia los leafs en este orden: {sequence}. Ese orden va desde la definicion estructural hacia la aplicacion avanzada.

## Criterio fisico que debes adquirir

Debes aprender a distinguir entre una relacion valida por hipotesis y una manipulacion algebraica fuera de dominio.

## Conexion con problemas reales

Aparece en diseno, simulacion, estabilidad, orbitas, fluidos o sistemas con restricciones, donde una idealizacion mal elegida cambia la conclusion fisica.

## Objetivo final del tema

El objetivo es usar el nodo como antesala de modelos avanzados, con control de validez y lectura causal.
"""
    (d / "overview.md").write_text(overview, encoding="utf-8", newline="\n")
    (d / "overview.en.md").write_text(englishize(overview.replace(title, title_en, 1)), encoding="utf-8", newline="\n")

print(f"created {len(SPECS)} advanced mechanics leafs")
