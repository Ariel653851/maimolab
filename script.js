/**
 * SCIENFORM V2.2 - SCRIPT.JS
 * THE ULTIMATE VERSION - EVERYTHING INCLUDED (2NDE & 1ERE)
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
        units: "P(N), m(kg), g(N/kg).",
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
        units: "v(m/s), d(m), Δt(s).",
        tags: ["cinématique", "mouvement"]
    },
    {
        id: "frequence-2",
        title: "Fréquence et Période",
        subject: "physique",
        level: "2nde",
        formula: "f = \\frac{1}{T}",
        definition: "Nombre de fois qu'un phénomène périodique (comme un signal sonore) se répète par seconde.",
        properties: "T est la période (la durée d'un motif). Plus f est grand, plus le son est aigu.",
        units: "f(Hertz - Hz), T(secondes - s).",
        tags: ["ondes", "signal"]
    },
    {
        id: "snell-2",
        title: "Loi de Snell-Descartes",
        subject: "physique",
        level: "2nde",
        formula: "n_1 \\times \\sin(i_1) = n_2 \\times \\sin(i_2)",
        definition: "Décrit comment la lumière est déviée lorsqu'elle change de milieu transparent.",
        properties: "i1 est l'angle d'incidence, i2 l'angle de réfraction. n est l'indice de réfraction du milieu.",
        units: "n(sans unité), angles en degrés.",
        tags: ["optique", "réfraction"]
    },

    // --- SECONDE CHIMIE ---
    {
        id: "masse-vol-2",
        title: "Masse volumique",
        subject: "chimie",
        level: "2nde",
        formula: "\\rho = \\frac{m}{V}",
        definition: "Masse d'un litre (ou m³) d'une espèce chimique pure. Indique si l'objet est 'lourd' pour sa taille.",
        properties: "L'eau pure a une masse volumique de 1000 g/L (ou 1 g/mL).",
        units: "ρ(g/L ou kg/m³), m(g), V(L).",
        tags: ["matière", "masse"]
    },
    {
        id: "conc-mass-2",
        title: "Concentration massique",
        subject: "chimie",
        level: "2nde",
        formula: "C_m = \\frac{m_{soluté}}{V_{solution}}",
        definition: "Quantité de masse d'un soluté dissoute dans un volume donné de solvant.",
        properties: "À ne pas confondre avec la masse volumique de la solution elle-même.",
        units: "Cm(g/L), m(g), V(L).",
        tags: ["solutions", "chimie"]
    },
    {
        id: "quantite-solide-2",
        title: "Quantité de matière (n)",
        subject: "chimie",
        level: "2nde",
        formula: "n = \\frac{m}{M}",
        definition: "Nombre de moles contenues dans un échantillon de masse m.",
        properties: "La mole est l'unité de comptage des atomes en chimie. M est la masse molaire atomique.",
        units: "n(mol), m(g), M(g/mol).",
        tags: ["moles", "matière"]
    },

    // --- PREMIÈRE PHYSIQUE ---
    {
        id: "optique-conjugaison-1",
        title: "Relation de conjugaison",
        subject: "physique",
        level: "1ere",
        formula: "\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{f'} = V",
        definition: "Position de l'image (A') créée par une lentille à partir d'un objet (A).",
        properties: "Mesures algébriques (négatives si avant la lentille). f' est la focale de la lentille.",
        units: "Distances en mètres (m), V en Dioptries (δ).",
        tags: ["optique", "lentilles"]
    },
    {
        id: "optique-vergence-1",
        title: "Vergence",
        subject: "physique",
        level: "1ere",
        formula: "V = \\frac{1}{f'}",
        definition: "Capacité d'une lentille à faire converger la lumière vers son foyer.",
        properties: "Plus f' est petit, plus la vergence V est grande (lentille puissante).",
        units: "V en Dioptries (δ), f' en mètres (m).",
        tags: ["vision", "optique"]
    },
    {
        id: "ec-1",
        title: "Énergie cinétique",
        subject: "physique",
        level: "1ere",
        formula: "E_c = \\frac{1}{2} m v^2",
        definition: "Énergie que possède tout objet en mouvement.",
        properties: "Elle dépend du carré de la vitesse. Toujours positive.",
        units: "Ec(Joules - J), m(kg), v(m/s).",
        tags: ["énergie", "mouvement"]
    },
    {
        id: "epp-1",
        title: "Énergie potentielle de pesanteur",
        subject: "physique",
        level: "1ere",
        formula: "E_{pp} = m \\times g \\times z",
        definition: "Énergie liée à l'altitude z d'un objet.",
        properties: "Augmente avec la hauteur. On fixe souvent z = 0 au sol.",
        units: "Epp(Joules - J), m(kg), z(m).",
        tags: ["énergie", "hauteur"]
    },
    {
        id: "ohm-1",
        title: "Loi d'Ohm",
        subject: "physique",
        level: "1ere",
        formula: "U = R \\times I",
        definition: "Tension aux bornes d'une résistance traversée par un courant.",
        properties: "R traduit la résistance au passage du courant (en Ohms).",
        units: "U(V), R(Ω), I(A).",
        tags: ["électricité"]
    },

    // --- PREMIÈRE CHIMIE ---
    {
        id: "conc-mol-1",
        title: "Concentration molaire",
        subject: "chimie",
        level: "1ere",
        formula: "C = \\frac{n}{V}",
        definition: "Nombre de moles de soluté par litre de solution.",
        properties: "Lien : Concentration massique Cm = C × M.",
        units: "C(mol/L), n(mol), V(L).",
        tags: ["solutions", "molaire"]
    },
    {
        id: "dilution-1",
        title: "Dilution (Conservation)",
        subject: "chimie",
        level: "1ere",
        formula: "C_i \\times V_i = C_f \\times V_f",
        definition: "La quantité de matière (n) ne change pas quand on rajoute de l'eau.",
        properties: "i (mère) est plus concentrée que f (fille).",
        units: "Ci, Cf en mol/L. Vi, Vf en L (ou mL).",
        tags: ["dosage", "préparation"]
    },
    {
        id: "facteur-dil-1",
        title: "Facteur de dilution (F)",
        subject: "chimie",
        level: "1ere",
        formula: "F = \\frac{C_{mère}}{C_{fille}} = \\frac{V_{fille}}{V_{mère}}",
        definition: "Nombre de fois qu'une solution a été diluée.",
        properties: "F est toujours > 1. Exemple : F=10 veut dire 1 volume mère pour 9 volumes d'eau.",
        units: "F (sans unité).",
        tags: ["dilution", "chimie"]
    },
    {
        id: "equivalence-1",
        title: "Équivalence (Titrage)",
        subject: "chimie",
        level: "1ere",
        formula: "\\frac{n_A}{a} = \\frac{n_{versé}}{b}",
        definition: "Moment où les réactifs sont mélangés en proportions stoechiométriques.",
        properties: "Déterminée par un changement de couleur ou un saut de pH (courbe).",
        units: "n en moles (mol).",
        tags: ["titrage", "dosage"]
    },
    {
        id: "beer-1",
        title: "Loi de Beer-Lambert",
        subject: "chimie",
        level: "1ere",
        formula: "A = \\epsilon \\times l \\times C",
        definition: "L'absorbance A dépend de la concentration de l'espèce colorée.",
        properties: "Valable si la concentration C est faible (diluée). A est sans unité.",
        units: "A, ε(L/mol/cm), l(cm), C(mol/L).",
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

// CORE FUNCTIONS
function render() {
    if(!listContainer) return;
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
    tabTriggers.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    tabPanels.forEach(panel => {
        panel.classList.toggle('active', panel.id === `tab-${tabId}`);
    });
}

// EVENT LISTENERS
if (searchInput) {
    searchInput.oninput = (e) => {
        currentSearch = e.target.value;
        render();
    };
}

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

if(closeModalBtn) closeModalBtn.onclick = closeModal;
if(modalOverlay) modalOverlay.onclick = (e) => { if (e.target === modalOverlay) closeModal(); };

tabTriggers.forEach(btn => {
    btn.onclick = () => switchTab(btn.dataset.tab);
});

// START
render();
