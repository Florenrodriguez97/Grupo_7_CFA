const qs = (e) => document.querySelector(e)

window.addEventListener('load', () => {
    console.log('Javascript está vinculado correctamente');

    let formulario = qs('#form');

    console.log(formulario)

    let inputFoto_x = formulario;
    let inputEmail = formulario;
    let inputPassword = formulario;
    let inputPassword2 = formulario;
    let inputName = formulario;
    let inputLast_name = formulario;

    (inputFoto_x.value) ? inputFoto_x.value = "" : null
    let regExLetras = /^[a-zA-Z\sñáéíóúü]*$/
    let regExEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]:+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/
    let regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;


        inputFoto_x.addEventListener('blur', function () {
            switch (true) {
                case !inputFoto_x.value:
                    errorFoto_x.innerHTML = "Este campo es obligatorio"
                    inputFoto_x.classList.add('is-invalid')
                    break
                default:
                    inputFoto_x.classList.remove('is-invalid');
                    inputFoto_x.classList.add('is-valid');
                    errorFoto_x.innerHTML = "";
            }
        })
        inputFoto_x.addEventListener('change', (e) => {
            switch (true) {
                case !regExExt.exec(inputFoto_x.value):
                    errorFoto_x.innerHTML = "Solo imágenes con extensión jpg, jpeg, png, gif, webp"
                    inputFoto_x.classList.add('is-invalid')
                    vistaPrevia.src = ""
                    break;
                case inputFoto_x.files[0].size > oneMB * 2:
                    errorFoto_x.innerHTML = "El archivo debe pesar menos de 2Mb"
                    inputFoto_x.classList.add('is-invalid')
                    vistaPrevia.src = ""
                    break
                default:
                    inputFoto_x.classList.remove('is-invalid');
                    inputFoto_x.classList.add('is-valid');
                    errorFoto_x.innerHTML = "";
                    let reader = new FileReader();
                    reader.readAsDataURL(e.target.files[0])
                    reader.onload = () => {
                        vistaPrevia.src = reader.result
                    }
                    break;
            }
        })

    inputEmail.addEventListener('blur', () => {
        switch (true) {
            case !inputEmail.value:
                errorEmail.innerHTML = "El campo email es obligatorio";
                inputEmail.classList.add('is-invalid');
                break;
                case !regExEmail.test(inputEmail.value):
                    errorEmail.innerHTML = ""
                    inputEmail.classList.add('is-invalid');
                    break
            default:
                errorEmail.innerHTML = "";
                inputEmail.classList.remove('is-invalid');
                inputEmail.classList.add('is-valid');
                break;
        }

    })

    inputPassword.addEventListener('blur', () => {
        switch (true) {
            case !inputPassword.value:
                errorPassword.innerHTML = "El campo contraseña es obligatorio";
                inputPassword.classList.add('is-invalid');
                break;
                case !regExPass.test(inputPassword.value):
                    errorPassword.innerHTML = "La contraseña debe tener entre 6 y 12 caracteres"
                    inputPassword.classList.add('is-invalid');
                    break
            default:
                errorPassword.innerHTML = "";
                inputPassword.classList.remove('is-invalid');
                inputPassword.classList.add('is-valid');
                break;
        }

    })
    inputPassword2.addEventListener('blur', () => {
        switch (true) {
            case !inputPassword2.value:
                errorPassword2.innerHTML = "El campo contraseña es obligatorio";
                inputPassword2.classList.add('is-invalid');
                break;
                case !regExPass.test(inputPassword2.value):
                    errorPassword2.innerHTML = "La contraseña debe tener entre 6 y 12 caracteres"
                    inputPassword2.classList.add('is-invalid');
                    break
            default:
                errorPassword2.innerHTML = "Las contraseñas no coinciden";
                inputPassword2.classList.remove('is-invalid');
                inputPassword2.classList.add('is-valid');
                break;
        }

    })
    

    inputName.addEventListener('blur', () => {
        switch (true) {
            case !inputName.value:
                errorName.innerHTML = "El campo nombre es obligatorio";
                inputName.classList.add('is-invalid');
                break;
                case !regExLetras.test(inputName.value):
                    errorname.innerHTML = "Solo letras"
                    inputName.classList.add('is-invalid');
                    break
            default:
                errorName.innerHTML = "";
                inputName.classList.remove('is-invalid');
                inputName.classList.add('is-valid');
                break;
        }

    })
    inputLast_name.addEventListener('blur', () => {
        switch (true) {
            case !inputLast_name.value:
                errorLast_name.innerHTML = "El campo apellido es obligatorio";
                inputLast_name.classList.add('is-invalid');
                break;
                case !regExLetras.test(inputLast_name.value):
                    errorLast_name.innerHTML = "Solo letras"
                    inputLast_name.classList.add('is-invalid');
                    break
            default:
                errorLast_name.innerHTML = "";
                inputLast_name.classList.remove('is-invalid');
                inputLast_name.classList.add('is-valid');
                break;
        }

    })

    

})