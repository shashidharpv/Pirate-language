var btnTranslate = document.querySelector("#btn-translate");
var btnReset = document.querySelector("#btn-reset");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("Error has occured : ", error);
  alert("A Server error has occured");
}

btnTranslate.addEventListener("click", clickHandler);
btnReset.addEventListener("click", resetItems);

 
function clickHandler() {


  var inputTxt = txtInput.value;

  fetch(getTranslationURL(inputTxt))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; 
    })
    .catch(errorHandler);
}


function resetItems(){
  
  txtInput.value = "";
  outputDiv.innerText = "";
  
}