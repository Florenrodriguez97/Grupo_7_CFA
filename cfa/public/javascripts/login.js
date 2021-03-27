window.addEventListener('load', () => {
    console.log('Javascript está vinculado correctamente');

    let Email = document.getElementById("Email");
    let Password = document.getElementById("Password");

    let regExEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]:+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

    Email.addEventListener('blur', () => {
        switch (true) {
            case !Email.value:
                errorEmail.innerHTML = "El campo email es obligatorio";
                Email.classList.add('is-invalid');
                break;
                case !regExEmail.test(Email.value):
                    errorEmail.innerHTML = ""
                    Email.classList.add('is-invalid');
                    break
            default:
                errorEmail.innerHTML = "";
                Email.classList.remove('is-invalid');
                Email.classList.add('is-valid');
                break;
        }

    })
    Password.addEventListener('blur', () => {
        switch (true) {
            case !Password.value:
                errorPassword.innerHTML = "El campo contraseña es obligatorio";
                Password.classList.add('is-invalid');
                break;
            default:
                errorPassword.innerHTML = "";
                Password.classList.remove('is-invalid');
                Password.classList.add('is-valid');
                break;
        }

    })
})
