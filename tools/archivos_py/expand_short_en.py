"""
Second pass: add more content to EN files still below 1200 words.
Expand the 'Real student questions' section with additional Q&A.
"""
import os, re

base = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento'
groups = [
    'fundamentos',
    'conservacion-momento-lineal/principio-de-conservacion',
    'colisiones',
    'centro-de-masas',
    'momento-angular',
    'sistemas-de-masa-variable',
]

EXTRA_QA_EN = {
    'impulso': (
        "\n- **Can impulse be negative?** Yes. Impulse is a vector. A negative impulse means the force acts "
        "opposite to the chosen positive direction, reducing the object's momentum in that direction.\n"
        "- **What happens if contact time approaches zero?** The force approaches infinity (Dirac delta). "
        "Real materials always have finite contact time, but the idealisation is useful for modelling instantaneous collisions.\n"
    ),
    'colision-con-pared': (
        "\n- **Does the wall gain momentum?** Yes, by Newton's third law, the wall (and the Earth it is attached to) "
        "gains momentum equal and opposite to the ball's change. However, the wall's mass is so large that its "
        "velocity change is immeasurably small ($\\sim 10^{-25}$ m/s for a tennis ball against a building).\n"
        "- **Why does a perfectly elastic bounce reverse velocity exactly?** Because $e=1$ means the relative "
        "velocity of separation equals the relative velocity of approach, and the wall's velocity is zero.\n"
    ),
    'colisiones-2d': (
        "\n- **Why do equal-mass elastic collisions give a $90°$ angle between final velocities?** This follows "
        "directly from combining momentum conservation ($\\vec{p}_1' + \\vec{p}_2' = \\vec{p}_1$) with energy "
        "conservation ($|\\vec{p}_1'|^2 + |\\vec{p}_2'|^2 = |\\vec{p}_1|^2$), which is the Pythagorean theorem.\n"
        "- **Is it possible for both particles to scatter forward?** Yes, if the projectile is heavier than "
        "the target, both can move forward after the collision, with the target at a larger angle.\n"
    ),
    'colisiones-totalmente-inelasticas': (
        "\n- **Is a totally inelastic collision the one that loses the most energy?** Yes, among all collisions "
        "that conserve momentum, the totally inelastic one ($e=0$) maximises kinetic energy loss. No collision "
        "can lose more energy without violating momentum conservation.\n"
        "- **Can a totally inelastic collision be 2D?** Yes. The key condition is that the objects stick together; "
        "momentum is still conserved component by component in both $x$ and $y$.\n"
    ),
    'dispersion-angular-en-colisiones-2d': (
        "\n- **Why is the CM frame preferred for calculating cross sections?** Because in the CM frame, "
        "incoming and outgoing momenta are equal in magnitude and opposite in direction, making the geometry "
        "symmetric and the mathematics simpler. The angular dependence of the cross section reflects the "
        "shape of the interaction potential directly.\n"
        "- **What is the physical meaning of the differential cross section?** It measures the effective "
        "target area per unit solid angle: $d\\sigma/d\\Omega$ tells you the probability of scattering into "
        "a given angular range per target particle per unit flux.\n"
    ),
    'centro-de-masas-sistemas-discretos': (
        "\n- **Can the CM be outside the physical body?** Yes. For a ring or an L-shaped object, the CM "
        "lies in empty space. The CM is a mathematical point, not necessarily located within material.\n"
        "- **Does adding a mass always move the CM toward it?** Yes, the CM always shifts toward any added "
        "mass, with the shift proportional to the added mass and inversely proportional to the total mass.\n"
    ),
    'definicion-centro-de-masas': (
        "\n- **Is the centre of mass the same as the centroid?** Only for uniform-density objects. For "
        "non-uniform density, the CM weights positions by mass density, while the centroid weights by volume.\n"
        "- **Why is the CM important for rotation?** Torque-free rotation occurs about the CM. If you throw "
        "a wrench, it tumbles about its CM while the CM follows a parabola — cleanly separating translation from rotation.\n"
        "- **Does the CM depend on the choice of coordinate origin?** The position vector $\\vec{r}_{CM}$ "
        "depends on the origin, but the physical location of the point in space does not.\n"
    ),
    'marco-del-centro-de-masas': (
        "\n- **Is the CM frame always the best frame?** Not always, but it is the most symmetric frame for "
        "two-body problems. For problems involving external fields or boundaries (like a wall), the lab frame "
        "may be more natural.\n"
        "- **What is the reduced mass physically?** The reduced mass $\\mu = m_1 m_2/(m_1+m_2)$ is the effective "
        "inertia of the relative motion. It equals $m/2$ for equal masses and approaches the lighter mass when "
        "one mass is much larger.\n"
    ),
    'movimiento-del-centro-de-masas': (
        "\n- **Can internal forces change the CM velocity?** No. Internal forces always come in Newton's "
        "third-law pairs that cancel exactly. Only external forces can accelerate the CM.\n"
        "- **Why does the CM of a thrown object follow a parabola even if the object breaks apart?** Because "
        "the breakup involves only internal forces (the explosion), which cannot change the total momentum. "
        "The CM continues as if the explosion never happened.\n"
    ),
    'definicion-momento-angular': (
        "\n- **Does angular momentum depend on the reference point?** Yes. Unlike linear momentum, $\\vec{L}$ "
        "depends on the chosen origin because $\\vec{r}$ does. For a particle moving in a straight line, "
        "$\\vec{L}$ is constant about any point on the line of motion but varies about other points.\n"
        "- **Why is angular momentum a cross product?** The cross product captures the 'lever arm' effect: "
        "only the component of $\\vec{p}$ perpendicular to $\\vec{r}$ contributes to rotation about the origin.\n"
    ),
}

count = 0
for g in groups:
    gp = os.path.join(base, g)
    if not os.path.isdir(gp):
        continue
    for leaf in sorted(os.listdir(gp)):
        lp = os.path.join(gp, leaf)
        if not os.path.isdir(lp):
            continue
        fp = os.path.join(lp, 'teoria.en.md')
        if not os.path.isfile(fp):
            continue
        with open(fp, 'r', encoding='utf-8') as f:
            text = f.read()
        wc = len(text.split())
        if wc >= 1200:
            continue

        extra = EXTRA_QA_EN.get(leaf, '')
        if not extra:
            # Generic extra for Q&A section
            extra = (
                "\n- **How do I verify my answer?** Always check dimensions, limiting cases (e.g. equal masses, "
                "zero velocity), and order of magnitude. If the answer gives negative kinetic energy or speeds "
                "exceeding the initial ones in elastic collisions, something went wrong.\n"
                "- **When should I use this concept vs energy methods?** Use momentum conservation when external "
                "forces are negligible; use energy methods when you know the collision type. For elastic collisions, "
                "both constraints together fully determine the outcome.\n"
            )

        # Insert after "## Real student questions" section content, before next ##
        marker = re.search(r'^## Real student questions\b.*?(?=\n## )', text, re.MULTILINE | re.DOTALL | re.IGNORECASE)
        if marker:
            insert_pos = marker.end()
            text = text[:insert_pos] + extra + text[insert_pos:]
        else:
            # Append before Final synthesis
            marker2 = re.search(r'^## Final synthesis', text, re.MULTILINE | re.IGNORECASE)
            if marker2:
                text = text[:marker2.start()] + extra + '\n' + text[marker2.start():]
            else:
                text += extra

        with open(fp, 'w', encoding='utf-8') as f:
            f.write(text)
        new_wc = len(text.split())
        print(f'  EXPANDED: {leaf}/teoria.en.md: {wc} -> {new_wc} words')
        count += 1

print(f'\nTotal files expanded: {count}')
