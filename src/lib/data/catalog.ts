import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-001',
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
    sellingPricePaise: 64900, // ₹649
    ratingAvg: 4.9,
    ratingCount: 38,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
        id: 'img-hyd-1',
        url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        altText: 'Working Hydraulic Lift Model Exhibition Stand',
        isPrimary: true
      },
      {
        id: 'img-hyd-2',
        url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
        altText: 'Hydraulic scissor mechanism close-up',
        isPrimary: false
      }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9],
    subjects: ['physics'],
    socialLinks: [
      {
        id: 'vid-hyd-1',
        platform: 'youtube_shorts',
        videoUrl: 'https://www.youtube.com/watch?v=bnWui38bq2g',
        title: '30-Second Hydraulic Scissor Lift Demonstration'
      }
    ],
    stockOnHand: 25
  },
  {
    id: 'prod-002',
    sku: 'PB-ROB-IRR-02',
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
    preparationGuide: 'Insert the moisture probe into the supplied soil cup. Fill the mini-reservoir with water. Turn on the master switch. When soil is dry, the pump runs immediately until water saturates the soil.',
    safetyNotes: 'Low-voltage 9V battery operation. Safe water isolation. Adult supervision recommended when handling water reservoir.',
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
    sellingPricePaise: 94900, // ₹949
    ratingAvg: 4.8,
    ratingCount: 29,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
        id: 'img-irr-1',
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        altText: 'Smart Automated Irrigation Model with Soil Sensor',
        isPrimary: true
      }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [7, 8, 9, 10, 11, 12],
    subjects: ['robotics-ai', 'environmental-science'],
    stockOnHand: 18
  },
  {
    id: 'prod-003',
    sku: 'PB-BIO-LUN-03',
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
    preparationGuide: 'Ready to display immediately out of the box. Grasp the diaphragm pull-handle at the base and gently pull downward to demonstrate inhalation, release to demonstrate exhalation.',
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
    sellingPricePaise: 49900, // ₹499
    ratingAvg: 4.7,
    ratingCount: 42,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
        id: 'img-lun-1',
        url: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
        altText: 'Human Respiratory System Model Demonstration',
        isPrimary: true
      }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [4, 5, 6, 7, 8],
    subjects: ['biology'],
    stockOnHand: 30
  },
  {
    id: 'prod-004',
    sku: 'PB-EVS-SOL-04',
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
    sellingPricePaise: 99900, // ₹999
    ratingAvg: 4.9,
    ratingCount: 51,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
        id: 'img-sol-1',
        url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
        altText: 'Solar and Wind Hybrid Energy Science Project',
        isPrimary: true
      }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9, 10],
    subjects: ['environmental-science', 'physics'],
    stockOnHand: 15
  },
  {
    id: 'prod-005',
    sku: 'PB-PHY-LDR-05',
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
    preparationGuide: 'Turn on the battery switch. In ambient room light the lamp stays off. Cover the small circular sensor at the corner with your palm — the lamp turns on instantly.',
    safetyNotes: 'No soldering required. Encapsulated low voltage components.',
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
    sellingPricePaise: 54900, // ₹549
    ratingAvg: 4.8,
    ratingCount: 33,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
        id: 'img-ldr-1',
        url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        altText: 'Automatic Street Light LDR Model in dark',
        isPrimary: true
      }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [7, 8, 9, 10],
    subjects: ['physics', 'robotics-ai'],
    stockOnHand: 22
  },
  {
    id: 'prod-006',
    sku: 'PB-BIO-DNA-06',
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
    sellingPricePaise: 74900, // ₹749
    ratingAvg: 4.9,
    ratingCount: 26,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      {
        id: 'img-dna-1',
        url: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
        altText: 'DNA Double Helix 3D Structure Model',
        isPrimary: true
      }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [9, 10, 11, 12],
    subjects: ['biology'],
    stockOnHand: 14
  },
  {
    id: 'prod-007',
    sku: 'PB-CHE-VOL-07',
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
    sellingPricePaise: 39900, // ₹399
    ratingAvg: 4.7,
    ratingCount: 64,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: true,
    estimatedAssemblyMins: 10,
    images: [
      {
        id: 'img-vol-1',
        url: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&w=800&q=80',
        altText: 'Volcano Eruption Science Experiment Demonstration',
        isPrimary: true
      }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [3, 4, 5, 6, 7],
    subjects: ['chemistry', 'environmental-science'],
    stockOnHand: 40
  },
  {
    id: 'prod-008',
    sku: 'PB-PHY-MAG-08',
    slug: 'electromagnetic-crane-working-model',
    title: 'Electromagnetic Crane with Scrap Metal Pick & Drop',
    shortDescription: 'Industrial working crane with battery-activated electromagnet to demonstrate magnetic fields generated by electric current.',
    fullDescription: 'Demonstrate Hans Christian Ørsted’s law of electromagnetism! This rotating wooden jib crane features a soft-iron core wrapped with insulated copper solenoid coils. Press the push-button switch to energize the magnetic field and pick up paperclips or iron nuts; release the button to de-energize and drop the scrap load into the salvage hopper.',
    packageContents: [
      'Pre-assembled wooden rotating boom crane with functional pulley string winch',
      'High-flux soft-iron solenoid electromagnet head with indicator LED',
      'Spring-loaded momentary push-button magnetic activator',
      'Box of safe zinc-plated test washers and paperclips',
      '9V Battery snap and power circuit',
      'Viva Q&A sheet: Fleming’s Right-Hand Rule and Solenoid Magnetic Flux'
    ],
    preparationGuide: 'Ready to run. Rotate crane arm over metal washers, depress the trigger button to pick them up, swing arm, and release button to drop.',
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
    sellingPricePaise: 59900, // ₹599
    ratingAvg: 4.8,
    ratingCount: 31,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
        id: 'img-mag-1',
        url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
        altText: 'Electromagnetic Crane Picking Up Scrap Metal',
        isPrimary: true
      }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9, 10],
    subjects: ['physics'],
    stockOnHand: 20
  },
  {
    id: 'prod-009',
    sku: 'PB-EVS-RAIN-09',
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
    sellingPricePaise: 79900, // ₹799
    ratingAvg: 4.9,
    ratingCount: 47,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
        id: 'img-rain-1',
        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=800&q=80',
        altText: 'Rainwater Harvesting Science Fair Project',
        isPrimary: true
      }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [5, 6, 7, 8, 9],
    subjects: ['environmental-science'],
    stockOnHand: 25
  },
  {
    id: 'prod-010',
    sku: 'PB-AST-SOL-10',
    slug: 'solar-system-3d-orbiting-model',
    title: 'Solar System 3D Orbiting Planetarium Model',
    shortDescription: 'Motorized mechanical model: 8 detailed planets orbiting an illuminated central Sun showing relative planetary positions.',
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
    sellingPricePaise: 69900, // ₹699
    ratingAvg: 4.9,
    ratingCount: 58,
    isFeatured: true,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
        id: 'img-ast-1',
        url: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80',
        altText: 'Solar System 3D Planetarium Model',
        isPrimary: true
      }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [1, 2, 3, 4, 5, 6],
    subjects: ['physics'],
    stockOnHand: 35
  },
  {
    id: 'prod-011',
    sku: 'PB-BIO-CEL-11',
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
    sellingPricePaise: 64900, // ₹649
    ratingAvg: 4.8,
    ratingCount: 22,
    isFeatured: false,
    isPopular: false,
    requiresAssembly: false,
    images: [
      {
        id: 'img-cel-1',
        url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
        altText: 'Plant Cell vs Animal Cell 3D Science Fair Model',
        isPrimary: true
      }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [8, 9, 10],
    subjects: ['biology'],
    stockOnHand: 18
  },
  {
    id: 'prod-012',
    sku: 'PB-EVS-CYC-12',
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
    sellingPricePaise: 54900, // ₹549
    ratingAvg: 4.8,
    ratingCount: 39,
    isFeatured: false,
    isPopular: true,
    requiresAssembly: false,
    images: [
      {
        id: 'img-cyc-1',
        url: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80',
        altText: 'Working Water Cycle Science Project',
        isPrimary: true
      }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [4, 5, 6, 7],
    subjects: ['environmental-science'],
    stockOnHand: 28
  }
];
