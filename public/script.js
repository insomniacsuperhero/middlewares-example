let inpCode = document.getElementById('inpCode');
let btnEncode = document.getElementById('btnEncode');
let code = document.getElementById('code');
btnEncode.onclick = ()=>{
    let data = inpCode.value
    
    code.value = btoa(data)
}/*
btnEncrypt.onclick = ()=>{
    swapcase = function swapcase(str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }
    code.value = swapcase(code.value);
}*/