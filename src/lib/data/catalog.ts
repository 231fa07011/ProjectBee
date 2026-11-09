import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  // ==============================================================================
  // 1. PHYSICS (WORKING MODELS & EXPERIMENTS)
  // ==============================================================================
  {
    id: 'prod-phy-001',
    sku: 'PB-PHY-HYD-01',
    slug: 'working-hydraulic-lift-model',
    title: 'Working Hydraulic Lift Model',
    shortDescription: 'Pre-assembled dual-cylinder fluid transmission platform demonstrating Pascal’s Law in real-time.',
    fullDescription: 'The ProjectBee Working Hydraulic Lift is our most popular middle-school physics exhibition model. Engineered with twin medical-grade fluid pistons and clear flexible tubing mounted on a durable wooden demonstration chassis, this model enables students to lift weights up to 500 grams with a feather-touch press. Includes pre-printed viva prompt cards explaining pressure distribution equations.',
    packageContents: [
      'Pre-assembled wooden scissor-lift chassis with smooth pivot hinges',
      'Dual sealed 20ml pressure syringes connected with reinforced silicon tubing',
      'Non-toxic fluid chamber with red indicator fluid',
      'Laminated "Pascal’s Principle" Concept Display Standee (A5 size)',
      '10-Question Student Viva Preparation Pocket Card'
    ],
    preparationGuide: 'The hydraulic lift arrives fully pre-assembled and pre-filled with bubble-free fluid. Simply place on the exhibition table, position the demonstration weight on the top platform, and gently depress the driver syringe.',
    safetyNotes: '100% child safe. Uses non-staining water-based vegetable dyed fluid. No glass or sharp metal edges.',
    vivaConcepts: [
      'State Pascal’s Law: Pressure applied to an enclosed fluid is transmitted undiminished in all directions.',
      'Why is liquid used instead of air? Liquids are virtually incompressible, ensuring instant force transfer.',
      'What are real-world applications? Hydraulic car brakes, aircraft landing gear, heavy construction excavators.'
    ],
    dimensionsCm: '24 x 16 x 22',
    weightGrams: 480,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 89900,
    sellingPricePaise: 64900,
    ratingAvg: 4.9,
    ratingCount: 38,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-p1-1', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', altText: 'Working Hydraulic Lift Model', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9],
    subjects: ['physics'],
    stockOnHand: 25
  },
  {
    id: 'prod-phy-002',
    sku: 'PB-PHY-MAG-02',
    slug: 'electromagnetic-crane-working-model',
    title: 'Electromagnetic Scrap Metal Crane Working Model',
    shortDescription: 'Industrial boom crane with battery-activated electromagnet demonstrating magnetic fields created by electric current.',
    fullDescription: 'Demonstrate Hans Christian Ørsted’s law of electromagnetism! This rotating wooden jib crane features a soft-iron core wrapped with insulated copper solenoid coils. Press the push-button switch to energize the magnetic field and pick up paperclips or iron nuts; release the button to de-energize and drop the scrap load into the salvage hopper.',
    packageContents: [
      'Pre-assembled wooden rotating boom crane with functional pulley string winch',
      'High-flux soft-iron solenoid electromagnet head with indicator LED',
      'Spring-loaded momentary push-button magnetic activator',
      'Box of safe zinc-plated test washers and paperclips',
      '9V Battery snap and power circuit',
      'Viva Q&A sheet: Fleming’s Right-Hand Rule and Solenoid Magnetic Flux'
    ],
    preparationGuide: 'Rotate crane arm over metal washers, depress the trigger button to pick them up, swing arm, and release button to drop.',
    safetyNotes: 'Low voltage circuit. Soft edges and child-safe materials.',
    vivaConcepts: [
      'What is an electromagnet? A temporary magnet whose magnetic field is created by electric current through a coil.',
      'How to increase magnetic strength? Increase current, increase number of coil turns, or use a soft iron core.',
      'Why use electromagnets in cranes? Allows instant releasing of heavy scrap metals by cutting power.'
    ],
    dimensionsCm: '26 x 14 x 28',
    weightGrams: 460,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 84900,
    sellingPricePaise: 59900,
    ratingAvg: 4.8,
    ratingCount: 31,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-p2-1', url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80', altText: 'Electromagnetic Crane Picking Up Scrap Metal', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9, 10],
    subjects: ['physics'],
    stockOnHand: 20
  },
  {
    id: 'prod-phy-003',
    sku: 'PB-PHY-LEV-03',
    slug: 'magnetic-levitation-maglev-train-model',
    title: 'Magnetic Levitation (Maglev) Frictionless Train Model',
    shortDescription: 'Zero-friction train car levitating seamlessly over a neodymium magnetic track rail demonstrating repulsive forces.',
    fullDescription: 'Showcase high-speed bullet train technology! Uses precision-aligned high-grade ceramic and neodymium magnetic track strips with opposing polarities. The aerodynamic model carriage floats 8mm in mid-air and glides along the 60cm track with a gentle fingertip nudge.',
    packageContents: [
      '60cm dual-polarity magnetic guide track on rigid wooden base',
      'Levitating train carriage with integrated undercarriage repelling magnets',
      'Clear acrylic lateral guide walls to prevent derailment',
      'Concept Display Board explaining urban transit and magnetic repulsion',
      'Viva guide covering Lenz’s Law and superconduction principles'
    ],
    preparationGuide: 'Place carriage onto track. Gently nudge from one end to witness frictionless propulsion.',
    safetyNotes: 'Magnets are firmly glued and sealed. Safe for primary & middle school students.',
    vivaConcepts: [
      'How does Maglev work? Like magnetic poles (N-N or S-S) repel each other, lifting the train off the track.',
      'What are the advantages over standard trains? Zero wheel friction allows higher speeds, quieter ride, and zero mechanical wear.',
      'Which countries operate commercial Maglev? Japan, China (Shanghai Transrapid), and South Korea.'
    ],
    dimensionsCm: '62 x 10 x 12',
    weightGrams: 520,
    formatId: 'science_fair_display',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 119900,
    sellingPricePaise: 84900,
    ratingAvg: 4.9,
    ratingCount: 45,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-p3-1', url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80', altText: 'Maglev Train Levitating Over Track', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [5, 6, 7, 8, 9, 10],
    subjects: ['physics'],
    stockOnHand: 18
  },
  {
    id: 'prod-phy-004',
    sku: 'PB-PHY-PER-04',
    slug: 'working-submarine-periscope-optics-model',
    title: 'Working Submarine Periscope (Law of Reflection)',
    shortDescription: 'Optical viewing device with dual 45-degree planar mirrors demonstrating multiple reflections and covert surveillance.',
    fullDescription: 'Make optics and reflection crystal clear! Designed like a naval submarine periscope, this model features dual high-clarity optical mirrors set at precise 45-degree angles inside an adjustable height rectangular column. Students can look over walls or around corners without being seen.',
    packageContents: [
      'Sturdy telescoping dual-mirror optical body with matte anti-reflective interior',
      'Two pre-aligned glass front-surface reflection mirrors',
      'Ray Diagram Concept Card showing 90-degree light path deflection',
      'Optics Viva Examination Card: Angle of Incidence equals Angle of Reflection'
    ],
    preparationGuide: 'Look into bottom eyepiece while aiming top viewport over obstacles.',
    safetyNotes: 'Mirrors are secured inside non-breakable housing with rounded corners.',
    vivaConcepts: [
      'What angle are the mirrors placed at? 45 degrees to the incident light path, producing total 90-degree turn per mirror.',
      'State the Laws of Reflection: Angle of incidence = Angle of reflection; incident ray, reflected ray, and normal lie on same plane.',
      'Where are periscopes used? Submarines, military armored tanks, and trench observation.'
    ],
    dimensionsCm: '10 x 10 x 42',
    weightGrams: 340,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 54900,
    sellingPricePaise: 39900,
    ratingAvg: 4.7,
    ratingCount: 28,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      { id: 'img-p4-1', url: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80', altText: 'Submarine Optical Periscope Model', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [4, 5, 6, 7, 8],
    subjects: ['physics'],
    stockOnHand: 30
  },
  {
    id: 'prod-phy-005',
    sku: 'PB-PHY-NEW-05',
    slug: 'newtons-cradle-momentum-conservation-model',
    title: 'Newton’s Cradle (Conservation of Momentum & Energy)',
    shortDescription: 'High-precision steel collision balls demonstrating elastic collision, kinetic energy, and momentum conservation.',
    fullDescription: 'A classic demonstration of Sir Isaac Newton’s Third Law of Motion and Conservation of Momentum. Features 5 mirror-polished stainless steel bearing balls suspended on high-tensile monofibers from a wooden plinth. Pull back 1 ball and release — exactly 1 ball shoots out on the opposite end!',
    packageContents: [
      'Solid wooden weighted foundation base with stainless steel suspension arches',
      '5 Mirror-polished precision-weighted bearing spheres',
      'A5 Exhibition Card: Elastic Collisions and Momentum Equation (p = mv)',
      '10-Point Viva Prompt Sheet on Kinetic Energy and Conservation of Energy'
    ],
    preparationGuide: 'Pull 1 or 2 balls to the side and release cleanly without twisting.',
    safetyNotes: 'Heavy solid balls. Safe desktop display.',
    vivaConcepts: [
      'What principle does it demonstrate? Conservation of Linear Momentum and Conservation of Kinetic Energy.',
      'State Newton’s 3rd Law: For every action, there is an equal and opposite reaction.',
      'What is an elastic collision? A collision where total kinetic energy and momentum are conserved.'
    ],
    dimensionsCm: '18 x 15 x 18',
    weightGrams: 650,
    formatId: 'science_fair_display',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 79900,
    sellingPricePaise: 54900,
    ratingAvg: 4.8,
    ratingCount: 36,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-p5-1', url: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80', altText: 'Newtons Cradle Steel Balls in Motion', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9, 10, 11],
    subjects: ['physics'],
    stockOnHand: 22
  },
  {
    id: 'prod-phy-006',
    sku: 'PB-PHY-CIR-06',
    slug: 'series-and-parallel-circuit-demonstration-board',
    title: 'Series & Parallel Electrical Circuit Demonstration Board',
    shortDescription: 'Hands-on electrical test board with knife switches and lamps demonstrating voltage division and current branching.',
    fullDescription: 'The ultimate practical board for CBSE & ICSE Class 6–10 electricity chapters. Includes dual brass knife switches, 3 miniature bulb sockets, voltmeter probe terminals, and clear wiring routes showing how removing a bulb in series breaks the entire circuit, while in parallel other bulbs stay illuminated.',
    packageContents: [
      'Pre-mounted wooden circuit breadboard with clear labeled schematic silkscreen',
      '3 Screw-base incandescent miniature lamps with ceramic holders',
      'Dual brass knife switches for Series and Parallel selection',
      'Battery box for 2x AA batteries with polarity protection',
      'Ohm’s Law & Kirchhoff’s Laws laminated formula card'
    ],
    preparationGuide: 'Insert batteries. Close Series switch to show dim lighting across 3 bulbs. Close Parallel switch to show independent maximum brightness.',
    safetyNotes: 'Safe low voltage 3V DC. No shock hazard.',
    vivaConcepts: [
      'Why is home wiring connected in parallel? So appliances can operate independently at full 220V voltage without turning off others.',
      'What happens to equivalent resistance in series? R_total = R1 + R2 + R3 (resistance increases).',
      'State Ohm’s Law: V = IR at constant temperature.'
    ],
    dimensionsCm: '25 x 18 x 6',
    weightGrams: 380,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 69900,
    sellingPricePaise: 49900,
    ratingAvg: 4.8,
    ratingCount: 41,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-p6-1', url: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=800&q=80', altText: 'Series and Parallel Circuit Board', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9, 10],
    subjects: ['physics'],
    stockOnHand: 35
  },
  {
    id: 'prod-phy-007',
    sku: 'PB-PHY-PIN-07',
    slug: 'pinhole-camera-inverted-image-formation-model',
    title: 'Pinhole Camera (Rectilinear Propagation of Light)',
    shortDescription: 'Sliding focus chamber showing real, inverted image formation through a sub-millimeter light aperture.',
    fullDescription: 'Demonstrates that light travels in straight lines! Features an inner sliding tube with a translucent frosted glass screen and an outer opaque box with a laser-cut pinhole. Aim toward a bright window, lamp, or candle flame to view a crisp, upside-down color image on the screen.',
    packageContents: [
      'Dual-tube sliding focal length optical body with light-shielding velvet liner',
      'Laser-bored micro aperture pinhole lens plate',
      'Frosted translucent ground glass projection screen',
      'Exhibition concept card on optics, ray optics, and early photography history'
    ],
    preparationGuide: 'Point towards brightly lit window or outdoor tree. Slide inner tube backward/forward to adjust image size.',
    safetyNotes: 'Completely safe. No glass breaking risk (acrylic frosted sheet).',
    vivaConcepts: [
      'Why is the image inverted? Light rays from top and bottom of object cross each other at the pinhole aperture.',
      'What is rectilinear propagation? The property of light traveling in strictly straight lines.',
      'What happens if the pinhole is made larger? Image gets brighter but blurry due to overlapping light rays.'
    ],
    dimensionsCm: '20 x 8 x 8',
    weightGrams: 220,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 49900,
    sellingPricePaise: 34900,
    ratingAvg: 4.7,
    ratingCount: 19,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      { id: 'img-p7-1', url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80', altText: 'Pinhole Camera Optical Experiment', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [5, 6, 7, 8],
    subjects: ['physics'],
    stockOnHand: 25
  },
  {
    id: 'prod-phy-008',
    sku: 'PB-PHY-MOT-08',
    slug: 'working-dc-electric-motor-fleming-left-hand-model',
    title: 'Working DC Electric Motor (Fleming’s Left-Hand Rule)',
    shortDescription: 'Open-chassis functional electric motor with copper armature, split-ring commutator, and visible magnetic stator.',
    fullDescription: 'Essential physics model for Class 8–10 magnetic effects of electric current! Features a bare enamelled copper armature coil balanced on brass commutator brushes between two strong permanent ceramic magnets. Flip the power switch and watch the coil spin at 1200 RPM, demonstrating the motor effect in real time.',
    packageContents: [
      'Pre-mounted wooden motor demonstration base with terminal binding posts',
      'Hand-wound insulated copper armature coil on steel spindle',
      'Split-ring commutator assembly with phosphor bronze brushes',
      'Dual permanent stator field magnets',
      'Fleming’s Left-Hand Rule 3D Finger Guide Card (Thumb = Motion, First Finger = Field, Second Finger = Current)'
    ],
    preparationGuide: 'Connect 1.5V or 3V battery to binding posts. Give armature gentle initial spin to initiate continuous rotation.',
    safetyNotes: 'Low voltage battery operation only. Safe rounded components.',
    vivaConcepts: [
      'What is the function of the split-ring commutator? Reverses current direction in the coil every half-rotation to maintain continuous spin.',
      'State Fleming’s Left-Hand Rule: Relates Magnetic Field (forefinger), Current (center finger), and Force/Motion (thumb).',
      'Where are DC motors used? Electric vehicles, fans, drills, toys, blenders.'
    ],
    dimensionsCm: '16 x 12 x 12',
    weightGrams: 310,
    formatId: 'working_model',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 79900,
    sellingPricePaise: 54900,
    ratingAvg: 4.9,
    ratingCount: 34,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-p8-1', url: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80', altText: 'DC Electric Motor Model Demonstration', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [7, 8, 9, 10],
    subjects: ['physics'],
    stockOnHand: 28
  },
  {
    id: 'prod-phy-009',
    sku: 'PB-PHY-TIR-09',
    slug: 'total-internal-reflection-optical-fiber-model',
    title: 'Total Internal Reflection (TIR) & Fiber Optic Light Pipe',
    shortDescription: 'Laser-guided acrylic wave transmission showing critical angle and modern optical fiber internet technology.',
    fullDescription: 'Explain modern high-speed broadband in an intuitive optical display! A safe Class-1 red laser pointer beams through a curved transparent optical acrylic rod and flexible fiber cable. Students witness how the light bounces internally along the curve without leaking, demonstrating Total Internal Reflection and the Critical Angle.',
    packageContents: [
      'Curved high-purity optical grade acrylic light guide rod on display mount',
      'Multi-strand fiber optic fountain spray illuminating tip',
      'Eye-safe battery-powered 650nm Red Laser demonstration module with clamp',
      'Snell’s Law & Critical Angle formula display card',
      '10-Question Viva sheet on telecommunication fiber networks'
    ],
    preparationGuide: 'Align laser into the intake port of the acrylic rod. Dim room light slightly for dramatic glow effect along curve.',
    safetyNotes: 'Low-power eye-safe laser. Do not stare directly into beam.',
    vivaConcepts: [
      'What are two conditions for Total Internal Reflection? Light must travel from denser to rarer medium, and angle of incidence must exceed critical angle.',
      'How does fiber optic internet work? Laser pulses carrying digital data bounce through glass core at nearly speed of light.',
      'What other phenomenon is caused by TIR? Mirages in deserts, sparkling of diamonds, endoscopes in medicine.'
    ],
    dimensionsCm: '25 x 15 x 15',
    weightGrams: 360,
    formatId: 'working_model',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 89900,
    sellingPricePaise: 64900,
    ratingAvg: 4.9,
    ratingCount: 21,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      { id: 'img-p9-1', url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80', altText: 'Fiber Optic Total Internal Reflection', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [8, 9, 10, 11, 12],
    subjects: ['physics'],
    stockOnHand: 16
  },
  {
    id: 'prod-phy-010',
    sku: 'PB-PHY-AST-10',
    slug: 'solar-system-3d-orbiting-model',
    title: 'Solar System 3D Orbiting Planetarium Model',
    shortDescription: 'Motorized mechanical model: 8 detailed planets orbiting an illuminated central Sun showing planetary alignment.',
    fullDescription: 'Turn space science into an unforgettable experience! Features a glowing central LED Sun surrounded by all 8 orbiting planets (Mercury, Venus, Earth with Moon, Mars, Jupiter, Saturn with ring, Uranus, Neptune) accurately painted and mounted on independent geared rotating arms.',
    packageContents: [
      'Central illuminated Sun sphere with warm-glow LED lamp',
      '8 Color-painted planetary spheres with relative size proportions',
      'Independent radial orbit arms with planetary distance calibration',
      'Heavy weighted circular base with battery compartment and master switch',
      'Planetary Facts Pocket Encyclopedia Card (Orbital period, moons, temperatures)'
    ],
    preparationGuide: 'Insert 2x AA batteries (included). Switch on to light up the central Sun and watch planetary alignments.',
    safetyNotes: 'Safe rounded planetary spheres, no choking hazards for primary school children.',
    vivaConcepts: [
      'What keeps planets in orbit? The gravitational pull of the Sun acting as centripetal force.',
      'Which is the hottest planet and why? Venus, due to runaway greenhouse effect from thick CO2 atmosphere.',
      'Which planet has the shortest year? Mercury (orbits the Sun in just 88 Earth days).'
    ],
    dimensionsCm: '30 x 30 x 24',
    weightGrams: 490,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 99900,
    sellingPricePaise: 69900,
    ratingAvg: 4.9,
    ratingCount: 58,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-p10-1', url: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80', altText: 'Solar System 3D Planetarium Model', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [1, 2, 3, 4, 5, 6],
    subjects: ['physics'],
    stockOnHand: 35
  },

  // ==============================================================================
  // 2. BIOLOGY (HUMAN ANATOMY, BOTANY, CELL BIOLOGY)
  // ==============================================================================
  {
    id: 'prod-bio-001',
    sku: 'PB-BIO-LUN-01',
    slug: 'human-respiratory-system-working-lungs-model',
    title: 'Human Respiratory System & Diaphragm Working Model',
    shortDescription: 'Interactive bell-jar anatomical lung model demonstrating inhalation, exhalation, and diaphragm mechanics.',
    fullDescription: 'Make human biology tangible! Pull down the flexible rubber diaphragm at the base to witness the twin lung balloons inflate instantly as atmospheric air rushes through the transparent bronchial Y-tube, simulating negative pressure thoracic respiration.',
    packageContents: [
      'Transparent acrylic chest-cavity chamber with airtight rubber seal',
      'Clear bronchial bifurcation Y-tube mimicking trachea and bronchi',
      'Twin high-durability latex lung balloons',
      'Flexible silicone diaphragm pull-membrane with ergonomic grip handle',
      'Laminated Full-Color Human Respiratory System Anatomical Diagram (A4)',
      'Viva questions sheet covering gaseous exchange and alveoli function'
    ],
    preparationGuide: 'Ready to display immediately. Grasp the diaphragm pull-handle at the base and gently pull downward to demonstrate inhalation, release to demonstrate exhalation.',
    safetyNotes: 'Completely non-hazardous. Food-grade plastic and latex materials.',
    vivaConcepts: [
      'What happens during inhalation? Diaphragm contracts and moves downward, chest volume increases, pressure drops.',
      'Where does actual gas exchange happen? In microscopic alveoli sacs surrounded by pulmonary capillaries.',
      'What percentage of oxygen is inhaled vs exhaled? Inhaled ~21% O2, Exhaled ~16% O2 and 4% CO2.'
    ],
    dimensionsCm: '18 x 18 x 26',
    weightGrams: 320,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 69900,
    sellingPricePaise: 49900,
    ratingAvg: 4.7,
    ratingCount: 42,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-b1-1', url: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80', altText: 'Human Respiratory System Working Model', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [4, 5, 6, 7, 8],
    subjects: ['biology'],
    stockOnHand: 30
  },
  {
    id: 'prod-bio-002',
    sku: 'PB-BIO-HEA-02',
    slug: 'human-heart-4-chamber-working-pumping-model',
    title: 'Working 4-Chamber Human Heart Pumping Model',
    shortDescription: 'Interactive fluid pump model with one-way valves demonstrating double circulation (oxygenated vs deoxygenated blood).',
    fullDescription: 'The premier cardiovascular exhibition display for CBSE & ICSE Class 8–10! Features transparent chambers for Right Atrium, Right Ventricle, Left Atrium, and Left Ventricle. Squeezing hand pump bulbs circulates red and blue indicator fluids through model pulmonary and systemic pathways without backflow.',
    packageContents: [
      'Anatomically accurate transparent 4-chamber heart with labeled coronary landmarks',
      'Dual squeeze bulbs with non-return silicone flapper valves',
      'Red (oxygenated) and Blue (deoxygenated) non-toxic circulating fluid solutions',
      'Heavy wooden display podium with high-gloss anatomical legend',
      'Comprehensive Viva Card on Double Circulation and Cardiac Cycle'
    ],
    preparationGuide: 'Depress the right squeeze bulb to pump blue fluid into pulmonary artery, depress left bulb to pump red fluid through systemic aorta.',
    safetyNotes: 'Non-toxic food-grade fluid. Sealed leak-proof tubes.',
    vivaConcepts: [
      'What is double circulation? Blood passes through the heart twice in one complete cycle (Pulmonary and Systemic).',
      'Why does the left ventricle have thicker walls? It must pump blood at high pressure to the entire body, whereas right ventricle only pumps to nearby lungs.',
      'What is the function of the bicuspid/tricuspid valves? Prevent backflow of blood from ventricles back into atria.'
    ],
    dimensionsCm: '28 x 20 x 24',
    weightGrams: 580,
    formatId: 'working_model',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 129900,
    sellingPricePaise: 89900,
    ratingAvg: 4.9,
    ratingCount: 52,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-b2-1', url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80', altText: 'Human Heart Working Pumping Model', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [7, 8, 9, 10, 11, 12],
    subjects: ['biology'],
    stockOnHand: 18
  },
  {
    id: 'prod-bio-003',
    sku: 'PB-BIO-KID-03',
    slug: 'working-human-kidney-dialysis-excretory-model',
    title: 'Working Kidney & Dialysis Excretory Filtration Model',
    shortDescription: 'Functional nephron filtration model demonstrating selective reabsorption, urea separation, and bladder collection.',
    fullDescription: 'Make human excretion easy to understand! Pour murky fluid (simulating blood carrying metabolic waste) into the renal artery intake; watch the multi-stage nephron membrane separate waste into the yellow urine reservoir while clean red fluid returns through the renal vein.',
    packageContents: [
      'Translucent acrylic dual-kidney & bladder anatomical cross-section mount',
      'Semi-permeable filtration cartridge mimicking Bowman’s capsule and glomerulus',
      'Simulated metabolic waste solution and measuring pipettes',
      'Laminated Nephron Micro-Anatomy Diagram (Glomerulus, Loop of Henle, Collecting Duct)',
      '10-Point Viva Prompt Card on Dialysis and Renal Physiology'
    ],
    preparationGuide: 'Pour test fluid into renal artery funnel and observe separation into urine collecting flask.',
    safetyNotes: 'Food-safe indicator colors. Non-toxic.',
    vivaConcepts: [
      'What is the basic functional unit of the kidney? The Nephron (approximately 1 million per kidney).',
      'What is ultrafiltration? High-pressure filtration of blood across glomerular capillaries into Bowman’s capsule.',
      'What is hemodialysis? Artificial filtering of blood through a machine when kidneys fail.'
    ],
    dimensionsCm: '26 x 18 x 22',
    weightGrams: 490,
    formatId: 'working_model',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 109900,
    sellingPricePaise: 79900,
    ratingAvg: 4.8,
    ratingCount: 27,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-b3-1', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', altText: 'Human Kidney Filtration Working Model', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [7, 8, 9, 10, 11],
    subjects: ['biology'],
    stockOnHand: 15
  },
  {
    id: 'prod-bio-004',
    sku: 'PB-BIO-DNA-04',
    slug: 'dna-double-helix-3d-structural-model',
    title: 'DNA Double Helix 3D Structural Anatomy Model',
    shortDescription: 'Color-coded base-pair 3D model displaying Adenine-Thymine and Guanine-Cytosine hydrogen bonds with major/minor grooves.',
    fullDescription: 'An indispensable visual aid for Class 9–12 genetics and cell biology curricula. Features accurately paired nitrogenous bases (Adenine-Thymine with double bonds, Guanine-Cytosine with triple bonds), sugar-phosphate helical backbones, and a 360-degree rotating base stand for flawless exhibition presentation.',
    packageContents: [
      'Precision-molded double helix model with color-coded nitrogenous base pairs',
      'Sturdy heavy-base wooden rotating exhibition stand',
      'Detailed Base-Pair Legend Card (Adenine, Thymine, Guanine, Cytosine)',
      'Class 10/12 Genetics Board Exam Viva Q&A Guide'
    ],
    preparationGuide: 'Model comes mounted on the stand. Rotate gently during the exhibition viva to explain helicity and nucleotide spacing.',
    safetyNotes: 'Durable non-toxic plastic and wood construction.',
    vivaConcepts: [
      'State Chargaff’s Rule: Amount of Adenine equals Thymine (A=T), and Guanine equals Cytosine (G≡C).',
      'What holds the two strands together? Weak hydrogen bonds between complementary base pairs.',
      'Who discovered the double helix? James Watson and Francis Crick in 1953, based on Rosalind Franklin’s X-ray photo.'
    ],
    dimensionsCm: '16 x 16 x 38',
    weightGrams: 410,
    formatId: 'science_fair_display',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 99900,
    sellingPricePaise: 74900,
    ratingAvg: 4.9,
    ratingCount: 26,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      { id: 'img-b4-1', url: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80', altText: 'DNA Double Helix 3D Structure Model', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [9, 10, 11, 12],
    subjects: ['biology'],
    stockOnHand: 14
  },
  {
    id: 'prod-bio-005',
    sku: 'PB-BIO-CEL-05',
    slug: 'plant-cell-vs-animal-cell-3d-comparative-model',
    title: 'Plant Cell vs Animal Cell 3D Comparative Anatomy Model',
    shortDescription: 'Side-by-side 3D cross-section model highlighting chloroplasts, cell walls, vacuoles, mitochondria, and nuclei.',
    fullDescription: 'The definitive cell biology model for CBSE & ICSE Class 8–10 practicals and exhibitions. Displays large hand-painted cross-sections of a plant cell and animal cell on a single comparative platform with labelled organelle flags and key anatomical differentiators.',
    packageContents: [
      'Dual comparative cell cross-section platform with high-relief 3D organelles',
      '15 Numbered organelle pointer flags (Mitochondria, Chloroplast, Golgi apparatus, Vacuole, etc.)',
      'Full-Color Laminated Cell Anatomy Chart with Organelle Function Table',
      'Board Viva Questions Card on Cell Organelles and Osmosis'
    ],
    preparationGuide: 'Ready to display immediately. Match the numbered indicator flags with the organelle key during teacher viva questions.',
    safetyNotes: 'Durable non-toxic polymer construction.',
    vivaConcepts: [
      'What are 3 differences between plant and animal cells? Plant cells have cell walls, chloroplasts, and large central vacuoles; animal cells do not.',
      'Why are mitochondria called powerhouse of the cell? They generate cellular ATP through aerobic respiration.',
      'What is the function of chloroplasts? Site of photosynthesis containing chlorophyll pigments.'
    ],
    dimensionsCm: '28 x 18 x 14',
    weightGrams: 370,
    formatId: 'science_fair_display',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 89900,
    sellingPricePaise: 64900,
    ratingAvg: 4.8,
    ratingCount: 22,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      { id: 'img-b5-1', url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80', altText: 'Plant Cell vs Animal Cell 3D Science Fair Model', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [8, 9, 10],
    subjects: ['biology'],
    stockOnHand: 18
  },
  {
    id: 'prod-bio-006',
    sku: 'PB-BIO-DIG-06',
    slug: 'human-digestive-system-working-marble-food-model',
    title: 'Human Digestive System Working Peristalsis Model',
    shortDescription: 'Alimentary canal model demonstrating peristaltic contraction, enzyme action zones, and nutrient absorption path.',
    fullDescription: 'From mouth to stomach, liver, pancreas, small intestine, and colon! Demonstrates food bolus movement through the esophagus and shows exact locations where bile, pepsin, and pancreatic amylase break down carbohydrates, proteins, and fats.',
    packageContents: [
      'Large relief anatomical torso showing entire digestive tract in vivid relief',
      'Flexible transparent esophagus demonstrating bolus peristalsis mechanism',
      'Detachable color-coded liver and gallbladder organs',
      'Digestive Enzyme Chart (Salivary Amylase, Pepsin, Lipase, Trypsin)',
      'Class 9/10 Life Processes Board Viva Questions Card'
    ],
    preparationGuide: 'Drop the model food sphere into the oral cavity and demonstrate gentle compression along the esophagus.',
    safetyNotes: 'Non-toxic plastic parts.',
    vivaConcepts: [
      'What is peristalsis? Involuntary rhythmic contraction of circular and longitudinal smooth muscles in gut wall.',
      'Where does complete digestion occur? In the small intestine with help of bile, pancreatic juice, and intestinal juice.',
      'What are villi? Microscopic finger-like projections in small intestine that increase surface area for nutrient absorption.'
    ],
    dimensionsCm: '32 x 20 x 12',
    weightGrams: 510,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 89900,
    sellingPricePaise: 64900,
    ratingAvg: 4.8,
    ratingCount: 31,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-b6-1', url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80', altText: 'Human Digestive System Model Display', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [5, 6, 7, 8, 9, 10],
    subjects: ['biology'],
    stockOnHand: 22
  },
  {
    id: 'prod-bio-007',
    sku: 'PB-BIO-BRN-07',
    slug: 'human-brain-3d-anatomical-functional-lobes-model',
    title: 'Human Brain 3D Functional Lobes & Nervous System Model',
    shortDescription: 'Multi-part separable brain model displaying frontal, parietal, occipital, temporal lobes, cerebellum, and brainstem.',
    fullDescription: 'An exceptional neuroscience project for high schoolers. Features 8 separable magnetic anatomical parts allowing judges to peer inside the cerebral cortex, corpus callosum, hippocampus, thalamus, and pituitary gland with distinct functional color mappings.',
    packageContents: [
      '8-Part hand-painted human brain replica with magnetic alignment pins',
      'Display cradle base with cranial nerve exit markings',
      'Brain Anatomy Reference Key (Frontal lobe: Decision; Occipital: Vision; Cerebellum: Balance)',
      '10-Point Nervous System Board Exam Viva Sheet'
    ],
    preparationGuide: 'Disassemble hemispheres to show medial sagittal cross-section during viva presentations.',
    safetyNotes: 'Durable medical grade PVC. Shatterproof.',
    vivaConcepts: [
      'What is the function of the Cerebellum? Coordinates voluntary muscle movements, posture, and motor balance.',
      'Which lobe processes visual stimuli? The Occipital lobe at the rear of the cerebral cortex.',
      'What protects the brain? The bony cranium, three meninges (dura, arachnoid, pia mater), and cerebrospinal fluid.'
    ],
    dimensionsCm: '16 x 14 x 15',
    weightGrams: 620,
    formatId: 'science_fair_display',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 119900,
    sellingPricePaise: 84900,
    ratingAvg: 4.9,
    ratingCount: 35,
    isFeatured: true,
    isPopular: false,
    requiresAssembly: false,
    images: [
      { id: 'img-b7-1', url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80', altText: 'Human Brain Anatomy Model Display', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [8, 9, 10, 11, 12],
    subjects: ['biology'],
    stockOnHand: 16
  },
  {
    id: 'prod-bio-008',
    sku: 'PB-BIO-EYE-08',
    slug: 'human-eye-anatomy-optical-lens-model',
    title: 'Human Eye Anatomy & Optical Lens Focusing Model',
    shortDescription: 'Dissectible eye model with interchangeable lenses demonstrating normal vision, myopia, and hypermetropia correction.',
    fullDescription: 'Demonstrates both biology and physics! Includes a 6-part dissectible eye model revealing the cornea, iris, crystalline lens, vitreous humor, and retina. A sliding optical bench demonstrates how concave lenses correct myopia (nearsightedness) and convex lenses correct hypermetropia.',
    packageContents: [
      '6-Part dissectible eye on stand with removable crystalline lens',
      'Optical bench guide with miniature corrective eyeglasses',
      'Retinal blind spot and optic nerve demonstration card',
      'Board Exam Viva Sheet on Defects of Vision and Accommodation'
    ],
    preparationGuide: 'Align light ray through model lens onto the retinal wall. Insert concave lens to show focal adjustment.',
    safetyNotes: 'Smooth rounded non-glass optical components.',
    vivaConcepts: [
      'What is myopia? Defect where light focuses in front of the retina; corrected using concave lens.',
      'What are rods and cones? Photoreceptor cells in retina; rods detect dim light/shapes, cones detect color.',
      'What is persistence of vision? The impression of an image remains on the retina for 1/16th of a second.'
    ],
    dimensionsCm: '20 x 14 x 16',
    weightGrams: 410,
    formatId: 'working_model',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 99900,
    sellingPricePaise: 69900,
    ratingAvg: 4.8,
    ratingCount: 29,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-b8-1', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', altText: 'Human Eye Model Demonstration', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [7, 8, 9, 10],
    subjects: ['biology', 'physics'],
    stockOnHand: 20
  },
  {
    id: 'prod-bio-009',
    sku: 'PB-BIO-PHT-09',
    slug: 'photosynthesis-oxygen-production-gas-collector-model',
    title: 'Photosynthesis & Oxygen Bubble Production Lab Kit',
    shortDescription: 'Inverted funnel apparatus demonstrating oxygen gas evolution by aquatic Hydrilla plants under sunlight.',
    fullDescription: 'The classic biology experiment for CBSE Class 7–10! Includes a clear glass beaker, inverted glass funnel, graduated test tube, and an illuminated light source that triggers real photosynthesis in water plants, collecting pure oxygen bubbles at the top of the tube that rekindle a glowing incense splint.',
    packageContents: [
      'Heavy-wall borosilicate clear beaker with support stand',
      'Inverted optical funnel and graduated oxygen gas collector tube',
      'Aquatic plant holding basket with simulated sodium bicarbonate nutrient tablet',
      'Oxygen gas glowing splint confirmation test guide',
      'Viva Q&A sheet on Light vs Dark reactions of Photosynthesis'
    ],
    preparationGuide: 'Fill beaker with water, add a pinch of baking soda (CO2 source), place plant under funnel, and shine lamp. Watch oxygen bubbles form in minutes.',
    safetyNotes: 'Child-safe experimental setup.',
    vivaConcepts: [
      'Write the balanced equation for photosynthesis: 6CO2 + 6H2O + Sunlight -> C6H12O6 + 6O2.',
      'Why add sodium bicarbonate to water? It dissolves to provide dissolved Carbon Dioxide necessary for photosynthesis.',
      'How to prove the collected gas is oxygen? It rekindles a glowing wooden incense splint into active flame.'
    ],
    dimensionsCm: '22 x 15 x 28',
    weightGrams: 470,
    formatId: 'diy_kit',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 64900,
    sellingPricePaise: 44900,
    ratingAvg: 4.7,
    ratingCount: 23,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: true,
    estimatedAssemblyMins: 5,
    images: [
      { id: 'img-b9-1', url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80', altText: 'Photosynthesis Oxygen Bubble Lab Experiment', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9, 10],
    subjects: ['biology'],
    stockOnHand: 25
  },
  {
    id: 'prod-bio-010',
    sku: 'PB-BIO-STM-10',
    slug: 'stomata-transpiration-water-loss-potometer-model',
    title: 'Plant Stomata & Transpiration (Ganong’s Potometer)',
    shortDescription: 'Working Ganong’s Potometer measuring water absorption rate and stomatal transpiration under varying conditions.',
    fullDescription: 'Demonstrate plant transpiration pull! Features a calibrated horizontal capillary tube with an air bubble index. As leafy twigs transpire water through microscopic stomata, the air bubble travels along the millimeter scale, allowing quantitative measurement of water uptake under wind, shade, or bright light.',
    packageContents: [
      'Calibrated glass/acrylic Ganong’s Potometer with integrated reservoir tap',
      'Heavy cast base support stand',
      'Microscope slide with stained plant epidermal peel showing guard cells',
      'Transpiration Pull & Stomatal Mechanism Viva Guide'
    ],
    preparationGuide: 'Insert leafy shoot into rubber stopper, introduce single air bubble into capillary tube, and measure speed of bubble with stopwatch.',
    safetyNotes: 'Water-based experiment.',
    vivaConcepts: [
      'What is transpiration? The loss of water in the form of vapor from aerial parts of plants, mostly through stomata.',
      'What factors increase transpiration rate? High temperature, high wind speed, low humidity, bright sunlight.',
      'What is transpiration pull? Suction force created by water evaporation that pulls water from roots up to leaves.'
    ],
    dimensionsCm: '24 x 12 x 20',
    weightGrams: 360,
    formatId: 'working_model',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 79900,
    sellingPricePaise: 54900,
    ratingAvg: 4.8,
    ratingCount: 18,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      { id: 'img-b10-1', url: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80', altText: 'Plant Stomata Transpiration Potometer', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [8, 9, 10, 11],
    subjects: ['biology'],
    stockOnHand: 17
  },

  // ==============================================================================
  // 3. ENVIRONMENTAL SCIENCE & RENEWABLE ENERGY
  // ==============================================================================
  {
    id: 'prod-evs-001',
    sku: 'PB-EVS-SOL-01',
    slug: 'solar-and-wind-hybrid-renewable-energy-generator',
    title: 'Solar & Wind Hybrid Renewable Energy Power Plant',
    shortDescription: 'Dual green energy model: Solar photovoltaic panel + working wind turbine powering LED mini-streetlights.',
    fullDescription: 'A premier green energy project for school science exhibitions. Features an authentic monocrystalline solar cell alongside a rotating aerodynamic wind turbine connected to a low-friction DC dynamo generator. As sunlight shines on the solar panel or a breeze spins the turbine, dual high-efficiency LEDs light up a model eco-village.',
    packageContents: [
      'Eco-village wooden diorama base with painted green zones and miniature houses',
      'Monocrystalline 5V 100mA solar panel with angle adjustment stand',
      '3-blade aerodynamic wind turbine with ultra-low friction DC micro-dynamo',
      'Dual-channel power combiner board with diode backflow protection',
      'Illuminated LED miniature street lamp posts',
      'Exhibition display plaque: "Decarbonizing India: Hybrid Clean Energy"'
    ],
    preparationGuide: 'Exhibition tip: Can be demonstrated indoors under a warm desk lamp (or torch) to trigger solar LEDs, or a simple hand-held fan / breath to spin the wind turbine.',
    safetyNotes: 'Low-voltage DC. Safe for primary and middle school students.',
    vivaConcepts: [
      'Why combine solar and wind? Solar generates peak energy during sunny days, wind complements during night and monsoon.',
      'What is the photovoltaic effect? Photons hitting semiconductor material knock electrons free to produce current.',
      'What are India’s renewable targets? Aiming for 500 GW non-fossil capacity by 2030.'
    ],
    dimensionsCm: '30 x 22 x 25',
    weightGrams: 620,
    formatId: 'science_fair_display',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 139900,
    sellingPricePaise: 99900,
    ratingAvg: 4.9,
    ratingCount: 51,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-e1-1', url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80', altText: 'Solar and Wind Hybrid Energy Science Project', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9, 10],
    subjects: ['environmental-science', 'physics'],
    stockOnHand: 15
  },
  {
    id: 'prod-evs-002',
    sku: 'PB-EVS-RAIN-02',
    slug: 'rainwater-harvesting-filtration-model',
    title: 'Rainwater Harvesting & Multi-Stage Filtration Working Model',
    shortDescription: 'Complete rooftop catchment model with multi-layer gravity sand-charcoal-gravel filter and recharge well reservoir.',
    fullDescription: 'The gold-standard EVS project for environmental sustainability and municipal water conservation. Demonstrates catchment from an angled cottage roof, conveyance through gutters, filtration through graded gravel, charcoal, and fine silica sand layers, and storage in a clean water sump with overflow recharge into the groundwater table.',
    packageContents: [
      'Detailed cottage house model with angled roof gutter and downspout',
      'Transparent 3-stage filtration tower containing coarse gravel, activated charcoal, and quartz sand',
      'Underground clean water storage reservoir with clear inspection window',
      'Perforated groundwater recharge pit module',
      'Laminated infographic banner: "Save Every Drop: Rainwater Harvesting Guidelines"'
    ],
    preparationGuide: 'Pour water with watering pitcher onto the cottage roof. Watch water channel through gutters into the filtration column and collect clean water in the sump.',
    safetyNotes: 'Completely clean materials. Natural quartz sand and non-toxic charcoal.',
    vivaConcepts: [
      'What are the 3 main components? Catchment surface (roof), conveyance system (gutters), storage/recharge well.',
      'Why is activated charcoal used in filtration? It adsorbs odors, impurities, and dissolved organic compounds.',
      'How does this recharge aquifers? Overflow water is diverted directly into deep porous subsoil pits.'
    ],
    dimensionsCm: '32 x 22 x 20',
    weightGrams: 580,
    formatId: 'science_fair_display',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 109900,
    sellingPricePaise: 79900,
    ratingAvg: 4.9,
    ratingCount: 47,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-e2-1', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=800&q=80', altText: 'Rainwater Harvesting Science Fair Project', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [5, 6, 7, 8, 9],
    subjects: ['environmental-science'],
    stockOnHand: 25
  },
  {
    id: 'prod-evs-003',
    sku: 'PB-EVS-CYC-03',
    slug: 'working-water-cycle-evaporation-condensation-model',
    title: 'Working Water Cycle (Evaporation & Condensation Dome)',
    shortDescription: 'Enclosed environmental dome demonstrating evaporation, condensation, precipitation, and collection cycle.',
    fullDescription: 'Watch the water cycle in action inside a tabletop biosphere! Heated water vapor rises from the mini ocean basin, condenses on the cooled cloud canopy dome, and falls as raindrops over terraced mountains into rivers that flow back to the ocean.',
    packageContents: [
      'Airtight transparent cloud condensation canopy with simulated cloud topography',
      'Terraced mountain landform basin with painted river channel',
      'Mini temperature contrast ice-pack canopy holder',
      'Non-toxic blue water indicator dye',
      'Illustrated Water Cycle Diagram Card (Evaporation, Transpiration, Condensation, Precipitation)'
    ],
    preparationGuide: 'Pour warm water into the ocean reservoir. Place ice cubes on the upper cloud tray. Watch real water droplets form on the ceiling and precipitate onto the mountains within 5 minutes.',
    safetyNotes: 'Food-safe plastic chamber. Child safe.',
    vivaConcepts: [
      'What are the 4 stages of the water cycle? Evaporation, Condensation, Precipitation, Collection.',
      'What is transpiration? Evaporation of water from the leaves and stomata of plants.',
      'How do clouds form? Water vapor cools and condenses onto tiny microscopic dust particles in the atmosphere.'
    ],
    dimensionsCm: '24 x 24 x 18',
    weightGrams: 420,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 79900,
    sellingPricePaise: 54900,
    ratingAvg: 4.8,
    ratingCount: 39,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-e3-1', url: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80', altText: 'Working Water Cycle Science Project', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [4, 5, 6, 7],
    subjects: ['environmental-science'],
    stockOnHand: 28
  },
  {
    id: 'prod-evs-004',
    sku: 'PB-EVS-BIO-04',
    slug: 'biogas-anaerobic-digester-methane-model',
    title: 'Biogas (Gobar Gas) Anaerobic Digester Working Model',
    shortDescription: 'Functional mini-digester with gas holder dome demonstrating organic waste breakdown into flammable methane gas.',
    fullDescription: 'Demonstrates rural clean energy and waste-to-wealth in India! Model incorporates an organic slurry mixing inlet, sealed anaerobic digestion chamber with floating inverted gas collector drum, and a miniature demonstration burner nozzle.',
    packageContents: [
      'Sealed transparent anaerobic fermentation tank with water-trap seal',
      'Floating telescopic methane gas collector dome with pressure gauge',
      'Slurry mixing funnel and digested bio-fertilizer effluent overflow tray',
      'Concept Card: Methanogenic Bacteria and Bio-CNG applications',
      'Rural Energy & Swachh Bharat Mission Viva Card'
    ],
    preparationGuide: 'Can be demonstrated dry with air syringe pressure, or loaded with vegetable pulp and yeast for live demonstration.',
    safetyNotes: 'Completely safe demonstration apparatus.',
    vivaConcepts: [
      'What is biogas composed of? ~55–70% Methane (CH4), 30–45% Carbon Dioxide (CO2), traces of H2S.',
      'What bacteria produces methane? Methanogenic bacteria operating in absence of oxygen (anaerobic).',
      'What is the byproduct used for? Digested slurry makes nutrient-rich organic manure/fertilizer.'
    ],
    dimensionsCm: '26 x 18 x 25',
    weightGrams: 510,
    formatId: 'working_model',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 99900,
    sellingPricePaise: 69900,
    ratingAvg: 4.8,
    ratingCount: 33,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-e4-1', url: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=80', altText: 'Biogas Digester Working Model', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [7, 8, 9, 10],
    subjects: ['environmental-science'],
    stockOnHand: 20
  },
  {
    id: 'prod-evs-005',
    sku: 'PB-EVS-HYD-05',
    slug: 'hydroelectric-dam-power-generation-model',
    title: 'Hydroelectric Dam & Pelton Turbine Generator Model',
    shortDescription: 'Water reservoir gravity dam with penstock sluice gate spinning a mini-turbine to power miniature city grid.',
    fullDescription: 'Demonstrates conversion of gravitational potential energy into kinetic and electrical energy! Fill the elevated reservoir; releasing the sluice gate sends high-velocity water through the penstock tube against a multi-cup Pelton turbine wheel, spinning a dynamo to illuminate streetlights.',
    packageContents: [
      'Elevated dam reservoir structure with calibrated penstock nozzle',
      'Clear acrylic Pelton turbine housing with waterproof dynamo generator',
      'Catchment tailrace recirculating basin with drain valve',
      'Model city transmission power lines with micro LEDs',
      'Hydroelectric Power in India Viva Guide (Bhakra Nangal, Tehri, Sardar Sarovar)'
    ],
    preparationGuide: 'Pour 500ml water into upper reservoir and turn the valve. Water jet spins turbine and illuminates LEDs.',
    safetyNotes: 'Water-safe non-corrosive materials. Low-voltage generation.',
    vivaConcepts: [
      'What is the energy conversion chain? Potential Energy (stored water) -> Kinetic Energy (falling water) -> Mechanical Energy (turbine) -> Electrical Energy (generator).',
      'What is a Pelton wheel? An impulse water turbine with spoon-shaped buckets designed for high-head water drops.',
      'Is hydroelectric power renewable? Yes, because the water cycle continuously replenishes the reservoir through rainfall.'
    ],
    dimensionsCm: '30 x 20 x 30',
    weightGrams: 690,
    formatId: 'working_model',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 129900,
    sellingPricePaise: 89900,
    ratingAvg: 4.9,
    ratingCount: 44,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-e5-1', url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80', altText: 'Hydroelectric Dam Science Project', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9, 10],
    subjects: ['environmental-science', 'physics'],
    stockOnHand: 18
  },
  {
    id: 'prod-evs-006',
    sku: 'PB-EVS-POL-06',
    slug: 'air-pollution-electrostatic-smog-precipitator-model',
    title: 'Electrostatic Smoke & Air Pollution Precipitator Model',
    shortDescription: 'Industrial smoke chamber using high-voltage electrostatic ionization to trap airborne particulate matter (PM2.5/PM10).',
    fullDescription: 'Address urban air quality issues! Inside an enclosed clear acrylic chimney, students generate safe smoke from an incense cone. Flipping on the electrostatic precipitator grid charges the smoke particulates, pulling them instantly onto grounded collector plates and leaving clean exhaust air.',
    packageContents: [
      'Transparent smoke chimney chamber with airtight rubber seals',
      'Electrostatic ionizing wire grid with collector electrode plates',
      'High-voltage micro-generator module (safe micro-amperage current)',
      'Box of safe fragrant testing incense cones',
      'Air Quality Index (AQI) & PM2.5/PM10 Industrial Mitigation Concept Chart'
    ],
    preparationGuide: 'Place lit cone in base tray, fill chamber with smoke, then flick power switch. Smoke vanishes onto collector plates in 2 seconds.',
    safetyNotes: 'Encapsulated circuit with micro-amp current. Zero shock hazard. Adult supervision recommended when lighting incense.',
    vivaConcepts: [
      'How does an electrostatic precipitator work? High voltage gives particulate matter a negative charge; they are attracted to positively grounded collection plates.',
      'Where is this used in real life? Coal-fired thermal power plants, cement factories, and steel mills.',
      'What are PM2.5 and PM10? Particulate matter smaller than 2.5 and 10 micrometers that cause respiratory illnesses.'
    ],
    dimensionsCm: '18 x 18 x 30',
    weightGrams: 510,
    formatId: 'working_model',
    difficulty: 'advanced',
    status: 'published',
    mrpPaise: 119900,
    sellingPricePaise: 84900,
    ratingAvg: 4.8,
    ratingCount: 22,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      { id: 'img-e6-1', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80', altText: 'Electrostatic Air Pollution Precipitator Model', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [8, 9, 10, 11, 12],
    subjects: ['environmental-science', 'physics'],
    stockOnHand: 14
  },
  {
    id: 'prod-evs-007',
    sku: 'PB-EVS-SWH-07',
    slug: 'solar-water-heater-thermosiphon-circulation-model',
    title: 'Solar Water Heater (Thermosiphon Principle) Working Model',
    shortDescription: 'Blackened copper collector tube array with insulated storage tank heating water purely through solar radiation.',
    fullDescription: 'Demonstrate natural thermosiphon water circulation without pumps! Cold water from the bottom of an insulated storage tank flows through a matte-black solar collector plate. As sunlight heats the water, its density decreases, causing it to naturally rise into the top of the storage tank.',
    packageContents: [
      'Glazed matte-black copper solar absorption collector box with glass top',
      'Double-walled insulated hot water storage tank with clear water level tube',
      'Analog dual dial thermometers measuring inlet and outlet water temperatures',
      'Laminated Solar Thermal Energy vs Photovoltaic Comparison Display'
    ],
    preparationGuide: 'Fill tank with room-temperature water. Place in sun or under bright halogen desk lamp. Check temperature rise within 15 minutes.',
    safetyNotes: 'Water temperature reaches safe warm levels (~45-50°C). Child safe.',
    vivaConcepts: [
      'What is the Thermosiphon effect? Natural circulation of liquid caused by temperature and density differences without a mechanical pump.',
      'Why is the collector painted matte black? Black surfaces absorb maximum electromagnetic radiation across visible and infrared spectrums.',
      'How does the glass cover help? Creates a mini greenhouse effect, trapping long-wavelength infrared heat inside.'
    ],
    dimensionsCm: '28 x 20 x 20',
    weightGrams: 460,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 89900,
    sellingPricePaise: 64900,
    ratingAvg: 4.7,
    ratingCount: 25,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      { id: 'img-e7-1', url: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80', altText: 'Solar Water Heater Model Demonstration', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9],
    subjects: ['environmental-science'],
    stockOnHand: 19
  },
  {
    id: 'prod-evs-008',
    sku: 'PB-EVS-WAS-08',
    slug: 'smart-waste-segregation-metal-dry-wet-model',
    title: 'Smart Waste Segregation Machine (Dry, Wet & Metal)',
    shortDescription: 'Conveyor sorting mechanism with capacitive and inductive proximity sensors sorting trash into 3 bins automatically.',
    fullDescription: 'A premier Swachh Bharat science fair project! Waste placed on a motor-driven conveyor passes under an inductive proximity sensor (detecting metal) and a moisture probe (detecting organic wet waste). Servo flipper arms automatically divert each item into designated Dry, Wet, or Recyclable Metal bins.',
    packageContents: [
      'Wooden conveyor belt assembly with 5V DC geared motor',
      'Inductive metal detection sensor and analog moisture sensor module',
      'Micro-servo flipper sorting arm mechanism',
      '3 Color-coded miniature municipal waste bins (Green = Wet, Blue = Dry, Red = Metal)',
      'Solid Waste Management Rules in Urban India Display Poster'
    ],
    preparationGuide: 'Place sample bottle caps or paper scraps on conveyor. System automatically sorts each into its matching bin.',
    safetyNotes: '9V battery powered. Safe rounded edges.',
    vivaConcepts: [
      'Why is waste segregation important at source? Prevents recyclable materials from rotting in landfills and enables composting of wet organic waste.',
      'How does the inductive proximity sensor detect metal? Generates high-frequency electromagnetic field; eddy currents in metal alter oscillation amplitude.',
      'What is India’s daily municipal solid waste generation? Over 150,000 tonnes per day.'
    ],
    dimensionsCm: '35 x 18 x 16',
    weightGrams: 640,
    formatId: 'working_model',
    difficulty: 'advanced',
    status: 'published',
    mrpPaise: 149900,
    sellingPricePaise: 104900,
    ratingAvg: 4.9,
    ratingCount: 39,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-e8-1', url: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80', altText: 'Smart Waste Segregation Model', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [7, 8, 9, 10, 11, 12],
    subjects: ['environmental-science', 'robotics-ai'],
    stockOnHand: 16
  },

  // ==============================================================================
  // 4. ROBOTICS, SENSORS & AUTOMATION
  // ==============================================================================
  {
    id: 'prod-rob-001',
    sku: 'PB-ROB-IRR-01',
    slug: 'smart-irrigation-soil-moisture-model',
    title: 'Smart Automated Irrigation System (Soil Sensor + Pump)',
    shortDescription: 'Smart agriculture working model: Automatically triggers a mini-submersible water pump when soil moisture drops below threshold.',
    fullDescription: 'Demonstrate the future of water conservation and precision farming. This automated system incorporates a corrosion-resistant soil moisture probe, transistorized relay comparator circuit, and a 5V mini-water pump that draws water from a reservoir to hydrate plant pots automatically when dry soil is detected.',
    packageContents: [
      'Pre-wired comparator control board with LED moisture status indicators',
      'Dual-pronged soil moisture probe with insulated leads',
      '5V DC submersible micro-pump with silicone delivery conduit',
      'Dual-compartment plant acrylic tray (Dry Soil zone vs Hydrated zone)',
      '9V Battery with pre-soldered snap connector and master switch',
      'Science exhibition banner card: "IoT & Automation in Indian Agriculture"'
    ],
    preparationGuide: 'Insert probe into soil cup. Fill reservoir with water. Switch on. Pump automatically runs when soil dries.',
    safetyNotes: 'Low voltage battery operation. Safe water isolation.',
    vivaConcepts: [
      'How does the moisture sensor work? Soil electrical conductivity increases with moisture content.',
      'What problem does this solve in India? Prevents water wastage in over-irrigation and prevents crop drought.',
      'What is drip irrigation? Direct root hydration with up to 70% water savings.'
    ],
    dimensionsCm: '28 x 20 x 18',
    weightGrams: 550,
    formatId: 'working_model',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 129900,
    sellingPricePaise: 94900,
    ratingAvg: 4.8,
    ratingCount: 29,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-r1-1', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', altText: 'Smart Automated Irrigation Model', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [7, 8, 9, 10, 11, 12],
    subjects: ['robotics-ai', 'environmental-science'],
    stockOnHand: 18
  },
  {
    id: 'prod-rob-002',
    sku: 'PB-ROB-LDR-02',
    slug: 'automatic-street-light-ldr-circuit-kit',
    title: 'Automatic Night Sensing Street Light (LDR Sensor)',
    shortDescription: 'Smart sensor model: Street lights automatically illuminate when ambient darkness falls and extinguish in daylight.',
    fullDescription: 'Teach light-dependent resistors and transistor switching! This model features an LDR sensor hooked up to an NPN transistor switch circuit. In daylight, the street lights remain off; cover the LDR with your hand or turn down the room lights, and the ultra-bright street LEDs automatically illuminate.',
    packageContents: [
      'Wooden road diorama base with painted road markings and zebra crossing',
      'Miniature street light lamp poles with warm-white LED clusters',
      'Light Dependent Resistor (LDR) sensor module with potentiometer sensitivity adjustment',
      'Pre-assembled transistorized relay switching board',
      '9V Battery snap with on/off isolation switch',
      'Laminated Circuit Diagram and Viva Explanation Sheet'
    ],
    preparationGuide: 'Cover sensor with palm — street lamps turn on instantly. Expose to room light — lamps extinguish.',
    safetyNotes: 'No soldering required. Low voltage components.',
    vivaConcepts: [
      'What is an LDR? A photo-resistor whose resistance drops dramatically as light intensity increases.',
      'How does the transistor act as a switch? When base voltage exceeds 0.7V, it conducts collector current to LEDs.',
      'How does this save municipal power? Eliminates human error in manual streetlight switching.'
    ],
    dimensionsCm: '25 x 15 x 18',
    weightGrams: 390,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 74900,
    sellingPricePaise: 54900,
    ratingAvg: 4.8,
    ratingCount: 33,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-r2-1', url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80', altText: 'Automatic Street Light LDR Model in dark', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [7, 8, 9, 10],
    subjects: ['robotics-ai', 'physics'],
    stockOnHand: 22
  },
  {
    id: 'prod-rob-003',
    sku: 'PB-ROB-OBS-03',
    slug: 'obstacle-avoiding-ultrasonic-robot-car',
    title: 'Obstacle Avoiding Ultrasonic Autonomous Robot Car',
    shortDescription: 'Self-driving 2-wheel chassis car using HC-SR04 sonar pulses to navigate around barriers automatically without crashing.',
    fullDescription: 'Introduce autonomous robotics and echolocation! Incorporates an ultrasonic transceiver emitting 40kHz sound waves. When an obstacle is detected within 15cm, the onboard logic circuit halts both geared DC motors, reverses, pivots 45 degrees, and resumes forward pathfinding.',
    packageContents: [
      'Laser-cut acrylic 2WD robotic chassis with geared motors and rubber grip wheels',
      'HC-SR04 Ultrasonic Sonar transducer module mounted on scanning bracket',
      'Motor driver and microcontroller navigation logic board',
      'Dual 18650 lithium battery pack and safe USB charging module',
      'Viva Q&A sheet on Echolocation, RADAR, and Autonomous Self-Driving Cars'
    ],
    preparationGuide: 'Turn on power switch on car chassis and set on classroom floor. Place books or obstacles in path to show autonomous avoidance.',
    safetyNotes: 'Rubber wheels and low profile, safe for classroom exhibitions.',
    vivaConcepts: [
      'How does ultrasonic distance sensing work? Speed of sound in air (340 m/s) * Time difference between pulse emission and echo return divided by 2.',
      'What animals use echolocation in nature? Bats, dolphins, and certain subterranean shrew species.',
      'What sensors do real autonomous cars use? LiDAR, Radar, Ultrasonic parking sensors, and high-resolution cameras.'
    ],
    dimensionsCm: '20 x 16 x 14',
    weightGrams: 480,
    formatId: 'working_model',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 149900,
    sellingPricePaise: 109900,
    ratingAvg: 4.9,
    ratingCount: 46,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-r3-1', url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80', altText: 'Obstacle Avoiding Ultrasonic Robot Car', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [7, 8, 9, 10, 11, 12],
    subjects: ['robotics-ai'],
    stockOnHand: 17
  },
  {
    id: 'prod-rob-004',
    sku: 'PB-ROB-FIR-04',
    slug: 'fire-alarm-flame-sensor-sprinkler-model',
    title: 'Automatic Fire Alarm & Water Extinguisher Model',
    shortDescription: 'Infrared flame sensor model that detects fire flare within 1 second, sounding a loud buzzer and triggering water mist.',
    fullDescription: 'Demonstrates building safety automation. An optical infrared flame phototransistor tuned to the 760nm–1100nm infrared radiation spectrum of open flames immediately activates an audible 85dB piezoelectric siren and spins a pump to spray fire-suppression water mist.',
    packageContents: [
      'Wooden model building facade with simulated fire zone and clear safety shield',
      'Optical infrared flame photodiode sensor with sensitivity calibration knob',
      'Piezoelectric 85dB alarm siren and high-brightness strobe LED',
      'Micro-pump fire extinguisher water nozzle module',
      'Fire Safety Regulations & Disaster Management Display Poster'
    ],
    preparationGuide: 'Bring lit match or cigarette lighter within 30cm of sensor window to trigger alarm and pump.',
    safetyNotes: 'Tested with safety shroud. Adult supervision required during fire testing.',
    vivaConcepts: [
      'How does the flame sensor detect fire? Measures specific infrared wavelengths emitted by burning hydrocarbons.',
      'What are the 3 elements of the Fire Triangle? Fuel, Heat, and Oxygen (removing any one extinguishes the fire).',
      'What are Class A, B, C fire extinguishers? A: Wood/Paper; B: Flammable Liquids; C: Electrical/Gas fires.'
    ],
    dimensionsCm: '26 x 18 x 20',
    weightGrams: 510,
    formatId: 'working_model',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 99900,
    sellingPricePaise: 69900,
    ratingAvg: 4.8,
    ratingCount: 31,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-r4-1', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=800&q=80', altText: 'Fire Alarm System Working Model', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9, 10],
    subjects: ['robotics-ai', 'physics'],
    stockOnHand: 20
  },
  {
    id: 'prod-rob-005',
    sku: 'PB-ROB-SAN-05',
    slug: 'touchless-automatic-hand-sanitizer-dispenser-model',
    title: 'Touchless Infrared Hand Sanitizer Dispenser Model',
    shortDescription: 'Contactless hygiene dispenser using infrared reflection to squirt measured sanitizer droplets when hand is presented.',
    fullDescription: 'A popular public health engineering project! Place your hand under the infrared proximity nozzle; the infrared beam reflects off your palm into the photo-receiver, activating a timer-controlled peristaltic pump that dispenses a precise 1ml dose of liquid sanitizer without physical contact.',
    packageContents: [
      'Desktop acrylic dispenser kiosk with clear reservoir view window',
      'Infrared optical proximity emitter and receiver pair',
      'Low-noise 5V micro-peristaltic dosing pump',
      'Refillable 150ml sanitizer reservoir flask',
      'Infection Control & Public Hygiene Post-Pandemic Science Fair Chart'
    ],
    preparationGuide: 'Fill reservoir with plain water (or sanitizer). Place palm under nozzle — pump dispenses a single measured spray.',
    safetyNotes: 'Non-toxic, safe liquid dispensing.',
    vivaConcepts: [
      'How does contactless IR sensing work? An IR LED emits infrared light; when an object gets close, reflected light triggers the photodiode.',
      'Why are touchless dispensers critical in hospitals? Eliminates fomite surface transmission of pathogens.',
      'What percentage alcohol is required in effective sanitizer? At least 60% ethyl alcohol or 70% isopropyl alcohol.'
    ],
    dimensionsCm: '16 x 14 x 26',
    weightGrams: 390,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 84900,
    sellingPricePaise: 59900,
    ratingAvg: 4.8,
    ratingCount: 37,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-r5-1', url: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80', altText: 'Touchless Automatic Sanitizer Dispenser', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [5, 6, 7, 8, 9, 10],
    subjects: ['robotics-ai', 'biology'],
    stockOnHand: 25
  },
  {
    id: 'prod-rob-006',
    sku: 'PB-ROB-EQK-06',
    slug: 'earthquake-seismic-vibration-detector-model',
    title: 'Earthquake Seismic Vibration Detector & Alarm Model',
    shortDescription: 'Inverted pendulum seismograph that detects ground micro-tremors, triggering an audible alarm and flashing LED.',
    fullDescription: 'Demonstrate seismic wave detection and structural engineering! Features a weighted inertia pendulum suspended inside an electrical contact ring. When the table or floor vibrates, the inertial mass makes contact with the perimeter copper ring, completing a circuit that sounds an early-warning earthquake siren.',
    packageContents: [
      'Seismological observation platform with leveling bubble indicator',
      'Brass weighted inertia pendulum suspended on flexible beryllium copper spring',
      'Adjustable seismic threshold contact ring',
      'Loud warning buzzer and red alert beacon LED',
      'Richter Scale & P-Wave / S-Wave Propagation Display Poster'
    ],
    preparationGuide: 'Tap or shake the table surface. The suspended pendulum swings, touches the perimeter ring, and sounds the alarm.',
    safetyNotes: 'Completely safe electrical mechanism.',
    vivaConcepts: [
      'What are P-waves and S-waves? Primary (P) waves are longitudinal compressional waves; Secondary (S) waves are slower transverse shear waves.',
      'How does an inertial seismograph work? The heavy pendulum tends to stay still due to inertia while the surrounding ground moves.',
      'What is the Richter scale? A logarithmic scale measuring the total energy released by an earthquake.'
    ],
    dimensionsCm: '20 x 16 x 22',
    weightGrams: 420,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 79900,
    sellingPricePaise: 54900,
    ratingAvg: 4.7,
    ratingCount: 26,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      { id: 'img-r6-1', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', altText: 'Earthquake Vibration Detector Model', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9, 10],
    subjects: ['robotics-ai', 'physics'],
    stockOnHand: 21
  },

  // ==============================================================================
  // 5. CHEMISTRY (REACTIONS, LAB KITS & EXPERIMENTAL MODELS)
  // ==============================================================================
  {
    id: 'prod-che-001',
    sku: 'PB-CHE-VOL-01',
    slug: 'volcano-eruption-chemical-reaction-kit',
    title: 'Volcanic Eruption & Acid-Base Reaction Science Kit',
    shortDescription: 'Exciting realistic volcano crater model with child-safe fizzing lava reaction reagents and educational geological cross-section.',
    fullDescription: 'The perennial favorite for primary and middle school science fairs! Features a realistic textured ceramic-resin volcanic mountain with a hidden eruption chamber. Includes safe food-grade effervescent reagents (baking soda, citric acid, and red organic foaming dye) that produce bubbling red lava when mixed with warm water.',
    packageContents: [
      'Realistic textured mountain crater model with wide spill-containment tray',
      'Child-safe effervescent chemical reagent packs (Sodium Bicarbonate + Citric Crystals)',
      'Non-staining natural red volcanic foaming agent',
      'Safety safety goggles and mini-measuring beaker',
      'Geology explanation booklet: Magma chambers, tectonic plates, and the Ring of Fire'
    ],
    preparationGuide: 'Place 1 scoop of lava powder inside the crater chamber. Add 20ml of lukewarm water from the beaker. Watch foaming red lava flow down the mountain terraces!',
    safetyNotes: '100% food-grade reagents. Non-toxic, non-corrosive, skin-safe. Safety goggles included.',
    vivaConcepts: [
      'What chemical reaction produces the lava? Acid-Base reaction releasing Carbon Dioxide (CO2) gas.',
      'What is the difference between magma and lava? Magma is molten rock underground; lava is molten rock after erupting onto the surface.',
      'What are active, dormant, and extinct volcanoes? Active erupt regularly, dormant haven’t erupted recently but may, extinct will never erupt.'
    ],
    dimensionsCm: '22 x 22 x 18',
    weightGrams: 520,
    formatId: 'diy_kit',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 59900,
    sellingPricePaise: 39900,
    ratingAvg: 4.7,
    ratingCount: 64,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: true,
    estimatedAssemblyMins: 10,
    images: [
      { id: 'img-c1-1', url: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&w=800&q=80', altText: 'Volcano Eruption Science Experiment Kit', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [3, 4, 5, 6, 7],
    subjects: ['chemistry', 'environmental-science'],
    stockOnHand: 40
  },
  {
    id: 'prod-che-002',
    sku: 'PB-CHE-ELE-02',
    slug: 'electrolysis-of-water-hydrogen-oxygen-generator',
    title: 'Hoffmann Electrolysis of Water (Hydrogen & Oxygen Generator)',
    shortDescription: 'Hoffmann voltameter apparatus showing 2:1 volume decomposition of water into hydrogen and oxygen gas.',
    fullDescription: 'Demonstrate fundamental electrochemistry and clean hydrogen fuel! Water with electrolyte is dissociated into Hydrogen gas (cathode) and Oxygen gas (anode) using inert titanium electrodes. Students observe the exact 2:1 volume ratio collected in graduated cylinders.',
    packageContents: [
      'Graduated dual gas collection column voltameter with stopcock valves',
      'Dual corrosion-resistant platinum/titanium mesh electrode electrodes',
      'Solid non-conductive laboratory test stand',
      'Electrolyte salt pack (Sodium Sulfate, non-corrosive)',
      'Hydrogen & Oxygen Pop-Sound Ignition Test Guide'
    ],
    preparationGuide: 'Dissolve electrolyte salt in water, fill column, and connect 9V battery. Gas bubbles evolve immediately at both electrodes.',
    safetyNotes: 'Food-safe electrolyte salt. Safe low-volume gas production.',
    vivaConcepts: [
      'What is the chemical equation for water electrolysis? 2H2O (l) -> 2H2 (g) + O2 (g).',
      'Why is the hydrogen volume twice the oxygen volume? Water contains 2 hydrogen atoms for every 1 oxygen atom (H2O).',
      'At which electrode is hydrogen collected? At the negative cathode (H+ cations gain electrons to form H2 gas).'
    ],
    dimensionsCm: '18 x 14 x 32',
    weightGrams: 460,
    formatId: 'working_model',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 99900,
    sellingPricePaise: 69900,
    ratingAvg: 4.8,
    ratingCount: 28,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-c2-1', url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80', altText: 'Electrolysis of Water Apparatus', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [8, 9, 10, 11, 12],
    subjects: ['chemistry'],
    stockOnHand: 18
  },
  {
    id: 'prod-che-003',
    sku: 'PB-CHE-PHL-03',
    slug: 'natural-ph-indicators-acids-and-bases-lab-kit',
    title: 'Acids, Bases & Natural pH Indicators Laboratory Kit',
    shortDescription: 'Color-shifting chemistry kit using Red Cabbage anthocyanin, Litmus, and Turmeric to map pH from 1 to 14.',
    fullDescription: 'Discover the colorful world of acid-base indicators! Includes pre-portioned safe test household reagents (citric acid, vinegar, baking soda, soap solution, calcium carbonate) and natural organic indicators that turn brilliant red, purple, green, and yellow across the pH scale.',
    packageContents: [
      '6 Shatterproof transparent test tubes with acrylic test tube rack',
      'Natural Red Cabbage Anthocyanin extract indicator solution',
      'Turmeric paper and Universal pH paper strips with full-color comparator chart',
      'Pre-portioned safe test acid and base reagent vials with mini pipettes',
      'Acid-Base Neutralization & Everyday pH Science Fair Poster'
    ],
    preparationGuide: 'Add 3 drops of indicator to each tube to witness immediate rainbow color spectrum transitions.',
    safetyNotes: 'Food-grade safe reagents. Non-toxic. Safety glasses included.',
    vivaConcepts: [
      'What does pH stand for? Potential of Hydrogen; measures H+ ion concentration on scale 0–14.',
      'What color does turmeric turn in a base? Deep reddish-brown (which is why soap turns turmeric curry stains red).',
      'What is neutralization? Reaction between acid and base producing salt and water (Acid + Base -> Salt + Water).'
    ],
    dimensionsCm: '24 x 16 x 14',
    weightGrams: 390,
    formatId: 'diy_kit',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 69900,
    sellingPricePaise: 49900,
    ratingAvg: 4.8,
    ratingCount: 32,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: true,
    estimatedAssemblyMins: 5,
    images: [
      { id: 'img-c3-1', url: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80', altText: 'pH Indicators Color Spectrum Chemistry Kit', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9, 10],
    subjects: ['chemistry'],
    stockOnHand: 30
  },
  {
    id: 'prod-che-004',
    sku: 'PB-CHE-RUS-04',
    slug: 'rusting-of-iron-environmental-factors-kit',
    title: 'Rusting of Iron (Air vs Moisture vs Salt) 4-Tube Model',
    shortDescription: 'Controlled scientific experiment isolating air, moisture, and anhydrous drying agents to demonstrate corrosion.',
    fullDescription: 'The definitive textbook experiment for Class 7–10 corrosion! Features 4 sealed test tubes containing iron nails subjected to different environments: Tube A (Air + Water), Tube B (Boiled water + Oil seal = No air), Tube C (Anhydrous CaCl2 = No moisture), Tube D (Saltwater = Fast corrosion).',
    packageContents: [
      '4 Acrylic high-clarity test tubes with airtight silicone stoppers',
      'Polished non-rusted iron nails',
      'Anhydrous Calcium Chloride drying agent and vegetable oil sealing layer',
      'Sturdy display test-tube rack with labeled experiment cards',
      'Corrosion Prevention (Galvanization, Electroplating) Board Exam Viva Card'
    ],
    preparationGuide: 'Assemble 4 tubes following instructions 3 days before exhibition to show vivid rust contrast to judges.',
    safetyNotes: 'Non-toxic, safe household-grade chemistry.',
    vivaConcepts: [
      'What 2 conditions are mandatory for rusting? Oxygen and Water.',
      'What is rust chemically? Hydrated Iron(III) Oxide: Fe2O3.xH2O.',
      'How to prevent rusting? Galvanizing (zinc coating), painting, greasing, sacrificial protection, and stainless steel alloying.'
    ],
    dimensionsCm: '20 x 10 x 18',
    weightGrams: 280,
    formatId: 'science_fair_display',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 54900,
    sellingPricePaise: 39900,
    ratingAvg: 4.7,
    ratingCount: 20,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: true,
    estimatedAssemblyMins: 10,
    images: [
      { id: 'img-c4-1', url: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&w=800&q=80', altText: 'Rusting of Iron Environmental Factors Kit', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9, 10],
    subjects: ['chemistry'],
    stockOnHand: 24
  },

  // ==============================================================================
  // 6. MATHEMATICS (GEOMETRIC MODELS, THEOREMS & MEASUREMENT)
  // ==============================================================================
  {
    id: 'prod-mat-001',
    sku: 'PB-MAT-PYT-01',
    slug: 'pythagoras-theorem-liquid-displacement-model',
    title: 'Pythagoras Theorem Liquid Displacement Demonstration Model',
    shortDescription: 'Rotating geometric model: Fluid from square on hypotenuse perfectly fills squares on base and perpendicular (a² + b² = c²).',
    fullDescription: 'Make abstract geometry visual and irrefutable! Features a rotating circular acrylic housing containing a central right-angled triangle flanked by hollow square chambers on each of its three sides. Colored fluid in the large Hypotenuse square (c²) drains exactly into the two smaller squares (a² + b²) when rotated 180 degrees.',
    packageContents: [
      'Precision laser-cut sealed circular acrylic fluid displacement disc',
      'Non-staining blue indicator fluid sealed permanently inside chambers',
      'Heavy weighted wooden rotation stand with smooth ball-bearing pivot',
      'Laminated Pythagoras Proofs (Algebraic, Geometric, Dissection) Display Card',
      'Oral Viva Questions on Right Triangles, Hypotenuse, and Triplets (3,4,5 / 5,12,13)'
    ],
    preparationGuide: 'Rotate disc 180 degrees during teacher viva. Watch liquid from c² perfectly fill a² and b² without a drop to spare.',
    safetyNotes: 'Permanently sealed chamber. 100% leakproof.',
    vivaConcepts: [
      'State Pythagoras Theorem: In a right-angled triangle, square of hypotenuse equals sum of squares of other two sides (c² = a² + b²).',
      'What is a Pythagorean Triplet? Three positive integers a, b, c that satisfy a² + b² = c² (e.g., 3-4-5, 5-12-13, 7-24-25).',
      'Who first proved it in India? Baudhāyana in the Sulba Sutras hundreds of years before Pythagoras.'
    ],
    dimensionsCm: '26 x 14 x 28',
    weightGrams: 510,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 89900,
    sellingPricePaise: 64900,
    ratingAvg: 4.9,
    ratingCount: 43,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-m1-1', url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80', altText: 'Pythagoras Theorem Liquid Model Demonstration', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9, 10],
    subjects: ['mathematics'],
    stockOnHand: 26
  },
  {
    id: 'prod-mat-002',
    sku: 'PB-MAT-CLI-02',
    slug: 'trigonometry-clinometer-height-measurement-tool',
    title: 'Trigonometry Clinometer (Angle & Height Measurement Tool)',
    shortDescription: 'Optical surveying clinometer using trigonometric tangent formulas (tan θ = Opposite/Adjacent) to measure building heights.',
    fullDescription: 'Brings Class 9–10 trigonometry outdoors! Includes a calibrated 360-degree protractor with sight viewing tube and gravity plumb line. Students sight the top of a tree, flagpole, or school building, note the elevation angle θ, measure ground distance, and calculate exact vertical height using tan(θ).',
    packageContents: [
      'Calibrated brass/acrylic protractor surveying sight tube with gravity plumb bob',
      '30-Meter fiberglass field measuring tape',
      'Trigonometric Tangent Table & Formula Reference Chart (tan 30° = 1/√3, tan 45° = 1, tan 60° = √3)',
      'Practical Field Measurement Worksheet and Viva Preparation Sheet'
    ],
    preparationGuide: 'Sight top of flagpole through tube. Read angle on plumb line. Multiply ground distance by tan(angle) and add eye height.',
    safetyNotes: 'Durable metal and plastic measuring tool. Completely safe.',
    vivaConcepts: [
      'What is the formula to calculate height? Height = (Distance * tan θ) + Observer Eye Height.',
      'What is an angle of elevation vs angle of depression? Elevation is looking upward from horizontal; depression is looking downward.',
      'Why does tan 45° make it easiest? Since tan 45° = 1, height above eye level exactly equals distance from building.'
    ],
    dimensionsCm: '20 x 15 x 6',
    weightGrams: 320,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 64900,
    sellingPricePaise: 44900,
    ratingAvg: 4.8,
    ratingCount: 31,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      { id: 'img-m2-1', url: 'https://images.unsplash.com/photo-1453733197781-7925e01b7a63?auto=format&fit=crop&w=800&q=80', altText: 'Trigonometry Clinometer Tool in Action', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [8, 9, 10, 11],
    subjects: ['mathematics'],
    stockOnHand: 30
  },
  {
    id: 'prod-mat-003',
    sku: 'PB-MAT-GEO-03',
    slug: '3d-geometric-solids-eulers-formula-model-set',
    title: '3D Geometric Solids & Euler’s Polyhedron Formula Set',
    shortDescription: '12-piece precision translucent geometric solids set proving Faces + Vertices - Edges = 2 (F + V - E = 2).',
    fullDescription: 'Solid geometry made tactile! Includes 12 colorful translucent polyhedra (Tetrahedron, Cube, Octahedron, Dodecahedron, Icosahedron, Pyramids, and Prisms). Students count faces, vertices, and edges to prove Euler’s universal polyhedron formula and explore volume/surface area.',
    packageContents: [
      '12 Translucent acrylic 3D geometric polyhedral solids',
      'Removable base caps for filling with sand/water to verify relative volumes (Cylinder = 3x Cone volume)',
      'Euler’s Formula Formula Display Standee (F + V - E = 2)',
      'Solid Geometry & Mensuration Formula Board Examination Card'
    ],
    preparationGuide: 'Ready for display out of the box. Fill cone and cylinder with water to show cylinder holds exactly 3 cone volumes.',
    safetyNotes: 'Smooth rounded edges, non-toxic acrylic.',
    vivaConcepts: [
      'State Euler’s Formula for Polyhedra: Faces + Vertices - Edges = 2 (F + V - E = 2).',
      'What are the 5 Platonic Solids? Tetrahedron, Cube, Octahedron, Dodecahedron, Icosahedron.',
      'What is the relationship between cone and cylinder volume with same radius and height? Cone volume is 1/3 of cylinder volume.'
    ],
    dimensionsCm: '25 x 18 x 10',
    weightGrams: 450,
    formatId: 'science_fair_display',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 79900,
    sellingPricePaise: 54900,
    ratingAvg: 4.8,
    ratingCount: 27,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      { id: 'img-m3-1', url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80', altText: '3D Geometric Solids Euler Formula Set', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [4, 5, 6, 7, 8, 9],
    subjects: ['mathematics'],
    stockOnHand: 25
  },
  {
    id: 'prod-mat-004',
    sku: 'PB-MAT-NAP-04',
    slug: 'napiers-bones-wooden-multiplication-calculator',
    title: 'Napier’s Bones Historical Wooden Multiplication Calculator',
    shortDescription: 'Authentic carved wooden computing rods invented by John Napier in 1617 demonstrating lattice multiplication.',
    fullDescription: 'Before computers, there were Napier’s Bones! This handcrafted wooden set of 10 indexed calculating rods enables students to perform complex multi-digit multiplications and divisions within seconds using the diagonal lattice method.',
    packageContents: [
      'Handcrafted polished hardwood storage tray with index header rod (0 to 9)',
      '10 Individual numbered calculating rods with diagonal lattice division lines',
      'Step-by-step Multiplication & Square Root Demonstration Guide',
      'History of Mathematics & Early Computing Devices Display Card'
    ],
    preparationGuide: 'Line up rods matching multiplier digits, read diagonal sums from right to left to find instant product.',
    safetyNotes: 'Polished smooth natural teakwood finish. Splinter-free.',
    vivaConcepts: [
      'Who invented Napier’s Bones? Scottish mathematician John Napier in 1617 (who also invented logarithms).',
      'What mathematical method does it use? Lattice (or gelosia) multiplication using diagonal row carries.',
      'How does this relate to modern CPUs? It was an early mechanical precursor to binary arithmetic logic units.'
    ],
    dimensionsCm: '22 x 12 x 4',
    weightGrams: 310,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 64900,
    sellingPricePaise: 44900,
    ratingAvg: 4.9,
    ratingCount: 19,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      { id: 'img-m4-1', url: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=800&q=80', altText: 'Napiers Bones Wooden Multiplication Device', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [3, 4, 5, 6, 7],
    subjects: ['mathematics'],
    stockOnHand: 22
  },

  {
    id: 'prod-phy-010',
    sku: 'PB-PHY-KAL-10',
    slug: 'kaleidoscope-multiple-reflection-optical-tube',
    title: "Kaleidoscope Multiple Reflection Optical Tube",
    shortDescription: "Hands-on optical tube with 3 high-reflectance mirrors demonstrating symmetrical multiple reflections and geometric pattern creation.",
    fullDescription: "A classic and delightful optics science working model designed for primary and middle school students. Contains three precision front-surface acrylic mirror strips joined at exact 60-degree angles inside an impact-resistant brass-finish optical tube. Includes an interchangeable rotating chamber filled with colorful translucent beads and dichroic glass flakes. As light passes through the rotating end, each bead pattern is reflected repeatedly between the inclined plane mirrors to form symmetric hexagonal and starburst kaleidoscopic mandalas.",
    packageContents: [
      "Precision 3-Mirror Prism Optical Assembly (60-60-60 degrees)",
      "Protective Brass-Style Outer Barrel with Eye Piece",
      "Rotating Transparent Bead Chamber with Polyhedral Flakes",
      "Spare Bag of Dichroic Crystals & Colored Beads",
      "Laminated Viva Preparation Concept Card"
],
    preparationGuide: "Arrives fully pre-assembled. Hold the eyepiece to your eye, point toward a light source, and gently rotate the end chamber to view dazzling symmetrical geometric patterns.",
    safetyNotes: "100% child-safe shatterproof acrylic front-surface mirrors. No sharp glass or detachable small hazards.",
    vivaConcepts: [
      "What optical principle causes the kaleidoscope to form intricate symmetrical patterns? Multiple reflection of light between mirrors inclined at 60 degrees.",
      "What is the formula for images formed by two inclined mirrors? n = (360° / theta) - 1. For three mirrors at 60°, repeating reflections tile the entire visual plane.",
      "What are practical uses of multiple reflection? Periscopes, solar concentrators, and laser cavity resonators."
],
    dimensionsCm: '22 x 5 x 5',
    weightGrams: 280,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 49900,
    sellingPricePaise: 34900,
    ratingAvg: 4.9,
    ratingCount: 38,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
            "id": "img-kal-1",
            "url": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
            "altText": "Kaleidoscope Optical Tube",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [1,2,3,4,5,6],
    subjects: ["physics","mathematics"],
    stockOnHand: 45
  },

  {
    id: 'prod-phy-011',
    sku: 'PB-PHY-JET-11',
    slug: 'balloon-powered-jet-propulsion-car',
    title: "Balloon Powered Jet Propulsion Car (Newton's 3rd Law)",
    shortDescription: "Aerodynamic friction-free racer demonstrating Action-Reaction principles with high-volume pneumatic propulsion nozzle.",
    fullDescription: "A vibrant kinetic vehicle project ideal for primary and early middle school students. Designed with low-friction ABS wheel bearings, an ultralight carbon-composite chassis, and a precision directional air exhaust tube. Inflate the durable latex balloon through the one-way valve adapter, place the racer on any smooth floor, and release: compressed air rushes backward (action), launching the car accelerating forward (reaction) over 10 meters! Perfect for classroom demonstrations of Newton’s Third Law of Motion and pneumatic thrust.",
    packageContents: [
      "Low-Friction Aerodynamic Racer Chassis on Polished Steel Axles",
      "4x Low-Drag Polycarbonate Wheels",
      "5x High-Tensile Latex Propulsion Balloons",
      "One-Way Air Mouthpiece Inflation Tube",
      "Laminated Newton’s Laws Viva Flashcard"
],
    preparationGuide: "Snap the balloon onto the nozzle, inflate using the hygienic mouthpiece, place the car on smooth floor, and let go to watch it race.",
    safetyNotes: "Made with rounded non-toxic ABS plastic. Washable and BPA-free.",
    vivaConcepts: [
      "Which law of physics makes the balloon racer accelerate forward? Newton’s Third Law of Motion: For every action, there is an equal and opposite reaction.",
      "Why do wider wheels or smoother axles make the car travel farther? Reduced friction and rolling resistance minimize kinetic energy loss as heat.",
      "How is this identical to a space rocket launch? Rocket exhaust gasses rushing downward push the rocket hull upward into space."
],
    dimensionsCm: '18 x 10 x 8',
    weightGrams: 160,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 39900,
    sellingPricePaise: 24900,
    ratingAvg: 4.8,
    ratingCount: 42,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
            "id": "img-jet-1",
            "url": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
            "altText": "Balloon Jet Propulsion Car",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [1,2,3,4,5],
    subjects: ["physics"],
    stockOnHand: 60
  },

  {
    id: 'prod-phy-012',
    sku: 'PB-PHY-SHD-12',
    slug: 'shadow-puppets-optics-light-and-shadow-lab',
    title: "Shadow Theatre Optics Kit – Light, Shadows & Umbra Lab",
    shortDescription: "Illuminated optical projection bench demonstrating umbra, penumbra, and light propagation with 12 laser-cut shadow figures.",
    fullDescription: "An engaging and interactive primary science exhibition project. Features a portable calibrated optical wooden rail bench, a high-lumen focused LED light source, and interchangeable frosted screens. Includes 12 precision laser-cut animal, geometric, and celestial silhouettes made of opaque, translucent, and fully transparent optical materials. Students easily explore how the distance between light source, object, and screen controls shadow magnification, sharpness, and the formation of dark central umbra and fuzzy outer penumbra zones.",
    packageContents: [
      "Calibrated Metric Optical Rail Bench with Screen Holder",
      "Directional 3V LED Spot-Light Source with Battery Box",
      "Translucent Frosted Rear-Projection Acrylic Screen",
      "12x Laser-Cut Silhouette Figures (Opaque Acrylic, Polycarbonate, Tracing Film)",
      "Laminated Viva Oral Q&A Cards"
],
    preparationGuide: "Turn on the LED switch, slide the silhouette holder onto the optical rail, and move it toward and away from the screen to observe size and sharpness transitions.",
    safetyNotes: "Cool-running low-voltage LED. Safe for young children.",
    vivaConcepts: [
      "What three elements are essential for a shadow to be created? Light source, opaque/translucent obstacle, and a screen or backdrop.",
      "How do you make the shadow of an object larger on the screen? Move the object closer to the light source, expanding the cone of blocked rays.",
      "What is the difference between umbra and penumbra? Umbra is the region of complete darkness where all light is blocked; penumbra is the lighter outer fringe where light is partially blocked."
],
    dimensionsCm: '30 x 15 x 12',
    weightGrams: 420,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 54900,
    sellingPricePaise: 39900,
    ratingAvg: 4.8,
    ratingCount: 29,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      {
            "id": "img-shd-1",
            "url": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
            "altText": "Shadow Theatre Optics Kit",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [1,2,3,4],
    subjects: ["physics"],
    stockOnHand: 35
  },

  {
    id: 'prod-bio-011',
    sku: 'PB-BIO-SDG-11',
    slug: 'seed-germination-root-observation-chamber',
    title: "Seed Germination & Geotropism Observation Chamber",
    shortDescription: "Clear double-walled growth lab showing root geotropism, radical emergence, shoot phototropism, and dicot vs monocot stages.",
    fullDescription: "Designed specifically for Classes 1 to 5 environmental studies and biology curricula. Features an optical-grade transparent acrylic observation cassette filled with nutrient-infused agar gel or moisture retention foam. Seeds placed against the transparent wall can be inspected daily with the included 5x handheld optical magnifier. Students observe the seed coat split, radical emergence turning downward toward gravity (positive geotropism), and hypocotyl shoot climbing toward sunlight (positive phototropism). Comes with fast-germinating Gram, Fenugreek, and Corn seeds.",
    packageContents: [
      "Optical-Grade Acrylic Dual-Sided Root Chamber",
      "Pack of Pre-Treated Dicot (Chickpea) and Monocot (Maize) Seeds",
      "5x Ergonomic Handheld Magnifying Glass",
      "14-Day Growth Tracking Metric Observation Chart",
      "Laminated Viva Flashcard"
],
    preparationGuide: "Moisten the absorbent sponge matrix, position seeds against the front acrylic window, and position the stand in natural indirect light.",
    safetyNotes: "Organic seeds with non-toxic agricultural nutrient gel. Clean and odorless.",
    vivaConcepts: [
      "What are the three essential conditions for seed germination? Water (hydrates enzymes), oxygen (cellular respiration), and optimal temperature.",
      "What is positive geotropism? The downward directional growth of the primary root toward Earth’s gravitational center.",
      "What is positive phototropism? The upward bending of the green shoot toward sunlight, mediated by auxin plant hormones."
],
    dimensionsCm: '20 x 6 x 16',
    weightGrams: 310,
    formatId: 'diy_kit',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 44900,
    sellingPricePaise: 29900,
    ratingAvg: 4.8,
    ratingCount: 36,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
            "id": "img-sdg-1",
            "url": "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
            "altText": "Seed Germination Root Chamber",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [1,2,3,4,5],
    subjects: ["biology","environmental-science"],
    stockOnHand: 55
  },

  {
    id: 'prod-bio-012',
    sku: 'PB-BIO-BFM-12',
    slug: 'butterfly-metamorphosis-life-cycle-3d-model',
    title: "Complete Butterfly Metamorphosis 4-Stage 3D Lifecyle Display",
    shortDescription: "High-detail realistic 3D anatomical models of Egg on leaf, Caterpillar larva, Chrysalis pupa, and Adult Monarch butterfly.",
    fullDescription: "A vivid, pedagogical 3D biological lifecycle display crafted for Classes 1 to 5. Features four distinct, magnified, hand-painted sculptural specimens on a circular wooden revolving turntable: 1. Microscopic egg clusters on a host milkweed leaf, 2. Segmented caterpillar with false legs and feeding mandibles, 3. Suspended green and gold chrysalis showing pupal transformation, and 4. Adult Monarch butterfly with realistic wing venation. Clear directional arrows and stages make this a showstopper for junior science exhibitions.",
    packageContents: [
      "360-Degree Rotating Wooden Exhibition Stage",
      "4x Hand-Finished Realistic Lifecycle Figurines (Egg, Larva, Pupa, Imago)",
      "4x Stage Identification Badges with Key Vocabulary",
      "Laminated Viva Preparation Concept Cards"
],
    preparationGuide: "Display on table; rotate turntable to explain each stage in chronological sequence to judges.",
    safetyNotes: "Non-toxic hand-painted durable polyresin figures with no sharp edges.",
    vivaConcepts: [
      "What is complete metamorphosis (holometabolism)? A 4-stage biological life cycle consisting of Egg, Larva, Pupa, and Adult.",
      "What happens inside the chrysalis? Larval tissues are digested by enzymes into nutrient soup, while imaginal discs develop into adult wings, legs, and antennae.",
      "What is the biological purpose of the caterpillar stage? Feeding and rapid mass accumulation to fuel pupal metamorphosis."
],
    dimensionsCm: '22 x 22 x 14',
    weightGrams: 480,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 69900,
    sellingPricePaise: 49900,
    ratingAvg: 4.9,
    ratingCount: 22,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      {
            "id": "img-bfm-1",
            "url": "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80",
            "altText": "Butterfly Metamorphosis 3D Model",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [1,2,3,4],
    subjects: ["biology"],
    stockOnHand: 30
  },

  {
    id: 'prod-bio-013',
    sku: 'PB-BIO-RFX-13',
    slug: 'reflex-arc-neural-pathway-working-led-circuit',
    title: "Reflex Arc Neural Pathway Working Circuit Board",
    shortDescription: "Interactive spinal reflex simulation with sequential LED chase simulating stimulus receptor, sensory neuron, spinal interneuron, and motor muscle response.",
    fullDescription: "A flagship senior biology and neuroscience working model for Classes 9 to 12. Simulates an acute involuntary spinal withdrawal reflex (such as touching a hot flame). Features a realistic silicone fingertip containing a micro-switch sensor. When touched, an automated 12-LED sequential signal race lights up along the blue sensory afferent nerve fiber into the transverse spinal cord gray matter, triggers the central interneuron, and instantly fires back along the red motor efferent nerve fiber to flex an electromagnetic solenoid biceps muscle. Shows how emergency reflexes bypass conscious brain processing for life-saving speed.",
    packageContents: [
      "Pre-Assembled Hardwood Reflex Arc Circuit Panel",
      "Transverse Cross-Sectional Spinal Cord Anatomical Plate",
      "12-LED Dual-Channel Sequential Nerve Impulse Simulator",
      "Electromagnetic Arm Solenoid Muscle Actuator",
      "9V Battery Snap with Power Switch",
      "Laminated Senior Viva Preparation Concept Cards"
],
    preparationGuide: "Connect 9V battery and turn power ON. Touch the flame stimulus tip to watch the LED signal sprint to the spinal cord and actuate the arm withdrawal instantly.",
    safetyNotes: "Uses low-voltage 9V battery circuit. 100% shock-safe.",
    vivaConcepts: [
      "What are the 5 essential anatomical components of a reflex arc? Receptor, sensory neuron, spinal interneuron, motor neuron, and effector muscle.",
      "Why do spinal reflexes occur without prior conscious thought from the brain? The nerve circuit completes a direct loop in the spinal cord gray matter, saving vital milliseconds before ascending pain signals reach the cerebral cortex.",
      "Give an example of a monosynaptic vs polysynaptic reflex: The patellar knee-jerk reflex is monosynaptic (no interneuron), whereas the withdrawal reflex from pain is polysynaptic."
],
    dimensionsCm: '40 x 25 x 15',
    weightGrams: 780,
    formatId: 'working_model',
    difficulty: 'advanced',
    status: 'published',
    mrpPaise: 169900,
    sellingPricePaise: 129900,
    ratingAvg: 4.9,
    ratingCount: 34,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
            "id": "img-rfx-1",
            "url": "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
            "altText": "Reflex Arc Neural Pathway Board",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [9,10,11,12],
    subjects: ["biology","robotics-ai"],
    stockOnHand: 25
  },

  {
    id: 'prod-chm-005',
    sku: 'PB-CHM-XTL-05',
    slug: 'crystal-growing-lab-alum-copper-sulphate',
    title: "Crystal Growth & Geometry Laboratory (Alum & Copper Sulphate)",
    shortDescription: "Supersaturated crystallization experiment demonstrating unit cells, octahedral facets, monoclinic prisms, and seed suspension.",
    fullDescription: "An eye-catching, crystal-clear chemistry project for Classes 4 to 9. Features laboratory-grade potassium alum (yielding clear octahedral diamond crystals) and copper (II) sulphate pentahydrate (yielding deep azure triclinic jewels). Includes thermal glass beakers, nylon seed-crystal hanging suspension rods, optical magnifying loupe, and precision petri dishes. Students dissolve salts to supersaturation, observe nucleating seed crystals over 48 hours, and study ionic lattice packing.",
    packageContents: [
      "200g High-Purity Potassium Alum (Octahedral Crystals)",
      "150g Copper Sulphate Pentahydrate Crystals (Deep Blue)",
      "2x 150ml Heat-Resistant Borosilicate Growing Beakers",
      "2x Seed-Crystal Nylon Suspension Wires with Centering Clips",
      "10x Optical Handheld Inspection Loupe",
      "Laminated Viva Preparation Concept Cards"
],
    preparationGuide: "Dissolve salt in warm water until supersaturated, drop in seed crystal on nylon wire, and let stand undisturbed in cool room for 48 hours.",
    safetyNotes: "Wear provided protective gloves and safety goggles. Keep away from small children; do not ingest.",
    vivaConcepts: [
      "What is supersaturation and why is it necessary for crystal growth? A supersaturated solution contains more dissolved solute than normal equilibrium allows, forcing excess molecules to precipitate onto the seed crystal lattice.",
      "Why do crystals form precise, flat geometric faces? Crystals are repeating 3D arrays of atoms or ions. Steno’s Law states interfacial angles between crystal faces remain constant regardless of size.",
      "What crystal system does Copper Sulphate belong to? Triclinic crystal system, exhibiting three unequal axes with no right angles."
],
    dimensionsCm: '22 x 16 x 10',
    weightGrams: 520,
    formatId: 'diy_kit',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 64900,
    sellingPricePaise: 44900,
    ratingAvg: 4.8,
    ratingCount: 27,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
            "id": "img-xtl-1",
            "url": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
            "altText": "Crystal Growing Laboratory Kit",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [4,5,6,7,8,9],
    subjects: ["chemistry"],
    stockOnHand: 40
  },

  {
    id: 'prod-chm-006',
    sku: 'PB-CHM-DEN-06',
    slug: 'chemical-density-tower-miscibility-column',
    title: "Chemical Density Tower 7-Layer Miscibility Column",
    shortDescription: "Graduated liquid column demonstrating density gradients, immiscibility, buoyancy, and Archimedes floating solids.",
    fullDescription: "A mesmerizing and colorful chemistry exhibition model for Classes 2 to 7. Features an unbreakable heavy-duty acrylic graduated cylinder (250ml) and a curated set of safe, non-toxic liquids of differing specific gravities: honey, corn syrup, dish detergent, colored water, vegetable oil, rubbing alcohol, and lamp oil. Includes solid test beads of iron, wood, rubber, wax, and plastic that float suspended at exact boundary interfaces corresponding to their material density.",
    packageContents: [
      "250ml Calibrated Clear Acrylic Density Cylinder with Base",
      "5x Color-Coded Layering Liquids in Leak-Proof Dropper Flasks",
      "5x Density Demonstration Solids (Steel Bolt, Grape, Rubber Washer, Candle Wax, Ping-Pong Chunk)",
      "Precision Pipette for Boundary Layering",
      "Laminated Viva Preparation Concept Cards"
],
    preparationGuide: "Slowly pour the densest liquid first using the wall pipette, then add successively lighter liquids to build the 7 distinct rainbow strata.",
    safetyNotes: "Food-safe and cosmetic grade non-toxic liquids. Spill-proof screw-cap cylinder.",
    vivaConcepts: [
      "Why do the liquids form distinct layers without mixing together? Liquids with higher density sink to the bottom, while immiscibility (polar vs non-polar molecules) prevents boundary dissolution.",
      "How does an object determine which layer it will float in? Archimedes Principle: A solid will sink through layers of lower density and float upon any liquid layer that has higher density than itself.",
      "What is specific gravity? The ratio of the density of a substance to the density of pure water at 4°C."
],
    dimensionsCm: '10 x 10 x 32',
    weightGrams: 640,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 59900,
    sellingPricePaise: 39900,
    ratingAvg: 4.7,
    ratingCount: 31,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      {
            "id": "img-den-1",
            "url": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
            "altText": "Chemical Density Tower Column",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [2,3,4,5,6,7],
    subjects: ["chemistry","physics"],
    stockOnHand: 35
  },

  {
    id: 'prod-chm-007',
    sku: 'PB-CHM-LMN-07',
    slug: 'lemon-battery-electrochemical-cell-kit',
    title: "Lemon Battery Electrochemical Cell & Digital Clock Kit",
    shortDescription: "Generates electricity from citrus fruit citric acid using copper and zinc electrodes to power an LCD digital clock and buzzer.",
    fullDescription: "A classic school science fair winner demonstrating redox chemistry and voltaic cells. Includes 4 pure electrolytic copper electrode plates (positive cathode) and 4 pure galvanized zinc electrode plates (negative anode), insulated alligator connection leads, and an ultra-low-current LCD digital clock. Insert the metals into lemons or potatoes; the citric acid electrolyte drives spontaneous oxidation-reduction reactions, generating ~0.9V per fruit cell, seamlessly powering the digital clock without any wall power!",
    packageContents: [
      "4x High-Purity Copper Strip Electrodes (+)",
      "4x High-Purity Zinc Strip Electrodes (-)",
      "Low-Power Digital LCD Clock Display Unit",
      "5x Color-Coded Alligator Jumper Test Wires",
      "Low-Current Red LED & Piezo Buzzer",
      "Laminated Viva Preparation Concept Cards"
],
    preparationGuide: "Roll fresh lemons to release interior juice, insert one copper and one zinc plate per lemon, and connect in series using alligator clips to power the clock.",
    safetyNotes: "Child-safe low voltage (<3V). Do not eat lemons used for chemical testing.",
    vivaConcepts: [
      "Which chemical reaction produces electricity in a fruit cell? Oxidation of zinc at the anode (Zn -> Zn2+ + 2e-) and reduction of hydrogen ions at the copper cathode (2H+ + 2e- -> H2).",
      "Why do we connect multiple lemons in series? Connecting cells in series adds voltages together, reaching the ~2.0V needed to trigger semiconductor LEDs.",
      "What acts as the electrolyte in this battery? The acidic citric acid solution inside the lemon juice."
],
    dimensionsCm: '16 x 12 x 5',
    weightGrams: 180,
    formatId: 'diy_kit',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 44900,
    sellingPricePaise: 29900,
    ratingAvg: 4.8,
    ratingCount: 46,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
            "id": "img-lmn-1",
            "url": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
            "altText": "Lemon Battery Electrochemical Kit",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [4,5,6,7,8],
    subjects: ["chemistry","physics"],
    stockOnHand: 75
  },

  {
    id: 'prod-mat-005',
    sku: 'PB-MAT-ABAC-05',
    slug: 'wooden-abacus-soroban-13-rod-arithmetic',
    title: "Wooden 13-Rod Soroban Abacus Mental Arithmetic Board",
    shortDescription: "Traditional 4+1 bead wooden Japanese Soroban abacus with one-touch reset button for place value and rapid calculations.",
    fullDescription: "A tactile, foundational mathematics model for early primary students (Classes 1 to 5). Features 13 polished steel rods with smooth bi-conical wooden beads in the classic 1-upper (value 5) and 4-lower (value 1) configuration. Includes a quick-clearing push-button reset bar. Cultivates deep spatial understanding of base-10 positional notation, decimal place values (units, tens, hundreds, thousands), and two-handed finger arithmetic that accelerates mental calculation speed.",
    packageContents: [
      "13-Rod Polished Hardwood Soroban Abacus Frame",
      "Spring-Loaded Quick Reset Push Mechanism",
      "Step-by-Step Color Illustrated Mental Math Exercise Guide",
      "Laminated Viva Preparation Concept Cards"
],
    preparationGuide: "Press the reset button to clear beads, position on flat desk, and use thumb and index finger to move Earth and Heaven beads toward the reckoning bar.",
    safetyNotes: "Polished natural beechwood with splinter-free satin finish. Non-toxic organic varnish.",
    vivaConcepts: [
      "How are numbers represented on a 1:4 Soroban abacus? The single upper bead (Heaven bead) equals 5 when shifted down; each of the four lower beads (Earth beads) equals 1 when shifted up toward the center reckoning bar.",
      "What mathematical concept does the abacus teach? Positional base-10 decimal place notation (units, tens, hundreds, thousands).",
      "How does abacus practice enhance mental arithmetic? Students transition from tactile manipulation to internal mental imagery of beads (Anzan), computing complex calculations in seconds."
],
    dimensionsCm: '25 x 8 x 3',
    weightGrams: 240,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 49900,
    sellingPricePaise: 34900,
    ratingAvg: 4.8,
    ratingCount: 39,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
            "id": "img-abac-1",
            "url": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
            "altText": "Wooden Soroban Abacus",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [1,2,3,4,5],
    subjects: ["mathematics"],
    stockOnHand: 50
  },

  {
    id: 'prod-mat-006',
    sku: 'PB-MAT-FRAC-06',
    slug: 'fraction-discs-and-wheel-tangram-board',
    title: "Magnetic Fraction Discs, Fraction Wheel & Tangram Board",
    shortDescription: "Tactile circular fraction wedges demonstrating equivalence (1/2 = 2/4 = 4/8), common denominators, and geometric sector proofs.",
    fullDescription: "A premier visual mathematics model for Classes 2 to 6. Contains 9 color-coded magnetic fraction circles divided into 1 (whole), 1/2, 1/3, 1/4, 1/5, 1/6, 1/8, 1/10, and 1/12 sectors. Includes a dual-sided magnetic demonstration slate with metric degree markings (360° circle) and a 7-piece wooden Tangram puzzle. Students visually superimpose 2/4 over 1/2 to verify equivalence, solve fraction addition like 1/3 + 1/6 = 1/2 with tactile wedges, and convert sectors into angles and percentages.",
    packageContents: [
      "51x Color-Coded Magnetic Fraction Wedges (1 to 1/12)",
      "360-Degree Calibrated Metallic Demonstration Base Board",
      "7-Piece Wooden Geometric Tangram Set with Problem Cards",
      "Laminated Viva Preparation Concept Cards"
],
    preparationGuide: "Place fraction pieces onto the 360° magnetic board to compare angles, find common denominators, and create equal sectors.",
    safetyNotes: "Encased soft-touch rubberized magnetic foam. Safe for small hands.",
    vivaConcepts: [
      "What is an equivalent fraction and how does this model prove it? Fractions that describe the same area of a whole are equivalent. Superimposing two 1/4 wedges over the 1/2 wedge proves 1/2 = 2/4.",
      "How do you convert a fraction into a circular angle? Multiply by 360°. For instance, 1/3 * 360° = 120° central angle.",
      "What are proper, improper, and mixed fractions? Proper: numerator < denominator; Improper: numerator >= denominator; Mixed: whole number plus a proper fraction."
],
    dimensionsCm: '22 x 22 x 4',
    weightGrams: 390,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 59900,
    sellingPricePaise: 42900,
    ratingAvg: 4.9,
    ratingCount: 33,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      {
            "id": "img-frac-1",
            "url": "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80",
            "altText": "Magnetic Fraction Wheel Board",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [2,3,4,5,6],
    subjects: ["mathematics"],
    stockOnHand: 45
  },

  {
    id: 'prod-mat-007',
    sku: 'PB-MAT-CNC-07',
    slug: 'conic-sections-3d-wooden-sliced-cone-model',
    title: "Conic Sections 3D Hardwood Sectional Geometric Model",
    shortDescription: "Precision dissectible wooden double-nappe cone revealing Circle, Ellipse, Parabola, and Hyperbola with magnetic alignment pins.",
    fullDescription: "The gold standard practical mathematics model for Classes 10 to 12. Hand-carved from seasoned solid hardwood, this dual cone is sliced along four distinct geometrical plane angles. Precision magnetic dowels hold the sections securely together. Dissecting the pieces reveals the exact 2D curves formed by intersecting a plane with a cone: 1. Horizontal slice = Circle, 2. Shallow angle slice = Ellipse, 3. Slice parallel to generator slant edge = Parabola, and 4. Steep vertical slice = Hyperbola. An indispensable visual aid for CBSE/ICSE board viva exams on analytical coordinate geometry.",
    packageContents: [
      "Solid Beechwood Dissectible Conic Sections Model (5 interlocking pieces)",
      "Sturdy Turned Wooden Pedestal Base",
      "4x Clear Acrylic Planar Intersection Plates",
      "Laminated Senior Mathematics Viva Concept Cards"
],
    preparationGuide: "Remove sections one by one from the pedestal to showcase cross-sectional conic curves to external examiners.",
    safetyNotes: "Precision turned solid wood with concealed neodymium magnetic retainers.",
    vivaConcepts: [
      "Under what mathematical condition is a parabola produced from a conic section? When the intersecting cutting plane is parallel to the slant generator line of the cone (eccentricity e = 1).",
      "What defines the eccentricity of an ellipse, parabola, and hyperbola? Circle e = 0; Ellipse 0 < e < 1; Parabola e = 1; Hyperbola e > 1.",
      "State the general second-degree equation for conic sections: Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0, classified via discriminant (B^2 - 4AC)."
],
    dimensionsCm: '15 x 15 x 25',
    weightGrams: 850,
    formatId: 'working_model',
    difficulty: 'advanced',
    status: 'published',
    mrpPaise: 129900,
    sellingPricePaise: 89900,
    ratingAvg: 4.9,
    ratingCount: 28,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
            "id": "img-cnc-1",
            "url": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
            "altText": "Conic Sections 3D Model",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [10,11,12],
    subjects: ["mathematics"],
    stockOnHand: 25
  },

  {
    id: 'prod-rob-007',
    sku: 'PB-ROB-LFR-07',
    slug: 'line-following-autonomous-robot-car',
    title: "Autonomous Dual-Sensor Line Following Robot Car",
    shortDescription: "Ready-to-run microcontroller-guided robotic buggy that tracks dark pathways automatically using twin infrared reflectometers.",
    fullDescription: "An impressive robotics working model for middle and secondary students (Classes 6 to 12). Features a pre-soldered dual-channel infrared transmitter-receiver optical comparator circuit, twin micro gearmotors, and a castor balance wheel. Place the vehicle on the included 1-meter black oval vinyl track; when an IR sensor detects the black line, reflection drops, triggering differential motor steering that keeps the robot locked onto the path without any remote control or human touch.",
    packageContents: [
      "Pre-Assembled Autonomous Line-Follower Buggy",
      "Dual Infrared Optical Photodiode Sensor Modules with Calibration Pots",
      "100cm x 60cm Heavy-Gauge Vinyl Test Track",
      "9V Heavy-Duty Battery with Toggle Switch",
      "Laminated Viva Preparation Concept Cards"
],
    preparationGuide: "Lay track on flat surface, turn robot switch ON, and place front caster over the black line to initiate automatic tracking.",
    safetyNotes: "Low voltage 9V DC operation. Enclosed drive gears prevent wire entanglements.",
    vivaConcepts: [
      "How do infrared sensors distinguish between black line and white ground? White surfaces reflect ~90% of emitted IR light back to photodiode; black surfaces absorb IR light, signaling an obstacle or line edge.",
      "How does differential drive steering work in two-wheeled mobile robots? Left and right motors are driven independently; stopping the left motor while spinning the right motor pivots the robot smoothly to the left.",
      "What are industrial applications of line followers? Automated Guided Vehicles (AGVs) in Amazon warehouses and automated hospital payload transports."
],
    dimensionsCm: '18 x 14 x 7',
    weightGrams: 340,
    formatId: 'working_model',
    difficulty: 'intermediate',
    status: 'published',
    mrpPaise: 149900,
    sellingPricePaise: 99900,
    ratingAvg: 4.9,
    ratingCount: 41,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
            "id": "img-lfr-1",
            "url": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
            "altText": "Line Following Robot Car",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [6,7,8,9,10,11,12],
    subjects: ["robotics-ai","physics"],
    stockOnHand: 35
  },

  {
    id: 'prod-rob-008',
    sku: 'PB-ROB-RDR-08',
    slug: 'ultrasonic-radar-180-visual-servo-scanner',
    title: "Ultrasonic 180° Mini Radar Visual Sonar Scanner",
    shortDescription: "High-tech sonar radar system sweeping 180 degrees via micro-servo with real-time target distance detection and alert tone.",
    fullDescription: "The pinnacle of school robotics exhibitions. Features an HC-SR04 ultrasonic sound transducer mounted atop an SG90 micro-servo motor that sweeps continuously across 180 degrees. As it sweeps, ultrasonic pings measure obstacle range in real time (2cm to 300cm). When an intruding object enters the perimeter, an onboard RGB LED indicator shifts from green to flashing red and a piezo alarm beeps with target coordinates. An absolute showstopper that demonstrates military sonar and automotive blind-spot radar.",
    packageContents: [
      "Pre-Programmed Microcontroller Control Board with Servo Shield",
      "SG-90 180-Degree Precision Micro-Servo Motor",
      "HC-SR04 Dual-Transducer Ultrasonic Sonar Sensor",
      "Calibrated Acrylic Radar Angle Dial Grid",
      "9V Battery & DC Power Connector Cable",
      "Laminated Viva Preparation Concept Cards"
],
    preparationGuide: "Place on exhibition counter and connect power. The servo begins automatic 180° sweep; wave hand in front to trigger detection alert.",
    safetyNotes: "Ultrasonic frequency (40kHz) is completely silent and harmless to humans and domestic pets.",
    vivaConcepts: [
      "What formula calculates target distance in ultrasonic sensing? Distance = (Speed of Sound * Time Elapsed) / 2. Sound travels at 343 m/s in air; round-trip time divided by 2 gives distance.",
      "What is the difference between Radar and Sonar? Radar uses electromagnetic radio waves traveling at 300,000 km/s; Sonar uses acoustic pressure waves traveling at ~343 m/s.",
      "What is the function of the servo motor? The servo receives PWM (Pulse Width Modulation) angle pulses to position the sensor precisely at each degree between 0° and 180°."
],
    dimensionsCm: '20 x 18 x 14',
    weightGrams: 420,
    formatId: 'working_model',
    difficulty: 'advanced',
    status: 'published',
    mrpPaise: 189900,
    sellingPricePaise: 139900,
    ratingAvg: 4.9,
    ratingCount: 30,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
            "id": "img-rdr-1",
            "url": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
            "altText": "Ultrasonic Radar 180 Scanner",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [7,8,9,10,11,12],
    subjects: ["robotics-ai","physics"],
    stockOnHand: 20
  },

  {
    id: 'prod-rob-009',
    sku: 'PB-ROB-BRS-09',
    slug: 'simple-vibration-bristle-bot-bug',
    title: "Vibrating Bristle-Bot Micro-Robot Bug Kit",
    shortDescription: "Fun micro-robot powered by high-RPM eccentric vibration motor and inclined toothbrush bristles that skitters across tables.",
    fullDescription: "The ultimate beginner robotic kit for early primary grades (Classes 1 to 4). Made from an ergonomic toothbrush head angled bristles, a coin-cell lithium battery, and an eccentric rotating mass (ERM) micro vibration motor. As the off-center counterweight spins, rapid vibrations tilt the directional bristles, transforming oscillatory kinetic vibration into directional forward propulsion. Kids decorate their bugs with googly eyes and pipe cleaners, learning about closed circuits and kinetic locomotion.",
    packageContents: [
      "2x Angled Synthetic Bristle Robotic Heads",
      "2x Micro-ERM Vibration Motors with Pre-Stripped Leads",
      "2x 3V CR2032 Lithium Coin Cells",
      "Googly Eyes, Pipe Cleaners & Double-Sided Foam Tape",
      "Fun Illustrated Cartoon Science Explainer Card"
],
    preparationGuide: "Tape motor to brush head, press leads to battery terminals, and set on table to watch the bug zoom and bounce.",
    safetyNotes: "Low voltage 3V coin cell. Adult supervision recommended for children under 5.",
    vivaConcepts: [
      "How does an unbalanced motor make the bristle bot move forward? Centrifugal vibrations from the spinning off-center weight rock the slanted bristles, generating directional forward thrust.",
      "What completes the electrical circuit? Connecting motor leads to the positive and negative poles of the coin cell creates a closed conductive circuit for electron flow.",
      "Where else are vibration motors used in daily life? Haptic feedback vibration inside smartphones and game controllers."
],
    dimensionsCm: '6 x 3 x 3',
    weightGrams: 45,
    formatId: 'diy_kit',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 29900,
    sellingPricePaise: 18900,
    ratingAvg: 4.8,
    ratingCount: 52,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
            "id": "img-brs-1",
            "url": "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=800&q=80",
            "altText": "Vibrating Bristle Bot Bug",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [1,2,3,4],
    subjects: ["robotics-ai","physics"],
    stockOnHand: 100
  },

  {
    id: 'prod-evs-009',
    sku: 'PB-EVS-WND-09',
    slug: 'wind-vane-and-anemometer-weather-station',
    title: "Wind Vane & 3-Cup Anemometer Meteorological Station",
    shortDescription: "Dual weather instrument measuring wind direction with 8-point compass rose and relative wind speed with frictionless rotating cups.",
    fullDescription: "A classic environmental science working model for Classes 1 to 6. Combines an aerodynamically balanced wind vane with an 8-cardinal-point compass rose (North, South, East, West) and a 3-cup hemispherical cup anemometer spinning on miniature low-friction ball bearings. When placed outdoors or in front of an electric table fan, the tail fin steers the aerodynamic arrow directly into the wind vector, while the spinning cups give immediate visual speed comparison.",
    packageContents: [
      "Balanced Aerodynamic Arrow Wind Vane on Brass Pivot",
      "8-Point Compass Rose Base (N, NE, E, SE, S, SW, W, NW)",
      "3-Cup Hemispherical Anemometer Spinning Hub",
      "Sturdy Weighted Demonstration Table Base",
      "Laminated Viva Preparation Concept Cards"
],
    preparationGuide: "Mount base on table, orient the North indicator, and demonstrate with breath or portable fan.",
    safetyNotes: "Smooth rounded polycarbonate fins and non-toxic weighted stand.",
    vivaConcepts: [
      "Why does the arrowhead point into the wind? The large rear tail fin has greater surface area and wind drag, forcing the pointer into the oncoming wind vector.",
      "Why do the anemometer cups always spin in the same direction? The hollow side of a hemisphere has higher aerodynamic drag than the convex back, creating unidirectional rotational torque.",
      "What units are used to measure wind speed? Meters per second (m/s), Kilometers per hour (km/h), or Knots."
],
    dimensionsCm: '25 x 18 x 30',
    weightGrams: 360,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 49900,
    sellingPricePaise: 34900,
    ratingAvg: 4.8,
    ratingCount: 35,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
            "id": "img-wnd-1",
            "url": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
            "altText": "Wind Vane and Anemometer Station",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [1,2,3,4,5,6],
    subjects: ["environmental-science","physics"],
    stockOnHand: 50
  },

  {
    id: 'prod-evs-010',
    sku: 'PB-EVS-ERS-10',
    slug: 'soil-erosion-prevention-root-mesh-model',
    title: "Soil Erosion vs Forest Vegetation Runoff Model",
    shortDescription: "Dual-trough rainfall simulation showing muddy runoff from bare soil versus crystal-clear runoff from plant root mesh.",
    fullDescription: "One of the most impactful and easy-to-understand environmental science exhibition models for Classes 2 to 8. Consists of two inclined erosion flumes: Flume A contains loose bare unplanted soil, while Flume B contains dense root-matted turf vegetation. Both lead into clear collection beakers. When simulated rain is poured over both troughs via the multi-hole sprinkler head, Flume A immediately discharges dark, muddy silt runoff and collapses, whereas Flume B discharges clear water as the root network securely binds soil particles and traps moisture.",
    packageContents: [
      "Dual-Chamber Inclined Runoff Flume Tray with Drainage Spouts",
      "2x Clear Optical Graduated Sediment Catch Beakers",
      "Dual-Nozzle Uniform Rain Simulation Shower Cup",
      "Natural Loam Soil & Root Binding Mesh Matrix",
      "Laminated Viva Preparation Concept Cards"
],
    preparationGuide: "Fill both troughs with soil, place green root turf in Flume B, and pour equal water from the sprinkler cup simultaneously into both flumes.",
    safetyNotes: "Natural non-toxic sterilized potting soil and recycled plastics.",
    vivaConcepts: [
      "How do plant roots prevent soil erosion and landslides? Plant roots create a dense underground mesh that physically binds soil aggregates and absorbs water kinetic energy.",
      "What are the dangers of deforestation on river systems? Without tree roots, heavy rain washes topsoil into rivers, silting riverbeds and triggering catastrophic flash floods.",
      "What is humus? Decayed organic plant and animal matter in topsoil that retains moisture and supplies plant nutrients."
],
    dimensionsCm: '32 x 20 x 18',
    weightGrams: 750,
    formatId: 'working_model',
    difficulty: 'beginner',
    status: 'published',
    mrpPaise: 79900,
    sellingPricePaise: 54900,
    ratingAvg: 4.9,
    ratingCount: 38,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
            "id": "img-ers-1",
            "url": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
            "altText": "Soil Erosion Demonstration Flume",
            "isPrimary": true
      }
],
    boards: ["CBSE","ICSE","STATE_KA"],
    classes: [2,3,4,5,6,7,8],
    subjects: ["environmental-science","biology"],
    stockOnHand: 35
  }
];
