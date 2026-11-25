/* /extra — scroll through every scene from dna.html */

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const EXTRA_VIEWER_ID = "extraDNA";
const story = document.getElementById("story");
const storyScenes = window.DNASimulation.getScenes();

if (prefersReduced) {
  document.documentElement.classList.add("no-snap");
}

const sections = [];
let activeIndex = 0;
let activeDnaScene = -1;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function addSection(sceneIndex, build) {
  const section = document.createElement("section");
  section.className = "cine";
  section.dataset.dnaScene = String(sceneIndex);

  const article = el("article", "story");
  build(article);
  section.appendChild(article);
  story.appendChild(section);
  sections.push(section);
}

function buildCover(article) {
  article.append(
    el("p", "eyebrow", "Interactive biology simulation"),
    (() => {
      const title = el("h1");
      title.append("DNA Mismatch ");
      title.append(el("span", null, "Repair"));
      return title;
    })(),
    el(
      "p",
      "lede",
      "Explore how DNA replicates, how mismatches happen, and how the mismatch repair system corrects errors."
    ),
    el(
      "p",
      "lede",
      "Scroll — or use the buttons along the bottom — to preview every scene, with the same words and 3D models as the main simulation."
    )
  );

  const actions = el("div", "cover-actions");
  const open = el("a", "primary-btn", "Open step-by-step simulation");
  open.href = "../dna.html";
  actions.append(open);
  article.append(actions);
}

function buildScene(article, scene, index) {
  article.append(
    el("p", "eyebrow", `Scene ${String(index + 1).padStart(2, "0")} of ${storyScenes.length}`),
    el("h1", null, scene.title),
    el("p", "lede", scene.description)
  );

  const card = el("div", "info-card");
  card.append(
    el("h2", null, "What's happening?"),
    el("p", null, scene.explanation)
  );

  const key = el("div", "keypoint");
  key.append(el("strong", null, "Key point"), el("p", null, scene.keypoint));
  card.append(key);

  if (scene.sequence) {
    const sequence = el("div", "sequence-box");
    sequence.innerHTML = scene.sequence;
    card.append(sequence);
  }

  article.append(card);
}

function renderStory() {
  addSection(0, buildCover);

  storyScenes.forEach((scene, index) => {
    addSection(index, (article) => buildScene(article, scene, index));
  });
}

function applyDnaScene(section) {
  const sceneIndex = parseInt(section.dataset.dnaScene, 10);
  const caption = document.getElementById("viewerCaption");

  if (caption) {
    caption.textContent =
      section === sections[0]
        ? "A rotating DNA double helix"
        : storyScenes[sceneIndex].title;
  }

  if (!window.DNASimulation || Number.isNaN(sceneIndex) || sceneIndex === activeDnaScene) {
    return;
  }

  activeDnaScene = sceneIndex;
  window.DNASimulation.setScene(sceneIndex, EXTRA_VIEWER_ID);
}

function scrollToIndex(index) {
  const section = sections[index];
  if (!section) return;

  gsap.to(window, {
    scrollTo: { y: section, autoKill: false },
    duration: prefersReduced ? 0.01 : 0.75,
    ease: "power3.inOut"
  });
}

function setActive(index) {
  activeIndex = index;
  const total = sections.length;
  const progress = document.getElementById("navProgress");
  const bar = document.getElementById("progressBar");
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");
  const onCover = index === 0;

  if (progress) {
    progress.textContent = onCover
      ? "Preview"
      : `Scene ${index} of ${storyScenes.length}`;
  }

  if (bar) {
    const amount = onCover ? 4 : (index / storyScenes.length) * 100;
    bar.style.width = `${amount}%`;
  }

  if (prev) prev.disabled = index === 0;

  if (next) {
    next.textContent = index === total - 1 ? "Replay preview" : onCover ? "Start preview →" : "Next scene →";
  }

  document.querySelectorAll(".scene-link").forEach((link, linkIndex) => {
    link.classList.toggle("is-active", linkIndex + 1 === index);
  });
}

function initProgress() {
  sections.forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      end: "bottom 40%",
      onEnter: () => {
        setActive(index);
        applyDnaScene(section);
      },
      onEnterBack: () => {
        setActive(index);
        applyDnaScene(section);
      }
    });
  });

  setActive(0);
}

function revealSection(section, immediate) {
  const bits = section.querySelectorAll(".eyebrow, h1, .lede, .info-card, .cover-actions");

  gsap.to(bits, {
    opacity: 1,
    y: 0,
    duration: prefersReduced || immediate ? 0.01 : 0.7,
    stagger: prefersReduced || immediate ? 0 : 0.08,
    ease: "back.out(1.5)",
    overwrite: "auto"
  });
}

function initReveals() {
  sections.forEach((section) => {
    const bits = section.querySelectorAll(".eyebrow, h1, .lede, .info-card, .cover-actions");

    if (!prefersReduced) {
      gsap.set(bits, { opacity: 0, y: 28 });
    }

    ScrollTrigger.create({
      trigger: section,
      start: "top 78%",
      onEnter: () => revealSection(section),
      onEnterBack: () => revealSection(section, true)
    });
  });

  revealSection(sections[0], prefersReduced);
}

function initDNA() {
  return window.DNASimulation.createDNA(EXTRA_VIEWER_ID).then(() => {
    applyDnaScene(sections[0]);
    activeDnaScene = 0;
  });
}

function initViewerControls() {
  const pauseBtn = document.getElementById("pauseBtn");
  const replayBtn = document.getElementById("replayBtn");

  pauseBtn?.addEventListener("click", () => {
    const viewer = window.DNASimulation.getViewer(EXTRA_VIEWER_ID);
    if (!viewer) return;

    viewer.paused = !viewer.paused;
    pauseBtn.textContent = viewer.paused ? "Play" : "Pause";
  });

  replayBtn?.addEventListener("click", () => {
    const viewer = window.DNASimulation.getViewer(EXTRA_VIEWER_ID);
    if (!viewer?.model) return;

    viewer.paused = false;
    viewer.model.rotation.set(0.12, 0, 0);
    viewer.model.position.set(0, 0, 0);
    viewer.zoom = 9.5;
    viewer.camera.position.set(0, 0, 9.5);
    viewer.animTime = 0;
    if (pauseBtn) pauseBtn.textContent = "Pause";

    gsap.fromTo(
      viewer.model.scale,
      { x: 0.86, y: 0.86, z: 0.86 },
      { x: 1, y: 1, z: 1, duration: 0.55, ease: "back.out(1.7)" }
    );
  });
}

function initDock() {
  document.getElementById("prevBtn")?.addEventListener("click", () => {
    scrollToIndex(Math.max(0, activeIndex - 1));
  });

  document.getElementById("nextBtn")?.addEventListener("click", () => {
    if (activeIndex >= sections.length - 1) {
      scrollToIndex(0);
      return;
    }

    scrollToIndex(activeIndex + 1);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowRight" && event.key !== "ArrowUp" && event.key !== "ArrowLeft") {
      return;
    }

    if (document.getElementById("sceneOverlay") && !document.getElementById("sceneOverlay").classList.contains("hidden")) {
      return;
    }

    event.preventDefault();

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      scrollToIndex(Math.min(sections.length - 1, activeIndex + 1));
    } else {
      scrollToIndex(Math.max(0, activeIndex - 1));
    }
  });
}

function initMenu() {
  const overlay = document.getElementById("sceneOverlay");
  const list = document.getElementById("sceneList");
  const openBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeMenu");

  storyScenes.forEach((scene, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "scene-link";

    const title = el("strong", null, `Scene ${index + 1}: ${scene.title}`);
    const description = el("small", null, scene.description);
    button.append(title, description);

    button.addEventListener("click", () => {
      closeMenu();
      scrollToIndex(index + 1);
    });

    list.append(button);
  });

  function openMenu() {
    overlay.classList.remove("hidden");
    document.body.classList.add("is-menu-open");
    document.documentElement.classList.add("no-snap");
  }

  function closeMenu() {
    overlay.classList.add("hidden");
    document.body.classList.remove("is-menu-open");
    if (!prefersReduced) {
      document.documentElement.classList.remove("no-snap");
    }
  }

  openBtn?.addEventListener("click", openMenu);
  closeBtn?.addEventListener("click", closeMenu);
  overlay?.addEventListener("click", (event) => {
    if (event.target === overlay) closeMenu();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function boot() {
  renderStory();
  initMenu();
  initDock();
  initViewerControls();
  initProgress();
  initReveals();
  initDNA();
  ScrollTrigger.refresh();
  window.addEventListener("load", () => ScrollTrigger.refresh());
}

boot();
