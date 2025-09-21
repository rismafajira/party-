const weddingDate = new Date("2025-10-19T19:00:00").getTime();
const countdownFunc = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;
  if (distance < 0) {
    clearInterval(countdownFunc);
    document.querySelector(".countdown-wrapper").innerHTML = "<p>Acara telah selesai</p>";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}, 1000);

// Putar musik setelah undangan dibuka
  const bgMusic = document.getElementById("bgMusic");
  if (bgMusic) {
    bgMusic.play().catch(error => {
      console.log("Pemutar musik gagal: ", error);
    });
  }

// Menangani tombol toggle musik (🔊 / 🔇)
document.getElementById("toggleMusic").addEventListener("click", function () {
  const bgMusic = document.getElementById("bgMusic");
  const toggleBtn = document.getElementById("toggleMusic");

  if (bgMusic.paused) {
    bgMusic.play();
    toggleBtn.textContent = "🔊";
  } else {
    bgMusic.pause();
    toggleBtn.textContent = "🔇";
  }
});

//form
    const form = document.getElementById("rsvpForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("nama").value.trim();
      const status = document.getElementById("status").value;
      const pesan = document.getElementById("pesan").value.trim();

      if (nama === "") {
        alert("Nama tidak boleh kosong!");
        return;
      }

      alert(
        `Terima kasih atas konfirmasinya!\n\n` +
        `Nama: ${nama}\n` +
        `Status: ${status}\n` +
        `Pesan: ${pesan || '(Tidak ada pesan)'}`
      );

      form.reset();
    });