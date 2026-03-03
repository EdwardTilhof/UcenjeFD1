// Student data with images
const students = [
    { id: 1, name: 'Maja', image: 'img/1000012564.png' },
    { id: 2, name: 'Tomislav', image: 'img/slika_20260302173400.png' },
    { id: 3, name: '', image: 'img/slika_20260302173401.png' },
    { id: 4, name: '', image: 'img/slika_20260302173403.png' },
    { id: 5, name: '', image: 'img/slika_20260302173437.png' },
    { id: 6, name: '', image: 'img/slika_20260302173504.png' },
    { id: 7, name: '', image: 'img/slika_20260302173618.png' },
    { id: 8, name: '', image: 'img/slika_20260302173652.png' },
    { id: 9, name: '', image: 'img/slika_20260302173701.png' },
    { id: 10, name: '', image: 'img/slika_20260302174425.png' }
];



// Generate student cards
function generateStudentCards() {
    const grid = document.getElementById('studentsGrid');
    grid.innerHTML = '';

    students.forEach((student, index) => {
        const card = document.createElement('div');
        card.className = 'student-card';
        card.innerHTML = `
            <div class="student-image-wrapper" data-index="${index}">
                <img src="${student.image}" alt="Polaznik ${student.id}" class="student-image">
            </div>
            <div class="student-info">
                <input 
                    type="text" 
                    class="student-input" 
                    placeholder="Unesite ime i prezime"
                    value="${student.name}"
                    data-index="${index}"
                >
            </div>
        `;
        grid.appendChild(card);
    });

    // Add event listeners for inputs
    document.querySelectorAll('.student-input').forEach(input => {
        input.addEventListener('input', (e) => {
            const index = parseInt(e.target.dataset.index);
            students[index].name = e.target.value;
           // saveNames();
        });

        // Prevent card click when clicking on input
        input.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    // Add event listeners for image clicks
    document.querySelectorAll('.student-image-wrapper').forEach(wrapper => {
        wrapper.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.index);
            openLightbox(index);
        });
    });
}

// Lightbox functionality
let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxName = document.getElementById('lightboxName');

    lightboxImage.src = students[index].image;
    lightboxName.textContent = students[index].name || `Polaznik ${students[index].id}`;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % students.length;
    updateLightboxImage();
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + students.length) % students.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxName = document.getElementById('lightboxName');
    
    lightboxImage.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImage.src = students[currentImageIndex].image;
        lightboxName.textContent = students[currentImageIndex].name || `Polaznik ${students[currentImageIndex].id}`;
        lightboxImage.style.opacity = '1';
    }, 200);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    generateStudentCards();

    // Lightbox controls
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.getElementById('lightboxNext').addEventListener('click', showNextImage);
    document.getElementById('lightboxPrev').addEventListener('click', showPrevImage);

    // Close lightbox on background click
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox');
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        }
    });
});

// Add smooth transition for lightbox image
document.addEventListener('DOMContentLoaded', () => {
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.style.transition = 'opacity 0.3s ease';
});
