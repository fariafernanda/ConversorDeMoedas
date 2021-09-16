
function Converter(){
    var valorElemento = parseFloat(document.getElementById("valor").value);
    
    var moeda = document.getElementById("moeda").value;

    if (moeda == "dolar") {
        var valorEmReal = valorElemento * 5.26;
    } else if (moeda == "euro") {
        valorEmReal = valorElemento * 6.19;
    } else {
        valorEmReal = valorElemento * 7.25
    }
    
   
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Valor em Reais é R$ " + valorEmReal;

    elementoValorConvertido.innerHTML = valorConvertido;
    
}

