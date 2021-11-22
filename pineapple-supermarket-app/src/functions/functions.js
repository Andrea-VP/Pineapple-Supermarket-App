import { postLogin } from '../service/postLogin';


// Vista log In
export function send(callback){
    //console.log('Presionando version 2')
    let email = document.querySelector("#name")
    let password = document.querySelector("#password")

    postLogin(email,password)
    .then(()=>{ 
        callback()
    })
}

//Vista AccountRegister
export function create (e){ 
    e.preventDefault()
    let input = document.querySelectorAll(".register")
    // input.forEach((i)=>{
    //     console.log(i.value)
    //     // console.log("dfgdfg", input[0].value)

    // })

   // console.log(Boolean(input[3].value))



  const data =  {
        username    : input[2].value ,
        password    : input[5].value , 
        email       : input[4].value,
        name        : input[0].value ,
        lastName    : input[2].value,
        roles       : Boolean(input[3].value) 
    }
    console.log(data)

    postLogin(data)


}

export function edit (){
    let input = document.querySelectorAll(".register")
    input.forEach((i)=>{
        console.log(i.value)
        
    })
}

export function erase (){
    let input = document.querySelectorAll(".register")
    input.forEach((i)=>{
        console.log(i.value)
    })
}

//vista ProductsViewer

export function alphSort(){
    console.log("Ordenando por nombre")
}

export function numSort(){
    console.log("Ordenando por precio")
}

export function exportXLS(){
    console.log("creando documento de excel")
}


