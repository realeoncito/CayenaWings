document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contactForm");

    if (!form) {
        console.error("Formulario no encontrado. Verifica la clase del formulario y la ruta del archivo JavaScript.");
        return;
    }

    const telefonoInput = document.querySelector('input[name="telefono"]');
    if (telefonoInput) {
        telefonoInput.addEventListener("input", function () {
            // Permitir solo dígitos y limitar a 8 caracteres
            this.value = this.value.replace(/\D/g, '').slice(0, 8);
        });
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita el envío del formulario para validación

        const inputs = form.querySelectorAll("input, textarea");
        let hasError = false;

        clearErrors();

        inputs.forEach((input) => {
            const errorDiv = document.getElementById(`error${capitalize(input.name)}`);

            if (input.name === "telefono") {
                if (!validarTelefono(input.value)) {
                    errorDiv.textContent = "Número de teléfono inválido";
                    const maxLength = 8;
                    hasError = true;
                }
            } else if (input.value.trim() === "") {
                errorDiv.textContent = ` ${getLabelFor(input)} está vacío.`;
                hasError = true;
            }
        });

        if (!hasError) {
            console.log("Formulario enviado!");
            form.reset(); // Limpiar el formulario después del envío
        }
    });

    function clearErrors() {
        const errorDivs = form.querySelectorAll(".error");
        errorDivs.forEach(div => div.textContent = "");
    }

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    function getLabelFor(input) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        return label ? label.textContent.replace(/:$/, '') : input.name;
    }

    function validarTelefono(telefono) {
        const regex = /^[9238]\d{7}$/;
        return regex.test(telefono);
    }

    function validarCorreo(correo) {
        const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regexCorreo.test(correo);
    }
});




