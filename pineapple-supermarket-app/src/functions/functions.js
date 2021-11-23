import { createUser, signIn, editUser } from '../service/functions';

// Vista log In
export function send(decode,callback){
    let email = document.querySelector("#name")
    let password = document.querySelector("#password")

    const data =  {
        email       : email.value ,
        password    : password.value , 
    }

    signIn(data).then((res)=>{ 

        localStorage.setItem('token', res.data.token)
        localStorage.setItem('key', email.value)

        const decoded = decode(res.data.token);

        callback(decoded.roles.admin)
    })
}

//Vista AccountRegister
export function create (e){ 

    let booleanValue
    
    e.preventDefault()
    let input = document.querySelectorAll(".register")

    if(input[3].value === "SÍ"){
        booleanValue = true
    }
    if(input[3].value === "NO"){
        booleanValue = false
    }

    const data =  {
        username    : input[2].value ,
        password    : input[5].value , 
        email       : input[4].value,
        name        : input[0].value ,
        lastName    : input[1].value,
        roles       : {admin : booleanValue}
    }

    createUser(data)
}

export async function edit(props){
    let booleanValue
    
    // e.preventDefault()
    let input = document.querySelectorAll(".register")

    if(input[3].value === "SÍ"){
        booleanValue = true
    }
    if(input[3].value === "NO"){
        booleanValue = false
    }

    const data =  {
        username    : input[2].value ,
        password    : input[5].value , 
        email       : input[4].value,
        name        : input[0].value ,
        lastName    : input[1].value,
        roles       : {admin : booleanValue}
    }

    let id = input[4].value

    // editUser(data, id)


    await editUser(data, id)
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


