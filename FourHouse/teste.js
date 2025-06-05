
// Dados dos 69 projetos
const projectsData = [
    // Projetos reais
    {
        id: 1,
        title: "Cozinha Moderna",
        image: "img.jpeg"
    },
    {
        id: 2,
        title: "Sala de Estar",
        image: "img2.jpeg"
    },
    {
        id: 3,
        title: "Home Office",
        image: "img3.jpeg"
    },
    {  
         id: 4,
        title: "Home Office",
        image: "img6.jpeg"
    },
    {  
         id: 5,
        title: "Home Office",
        image: "img7.jpeg"
    },
    {  
         id: 6,
        title: "Home Office",
        image: "img8.jpeg"
    },
    {  
         id: 7,
        title: "Home Office",
        image: "img9.jpeg"
    },
    {  
         id: 8,
        title: "Home Office",
        image: "img10.jpeg"
    },
    {  
         id: 9,
        title: "Home Office",
        image: "img11.jpeg"
    },
    {  
         id: 10,
        title: "Home Office",
        image: "img12.jpeg"
    },
    {  
         id: 11,
        title: "Home Office",
        image: "img13.jpeg"
    },
    {  
         id: 12,
        title: "Home Office",
        image: "img14.jpeg"
    },
    {  
         id: 13,
        title: "Home Office",
        image: "img15.jpeg"
    },
    {  
         id: 14,
        title: "Home Office",
        image: "img16.jpeg"
    },
    {  
         id: 15,
        title: "Home Office",
        image: "img17.jpeg"
    },
    {  
         id: 16,
        title: "Home Office",
        image: "img18.jpeg"
    },
    {  
         id: 17,
        title: "Home Office",
        image: "img19.jpeg"
    },
    {  
         id: 18,
        title: "Home Office",
        image: "img20.jpeg"
    },
    {  
         id: 19,
        title: "Home Office",
        image: "img21.jpeg"
    },
    {  
         id: 20,
        title: "Home Office",
        image: "img22.jpeg"
    },
    {  
         id: 21,
        title: "Home Office",
        image: "img23.jpeg"
    },
    {  
         id: 22,
        title: "Home Office",
        image: "img24.jpeg"
    },
    
];

for (let i = 4; i <= 69; i++) {
    projectsData.push({
        id: i,
        title: `Projeto ${i}`,
        image: `https://picsum.photos/600/400?random=${i}`
    });
}


let currentIndex = 0;
const totalProjects = projectsData.length;


const projectsGrid = document.getElementById('projectsGrid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentProjectSpan = document.getElementById('currentProject');
const totalProjectsSpan = document.getElementById('totalProjects');


function createProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <div class="watermark">FOUR HOUSE</div>
                </div>
            </div>
        </div>
    `;
}

// Função para renderizar APENAS o projeto atual (uma imagem por vez)
function renderCurrentProject() {
    const currentProject = projectsData[currentIndex];
    
    // Limpar completamente o grid
    projectsGrid.innerHTML = '';
    
    // Criar e adicionar APENAS o projeto atual
    projectsGrid.innerHTML = createProjectCard(currentProject);
    
    // Atualizar contador
    currentProjectSpan.textContent = currentIndex + 1;
    totalProjectsSpan.textContent = totalProjects;
    
    // Atualizar estado dos botões
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalProjects - 1;
}

// Função para ir para projeto anterior
function goToPreviousProject() {
    if (currentIndex > 0) {
        currentIndex--;
        renderCurrentProject();
    }
}

// Função para ir para próximo projeto
function goToNextProject() {
    if (currentIndex < totalProjects - 1) {
        currentIndex++;
        renderCurrentProject();
    }
}

// Event listeners para os botões
prevBtn.addEventListener('click', goToPreviousProject);
nextBtn.addEventListener('click', goToNextProject);

// Event listeners para navegação com hover (mouse sobre os botões)
prevBtn.addEventListener('mouseenter', function() {
    if (!this.disabled) {
        this.style.transform = 'scale(1.15)';
    }
});

prevBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

nextBtn.addEventListener('mouseenter', function() {
    if (!this.disabled) {
        this.style.transform = 'scale(1.15)';
    }
});

nextBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// Navegação com teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        goToPreviousProject();
    } else if (e.key === 'ArrowRight') {
        goToNextProject();
    }
});

// Função para inicializar a aplicação
function init() {
    renderCurrentProject();
    
    // Adicionar smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Auto-navegação opcional (descomente para ativar)
/*
setInterval(() => {
    if (currentIndex < totalProjects - 1) {
        goToNextProject();
    } else {
        currentIndex = 0;
        renderCurrentProject();
    }
}, 3000); // Troca a cada 3 segundos
*/

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);

// Função para otimizar carregamento de imagens
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Ativar lazy loading após renderização
setTimeout(lazyLoadImages, 100);