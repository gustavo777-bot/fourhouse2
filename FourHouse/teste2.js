const projectsData = [
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
    }
];

let currentIndex = 0;
const totalProjects = projectsData.length;

// DOM Elements
const carouselTrack = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentProjectSpan = document.getElementById('currentProject');
const totalProjectsSpan = document.getElementById('totalProjects');

// Initialize carousel
function initializeCarousel() {
    // Create slides
    projectsData.forEach((project) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;
        img.loading = 'lazy';
        
        slide.appendChild(img);
        carouselTrack.appendChild(slide);
    });

    updateCarousel();
    totalProjectsSpan.textContent = totalProjects;
}

// Update carousel position and controls
function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    currentProjectSpan.textContent = currentIndex + 1;
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalProjects - 1;
}

// Navigation functions
function goToPrev() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

function goToNext() {
    if (currentIndex < totalProjects - 1) {
        currentIndex++;
        updateCarousel();
    }
}

// Event listeners
prevBtn.addEventListener('click', goToPrev);
nextBtn.addEventListener('click', goToNext);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goToPrev();
    if (e.key === 'ArrowRight') goToNext();
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCarousel();
    
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});