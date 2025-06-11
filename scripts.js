// Theme Toggle
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Search Gallery
function searchGallery() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const items = document.querySelectorAll('.gallery-item');

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? 'block' : 'none';
  });
}

// Open Slider
function openSlider(mountain) {
  const slider = document.getElementById('sliderModal');
  const content = document.getElementById('sliderContent');
  content.innerHTML = `
    <img src="images/${mountain}/1.jpg" alt="${mountain}">
  `;
  slider.style.display = 'flex';
}

// Close Slider
function closeSlider() {
  document.getElementById('sliderModal').style.display = 'none';
}

// Simaksi Checker (Mock Data)
function cariSimaksi() {
  const input = document.getElementById('simaksiInput').value.toLowerCase();
  const result = document.getElementById('simaksiResult');
  const prices = {
    merbabu: 'Rp 20.000',
    ciremai: 'Rp 25.000',
  };

  result.textContent = prices[input] ? `Harga simaksi: ${prices[input]}` : 'Gunung tidak ditemukan.';
}

// Cuaca Checker (Mock Data)
function cekCuaca() {
  const city = document.getElementById('weatherInput').value.toLowerCase();
  const result = document.getElementById('weatherResult');
  const weatherData = {
    semarang: 'Cerah, 28°C',
    bandung: 'Berawan, 24°C',
  };

  result.textContent = weatherData[city] ? `Cuaca di ${city}: ${weatherData[city]}` : 'Kota tidak ditemukan.';
}

// Visitor Count (simulasi lokal)
let count = localStorage.getItem('visitorCount') || 0;
count++;
localStorage.setItem('visitorCount', count);
document.getElementById('visitorCount').textContent = `Jumlah pengunjung: ${count}`;
