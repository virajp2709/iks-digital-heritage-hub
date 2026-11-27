/**
 * VPKBIET IKS Digital Heritage Hub - Student Website Projects Controller
 * Handles loading, filtering, search, dynamic QR generation, Explore modal, and Admin editing of student websites
 */

const state = {
  websites: [],
  selectedBranch: "all",
  searchQuery: "",
  activeWebsite: null
};

// Default catalog of all student websites
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
  },
  {
    id: "water-harvesting-in-ancient-india",
    title: "Water Harvesting in Ancient India: Traditional Hydraulic Engineering & Climate Resilience",
    titleMr: "प्राचीन भारतातील जलसंधारण: पारंपरिक जल अभियांत्रिकी, शाश्वत जलव्यवस्थापन आणि हवामान बदलाशी सामना",
    tagline: "Traditional Hydraulic Architecture, Stepwells, Baolis, Ahar-Pyne & Dholavira Water Engineering",
    description: "An interactive digital platform exploring the traditional water harvesting systems of ancient India and their relevance to modern challenges such as climate change, groundwater depletion, and water scarcity. Features interactive studies of Baolis in Rajasthan, Ahar-Pyne systems in Bihar, Kuls in Himachal Pradesh, Harappan wedge-shaped well bricks, gravity-fed distribution, Kallanai Grand Anicut, and Dholavira's advanced reservoirs.",
    branch: "AIDS-4",
    academicYear: "2026-2027",
    techStack: ["Lovable.app", "React", "Hydraulic Architecture", "Tailwind CSS", "Vite"],
    liveUrl: "https://waterharvestinginancientindia.lovable.app/",
    thumbnail: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    isFlagship: false,
    teamMembers: [
      {
        name: "Shambhuraj Deshmukh",
        role: "Project Leader",
        department: "AIDS-4",
        email: "shambhuraj.deshmukh@vpkbiet.ac.in"
      },
      {
        name: "Shreya Bhosale",
        role: "Student Researcher",
        department: "AIDS-4",
        email: "shreya.bhosale@vpkbiet.ac.in"
      },
      {
        name: "Rutuja Zadage",
        role: "Student Researcher",
        department: "AIDS-4",
        email: "rutuja.zadage@vpkbiet.ac.in"
      },
      {
        name: "Shambhuraj Kadam",
        role: "Student Researcher",
        department: "AIDS-4",
        email: "shambhuraj.kadam@vpkbiet.ac.in"
      },
      {
        name: "Ranveer Dhanawade",
        role: "Student Researcher",
        department: "AIDS-4",
        email: "ranveer.dhanawade@vpkbiet.ac.in"
      },
      {
        name: "Rushikesh Ransing",
        role: "Student Researcher",
        department: "AIDS-4",
        email: "rushikesh.ransing@vpkbiet.ac.in"
      }
    ]
  },
  {
    id: "panini-grammar-ancient-sutras-to-silicon-logic",
    title: "Pāṇini’s Grammar: Where Ancient Sūtras Become Silicon Logic",
    titleMr: "पाणिनींचे व्याकरण: अष्टाध्यायी, संस्कृत भाषाशास्त्र आणि संगणकीय तार्किक प्रणाली",
    tagline: "Interactive 14 Māheśvara Sūtras, Pratyāhāra Explorer, Word Formation Compiler & Modern AI/NLP Bridge",
    description: "An interactive computational linguistics platform exploring Maharṣi Pāṇini’s Aṣṭādhyāyī (~3,959 algorithmic rules, c. 5th-4th century BCE). Features dual-theme Manuscript & Cosmic Logic modes, a live 14 Māheśvara Sūtras and Pratyāhāra phonetic set compression explorer, step-by-step word formation compiler trace (Yaṇ Sandhi, Dīrgha Sandhi, Samāsa, Tiṅanta), side-by-side Backus-Naur Form (Pāṇini-Backus Form) and AI/NLP semantic role labeling comparisons, and an interactive knowledge quiz.",
    branch: "AIDS-3",
    academicYear: "2026-2027",
    techStack: ["Tailwind CSS", "JavaScript", "Computational Linguistics", "Dual-Theme Engine", "Interactive Compilers"],
    liveUrl: "websites/panini-grammar/index.html",
    thumbnail: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    isFlagship: false,
    teamMembers: [
      {
        name: "Pradnya Ganesh Bankar",
        role: "Project Leader",
        department: "AIDS-3",
        email: "pradnya.bankar@vpkbiet.ac.in"
      },
      {
        name: "Poonam Dinesh Chavan",
        role: "Student Researcher",
        department: "AIDS-3",
        email: "poonam.chavan@vpkbiet.ac.in"
      },
      {
        name: "Mayuri Sagare",
        role: "Student Researcher",
        department: "AIDS-3",
        email: "mayuri.sagare@vpkbiet.ac.in"
      },
      {
        name: "Payal Balaso Gend",
        role: "Student Researcher",
        department: "AIDS-3",
        email: "payal.gend@vpkbiet.ac.in"
      },
      {
        name: "Purva Jagtap",
        role: "Student Researcher",
        department: "AIDS-3",
        email: "purva.jagtap@vpkbiet.ac.in"
      },
      {
        name: "Nikita Shinde",
        role: "Student Researcher",
        department: "AIDS-3",
        email: "nikita.shinde@vpkbiet.ac.in"
      }
    ]
  },
  {
    id: "iks-ai-knowledge-dialogue-session-2",
    title: "IKS Advanced AI Research & Knowledge Dialogues (Session II)",
    titleMr: "IKS प्रगत AI ज्ञान आणि संशोधन संवाद (सत्र २)",
    tagline: "Interactive Deep Exploration & Scientific Dialogues on Indian Knowledge Systems powered by Google Gemini",
    description: "An advanced interactive AI knowledge exploration and research dialogue session powered by Google Gemini AI. Allows students, researchers, and exhibition visitors to engage in interactive discussions on Indian Knowledge Systems, ancient engineering methodologies, historical texts, and modern technological connections.",
    branch: "AIDS-5",
    academicYear: "2026-2027",
    techStack: ["Google Gemini AI", "Knowledge Synthesis", "Interactive Research", "IKS Prompting"],
    liveUrl: "https://gemini.google.com/share/2a5cce6561d4?social_preview=true&skid=63392ca3-ffd7-439a-a9a9-0935ac8ed0fa",
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
      const img = hubQrBox.querySelector("img");
      const canvas = hubQrBox.querySelector("canvas");
      let dataUrl = "";
      if (img && img.src) {
        dataUrl = img.src;
      } else if (canvas) {
        dataUrl = canvas.toDataURL("image/png");
      }
      if (dataUrl) {
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = "vpkbiet-iks-student-websites-qr.png";
        a.click();
        showToast("Exhibition Hub QR downloaded successfully");
      } else {
        showToast("QR code image preparing, please retry in a second");
      }
    };
  }

  const copyHubBtn = document.getElementById("copy-hub-link-btn");
  if (copyHubBtn) {
    copyHubBtn.onclick = () => {
      navigator.clipboard?.writeText(pageUrl)
        .then(() => showToast("Hub link copied to clipboard"))
        .catch(() => showToast("Could not copy link"));
    };
  }
}

// Render the grid of website projects
function renderWebsites() {
  const grid = document.getElementById("websites-grid");
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

  if (filtered.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    return;
  } else {
    if (emptyState) emptyState.style.display = "none";
  }

  filtered.forEach((site) => {
    const card = document.createElement("article");
    card.className = `project-card website-card ${site.isFlagship ? "pinned-project-card" : ""}`;
    card.style.cursor = "pointer";

    const thumbnail = site.thumbnail || "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80";
    const branch = site.branch || "VPKBIET";
    const teamCount = site.teamMembers?.length || 1;
    const initialLetters = (site.teamMembers || []).slice(0, 3).map((m) => m.name.charAt(0));

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
          <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-gold launch-site-link" style="flex: 1.2; justify-content: center; text-decoration: none; padding: 9px 14px; font-size: 0.85rem;">
            <span>Launch Website</span> <span>↗</span>
          </a>
          <button type="button" class="btn-secondary-outline site-explore-btn" data-site-id="${escapeHtml(site.id)}" style="flex: 0.9; justify-content: center; padding: 9px 12px; font-size: 0.85rem;">
            <span>✦ Explore</span>
          </button>
        </div>
      </div>
    `;

    // Clicking anywhere on the card or the Explore button opens the Explore Details modal
    card.addEventListener("click", (e) => {
      if (e.target.closest(".launch-site-link")) {
        return; // Allow direct website opening
      }
      openWebsiteDetailModal(site);
    });

    grid.appendChild(card);
  });
}

// Compute the full target URL (handling relative vs absolute)
function computeFullUrl(rawUrl) {
  let url = rawUrl || "";
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    const origin = window.location.origin;
    const path = window.location.pathname.replace(/[^/]*$/, "");
    url = `${origin}${path}${url}`;
  }
  return url;
}

// Open the rich Explore Details modal for a website project
function openWebsiteDetailModal(site) {
  state.activeWebsite = site;
  const modal = document.getElementById("website-detail-modal");
  if (!modal) return;

  const targetUrl = site.liveUrl || "#";
  const fullUrl = computeFullUrl(site.liveUrl);

  // Populate Header & Meta
  const imgEl = document.getElementById("modal-site-img");
  const captionEl = document.getElementById("modal-site-caption");
  if (imgEl) imgEl.src = site.thumbnail || "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80";
  if (captionEl) captionEl.textContent = `${site.title} · VPKBIET Student Innovation`;

  const dateEl = document.getElementById("modal-site-date");
  const branchEl = document.getElementById("modal-site-branch");
  const titleEl = document.getElementById("modal-site-title");
  const taglineEl = document.getElementById("modal-site-tagline");

  if (dateEl) dateEl.textContent = `📅 Academic Year: ${site.academicYear || "2026-2027"}`;
  if (branchEl) branchEl.textContent = `🏛️ ${site.branch || "VPKBIET"} · VPKBIET`;
  if (titleEl) titleEl.textContent = site.title;
  if (taglineEl) taglineEl.textContent = site.tagline || "";

  // Direct Launch Buttons
  const topLaunch = document.getElementById("modal-site-direct-launch-btn");
  const bottomLaunch = document.getElementById("modal-site-bottom-launch-btn");
  if (topLaunch) topLaunch.href = targetUrl;
  if (bottomLaunch) bottomLaunch.href = targetUrl;

  // Tab 1: Overview & Tech Stack
  const descEl = document.getElementById("modal-site-description");
  if (descEl) descEl.textContent = site.description || "Interactive student engineering project developed at VPKBIET IKS Cell.";

  const techEl = document.getElementById("modal-site-tech");
  if (techEl) {
    techEl.innerHTML = (site.techStack || ["Web Technology", "IKS"])
      .map((t) => `<span class="preset-photo-pill" style="font-size: 0.8rem; padding: 4px 10px;">${escapeHtml(t)}</span>`)
      .join("");
  }

  // Tab 2: Student Developers Grid
  const teamGrid = document.getElementById("modal-site-team-grid");
  if (teamGrid) {
    teamGrid.innerHTML = (site.teamMembers || []).map((member) => `
      <div class="team-member-card">
        <div class="member-avatar">${escapeHtml((member.name || "?").charAt(0))}</div>
        <div class="member-info">
          <h4>${escapeHtml(member.name || "Student Developer")}</h4>
          <p>${escapeHtml(member.role || "Developer")}</p>
          <small>${escapeHtml(member.department || site.branch || "")} · VPKBIET</small>
          ${member.email ? `<small style="display:block; color:var(--text-muted); font-size:0.75rem; margin-top:2px;">${escapeHtml(member.email)}</small>` : ""}
        </div>
      </div>
    `).join("");
  }

  // Tab 3: QR Code Studio
  const qrCanvas = document.getElementById("modal-site-qrcode-canvas");
  const qrUrlText = document.getElementById("modal-site-qr-url-text");
  if (qrUrlText) qrUrlText.textContent = fullUrl;

  if (qrCanvas) {
    qrCanvas.innerHTML = "";
    if (typeof QRCode !== "undefined") {
      try {
        new QRCode(qrCanvas, {
          text: fullUrl,
          width: 180,
          height: 180,
          colorDark: "#0b1512",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });
      } catch (e1) {
        try {
          new QRCode(qrCanvas, {
            text: fullUrl,
            width: 180,
            height: 180,
            colorDark: "#0b1512",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.L
          });
        } catch (e2) {
          qrCanvas.innerHTML = `<div style="font-size:0.8rem; color:#000;">[QR Ready]</div>`;
        }
      }
    }
  }

  // Reset tab to overview
  switchModalTab("site-overview");

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeWebsiteDetailModal() {
  const modal = document.getElementById("website-detail-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Tab switcher for website explore modal
function switchModalTab(tabId) {
  const tabBtns = document.querySelectorAll("#website-detail-modal .modal-tab-btn");
  const tabPanes = document.querySelectorAll("#website-detail-modal .modal-tab-pane");

  tabBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });

  tabPanes.forEach((pane) => {
    pane.classList.toggle("active", pane.id === `tab-${tabId}`);
  });
}

let adminActionContext = {
  mode: "edit",
  site: null
};

// Admin Authentication & Edit Workflow (Always requires password "2026" every time)
function triggerWebsiteEditWorkflow() {
  if (!state.activeWebsite) return;
  adminActionContext = { mode: "edit", site: state.activeWebsite };
  openAdminAuthModal();
}

// Admin Add Website Workflow (Always requires password "2026" every time)
function triggerWebsiteAddWorkflow() {
  adminActionContext = { mode: "add", site: null };
  openAdminAuthModal();
}

function openAdminAuthModal() {
  const authModal = document.getElementById("admin-auth-modal");
  const passInput = document.getElementById("admin-pass-input");
  const authError = document.getElementById("admin-auth-error");

  if (!authModal) return;
  authModal.classList.add("active");
  if (passInput) {
    passInput.value = "";
    passInput.focus();
  }
  if (authError) authError.style.display = "none";
  document.body.style.overflow = "hidden";
}

function closeAdminAuthModal() {
  const authModal = document.getElementById("admin-auth-modal");
  if (authModal) {
    authModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Render student member input rows inside the edit modal
function renderEditTeamRows(members) {
  const container = document.getElementById("edit-team-members-list");
  if (!container) return;

  container.innerHTML = "";
  const list = members && members.length > 0 ? members : [{ name: "", role: "Project Leader", department: "AIDS-1", email: "" }];

  list.forEach((m, idx) => {
    const row = document.createElement("div");
    row.className = "edit-team-row";
    row.style.cssText = "display: grid; grid-template-columns: 2fr 1.5fr 1fr 2fr auto; gap: 8px; align-items: center; background: rgba(0,0,0,0.3); padding: 8px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);";

    row.innerHTML = `
      <input type="text" class="member-name-input" placeholder="Student Name" value="${escapeHtml(m.name || "")}" required style="padding: 7px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-gold); background: #16201a; color: #fff; font-size: 0.85rem;">
      <select class="member-role-input" style="padding: 7px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-gold); background: #16201a; color: #fff; font-size: 0.85rem;">
        <option value="Project Leader" ${m.role === "Project Leader" ? "selected" : ""}>Project Leader</option>
        <option value="Student Researcher" ${m.role !== "Project Leader" ? "selected" : ""}>Student Researcher</option>
        <option value="Developer">Developer</option>
      </select>
      <input type="text" class="member-dept-input" placeholder="Branch" value="${escapeHtml(m.department || "")}" style="padding: 7px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-gold); background: #16201a; color: #fff; font-size: 0.85rem;">
      <input type="email" class="member-email-input" placeholder="College Email" value="${escapeHtml(m.email || "")}" style="padding: 7px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-gold); background: #16201a; color: #fff; font-size: 0.85rem;">
      <button type="button" class="remove-member-row-btn" style="background: none; border: 1px solid rgba(255,100,100,0.4); color: #ff8888; border-radius: var(--radius-sm); width: 32px; height: 32px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1rem;" title="Remove student">✕</button>
    `;

    row.querySelector(".remove-member-row-btn").onclick = () => {
      row.remove();
    };

    container.appendChild(row);
  });
}

function openWebsiteEditModal(site) {
  closeAdminAuthModal();
  const editModal = document.getElementById("website-edit-modal");
  if (!editModal || !site) return;

  document.getElementById("edit-site-id").value = site.id;
  document.getElementById("edit-site-modal-heading").textContent = "Edit Website & Student Details";
  const saveBtnText = document.getElementById("save-site-btn-text");
  if (saveBtnText) saveBtnText.textContent = "Save Changes";

  document.getElementById("edit-site-title").value = site.title || "";
  document.getElementById("edit-site-branch").value = site.branch || "AIDS-1";
  document.getElementById("edit-site-year").value = site.academicYear || "2026-2027";
  document.getElementById("edit-site-url").value = site.liveUrl || "";
  document.getElementById("edit-site-tagline").value = site.tagline || "";
  document.getElementById("edit-site-desc").value = site.description || "";
  document.getElementById("edit-site-tech").value = (site.techStack || []).join(", ");

  const deleteBtn = document.getElementById("delete-site-btn");
  if (deleteBtn) {
    deleteBtn.style.display = site.isFlagship ? "none" : "inline-flex";
    deleteBtn.onclick = async () => {
      if (confirm(`Are you sure you want to delete "${site.title}"?`)) {
        state.websites = state.websites.filter((s) => s.id !== site.id);
        try {
          localStorage.setItem("vpkbiet_iks_websites", JSON.stringify(state.websites));
        } catch (err) {}
        closeWebsiteEditModal();
        closeWebsiteDetailModal();
        renderWebsites();
        refreshGitHubSyncUI();
        const syncRes = await syncWebsitesToGitHub(`Delete website: ${site.title} via VPKBIET IKS Admin Hub`);
        if (syncRes.ok) {
          showToast("☁️ Website removed & synced to GitHub!");
        } else {
          showToast("Website project removed successfully");
        }
      }
    };
  }

  renderEditTeamRows(site.teamMembers || []);
  refreshGitHubSyncUI();

  editModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function openWebsiteAddModal() {
  closeAdminAuthModal();
  const editModal = document.getElementById("website-edit-modal");
  if (!editModal) return;

  document.getElementById("edit-site-id").value = "";
  document.getElementById("edit-site-modal-heading").textContent = "Add New Student Website Project";
  const saveBtnText = document.getElementById("save-site-btn-text");
  if (saveBtnText) saveBtnText.textContent = "Add & Publish Website";

  document.getElementById("edit-site-title").value = "";
  document.getElementById("edit-site-branch").value = "AIDS-1";
  document.getElementById("edit-site-year").value = "2026-2027";
  document.getElementById("edit-site-url").value = "";
  document.getElementById("edit-site-tagline").value = "";
  document.getElementById("edit-site-desc").value = "";
  document.getElementById("edit-site-tech").value = "";

  const deleteBtn = document.getElementById("delete-site-btn");
  if (deleteBtn) deleteBtn.style.display = "none";

  renderEditTeamRows([{ name: "", role: "Project Leader", department: "AIDS-1", email: "" }]);
  refreshGitHubSyncUI();

  editModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeWebsiteEditModal() {
  const editModal = document.getElementById("website-edit-modal");
  if (editModal) {
    editModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Save form changes (Add or Edit)
async function saveWebsiteEdits(e) {
  e.preventDefault();
  const siteId = document.getElementById("edit-site-id").value;

  const titleVal = document.getElementById("edit-site-title").value.trim();
  const branchVal = document.getElementById("edit-site-branch").value.trim();
  const yearVal = document.getElementById("edit-site-year").value.trim() || "2026-2027";
  const urlVal = document.getElementById("edit-site-url").value.trim();
  const taglineVal = document.getElementById("edit-site-tagline").value.trim();
  const descVal = document.getElementById("edit-site-desc").value.trim();
  const techVal = document.getElementById("edit-site-tech").value.trim();
  const techStack = techVal ? techVal.split(",").map((t) => t.trim()).filter(Boolean) : ["Web Technology"];

  // Harvest student team members
  const rows = document.querySelectorAll("#edit-team-members-list .edit-team-row");
  const updatedMembers = [];
  rows.forEach((row) => {
    const name = row.querySelector(".member-name-input")?.value.trim();
    const role = row.querySelector(".member-role-input")?.value.trim() || "Student Researcher";
    const department = row.querySelector(".member-dept-input")?.value.trim() || branchVal;
    const email = row.querySelector(".member-email-input")?.value.trim() || "";

    if (name) {
      updatedMembers.push({ name, role, department, email });
    }
  });

  const isEditing = Boolean(siteId);
  let targetSite;
  if (!isEditing) {
    // Add new website project
    const newId = "vpkbiet-site-" + Date.now();
    targetSite = {
      id: newId,
      title: titleVal,
      branch: branchVal,
      academicYear: yearVal,
      liveUrl: urlVal,
      tagline: taglineVal,
      description: descVal,
      thumbnail: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
      isFlagship: false,
      techStack: techStack,
      teamMembers: updatedMembers.length > 0 ? updatedMembers : [{ name: "Student Developer", role: "Project Leader", department: branchVal, email: "" }]
    };
    state.websites.push(targetSite);
  } else {
    // Update existing website project
    targetSite = state.websites.find((s) => s.id === siteId);
    if (!targetSite) return;
    targetSite.title = titleVal;
    targetSite.branch = branchVal;
    targetSite.academicYear = yearVal;
    targetSite.liveUrl = urlVal;
    targetSite.tagline = taglineVal;
    targetSite.description = descVal;
    targetSite.techStack = techStack;
    targetSite.teamMembers = updatedMembers;
  }

  // Persist locally in localStorage
  try {
    localStorage.setItem("vpkbiet_iks_websites", JSON.stringify(state.websites));
  } catch (err) {
    console.warn("Could not save to localStorage:", err);
  }

  closeWebsiteEditModal();
  renderWebsites();
  openWebsiteDetailModal(targetSite);
  refreshGitHubSyncUI();

  // Auto-sync to GitHub if token is configured
  const syncRes = await syncWebsitesToGitHub(isEditing ? `Update website: ${titleVal} via VPKBIET IKS Admin Hub` : `Add website: ${titleVal} via VPKBIET IKS Admin Hub`);
  if (syncRes.ok) {
    showToast(isEditing ? "☁️ Website changes saved & synced to GitHub!" : "☁️ Website added & synced to GitHub!");
  } else {
    showToast("✦ Website details & student names saved successfully!");
  }
}

// Download updated websites.json file
function downloadWebsitesJson() {
  const jsonStr = JSON.stringify(state.websites, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "websites.json";
  a.click();
  URL.revokeObjectURL(url);
  showToast("Downloaded updated websites.json");
}

/* ==========================================================================
   GITHUB DIRECT AUTO-SYNC FOR WEBSITES (UPDATES data/websites.json VIA REST API)
   ========================================================================== */

const GH_SYNC_STORAGE_KEY = "vpkbiet_iks_gh_config";

function getGitHubSyncConfig() {
  try {
    const raw = localStorage.getItem(GH_SYNC_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn("Could not read GitHub config:", e);
  }
  return {
    repo: "virajp2709/iks-digital-heritage-hub",
    branch: "main",
    token: ""
  };
}

function saveGitHubSyncConfig(cfg) {
  try {
    localStorage.setItem(GH_SYNC_STORAGE_KEY, JSON.stringify(cfg));
  } catch (e) {
    console.warn("Could not save GitHub config:", e);
  }
}

function clearGitHubSyncConfig() {
  try {
    localStorage.removeItem(GH_SYNC_STORAGE_KEY);
  } catch (e) {
    console.warn("Could not clear GitHub config:", e);
  }
}

function refreshGitHubSyncUI() {
  const cfg = getGitHubSyncConfig();
  const statusEl = document.getElementById("gh-sync-status");
  const countEl = document.getElementById("gh-local-count");
  const repoInp = document.getElementById("gh-repo-input");
  const branchInp = document.getElementById("gh-branch-input");
  const disconnectBtn = document.getElementById("gh-disconnect-btn");

  if (countEl) countEl.textContent = String(state.websites.length);
  if (repoInp && cfg.repo) repoInp.value = cfg.repo;
  if (branchInp && cfg.branch) branchInp.value = cfg.branch;

  if (cfg.token) {
    if (statusEl) {
      statusEl.textContent = `🟢 Auto-Sync Active · ${cfg.repo} (${cfg.branch})`;
      statusEl.style.color = "#6ef3a5";
    }
    if (disconnectBtn) disconnectBtn.style.display = "inline-flex";
  } else {
    if (statusEl) {
      statusEl.textContent = "⚪ Not Connected (Website projects stay in this browser only until synced)";
      statusEl.style.color = "var(--text-gold)";
    }
    if (disconnectBtn) disconnectBtn.style.display = "none";
  }
}

function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

async function syncWebsitesToGitHub(commitMessage = "Update data/websites.json via VPKBIET IKS Hub") {
  const cfg = getGitHubSyncConfig();
  if (!cfg.token) return { ok: false, skipped: true };

  const repo = (cfg.repo || "virajp2709/iks-digital-heritage-hub").trim();
  const branch = (cfg.branch || "main").trim();
  const apiUrl = `https://api.github.com/repos/${repo}/contents/data/websites.json`;

  try {
    const headers = {
      Authorization: `Bearer ${cfg.token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json"
    };

    // Fetch current SHA of data/websites.json
    let sha = undefined;
    const getRes = await fetch(`${apiUrl}?ref=${encodeURIComponent(branch)}&_=${Date.now()}`, {
      method: "GET",
      headers,
      cache: "no-store"
    });
    if (getRes.ok) {
      const meta = await getRes.json();
      sha = meta.sha;
    } else if (getRes.status !== 404) {
      const errBody = await getRes.json().catch(() => ({}));
      return { ok: false, error: errBody.message || `HTTP ${getRes.status}` };
    }

    const contentBase64 = utf8ToBase64(JSON.stringify(state.websites, null, 2));
    const putBody = {
      message: commitMessage,
      content: contentBase64,
      branch: branch
    };
    if (sha) putBody.sha = sha;

    const putRes = await fetch(apiUrl, {
      method: "PUT",
      headers,
      body: JSON.stringify(putBody)
    });

    if (!putRes.ok) {
      const errBody = await putRes.json().catch(() => ({}));
      return { ok: false, error: errBody.message || `HTTP ${putRes.status}` };
    }

    return { ok: true, count: state.websites.length };
  } catch (err) {
    console.error("GitHub sync error:", err);
    return { ok: false, error: err.message || "Network error" };
  }
}

// Initialize ambient particle canvas
function initParticlesCanvas() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  for (let i = 0; i < 45; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.6,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.5 - 0.1,
      opacity: Math.random() * 0.6 + 0.2
    });
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#d4af37";
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < 0) p.y = height;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.globalAlpha = p.opacity;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(loop);
  }
  loop();
}

// Main initialization
document.addEventListener("DOMContentLoaded", async () => {
  initParticlesCanvas();

  // Load website catalog (merge catalog with any local admin edits)
  let localList = null;
  try {
    const cached = localStorage.getItem("vpkbiet_iks_websites");
    if (cached) localList = JSON.parse(cached);
  } catch (e) {}

  let catalogList = [];
  try {
    const res = await fetch("data/websites.json?v=" + Date.now());
    if (res.ok) catalogList = await res.json();
  } catch (err) {
    console.warn("Could not fetch data/websites.json, using default:", err);
  }

  if (!catalogList || catalogList.length === 0) {
    catalogList = DEFAULT_WEBSITES;
  }

  if (Array.isArray(localList) && localList.length > 0) {
    // Preserve local edits, but seamlessly merge any new catalog entries
    const localIds = new Set(localList.map(item => item.id));
    catalogList.forEach(item => {
      if (!localIds.has(item.id)) {
        localList.push(item);
      }
    });
    state.websites = localList;
    localStorage.setItem("vpkbiet_iks_websites", JSON.stringify(localList));
  } else {
    state.websites = catalogList;
    localStorage.setItem("vpkbiet_iks_websites", JSON.stringify(catalogList));
  }

  // Render Hub QR and website grid
  renderHubQR();
  renderWebsites();

  // Search input listener
  const searchInput = document.getElementById("website-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderWebsites();
    });
  }

  // Branch filter listener
  const branchSelect = document.getElementById("website-branch-select");
  if (branchSelect) {
    branchSelect.addEventListener("change", (e) => {
      state.selectedBranch = e.target.value;
      renderWebsites();
    });
  }

  // Detail Modal tab buttons
  document.querySelectorAll("#website-detail-modal .modal-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab").replace("site-", "");
      switchModalTab(btn.getAttribute("data-tab"));
    });
  });

  // Close Detail Modal
  document.getElementById("close-site-modal-btn")?.addEventListener("click", closeWebsiteDetailModal);
  document.getElementById("website-detail-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "website-detail-modal") closeWebsiteDetailModal();
  });

  // Open Add Website Workflow (Nav button & footer link)
  document.getElementById("open-add-website-btn")?.addEventListener("click", triggerWebsiteAddWorkflow);
  document.getElementById("footer-add-website-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    triggerWebsiteAddWorkflow();
  });

  // Edit Button in Detail Modal (Always requires password "2026")
  document.getElementById("modal-site-edit-btn")?.addEventListener("click", triggerWebsiteEditWorkflow);
  document.getElementById("modal-site-edit-team-shortcut")?.addEventListener("click", triggerWebsiteEditWorkflow);

  // Admin Auth Form (Password: "2026")
  const authForm = document.getElementById("admin-auth-form");
  if (authForm) {
    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const passInput = document.getElementById("admin-pass-input");
      const pass = passInput?.value.trim() || "";
      const errorEl = document.getElementById("admin-auth-error");

      if (pass === "2026") {
        if (errorEl) errorEl.style.display = "none";
        closeAdminAuthModal();

        if (adminActionContext.mode === "edit" && adminActionContext.site) {
          showToast("✦ Admin verified for editing!");
          openWebsiteEditModal(adminActionContext.site);
        } else {
          showToast("✦ Admin verified for adding website!");
          openWebsiteAddModal();
        }
      } else {
        if (errorEl) {
          errorEl.textContent = "❌ Incorrect security password. Access restricted to IKS department admins.";
          errorEl.style.display = "block";
        }
        if (passInput) {
          passInput.classList.add("shake");
          setTimeout(() => passInput.classList.remove("shake"), 400);
          passInput.select();
        }
      }
    });
  }

  document.getElementById("close-auth-modal-btn")?.addEventListener("click", closeAdminAuthModal);
  document.getElementById("cancel-auth-btn")?.addEventListener("click", closeAdminAuthModal);
  document.getElementById("admin-auth-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "admin-auth-modal") closeAdminAuthModal();
  });

  // Website Edit Form Save & Cancel
  document.getElementById("website-edit-form")?.addEventListener("submit", saveWebsiteEdits);
  document.getElementById("close-edit-site-modal-btn")?.addEventListener("click", closeWebsiteEditModal);
  document.getElementById("cancel-edit-site-btn")?.addEventListener("click", closeWebsiteEditModal);
  document.getElementById("website-edit-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "website-edit-modal") closeWebsiteEditModal();
  });

  // Add Student Row button
  document.getElementById("add-team-member-row-btn")?.addEventListener("click", () => {
    const container = document.getElementById("edit-team-members-list");
    if (!container) return;
    const row = document.createElement("div");
    row.className = "edit-team-row";
    row.style.cssText = "display: grid; grid-template-columns: 2fr 1.5fr 1fr 2fr auto; gap: 8px; align-items: center; background: rgba(0,0,0,0.3); padding: 8px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);";

    row.innerHTML = `
      <input type="text" class="member-name-input" placeholder="Student Name" required style="padding: 7px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-gold); background: #16201a; color: #fff; font-size: 0.85rem;">
      <select class="member-role-input" style="padding: 7px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-gold); background: #16201a; color: #fff; font-size: 0.85rem;">
        <option value="Student Researcher">Student Researcher</option>
        <option value="Project Leader">Project Leader</option>
        <option value="Developer">Developer</option>
      </select>
      <input type="text" class="member-dept-input" placeholder="Branch" value="AIDS" style="padding: 7px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-gold); background: #16201a; color: #fff; font-size: 0.85rem;">
      <input type="email" class="member-email-input" placeholder="College Email" style="padding: 7px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-gold); background: #16201a; color: #fff; font-size: 0.85rem;">
      <button type="button" class="remove-member-row-btn" style="background: none; border: 1px solid rgba(255,100,100,0.4); color: #ff8888; border-radius: var(--radius-sm); width: 32px; height: 32px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1rem;" title="Remove student">✕</button>
    `;

    row.querySelector(".remove-member-row-btn").onclick = () => row.remove();
    container.appendChild(row);
  });

  // Download updated JSON button
  document.getElementById("download-updated-websites-json-btn")?.addEventListener("click", downloadWebsitesJson);

  // Modal QR download & copy buttons
  document.getElementById("modal-site-download-qr-btn")?.addEventListener("click", () => {
    const qrCanvas = document.getElementById("modal-site-qrcode-canvas");
    if (!qrCanvas) return;
    const img = qrCanvas.querySelector("img");
    const canvas = qrCanvas.querySelector("canvas");
    let dataUrl = img?.src || canvas?.toDataURL("image/png") || "";
    if (dataUrl) {
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `${state.activeWebsite?.id || "website"}-qr.png`;
      a.click();
      showToast("Website QR code downloaded successfully");
    } else {
      showToast("Preparing QR code...");
    }
  });

  document.getElementById("modal-site-copy-link-btn")?.addEventListener("click", () => {
    if (!state.activeWebsite) return;
    const fullUrl = computeFullUrl(state.activeWebsite.liveUrl);
    navigator.clipboard?.writeText(fullUrl)
      .then(() => showToast("Website link copied to clipboard"))
      .catch(() => showToast("Could not copy link"));
  });

  // GitHub Auto-Sync Panel Controls for Websites
  const ghToggleBtn = document.getElementById("gh-toggle-setup-btn");
  const ghTokenBox = document.getElementById("gh-token-box");
  const ghSaveBtn = document.getElementById("gh-save-token-btn");
  const ghDisconnectBtn = document.getElementById("gh-disconnect-btn");
  const ghSyncNowBtn = document.getElementById("gh-sync-now-btn");
  const headerSyncBtn = document.getElementById("header-sync-websites-btn");

  if (ghToggleBtn && ghTokenBox) {
    ghToggleBtn.addEventListener("click", () => {
      const isHidden = ghTokenBox.style.display === "none";
      ghTokenBox.style.display = isHidden ? "block" : "none";
    });
  }

  if (ghSaveBtn) {
    ghSaveBtn.addEventListener("click", async () => {
      const repo = document.getElementById("gh-repo-input")?.value.trim() || "virajp2709/iks-digital-heritage-hub";
      const branch = document.getElementById("gh-branch-input")?.value.trim() || "main";
      const token = document.getElementById("gh-token-input")?.value.trim() || getGitHubSyncConfig().token;

      if (!token) {
        showToast("⚠️ Please paste your GitHub Personal Access Token");
        document.getElementById("gh-token-input")?.focus();
        return;
      }

      saveGitHubSyncConfig({ repo, branch, token });
      refreshGitHubSyncUI();
      ghSaveBtn.disabled = true;
      ghSaveBtn.innerHTML = '<span>⏳</span> <span>Publishing to GitHub...</span>';

      const res = await syncWebsitesToGitHub(`Sync ${state.websites.length} websites via VPKBIET IKS Admin Hub`);
      ghSaveBtn.disabled = false;
      ghSaveBtn.innerHTML = '<span>✓</span> <span>Save & Publish All Now</span>';

      if (res.ok) {
        if (ghTokenBox) ghTokenBox.style.display = "none";
        showToast(`☁️ Published all ${state.websites.length} website projects to GitHub! Live on mobile in ~60s.`);
      } else {
        showToast(`⚠️ GitHub Sync failed: ${res.error}`);
      }
    });
  }

  if (ghDisconnectBtn) {
    ghDisconnectBtn.addEventListener("click", () => {
      clearGitHubSyncConfig();
      const tokenInp = document.getElementById("gh-token-input");
      if (tokenInp) tokenInp.value = "";
      refreshGitHubSyncUI();
      showToast("GitHub token disconnected from this browser");
    });
  }

  if (ghSyncNowBtn) {
    ghSyncNowBtn.addEventListener("click", async () => {
      const cfg = getGitHubSyncConfig();
      if (!cfg.token) {
        if (ghTokenBox) ghTokenBox.style.display = "block";
        document.getElementById("gh-token-input")?.focus();
        showToast("Enter your GitHub Token once to publish all website projects automatically!");
        return;
      }

      ghSyncNowBtn.disabled = true;
      const origHtml = ghSyncNowBtn.innerHTML;
      ghSyncNowBtn.innerHTML = '<span>⏳</span> <span>Publishing...</span>';

      const res = await syncWebsitesToGitHub(`Publish all ${state.websites.length} websites from IKS Hub`);
      ghSyncNowBtn.disabled = false;
      ghSyncNowBtn.innerHTML = origHtml;

      if (res.ok) {
        showToast(`☁️ Published all ${state.websites.length} website projects to GitHub! Live on mobile in ~60s.`);
      } else {
        showToast(`⚠️ GitHub Sync failed: ${res.error}`);
      }
    });
  }

  if (headerSyncBtn) {
    headerSyncBtn.addEventListener("click", async () => {
      const cfg = getGitHubSyncConfig();
      if (!cfg.token) {
        triggerWebsiteAddWorkflow();
        setTimeout(() => {
          if (ghTokenBox) ghTokenBox.style.display = "block";
          document.getElementById("gh-token-input")?.focus();
        }, 300);
        showToast("Setup your GitHub Token to enable auto-sync!");
        return;
      }

      headerSyncBtn.disabled = true;
      const orig = headerSyncBtn.innerHTML;
      headerSyncBtn.innerHTML = '<span>⏳</span> <span>Syncing...</span>';
      const res = await syncWebsitesToGitHub(`Quick sync ${state.websites.length} websites from navigation`);
      headerSyncBtn.disabled = false;
      headerSyncBtn.innerHTML = orig;

      if (res.ok) {
        showToast(`☁️ Published all ${state.websites.length} website projects to GitHub! Live on mobile in ~60s.`);
      } else {
        showToast(`⚠️ GitHub Sync failed: ${res.error}`);
      }
    });
  }

  // Initial sync UI update on load
  refreshGitHubSyncUI();

  // Global keydown (Escape to close modals)
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeWebsiteDetailModal();
      closeAdminAuthModal();
      closeWebsiteEditModal();
    }
  });
});
