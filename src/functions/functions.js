// Vista log In
function send(){
    //console.log('Presionando version 2')
    let input = document.querySelector("#name")
    console.log(input.value)
}

//Vista AccountRegister
function create (e){ 
    e.preventDefault()
    console.log('Presionando version 2')
    let input = document.querySelectorAll(".register")
    input.forEach((i)=>{
        console.log(i.value)
    })
}

function edit (){
    //console.log('Presionando version 2')
    let input = document.querySelectorAll(".register")
    console.log(input.value)
}

function erase (){
    //console.log('Presionando version 2')
    let input = document.querySelectorAll(".register")
    console.log(input.value)
}

module.exports = {
    send,create,edit,erase
}