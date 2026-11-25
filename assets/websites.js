/**
 * VPKBIET IKS Digital Heritage Hub - Student Website Projects Controller
 * Handles loading, filtering, search, and dynamic QR generation for student websites
 */

const state = {
  websites: [],
  selectedBranch: "all",
  searchQuery: "",
  activeWebsite: null
};

// Default fallback if data/websites.json fails to load offline
const DEFAULT_WEBSITES = [
  {
    id: "iks-digital-heritage-hub",
    title: "IKS Digital Heritage Hub",
    titleMr: "IKS डिजिटल हेरिटेज हब",
    tagline: "Central Web Platform for Preserving, Exploring & Promoting Indian Knowledge Systems",
    description: "A comprehensive digital heritage repository and interactive platform developed to document, preserve, and showcase 70+ student multidisciplinary engineering research projects covering ancient Indian mathematics, metallurgy, temple acoustics, hydraulic architecture, and astronomy.",
    branch: "AIDS-5",
    academicYear: "2026-2027",
    techStack: ["HTML5", "CSS3", "JavaScript", "SVG Graphics", "QRCode.js"],
    liveUrl: "index.html",
    thumbnail: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    isFlagship: true,
    teamMembers: [
      {
        name: "Viraj Vijaykumar Pathak",
        role: "Website Development & Technical Lead",
        department: "AIDS-5",
        email: "viraj.vijaykumar.pathak@vpkbiet.ac.in"
      },
      {
        name: "Soham Somanath Wavhal",
        role: "Content Management & Documentation Lead",
        department: "AIDS-5",
        email: "soham.somanath.wavhal@vpkbiet.ac.in"
      },
      {
        name: "Parth Bankar",
        role: "Student Data Collection & Coordination Lead",
        department: "E&TC",
        email: "parth.bankar@vpkbiet.ac.in"
      }
    ]
  },
  {
    id: "pingala-chandashastra-science-of-meter",
    title: "Chhanda Shastra of Pingala: Science of Meter",
    titleMr: "पिंगलांचे छंदशास्त्र: प्राचीन भारतीय काव्यछंद आणि द्विमान प्रणाली",
    tagline: "Interactive 3D Gaṇa Cube, Mātrā Meru (Pascal's Triangle), Binary Systems & Chandas Scanner",
    description: "An interactive digital platform exploring Acharya Pingala's ancient Chhandaśāstra (c. 3rd-2nd century BCE). Features real-time interactive tools including a 3D Gaṇa rotation cube with speech synthesis, Mātrā-Meru (Pascal's triangle) visualization, Fibonacci sequence mappings, moric binary converter, and a live Sanskrit Chandas verse scanner.",
    branch: "AIDS-3",
    academicYear: "2026-2027",
    techStack: ["HTML5", "CSS 3D", "Canvas 2D", "Web Speech API", "JavaScript", "Combinatorics"],
    liveUrl: "websites/pingala-chandashastra/index.html",
    thumbnail: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    isFlagship: false,
    teamMembers: [
      {
        name: "Pranali Khedkar",
        role: "Project Leader",
        department: "AIDS-3",
        email: "pranali.khedkar@vpkbiet.ac.in"
      },
      {
        name: "Pranjali Jogdand",
        role: "Student Researcher",
        department: "AIDS-3",
        email: "pranjali.jogdand@vpkbiet.ac.in"
      },
      {
        name: "Rutuja Patil",
        role: "Student Researcher",
        department: "AIDS-3",
        email: "rutuja.patil@vpkbiet.ac.in"
      },
      {
        name: "Priyadarshini Shinde",
        role: "Student Researcher",
        department: "AIDS-3",
        email: "priyadarshini.shinde@vpkbiet.ac.in"
      },
      {
        name: "Poonam Mungase",
        role: "Student Researcher",
        department: "AIDS-3",
        email: "poonam.mungase@vpkbiet.ac.in"
      },
      {
        name: "Rajnandini Phate",
        role: "Student Researcher",
        department: "AIDS-3",
        email: "rajnandini.phate@vpkbiet.ac.in"
      }
    ]
  },
  {
    id: "the-ancient-archaeology-of-india",
    title: "The Ancient Archaeology of India: Five Thousand Years in Brick & Stone",
    titleMr: "प्राचीन भारतीय पुरातत्त्वशास्त्र: विटा आणि दगडांमधील पाच हजार वर्षांचा इतिहास",
    tagline: "Walk through Mohenjo-daro, Sanchi, Ajanta, Ellora, Konark and Hampi with 3D Monument Models",
    description: "An interactive 3D web platform exploring India's five-thousand-year archaeological heritage starting from 7000 BCE. Features real-time 3D monument models of ancient civil and sacred engineering including Mohenjo-daro, Sanchi Stupa, Ajanta and Ellora Caves, Konark Sun Temple, and Hampi.",
    branch: "AIDS-1",
    academicYear: "2026-2027",
    techStack: ["Lovable.app", "React", "Three.js 3D", "Tailwind CSS", "Vite"],
    liveUrl: "https://thearchologyofindia.lovable.app/",
    thumbnail: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    isFlagship: false,
    teamMembers: [
      {
        name: "Aditya Avinash Gaikwad",
        role: "Project Leader",
        department: "AIDS-1",
        email: "aditya.avinash.gaikwad@vpkbiet.ac.in"
      },
      {
        name: "Aditya Dasharath Jadhav",
        role: "Student Researcher",
        department: "AIDS-1",
        email: "aditya.dasharath.jadhav@vpkbiet.ac.in"
      },
      {
        name: "Aayush Sachin Pahade",
        role: "Student Researcher",
        department: "AIDS-1",
        email: "aayush.sachin.pahade@vpkbiet.ac.in"
      },
      {
        name: "Abhinav Maruti Hingane",
        role: "Student Researcher",
        department: "AIDS-1",
        email: "abhinav.maruti.hingane@vpkbiet.ac.in"
      },
      {
        name: "Alisha Faruk Attar",
        role: "Student Researcher",
        department: "AIDS-1",
        email: "alisha.faruk.attar@vpkbiet.ac.in"
      },
      {
        name: "Archana Omprakash Shukla",
        role: "Student Researcher",
        department: "AIDS-1",
        email: "archana.omprakash.shukla@vpkbiet.ac.in"
      },
      {
        name: "Aljina Rajuddin Sayyad",
        role: "Student Researcher",
        department: "AIDS-1",
        email: "aljina.rajuddin.sayyad@vpkbiet.ac.in"
      },
      {
        name: "Arpita Ranjeet Pisal",
        role: "Student Researcher",
        department: "AIDS-1",
        email: "arpita.ranjeet.pisal@vpkbiet.ac.in"
      }
    ]
  },
  {
    id: "coding-and-decoding-in-ancient-india",
    title: "Coding and Decoding in Ancient India: Cryptography & Binary Systems",
    titleMr: "प्राचीन भारतातील कोडिंग आणि डिकोडिंग: गुप्तलेखनशास्त्र आणि द्विमान प्रणाली",
    tagline: "Alphanumeric Ciphers, Katapayadi System, Gudhalekhya & Historical Information Security",
    description: "An interactive web platform investigating historical Indian ciphers and coded communication. Demonstrates the Katapayadi mnemonic number system, Kautilya's Gudhalekhya from Arthashastra, letter and sound substitution principles, and the evolution toward modern information security.",
    branch: "AIDS-2",
    academicYear: "2026-2027",
    techStack: ["HTML5", "CSS3", "JavaScript", "Netlify", "Ciphers"],
    liveUrl: "https://aids-2group-2iksproject2026.netlify.app/",
    thumbnail: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    isFlagship: false,
    teamMembers: [
      {
        name: "Durgeshwar Eklare",
        role: "Project Leader",
        department: "AIDS-2",
        email: "durgeshwar.eklare@vpkbiet.ac.in"
      },
      {
        name: "Aditya Gawali",
        role: "Student Researcher",
        department: "AIDS-2",
        email: "aditya.gawali@vpkbiet.ac.in"
      },
      {
        name: "Harshal Borse",
        role: "Student Researcher",
        department: "AIDS-2",
        email: "harshal.borse@vpkbiet.ac.in"
      },
      {
        name: "Harshal Maske",
        role: "Student Researcher",
        department: "AIDS-2",
        email: "harshal.maske@vpkbiet.ac.in"
      },
      {
        name: "Harsh Wanjole",
        role: "Student Researcher",
        department: "AIDS-2",
        email: "harsh.wanjole@vpkbiet.ac.in"
      },
      {
        name: "Ishant Kalbhor",
        role: "Student Researcher",
        department: "AIDS-2",
        email: "ishant.kalbhor@vpkbiet.ac.in"
      },
      {
        name: "Jayesh Kulkarni",
        role: "Student Researcher",
        department: "AIDS-2",
        email: "jayesh.kulkarni@vpkbiet.ac.in"
      }
    ]
  },
  {
    id: "sarthcalc-vedic-maths-calculators",
    title: "Sarthcalc: 16 Vedic Mathematics Sutra Calculators",
    titleMr: "सार्थ-कॅल्क: १६ वैदिक गणित सूत्र कॅल्क्युलेटर",
    tagline: "Interactive Calculators for all 16 Vedic Mathematics Sutras & High-Speed Mental Calculation",
    description: "A comprehensive computational calculator platform developed for all 16 Vedic Mathematics Sutras. Enables rapid mental calculation simulations, algebraic shortcuts, division and squaring algorithms (Nikhilam, Urdhva Tiryagbhyam, Ekadhikena Purvena) with dynamic step-by-step visualizations.",
    branch: "AIDS-4",
    academicYear: "2026-2027",
    techStack: ["Vedic Maths", "JavaScript", "Netlify", "Math Engines"],
    liveUrl: "https://sarthcalc.netlify.app/",
    thumbnail: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    isFlagship: false,
    teamMembers: [
      {
        name: "Sarthak Khomane",
        role: "Project Leader",
        department: "AIDS-4",
        email: "sarthak.khomane@vpkbiet.ac.in"
      },
      {
        name: "Sangram Nadgude",
        role: "Student Researcher",
        department: "AIDS-4",
        email: "sangram.nadgude@vpkbiet.ac.in"
      },
      {
        name: "Shreyas Saste",
        role: "Student Researcher",
        department: "AIDS-4",
        email: "shreyas.saste@vpkbiet.ac.in"
      },
      {
        name: "Samarth Khot",
        role: "Student Researcher",
        department: "AIDS-4",
        email: "samarth.khot@vpkbiet.ac.in"
      },
      {
        name: "Sarthak Machale",
        role: "Student Researcher",
        department: "AIDS-4",
        email: "sarthak.machale@vpkbiet.ac.in"
      },
      {
        name: "Sahil Nanawre",
        role: "Student Researcher",
        department: "AIDS-4",
        email: "sahil.nanawre@vpkbiet.ac.in"
      }
    ]
  },
  {
    id: "iks-interactive-ai-assistant",
    title: "IKS Interactive AI Knowledge & Research Dialogues",
    titleMr: "IKS संवादात्मक AI ज्ञान आणि संशोधन प्रणाली",
    tagline: "AI-Powered Exploration & Computational Dialogues on Indian Knowledge Systems",
    description: "An interactive digital knowledge retrieval and research dialogue session powered by Google Gemini AI. Allows students and visitors to explore nuanced engineering concepts, architectural principles, astronomical models, and historical texts of ancient India through guided AI synthesis.",
    branch: "AIDS-5",
    academicYear: "2026-2027",
    techStack: ["Google Gemini AI", "Interactive Assistant", "Knowledge Retrieval"],
    liveUrl: "https://gemini.google.com/share/13040c72f603?social_preview=true&skid=5dec912f-0452-4bf7-aa40-01784b871fad",
    thumbnail: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    isFlagship: false,
    teamMembers: [
      {
        name: "VPKBIET Student Innovations",
        role: "Research & AI Prompt Engineering Team",
        department: "AIDS-5",
        email: "iks@vpkbiet.ac.in"
      }
    ]
  }
];

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showToast(message) {
  const existing = document.querySelector(".iks-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "iks-toast";
  toast.setAttribute("role", "alert");
  toast.innerHTML = `<span aria-hidden="true">✦</span> <span>${escapeHtml(message)}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideInToast 0.3s ease reverse";
    setTimeout(() => toast.remove(), 280);
  }, 2600);
}

// Generate the Hub QR code that points to this page
function renderHubQR() {
  const hubQrBox = document.getElementById("hub-qr-canvas");
  if (!hubQrBox) return;
  hubQrBox.innerHTML = "";

  const pageUrl = window.location.href.split("#")[0];

  if (typeof QRCode !== "undefined") {
    try {
      new QRCode(hubQrBox, {
        text: pageUrl,
        width: 140,
        height: 140,
        colorDark: "#0b1512",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
      });
    } catch (e) {
      hubQrBox.innerHTML = `<div style="font-size:0.75rem; color:#000;">[QR Ready]</div>`;
    }
  }

  const dlHubBtn = document.getElementById("download-hub-qr-btn");
  if (dlHubBtn) {
    dlHubBtn.onclick = () => {
      const img = hubQrBox.querySelector("img") || hubQrBox.querySelector("canvas");
      if (img) {
        const src = img.src || (img.toDataURL ? img.toDataURL("image/png") : null);
        if (src) {
          const a = document.createElement("a");
          a.href = src;
          a.download = "VPKBIET-IKS-Websites-Hub-QR.png";
          document.body.appendChild(a);
          a.click();
          a.remove();
          showToast("Hub QR code downloaded!");
        }
      }
    };
  }

  const copyHubBtn = document.getElementById("copy-hub-link-btn");
  if (copyHubBtn) {
    copyHubBtn.onclick = async () => {
      try {
        await navigator.clipboard.writeText(pageUrl);
        showToast("Websites Hub link copied to clipboard!");
      } catch (err) {
        showToast("Link: " + pageUrl);
      }
    };
  }
}

// Render the grid of website projects
function renderWebsites() {
  const grid = document.getElementById("websites-grid");
  const countEl = document.getElementById("websites-count-display");
  const emptyState = document.getElementById("websites-empty-state");
  if (!grid) return;

  grid.innerHTML = "";
  const query = state.searchQuery.trim().toLowerCase();

  const filtered = state.websites.filter((site) => {
    const titleMatch = (site.title || "").toLowerCase().includes(query) || (site.titleMr || "").toLowerCase().includes(query);
    const descMatch = (site.description || "").toLowerCase().includes(query) || (site.tagline || "").toLowerCase().includes(query);
    const techMatch = (site.techStack || []).some((t) => t.toLowerCase().includes(query));
    const teamMatch = (site.teamMembers || []).some((m) => m.name.toLowerCase().includes(query));
    const branchMatch = (site.branch || "").toLowerCase().includes(query);

    const matchesSearch = !query || titleMatch || descMatch || techMatch || teamMatch || branchMatch;

    let matchesBranch = true;
    if (state.selectedBranch !== "all") {
      matchesBranch = (site.branch || "").toUpperCase() === state.selectedBranch.toUpperCase();
    }

    return matchesSearch && matchesBranch;
  });

  if (countEl) {
    countEl.textContent = String(filtered.length).padStart(2, "0");
  }

  if (filtered.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    return;
  } else {
    if (emptyState) emptyState.style.display = "none";
  }

  filtered.forEach((site) => {
    const card = document.createElement("article");
    card.className = `project-card website-card ${site.isFlagship ? "pinned-project-card" : ""}`;

    const thumbnail = site.thumbnail || "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80";
    const branch = site.branch || "VPKBIET";
    const teamCount = site.teamMembers?.length || 1;
    const initialLetters = (site.teamMembers || []).slice(0, 3).map((m) => m.name.charAt(0));

    // Resolve URL (if it's a relative URL or full external URL)
    const targetUrl = site.liveUrl || "#";

    card.innerHTML = `
      <div class="card-image-box">
        <img src="${thumbnail}" alt="${escapeHtml(site.title)}" loading="lazy">
        <span class="card-type-badge">🌐 Web Application</span>
        ${site.isFlagship ? `<span class="card-award-badge" style="background: linear-gradient(135deg, #d4af37, #f38a1e); color: #0b1512; font-weight: 800; border: 1px solid rgba(255,255,255,0.7); box-shadow: 0 4px 14px rgba(212, 175, 55, 0.5);">★ FLAGSHIP HUB</span>` : ""}
      </div>

      <div class="card-content">
        <div class="card-date-row">
          <span>📅 ${escapeHtml(site.academicYear || "2026-2027")}</span>
          <span class="card-branch-tag">🏛️ ${escapeHtml(branch)} · VPKBIET</span>
        </div>

        <h3 class="card-title">${escapeHtml(site.title)}</h3>
        ${site.tagline ? `<p style="font-size: 0.85rem; color: var(--gold-light); margin-bottom: 8px; font-weight: 500;">${escapeHtml(site.tagline)}</p>` : ""}
        <p class="card-summary">${escapeHtml(site.description)}</p>

        <!-- Tech Stack Badges -->
        <div class="tech-stack-row" style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px;">
          ${(site.techStack || []).map((tech) => `<span class="preset-photo-pill" style="font-size: 0.72rem; padding: 2px 8px;">${escapeHtml(tech)}</span>`).join("")}
        </div>

        <!-- Team Members & Actions -->
        <div class="card-team-snippet" style="margin-bottom: 16px;">
          <div class="team-avatars-row">
            ${initialLetters.map((l) => `<div class="team-avatar-initial">${escapeHtml(l)}</div>`).join("")}
            <span class="team-count-text">${teamCount} Student Developers</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="website-actions-row" style="display: flex; gap: 10px; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 14px;">
          <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-gold" style="flex: 1.2; justify-content: center; text-decoration: none; padding: 9px 14px; font-size: 0.85rem;">
            <span>Launch Website</span> <span>↗</span>
          </a>
          <button type="button" class="btn-secondary-outline site-qr-btn" data-site-id="${escapeHtml(site.id)}" style="flex: 0.8; justify-content: center; padding: 9px 12px; font-size: 0.82rem;">
            <span>📱 QR</span>
          </button>
        </div>
      </div>
    `;

    // Hook up individual QR code popup
    card.querySelector(".site-qr-btn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      openWebsiteQRModal(site);
    });

    grid.appendChild(card);
  });
}

// Open modal showing individual QR code for a specific student website
function openWebsiteQRModal(site) {
  const modal = document.getElementById("website-qr-modal");
  const titleEl = document.getElementById("site-qr-modal-title");
  const descEl = document.getElementById("site-qr-modal-desc");
  const qrBox = document.getElementById("site-qr-modal-canvas");
  const openLink = document.getElementById("site-qr-modal-open-link");
  const dlBtn = document.getElementById("site-qr-modal-download-btn");
  const copyBtn = document.getElementById("site-qr-modal-copy-btn");

  if (!modal || !qrBox) return;

  state.activeWebsite = site;
  if (titleEl) titleEl.textContent = site.title;
  if (descEl) descEl.textContent = site.tagline || site.description;

  // Compute full URL
  let fullUrl = site.liveUrl || "";
  if (!fullUrl.startsWith("http://") && !fullUrl.startsWith("https://")) {
    const origin = window.location.origin;
    const path = window.location.pathname.replace(/[^/]*$/, "");
    fullUrl = `${origin}${path}${fullUrl}`;
  }

  if (openLink) {
    openLink.href = fullUrl;
  }

  qrBox.innerHTML = "";
  if (typeof QRCode !== "undefined") {
    try {
      new QRCode(qrBox, {
        text: fullUrl,
        width: 190,
        height: 190,
        colorDark: "#0b1512",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
      });
    } catch (err) {
      try {
        new QRCode(qrBox, {
          text: fullUrl,
          width: 190,
          height: 190,
          colorDark: "#0b1512",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.L
        });
      } catch (e2) {
        qrBox.innerHTML = `<p style="padding:20px; font-size:0.8rem; color:#000;">[QR Ready: ${escapeHtml(site.id)}]</p>`;
      }
    }
  }

  if (dlBtn) {
    dlBtn.onclick = () => {
      const img = qrBox.querySelector("img") || qrBox.querySelector("canvas");
      if (img) {
        const src = img.src || (img.toDataURL ? img.toDataURL("image/png") : null);
        if (src) {
          const a = document.createElement("a");
          a.href = src;
          a.download = `VPKBIET-IKS-${site.id}-QR.png`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          showToast("Website QR code downloaded!");
        }
      }
    };
  }

  if (copyBtn) {
    copyBtn.onclick = async () => {
      try {
        await navigator.clipboard.writeText(fullUrl);
        showToast("Website link copied!");
      } catch (err) {
        showToast("Link: " + fullUrl);
      }
    };
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeWebsiteQRModal() {
  const modal = document.getElementById("website-qr-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Background particle animation
function initParticleCanvas() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 0.5,
    speedX: (Math.random() - 0.5) * 0.4,
    speedY: -Math.random() * 0.5 - 0.2,
    alpha: Math.random() * 0.6 + 0.2
  }));

  function loop() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.y < 0) p.y = height;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(212, 175, 55, 0.4)";
      ctx.fill();
    });
    requestAnimationFrame(loop);
  }
  loop();
}

// Initialization
async function init() {
  initParticleCanvas();

  // Load from data/websites.json
  try {
    const res = await fetch(`./data/websites.json?t=${Date.now()}`, { cache: "no-store" });
    if (res.ok) {
      state.websites = await res.json();
    } else {
      state.websites = DEFAULT_WEBSITES;
    }
  } catch (err) {
    console.warn("Using default websites dataset:", err);
    state.websites = DEFAULT_WEBSITES;
  }

  renderHubQR();
  renderWebsites();

  // Search input
  const searchInput = document.getElementById("website-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderWebsites();
    });
  }

  // Branch dropdown filter
  const branchSelect = document.getElementById("website-branch-select");
  if (branchSelect) {
    branchSelect.addEventListener("change", (e) => {
      state.selectedBranch = e.target.value;
      renderWebsites();
    });
  }

  // Modal close handlers
  document.getElementById("close-site-qr-modal-btn")?.addEventListener("click", closeWebsiteQRModal);
  document.getElementById("website-qr-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "website-qr-modal") closeWebsiteQRModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeWebsiteQRModal();
  });
}

document.addEventListener("DOMContentLoaded", init);
