//Funcao maiusculo
var btn1 = document.getElementById("1")
btn1.addEventListener("click", ()=>{
    var texto = document.getElementById("objeto_texto").value
    document.getElementById("objeto_texto").value = texto.toUpperCase();
})

//Funcao mainusculo
var btn2 = document.getElementById("2")
btn2.addEventListener("click", ()=>{
    var texto = document.getElementById("objeto_texto").value
    document.getElementById("objeto_texto").value = texto.toLowerCase();
})

//Funcao alternado 1
var btn3 = document.getElementById("3")
btn3.addEventListener("click", ()=>{
    var texto = document.getElementById("objeto_texto").value
    var saida = texto.split("")
    saida[0] = saida[0].toUpperCase()
    
    
    for (let i = 1; i < texto.length; i++) {
        if (i%2 != 0) {
            saida[i] = saida[i].toLowerCase()
        }
        else{
            saida[i] = saida[i].toUpperCase()
            
        }
        
    }
    var saida = saida.join("")
    document.getElementById("objeto_texto").value = saida
    
})

//Funcao alternado 2
var btn4 = document.getElementById("4")
btn4.addEventListener("click", ()=>{
    var texto = document.getElementById("objeto_texto").value
    var saida = texto.split("")
    saida[0] = saida[0].toLowerCase()
    
    
    for (let i = 1; i < texto.length; i++) {
        if (i%2 != 0) {
            
            saida[i] = saida[i].toUpperCase()
        }
        else{
            saida[i] = saida[i].toLowerCase()
            
        }
        
    }
    var saida = saida.join("")
    document.getElementById("objeto_texto").value = saida
})

//Capitalizado
var btn5 = document.getElementById("5")
btn5.addEventListener("click", ()=>{
    var texto = document.getElementById("objeto_texto")
    texto.classList.toggle("capitalizar")
})

//Primeira letra
var btn6 = document.getElementById("6")
btn6.addEventListener("click", ()=>{
    var texto = document.getElementById("objeto_texto").value
    var saida = texto.split("")
    saida[0] = saida[0].toUpperCase()
    for (let i = 1; i < texto.length; i++) {
        saida[i] = saida[i].toLowerCase()
        
    }
    var saida = saida.join("")
    document.getElementById("objeto_texto").value = saida
})

//aplicar negrito
var btn7 = document.getElementById("7")
btn7.addEventListener("click", ()=>{
    var texto = document.getElementById("objeto_texto")
    texto.classList.toggle("negrito")
})


//aplicar italico
var btn8 = document.getElementById("8")
btn8.addEventListener("click", ()=>{
    var texto = document.getElementById("objeto_texto")
    texto.classList.toggle("italico")
})
var controle8 = 8




//aplicar sublinhado
var btn10 = document.getElementById("10")
btn10.addEventListener("click", ()=>{
    var texto = document.getElementById("objeto_texto")
    texto.classList.toggle("sublinhado")
})

//aplicar risco
var btn11 = document.getElementById("11")
btn11.addEventListener("click", ()=>{
    var texto = document.getElementById("objeto_texto")
    texto.classList.toggle("risco")
})


//void
var btn9 = document.getElementById("16")
btn9.addEventListener("click", ()=>{alert("fon")})




