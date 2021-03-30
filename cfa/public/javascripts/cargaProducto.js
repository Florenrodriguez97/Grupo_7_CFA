
window.addEventListener('load', () => {
    console.log('Javascript está vinculado correctamente');
    
    let FormFile = document.getElementById('formFile')
    let Nombre = document.getElementById('nombre');
    let Detalle = document.getElementById('detalle');
    let Precio = document.getElementById('precio');
    let Oferta = document.getElementById('oferta');
    let Categoria = document.getElementById('categoria');

    let regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
    let regExDetalle = /^([a-zA-Z\sñáéíóúü\d]).{1,200}$/;
    

    FormFile.addEventListener('change', (e) => {
        switch (true) {
            case !regExExt.exec(FormFile.value):
                errorFormFile.innerHTML = "Solo imágenes con extensión jpg, jpeg, png, gif, webp"
                FormFile.classList.add('is-invalid')
                vistaPrevia.src = ""
                break;
            case FormFile.files[0].size > oneMB * 2:
                errorFormFile.innerHTML = "El archivo debe pesar menos de 2Mb"
                FormFile.classList.add('is-invalid')
                vistaPrevia.src = ""
                break
            default:
                FormFile.classList.remove('is-invalid');
                FormFile.classList.add('is-valid');
                errorFormFile.innerHTML = "";
                let reader = new FileReader();
                reader.readAsDataURL(e.target.files[0])
                reader.onload = () => {
                    vistaPrevia.src = reader.result
                }
                break;
        }
    })
    Nombre.addEventListener('blur', () => {
        switch (true) {
            case !Nombre.value:
                errorNombre.innerHTML = "El campo Nombre es obligatorio";
                Nombre.classList.add('is-invalid');
                break;
            default:
                errorNombre.innerHTML = "";
                Nombre.classList.remove('is-invalid');
                Nombre.classList.add('is-valid');
                break;
        }
    })
    Detalle.addEventListener('blur', () => {
        switch (true) {
            case !Detalle.value:
                errorDetalle.innerHTML = "El campo detalle es obligatorio";
                Detalle.classList.add('is-invalid');
                break;
            case !regExDetalle.test(Detalle.value):
                errorDetalle.innerHTML = "Mínimo 2 y máximo de 200 caracteres"
                Detalle.classList.add('is-invalid');
                break
            default:
                errorDetalle.innerHTML = "";
                Detalle.classList.remove('is-invalid');
                Detalle.classList.add('is-valid');
                break;
        }
    })
    Precio.addEventListener('blur', () => {
        switch (true) {
            case !Precio.value:
                errorPrecio.innerHTML = "El campo precio es obligatorio";
                Precio.classList.add('is-invalid');
                break;
            default:
                errorPrecio.innerHTML = "";
                Precio.classList.remove('is-invalid');
                Precio.classList.add('is-valid');
                break;
        }
    })
    Oferta.addEventListener('blur', () => {
        switch (true) {
            case !Oferta.value:
                errorOferta.innerHTML = "El campo oferta es obligatorio";
                Oferta.classList.add('is-invalid');
                break;
            default:
                errorOferta.innerHTML = "";
                Oferta.classList.remove('is-invalid');
                Oferta.classList.add('is-valid');
                break;
        }
    })
    Categoria.addEventListener('blur', () => {
        switch (true) {
            case Categoria.value == "null":
                errorCategoria.innerHTML = "El campo categoria es obligatorio";
                Categoria.classList.add('is-invalid');
                break;
            default:
                errorCategoria.innerHTML = "";
                Categoria.classList.remove('is-invalid');
                Categoria.classList.add('is-valid');
                break;
        }
    })
    formulario.addEventListener('submit',(e)=>{
        let error = false;

        e.preventDefault();

        let elementsForm = formulario.elements;

        for (let index = 0; index < elementsForm.length - 1 ; index++) {
            
            if(!elementsForm[index].value){
                elementsForm[index].classList.add('is-invalid');
                msgError.innerHTML = "Los campos señalados son obligatorios";
                error = true
            }
        }

        if(!error){
            formulario.submit()
        }

    })
})