var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translator");
var outputDiv = document.querySelector("#output");
var btnClear=document.querySelector("#btn-clear")

var serverUrl = "https://api.funtranslations.com/translate/groot.json";


function getTranslationUrl(text) {
    return serverUrl +"?"+"text=" + text;
}

function errorHandler(error){
    alert("there is something wrong in server!! , try after some time. "+error)
}

btnTranslate.addEventListener("click", () => {
    var inputText = txtInput.value;
    fetch(getTranslationUrl(inputText)).then(response => response.json()).then(json => outputDiv.innerHTML = json.contents.translated).catch(errorHandler)
})

btnClear.addEventListener("click",()=>{
  location.reload();
})


