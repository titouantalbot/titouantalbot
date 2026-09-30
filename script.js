
/* ################################################################
   1. DONNÉES — documents (fichiers du dossier doc/)
   ################################################################ */

/* Registre des documents : identifiant -> nom affiché + chemin du fichier.
   Les fichiers eux-mêmes sont rangés dans le dossier doc/. */
const DOCUMENTS = {
  stage1_eval: {
    name: "Evaluation_stage_1ere_annee.pdf",
    file: "doc/Evaluation_stage_1ere_annee.pdf"
  },
  stage1_journal: {
    name: "Journal_de_bord_stage_1ere_annee.pdf",
    file: "doc/Journal_de_bord_stage_1ere_annee.pdf"
  },
  stage1_soutenance: {
    name: "Soutenance_stage_1ere_annee.pdf",
    file: "doc/Soutenance_stage_1ere_annee.pdf"
  },
  cv_pdf: {
    name: "CV_Titouan_TALBOT.pdf",
    file: "doc/CV_Titouan_TALBOT.pdf"
  },
  ap1_tp: {
    name: "TP_noté_1_deploiement_WordPress.pdf",
    file: "doc/TP_note_1_deploiement_WordPress.pdf"
  },
  ap2_pptx: {
    name: "AP2_CMS_hebergeurs_maquette.pdf",
    file: "doc/AP2_CMS_hebergeurs_maquette.pdf"
  },
  ap2_site: {
    name: "Site de documentation AP2 (Google Sites)",
    url: "https://sites.google.com/view/bidul-jay-arbi-titouan/accueil"
  },
  ap3_devis: {
    name: "AP3_Devis_infrastructure_FKV.pdf",
    file: "doc/AP3_Devis_infrastructure_FKV.pdf"
  },
  ap3_doc_admin: {
    name: "AP3_Documentation_administrateur.pdf",
    file: "doc/AP3_Documentation_administrateur.pdf"
  },
  ap3_doc_ens: {
    name: "AP3_Documentation_enseignants.pdf",
    file: "doc/AP3_Documentation_enseignants.pdf"
  },
  ap3_doc_app: {
    name: "AP3_Documentation_apprenants.pdf",
    file: "doc/AP3_Documentation_apprenants.pdf"
  },
  ap4_pfsense: {
    name: "AP4_Regles_pfSense.pdf",
    file: "doc/AP4_Regles_pfSense.pdf"
  }
};

const CV_IMAGE = "doc/CV_Titouan_TALBOT.jpg";

/* ################################################################
   2. DONNÉES — APs
   ################################################################ */

/* Activités professionnelles (AP).
   status : "done" (réalisé) ou "pending" (à venir)
   documentation / production : listes d'identifiants définis dans documents.js */
const APS = [
  {
    id: 1,
    title: "Déploiement et administration d'un site WordPress",
    periode: "1ère année — octobre 2025",
    status: "done",
    description: "TP noté individuel : installation d'un site WordPress (« SiteCoursEtJardins2024 ») sous XAMPP, import de la base de données via phpMyAdmin, création d'un compte utilisateur MySQL à privilèges restreints, administration du site (ajout et publication d'une page), puis sauvegarde complète (base de données, fichiers du site, identifiants) archivée sur OneDrive.",
    outils: ["XAMPP", "WordPress", "phpMyAdmin / MySQL"],
    competences: [
      "Gérer le patrimoine informatique",
      "Mettre à disposition des utilisateurs un service informatique"
    ],
    documentation: ["ap1_tp"],
    production: [],
    mode: "Seul"
  },
  {
    id: 2,
    title: "Choix d'un CMS et d'un hébergeur pour un site web",
    periode: "1ère année — fin 2025",
    status: "done",
    description: "Étude comparative en équipe de trois : mise en concurrence de CMS (Google Sites, Grav, Drupal) et d'hébergeurs (AlwaysData, Google Host, Google Sites) selon la prise en main, le coût, la personnalisation et la stabilité, suivie de la réalisation d'une maquette de site.",
    outils: ["Google Sites", "Grav", "Drupal", "AlwaysData", "Google Host"],
    competences: [
      "Développer la présence en ligne de l'organisation",
      "Travailler en mode projet"
    ],
    documentation: ["ap2_pptx", "ap2_site"],
    production: [],
    mode: "En équipe (avec Jay et Arbi)"
  },
  {
    id: 3,
    title: "Déploiement d'une plateforme LMS Moodle pour l'entreprise FKV",
    periode: "1ère année — janvier 2026",
    status: "done",
    description: "En binôme : chiffrage du besoin client (devis serveur Ubuntu Server, stockage NAS et LMS Moodle pour la société FKV), déploiement de la plateforme, puis rédaction de trois documentations utilisateur distinctes (administrateur, enseignant, apprenant) couvrant la connexion, la gestion des rôles, la création de cours et le suivi pédagogique.",
    outils: ["Ubuntu Server", "Moodle", "phpMyAdmin"],
    competences: [
      "Mettre à disposition des utilisateurs un service informatique",
      "Travailler en mode projet",
      "Gérer le patrimoine informatique"
    ],
    documentation: ["ap3_doc_admin", "ap3_doc_ens", "ap3_doc_app"],
    production: ["ap3_devis"],
    mode: "En équipe (avec Paul Compain)"
  },
  {
    id: 4,
    title: "Sécurisation réseau : règles de filtrage pfSense",
    periode: "1ère année — janvier à mars 2026",
    status: "done",
    description: "Définition des règles de filtrage pfSense de l'infrastructure FKV, organisées par interface : WAN (accès HTTP/HTTPS entrant vers Moodle), LAN (accès des clients internes, DNS, sauvegardes vers la base de données), DMZ publique (serveur Moodle) et DMZ privée (serveur de base de données), avec cloisonnement strict entre zones.",
    outils: ["pfSense"],
    competences: [
      "Gérer le patrimoine informatique",
      "Mettre à disposition des utilisateurs un service informatique"
    ],
    documentation: ["ap4_pfsense"],
    production: [],
    mode: "En équipe (projet FKV, avec Paul Compain)"
  },
  {
    id: 5,
    title: "À venir",
    periode: "",
    status: "pending",
    description: "",
    outils: [],
    competences: [],
    documentation: [],
    production: [],
    mode: ""
  }
];

/* ################################################################
   3. DONNÉES — Stages
   ################################################################ */

/* Stages. Mêmes champs que les APs. */
const STAGES = [
  {
    id: 1,
    title: "Stage au service informatique de la CPAM de la Sarthe",
    periode: "1ère année — 18 mai au 19 juin 2026",
    status: "done",
    description: "Stage de 5 semaines au sein du service informatique de la CPAM de la Sarthe (Le Mans), encadré par Laurent Litwin (responsable architecture réseau). Missions principales : préparation et déploiement de postes sécurisés en libre-service pour le public (PC kiosk), inventaire et étiquetage du parc d'écrans, dépannage avec l'équipe assistance, et conception d'un serveur de fichiers sécurisé accessible depuis internet (schéma réseau, comparatif de solutions, mise en place sur Linux Zorin). Le PC kiosk a été déployé avec succès ; le serveur SFTP n'a pas pu être finalisé faute de temps.",
    outils: [
      "Windows 11",
      "Active Directory (déploiement par Host Name)",
      "Linux Zorin",
      "SFTP / NAS",
      "GLPI (inventaire)"
    ],
    competences: [
      "Répondre aux incidents et aux demandes d'assistance et d'évolution",
      "Gérer le patrimoine informatique"
    ],
    documentation: ["stage1_eval", "stage1_journal", "stage1_soutenance"],
    production: [],
    mode: "Dans une équipe informatique"
  },
  {
    id: 2,
    title: "Stage de 2ème année",
    periode: "2ème année — du 4 janvier au 12 février 2027 (à venir)",
    status: "pending",
    description: "Stage de 6 semaines à venir, en cours de recherche.",
    outils: [],
    competences: [],
    documentation: [],
    production: [],
    mode: ""
  }
];

/* ################################################################
   4. DONNÉES — Veille
   ################################################################ */

/* Thèmes de veille technologique. */
const VEILLE = [
  {
    theme: "Thème 1"
  },
  {
    theme: "Thème 2"
  },
  {
    theme: "Thème 3"
  }
];

/* ################################################################
   5. COMPOSANTS
   ################################################################ */

const PLACEHOLDER = `<span class="placeholder">À compléter</span>`;
const statusLabel = item => (item.status === 'pending' ? 'à venir' : 'réalisé');
const pendingClass = item => (item.status === 'pending' ? 'pending' : '');
const text = value => (value || '').toString();

/* --- Blocs de la fiche détail ------------------------------------ */

function specCell(title, content, full = false) {
  return `<div class="spec-cell ${full ? 'full' : ''}"><h4>${title}</h4>${content}</div>`;
}

function textOrPlaceholder(value) {
  return `<p>${text(value) || PLACEHOLDER}</p>`;
}

function listOrPlaceholder(list) {
  if (!list || !list.length) return `<p class="placeholder">À compléter</p>`;
  return `<ul>${list.map(item => `<li>${text(item)}</li>`).join('')}</ul>`;
}

/* Liens de téléchargement vers les fichiers du dossier /documentation */
function documentLinks(ids) {
  if (!ids || !ids.length) return `<p class="placeholder">À compléter</p>`;
  return ids.map(id => {
    const doc = DOCUMENTS[id];
    if (!doc) return '';
    if (doc.url) {
      return `<p><a class="linkish" href="${doc.url}" target="_blank" rel="noopener noreferrer">${doc.name}</a></p>`;
    }
    return `<p><a class="linkish" href="${encodeURI(doc.file)}" download="${doc.name}">${doc.name}</a></p>`;
  }).join('');
}

/* Corps d'une fiche (AP ou stage), utilisé par la page détail et l'accordéon */
function specBody(item, skillsLabel) {
  const hasProduction = item.production && item.production.length;
  const documentation = specCell('Documentation technique', documentLinks(item.documentation), !hasProduction);
  const production = hasProduction
    ? specCell("Production en ligne / capture d'écran", documentLinks(item.production))
    : '';

  return `
    <div class="spec-body">
      ${specCell('Description', textOrPlaceholder(item.description), true)}
      ${specCell('Outils utilisés', listOrPlaceholder(item.outils))}
      ${specCell(skillsLabel, listOrPlaceholder(item.competences))}
      ${documentation}${production}
      ${specCell('Mode de travail', textOrPlaceholder(item.mode), true)}
    </div>`;
}

/* --- Listes ------------------------------------------------------ */

/* Grille de cartes cliquables (utilisée pour les stages) */
function cardGrid(items, kind) {
  return `<div class="grid">` + items.map(item => `
    <a class="port-card ${pendingClass(item)}" href="#/${kind}/${item.id}">
      <div class="port-id">${kind.toUpperCase()}${String(item.id).padStart(2, '0')} — ${statusLabel(item)}</div>
      <h3>${text(item.title)}</h3>
      <div class="period">${text(item.periode)}</div>
    </a>`).join('') + `</div>`;
}

/* Accordéon des APs : openId = AP actuellement dépliée (ou null) */
function accordion(items, openId) {
  return `<div class="ap-list">` + items.map(item => {
    const isOpen = openId === item.id;
    return `
    <div class="ap-item">
      <button type="button" class="port-card ${pendingClass(item)} ${isOpen ? 'open' : ''}" data-ap-id="${item.id}">
        <div class="port-id">
          <span>AP${String(item.id).padStart(2, '0')} — ${statusLabel(item)}</span>
          <span class="chevron">${isOpen ? '−' : '+'}</span>
        </div>
        <h3>${text(item.title)}</h3>
        ${item.periode ? `<div class="period">${text(item.periode)}</div>` : ''}
      </button>
      ${isOpen ? `<div class="spec inline">${specBody(item, 'Compétences travaillées')}</div>` : ''}
    </div>`;
  }).join('') + `</div>`;
}

/* ################################################################
   6. VUES
   ################################################################ */

/* Petit lien de retour + fiche détaillée d'un AP ou d'un stage */
function detailView(item, kind, backHash, backLabel) {
  const skillsLabel = kind === 'ap' ? 'Compétences travaillées' : 'Compétences acquises';
  return `
    <a class="back" href="${backHash}">&larr; ${backLabel}</a>
    <div class="spec">
      <div class="spec-head">
        <h2>${text(item.title)}</h2>
        <div class="period">${text(item.periode)}</div>
      </div>
      ${specBody(item, skillsLabel)}
    </div>`;
}

/* Accueil : titre + schéma "topologie" avec les 4 rubriques */
function homeView() {
  const bubble = (href, cx, cy, label) => `
        <a href="${href}" class="topo-link">
          <circle cx="${cx}" cy="${cy}" r="40" fill="var(--surface)" stroke="var(--border)" stroke-width="1.5"/>
          <text x="${cx}" y="${cy + 6}" text-anchor="middle" class="topo-node" style="font-size:15px;">${label}</text>
        </a>`;

  return `
    <div class="hero">
      <h1>Titouan Talbot — BTS SIO, option SISR</h1>
    </div>
    <div class="topo">
      <svg viewBox="0 0 820 400" xmlns="http://www.w3.org/2000/svg">
        <g stroke="var(--border)" stroke-width="1.5">
          <line x1="410" y1="200" x2="150" y2="60"/>
          <line x1="410" y1="200" x2="670" y2="60"/>
          <line x1="410" y1="200" x2="150" y2="340"/>
          <line x1="410" y1="200" x2="670" y2="340"/>
        </g>
        <rect x="310" y="145" width="200" height="110" rx="3" fill="var(--surface)" stroke="var(--accent)" stroke-width="2.5"/>
        <text x="410" y="172" text-anchor="middle" class="topo-node" style="font-size:16px; font-weight:700;">PORTFOLIO</text>
        <text x="410" y="192" text-anchor="middle" class="topo-node-dim" style="font-size:12px;">Titouan</text>
        <text x="410" y="211" text-anchor="middle" class="topo-node-dim" style="font-size:11px;">Étudiant en 2ème année</text>
        <text x="410" y="226" text-anchor="middle" class="topo-node-dim" style="font-size:11px;">de BTS SIO (SISR).</text>
        ${bubble('#/aps', 150, 60, 'APs')}
        ${bubble('#/stages', 670, 60, 'Stage')}
        ${bubble('#/cv', 150, 340, 'CV')}
        ${bubble('#/veille', 670, 340, 'Veille')}
      </svg>
    </div>`;
}

function apsListView(openApId) {
  return `<h2>APs</h2>${accordion(APS, openApId)}`;
}

function stagesListView() {
  return `<h2>Stages</h2>${cardGrid(STAGES, 'stage')}`;
}

function veilleView() {
  return `<h2>Veille technologique</h2>
    <div class="log">${VEILLE.map(v => `
      <div class="log-entry" style="grid-template-columns:1fr">
        <div><h3>${text(v.theme)}</h3></div>
      </div>`).join('')}
    </div>`;
}

function cvView() {
  const pdf = DOCUMENTS.cv_pdf;
  return `<h2>CV</h2>
    <p><a class="printbtn dl" href="${encodeURI(pdf.file)}" download="${pdf.name}">Télécharger le CV (PDF)</a></p>
    <div class="cv-frame"><img src="${encodeURI(CV_IMAGE)}" alt="CV de Titouan Talbot"></div>`;
}

function notFoundView() {
  return `<h2>Page introuvable</h2><p>Cette page n'existe pas.</p><a class="back" href="#/">&larr; Retour à l'accueil</a>`;
}

/* ################################################################
   7. ROUTEUR
   ################################################################ */

const viewEl = document.getElementById('view');
const navEl = document.getElementById('mainNav');

let openApId = null; // AP dépliée dans l'accordéon

/* Table des routes : chaque entrée renvoie { html, nav } où nav = onglet actif */
const ROUTES = {
  '':       ()     => ({ html: homeView(), nav: '/' }),
  'aps':    ()     => ({ html: apsListView(openApId), nav: '/aps' }),
  'ap':     (id)   => findDetail(APS, id, 'ap', '#/aps', 'Retour aux APs', '/aps'),
  'stages': ()     => ({ html: stagesListView(), nav: '/stages' }),
  'stage':  (id)   => findDetail(STAGES, id, 'stage', '#/stages', 'Retour aux stages', '/stages'),
  'cv':     ()     => ({ html: cvView(), nav: '/cv' }),
  'veille': ()     => ({ html: veilleView(), nav: '/veille' })
};

function findDetail(list, id, kind, backHash, backLabel, nav) {
  const item = list.find(x => String(x.id) === id);
  return { html: item ? detailView(item, kind, backHash, backLabel) : notFoundView(), nav };
}

function render() {
  const [page = '', param] = (location.hash || '#/').replace('#', '').split('/').filter(Boolean);
  const route = ROUTES[page] || (() => ({ html: notFoundView(), nav: '' }));
  const { html, nav } = route(param);

  viewEl.innerHTML = html;
  navEl.classList.toggle('hidden', nav === '/');
  navEl.querySelectorAll('a').forEach(a =>
    a.classList.toggle('active', a.dataset.route === nav));
  window.scrollTo({ top: 0 });
}

/* Clic sur une AP de l'accordéon : déplier / replier */
viewEl.addEventListener('click', event => {
  const button = event.target.closest('[data-ap-id]');
  if (!button) return;
  const id = Number(button.dataset.apId);
  openApId = (openApId === id) ? null : id;
  render();
});

window.addEventListener('hashchange', render);
document.addEventListener('DOMContentLoaded', render);
