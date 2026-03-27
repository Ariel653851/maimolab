/**
 * SCIENFORM V2.1 - SCRIPT.JS
 * Updated with Optique and advanced Chemistry for 1ère.
 */

const formulas = [
    // --- SECONDE PHYSIQUE ---
    {
        id: "poids-2",
        title: "Poids d'un corps",
        subject: "physique",
        level: "2nde",
        formula: "P = m \\times g",
        definition: "Force d'attraction exercée par la Terre (ou un astre) sur un objet massique situé à son voisinage.",
        properties: "Direction : verticale. Sens : vers le bas. Point d'application : centre de gravité. g ≈ 9,81 N/kg sur Terre.",
        units: "P(N), m(kg), g(N/kg).",
        tags: ["gravité", "mécanique"]
    },
    {
        id: "frequence-2",
        title: "Fréquence et Période",
        subject: "physique",
        level: "2nde",
        formula: "f = \\frac{1}{T}",
        definition: "La période T est la durée d'un motif élémentaire. La fréquence f est le nombre de motifs par seconde.",
        properties: "Plus la période est courte, plus la fréquence est élevée (son plus aigu par exemple).",
        units: "f(Hz), T(s).",
        tags: ["ondes", "son"]
    },
    {
        id: "snell-2",
        title: "Loi de Snell-Descartes",
        subject: "physique",
        level: "2nde",
        formula: "n_1 \\times \\sin(i_1) = n_2 \\times \\sin(i_2)",
        definition: "Relation entre les indices de réfraction n et les angles d'incidence/réfraction lors du passage de la lumière entre deux milieux.",
        properties: "L'indice n de l'air est pris égal à 1,00. L'angle de réfraction i2 dépend de la nature des deux milieux.",
        units: "n (sans unité), angles en degrés.",
        tags: ["optique", "lumière"]
    },

    // --- SECONDE CHIMIE ---
    {
        id: "masse-vol-2",
        title: "Masse volumique",
        subject: "chimie",
        level: "2nde",
        formula: "\\rho = \\frac{m}{V}",
        definition: "Masse d'une substance contenue dans une unité de volume donnée.",
        properties: "Permet de différencier des espèces chimiques (ex: eau = 1000 g/L). Ne pas confondre avec la densité.",
        units: "ρ(kg/m³ ou g/L), m(kg ou g), V(m³ ou L).",
        tags: ["matière", "identification"]
    },

    // --- PREMIÈRE PHYSIQUE ---
    {
        id: "optique-conjugaison-1",
        title: "Relation de conjugaison",
        subject: "physique",
        level: "1ere",
        formula: "\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{f'} = V",
        definition: "Lien entre la position de l'objet (A), la position de l'image (A') et la focale de la lentille (f').",
        properties: "Utilise des mesures algébriques (positives dans le sens de la lumière). f' est la distance focale.",
        units: "Mesures en mètres (m), V en Dioptries (δ).",
        tags: ["optique", "lentilles"]
    },
    {
        id: "optique-vergence-1",
        title: "Vergence d'une lentille",
        subject: "physique",
        level: "1ere",
        formula: "V = \\frac{1}{f'}",
        definition: "Capacité d'une lentille convergente à dévier les rayons lumineux vers son foyer.",
        properties: "Plus f' est petit, plus la lentille est bombée et plus sa vergence V est grande.",
        units: "V en Dioptries (δ), f' en mètres (m).",
        tags: ["optique", "vision"]
    },
    {
        id: "ec-1",
        title: "Énergie cinétique",
        subject: "physique",
        level: "1ere",
        formula: "E_c = \\frac{1}{2} m v^2",
        definition: "Énergie liée au mouvement d'un système. Elle dépend de sa masse et de sa vitesse.",
        properties: "Proportionnelle au carré du vecteur vitesse. Si la vitesse double, Ec est multipliée par 4.",
        units: "Ec(Joules), m(kg), v(m/s).",
        tags: ["énergie", "mouvement"]
    },
    {
        id: "epp-1",
        title: "Énergie potentielle de pesanteur",
        subject: "physique",
        level: "1ere",
        formula: "E_{pp} = m \\times g \\times z",
        definition: "Énergie liée à l'altitude z d'un objet dans le champ de pesanteur terrestre.",
        properties: "On choisit souvent l'origine des altitudes au niveau du sol (z = 0).",
        units: "Epp(Joules), m(kg), z(m).",
        tags: ["énergie", "gravité"]
    },

    // --- PREMIÈRE CHIMIE ---
    {
        id: "mole-1",
        title: "Quantité de matière",
        subject: "chimie",
        level: "1ere",
        formula: "n = \\frac{m}{M}",
        definition: "Nombre de moles contenues dans une masse m d'une espèce chimique de masse molaire M.",
        properties: "La mole (mol) est l'unité de base pour compter les atomes ou molécules.",
        units: "n(mol), m(g), M(g/mol).",
        tags: ["mole", "atome"]
    },
    {
        id: "dilution-1",
        title: "Formule de la dilution",
        subject: "chimie",
        level: "1ere",
        formula: "C_i \\times V_i = C_f \\times V_f",
        definition: "Conservation de la quantité de matière lors de l'ajout d'un solvant.",
        properties: "i = initial (mère), f = final (fille). On a toujours Ci > Cf et Vi < Vf.",
        units: "C(mol/L), V(L ou mL).",
        tags: ["solutions", "préparation"]
    },
    {
        id: "facteur-dilution-1",
        title: "Facteur de dilution",
        subject: "chimie",
        level: "1ere",
        formula: "F = \\frac{C_i}{C_f} = \\frac{V_f}{V_i}",
        definition: "Nombre de fois qu'une solution a été diluée.",
        properties: "F est toujours supérieur à 1. Par exemple, si F = 10, on a dilué 10 fois.",
        units: "F (sans unité).",
        tags: ["solutions", "test"]
    },
    {
        id: "equivalence-1",
        title: "Équivalence au titrage",
        subject: "chimie",
        level: "1ere",
        formula: "\\frac{n_A}{a} = \\frac{n_{versé}}{b}",
        definition: "État caractéristique d'un titrage où les réactifs ont été introduits dans des proportions stoechiométriques.",
        properties: "À l'équivalence, il y a un changement de couleur (titrage colorimétrique) ou un saut de pH.",
        units: "n en moles (mol).",
        tags: ["dosage", "titrage"]
    },
    {
        id: "beer-1",
        title: "Loi de Beer-Lambert",
        subject: "chimie",
        level: "1ere",
        formula: "A = \\epsilon \\times l \\times C",
        definition: "L'absorbance A est proportionnelle à la concentration C de l'espèce colorée.",
        properties: "Utile pour doser une solution colorée sans la détruire (spectrophotométrie).",
        units: "A (sans unité), ε(L/mol/cm), l(cm), C(mol/L).",
        tags: ["dosage", "lumière"]
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
