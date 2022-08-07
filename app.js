var txtInput=document.querySelector("#txt-input");
var btnTranslate=document.querySelector("#btn-translator");
var outputDiv=document.querySelector("#output");


btnTranslate.addEventListener("click",()=>{
    outputDiv.innerText=txtInput.value;
})

