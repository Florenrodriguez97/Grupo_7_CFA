const qs = (e) => document.querySelector(e)
window.addEventListener('load', () => {
    console.log('Javascript está vinculado correctamente');
    
    let photoProduct = document.getElementById('formFile')
    let nameProduct = document.getElementById('nombre');
    let detailProduct = document.getElementById('detalle');
    let priceProduct = document.getElementById('precio');
    let offerProduct = document.getElementById('oferta');
    let categoryProduct = document.getElementById('categoria');
    let formulario = document.getElementById('formulario')

    let regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
    let regExdetailProduct = /^([a-zA-Z\sñáéíóúü\d]).{1,200}$/;
    

    photoProduct.addEventListener('change', (e) => {
        switch (true) {
            case !regExExt.exec(photoProduct.value):
            errorphotoProduct.innerHTML = "Solo imágenes con extensión jpg, jpeg, png, gif, webp"
            photoProduct.classList.add('is-invalid')
            vistaPrevia.src = ""
            break;
        case photoProduct.files[0].size > oneMB * 2:
            errorphotoProduct.innerHTML = "El archivo debe pesar menos de 2Mb"
            photoProduct.classList.add('is-invalid')
            vistaPrevia.src = ""
            break
        case !photoProduct.value:
            errorphotoProduct.innerHTML = "Actualice la imagen";
            photoProduct.classList.add('is-invalid');
            break;
        default:
            photoProduct.classList.remove('is-invalid');
            photoProduct.classList.add('is-valid');
            errorphotoProduct.innerHTML = "";
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0])
            reader.onload = () => {
                vistaPrevia.src = reader.result
            }
            break;
        }
    })
    nameProduct.addEventListener('blur', () => {
        switch (true) {
            case !nameProduct.value:
                errornameProduct.innerHTML = "El campo nombre es obligatorio";
                nameProduct.classList.add('is-invalid');
                break;
            default:
                errornameProduct.innerHTML = "";
                nameProduct.classList.remove('is-invalid');
                nameProduct.classList.add('is-valid');
                break;
        }
       
    })
    detailProduct.addEventListener('blur', () => {
        switch (true) {
            case !detailProduct.value:
                errordetailProduct.innerHTML = "El campo detalle es obligatorio";
                detailProduct.classList.add('is-invalid');
                break;
            case !regExdetailProduct.test(detailProduct.value):
                errordetailProduct.innerHTML = "Mínimo 2 y máximo de 200 caracteres"
                detailProduct.classList.add('is-invalid');
                break
            default:
                errordetailProduct.innerHTML = "";
                detailProduct.classList.remove('is-invalid');
                detailProduct.classList.add('is-valid');
                break;
        }
    })
    priceProduct.addEventListener('blur', () => {
        switch (true) {
            case !priceProduct.value:
                errorpriceProduct.innerHTML = "El campo precio es obligatorio";
                priceProduct.classList.add('is-invalid');
                break;
            default:
                errorpriceProduct.innerHTML = "";
                priceProduct.classList.remove('is-invalid');
                priceProduct.classList.add('is-valid');
                break;
        }
    })

    offerProduct.addEventListener('blur', () => {
        switch (true) {
            case !offerProduct.value:
                errorofferProduct.innerHTML = "El campo oferta es obligatorio";
                offerProduct.classList.add('is-invalid');
                break;
            default:
                errorofferProduct.innerHTML = "";
                offerProduct.classList.remove('is-invalid');
                offerProduct.classList.add('is-valid');
                break;
        }
    })
    categoryProduct.addEventListener('blur', () => {
        switch (true) {
            case categoryProduct.value == "null":
                errorcategoryProduct.innerHTML = "El campo categoria es obligatorio";
                categoryProduct.classList.add('is-invalid');
                break;
            default:
                errorcategoryProduct.innerHTML = "";
                categoryProduct.classList.remove('is-invalid');
                categoryProduct.classList.add('is-valid');
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