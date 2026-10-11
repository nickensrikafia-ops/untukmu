
const messages = [
    "Untuk seseorang yang punya tempat tersendiri dalam cerita kecilku... 💙",

    "Aku nggak tahu bagaimana harimu berjalan, tapi semoga hari ini ada hal kecil yang membuatmu tersenyum.",

    "Kadang ada orang yang kehadirannya sederhana, tapi entah kenapa bisa membuat hari terasa berbeda.",

    "Aku cuma berharap kamu selalu dikelilingi hal-hal baik, orang-orang tulus, dan alasan untuk bahagia.",

    "Terima kasih sudah menjadi dirimu sendiri. Jangan lupa, kamu juga pantas mendapatkan hal-hal baik. 🤍",

    "Semoga kehadiran ku bukan secerca debu dalam hari-hari muu yaaa",

    "Mungkin cuma pesan sederhana, tapi aku harap kamu tahu bahwa aku telah meluangkan waktu untuk membuat ini khusus untukmu. 💌"
];

let index = 0;

const message = document.getElementById("message");
const openButton = document.getElementById("openButton");

// Fungsi untuk mengganti pesan
openButton.addEventListener("click", function () {
    index++;

    if (index >= messages.length) {
        index = 0;
    }

    message.style.opacity = 0;

    setTimeout(function () {
        message.textContent = messages[index];
        message.style.opacity = 1;
    }, 300);

    if (index === messages.length - 1) {
        openButton.textContent = "Baca lagi dari awal 💙";
    } else {
        openButton.textContent = "Pesan berikutnya ✨";
    }
});

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", async function () {
    if (music.paused) {
        try {
            await music.play();
            musicButton.textContent = "⏸ Jeda Musik 🎵";
        } catch (error) {
            console.error(error);
            alert("Musik belum bisa diputar. Coba periksa format file.");
        }
    } else {
        music.pause();
        musicButton.textContent = "▶ Putar Musik 🎵";
    }
});

