// Fungsi untuk mengubah warna latar belakang halaman
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Fungsi untuk mengubah warna elemen teks ketika di-hover
function changeTextColorOnHover(element, color) {
    element.style.color = color;
}

// Fungsi untuk mengembalikan warna teks asli ketika hover dihilangkan
function resetTextColor(element, originalColor) {
    element.style.color = originalColor;
}

// Event listener untuk tombol atau bagian tertentu
document.addEventListener('DOMContentLoaded', function() {
    // Mengganti warna latar belakang pada klik tombol
    const themeButton = document.getElementById('themeButton');
    themeButton.addEventListener('click', function() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        if (isDarkMode) {
            themeButton.textContent = "Switch to Light Mode";
            changeBackgroundColor('#1a1a1a'); // Warna mode gelap
        } else {
            themeButton.textContent = "Switch to Dark Mode";
            changeBackgroundColor('#F0F8FF'); // Warna latar belakang asli
        }
    });

    // Ubah warna judul ketika di-hover
    const headerText = document.querySelector('.header-text h1');
    headerText.addEventListener('mouseover', function() {
        changeTextColorOnHover(headerText, '#4682B4'); // Warna biru saat di-hover
    });
    headerText.addEventListener('mouseout', function() {
        resetTextColor(headerText, '#333'); // Kembali ke warna asli
    });
});

// Fungsi untuk menampilkan pesan perkenalan secara bertahap
function displayIntro() {
    const introText = [
        "Halo, Nama saya John Doe.", 
        "Saya seorang pengembang web yang antusias.", 
        "Selamat datang di halaman pribadi saya!"
    ];
    const introElement = document.getElementById('introText');
    let index = 0;
    introElement.textContent = ""; // Kosongkan elemen intro

    // Fungsi untuk menampilkan satu kalimat pada satu waktu
    function showNextSentence() {
        if (index < introText.length) {
            introElement.textContent += introText[index] + " "; // Tambahkan kalimat baru
            index++;
            setTimeout(showNextSentence, 2000); // Tampilkan kalimat berikutnya setelah 2 detik
        }
    }
    showNextSentence(); // Memulai penampilan kalimat
}

// Event listener ketika tombol di-klik untuk memulai intro
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startIntro');
    startButton.addEventListener('click', function() {
        displayIntro();
        startButton.style.display = 'none'; // Sembunyikan tombol setelah diklik
    });
});

// Fungsi untuk mengganti warna teks ketika di-hover
document.addEventListener('DOMContentLoaded', function() {
    const headerText = document.querySelector('.header-text h1');
    
    headerText.addEventListener('mouseover', function() {
        headerText.style.color = '#4682B4'; // Ganti warna menjadi biru saat di-hover
    });

    headerText.addEventListener('mouseout', function() {
        headerText.style.color = '#333'; // Kembali ke warna asli
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', function () {
            button.style.transform = 'scale(1)';
        });
    });
});