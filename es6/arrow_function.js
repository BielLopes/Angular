var dobroDoValor = function(numero){
    return numero*2
}

console.log(dobroDoValor(2))


//Em uma declaração de função tipo Arrow pode-se omitir o parametro function
var dobroDoValor = (numero) =>{
    return numero*2
}

console.log('o segundo geito resulta em   :   '+dobroDoValor(2))


//Caso só tenha uma variavel na declaração da função omite-se também os parenteses
var dobroDoValor = numero =>{
    return numero*2
}

console.log('O terceiro geito resulta em   :   '+dobroDoValor(2))

//obs: Para muitos parametros ou para nenhum parametro se faz necessario os parenteses


//Quando o corpo da função for apenas o return pode ser mais simplificado ainda
var dobroDoValor = numero => numero*2

console.log('O quarto geito resulta em   :   '+dobroDoValor(2))