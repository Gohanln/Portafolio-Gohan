import { useEffect, useMemo, useState } from "react";
import "./App.css";

type Project = {
  title: string;
  category: string;
  description: string;
  year: string;
  tags: string[];
  style: string;
  mark: string;
  featured?: boolean;
  previewImage?: string;
  liveUrl?: string;
  sourceUrl?: string;
};

const projects: Project[] = [
  {
    title: "Gestión financiera",
    category: "Aplicación",
    description:
      "Una aplicación para organizar finanzas personales y consultar movimientos desde una experiencia clara.",
    year: "2025",
    tags: ["React", "Finanzas", "Dashboard"],
    style: "finance",
    mark: "$",
    sourceUrl: "https://github.com/Gohanln/gestion-finanzas",
    featured: true,
  },
  {
    title: "Sistema de panadería",
    category: "Aplicación",
    description:
      "Sistema para apoyar la operación diaria de una panadería, con herramientas para gestionar su negocio.",
    year: "2025",
    tags: ["React", "Sistema", "Negocio"],
    style: "bakery",
    mark: "pan",
    featured: true,
  },
  {
    title: "TechNews",
    category: "Sitio web",
    description:
      "Un sitio editorial de noticias tecnológicas con una portada pensada para descubrir artículos.",
    year: "2025",
    tags: ["JavaScript", "Noticias", "Editorial"],
    style: "news",
    mark: "TN",
    sourceUrl: "https://github.com/Gohanln/tech_news",
  },
  {
    title: "To-do app",
    category: "Aplicación",
    description:
      "Una aplicación ligera para organizar tareas y llevar un seguimiento de pendientes.",
    year: "2025",
    tags: ["HTML", "CSS", "JavaScript"],
    style: "tasks",
    mark: "✓",
  },
  {
    title: "Autos",
    category: "Sitio web",
    description:
      "Una galería dedicada al mundo automotriz, con páginas para explorar modelos e imágenes.",
    year: "2024",
    tags: ["HTML", "CSS", "Galería"],
    style: "cars",
    mark: "04",
  },
  {
    title: "Box",
    category: "Sitio web",
    description:
      "Un sitio sobre boxeo con páginas para conocer peleas, torneos y conceptos del deporte.",
    year: "2024",
    tags: ["HTML", "CSS", "Deportes"],
    style: "boxing",
    mark: "B",
  },
  {
    title: "Flappy Bird",
    category: "Juego",
    description:
      "Un juego inspirado en los arcades clásicos, desarrollado para practicar mecánicas e interacción.",
    year: "2025",
    tags: ["TypeScript", "Phaser", "Juego"],
    style: "bird",
    mark: "✳",
    featured: true,
  },
  {
    title: "Love Her",
    category: "Sitio web",
    description:
      "Una experiencia web romántica hecha con detalles visuales y una presentación especial.",
    year: "2025",
    tags: ["Next.js", "React", "Diseño"],
    style: "love",
    mark: "♡",
    liveUrl: "https://gohanln.github.io/love-her/",
    sourceUrl: "https://github.com/Gohanln/love-her",
  },
  {
    title: "Música",
    category: "Sitio web",
    description:
      "Un recorrido por bandas y artistas con páginas dedicadas a sus historias y música.",
    year: "2024",
    tags: ["HTML", "CSS", "Música"],
    style: "music",
    mark: "♫",
  },
  {
    title: "Novia so no",
    category: "Sitio web",
    description:
      "Una página especial con una propuesta visual y musical hecha para compartir.",
    year: "2025",
    tags: ["JavaScript", "Diseño", "Música"],
    style: "novia",
    mark: "♪",
    liveUrl: "https://gohanln.github.io/propuesta.github.io/",
    sourceUrl: "https://github.com/Gohanln/propuesta.github.io",
  },
  {
    title: "Perfumes",
    category: "Sitio web",
    description:
      "Un sitio de fragancias con un catálogo para descubrir distintos perfumes.",
    year: "2024",
    tags: ["HTML", "CSS", "Catálogo"],
    style: "perfume",
    mark: "P",
  },
  {
    title: "SICOFÉ Contabilidad",
    category: "Aplicación",
    description:
      "Una solución web para apoyar el trabajo contable y organizar información del negocio.",
    year: "2025",
    tags: ["Web", "Contabilidad", "Sistema"],
    style: "sicofe",
    mark: "SC",
  },
  {
    title: "Tercer mes",
    category: "Sitio web",
    description:
      "Una página conmemorativa creada para guardar y compartir un momento especial.",
    year: "2025",
    tags: ["HTML", "CSS", "Personal"],
    style: "third-month",
    mark: "03",
    liveUrl: "https://trhee-monts.vercel.app/",
    sourceUrl: "https://github.com/Gohanln/trhee-monts",
  },
  {
    title: "Zenless Zone Zero",
    category: "Sitio web",
    description:
      "Un sitio de fans para explorar personajes, el mundo y otros detalles del juego.",
    year: "2024",
    tags: ["HTML", "CSS", "Videojuegos"],
    style: "zenless",
    mark: "ZZZ",
  },
  {
    title: "Real Estate",
    category: "Sitio web",
    description:
      "Una interfaz inmobiliaria desarrollada con React para explorar propiedades.",
    year: "2025",
    tags: ["React", "Inmobiliaria", "UI"],
    style: "estate",
    mark: "RE",
  },
  {
    title: "Mi primera página web",
    category: "Sitio web",
    description:
      "Uno de los primeros proyectos web, hecho para aprender y poner en práctica los fundamentos.",
    year: "2024",
    tags: ["HTML", "CSS", "Aprendizaje"],
    style: "first-page",
    mark: "01",
    previewImage: "/previews/first-page.png",
  },
  {
    title: "Flores amarillas",
    category: "Sitio web",
    description:
      "Una página sencilla y floral creada para dedicar y compartir un detalle especial.",
    year: "2024",
    tags: ["HTML", "CSS", "Personal"],
    style: "flowers",
    mark: "✿",
    previewImage: "/previews/flowers.png",
  },
  {
    title: "Rezzz",
    category: "Sitio web",
    description:
      "Un proyecto web personal que forma parte de la colección de trabajos.",
    year: "2025",
    tags: ["Web", "Proyecto personal"],
    style: "rezzz",
    mark: "R",
  },
  {
    title: "Cuestionarios",
    category: "Aplicación",
    description:
      "Un proyecto educativo para practicar y responder cuestionarios.",
    year: "2024",
    tags: ["Web", "Educación", "Práctica"],
    style: "quiz",
    mark: "?",
  },
];

const filters = ["Todos", "Sitio web", "Aplicación", "Juego"];

const contactLinks = [
  {
    label: "Correo electrónico",
    href: "mailto:orozticogohan@gmail.com",
    value: "orozticogohan@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/Gohanln",
    value: "github.com/Gohanln",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gohan-rodriguez-051843357/",
    value: "LinkedIn",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("es");

    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "Todos" || project.category === activeFilter;
      const searchableText = [
        project.title,
        project.category,
        project.description,
        ...project.tags,
      ]
        .join(" ")
        .toLocaleLowerCase("es");

      return matchesFilter && searchableText.includes(normalizedQuery);
    });
  }, [activeFilter, query]);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Gohan Alfonso, inicio">
          <span className="wordmark-mark">G.</span>
          <span>GOHAN ALFONSO<span className="wordmark-period">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a className="nav-contact" href="#contacto">
            Contacto <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" />
            <span>PORTAFOLIO DE DESARROLLO WEB</span>
          </div>
          <h1>
            Ideas que se
            <br />
            convierten en <span>experiencias.</span>
          </h1>
          <p className="hero-description">
            Soy estudiante de Ingeniería Electromecánica con formación técnica
            en programación, y creo páginas web con React. Me interesa seguir
            aprendiendo y desarrollar soluciones digitales útiles para negocios.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#proyectos">
              Explorar proyectos <ArrowIcon />
            </a>
            <a className="text-link" href="#sobre-mi">
              Conóceme <span>↓</span>
            </a>
          </div>
          <div className="hero-footnote">
            <span className="hero-index">01 / 03</span>
            <span>DISEÑO · DESARROLLO · IDEAS</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Composición gráfica abstracta">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-sun" />
          <div className="art-block block-one" />
          <div className="art-block block-two" />
          <div className="art-block block-three" />
          <span className="art-label art-label-top">CREATIVIDAD<br />EN MOVIMIENTO</span>
          <span className="art-label art-label-bottom">WEB / 2025</span>
          <span className="art-star">✳</span>
        </div>
      </section>

      <section className="metrics" aria-label="Resumen del portafolio">
        <div className="metric">
          <strong>{projects.length.toString().padStart(2, "0")}</strong>
          <span>PROYECTOS EN MI COLECCIÓN</span>
        </div>
        <div className="metric">
          <strong>03</strong>
          <span>ÁREAS DE EXPLORACIÓN</span>
        </div>
        <div className="metric">
          <strong>∞</strong>
          <span>IDEAS POR DESARROLLAR</span>
        </div>
        <p>Cada proyecto es una nueva oportunidad para crear algo mejor.</p>
      </section>

      <section className="projects-section" id="proyectos">
        <div className="section-heading">
          <div>
            <span className="eyebrow">UNA SELECCIÓN DE MI TRABAJO</span>
            <h2>Proyectos<span className="accent-dot">.</span></h2>
          </div>
          <p>
            Sitios, aplicaciones e ideas que he ido convirtiendo en experiencias
            digitales.
          </p>
        </div>

        <div className="project-controls">
          <div className="filter-list" aria-label="Filtrar proyectos">
            {filters.map((filter) => (
              <button
                className={`filter-button${activeFilter === filter ? " is-active" : ""}`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
                {filter === "Todos" && <span>{projects.length}</span>}
              </button>
            ))}
          </div>
          <label className="search-field">
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
              <circle cx="8.8" cy="8.8" r="5.8" stroke="currentColor" strokeWidth="1.5" />
              <path d="m13 13 4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <input
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar proyecto"
              type="search"
              value={query}
            />
          </label>
        </div>

        {visibleProjects.length > 0 ? (
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <button
                  aria-label={`Ver detalles de ${project.title}`}
                  className={`project-preview preview-${project.style}${project.previewImage ? " has-screenshot" : ""}`}
                  onClick={() => setSelectedProject(project)}
                  type="button"
                >
                  <span className="preview-topline">
                    <span>PROYECTO / {String(index + 1).padStart(2, "0")}</span>
                    <span>{project.year}</span>
                  </span>
                  {project.previewImage ? (
                    <img
                      alt=""
                      className="preview-screenshot"
                      loading="lazy"
                      src={project.previewImage}
                    />
                  ) : (
                    <span className="preview-artwork">
                      <span className="preview-mark">{project.mark}</span>
                      <span className="preview-lines">
                        <i />
                        <i />
                        <i />
                      </span>
                    </span>
                  )}
                  <span className="preview-bottomline">
                    <span>{project.category.toUpperCase()}</span>
                    <span className="preview-arrow"><ArrowIcon diagonal /></span>
                  </span>
                </button>
                <div className="project-info">
                  <div>
                    <span className="project-category">
                      {project.category}
                      {project.liveUrl && (
                        <span className="live-indicator"> · DEMO EN LÍNEA</span>
                      )}
                    </span>
                    <h3>{project.title}</h3>
                  </div>
                  <button
                    aria-label={`Más detalles sobre ${project.title}`}
                    className="round-link"
                    onClick={() => setSelectedProject(project)}
                    type="button"
                  >
                    <ArrowIcon diagonal />
                  </button>
                </div>
                <div className="project-tags">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>✳</span>
            <p>No encontramos proyectos con esa búsqueda.</p>
            <button
              onClick={() => {
                setActiveFilter("Todos");
                setQuery("");
              }}
              type="button"
            >
              Ver todos los proyectos
            </button>
          </div>
        )}
      </section>

      <section className="about-section" id="sobre-mi">
        <div className="about-index">
          <span className="eyebrow">UN POCO SOBRE MÍ</span>
          <span className="about-number">02</span>
        </div>
        <div className="about-copy">
          <h2>
            Ingeniería, programación
            <br />
            y soluciones para negocios<span className="accent-dot">.</span>
          </h2>
          <p>
            Soy estudiante de Ingeniería Electromecánica y tengo formación
            técnica en programación. Me dedico a crear páginas web con React,
            seguir aprendiendo y desarrollar soluciones digitales útiles para
            negocios.
          </p>
          <a href="#contacto" className="about-link">
            ¿Tienes una idea? Hablemos <ArrowIcon />
          </a>
        </div>
        <div className="about-stamp" aria-hidden="true">
          <span>MADE WITH</span>
          <strong>✳</strong>
          <span>CURIOUSITY</span>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <span className="eyebrow">03 / EL SIGUIENTE PROYECTO</span>
        <h2>
          Hagamos algo
          <br />
          <span>que valga la pena.</span>
        </h2>
        <p>
          ¿Tienes una idea en mente? Me encantará conocerla y explorar cómo
          podemos hacerla realidad.
        </p>
        <div className="contact-links" aria-label="Enlaces de contacto">
          {contactLinks.map((contact) => (
            <a
              href={contact.href}
              key={contact.label}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
            >
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
              <ArrowIcon diagonal />
            </a>
          ))}
        </div>
        <div className="contact-decoration" aria-hidden="true">✳</div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#inicio">
          <span className="wordmark-mark">G.</span>
          <span>GOHAN ALFONSO<span className="wordmark-period">.</span></span>
        </a>
        <span>Diseñado y construido con curiosidad.</span>
        <a href="#inicio">VOLVER ARRIBA ↑</a>
      </footer>

      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <section
            aria-labelledby="project-dialog-title"
            aria-modal="true"
            className="project-dialog"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button
              aria-label="Cerrar detalles"
              className="dialog-close"
              onClick={() => setSelectedProject(null)}
              type="button"
            >
              ×
            </button>
            <span className="eyebrow">
              {selectedProject.category} · {selectedProject.year}
            </span>
            <h2 id="project-dialog-title">{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="dialog-tags">
              {selectedProject.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {selectedProject.liveUrl || selectedProject.sourceUrl ? (
              <div className="project-actions">
                {selectedProject.liveUrl && (
                  <a
                    className="project-action project-action-primary"
                    href={selectedProject.liveUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Abrir demo <ArrowIcon diagonal />
                  </a>
                )}
                {selectedProject.sourceUrl && (
                  <a
                    className="project-action"
                    href={selectedProject.sourceUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Ver código <ArrowIcon diagonal />
                  </a>
                )}
              </div>
            ) : (
              <div className="dialog-note">
                <span>↗</span>
                <p>
                  No encontré una demo publicada ni un repositorio público para
                  este proyecto.
                </p>
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
