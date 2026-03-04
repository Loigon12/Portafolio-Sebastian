function openModal(src) {
  const modal = document.getElementById("certModal");
  const img = document.getElementById("modalImg");
  img.src = src;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("certModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");

function openModal(imgSrc) {
  modalImg.src = imgSrc;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Evita scroll de fondo
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
  modalImg.src = "";
}

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  // Pequeño retardo intencional para que la transición no sea brusca
  setTimeout(() => {
    loader.style.opacity = "0";

    // Eliminamos el elemento del DOM después de la transición
    setTimeout(() => {
      loader.style.display = "none";
      // Permitimos el scroll una vez cargado
      document.body.style.overflow = "auto";
    }, 1000);
  }, 1500);
});

// Bloquear scroll mientras carga
document.body.style.overflow = "hidden";

// Animación simple de scroll suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Efecto reveal al hacer scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;
    if (top >= offset) {
      sec.classList.add("opacity-100");
      sec.classList.remove("opacity-0");
    }
  });
});

function toggleWaChat() {
  const chatWindow = document.getElementById("wa-chat-window");
  const isVisible = chatWindow.style.display === "flex";

  chatWindow.style.display = isVisible ? "none" : "flex";

  // Actualizar la hora al abrir
  if (!isVisible) {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    document.getElementById("current-time").innerText = `${hours}:${minutes}`;
  }
}
