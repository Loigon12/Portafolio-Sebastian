const form       = document.getElementById("contactForm");
    const btnText    = document.getElementById("btnText");
    const btnIcon    = document.getElementById("btnIcon");
    const submitBtn  = document.getElementById("submitBtn");
    const success    = document.getElementById("statusSuccess");
    const error      = document.getElementById("statusError");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        // Estado cargando
        submitBtn.disabled    = true;
        btnText.textContent   = "Enviando...";
        btnIcon.className     = "fa-solid fa-spinner fa-spin text-xs";

        const formData = new FormData(form);
        const data     = Object.fromEntries(formData);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                form.classList.add("hidden");
                success.classList.remove("hidden");
                success.classList.add("flex");
            } else {
                throw new Error("Error en el envío");
            }

        } catch (err) {
            error.classList.remove("hidden");
            error.classList.add("flex");
            // Restaurar botón
            submitBtn.disabled  = false;
            btnText.textContent = "Enviar Propuesta";
            btnIcon.className   = "fa-solid fa-paper-plane text-xs";
        }
    });

    function resetForm() {
        form.reset();
        form.classList.remove("hidden");
        success.classList.add("hidden");
        success.classList.remove("flex");
        error.classList.add("hidden");
        error.classList.remove("flex");
        submitBtn.disabled  = false;
        btnText.textContent = "Enviar Propuesta";
        btnIcon.className   = "fa-solid fa-paper-plane text-xs";
    }