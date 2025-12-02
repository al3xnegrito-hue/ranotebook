// ========== SCROLL SUAVE A SECCIONES ==========
function smoothScrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Enlaces que empiezan con "#"
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;
    const targetId = href.slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      smoothScrollToId(targetId);

      // Si el menú móvil está abierto, lo cerramos
      const navList = document.getElementById("navList");
      if (navList && navList.classList.contains("is-open")) {
        navList.classList.remove("is-open");
      }
    }
  });
});

// ========== MENÚ MÓVIL ==========
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("is-open");
  });
}

// ========== DATOS DE MATERIAS Y PDFs ==========
const SUBJECT_DATA = {
  "Probabilidad y Estadistica": {
    title: "Probabilidad y Estadística",
    description:
      "Fundamentos estadísticos aplicados a procesos, datos y experimentación.",
    resources: [
      { label: "EstadisticaAplicada", href: "../pdfs/Probabilidad y Estadistica/EstadisticaAplicada.pdf" }
    ]
  },
  "Quimica General": {
    title: "Química General",
    description:
      "Fundamentos de química para el análisis y diseño de procesos.",
    resources: [
      { label: "Tema 3. Enlace quimico", href: "../pdfs/Quimica General/Tema 3. Enlace quimico.pdf" },
      { label: "Tema 4. Nomenclatura inorganica", href: "../pdfs/Quimica General/Tema 4. Nomenclatura inorganica.pdf" },
      { label: "Tema 5. Estequiometria", href: "../pdfs/Quimica General/Tema 5. Estequiometria.pdf" },
      { label: "2a prueba de desempeño", href: "../pdfs/Quimica General/2a prueba de desempeño.pdf" },
      { label: "Doc1", href: "../pdfs/Quimica General/Doc1.pdf" },
      { label: "Ejercicios nomenclatura inorgánica", href: "../pdfs/Quimica General/Ejercicios nomenclatura inorgánica.pdf" },
      { label: "III. Número de oxidación", href: "../pdfs/Quimica General/III. Número de oxidación.pdf" },
      { label: "IUPAC_Periodic_Table_Z y A", href: "../pdfs/Quimica General/IUPAC_Periodic_Table_Z y A.pdf" },
      { label: "IUPAC_Periodic_Table-04May22_CRA", href: "../pdfs/Quimica General/IUPAC_Periodic_Table-04May22_CRA.pdf" },
      { label: "Tema 1. Periodicidad Quimica", href: "../pdfs/Quimica General/Tema 1. Periodicidad Quimica.pdf" },
      { label: "Tema 2. Numeros Cuanticos", href: "../pdfs/Quimica General/Tema 2. Numeros Cuanticos.pdf" }
    ]
  },
  "Calculo Diferencial": {
    title: "Cálculo Diferencial",
    description:
      "Apuntes, exámenes y material de apoyo para cálculo diferencial.",
    resources: [
      { label: "Funciones", href: "../pdfs/Calculo Diferencial/Funciones.pdf" },
      { label: "Integrales-indefinidas-resueltas", href: "../pdfs/Calculo Diferencial/Integrales-indefinidas-resueltas.pdf" },
      { label: "Int-IIL_Proyecto final_539ff5658d0fb8b8412de43e37eae886", href: "../pdfs/Calculo Diferencial/Int-IIL_Proyecto final_539ff5658d0fb8b8412de43e37eae886.docx" },
      { label: "James_Stewart_Precalculo_matematicas_par", href: "../pdfs/Calculo Diferencial/James_Stewart_Precalculo_matematicas_par.pdf" },
      { label: "LARSON", href: "../pdfs/Calculo Diferencial/LARSON.pdf" },
      { label: "Notas de cálculo diferencial", href: "../pdfs/Calculo Diferencial/Notas de cálculo diferencial.pdf" },
      { label: "Notas de Calculo Diferencial_eb22b73fc69884c07c1b46cc4bebaeb8", href: "../pdfs/Calculo Diferencial/Notas de Calculo Diferencial_eb22b73fc69884c07c1b46cc4bebaeb8.pdf" },
      { label: "Parcial1_CD_Ago_2023_A_c6bb22380a153932917b8fe428a8e3e3", href: "../pdfs/Calculo Diferencial/Parcial1_CD_Ago_2023_A_c6bb22380a153932917b8fe428a8e3e3.pdf" },
      { label: "Parcial2_CD_Ago_2023_A_47867b2782ad819e8890fee9746a6adb", href: "../pdfs/Calculo Diferencial/Parcial2_CD_Ago_2023_A_47867b2782ad819e8890fee9746a6adb.pdf" },
      { label: "precalculo-7-edicion (1)", href: "../pdfs/Calculo Diferencial/precalculo-7-edicion (1).pdf" },
      { label: "1-Modelado-de-funciones", href: "../pdfs/Calculo Diferencial/1-Modelado-de-funciones.pdf" },
      { label: "5", href: "../pdfs/Calculo Diferencial/5.pdf" },
      { label: "100derivadasresueltasyosoytuprofe", href: "../pdfs/Calculo Diferencial/100derivadasresueltasyosoytuprofe.pdf" },
      { label: "Calculo I Serge Lang", href: "../pdfs/Calculo Diferencial/Calculo I Serge Lang.pdf" },
      { label: "calculo_ayres", href: "../pdfs/Calculo Diferencial/calculo_ayres.pdf" },
      { label: "calculo-diferencial-e-integral-tomo1-n-piskunov", href: "../pdfs/Calculo Diferencial/calculo-diferencial-e-integral-tomo1-n-piskunov.pdf" },
      { label: "calculo-james-stewart-7ed", href: "../pdfs/Calculo Diferencial/calculo-james-stewart-7ed.pdf" },
      { label: "ccc", href: "../pdfs/Calculo Diferencial/ccc.pdf" },
      { label: "CuadernoCalculoDiferencial_2237ab9ba2a5c50505fa6c7aded5be2d", href: "../pdfs/Calculo Diferencial/CuadernoCalculoDiferencial_2237ab9ba2a5c50505fa6c7aded5be2d.pdf" },
      { label: "CuadernoCalculoDiferencial_b2faa38259fcfb325e89225cc3a9e66b", href: "../pdfs/Calculo Diferencial/CuadernoCalculoDiferencial_b2faa38259fcfb325e89225cc3a9e66b.pdf" },
      { label: "desigualdades lineales modelacion", href: "../pdfs/Calculo Diferencial/desigualdades lineales modelacion.pdf" },
      { label: "ejercicio con desigualdades", href: "../pdfs/Calculo Diferencial/ejercicio con desigualdades.pdf" },
      { label: "Ejercicios de derivadas2", href: "../pdfs/Calculo Diferencial/Ejercicios de derivadas2.pdf" },
      { label: "EJERCICIOS RESUELTOS TRIGO TRES MAXIMOS Y MINIMOS (1)", href: "../pdfs/Calculo Diferencial/EJERCICIOS RESUELTOS TRIGO TRES MAXIMOS Y MINIMOS (1).pdf" },
      { label: "ejerciciosderivacion", href: "../pdfs/Calculo Diferencial/ejerciciosderivacion.pdf" },
      { label: "examen-derivadas", href: "../pdfs/Calculo Diferencial/examen-derivadas.pdf" },
      { label: "expresar  funciones", href: "../pdfs/Calculo Diferencial/expresar  funciones.pdf" },
      { label: "formulario", href: "../pdfs/Calculo Diferencial/formulario.pdf" }
    ]
  },
  "Sustentabilidad en Ingenieria": {
    title: "Sustentabilidad en Ingeniería",
    description:
      "Enfoques y herramientas para un desarrollo sostenible en proyectos de ingeniería.",
    resources: [],
  },
  "Investigacion de Operaciones 1": {
    title: "Investigación de Operaciones 1",
    description:
      "Modelos de optimización y herramientas de análisis para la toma de decisiones.",
    resources: [],
  },
  "Programacion para Ingenieria": {
    title: "Programación para Ingeniería",
    description:
      "Herramientas de programación aplicadas a problemas de ingeniería.",
    resources: [],
  },
  "Seguridad e Higiene Industrial": {
    title: "Seguridad e Higiene Industrial",
    description:
      "Normativas, checklists y guías de seguridad en entornos industriales.",
    resources: [],
  },
  "Termodinamica": {
    title: "Termodinámica",
    description:
      "Principios termodinámicos enfocados a procesos industriales y energéticos.",
    resources: [],
  },
  "Algebra Lineal": {
    title: "Álgebra Lineal",
    description:
      "Espacios vectoriales, matrices y aplicaciones en ingeniería.",
    resources: [],
  },
  "Balance de Materia y Energia": {
    title: "Balance de Materia y Energía",
    description:
      "Cálculos de entradas, salidas y acumulaciones en sistemas de proceso.",
    resources: [],
  },
  "Calculo Integral": {
    title: "Cálculo Integral",
    description:
      "Integrales y aplicaciones en balances, áreas y volúmenes.",
    resources: [],
  },
  "Cultura Emprendedora": {
    title: "Cultura Emprendedora",
    description:
      "Desarrollo de ideas, proyectos y modelos de negocio en el contexto de ingeniería.",
    resources: [],
  },
  "Economia para Ingenieros": {
    title: "Economía para Ingenieros",
    description:
      "Análisis económico y financiero aplicado a proyectos de ingeniería.",
    resources: [],
  },
  "Etica Profesional": {
    title: "Ética Profesional",
    description:
      "Responsabilidad social y profesional en el ejercicio de la ingeniería.",
    resources: [],
  },
  "Fisica General": {
    title: "Física General",
    description:
      "Fundamentos de mecánica, ondas y otros fenómenos físicos.",
    resources: [],
  },
  "Ing de Envase y Embalaje": {
    title: "Ingeniería de Envase y Embalaje",
    description:
      "Diseño, selección y análisis de materiales para envases y embalajes.",
    resources: [],
  },
  "Ing de Materiales": {
    title: "Ingeniería de Materiales",
    description:
      "Propiedades, selección y comportamiento de materiales en aplicaciones de ingeniería.",
    resources: [],
  },
};

// Elementos del panel
const subjectPanelEmpty = document.getElementById("subjectPanelEmpty");
const subjectPanelContent = document.getElementById("subjectPanelContent");
const subjectPanelTitle = document.getElementById("subjectPanelTitle");
const subjectPanelDescription = document.getElementById(
  "subjectPanelDescription"
);
const subjectResourcesList = document.getElementById("subjectResourcesList");

function resetSubjectPanel() {
  if (!subjectPanelEmpty || !subjectPanelContent) return;
  subjectPanelEmpty.classList.remove("is-hidden");
  subjectPanelContent.classList.add("is-hidden");
  subjectPanelTitle.textContent = "Nombre de la materia";
  subjectPanelDescription.textContent =
    "Aquí verás la descripción y enlaces a apuntes, exámenes y guías.";
  if (subjectResourcesList) {
    subjectResourcesList.innerHTML = "";
  }
}

function openSubject(subjectId) {
  if (!subjectPanelEmpty || !subjectPanelContent) return;

  const data = SUBJECT_DATA[subjectId];

  if (!data) {
    resetSubjectPanel();
    return;
  }

  subjectPanelTitle.textContent = data.title;
  subjectPanelDescription.textContent = data.description || "";
  subjectResourcesList.innerHTML = "";

  if (Array.isArray(data.resources) && data.resources.length > 0) {
    data.resources.forEach((res) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = res.href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = res.label;
      li.appendChild(a);
      subjectResourcesList.appendChild(li);
    });

    subjectPanelEmpty.classList.add("is-hidden");
    subjectPanelContent.classList.remove("is-hidden");
  } else {
    subjectPanelEmpty.classList.remove("is-hidden");
    subjectPanelContent.classList.add("is-hidden");
  }

  if (window.innerWidth < 960) {
    document.getElementById("subjectPanel")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Botones "Ver apuntes"
document.querySelectorAll(".subject-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const subjectId = btn.getAttribute("data-subject");
    if (!subjectId) return;
    openSubject(subjectId);
  });
});

// ========== FORMULARIO (DEMO) ==========
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Formulario enviado (modo demo).\nMás adelante se puede conectar a WhatsApp, correo u otro canal real."
    );
    contactForm.reset();
  });
}

// ========== AÑO AUTOMÁTICO EN EL FOOTER ==========
const footerYear = document.getElementById("footerYear");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// Estado inicial del panel
window.addEventListener("DOMContentLoaded", () => {
  resetSubjectPanel();
});
