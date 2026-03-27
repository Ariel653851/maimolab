/**
 * SCIENFORM V2 - SCRIPT.JS
 * Complete bug-free logic with detailed Science content (2nde & 1ere).
 */

const formulas = [
    // --- SECONDE PHYSIQUE ---
    {
        id: "poids-2",
        title: "Poids d'un corps",
        subject: "physique",
        level: "2nde",
        formula: "P = m \\times g",
        definition: "Force d'attraction gravitationnelle exercée par la Terre sur tout objet massique à son voisinage.",
        properties: "Le poids est un vecteur vertical vers le bas. g ≈ 9,81 N/kg sur Terre. Dépend du lieu (astre).",
        units: "P(N), m(kg), g(N/kg).",
        tags: ["gravité", "mécanique"]
    },
    {
        id: "vitesse-2",
        title: "Vitesse moyenne",
        subject: "physique",
        level: "2nde",
        formula: "v = \\frac{d}{\\Delta t}",
        definition: "Rapport de la distance parcourue sur la durée du trajet.",
        properties: "Vitesse constante si le mouvement est uniforme. 1 m/s = 3,6 km/h.",
        units: "v(m/s), d(m), Δt(s).",
        tags: ["cinématique", "mouvement"]
    },
    {
        id: "frequence-2",
        title: "Fréquence et Période",
        subject: "physique",
        level: "2nde",
        formula: "f = \\frac{1}{T}",
        definition: "Nombre de fois qu'un phénomène périodique se reproduit par seconde.",
        properties: "Le Herz (Hz) est l'unité de fréquence. T est la durée d'un motif élémentaire.",
        units: "f(Hz), T(s).",
        tags: ["ondes", "périodique"]
    },
    {
        id: "snell-2",
        title: "Loi de Snell-Descartes",
        subject: "physique",
        level: "2nde",
        formula: "n_1 \\times \\sin(i_1) = n_2 \\times \\sin(i_2)",
        definition: "Loi décrivant le changement de direction de la lumière passant d'un milieu à un autre.",
        properties: "n est l'indice de réfraction (n air ≈ 1). i1 angle d'incidence, i2 angle de réfraction.",
        units: "n(sans unité), i(degrés ou radians).",
        tags: ["optique", "lumière"]
    },

    // --- SECONDE CHIMIE ---
    {
        id: "masse-vol-2",
        title: "Masse volumique",
        subject: "chimie",
        level: "2nde",
        formula: "\\rho = \\frac{m}{V}",
        definition: "Grandeur physique qui définit la masse d'une substance par unité de volume.",
        properties: "Permet d'identifier une espèce chimique pure. Dépend de la température.",
        units: "ρ(kg/m³ ou g/L), m(kg ou g), V(m³ ou L).",
        tags: ["matière", "identification"]
    },
    {
        id: "conc-mass-2",
        title: "Concentration massique",
        subject: "chimie",
        level: "2nde",
        formula: "C_m = \\frac{m_{soluté}}{V_{solution}}",
        definition: "Masse de soluté dissoute dans un litre de solution.",
        properties: "Aussi appelée titre massique. À ne pas confondre avec la masse volumique.",
        units: "Cm(g/L), m(g), V(L).",
        tags: ["solutions", "soluté"]
    },

    // --- PREMIÈRE PHYSIQUE ---
    {
        id: "ec-1",
        title: "Énergie cinétique",
        subject: "physique",
        level: "1ere",
        formula: "E_c = \\frac{1}{2} m v^2",
        definition: "Énergie que possède un corps du fait de sa vitesse par rapport à un référentiel.",
        properties: "Toujours positive. Double si la masse double, mais quadruple si la vitesse double.",
        units: "Ec(Joules), m(kg), v(m/s).",
        tags: ["énergie", "mouvement"]
    },
    {
        id: "epp-1",
        title: "Énergie potentielle de pesanteur",
        subject: "physique",
        level: "1ere",
        formula: "E_{pp} = m \\times g \\times z",
        definition: "Énergie liée à la position d'un objet (altitude z) dans un champ de pesanteur.",
        properties: "Dépend du choix de l'origine de l'altitude (z=0).",
        units: "Epp(Joules), m(kg), z(m).",
        tags: ["énergie", "gravité"]
    },
    {
        id: "ohm-1",
        title: "Loi d'Ohm",
        subject: "physique",
        level: "1ere",
        formula: "U = R \\times I",
        definition: "Tension aux bornes d'un conducteur ohmique proportionnelle à l'intensité.",
        properties: "R est la résistance du dipôle. Dissipe l'énergie sous forme de chaleur (Effet Joule).",
        units: "U(V), R(Ω), I(A).",
        tags: ["électricité", "tension"]
    },

    // --- PREMIÈRE CHIMIE ---
    {
        id: "mole-1",
        title: "Quantité de matière (Mole)",
        subject: "chimie",
        level: "1ere",
        formula: "n = \\frac{m}{M}",
        definition: "Quantité de matière contenue dans une masse m d'une espèce chimique.",
        properties: "M est la masse molaire (dépend de la formule brute). N = n * Na.",
        units: "n(mol), m(g), M(g/mol).",
        tags: ["mole", "atome"]
    },
    {
        id: "conc-mol-1",
        title: "Concentration molaire",
        subject: "chimie",
        level: "1ere",
        formula: "C = \\frac{n}{V}",
        definition: "Nombre de moles de soluté dissoutes par litre de solution.",
        properties: "Lien avec Cm : Cm = C * M.",
        units: "C(mol/L), n(mol), V(L).",
        tags: ["solutions", "mole"]
    },
    {
        id: "beer-1",
        title: "Loi de Beer-Lambert",
        subject: "chimie",
        level: "1ere",
        formula: "A = \\epsilon \\times l \\times C",
        definition: "Lien entre l'absorbance A et la concentration C d'une solution colorée.",
        properties: "A est sans unité. Valable pour des solutions diluées et une lumière monochromatique.",
        units: "A, ε(L/mol/cm), l(cm), C(mol/L).",
        tags: ["colorimétrie", "dosage"]
    }
];

// STATE
let currentFilterLevel = 'all';
let currentFilterSubject = 'all';
let currentSearch = '';

// ELEMENTS
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
    listContainer.innerHTML = '';
    
    const filtered = formulas.filter(f => {
        const matchesLevel = currentFilterLevel === 'all' || f.level === currentFilterLevel;
        const matchesSubject = currentFilterSubject === 'all' || f.subject === currentFilterSubject;
        const lowSearch = currentSearch.toLowerCase();
        const matchesSearch = f.title.toLowerCase().includes(lowSearch) || 
                             f.tags.some(t => t.toLowerCase().includes(lowSearch));
        return matchesLevel && matchesSubject && matchesSearch;
    });

    if (filtered.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        filtered.forEach(f => {
            const card = document.createElement('div');
            card.className = 'formula-card';
            card.innerHTML = `
                <span class="card-tag ${f.subject}">${f.subject.toUpperCase()} • ${f.level}</span>
                <h3>${f.title}</h3>
                <div class="card-eqn">\\[ ${f.formula} \\]</div>
                <div class="card-footer">
                    <span>Explorer le concept</span>
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
    
    // Reset tabs
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
    tabTriggers.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    tabPanels.forEach(panel => {
        panel.classList.toggle('active', panel.id === `tab-${tabId}`);
    });
}

// LISTENERS
searchInput.oninput = (e) => {
    currentSearch = e.target.value;
    render();
};

levelChips.forEach(chip => {
    chip.onclick = () => {
        levelChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentFilterLevel = chip.dataset.level;
        render();
    };
});

subjectChips.forEach(chip => {
    chip.onclick = () => {
        subjectChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentFilterSubject = chip.dataset.subject;
        render();
    };
});

closeModalBtn.onclick = closeModal;
modalOverlay.onclick = (e) => { if (e.target === modalOverlay) closeModal(); };

tabTriggers.forEach(btn => {
    btn.onclick = () => switchTab(btn.dataset.tab);
});

// START
render();
