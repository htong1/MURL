function shorten() {
  debugger;
    let url = document.getElementById("url").value;
    getLongURl(url);
}

function makeMURL(token) {
    let mURL = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + token;
    return mURL;
}

function extractToken() {
    let extractedToken = window.location.search;
    if(extractedToken[0] == "?"){
      extractedToken = extractedToken.slice(1);
    let open = remoteGlobalStorage.getItem(extractedToken);
    window.open(open, "_parent");
    }
}

function getLongURl(url){
debugger;
let result = document.getElementById("microURL")
let encodedUrl = btoa(url);
let uRl = "/tokenizer/" + encodedUrl;
fetch(uRl)
.then(response => response.json())

.then(res => {
result.innerHTML = res.value;
})
}