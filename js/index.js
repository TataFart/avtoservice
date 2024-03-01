const form = document.querySelector(".form");
const formFieldsets = document.querySelectorAll(".form__fieldset");
const formPrev = document.querySelector(".form__btn_prev");
const formNext = document.querySelector(".form__btn_next");
const formSubmit = document.querySelector(".form__btn_submit");

let currentStep = 0;

const updateFieldsetVisibility = () => {
   for(let i=0; i< formFieldsets.length; i++) {
        // console.log(formFieldsets[i])
        if(i === currentStep) {
            formFieldsets[i].classList.add("form__fieldset_active")
        } else {
            formFieldsets[i].classList.remove("form__fieldset_active")
        }
   }
if (currentStep === 0) {
    formPrev.style.display = "none";
    formNext.style.display = "";
    formSubmit.style.display = "none";
}else if (currentStep === formFieldsets.length -1) {
    formPrev.style.display = "";
    formNext.style.display = "none";
    formSubmit.style.display = "";
} else {
    formPrev.style.display = "";
    formNext.style.display = "";
    formSubmit.style.display = "none";
}
   
}

formNext.addEventListener("click", ()=> {
   if (currentStep < formFieldsets.length -1) {
    currentStep +=1;

    updateFieldsetVisibility();
   } 
  
})

formPrev.addEventListener("click", ()=> {
    if (currentStep > 0 ) {
     currentStep -=1;
 
     updateFieldsetVisibility();
    } }
) 

updateFieldsetVisibility();
