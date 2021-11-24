// Vista log In
function send(){
    //console.log('Presionando version 2')
    let input = document.querySelector("#name")
    console.log(input.value)
}

//Vista AccountRegister
function create (e){ 
    e.preventDefault()
    let input = document.querySelectorAll(".register")
    input.forEach((i)=>{
        console.log(i.value)
    })
}

function edit (){
    let input = document.querySelectorAll(".register")
    input.forEach((i)=>{
        console.log(i.value)
    })
}

function erase (){
    let input = document.querySelectorAll(".register")
    input.forEach((i)=>{
        console.log(i.value)
    })
}

//vista ProductsViewer

function alphSort(){
    console.log("Ordenando por nombre")
}

function numSort(){
    console.log("Ordenando por precio")
}

function exportXLS(){
    console.log("creando documento de excel")
}

//ModalAdd
function prueba(){
    console.log("Se ha añadido el producto")
}

module.exports = {
    send,create,edit,erase,alphSort, numSort, exportXLS, prueba,
}