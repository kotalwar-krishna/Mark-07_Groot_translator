var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#textarea-input')
var outputDiv = document.querySelector("#output")


var serverUrl = "https://api.funtranslations.com/translate/groot.json"

// function getTranslationUrl(text){
//     return serverUrl + "?" + "text=" + text
// }

let getTranslationUrl = text => serverUrl + '?' + text;


// function errorHandler(){
//     console.log("error occoured",error)
//     alert("something wrong with server")
// }

let errorHandler = () =>{console.log("error occured", error);
alert("something wrong with server");}


function clickEventHandler(){

    var inputText = txtInput.value;
    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {var translatedText = json.contents.translated
    outputDiv.innerText = translatedText })
    .catch(errorHandler)

}

btnTranslate.addEventListener("click", clickEventHandler)

