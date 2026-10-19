/**
 * ==========================================================================
 * INICIATIVA ACADÉMICA UPS WEB - LÓGICA JAVASCRIPT PURO (VANILLA JS)
 * Sin React, Sin TypeScript, Sin Node/npm, Sin dependencias
 * Cumplimiento estricto de accesibilidad WCAG 2.2 y navegación por teclado
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // ========================================================================
  // DATOS OFICIALES DE LA INICIATIVA ACADÉMICA (PORTAFOLIO Y CRONOGRAMA)
  // ========================================================================
  const PROJECTS_DATA = [
    {
      id: 'proy-aq-mesh',
      title: 'Red Comunitaria de Calidad del Aire (AirMesh-Open)',
      leadMentor: 'Dra. Elena Valdez',
      leadDegree: 'PhD en Computación Ubicua',
      leadInstitution: 'Laboratorio de Sistemas Distribuidos',
      category: 'ia-ambiental',
      categoryLabel: 'IA y Ambiente',
      summary: 'Red mallada de 45 nodos de medición de partículas PM2.5 y PM10 instalados en techos de escuelas públicas con panel solar autónomo.',
      impactDescription: 'Ha generado más de 2 millones de lecturas horarias accesibles mediante API abierta para investigaciones de salud pública y epidemiología.',
      technologies: ['ESP32', 'Python', 'Grafana', 'TensorFlow Lite'],
      status: 'En Desarrollo Activo',
      accentColor: '#047857',
      avatarInitials: 'EV',
    },
    {
      id: 'proy-stem-bot',
      title: 'Robot Modular de Exploración STEM (AyniBot)',
      leadMentor: 'Prof. David Okonjo',
      leadDegree: 'Magíster en Robótica y Mecatrónica',
      leadInstitution: 'Makerspace Universitario Central',
      category: 'robotica-educativa',
      categoryLabel: 'Robótica Abierta',
      summary: 'Chasis impreso en 3D con filamento reciclado de botellas PET, equipado con sensores ultrasónicos y control Bluetooth desde celular.',
      impactDescription: 'Utilizado en 16 talleres de colegios públicos formando a más de 450 niños en pensamiento computacional y lógica matemática.',
      technologies: ['Arduino', 'FreeCAD', 'Scratch 3.0', 'Impresión 3D'],
      status: 'Fase de Campo',
      accentColor: '#0369a1',
      avatarInitials: 'DO',
    },
    {
      id: 'proy-edu-cloud',
      title: 'Plataforma Universitaria de Aulas Soberanas (LibreClass)',
      leadMentor: 'Dr. Rodrigo Mendoza',
      leadDegree: 'Doctor en Ciencias de la Información',
      leadInstitution: 'Departamento de Arquitectura de Software',
      category: 'software-libre',
      categoryLabel: 'Software Libre',
      summary: 'Entorno de aprendizaje virtual hiper-liviano que consume 70% menos ancho de banda, permitiendo conexión estable con redes móviles 3G.',
      impactDescription: 'Implementado como piloto en tres facultades con un ahorro presupuestario superior a $45,000 anuales en licencias privativas.',
      technologies: ['React', 'TypeScript', 'WebSockets', 'PostgreSQL'],
      status: 'Convocatoria Abierta',
      accentColor: '#4338ca',
      avatarInitials: 'RM',
    },
    {
      id: 'proy-bio-map',
      title: 'Atlas Participativo de Biodiversidad y Microplásticos',
      leadMentor: 'Dra. Sofía Álvarez',
      leadDegree: 'PhD en Biología y Bioinformática',
      leadInstitution: 'Instituto de Ciencias Ambientales',
      category: 'ciencia-ciudadana',
      categoryLabel: 'Ciencia Ciudadana',
      summary: 'Herramienta web PWA accesible para el registro geolocalizado de muestras de agua fluvial y clasificación microscópica comunitaria.',
      impactDescription: 'Facilitó la identificación temprana de contaminantes en dos cuencas fluviales clave, dando origen a dos ordenanzas municipales de protección.',
      technologies: ['PWA', 'OpenStreetMap', 'Python Bio', 'Web Workers'],
      status: 'En Desarrollo Activo',
      accentColor: '#0f766e',
      avatarInitials: 'SA',
    },
    {
      id: 'proy-vision-flora',
      title: 'Clasificador Neuronal de Patologías en Cultivos Familiares',
      leadMentor: 'Prof. Marcus Chen',
      leadDegree: 'Especialista en Inteligencia Artificial',
      leadInstitution: 'Centro de Visión Artificial',
      category: 'ia-ambiental',
      categoryLabel: 'IA y Ambiente',
      summary: 'Modelo convolucional comprimido que detecta 18 tipos de plagas en hojas de cultivos agrícolas directamente desde la cámara del teléfono móvil offline.',
      impactDescription: 'Asiste a pequeños agricultores cooperativos en la reducción del 40% del uso de pesticidas químicos nocivos.',
      technologies: ['MobileNetV3', 'ONNX Runtime', 'React Native'],
      status: 'Convocatoria Abierta',
      accentColor: '#15803d',
      avatarInitials: 'MC',
    },
    {
      id: 'proy-braille-code',
      title: 'Lector Háptico de Código y Gráficos Táctiles',
      leadMentor: 'Dra. Clara Benítez',
      leadDegree: 'Doctora en Accesibilidad y Tecnologías Asistivas',
      leadInstitution: 'Laboratorio de Inclusión Tecnológica',
      category: 'robotica-educativa',
      categoryLabel: 'Robótica Abierta',
      summary: 'Dispositivo electromecánico regenerable con matriz de puntos para que estudiantes con discapacidad visual lean diagramas lógicos y código fuente.',
      impactDescription: 'Validado con 28 estudiantes universitarios con ceguera total, aumentando su autonomía en cursos de programación y matemáticas.',
      technologies: ['Actuadores solenoides', 'C++', 'ESP-IDF', 'Corte Láser'],
      status: 'Fase de Campo',
      accentColor: '#1d4ed8',
      avatarInitials: 'CB',
    },
  ];

  // ========================================================================
  // 1. BARRA SUPERIOR DE RÚBRICA Y CONSIGNAS ACADÉMICAS
  // ========================================================================
  const rubricToggleBtn = document.getElementById('rubric-toggle-btn');
  const rubricPanel = document.getElementById('rubric-panel');

  if (rubricToggleBtn && rubricPanel) {
    rubricToggleBtn.addEventListener('click', () => {
      const isExpanded = rubricToggleBtn.getAttribute('aria-expanded') === 'true';
      rubricToggleBtn.setAttribute('aria-expanded', String(!isExpanded));
      rubricPanel.classList.toggle('is-open', !isExpanded);
      const textSpan = rubricToggleBtn.querySelector('.rubric-toggle-text');
      if (textSpan) {
        textSpan.textContent = !isExpanded ? 'Ocultar Rúbrica' : 'Ver Rúbrica y Criterios';
      }
    });
  }

  // ========================================================================
  // 2. MENÚ MÓVIL ADAPTABLE Y ACCESIBLE (HAMBURGUESA)
  // ========================================================================
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');

  const closeMobileMenu = () => {
    if (menuToggleBtn && mobileNavDrawer) {
      menuToggleBtn.setAttribute('aria-expanded', 'false');
      mobileNavDrawer.classList.remove('is-open');
    }
  };

  if (menuToggleBtn && mobileNavDrawer) {
    menuToggleBtn.addEventListener('click', () => {
      const isExpanded = menuToggleBtn.getAttribute('aria-expanded') === 'true';
      menuToggleBtn.setAttribute('aria-expanded', String(!isExpanded));
      mobileNavDrawer.classList.toggle('is-open', !isExpanded);
    });

    // Cerrar al hacer clic en un enlace de navegación
    const mobileLinks = mobileNavDrawer.querySelectorAll('a');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Cerrar al presionar la tecla Escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNavDrawer.classList.contains('is-open')) {
        closeMobileMenu();
        menuToggleBtn.focus();
      }
    });

    // Cerrar al redimensionar a pantalla de escritorio (>= 768px)
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && mobileNavDrawer.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });
  }

  // ========================================================================
  // 3. DESPLAZAMIENTO SUAVE Y ENFOQUE INMEDIATO AL FORMULARIO (BOTONES CTA)
  // ========================================================================
  const ctaApplyBtns = document.querySelectorAll('.js-scroll-to-apply');
  ctaApplyBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileMenu();
      const targetElement = document.getElementById('postulacion');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        const firstInput = document.getElementById('campo-nombre-aspirante');
        if (firstInput) {
          setTimeout(() => {
            firstInput.focus();
          }, 450);
        }
      }
    });
  });

  // ========================================================================
  // 4. FILTRADO DINÁMICO EN TIEMPO REAL Y BÚSQUEDA DE PROYECTOS
  // ========================================================================
  const searchInput = document.getElementById('search-proyectos');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectsGrid = document.getElementById('projects-grid');
  const emptyState = document.getElementById('empty-state');
  const filterCounter = document.getElementById('filter-counter');
  const emptySearchQueryText = document.getElementById('empty-search-query');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');

  let currentCategory = 'all';
  let currentSearchQuery = '';

  const renderProjects = () => {
    if (!projectsGrid) return;

    const query = currentSearchQuery.trim().toLowerCase();
    const filtered = PROJECTS_DATA.filter((proj) => {
      const matchCategory = currentCategory === 'all' || proj.category === currentCategory;
      const matchQuery =
        !query ||
        proj.title.toLowerCase().includes(query) ||
        proj.leadMentor.toLowerCase().includes(query) ||
        proj.summary.toLowerCase().includes(query) ||
        proj.technologies.some((t) => t.toLowerCase().includes(query));
      return matchCategory && matchQuery;
    });

    // Actualizar contador accesible aria-live
    if (filterCounter) {
      filterCounter.innerHTML = `Mostrando <strong>${filtered.length}</strong> de ${PROJECTS_DATA.length} proyectos`;
    }

    // Gestionar visualización de proyectos o estado vacío
    if (filtered.length === 0) {
      projectsGrid.style.display = 'none';
      if (emptyState) {
        emptyState.style.display = 'block';
        if (emptySearchQueryText) {
          emptySearchQueryText.textContent = currentSearchQuery ? `«${currentSearchQuery}»` : 'la selección actual';
        }
      }
      return;
    }

    projectsGrid.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';

    projectsGrid.innerHTML = filtered
      .map(
        (proj) => `
        <article class="project-card" data-project-id="${proj.id}">
          <div>
            <div class="project-card__header">
              <div class="project-avatar" style="background-color: ${proj.accentColor};" aria-hidden="true">
                ${proj.avatarInitials}
              </div>
              <div style="min-width: 0; flex: 1;">
                <div class="project-card__cat">${proj.categoryLabel}</div>
                <h3 class="project-card__title">${proj.title}</h3>
              </div>
            </div>

            <p class="project-card__mentor">
              <strong>${proj.leadMentor}</strong> · ${proj.leadInstitution}
            </p>

            <p class="project-card__summary">
              ${proj.summary}
            </p>

            <div class="project-card__techs">
              <div class="project-card__tech-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                <span>Stack Tecnológico:</span>
              </div>
              <div class="tech-chips">
                ${proj.technologies
                  .map((t) => `<span class="tech-chip">${t}</span>`)
                  .join('')}
              </div>
            </div>
          </div>

          <div class="project-card__action">
            <button
              type="button"
              class="btn btn-secondary btn-full js-open-project"
              data-id="${proj.id}"
              aria-haspopup="dialog"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              <span>Ver ficha técnica y metodología</span>
            </button>
          </div>
        </article>
      `
      )
      .join('');

    // Asignar listeners a los botones recién renderizados
    attachProjectModalListeners();
  };

  // Eventos de categorías
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');
      currentCategory = btn.getAttribute('data-category') || 'all';
      renderProjects();
    });
  });

  // Eventos del buscador
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.classList.toggle('is-active', currentSearchQuery.length > 0);
      }
      renderProjects();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      currentSearchQuery = '';
      searchClearBtn.classList.remove('is-active');
      renderProjects();
    });
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      if (searchClearBtn) searchClearBtn.classList.remove('is-active');
      currentCategory = 'all';
      filterBtns.forEach((b) => {
        const isAll = b.getAttribute('data-category') === 'all';
        b.classList.toggle('is-active', isAll);
        b.setAttribute('aria-pressed', String(isAll));
      });
      renderProjects();
    });
  }

  // ========================================================================
  // 5. MODAL ACCESIBLE DE PROYECTO (FICHA TÉCNICA)
  // ========================================================================
  const projectModalBackdrop = document.getElementById('project-modal-backdrop');
  const projectModalCloseBtn = document.getElementById('project-modal-close-btn');
  const projectModalDismissBtn = document.getElementById('project-modal-dismiss-btn');
  let lastActiveTrigger = null;

  const openProjectModal = (projectId, triggerBtn) => {
    const project = PROJECTS_DATA.find((p) => p.id === projectId);
    if (!project || !projectModalBackdrop) return;

    lastActiveTrigger = triggerBtn;

    // Rellenar contenido dinámico
    const avatar = document.getElementById('modal-project-avatar');
    if (avatar) {
      avatar.textContent = project.avatarInitials;
      avatar.style.backgroundColor = project.accentColor;
    }
    const title = document.getElementById('modal-project-title');
    if (title) title.textContent = project.title;

    const subtitle = document.getElementById('modal-project-subtitle');
    if (subtitle) subtitle.textContent = `${project.categoryLabel} · ${project.status}`;

    const mentor = document.getElementById('modal-project-mentor');
    if (mentor) {
      mentor.innerHTML = `<strong>Mentor Líder:</strong> ${project.leadMentor} (${project.leadDegree})<div style="color: var(--color-text-light); margin-top: 0.25rem;">${project.leadInstitution}</div>`;
    }

    const summary = document.getElementById('modal-project-summary');
    if (summary) summary.textContent = project.summary;

    const impact = document.getElementById('modal-project-impact');
    if (impact) impact.textContent = project.impactDescription;

    const techs = document.getElementById('modal-project-techs');
    if (techs) {
      techs.innerHTML = project.technologies
        .map((t) => `<span class="tech-chip" style="font-size: 0.75rem; padding: 0.25rem 0.625rem;">${t}</span>`)
        .join('');
    }

    // Mostrar modal y atrapar foco
    projectModalBackdrop.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      projectModalCloseBtn?.focus();
    }, 50);
  };

  const closeProjectModal = () => {
    if (!projectModalBackdrop) return;
    projectModalBackdrop.classList.remove('is-visible');
    document.body.style.overflow = '';
    if (lastActiveTrigger) {
      lastActiveTrigger.focus();
    }
  };

  const attachProjectModalListeners = () => {
    const openBtns = document.querySelectorAll('.js-open-project');
    openBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const projectId = btn.getAttribute('data-id');
        openProjectModal(projectId, e.currentTarget);
      });
    });
  };

  if (projectModalCloseBtn) projectModalCloseBtn.addEventListener('click', closeProjectModal);
  if (projectModalDismissBtn) projectModalDismissBtn.addEventListener('click', closeProjectModal);

  if (projectModalBackdrop) {
    projectModalBackdrop.addEventListener('click', (e) => {
      if (e.target === projectModalBackdrop) {
        closeProjectModal();
      }
    });
  }

  // Tecla Escape para modales
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModalBackdrop && projectModalBackdrop.classList.contains('is-visible')) {
        closeProjectModal();
      }
      const confirmModal = document.getElementById('confirm-modal-backdrop');
      if (confirmModal && confirmModal.classList.contains('is-visible')) {
        closeConfirmModal();
      }
    }
  });

  // Render inicial de proyectos
  renderProjects();

  // ========================================================================
  // 6. PESTAÑAS DE CRONOGRAMA ACCESIBLES (ROLE="TABLIST")
  // ========================================================================
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('[role="tabpanel"]');

  const switchTab = (targetPhase) => {
    tabBtns.forEach((btn) => {
      const isSelected = btn.getAttribute('data-phase') === String(targetPhase);
      btn.setAttribute('aria-selected', String(isSelected));
      btn.classList.toggle('is-active', isSelected);
      btn.tabIndex = isSelected ? 0 : -1;
    });

    tabPanels.forEach((panel) => {
      const isMatch = panel.getAttribute('id') === `panel-fase-${targetPhase}`;
      panel.style.display = isMatch ? 'grid' : 'none';
    });
  };

  tabBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const phase = btn.getAttribute('data-phase');
      switchTab(phase);
    });

    // Navegación con flechas del teclado
    btn.addEventListener('keydown', (e) => {
      let nextIndex = null;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextIndex = (index + 1) % tabBtns.length;
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        nextIndex = (index - 1 + tabBtns.length) % tabBtns.length;
      }

      if (nextIndex !== null) {
        tabBtns[nextIndex].focus();
        const phase = tabBtns[nextIndex].getAttribute('data-phase');
        switchTab(phase);
      }
    });
  });

  // ========================================================================
  // 7. FORMULARIO DE POSTULACIÓN CON VALIDACIÓN ACCESIBLE
  // ========================================================================
  const applicationForm = document.getElementById('postulacion-form');
  const errorSummary = document.getElementById('form-error-summary');
  const errorSummaryList = document.getElementById('error-summary-list');
  const resetFormBtn = document.getElementById('reset-form-btn');
  const submitBtn = document.getElementById('submit-form-btn');

  // Modal de confirmación
  const confirmModalBackdrop = document.getElementById('confirm-modal-backdrop');
  const confirmModalCloseBtn = document.getElementById('confirm-modal-close-btn');
  const confirmFolioSpan = document.getElementById('confirm-folio');
  const confirmNameSpan = document.getElementById('confirm-name');
  const confirmEmailSpan = document.getElementById('confirm-email');
  const confirmFacultySpan = document.getElementById('confirm-faculty');
  const confirmHoursSpan = document.getElementById('confirm-hours');
  const downloadReceiptBtn = document.getElementById('download-receipt-btn');

  const validateField = (input) => {
    const name = input.name;
    const value = input.value ? input.value.trim() : '';
    let errorMessage = '';

    if (name === 'fullName') {
      if (!value || value.length < 3) {
        errorMessage = 'Ingrese su nombre y apellidos completos (mínimo 3 caracteres).';
      }
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value || !emailRegex.test(value)) {
        errorMessage = 'Ingrese una dirección de correo válida (ej: aspirante@universidad.edu).';
      }
    } else if (name === 'facultyOrSchool') {
      if (!value || value.length < 3) {
        errorMessage = 'Indique su facultad, carrera o programa académico de procedencia.';
      }
    } else if (name === 'motivation') {
      if (!value || value.length < 15) {
        errorMessage = 'Comparta una breve motivación o interés investigativo (mínimo 15 caracteres).';
      }
    } else if (name === 'acceptCommitment') {
      if (!input.checked) {
        errorMessage = 'Debe aceptar el compromiso de honestidad científica y trabajo en equipo.';
      }
    }

    const errorContainer = document.getElementById(`error-${name}`);
    if (errorContainer) {
      if (errorMessage) {
        errorContainer.textContent = errorMessage;
        errorContainer.classList.add('is-visible');
        input.classList.add('is-invalid');
        input.setAttribute('aria-invalid', 'true');
      } else {
        errorContainer.textContent = '';
        errorContainer.classList.remove('is-visible');
        input.classList.remove('is-invalid');
        input.removeAttribute('aria-invalid');
      }
    }

    return errorMessage;
  };

  // Validación en vivo al perder foco o cambiar
  if (applicationForm) {
    const inputsToValidate = applicationForm.querySelectorAll('input[required], textarea[required]');
    inputsToValidate.forEach((input) => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid')) {
          validateField(input);
        }
      });
    });

    // Control de selección de tarjetas de radio (horas semanales)
    const radioInputs = applicationForm.querySelectorAll('input[name="weeklyHours"]');
    radioInputs.forEach((radio) => {
      radio.addEventListener('change', () => {
        document.querySelectorAll('.radio-card').forEach((card) => {
          card.classList.remove('is-checked');
        });
        const parentCard = radio.closest('.radio-card');
        if (parentCard) parentCard.classList.add('is-checked');
      });
    });

    // Envío del formulario
    applicationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const errors = [];
      inputsToValidate.forEach((input) => {
        const error = validateField(input);
        if (error) {
          errors.push(error);
        }
      });

      // Si hay errores, mostrar resumen accesible con role="alert" y enfocarlo
      if (errors.length > 0) {
        if (errorSummary && errorSummaryList) {
          errorSummaryList.innerHTML = errors.map((err) => `<li>${err}</li>`).join('');
          errorSummary.classList.add('is-visible');
          errorSummary.focus();
        }
        return;
      }

      // Si pasa la validación:
      if (errorSummary) errorSummary.classList.remove('is-visible');

      // Deshabilitar botón durante procesamiento
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Procesando postulación...</span>';
      }

      setTimeout(() => {
        // Generar folio único institucional
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const folio = `UPSWEB-2026-${randomNum}`;

        const formData = new FormData(applicationForm);
        const fullName = formData.get('fullName') || '';
        const email = formData.get('email') || '';
        const faculty = formData.get('facultyOrSchool') || '';
        const weeklyHours = formData.get('weeklyHours') || '4-8';

        // Llenar modal de confirmación
        if (confirmFolioSpan) confirmFolioSpan.textContent = folio;
        if (confirmNameSpan) confirmNameSpan.textContent = fullName;
        if (confirmEmailSpan) confirmEmailSpan.textContent = email;
        if (confirmFacultySpan) confirmFacultySpan.textContent = faculty;
        if (confirmHoursSpan) confirmHoursSpan.textContent = `${weeklyHours} horas/semana`;

        // Guardar datos en el botón de descarga
        if (downloadReceiptBtn) {
          downloadReceiptBtn.onclick = () => {
            const receiptText = `=====================================================
INICIATIVA ACADÉMICA UPS WEB - CONSTANCIA DE POSTULACIÓN
Convocatoria 2026 · Semillero de Innovación y Tecnología
=====================================================

Folio Oficial: ${folio}
Fecha de Emisión: ${new Date().toLocaleDateString('es-ES')} - ${new Date().toLocaleTimeString('es-ES')}
Aspirante: ${fullName}
Correo: ${email}
Facultad/Carrera: ${faculty}
Dedicación Semanal: ${weeklyHours} horas

ESTADO: REGISTRADO CON ÉXITO
Conserve este folio para su entrevista en el Laboratorio Central Lab-3.
=====================================================`;
            const blob = new Blob([receiptText], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Comprobante-Postulacion-${folio}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          };
        }

        // Mostrar modal de confirmación accesible
        if (confirmModalBackdrop) {
          confirmModalBackdrop.classList.add('is-visible');
          document.body.style.overflow = 'hidden';
          setTimeout(() => {
            confirmModalCloseBtn?.focus();
          }, 50);
        }

        // Reset del botón
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            <span>Enviar Postulación</span>
          `;
        }
      }, 500);
    });
  }

  const closeConfirmModal = () => {
    if (!confirmModalBackdrop) return;
    confirmModalBackdrop.classList.remove('is-visible');
    document.body.style.overflow = '';
    // Limpiar formulario tras confirmación exitosa
    if (applicationForm) {
      applicationForm.reset();
      document.querySelectorAll('.radio-card').forEach((card, idx) => {
        card.classList.toggle('is-checked', idx === 0);
      });
    }
  };

  if (confirmModalCloseBtn) {
    confirmModalCloseBtn.addEventListener('click', closeConfirmModal);
  }

  if (confirmModalBackdrop) {
    confirmModalBackdrop.addEventListener('click', (e) => {
      if (e.target === confirmModalBackdrop) {
        closeConfirmModal();
      }
    });
  }

  if (resetFormBtn) {
    resetFormBtn.addEventListener('click', () => {
      if (applicationForm) applicationForm.reset();
      document.querySelectorAll('.is-invalid').forEach((el) => el.classList.remove('is-invalid'));
      document.querySelectorAll('.form-error-msg').forEach((el) => el.classList.remove('is-visible'));
      if (errorSummary) errorSummary.classList.remove('is-visible');
      document.querySelectorAll('.radio-card').forEach((card, idx) => {
        card.classList.toggle('is-checked', idx === 0);
      });
    });
  }

  // ========================================================================
  // 8. ACORDEÓN ACCESIBLE DE PREGUNTAS FRECUENTES (FAQ)
  // ========================================================================
  const faqButtons = document.querySelectorAll('.faq-button');
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const targetPanelId = btn.getAttribute('aria-controls');
      const targetPanel = document.getElementById(targetPanelId);

      if (targetPanel) {
        btn.setAttribute('aria-expanded', String(!isExpanded));
        targetPanel.classList.toggle('is-open', !isExpanded);
      }
    });
  });

});
