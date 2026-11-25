
/* =========================================================
   DNA MISMATCH REPAIR SIMULATION
   COMPLETE READY-TO-PASTE JAVASCRIPT
   14 DIFFERENT 3D SCENE ILLUSTRATIONS
   PASTEL PINK + BABY BLUE
========================================================= */

/* =========================================================
   1. SCENE CONTENT
========================================================= */

const scenes = [
  {
    title: "Introduction to DNA Mismatch Repair",
    description: "DNA replication is usually accurate, but sometimes mistakes happen when DNA is copied.",
    explanation: "DNA mismatch repair (MMR) is a natural repair system that identifies and corrects certain errors made during DNA replication. It helps maintain the accuracy of genetic information.",
    keypoint: "MMR corrects mismatched bases before they can become permanent mutations."
  },
  {
    title: "The Original DNA",
    description: "DNA is made of two complementary strands that form a double helix.",
    explanation: "The two DNA strands have sugar-phosphate backbones and nitrogenous bases. Adenine pairs with Thymine, while Guanine pairs with Cytosine. The strands run in opposite directions, making them antiparallel.",
    keypoint: "A pairs with T, G pairs with C. The strands run 5′→3′ and 3′→5′.",
    sequence: "TOP: &nbsp; 5′–A T G C C A T G A C T–3′<br>BOTTOM: 3′–T A C G G T A C T G A–5′"
  },
  {
    title: "Opening the DNA",
    description: "DNA replication begins when the double helix starts to unwind.",
    explanation: "Helicase separates the two DNA strands by breaking the hydrogen bonds between paired bases. Topoisomerase reduces twisting strain ahead of the replication fork. Single-strand binding proteins keep the separated strands stable.",
    keypoint: "Helicase opens DNA, topoisomerase reduces strain, and SSB proteins stabilize the strands."
  },
  {
    title: "Starting New Strands",
    description: "New DNA strands begin with the help of RNA primers.",
    explanation: "Primase creates short RNA primers. DNA polymerase attaches to these primers and adds complementary nucleotides using the original DNA strands as templates. It reads the template 3′→5′ and builds the new strand 5′→3′.",
    keypoint: "DNA polymerase builds new DNA in the 5′→3′ direction."
  },
  {
    title: "Leading and Lagging Strands",
    description: "DNA replication produces a leading strand and a lagging strand.",
    explanation: "The leading strand is synthesized continuously toward the replication fork using one primer. The lagging strand is synthesized discontinuously away from the fork in short sections called Okazaki fragments. RNA primers are replaced with DNA, and DNA ligase joins the fragments.",
    keypoint: "Leading strand = continuous. Lagging strand = Okazaki fragments."
  },
  {
    title: "Semiconservative Replication",
    description: "Replication produces two daughter DNA molecules.",
    explanation: "Each new DNA molecule contains one original parental strand and one newly synthesized strand. This process is known as semiconservative replication.",
    keypoint: "Each daughter DNA molecule has one old strand and one new strand."
  },
  {
    title: "A Mismatch Happens",
    description: "Sometimes DNA polymerase places an incorrect nucleotide into the new strand.",
    explanation: "In this example, the original template contains a Guanine (G), but the newly synthesized strand has a Thymine (T) opposite it instead of the correct Cytosine (C). This creates a G–T mismatch.",
    keypoint: "The G–T mismatch is an error that can still be recognized and repaired.",
    sequence: "TEMPLATE: 3′–T A C G G T A C T G A–5′<br>NEW STRAND: 5′–A T G C <strong style='color:#d94e72'>T</strong> A T G A C T–3′<br><strong style='color:#d94e72'>G–T MISMATCH</strong>"
  },
  {
    title: "If the Error Is Not Fixed",
    description: "An unrepaired mismatch can become a permanent mutation after another round of replication.",
    explanation: "If the mismatch is not repaired before the next replication, the two strands may serve as templates for different daughter DNA molecules. One can retain the original G–C pair, while another can acquire an A–T pair.",
    keypoint: "An unrepaired mismatch can become a permanent base substitution."
  },
  {
    title: "MutS, MutL, and MutH",
    description: "The bacterial mismatch repair system identifies the incorrect base.",
    explanation: "MutS recognizes and binds to the mismatch. MutL coordinates the repair process. MutH identifies a nearby hemimethylated GATC site and makes a nick in the unmethylated newly made daughter strand. The parental strand is methylated.",
    keypoint: "MutS detects, MutL coordinates, and MutH nicks the new strand."
  },
  {
    title: "Removing the Incorrect Section",
    description: "The section containing the incorrect nucleotide is removed.",
    explanation: "UvrD helicase unwinds the newly synthesized strand starting from the nick and moving beyond the mismatch. An exonuclease removes the section containing the incorrect base. Single-strand binding proteins stabilize the exposed template.",
    keypoint: "UvrD unwinds the DNA, and exonuclease removes the incorrect section."
  },
  {
    title: "Filling the Gap",
    description: "The missing DNA section is replaced with the correct nucleotides.",
    explanation: "DNA polymerase III uses the original parental strand as its template. Since the template contains Guanine (G), DNA polymerase adds Cytosine (C) opposite it. DNA synthesis proceeds in the 5′→3′ direction.",
    keypoint: "DNA polymerase III replaces the incorrect T with the correct C.",
    sequence: "TEMPLATE: 3′–T A C G G T A C T G A–5′<br>CORRECTED: 5′–A T G C <strong style='color:#248b70'>C</strong> A T G A C T–3′<br><strong style='color:#248b70'>G–C CORRECT PAIR</strong>"
  },
  {
    title: "Sealing the DNA",
    description: "The repaired DNA strand still has a small break in its backbone.",
    explanation: "DNA ligase seals the remaining nick in the sugar-phosphate backbone. This connects the DNA section into one continuous strand.",
    keypoint: "DNA ligase seals the nick and completes the repair process."
  },
  {
    title: "Before and After Repair",
    description: "The incorrect base has been replaced with the correct complementary nucleotide.",
    explanation: "Before repair, Guanine was incorrectly paired with Thymine. After mismatch repair, Thymine is replaced with Cytosine, restoring the correct G–C base pair.",
    keypoint: "Before: G–T mismatch. After: G–C correct pairing.",
    sequence: "<strong style='color:#d94e72'>BEFORE:</strong> G paired with T — MISMATCH<br><strong style='color:#248b70'>AFTER:</strong> G paired with C — CORRECTED"
  },
  {
    title: "Conclusion",
    description: "DNA mismatch repair protects the accuracy and stability of genetic information.",
    explanation: "Mismatch repair identifies errors that escape DNA polymerase proofreading. In the bacterial model, MutS, MutL, MutH, UvrD, exonuclease, DNA polymerase III, and DNA ligase work together to detect, remove, replace, and seal the incorrect DNA section.",
    keypoint: "Mismatch repair helps prevent replication errors from becoming permanent mutations."
  }
];

let currentScene = 0;


/* =========================================================
   2. LOAD THREE.JS
========================================================= */

let threeReady;

function loadThree() {
  if (window.THREE) return Promise.resolve();

  if (threeReady) return threeReady;

  threeReady = new Promise((resolve, reject) => {
    const script = document.createElement("script");

    script.src =
      "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js";

    script.onload = resolve;
    script.onerror = reject;

    document.head.appendChild(script);
  });

  return threeReady;
}


/* =========================================================
   3. MATERIALS AND 3D OBJECT HELPERS
========================================================= */

function mat(color, roughness = 0.23, metalness = 0.05) {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness,
    metalness,
    clearcoat: 1,
    clearcoatRoughness: 0.12
  });
}

function sphere(group, x, y, z, radius, material) {
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 32, 32),
    material
  );

  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  group.add(mesh);
  return mesh;
}

function cylinder(group, start, end, radius, material) {
  const a = new THREE.Vector3(...start);
  const b = new THREE.Vector3(...end);

  const direction = new THREE.Vector3().subVectors(b, a);

  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(
      radius,
      radius,
      direction.length(),
      24
    ),
    material
  );

  mesh.position.copy(a).add(b).multiplyScalar(0.5);

  mesh.quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction.normalize()
  );

  mesh.castShadow = true;
  mesh.receiveShadow = true;

  group.add(mesh);
  return mesh;
}


function label(group, text, x, y, z, color = "#52647a") {

  const canvas = document.createElement("canvas");

  canvas.width = 640;
  canvas.height = 160;

  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, 640, 160);

  let fontSize = 55;

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `bold ${fontSize}px Arial`;

  // Automatically shrink long labels
  while (
    ctx.measureText(text).width > 590 &&
    fontSize > 22
  ) {
    fontSize -= 2;
    ctx.font = `bold ${fontSize}px Arial`;
  }

  ctx.fillStyle = color;
  ctx.fillText(text, 320, 80, 590);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;

  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthWrite: false
    })
  );

  sprite.position.set(x, y, z);

  // Automatically adjust label width
  const labelWidth = Math.max(
    1.1,
    Math.min(3.0, text.length * 0.065)
  );

  sprite.scale.set(labelWidth, 0.42, 1);

  group.add(sprite);

  return sprite;
}


function protein(group, x, y, z, color, size = 0.35) {
  const material = mat(color);
  const cluster = new THREE.Group();

  for (let i = 0; i < 7; i++) {
    const angle = i * Math.PI * 2 / 7;

    sphere(
      cluster,
      Math.cos(angle) * size * 0.55,
      Math.sin(angle) * size * 0.55,
      Math.sin(angle * 2) * size * 0.25,
      size * 0.65,
      material
    );
  }

  sphere(cluster, 0, 0, 0, size * 0.7, material);

  cluster.position.set(x, y, z);
  group.add(cluster);

  return cluster;
}


/* =========================================================
   4. DNA CONSTRUCTION HELPERS
========================================================= */

function createHelix(group, options = {}) {
  const {
    x = 0,
    y = 0,
    z = 0,
    scale = 1,
    mismatchAt = -1,
    corrected = false
  } = options;

  const pink = mat(0xf3a4c4);
  const blue = mat(0x75c9ed);
  const pinkRod = mat(0xd982a8);
  const blueRod = mat(0x5baed0);
  const white = mat(0xffffff);

  const bases = {
    A: mat(0xe99bb8),
    T: mat(0x83c9e9),
    G: mat(0xb99bd7),
    C: mat(0x80cba9)
  };

  const pairs = [
    ["A", "T"], ["G", "C"],
    ["T", "A"], ["C", "G"]
  ];

  const first = [];
  const second = [];

  const count = 28;
  const radius = 0.65 * scale;
  const height = 5.2 * scale;

  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const angle = t * Math.PI * 4;
    const py = y - height / 2 + t * height;

    const a = new THREE.Vector3(
      x + radius * Math.cos(angle),
      py,
      z + radius * Math.sin(angle)
    );

    const b = new THREE.Vector3(
      x + radius * Math.cos(angle + Math.PI),
      py,
      z + radius * Math.sin(angle + Math.PI)
    );

    first.push(a);
    second.push(b);

    sphere(group, a.x, a.y, a.z, 0.13 * scale, pink);
    sphere(group, b.x, b.y, b.z, 0.13 * scale, blue);

    let pair = pairs[i % 4];

    if (i === mismatchAt) {
      pair = corrected ? ["G", "C"] : ["G", "T"];
    }

    const p = a.clone().lerp(b, 0.34);
    const q = a.clone().lerp(b, 0.66);

    sphere(group, p.x, p.y, p.z, 0.095 * scale, bases[pair[0]]);
    sphere(group, q.x, q.y, q.z, 0.095 * scale, bases[pair[1]]);

    cylinder(group, a.toArray(), p.toArray(), 0.045 * scale, pinkRod);
    cylinder(group, q.toArray(), b.toArray(), 0.045 * scale, blueRod);

    cylinder(group, p.toArray(), q.toArray(), 0.025 * scale, white);
  }

  for (let i = 0; i < count - 1; i++) {
    cylinder(
      group,
      first[i].toArray(),
      first[i + 1].toArray(),
      0.065 * scale,
      pinkRod
    );

    cylinder(
      group,
      second[i].toArray(),
      second[i + 1].toArray(),
      0.065 * scale,
      blueRod
    );
  }

  return { first, second };
}

function straightDNA(group, options = {}) {
  const {
    x = 0,
    y = 0,
    z = 0,
    length = 4.4,
    count = 15,
    gap = 0.55,
    missing = -1,
    wrong = -1,
    repaired = false
  } = options;

  const pink = mat(0xf3a4c4);
  const blue = mat(0x75c9ed);
  const pinkRod = mat(0xd982a8);
  const blueRod = mat(0x5baed0);
  const white = mat(0xffffff);
  const green = mat(0x80cba9);
  const red = mat(0xe77d91);

  for (let i = 0; i < count; i++) {
    const py = y - length / 2 + i * length / (count - 1);

    sphere(group, x - gap, py, z, 0.12, pink);
    sphere(group, x + gap, py, z, 0.12, blue);

    if (i !== missing) {
      cylinder(
        group,
        [x - gap, py, z],
        [x + gap, py, z],
        0.045,
        i === wrong && !repaired ? red : white
      );

      if (i === wrong) {
        sphere(
          group,
          x + gap,
          py,
          z,
          0.16,
          repaired ? green : red
        );

        sphere(
          group,
          x - gap,
          py,
          z,
          0.16,
          mat(0xb99bd7)
        );
      }
    }

    if (i < count - 1) {
      const ny = y - length / 2 +
        (i + 1) * length / (count - 1);

      cylinder(
        group,
        [x - gap, py, z],
        [x - gap, ny, z],
        0.065,
        pinkRod
      );

      cylinder(
        group,
        [x + gap, py, z],
        [x + gap, ny, z],
        0.065,
        blueRod
      );
    }
  }
}

function openStrands(group) {
  const pink = mat(0xf3a4c4);
  const blue = mat(0x75c9ed);
  const pinkRod = mat(0xd982a8);
  const blueRod = mat(0x5baed0);
  const white = mat(0xffffff);

  const count = 19;

  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const y = -2.2 + t * 4.4;
    const separation = Math.max(0, t - 0.2) * 2.1;

    const left = [-0.55 - separation, y, Math.sin(t * 5) * 0.25];
    const right = [0.55 + separation, y, Math.cos(t * 5) * 0.25];

    sphere(group, ...left, 0.12, pink);
    sphere(group, ...right, 0.12, blue);

    if (i < count - 1) {
      const nt = (i + 1) / (count - 1);
      const ny = -2.2 + nt * 4.4;
      const ns = Math.max(0, nt - 0.2) * 2.1;

      cylinder(
        group,
        left,
        [-0.55 - ns, ny, Math.sin(nt * 5) * 0.25],
        0.07,
        pinkRod
      );

      cylinder(
        group,
        right,
        [0.55 + ns, ny, Math.cos(nt * 5) * 0.25],
        0.07,
        blueRod
      );
    }

    if (t < 0.25) {
      cylinder(group, left, right, 0.035, white);
    }
  }
}

function highlightMismatch(group, x, y, z) {
  sphere(group, x - 0.32, y, z, 0.18, mat(0xb99bd7));
  sphere(group, x + 0.32, y, z, 0.18, mat(0xe77d91));

  cylinder(
    group,
    [x - 0.32, y, z],
    [x + 0.32, y, z],
    0.035,
    mat(0xe77d91)
  );

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.47, 0.035, 16, 64),
    mat(0xe77d91)
  );

  ring.position.set(x, y, z);
  group.add(ring);
}

function strandFragment(group, x1, y1, x2, y2, color) {
  cylinder(
    group,
    [x1, y1, 0.3],
    [x2, y2, 0.3],
    0.10,
    color
  );

  sphere(group, x1, y1, 0.3, 0.12, color);
  sphere(group, x2, y2, 0.3, 0.12, color);
}


/* =========================================================
   5. BUILD A DIFFERENT ILLUSTRATION FOR EACH SCENE
========================================================= */

function buildDNA(scene, elementId) {
  const model = new THREE.Group();

  const pink = mat(0xf3a4c4);
  const blue = mat(0x75c9ed);
  const purple = mat(0xb99bd7);
  const green = mat(0x80cba9);
  const yellow = mat(0xf4d58d);
  const white = mat(0xffffff);
  const red = mat(0xe77d91);

  switch (currentScene) {

    /* ---------------------------------------------
       SCENE 1 — COMPLETE DNA HELIX
    --------------------------------------------- */

    case 0:
      createHelix(model);
      break;

    /* ---------------------------------------------
       SCENE 2 — ORIGINAL DNA AND BASE PAIRS
    --------------------------------------------- */

    case 1:
      createHelix(model, { scale: 1.12 });

      label(model, "A - T", -1.5, 1.5, 1.2);
      label(model, "G - C", 1.5, -1.2, 1.2);
      break;

    /* ---------------------------------------------
       SCENE 3 — HELICASE OPENS DNA
    --------------------------------------------- */

    case 2:
      openStrands(model);

      protein(model, 0, 1.5, 0, 0xf0b2cf, 0.5);
      protein(model, -2.2, 0, 0, 0x83c9ed, 0.3);
      protein(model, 2.2, 0, 0, 0x83c9ed, 0.3);

      label(model, "HELICASE", 0, 2.3, 0.4, "#bd6891");
      break;

    /* ---------------------------------------------
       SCENE 4 — PRIMASE AND DNA POLYMERASE
    --------------------------------------------- */

    case 3:
      openStrands(model);

      protein(model, -1.5, -1.5, 0.5, 0x83c9ed, 0.48);
      protein(model, 1.5, 1.5, 0.5, 0xf3a4c4, 0.5);

      for (let i = 0; i < 5; i++) {
        cylinder(
          model,
          [-1.7 + i * 0.12, -1.8 + i * 0.14, 0.5],
          [-1.3 + i * 0.12, -1.8 + i * 0.14, 0.5],
          0.07,
          yellow
        );
      }

      label(model, "RNA PRIMER", -2, -2.4, 0.5, "#bd6891");
      label(model, "DNA POLYMERASE", 1.5, 2.25, 0.5, "#368fb7");
      break;

    /* ---------------------------------------------
       SCENE 5 — LEADING AND LAGGING STRANDS
    --------------------------------------------- */

    case 4:
      straightDNA(model, {
        x: -0.8,
        length: 4.6,
        count: 17
      });

      // Continuous leading strand
      cylinder(
        model,
        [-0.8, -2.5, 0.2],
        [-0.8, 2.5, 0.2],
        0.12,
        pink
      );

      // Discontinuous Okazaki fragments
      for (let i = 0; i < 4; i++) {
        const y = -2 + i * 1.3;

        strandFragment(
          model,
          0.3,
          y,
          1.3,
          y + 0.5,
          blue
        );
      }

      label(model, "LEADING", -1.5, 2.7, 0.5, "#bd6891");
      label(model, "LAGGING", 1.2, 2.7, 0.5, "#368fb7");
      label(model, "OKAZAKI", 1.7, -2.5, 0.5);
      break;

    /* ---------------------------------------------
       SCENE 6 — SEMICONSERVATIVE REPLICATION
    --------------------------------------------- */

    
case 5:

  createHelix(model, {
    x: -1.15,
    z: 0,
    scale: 0.72
  });

  createHelix(model, {
    x: 1.15,
    z: 0,
    scale: 0.72
  });

  label(model, "DAUGHTER DNA 1", -1.15, 2.7, 0.5, "#bd6891");
  label(model, "DAUGHTER DNA 2", 1.15, 2.7, 0.5, "#368fb7");

  break;

    /* ---------------------------------------------
       SCENE 7 — MISMATCH OCCURS
    --------------------------------------------- */

    case 6:
      straightDNA(model, {
        length: 4.8,
        count: 17,
        wrong: 8
      });

      highlightMismatch(model, 0, 0, 0.2);

      label(model, "G - T MISMATCH", 0, 2.8, 0.5, "#d94e72");
      break;

    /* ---------------------------------------------
       SCENE 8 — UNREPAIRED MISMATCH
    --------------------------------------------- */

    
case 7:

  createHelix(model, {
    x: -1.15,
    scale: 0.72
  });

  createHelix(model, {
    x: 1.15,
    scale: 0.72,
    mismatchAt: 13
  });

  highlightMismatch(model, 1.15, 0.15, 0.2);

  label(model, "ORIGINAL", -1.15, 2.7, 0.5, "#368fb7");
  label(model, "POSSIBLE MUTATION", 1.15, 2.7, 0.5, "#d94e72");

  break;


    /* ---------------------------------------------
       SCENE 9 — MUTS, MUTL AND MUTH
    --------------------------------------------- */

    case 8:
      straightDNA(model, {
        length: 4.5,
        count: 17,
        wrong: 8
      });

      highlightMismatch(model, 0, 0, 0.2);

      protein(model, 0, 0.8, 0.5, 0xf3a4c4, 0.55);
      protein(model, 0, -0.4, 0.6, 0xb99bd7, 0.43);
      protein(model, 1.3, -1.5, 0.6, 0x75c9ed, 0.4);

      label(model, "MutS", -1.7, 1.8, 0.7, "#bd6891");
      label(model, "MutL", 1.7, 0.6, 0.7, "#8971b5");
      label(model, "MutH", 2, -2, 0.7, "#368fb7");
      break;

    /* ---------------------------------------------
       SCENE 10 — REMOVING INCORRECT SECTION
    --------------------------------------------- */

    case 9:
      straightDNA(model, {
        length: 4.5,
        count: 17,
        missing: 8
      });

      highlightMismatch(model, 0, 0, 0.2);

      protein(model, 1.5, 0.2, 0.5, 0x75c9ed, 0.5);
      protein(model, -1.5, -1.1, 0.5, 0xf3a4c4, 0.38);

      // Removed nucleotide section
      for (let i = 0; i < 4; i++) {
        sphere(
          model,
          1.2 + i * 0.25,
          -1.8 - Math.sin(i) * 0.3,
          0.5,
          0.09,
          red
        );
      }

      label(model, "EXCISED SECTION", 1.4, -2.5, 0.5, "#d94e72");
      label(model, "DNA GAP", -1.2, 1.2, 0.5, "#368fb7");
      break;

    /* ---------------------------------------------
       SCENE 11 — FILLING THE GAP
    --------------------------------------------- */

    case 10:
      straightDNA(model, {
        length: 4.5,
        count: 17,
        missing: 8
      });

      // New complementary nucleotides
      for (let i = 0; i < 5; i++) {
        const y = -1.1 + i * 0.28;

        sphere(model, 0.55, y, 0.2, 0.12, green);

        if (i < 4) {
          cylinder(
            model,
            [0.55, y, 0.2],
            [0.55, y + 0.28, 0.2],
            0.045,
            green
          );
        }
      }

      protein(model, 1.6, 0.5, 0.5, 0x75c9ed, 0.55);

      label(model, "DNA POLYMERASE III", 1.5, 1.5, 0.5, "#368fb7");
      label(model, "NEW DNA", 1.1, -2, 0.5, "#248b70");
      break;

    /* ---------------------------------------------
       SCENE 12 — DNA LIGASE SEALS THE NICK
    --------------------------------------------- */

    case 11:
      straightDNA(model, {
        length: 4.5,
        count: 17
      });

      protein(model, 0.9, 0.2, 0.6, 0xf3a4c4, 0.52);

      sphere(model, -0.55, 0.1, 0.5, 0.12, green);
      sphere(model, 0.55, 0.1, 0.5, 0.12, green);

      cylinder(
        model,
        [-0.55, 0.1, 0.5],
        [0.55, 0.1, 0.5],
        0.07,
        green
      );

      label(model, "DNA LIGASE", 1.2, 1.2, 0.5, "#bd6891");
      label(model, "SEALED BACKBONE", -1, -1.6, 0.5, "#248b70");
      break;

    /* ---------------------------------------------
       SCENE 13 — BEFORE AND AFTER REPAIR
    --------------------------------------------- */

    case 12:

  // BEFORE REPAIR
  straightDNA(model, {
    x: -1.15,
    length: 4.2,
    count: 13,
    wrong: 6,
    gap: 0.65
  });

  // AFTER REPAIR
  straightDNA(model, {
    x: 1.15,
    length: 4.2,
    count: 13,
    wrong: 6,
    repaired: true,
    gap: 0.65
  });

  highlightMismatch(model, -1.15, 0, 0.3);

  label(model, "BEFORE", -1.15, 2.5, 0.5, "#d94e72");
  label(model, "AFTER", 1.15, 2.5, 0.5, "#248b70");

  label(model, "G - T", -1.15, -2.5, 0.5, "#d94e72");
  label(model, "G - C", 1.15, -2.5, 0.5, "#248b70");

  break;


    /* ---------------------------------------------
       SCENE 14 — COMPLETE REPAIRED DNA
    --------------------------------------------- */

    case 13:
      createHelix(model, {
        scale: 1.1,
        corrected: true
      });

      label(model, "DNA REPAIR COMPLETE", 0, 3, 0.5, "#248b70");
      break;
  }

  scene.add(model);

  return model;
}


/* =========================================================
   6. THREE.JS VIEWER
========================================================= */

const dnaModels = {};

function createDNA(elementId) {
  const container = document.getElementById(elementId);

  if (!container || dnaModels[elementId]) return;

  loadThree().then(() => {
    if (!container.isConnected || dnaModels[elementId]) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      38,
      1,
      0.1,
      100
    );

    camera.position.set(0, 0, 9.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    renderer.setClearColor(0xffffff, 0);

    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    renderer.domElement.style.touchAction = "none";

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 1.7));

    const light1 = new THREE.DirectionalLight(0xffffff, 3);
    light1.position.set(-4, 5, 7);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xffa6ce, 35, 18);
    light2.position.set(-3, 2, 4);
    scene.add(light2);

    const light3 = new THREE.PointLight(0x83d9ff, 35, 18);
    light3.position.set(3, -2, 4);
    scene.add(light3);

    const light4 = new THREE.DirectionalLight(0xffffff, 1.5);
    light4.position.set(3, -3, -5);
    scene.add(light4);

    const data = {
      scene,
      camera,
      renderer,
      container,
      model: null,
      paused: false,
      dragging: false,
      lastX: 0,
      lastY: 0,
      zoom: 9.5,
      frame: null
    };

    dnaModels[elementId] = data;

    function resize() {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    }

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    data.observer = observer;

    resize();

    // Mouse and touch rotation
    const canvas = renderer.domElement;

    canvas.addEventListener("pointerdown", event => {
      data.dragging = true;
      data.lastX = event.clientX;
      data.lastY = event.clientY;

      canvas.setPointerCapture(event.pointerId);
    });

    canvas.addEventListener("pointermove", event => {
      if (!data.dragging || !data.model) return;

      const dx = event.clientX - data.lastX;
      const dy = event.clientY - data.lastY;

      data.model.rotation.y += dx * 0.008;
      data.model.rotation.x += dy * 0.008;

      data.lastX = event.clientX;
      data.lastY = event.clientY;
    });

    function stopDrag() {
      data.dragging = false;
    }

    canvas.addEventListener("pointerup", stopDrag);
    canvas.addEventListener("pointercancel", stopDrag);
    canvas.addEventListener("lostpointercapture", stopDrag);

    // Zoom
    canvas.addEventListener("wheel", event => {
      event.preventDefault();

      data.zoom += event.deltaY * 0.006;

      data.zoom = THREE.MathUtils.clamp(
        data.zoom,
        6,
        16
      );

      camera.position.z = data.zoom;
    }, { passive: false });

    data.animTime = 0;

    // Render loop
    const homeViewer = elementId === "homeDNA";

    function animate() {
      data.frame = requestAnimationFrame(animate);
      data.animTime += 0.016;

      const t = data.animTime;

      if (
        data.model &&
        !data.paused &&
        !data.dragging
      ) {
        data.model.rotation.y += homeViewer ? 0.008 : 0.005;
        data.model.position.y = Math.sin(t * 1.35) * (homeViewer ? 0.18 : 0.12);
        data.model.position.x = Math.cos(t * 0.85) * (homeViewer ? 0.08 : 0.05);
        data.model.rotation.x = 0.12 + Math.sin(t * 1.1) * 0.12;
        data.model.rotation.z = Math.sin(t * 0.75) * 0.08;
      }

      renderer.render(scene, camera);
    }

    animate();

    // Create initial illustration
    updateDNA(elementId);

  }).catch(error => {
    console.error(error);

    container.innerHTML =
      "<p style='text-align:center;padding:30px;color:#bd6891'>Unable to load 3D illustration. Check your internet connection.</p>";
  });
}


/* =========================================================
   7. CHANGE THE 3D ILLUSTRATION
========================================================= */

function updateDNA(elementId) {
  const data = dnaModels[elementId];

  if (!data) return;

  if (data.model) {
    data.scene.remove(data.model);

    data.model.traverse(object => {
      if (object.geometry) object.geometry.dispose();

      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(m => {
            if (m.map) m.map.dispose();
            m.dispose();
          });
        } else {
          if (object.material.map) object.material.map.dispose();
          object.material.dispose();
        }
      }
    });
  }

  data.model = buildDNA(data.scene, elementId);

  data.model.rotation.set(0.12, 0, 0);
  data.model.position.set(0, 0, 0);
  data.animTime = 0;

  data.zoom = 9.5;
  data.camera.position.set(0, 0, 9.5);
}


/* =========================================================
   8. INITIALIZE BOTH DNA VIEWERS
========================================================= */

createDNA("homeDNA");
createDNA("sceneDNA");


/* =========================================================
   9. START SIMULATION
========================================================= */

function switchView(showId) {
  const ids = ["home", "simulation", "sceneMenu"];

  ids.forEach(id => {
    const el = document.getElementById(id);

    if (id === showId) {
      el.classList.remove("hidden", "view-leave");
      el.classList.add("view-enter");
    } else {
      el.classList.add("hidden");
      el.classList.remove("view-enter", "view-leave");
    }
  });

  const dock = document.getElementById("simDock");
  const simulationOpen = showId === "simulation";

  if (dock) {
    dock.classList.toggle("hidden", !simulationOpen);
    dock.setAttribute("aria-hidden", simulationOpen ? "false" : "true");
  }

  document.body.classList.toggle("simulation-active", simulationOpen);
}

function startSimulation() {
  switchView("simulation");

  currentScene = 0;

  displayScene();
}


/* =========================================================
   10. DISPLAY CURRENT SCENE
========================================================= */

function displayScene() {
  const scene = scenes[currentScene];

  document.getElementById("sceneNumber").textContent =
    `SCENE ${String(currentScene + 1).padStart(2, "0")} OF 14`;

  document.getElementById("sceneTitle").textContent =
    scene.title;

  document.getElementById("sceneDescription").textContent =
    scene.description;

  document.getElementById("sceneExplanation").textContent =
    scene.explanation;

  document.getElementById("sceneKeypoint").textContent =
    scene.keypoint;

  const sequenceBox = document.getElementById("sequenceBox");

  if (scene.sequence) {
    sequenceBox.innerHTML = scene.sequence;
    sequenceBox.classList.remove("hidden");
  } else {
    sequenceBox.innerHTML = "";
    sequenceBox.classList.add("hidden");
  }

  const progress = ((currentScene + 1) / scenes.length) * 100;

  document.getElementById("progressBar").style.width =
    progress + "%";

  document.getElementById("progressText").textContent =
    `Scene ${currentScene + 1} of ${scenes.length}`;

  document.getElementById("previousBtn").disabled =
    currentScene === 0;

  document.getElementById("nextBtn").textContent =
    currentScene === scenes.length - 1
      ? "Finish Simulation ✓"
      : "Next Scene →";

  updateDNA("sceneDNA");

  replayAnimation();

  const grid = document.querySelector(".simulation-grid");
  const infoCard = document.querySelector(".information-card");

  if (grid) {
    grid.classList.remove("scene-enter");
    void grid.offsetWidth;
    grid.classList.add("scene-enter");
  }

  if (infoCard) {
    infoCard.classList.remove("content-swap");
    void infoCard.offsetWidth;
    infoCard.classList.add("content-swap");
  }
}


/* =========================================================
   11. NEXT AND PREVIOUS
========================================================= */

function nextScene() {
  if (currentScene < scenes.length - 1) {
    currentScene++;
    displayScene();
  } else {
    showMenu();
  }
}

function previousScene() {
  if (currentScene > 0) {
    currentScene--;
    displayScene();
  }
}


/* =========================================================
   12. PAUSE AND PLAY
========================================================= */

function toggleAnimation() {
  const data = dnaModels["sceneDNA"];

  if (!data) return;

  data.paused = !data.paused;

  document.getElementById("pauseBtn").textContent =
    data.paused ? "Play" : "Pause";
}


/* =========================================================
   13. REPLAY
========================================================= */

function replayAnimation() {
  const data = dnaModels["sceneDNA"];

  if (!data) return;

  data.paused = false;

  data.model.rotation.set(0.12, 0, 0);
  data.model.position.set(0, 0, 0);

  data.zoom = 9.5;
  data.camera.position.set(0, 0, 9.5);
  data.animTime = 0;

  document.getElementById("pauseBtn").textContent =
    "Pause";
}


/* =========================================================
   14. SCENE MENU
========================================================= */

function showMenu() {
  switchView("sceneMenu");

  const list = document.getElementById("sceneList");

  list.innerHTML = "";

  scenes.forEach((scene, index) => {
    const button = document.createElement("button");

    button.className = "scene-link";

    const title = document.createElement("strong");
    title.textContent =
      `Scene ${index + 1}: ${scene.title}`;

    const description = document.createElement("small");
    description.textContent = scene.description;

    button.appendChild(title);
    button.appendChild(description);

    button.addEventListener("click", () => {
      currentScene = index;

      switchView("simulation");

      displayScene();
    });

    list.appendChild(button);
  });
}


/* =========================================================
   15. BACK TO HOME
========================================================= */

function goHome() {
  switchView("home");
}
