function Converter(){
    var inputNumBin = document.getElementById("numBin").value;
    var inputNumDec = document.getElementById("numDec").value;
    
    if(inputNumBin != ""){
        let ListaCadaDigitBin = inputNumBin.toString().split('')

        for(let Indice = 0; Indice < ListaCadaDigitBin.length; Indice++){
            if(ListaCadaDigitBin[Indice] !== "0" && ListaCadaDigitBin[Indice] !== "1"){
                return alert("Digite um número binário.")
            }
        }
        
        inputNumBin = parseInt(inputNumBin, 2); 

        inputNumDec = inputNumBin.toString(10);

        document.getElementById("numDec").value = inputNumDec;
        document.getElementById("numBin").value = null;
    } else if(inputNumDec != ""){
        inputNumDec = parseInt(inputNumDec);

        inputNumBin = inputNumDec.toString(2);

        document.getElementById("numDec").value = null;
        document.getElementById("numBin").value = inputNumBin;
    } else {
        return alert("Por favor, digite um número.");
    }
}


function LimparEspaco(){
    document.getElementById("numBin").value = null;
    document.getElementById("numDec").value = null;
}
