# ✺ VPKBIET IKS Digital Heritage Hub
### भारतीय ज्ञान परंपरा · Indian Knowledge Systems

[![Live Demo](https://img.shields.io/badge/Live_Website-Visit_Portal-d4af37?style=for-the-badge&logo=githubpages&logoColor=white)](https://virajp2709.github.io/iks-digital-heritage-hub/)
[![Institution](https://img.shields.io/badge/Institution-VPKBIET_Baramati-0e3a2f?style=for-the-badge)](https://www.vpkbiet.org/)
[![Curator](https://img.shields.io/badge/Architect_%26_Developer-Viraj_Pathak-c85a32?style=for-the-badge)](https://github.com/virajpathak27)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

---

## 🏛️ Overview

> **A Heritage of Knowledge**  
> **INDIAN KNOWLEDGE SYSTEM**  
> **भारतीय ज्ञान परंपरा**  
> *Ancient wisdom · Living traditions · Future possibilities*

The **VPKBIET IKS Digital Heritage Hub** is an open-access living digital repository created for the **Department of Indian Knowledge Systems (IKS)** at **Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering and Technology (VPKBIET), Baramati, Maharashtra**.

The platform is designed to bridge classical Indian scientific treatises—spanning Harappan hydraulic engineering, Vedic computational mathematics, rustless metallurgy, and temple acoustic resonance—with modern engineering simulations (ANSYS CFD, Verilog HDL / FPGA synthesis, SEM material spectrometry, and ray-tracing acoustics).

🔗 **Live Portal:** [https://virajp2709.github.io/iks-digital-heritage-hub/](https://virajp2709.github.io/iks-digital-heritage-hub/)

---

## ✨ Key Features & Aesthetic Design

### 1. 🗺️ Animated Vector Map of India & Knowledge Hubs
- Full geographic vector SVG map of India (including Jammu & Kashmir, Ladakh, Gujarat, the Peninsular coastline, Assam & Northeast, Andaman & Nicobar, and Lakshadweep).
- Positioned directly behind the royal hero typography with dynamic border drawing and glowing animations.
- Interactive glowing knowledge nodes across historical intellectual centers:
  - **Takshashila** (Multidisciplinary University & Surgery)
  - **Nalanda Mahavihara** (Philosophy, Logic & Metallurgy)
  - **Ujjain** (Prime Meridian of Ancient Indian Astronomy & Mathematics)
  - **VPKBIET Baramati** (Modern Student Engineering IKS Hub)
  - **Dholavira & Lothal** (Harappan Hydraulic & Maritime Systems)
  - **Kashi / Varanasi** (Grammar & Ayurvedic Medicine)
  - **Thanjavur** (Brihadeeswara Temple Acoustics & Chola Bronzes)
  - **Kerala School** (Sangamagrama Madhava Calculus & Infinite Series)
- Animated constellation laser lines radiating from ancient centers directly to **VPKBIET Baramati**, symbolizing civilizational continuity.

### 2. 🎨 "Old Style" Heritage Aesthetics + "Newly Professional" Interactive UI
- **Parchment & Royal Gold Theme**: Deep Vedic verdigris (`#0d1210`), metallic gold gradients (`#d4af37`), terracotta accents, and sacred 24-spoke Sudarshana & lotus mandalas.
- **Floating Celestial Dust**: Lightweight HTML5 canvas particle system creating an ethereal manuscript ambiance.
- **Glassmorphic Interactive Cards**: Smooth 3D hover elevations, gold rim illumination, and responsive grid layouts.

### 3. 🎵 Procedural Ambient Audio Synthesizer
- Built using the native **Web Audio API** — generates a soothing Indian Tanpura meditative drone (tuned to root C# / 138.59 Hz with harmonic overtones).
- 100% offline, lightweight, and zero external MP3/WAV download overhead.

### 4. 📂 Detailed Student Project Exhibition & Modal Dialogs
Clicking on any project card opens a rich full-screen modal featuring:
- **High-Resolution Photo Gallery**: Image carousel with thumbnail switching and captions.
- **Complete Research Documentation**: Project Abstract, Problem Statement, Historical Tradition, Engineering Methodology, and Empirical Findings.
- **Project Metadata**: Created Date, Academic Semester, and Type/Discipline badge.
- **Student Team Attribution**: Student researchers with roles, avatars, departments, and faculty guide / mentor recognition.
- **Technical Metrics Grid**: Quantitative benchmarks (e.g. *78% passive sediment separation*, *32% reduction in propagation delay*, *4.3x corrosion resistance*).

### 5. 📱 Exhibition QR Code Studio
- Generates a persistent, scannable QR code for every individual student project.
- **Download QR PNG**: Save high-resolution QR graphics for exhibition banners and project reports.
- **Print Label**: Formatted for printing physical desk and poster exhibition cards.
- **Share Link**: One-click URL copy with deep hash linking (`#project/<id>`).

### 6. 🔒 Admin "Add Projects" Portal (Password: 2026)
- Secured administrator gateway requiring security key **`2026`** to add and manage student projects.
- **Photo Management**: Upload local images or add URLs with live previews and captions that feed directly into the Explore Details photo carousel.
- **Full Explore Details Parity**: Direct input for *Project Abstract & Problem Statement*, *Historical Indian Tradition & Reference*, *Modern Engineering Methodology*, *Key Findings & Future Impact*, *Student Researchers & Faculty Guide*, and *Technical Quantitative Metrics*.
- **Persistence & Export**: Newly added projects persist in the browser and can be exported as updated `projects.json` with one click.

### 7. 🌐 Dual-Language Support
- Full instant toggle between **English** and **मराठी (Marathi)** across navigation, tags, and project descriptions.

---

## 🔬 Featured Student Projects (Demo Showcase)

| Project Title | Discipline / Type | Student Team | Faculty Mentor |
| :--- | :--- | :--- | :--- |
| **Dholavira Hydraulic Engineering** | Water Heritage & Civil Engineering | Viraj Pathak, Ananya Kulkarni, Rohan Deshmukh, Sneha Joshi | Prof. S. R. Deshpande |
| **Urdhva-Tiryagbhyam Vedic Multiplier** | Vedic Mathematics & VLSI Hardware | Viraj Pathak, Aditya Patil, Neha Shinde | Dr. A. P. Mane |
| **Delhi Iron Pillar Metallurgy & Misawite Phase** | Metallurgy & Material Science | Tanmay Shinde, Pranav Ghadge, Ritu Pawar, Viraj Pathak | Dr. V. B. Gawande |
| **Brihadeeswara Temple Acoustic Resonance** | Architecture & Acoustic Engineering | Sakshi Bhosale, Omkar Jagtap, Viraj Pathak | Prof. N. K. Khillare |

---

## 📁 Repository Structure

```
├── index.html              # Main web portal, animated hero & interactive modals
├── assets/
│   ├── app.js              # Application logic, audio synthesizer & photo manager
│   └── styles.css          # Antique Vedic parchment & modern responsive CSS
├── data/
│   └── projects.json       # Structured database of VPKBIET student projects
├── dev-server.js           # Lightweight zero-dependency local development server
├── package.json            # NPM scripts (npm run dev)
└── README.md               # Repository documentation and deployment guide
```

---

## 🚀 Running Locally

1. Clone or download this repository:
   ```bash
   git clone https://github.com/virajpathak27/iks-digital-heritage-hub.git
   cd iks-digital-heritage-hub
   ```

2. Open [`index.html`](index.html) directly in any modern browser, or launch a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   ```
   Open `http://localhost:8000` in your browser.

---

## 👨‍💻 Author & Credits

- **Curated & Developed by:** **Viraj Pathak**
- **Department:** Department of Indian Knowledge Systems (IKS Cell)
- **Institution:** Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering and Technology (VPKBIET), Baramati, Maharashtra, India.
- **Affiliation:** Savitribai Phule Pune University (SPPU) · NAAC Accredited 'A' Grade

---

<p align="center">
  <sub>विद्या ददाति विनयं विनयाद् याति पात्रताम् · Dedicated to Preserving & Re-engineering Indian Knowledge Systems</sub>
</p>
