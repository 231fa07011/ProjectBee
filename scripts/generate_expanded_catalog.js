// scripts/generate_expanded_catalog.js
const fs = require('fs');
const path = require('path');

const NEW_PRODUCTS = [
  // -------------------------------------------------------------
  // GRADE 1 to 5 & OPTICS: Kaleidoscope
  // -------------------------------------------------------------
  {
    id: 'prod-phy-010',
    sku: 'PB-PHY-KAL-10',
    slug: 'kaleidoscope-multiple-reflection-optical-tube',
    title: 'Kaleidoscope Multiple Reflection Optical Tube',
    shortDescription: 'Hands-on optical tube with 3 high-reflectance mirrors demonstrating symmetrical multiple reflections and geometric pattern creation.',
    fullDescription: 'A classic and delightful optics science working model designed for primary and middle school students. Contains three precision front-surface acrylic mirror strips joined at exact 60-degree angles inside an impact-resistant brass-finish optical tube. Includes an interchangeable rotating chamber filled with colorful translucent beads and dichroic glass flakes. As light passes through the rotating end, each bead pattern is reflected repeatedly between the inclined plane mirrors to form symmetric hexagonal and starburst kaleidoscopic mandalas.',
    packageContents: [
      'Precision 3-Mirror Prism Optical Assembly (60-60-60 degrees)',
      'Protective Brass-Style Outer Barrel with Eye Piece',
      'Rotating Transparent Bead Chamber with Polyhedral Flakes',
      'Spare Bag of Dichroic Crystals & Colored Beads',
      'Laminated Viva Preparation Concept Card'
    ],
    preparationGuide: 'Arrives fully pre-assembled. Hold the eyepiece to your eye, point toward a light source, and gently rotate the end chamber to view dazzling symmetrical geometric patterns.',
    safetyNotes: '100% child-safe shatterproof acrylic front-surface mirrors. No sharp glass or detachable small hazards.',
    vivaConcepts: [
      'What optical principle causes the kaleidoscope to form intricate symmetrical patterns? Multiple reflection of light between mirrors inclined at 60 degrees.',
      'What is the formula for images formed by two inclined mirrors? n = (360° / theta) - 1. For three mirrors at 60°, repeating reflections tile the entire visual plane.',
      'What are practical uses of multiple reflection? Periscopes, solar concentrators, and laser cavity resonators.'
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
      { id: 'img-kal-1', url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80', altText: 'Kaleidoscope Optical Tube', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [1, 2, 3, 4, 5, 6],
    subjects: ['physics', 'mathematics'],
    stockOnHand: 45
  },

  // -------------------------------------------------------------
  // GRADE 1 to 5: Balloon Jet Propulsion Car
  // -------------------------------------------------------------
  {
    id: 'prod-phy-011',
    sku: 'PB-PHY-JET-11',
    slug: 'balloon-powered-jet-propulsion-car',
    title: "Balloon Powered Jet Propulsion Car (Newton's 3rd Law)",
    shortDescription: 'Aerodynamic friction-free racer demonstrating Action-Reaction principles with high-volume pneumatic propulsion nozzle.',
    fullDescription: 'A vibrant kinetic vehicle project ideal for primary and early middle school students. Designed with low-friction ABS wheel bearings, an ultralight carbon-composite chassis, and a precision directional air exhaust tube. Inflate the durable latex balloon through the one-way valve adapter, place the racer on any smooth floor, and release: compressed air rushes backward (action), launching the car accelerating forward (reaction) over 10 meters! Perfect for classroom demonstrations of Newton’s Third Law of Motion and pneumatic thrust.',
    packageContents: [
      'Low-Friction Aerodynamic Racer Chassis on Polished Steel Axles',
      '4x Low-Drag Polycarbonate Wheels',
      '5x High-Tensile Latex Propulsion Balloons',
      'One-Way Air Mouthpiece Inflation Tube',
      'Laminated Newton’s Laws Viva Flashcard'
    ],
    preparationGuide: 'Snap the balloon onto the nozzle, inflate using the hygienic mouthpiece, place the car on smooth floor, and let go to watch it race.',
    safetyNotes: 'Made with rounded non-toxic ABS plastic. Washable and BPA-free.',
    vivaConcepts: [
      'Which law of physics makes the balloon racer accelerate forward? Newton’s Third Law of Motion: For every action, there is an equal and opposite reaction.',
      'Why do wider wheels or smoother axles make the car travel farther? Reduced friction and rolling resistance minimize kinetic energy loss as heat.',
      'How is this identical to a space rocket launch? Rocket exhaust gasses rushing downward push the rocket hull upward into space.'
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
      { id: 'img-jet-1', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', altText: 'Balloon Jet Propulsion Car', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [1, 2, 3, 4, 5],
    subjects: ['physics'],
    stockOnHand: 60
  },

  // -------------------------------------------------------------
  // GRADE 1 to 4: Shadow Puppets Optics Bench
  // -------------------------------------------------------------
  {
    id: 'prod-phy-012',
    sku: 'PB-PHY-SHD-12',
    slug: 'shadow-puppets-optics-light-and-shadow-lab',
    title: 'Shadow Theatre Optics Kit – Light, Shadows & Umbra Lab',
    shortDescription: 'Illuminated optical projection bench demonstrating umbra, penumbra, and light propagation with 12 laser-cut shadow figures.',
    fullDescription: 'An engaging and interactive primary science exhibition project. Features a portable calibrated optical wooden rail bench, a high-lumen focused LED light source, and interchangeable frosted screens. Includes 12 precision laser-cut animal, geometric, and celestial silhouettes made of opaque, translucent, and fully transparent optical materials. Students easily explore how the distance between light source, object, and screen controls shadow magnification, sharpness, and the formation of dark central umbra and fuzzy outer penumbra zones.',
    packageContents: [
      'Calibrated Metric Optical Rail Bench with Screen Holder',
      'Directional 3V LED Spot-Light Source with Battery Box',
      'Translucent Frosted Rear-Projection Acrylic Screen',
      '12x Laser-Cut Silhouette Figures (Opaque Acrylic, Polycarbonate, Tracing Film)',
      'Laminated Viva Oral Q&A Cards'
    ],
    preparationGuide: 'Turn on the LED switch, slide the silhouette holder onto the optical rail, and move it toward and away from the screen to observe size and sharpness transitions.',
    safetyNotes: 'Cool-running low-voltage LED. Safe for young children.',
    vivaConcepts: [
      'What three elements are essential for a shadow to be created? Light source, opaque/translucent obstacle, and a screen or backdrop.',
      'How do you make the shadow of an object larger on the screen? Move the object closer to the light source, expanding the cone of blocked rays.',
      'What is the difference between umbra and penumbra? Umbra is the region of complete darkness where all light is blocked; penumbra is the lighter outer fringe where light is partially blocked.'
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
      { id: 'img-shd-1', url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80', altText: 'Shadow Theatre Optics Kit', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [1, 2, 3, 4],
    subjects: ['physics'],
    stockOnHand: 35
  },

  // -------------------------------------------------------------
  // GRADE 1 to 5: Seed Germination Root Observation Chamber
  // -------------------------------------------------------------
  {
    id: 'prod-bio-011',
    sku: 'PB-BIO-SDG-11',
    slug: 'seed-germination-root-observation-chamber',
    title: 'Seed Germination & Geotropism Observation Chamber',
    shortDescription: 'Clear double-walled growth lab showing root geotropism, radical emergence, shoot phototropism, and dicot vs monocot stages.',
    fullDescription: 'Designed specifically for Classes 1 to 5 environmental studies and biology curricula. Features an optical-grade transparent acrylic observation cassette filled with nutrient-infused agar gel or moisture retention foam. Seeds placed against the transparent wall can be inspected daily with the included 5x handheld optical magnifier. Students observe the seed coat split, radical emergence turning downward toward gravity (positive geotropism), and hypocotyl shoot climbing toward sunlight (positive phototropism). Comes with fast-germinating Gram, Fenugreek, and Corn seeds.',
    packageContents: [
      'Optical-Grade Acrylic Dual-Sided Root Chamber',
      'Pack of Pre-Treated Dicot (Chickpea) and Monocot (Maize) Seeds',
      '5x Ergonomic Handheld Magnifying Glass',
      '14-Day Growth Tracking Metric Observation Chart',
      'Laminated Viva Flashcard'
    ],
    preparationGuide: 'Moisten the absorbent sponge matrix, position seeds against the front acrylic window, and position the stand in natural indirect light.',
    safetyNotes: 'Organic seeds with non-toxic agricultural nutrient gel. Clean and odorless.',
    vivaConcepts: [
      'What are the three essential conditions for seed germination? Water (hydrates enzymes), oxygen (cellular respiration), and optimal temperature.',
      'What is positive geotropism? The downward directional growth of the primary root toward Earth’s gravitational center.',
      'What is positive phototropism? The upward bending of the green shoot toward sunlight, mediated by auxin plant hormones.'
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
      { id: 'img-sdg-1', url: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80', altText: 'Seed Germination Root Chamber', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [1, 2, 3, 4, 5],
    subjects: ['biology', 'environmental-science'],
    stockOnHand: 55
  },

  // -------------------------------------------------------------
  // GRADE 1 to 4: Butterfly Metamorphosis 3D Model
  // -------------------------------------------------------------
  {
    id: 'prod-bio-012',
    sku: 'PB-BIO-BFM-12',
    slug: 'butterfly-metamorphosis-life-cycle-3d-model',
    title: 'Complete Butterfly Metamorphosis 4-Stage 3D Lifecyle Display',
    shortDescription: 'High-detail realistic 3D anatomical models of Egg on leaf, Caterpillar larva, Chrysalis pupa, and Adult Monarch butterfly.',
    fullDescription: 'A vivid, pedagogical 3D biological lifecycle display crafted for Classes 1 to 5. Features four distinct, magnified, hand-painted sculptural specimens on a circular wooden revolving turntable: 1. Microscopic egg clusters on a host milkweed leaf, 2. Segmented caterpillar with false legs and feeding mandibles, 3. Suspended green and gold chrysalis showing pupal transformation, and 4. Adult Monarch butterfly with realistic wing venation. Clear directional arrows and stages make this a showstopper for junior science exhibitions.',
    packageContents: [
      '360-Degree Rotating Wooden Exhibition Stage',
      '4x Hand-Finished Realistic Lifecycle Figurines (Egg, Larva, Pupa, Imago)',
      '4x Stage Identification Badges with Key Vocabulary',
      'Laminated Viva Preparation Concept Cards'
    ],
    preparationGuide: 'Display on table; rotate turntable to explain each stage in chronological sequence to judges.',
    safetyNotes: 'Non-toxic hand-painted durable polyresin figures with no sharp edges.',
    vivaConcepts: [
      'What is complete metamorphosis (holometabolism)? A 4-stage biological life cycle consisting of Egg, Larva, Pupa, and Adult.',
      'What happens inside the chrysalis? Larval tissues are digested by enzymes into nutrient soup, while imaginal discs develop into adult wings, legs, and antennae.',
      'What is the biological purpose of the caterpillar stage? Feeding and rapid mass accumulation to fuel pupal metamorphosis.'
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
      { id: 'img-bfm-1', url: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80', altText: 'Butterfly Metamorphosis 3D Model', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [1, 2, 3, 4],
    subjects: ['biology'],
    stockOnHand: 30
  },

  // -------------------------------------------------------------
  // GRADE 9 to 12: Reflex Arc Neural Pathway
  // -------------------------------------------------------------
  {
    id: 'prod-bio-013',
    sku: 'PB-BIO-RFX-13',
    slug: 'reflex-arc-neural-pathway-working-led-circuit',
    title: 'Reflex Arc Neural Pathway Working Circuit Board',
    shortDescription: 'Interactive spinal reflex simulation with sequential LED chase simulating stimulus receptor, sensory neuron, spinal interneuron, and motor muscle response.',
    fullDescription: 'A flagship senior biology and neuroscience working model for Classes 9 to 12. Simulates an acute involuntary spinal withdrawal reflex (such as touching a hot flame). Features a realistic silicone fingertip containing a micro-switch sensor. When touched, an automated 12-LED sequential signal race lights up along the blue sensory afferent nerve fiber into the transverse spinal cord gray matter, triggers the central interneuron, and instantly fires back along the red motor efferent nerve fiber to flex an electromagnetic solenoid biceps muscle. Shows how emergency reflexes bypass conscious brain processing for life-saving speed.',
    packageContents: [
      'Pre-Assembled Hardwood Reflex Arc Circuit Panel',
      'Transverse Cross-Sectional Spinal Cord Anatomical Plate',
      '12-LED Dual-Channel Sequential Nerve Impulse Simulator',
      'Electromagnetic Arm Solenoid Muscle Actuator',
      '9V Battery Snap with Power Switch',
      'Laminated Senior Viva Preparation Concept Cards'
    ],
    preparationGuide: 'Connect 9V battery and turn power ON. Touch the flame stimulus tip to watch the LED signal sprint to the spinal cord and actuate the arm withdrawal instantly.',
    safetyNotes: 'Uses low-voltage 9V battery circuit. 100% shock-safe.',
    vivaConcepts: [
      'What are the 5 essential anatomical components of a reflex arc? Receptor, sensory neuron, spinal interneuron, motor neuron, and effector muscle.',
      'Why do spinal reflexes occur without prior conscious thought from the brain? The nerve circuit completes a direct loop in the spinal cord gray matter, saving vital milliseconds before ascending pain signals reach the cerebral cortex.',
      'Give an example of a monosynaptic vs polysynaptic reflex: The patellar knee-jerk reflex is monosynaptic (no interneuron), whereas the withdrawal reflex from pain is polysynaptic.'
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
      { id: 'img-rfx-1', url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80', altText: 'Reflex Arc Neural Pathway Board', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [9, 10, 11, 12],
    subjects: ['biology', 'robotics-ai'],
    stockOnHand: 25
  },

  // -------------------------------------------------------------
  // GRADE 4 to 9: Crystal Growing Lab
  // -------------------------------------------------------------
  {
    id: 'prod-chm-005',
    sku: 'PB-CHM-XTL-05',
    slug: 'crystal-growing-lab-alum-copper-sulphate',
    title: 'Crystal Growth & Geometry Laboratory (Alum & Copper Sulphate)',
    shortDescription: 'Supersaturated crystallization experiment demonstrating unit cells, octahedral facets, monoclinic prisms, and seed suspension.',
    fullDescription: 'An eye-catching, crystal-clear chemistry project for Classes 4 to 9. Features laboratory-grade potassium alum (yielding clear octahedral diamond crystals) and copper (II) sulphate pentahydrate (yielding deep azure triclinic jewels). Includes thermal glass beakers, nylon seed-crystal hanging suspension rods, optical magnifying loupe, and precision petri dishes. Students dissolve salts to supersaturation, observe nucleating seed crystals over 48 hours, and study ionic lattice packing.',
    packageContents: [
      '200g High-Purity Potassium Alum (Octahedral Crystals)',
      '150g Copper Sulphate Pentahydrate Crystals (Deep Blue)',
      '2x 150ml Heat-Resistant Borosilicate Growing Beakers',
      '2x Seed-Crystal Nylon Suspension Wires with Centering Clips',
      '10x Optical Handheld Inspection Loupe',
      'Laminated Viva Preparation Concept Cards'
    ],
    preparationGuide: 'Dissolve salt in warm water until supersaturated, drop in seed crystal on nylon wire, and let stand undisturbed in cool room for 48 hours.',
    safetyNotes: 'Wear provided protective gloves and safety goggles. Keep away from small children; do not ingest.',
    vivaConcepts: [
      'What is supersaturation and why is it necessary for crystal growth? A supersaturated solution contains more dissolved solute than normal equilibrium allows, forcing excess molecules to precipitate onto the seed crystal lattice.',
      'Why do crystals form precise, flat geometric faces? Crystals are repeating 3D arrays of atoms or ions. Steno’s Law states interfacial angles between crystal faces remain constant regardless of size.',
      'What crystal system does Copper Sulphate belong to? Triclinic crystal system, exhibiting three unequal axes with no right angles.'
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
      { id: 'img-xtl-1', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', altText: 'Crystal Growing Laboratory Kit', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [4, 5, 6, 7, 8, 9],
    subjects: ['chemistry'],
    stockOnHand: 40
  },

  // -------------------------------------------------------------
  // GRADE 2 to 7: Chemical Density Tower
  // -------------------------------------------------------------
  {
    id: 'prod-chm-006',
    sku: 'PB-CHM-DEN-06',
    slug: 'chemical-density-tower-miscibility-column',
    title: 'Chemical Density Tower 7-Layer Miscibility Column',
    shortDescription: 'Graduated liquid column demonstrating density gradients, immiscibility, buoyancy, and Archimedes floating solids.',
    fullDescription: 'A mesmerizing and colorful chemistry exhibition model for Classes 2 to 7. Features an unbreakable heavy-duty acrylic graduated cylinder (250ml) and a curated set of safe, non-toxic liquids of differing specific gravities: honey, corn syrup, dish detergent, colored water, vegetable oil, rubbing alcohol, and lamp oil. Includes solid test beads of iron, wood, rubber, wax, and plastic that float suspended at exact boundary interfaces corresponding to their material density.',
    packageContents: [
      '250ml Calibrated Clear Acrylic Density Cylinder with Base',
      '5x Color-Coded Layering Liquids in Leak-Proof Dropper Flasks',
      '5x Density Demonstration Solids (Steel Bolt, Grape, Rubber Washer, Candle Wax, Ping-Pong Chunk)',
      'Precision Pipette for Boundary Layering',
      'Laminated Viva Preparation Concept Cards'
    ],
    preparationGuide: 'Slowly pour the densest liquid first using the wall pipette, then add successively lighter liquids to build the 7 distinct rainbow strata.',
    safetyNotes: 'Food-safe and cosmetic grade non-toxic liquids. Spill-proof screw-cap cylinder.',
    vivaConcepts: [
      'Why do the liquids form distinct layers without mixing together? Liquids with higher density sink to the bottom, while immiscibility (polar vs non-polar molecules) prevents boundary dissolution.',
      'How does an object determine which layer it will float in? Archimedes Principle: A solid will sink through layers of lower density and float upon any liquid layer that has higher density than itself.',
      'What is specific gravity? The ratio of the density of a substance to the density of pure water at 4°C.'
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
      { id: 'img-den-1', url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80', altText: 'Chemical Density Tower Column', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [2, 3, 4, 5, 6, 7],
    subjects: ['chemistry', 'physics'],
    stockOnHand: 35
  },

  // -------------------------------------------------------------
  // GRADE 4 to 8: Lemon Battery Electrochemical Cell
  // -------------------------------------------------------------
  {
    id: 'prod-chm-007',
    sku: 'PB-CHM-LMN-07',
    slug: 'lemon-battery-electrochemical-cell-kit',
    title: 'Lemon Battery Electrochemical Cell & Digital Clock Kit',
    shortDescription: 'Generates electricity from citrus fruit citric acid using copper and zinc electrodes to power an LCD digital clock and buzzer.',
    fullDescription: 'A classic school science fair winner demonstrating redox chemistry and voltaic cells. Includes 4 pure electrolytic copper electrode plates (positive cathode) and 4 pure galvanized zinc electrode plates (negative anode), insulated alligator connection leads, and an ultra-low-current LCD digital clock. Insert the metals into lemons or potatoes; the citric acid electrolyte drives spontaneous oxidation-reduction reactions, generating ~0.9V per fruit cell, seamlessly powering the digital clock without any wall power!',
    packageContents: [
      '4x High-Purity Copper Strip Electrodes (+)',
      '4x High-Purity Zinc Strip Electrodes (-)',
      'Low-Power Digital LCD Clock Display Unit',
      '5x Color-Coded Alligator Jumper Test Wires',
      'Low-Current Red LED & Piezo Buzzer',
      'Laminated Viva Preparation Concept Cards'
    ],
    preparationGuide: 'Roll fresh lemons to release interior juice, insert one copper and one zinc plate per lemon, and connect in series using alligator clips to power the clock.',
    safetyNotes: 'Child-safe low voltage (<3V). Do not eat lemons used for chemical testing.',
    vivaConcepts: [
      'Which chemical reaction produces electricity in a fruit cell? Oxidation of zinc at the anode (Zn -> Zn2+ + 2e-) and reduction of hydrogen ions at the copper cathode (2H+ + 2e- -> H2).',
      'Why do we connect multiple lemons in series? Connecting cells in series adds voltages together, reaching the ~2.0V needed to trigger semiconductor LEDs.',
      'What acts as the electrolyte in this battery? The acidic citric acid solution inside the lemon juice.'
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
      { id: 'img-lmn-1', url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80', altText: 'Lemon Battery Electrochemical Kit', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [4, 5, 6, 7, 8],
    subjects: ['chemistry', 'physics'],
    stockOnHand: 75
  },

  // -------------------------------------------------------------
  // GRADE 1 to 5: Wooden Soroban Abacus
  // -------------------------------------------------------------
  {
    id: 'prod-mat-005',
    sku: 'PB-MAT-ABAC-05',
    slug: 'wooden-abacus-soroban-13-rod-arithmetic',
    title: 'Wooden 13-Rod Soroban Abacus Mental Arithmetic Board',
    shortDescription: 'Traditional 4+1 bead wooden Japanese Soroban abacus with one-touch reset button for place value and rapid calculations.',
    fullDescription: 'A tactile, foundational mathematics model for early primary students (Classes 1 to 5). Features 13 polished steel rods with smooth bi-conical wooden beads in the classic 1-upper (value 5) and 4-lower (value 1) configuration. Includes a quick-clearing push-button reset bar. Cultivates deep spatial understanding of base-10 positional notation, decimal place values (units, tens, hundreds, thousands), and two-handed finger arithmetic that accelerates mental calculation speed.',
    packageContents: [
      '13-Rod Polished Hardwood Soroban Abacus Frame',
      'Spring-Loaded Quick Reset Push Mechanism',
      'Step-by-Step Color Illustrated Mental Math Exercise Guide',
      'Laminated Viva Preparation Concept Cards'
    ],
    preparationGuide: 'Press the reset button to clear beads, position on flat desk, and use thumb and index finger to move Earth and Heaven beads toward the reckoning bar.',
    safetyNotes: 'Polished natural beechwood with splinter-free satin finish. Non-toxic organic varnish.',
    vivaConcepts: [
      'How are numbers represented on a 1:4 Soroban abacus? The single upper bead (Heaven bead) equals 5 when shifted down; each of the four lower beads (Earth beads) equals 1 when shifted up toward the center reckoning bar.',
      'What mathematical concept does the abacus teach? Positional base-10 decimal place notation (units, tens, hundreds, thousands).',
      'How does abacus practice enhance mental arithmetic? Students transition from tactile manipulation to internal mental imagery of beads (Anzan), computing complex calculations in seconds.'
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
      { id: 'img-abac-1', url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80', altText: 'Wooden Soroban Abacus', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [1, 2, 3, 4, 5],
    subjects: ['mathematics'],
    stockOnHand: 50
  },

  // -------------------------------------------------------------
  // GRADE 2 to 6: Fraction Discs & Wheel
  // -------------------------------------------------------------
  {
    id: 'prod-mat-006',
    sku: 'PB-MAT-FRAC-06',
    slug: 'fraction-discs-and-wheel-tangram-board',
    title: 'Magnetic Fraction Discs, Fraction Wheel & Tangram Board',
    shortDescription: 'Tactile circular fraction wedges demonstrating equivalence (1/2 = 2/4 = 4/8), common denominators, and geometric sector proofs.',
    fullDescription: 'A premier visual mathematics model for Classes 2 to 6. Contains 9 color-coded magnetic fraction circles divided into 1 (whole), 1/2, 1/3, 1/4, 1/5, 1/6, 1/8, 1/10, and 1/12 sectors. Includes a dual-sided magnetic demonstration slate with metric degree markings (360° circle) and a 7-piece wooden Tangram puzzle. Students visually superimpose 2/4 over 1/2 to verify equivalence, solve fraction addition like 1/3 + 1/6 = 1/2 with tactile wedges, and convert sectors into angles and percentages.',
    packageContents: [
      '51x Color-Coded Magnetic Fraction Wedges (1 to 1/12)',
      '360-Degree Calibrated Metallic Demonstration Base Board',
      '7-Piece Wooden Geometric Tangram Set with Problem Cards',
      'Laminated Viva Preparation Concept Cards'
    ],
    preparationGuide: 'Place fraction pieces onto the 360° magnetic board to compare angles, find common denominators, and create equal sectors.',
    safetyNotes: 'Encased soft-touch rubberized magnetic foam. Safe for small hands.',
    vivaConcepts: [
      'What is an equivalent fraction and how does this model prove it? Fractions that describe the same area of a whole are equivalent. Superimposing two 1/4 wedges over the 1/2 wedge proves 1/2 = 2/4.',
      'How do you convert a fraction into a circular angle? Multiply by 360°. For instance, 1/3 * 360° = 120° central angle.',
      'What are proper, improper, and mixed fractions? Proper: numerator < denominator; Improper: numerator >= denominator; Mixed: whole number plus a proper fraction.'
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
      { id: 'img-frac-1', url: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80', altText: 'Magnetic Fraction Wheel Board', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [2, 3, 4, 5, 6],
    subjects: ['mathematics'],
    stockOnHand: 45
  },

  // -------------------------------------------------------------
  // GRADE 10 to 12: Conic Sections 3D Model
  // -------------------------------------------------------------
  {
    id: 'prod-mat-007',
    sku: 'PB-MAT-CNC-07',
    slug: 'conic-sections-3d-wooden-sliced-cone-model',
    title: 'Conic Sections 3D Hardwood Sectional Geometric Model',
    shortDescription: 'Precision dissectible wooden double-nappe cone revealing Circle, Ellipse, Parabola, and Hyperbola with magnetic alignment pins.',
    fullDescription: 'The gold standard practical mathematics model for Classes 10 to 12. Hand-carved from seasoned solid hardwood, this dual cone is sliced along four distinct geometrical plane angles. Precision magnetic dowels hold the sections securely together. Dissecting the pieces reveals the exact 2D curves formed by intersecting a plane with a cone: 1. Horizontal slice = Circle, 2. Shallow angle slice = Ellipse, 3. Slice parallel to generator slant edge = Parabola, and 4. Steep vertical slice = Hyperbola. An indispensable visual aid for CBSE/ICSE board viva exams on analytical coordinate geometry.',
    packageContents: [
      'Solid Beechwood Dissectible Conic Sections Model (5 interlocking pieces)',
      'Sturdy Turned Wooden Pedestal Base',
      '4x Clear Acrylic Planar Intersection Plates',
      'Laminated Senior Mathematics Viva Concept Cards'
    ],
    preparationGuide: 'Remove sections one by one from the pedestal to showcase cross-sectional conic curves to external examiners.',
    safetyNotes: 'Precision turned solid wood with concealed neodymium magnetic retainers.',
    vivaConcepts: [
      'Under what mathematical condition is a parabola produced from a conic section? When the intersecting cutting plane is parallel to the slant generator line of the cone (eccentricity e = 1).',
      'What defines the eccentricity of an ellipse, parabola, and hyperbola? Circle e = 0; Ellipse 0 < e < 1; Parabola e = 1; Hyperbola e > 1.',
      'State the general second-degree equation for conic sections: Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0, classified via discriminant (B^2 - 4AC).'
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
      { id: 'img-cnc-1', url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80', altText: 'Conic Sections 3D Model', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [10, 11, 12],
    subjects: ['mathematics'],
    stockOnHand: 25
  },

  // -------------------------------------------------------------
  // GRADE 6 to 12: Autonomous Line Follower Robot
  // -------------------------------------------------------------
  {
    id: 'prod-rob-007',
    sku: 'PB-ROB-LFR-07',
    slug: 'line-following-autonomous-robot-car',
    title: 'Autonomous Dual-Sensor Line Following Robot Car',
    shortDescription: 'Ready-to-run microcontroller-guided robotic buggy that tracks dark pathways automatically using twin infrared reflectometers.',
    fullDescription: 'An impressive robotics working model for middle and secondary students (Classes 6 to 12). Features a pre-soldered dual-channel infrared transmitter-receiver optical comparator circuit, twin micro gearmotors, and a castor balance wheel. Place the vehicle on the included 1-meter black oval vinyl track; when an IR sensor detects the black line, reflection drops, triggering differential motor steering that keeps the robot locked onto the path without any remote control or human touch.',
    packageContents: [
      'Pre-Assembled Autonomous Line-Follower Buggy',
      'Dual Infrared Optical Photodiode Sensor Modules with Calibration Pots',
      '100cm x 60cm Heavy-Gauge Vinyl Test Track',
      '9V Heavy-Duty Battery with Toggle Switch',
      'Laminated Viva Preparation Concept Cards'
    ],
    preparationGuide: 'Lay track on flat surface, turn robot switch ON, and place front caster over the black line to initiate automatic tracking.',
    safetyNotes: 'Low voltage 9V DC operation. Enclosed drive gears prevent wire entanglements.',
    vivaConcepts: [
      'How do infrared sensors distinguish between black line and white ground? White surfaces reflect ~90% of emitted IR light back to photodiode; black surfaces absorb IR light, signaling an obstacle or line edge.',
      'How does differential drive steering work in two-wheeled mobile robots? Left and right motors are driven independently; stopping the left motor while spinning the right motor pivots the robot smoothly to the left.',
      'What are industrial applications of line followers? Automated Guided Vehicles (AGVs) in Amazon warehouses and automated hospital payload transports.'
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
      { id: 'img-lfr-1', url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80', altText: 'Line Following Robot Car', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [6, 7, 8, 9, 10, 11, 12],
    subjects: ['robotics-ai', 'physics'],
    stockOnHand: 35
  },

  // -------------------------------------------------------------
  // GRADE 7 to 12: Ultrasonic Radar 180 Scanner
  // -------------------------------------------------------------
  {
    id: 'prod-rob-008',
    sku: 'PB-ROB-RDR-08',
    slug: 'ultrasonic-radar-180-visual-servo-scanner',
    title: 'Ultrasonic 180° Mini Radar Visual Sonar Scanner',
    shortDescription: 'High-tech sonar radar system sweeping 180 degrees via micro-servo with real-time target distance detection and alert tone.',
    fullDescription: 'The pinnacle of school robotics exhibitions. Features an HC-SR04 ultrasonic sound transducer mounted atop an SG90 micro-servo motor that sweeps continuously across 180 degrees. As it sweeps, ultrasonic pings measure obstacle range in real time (2cm to 300cm). When an intruding object enters the perimeter, an onboard RGB LED indicator shifts from green to flashing red and a piezo alarm beeps with target coordinates. An absolute showstopper that demonstrates military sonar and automotive blind-spot radar.',
    packageContents: [
      'Pre-Programmed Microcontroller Control Board with Servo Shield',
      'SG-90 180-Degree Precision Micro-Servo Motor',
      'HC-SR04 Dual-Transducer Ultrasonic Sonar Sensor',
      'Calibrated Acrylic Radar Angle Dial Grid',
      '9V Battery & DC Power Connector Cable',
      'Laminated Viva Preparation Concept Cards'
    ],
    preparationGuide: 'Place on exhibition counter and connect power. The servo begins automatic 180° sweep; wave hand in front to trigger detection alert.',
    safetyNotes: 'Ultrasonic frequency (40kHz) is completely silent and harmless to humans and domestic pets.',
    vivaConcepts: [
      'What formula calculates target distance in ultrasonic sensing? Distance = (Speed of Sound * Time Elapsed) / 2. Sound travels at 343 m/s in air; round-trip time divided by 2 gives distance.',
      'What is the difference between Radar and Sonar? Radar uses electromagnetic radio waves traveling at 300,000 km/s; Sonar uses acoustic pressure waves traveling at ~343 m/s.',
      'What is the function of the servo motor? The servo receives PWM (Pulse Width Modulation) angle pulses to position the sensor precisely at each degree between 0° and 180°.'
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
      { id: 'img-rdr-1', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', altText: 'Ultrasonic Radar 180 Scanner', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [7, 8, 9, 10, 11, 12],
    subjects: ['robotics-ai', 'physics'],
    stockOnHand: 20
  },

  // -------------------------------------------------------------
  // GRADE 1 to 4: Vibration Bristle-Bot Bug
  // -------------------------------------------------------------
  {
    id: 'prod-rob-009',
    sku: 'PB-ROB-BRS-09',
    slug: 'simple-vibration-bristle-bot-bug',
    title: 'Vibrating Bristle-Bot Micro-Robot Bug Kit',
    shortDescription: 'Fun micro-robot powered by high-RPM eccentric vibration motor and inclined toothbrush bristles that skitters across tables.',
    fullDescription: 'The ultimate beginner robotic kit for early primary grades (Classes 1 to 4). Made from an ergonomic toothbrush head angled bristles, a coin-cell lithium battery, and an eccentric rotating mass (ERM) micro vibration motor. As the off-center counterweight spins, rapid vibrations tilt the directional bristles, transforming oscillatory kinetic vibration into directional forward propulsion. Kids decorate their bugs with googly eyes and pipe cleaners, learning about closed circuits and kinetic locomotion.',
    packageContents: [
      '2x Angled Synthetic Bristle Robotic Heads',
      '2x Micro-ERM Vibration Motors with Pre-Stripped Leads',
      '2x 3V CR2032 Lithium Coin Cells',
      'Googly Eyes, Pipe Cleaners & Double-Sided Foam Tape',
      'Fun Illustrated Cartoon Science Explainer Card'
    ],
    preparationGuide: 'Tape motor to brush head, press leads to battery terminals, and set on table to watch the bug zoom and bounce.',
    safetyNotes: 'Low voltage 3V coin cell. Adult supervision recommended for children under 5.',
    vivaConcepts: [
      'How does an unbalanced motor make the bristle bot move forward? Centrifugal vibrations from the spinning off-center weight rock the slanted bristles, generating directional forward thrust.',
      'What completes the electrical circuit? Connecting motor leads to the positive and negative poles of the coin cell creates a closed conductive circuit for electron flow.',
      'Where else are vibration motors used in daily life? Haptic feedback vibration inside smartphones and game controllers.'
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
      { id: 'img-brs-1', url: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=800&q=80', altText: 'Vibrating Bristle Bot Bug', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [1, 2, 3, 4],
    subjects: ['robotics-ai', 'physics'],
    stockOnHand: 100
  },

  // -------------------------------------------------------------
  // GRADE 1 to 6: Wind Vane & Anemometer
  // -------------------------------------------------------------
  {
    id: 'prod-evs-009',
    sku: 'PB-EVS-WND-09',
    slug: 'wind-vane-and-anemometer-weather-station',
    title: 'Wind Vane & 3-Cup Anemometer Meteorological Station',
    shortDescription: 'Dual weather instrument measuring wind direction with 8-point compass rose and relative wind speed with frictionless rotating cups.',
    fullDescription: 'A classic environmental science working model for Classes 1 to 6. Combines an aerodynamically balanced wind vane with an 8-cardinal-point compass rose (North, South, East, West) and a 3-cup hemispherical cup anemometer spinning on miniature low-friction ball bearings. When placed outdoors or in front of an electric table fan, the tail fin steers the aerodynamic arrow directly into the wind vector, while the spinning cups give immediate visual speed comparison.',
    packageContents: [
      'Balanced Aerodynamic Arrow Wind Vane on Brass Pivot',
      '8-Point Compass Rose Base (N, NE, E, SE, S, SW, W, NW)',
      '3-Cup Hemispherical Anemometer Spinning Hub',
      'Sturdy Weighted Demonstration Table Base',
      'Laminated Viva Preparation Concept Cards'
    ],
    preparationGuide: 'Mount base on table, orient the North indicator, and demonstrate with breath or portable fan.',
    safetyNotes: 'Smooth rounded polycarbonate fins and non-toxic weighted stand.',
    vivaConcepts: [
      'Why does the arrowhead point into the wind? The large rear tail fin has greater surface area and wind drag, forcing the pointer into the oncoming wind vector.',
      'Why do the anemometer cups always spin in the same direction? The hollow side of a hemisphere has higher aerodynamic drag than the convex back, creating unidirectional rotational torque.',
      'What units are used to measure wind speed? Meters per second (m/s), Kilometers per hour (km/h), or Knots.'
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
      { id: 'img-wnd-1', url: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80', altText: 'Wind Vane and Anemometer Station', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [1, 2, 3, 4, 5, 6],
    subjects: ['environmental-science', 'physics'],
    stockOnHand: 50
  },

  // -------------------------------------------------------------
  // GRADE 2 to 8: Soil Erosion vs Vegetation
  // -------------------------------------------------------------
  {
    id: 'prod-evs-010',
    sku: 'PB-EVS-ERS-10',
    slug: 'soil-erosion-prevention-root-mesh-model',
    title: 'Soil Erosion vs Forest Vegetation Runoff Model',
    shortDescription: 'Dual-trough rainfall simulation showing muddy runoff from bare soil versus crystal-clear runoff from plant root mesh.',
    fullDescription: 'One of the most impactful and easy-to-understand environmental science exhibition models for Classes 2 to 8. Consists of two inclined erosion flumes: Flume A contains loose bare unplanted soil, while Flume B contains dense root-matted turf vegetation. Both lead into clear collection beakers. When simulated rain is poured over both troughs via the multi-hole sprinkler head, Flume A immediately discharges dark, muddy silt runoff and collapses, whereas Flume B discharges clear water as the root network securely binds soil particles and traps moisture.',
    packageContents: [
      'Dual-Chamber Inclined Runoff Flume Tray with Drainage Spouts',
      '2x Clear Optical Graduated Sediment Catch Beakers',
      'Dual-Nozzle Uniform Rain Simulation Shower Cup',
      'Natural Loam Soil & Root Binding Mesh Matrix',
      'Laminated Viva Preparation Concept Cards'
    ],
    preparationGuide: 'Fill both troughs with soil, place green root turf in Flume B, and pour equal water from the sprinkler cup simultaneously into both flumes.',
    safetyNotes: 'Natural non-toxic sterilized potting soil and recycled plastics.',
    vivaConcepts: [
      'How do plant roots prevent soil erosion and landslides? Plant roots create a dense underground mesh that physically binds soil aggregates and absorbs water kinetic energy.',
      'What are the dangers of deforestation on river systems? Without tree roots, heavy rain washes topsoil into rivers, silting riverbeds and triggering catastrophic flash floods.',
      'What is humus? Decayed organic plant and animal matter in topsoil that retains moisture and supplies plant nutrients.'
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
      { id: 'img-ers-1', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80', altText: 'Soil Erosion Demonstration Flume', isPrimary: true }
    ],
    boards: ['CBSE', 'ICSE', 'STATE_KA'],
    classes: [2, 3, 4, 5, 6, 7, 8],
    subjects: ['environmental-science', 'biology'],
    stockOnHand: 35
  }
];

const catalogPath = path.join(__dirname, '..', 'src', 'lib', 'data', 'catalog.ts');
let catalogContent = fs.readFileSync(catalogPath, 'utf8');

// Find the closing bracket of the PRODUCTS array: the last `];`
const lastCloseIdx = catalogContent.lastIndexOf('];');
if (lastCloseIdx === -1) {
  console.error('Could not find `];` in catalog.ts');
  process.exit(1);
}

const before = catalogContent.substring(0, lastCloseIdx).trimEnd();
const after = catalogContent.substring(lastCloseIdx);

// Convert each product to TS format
const formattedProducts = NEW_PRODUCTS.map(p => {
  return '  {\n' +
    `    id: '${p.id}',\n` +
    `    sku: '${p.sku}',\n` +
    `    slug: '${p.slug}',\n` +
    `    title: ${JSON.stringify(p.title)},\n` +
    `    shortDescription: ${JSON.stringify(p.shortDescription)},\n` +
    `    fullDescription: ${JSON.stringify(p.fullDescription)},\n` +
    `    packageContents: ${JSON.stringify(p.packageContents, null, 6)},\n` +
    `    preparationGuide: ${JSON.stringify(p.preparationGuide)},\n` +
    `    safetyNotes: ${JSON.stringify(p.safetyNotes)},\n` +
    `    vivaConcepts: ${JSON.stringify(p.vivaConcepts, null, 6)},\n` +
    `    dimensionsCm: '${p.dimensionsCm}',\n` +
    `    weightGrams: ${p.weightGrams},\n` +
    `    formatId: '${p.formatId}',\n` +
    `    difficulty: '${p.difficulty}',\n` +
    `    status: '${p.status}',\n` +
    `    mrpPaise: ${p.mrpPaise},\n` +
    `    sellingPricePaise: ${p.sellingPricePaise},\n` +
    `    ratingAvg: ${p.ratingAvg},\n` +
    `    ratingCount: ${p.ratingCount},\n` +
    `    isFeatured: ${p.isFeatured},\n` +
    `    isPopular: ${p.isPopular},\n` +
    `    requiresAssembly: ${p.requiresAssembly},\n` +
    `    images: ${JSON.stringify(p.images, null, 6)},\n` +
    `    boards: ${JSON.stringify(p.boards)},\n` +
    `    classes: ${JSON.stringify(p.classes)},\n` +
    `    subjects: ${JSON.stringify(p.subjects)},\n` +
    `    stockOnHand: ${p.stockOnHand}\n` +
    '  }';
}).join(',\n\n');

const updated = before + ',\n\n' + formattedProducts + '\n' + after;
fs.writeFileSync(catalogPath, updated, 'utf8');
console.log('Successfully inserted ' + NEW_PRODUCTS.length + ' products into catalog.ts!');
