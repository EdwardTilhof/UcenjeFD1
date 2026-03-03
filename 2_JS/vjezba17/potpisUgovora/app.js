const canvas = document.getElementById('signature-pad');
const ctx = canvas.getContext('2d');
const printBtn = document.getElementById('print-btn');
const clearBtn = document.getElementById('clear-btn');
const saveBtn = document.getElementById('save-btn');
const statusText = document.getElementById('status');
const dateSpan = document.getElementById('current-date');
const signatureHistory = document.getElementById('signature-history');

// Postavi današnji datum
dateSpan.textContent = new Date().toLocaleDateString('hr-HR');

let isDrawing = false;
let signatures = JSON.parse(localStorage.getItem('signatures')) || [];

// Funkcije za crtanje
function startDrawing(e) {
    isDrawing = true;
    draw(e);
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
    checkSignatureCoverage(); // Provjeri popunjenost nakon svakog poteza
}

function draw(e) {
    if (!isDrawing) return;

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#5c00d5';

    // Pozicioniranje ovisno o mišu ili dodiru
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.moveTo(x, y);
}

// Algoritam za provjeru 2% popunjenosti
function checkSignatureCoverage() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let nonBlankPixels = 0;

    // Prolazimo kroz pixele (svaki pixel ima 4 vrijednosti: R, G, B, A)
    // Gledamo Alpha kanal (indeks + 3)
    for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i + 3] > 0) {
            nonBlankPixels++;
        }
    }

    const totalPixels = canvas.width * canvas.height;
    const percentage = (nonBlankPixels / totalPixels) * 100;

    statusText.textContent = `Potpisano: ${percentage.toFixed(1)}%`;

    // Ako je potpisano više od 2%, prikaži gumbe
    if (percentage >= 2) {
        saveBtn.style.display = 'inline-block';
        printBtn.style.display = 'inline-block';
        statusText.style.color = '#27ae60';
    } else {
        saveBtn.style.display = 'none';
        printBtn.style.display = 'none';
        statusText.style.color = '#7f8c8d';
    }
}

// Funkcija za prikaz povijesti potpisa
function displaySignatures() {
    if (signatures.length === 0) {
        signatureHistory.innerHTML = '<p class="empty-message">Nema spremljenih potpisa</p>';
        return;
    }

    signatureHistory.innerHTML = '';
    signatures.forEach((sig, index) => {
        const item = document.createElement('div');
        item.className = 'signature-item';
        item.innerHTML = `
            <img src="${sig.image}" alt="Potpis ${index + 1}">
            <p class="date">${sig.date}</p>
            <button class="delete-btn" onclick="deleteSignature(${index})">Obriši</button>
        `;
        signatureHistory.appendChild(item);
    });
}

// Funkcija za spremanje potpisa
function saveSignature() {
    const signatureImage = canvas.toDataURL('image/png');
    const currentDate = new Date().toLocaleString('hr-HR');
    
    signatures.unshift({
        image: signatureImage,
        date: currentDate
    });
    
    localStorage.setItem('signatures', JSON.stringify(signatures));
    displaySignatures();
    
    // Očisti canvas nakon spremanja
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    checkSignatureCoverage();
    
    alert('Potpis uspješno spremljen!');
}

// Funkcija za brisanje potpisa
function deleteSignature(index) {
    if (confirm('Jeste li sigurni da želite obrisati ovaj potpis?')) {
        signatures.splice(index, 1);
        localStorage.setItem('signatures', JSON.stringify(signatures));
        displaySignatures();
    }
}

// Event listeneri
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
window.addEventListener('mouseup', stopDrawing);

// Podrška za mobitele (Touch)
canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startDrawing(e); });
canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e); });
canvas.addEventListener('touchend', stopDrawing);

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    checkSignatureCoverage();
});

saveBtn.addEventListener('click', saveSignature);

printBtn.addEventListener('click', () => {
    window.print();
});

// Inicijalizacija - prikaži spremljene potpise pri učitavanju stranice
displaySignatures();
