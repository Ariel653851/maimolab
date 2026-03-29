/**
 * SCIENFORM V2.3 - SCRIPT.JS
 * THE ULTIMATE VERSION WITH DETAILED LEGENDS (SYMBOLS + NAMES + UNITS)
 */

const formulas = [
    // --- SECONDE PHYSIQUE ---
    {
        id: "poids-2",
        title: "Poids d'un corps",
        subject: "physique",
        level: "2nde",
        formula: "P = m \\times g",
        definition: "Force d'attraction gravitationnelle exercée par la Terre sur tout objet possédant une masse.",
        properties: "Direction : verticale. Sens : vers le centre de la Terre (bas). g ≈ 9,81 N/kg.",
        units: "P [Poids] (N), m [Masse] (kg), g [Gravité] (N/kg)",
        tags: ["gravité", "mécanique"]
    },
    {
        id: "vitesse-2",
        title: "Vitesse moyenne",
        subject: "physique",
        level: "2nde",
        formula: "v = \\frac{d}{\\Delta t}",
        definition: "Rapport de la distance parcourue sur le temps nécessaire pour la parcourir.",
        properties: "Mouvement uniforme si la vitesse est constante. Conversion : 1 m/s = 3,6 km/h.",
        units: "v [Vitesse] (m/s), d [Distance] (m), Δt [Durée] (s)",
        tags: ["cinématique", "mouvement"]
    },
    {
        id: "frequence-2",
        title: "Fréquence et Période",
        subject: "physique",
        level: "2nde",
        formula: "f = \\frac{1}{T}",
        definition: "Nombre de fois qu'un phénomène périodique se répète par seconde.",
        properties: "T est la période (la durée d'un motif). Plus f est grand, plus le son est aigu.",
        units: "f [Fréquence] (Hz), T [Période] (s)",
        tags: ["ondes", "signal"]
    },
    {
        id: "snell-2",
        title: "Loi de Snell-Descartes",
        subject: "physique",
        level: "2nde",
        formula: "n_1 \\times \\sin(i_1) = n_2 \\times \\sin(i_2)",
        definition: "Loi du changement de direction de la lumière.",
        properties: "n est l'indice de réfraction du milieu. i1 incidence, i2 réfraction.",
        units: "n [Indice] (sans unité), i [Angle] (°)",
        tags: ["optique", "réfraction"]
    },

    // --- SECONDE CHIMIE ---
    {
        id: "masse-vol-2",
        title: "Masse volumique",
        subject: "chimie",
        level: "2nde",
        formula: "\\rho = \\frac{m}{V}",
        definition: "Masse contenue dans un litre d'une espèce chimique.",
        properties: "Permet de déterminer si un objet est pur.",
        units: "ρ [Masse vol.] (g/L), m [Masse] (g), V [Volume] (L)",
        tags: ["matière", "masse"]
    },
    {
        id: "conc-mass-2",
        title: "Concentration massique",
        subject: "chimie",
        level: "2nde",
        formula: "C_m = \\frac{m_{soluté}}{V_{sol}}",
        definition: "Masse de soluté dissoute dans le volume de solution.",
        properties: "Aussi appelée titre massique.",
        units: "Cm [Conc. mass] (g/L), m [Masse] (g), V [Volume] (L)",
        tags: ["solutions", "chimie"]
    },

    // --- PREMIÈRE PHYSIQUE ---
    {
        id: "optique-conjugaison-1",
        title: "Relation de conjugaison",
        subject: "physique",
        level: "1ere",
        formula: "\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{f'} = V",
        definition: "Position de l'image créée par une lentille.",
        properties: "f' est la focale de la lentille. V est la vergence.",
        units: "OA' [Image] (m), OA [Objet] (m), f' [Focale] (m), V [Vergence] (δ)",
        tags: ["optique", "lentilles"]
    },
    {
        id: "ec-1",
        title: "Énergie cinétique",
        subject: "physique",
        level: "1ere",
        formula: "E_c = \\frac{1}{2} m v^2",
        definition: "Énergie du mouvement.",
        properties: "Proportionnelle au carré de la vitesse.",
        units: "Ec [Énergie Cin.] (J), m [Masse] (kg), v [Vitesse] (m/s)",
        tags: ["énergie", "mouvement"]
    },
    {
        id: "epp-1",
        title: "Énergie potentielle",
        subject: "physique",
        level: "1ere",
        formula: "E_{pp} = m \\times g \\times z",
        definition: "Énergie liée à l'altitude z d'un objet.",
        properties: "On prend souvent z=0 au niveau du sol.",
        units: "Epp [Énergie Pot.] (J), m [Masse] (kg), z [Altitude] (m)",
        tags: ["énergie", "gravité"]
    },
    {
        id: "ohm-1",
        title: "Loi d'Ohm",
        subject: "physique",
        level: "1ere",
        formula: "U = R \\times I",
        definition: "Tension aux bornes d'une résistance.",
        properties: "Dissipe l'énergie sous forme de chaleur (Joule).",
        units: "U [Tension] (V), R [Résistance] (Ω), I [Intensité] (A)",
        tags: ["électricité"]
    },

    // --- PREMIÈRE CHIMIE ---
    {
        id: "mole-1",
        title: "Quantité de matière (Mole)",
        subject: "chimie",
        level: "1ere",
        formula: "n = \\frac{m}{M}",
        definition: "Nombre de moles dans une masse donnée.",
        properties: "M est la masse molaire.",
        units: "n [Qté matière] (mol), m [Masse] (g), M [Masse molaire] (g/mol)",
        tags: ["mole", "atome"]
    },
    {
        id: "conc-mol-1",
        title: "Concentration molaire",
        subject: "chimie",
        level: "1ere",
        formula: "C = \\frac{n}{V}",
        definition: "Nombre de moles par litre.",
        properties: "Lien : Cm = C × M.",
        units: "C [Conc. molaire] (mol/L), n [Qté de mat.] (mol), V [Volume] (L)",
        tags: ["solutions", "molaire"]
    },
    {
        id: "dilution-1",
        title: "Dilution",
        subject: "chimie",
        level: "1ere",
        formula: "C_i V_i = C_f V_f",
        definition: "Ajout d'eau à une solution mère.",
        properties: "Conservation de la quantité de matière.",
        units: "Ci/Cf [Conc.] (mol/L), Vi/Vf [Vol.] (L)",
        tags: ["dosage", "dilution"]
    },
    {
        id: "beer-1",
        title: "Loi de Beer-Lambert",
        subject: "chimie",
        level: "1ere",
        formula: "A = \\epsilon \\times l \\times C",
        definition: "Absorbance A liée à la concentration C.",
        properties: "Valable si la concentration C est faible.",
        units: "A [Absorbance] (no unit), ε [Coef. ext.] (L/mol/cm), C [Conc.] (mol/L)",
        tags: ["lumière", "spectro"]
    }
];

// STATE (GLOBAL)
let currentFilterLevel = 'all';
let currentFilterSubject = 'all';
let currentSearch = '';

// DOM ELEMENTS
const listContainer = document.getElementById('formula-list');
const searchInput = document.getElementById('main-search');
const levelChips = document.querySelectorAll('.level-chip');
const subjectChips = document.querySelectorAll('.subject-chip');
const noResults = document.getElementById('no-results');

const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalTag = document.getElementById('modal-tag');
const modalUnits = document.getElementById('modal-units');
const modalDef = document.getElementById('modal-def');
const modalProp = document.getElementById('modal-prop');
const mathBox = document.getElementById('math-box');
const closeModalBtn = document.querySelector('.modal-close');
const tabTriggers = document.querySelectorAll('.tab-trigger');
const tabPanels = document.querySelectorAll('.tab-panel');

// FUNCTIONS
function render() {
    if(!listContainer) return;
    listContainer.innerHTML = '';
    
    const filtered = formulas.filter(f => {
        const matchesLevel = currentFilterLevel === 'all' || f.level === currentFilterLevel;
        const matchesSubject = currentFilterSubject === 'all' || f.subject === currentFilterSubject;
        const lowSearch = currentSearch.toLowerCase();
        return matchesLevel && matchesSubject && (f.title.toLowerCase().includes(lowSearch));
    });

    if (filtered.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        filtered.forEach(f => {
            const card = document.createElement('div');
            card.className = 'formula-card';
            
            // LEGEND LOGIC: Extract "Symbole [Nom] (Unité)"
            const quickUnitsHtml = f.units ? f.units.split(',').map(u => {
                const parts = u.trim().split('(');
                const desc = parts[0].trim(); // P [Poids]
                const unit = parts[1] ? parts[1].replace(')', '') : '';
                return `<span>${desc} <span class="arrow-pointing">→</span> ${unit}</span>`;
            }).join('') : "";

            card.innerHTML = `
                <span class="card-tag ${f.subject}">${f.subject.toUpperCase()} • ${f.level}</span>
                <h3>${f.title}</h3>
                <div class="card-eqn">\\[ ${f.formula} \\]</div>
                <div class="card-quick-units-list">${quickUnitsHtml}</div>
                <div class="card-footer">
                    <span>Voir Détails</span>
                    <i data-lucide="arrow-right" style="width:16px"></i>
                </div>
            `;
            card.onclick = () => openModal(f);
            listContainer.appendChild(card);
        });
    }

    if (window.MathJax) window.MathJax.typesetPromise();
    lucide.createIcons();
}

function openModal(f) {
    modalTitle.textContent = f.title;
    modalTag.textContent = `${f.subject.toUpperCase()} • ${f.level}`;
    modalTag.className = `modal-badge ${f.subject}`;
    modalUnits.textContent = f.units;
    modalDef.textContent = f.definition;
    modalProp.textContent = f.properties;
    mathBox.innerHTML = `\\[ ${f.formula} \\]`;
    switchTab('eqn');
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (window.MathJax) window.MathJax.typesetPromise();
}

function closeModal() {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function switchTab(tabId) {
    tabTriggers.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabId));
    tabPanels.forEach(panel => panel.classList.toggle('active', panel.id === `tab-${tabId}`));
}

window.switchTab = switchTab;
if (searchInput) searchInput.oninput = (e) => { currentSearch = e.target.value; render(); };
levelChips.forEach(chip => chip.onclick = () => { levelChips.forEach(c => c.classList.remove('active')); chip.classList.add('active'); currentFilterLevel = chip.dataset.level; render(); });
subjectChips.forEach(chip => chip.onclick = () => { subjectChips.forEach(c => c.classList.remove('active')); chip.classList.add('active'); currentFilterSubject = chip.dataset.subject; render(); });
if(closeModalBtn) closeModalBtn.onclick = closeModal;
if(modalOverlay) modalOverlay.onclick = (e) => { if (e.target === modalOverlay) closeModal(); };
tabTriggers.forEach(btn => btn.onclick = () => switchTab(btn.dataset.tab));

render();
