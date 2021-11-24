import { createUser, signIn, editUser, deleteUser } from '../service/functions';
import { createProduct } from '../service/product';

var emailId

//#region -------------------------View AccountRegister

export function createUserFront(){ 
    let booleanValue

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

export function editUserFront(){
    let booleanValue
    
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

    editUser(data, emailId)
}

export function userValue(email,name, lastName, roles, password, username){
    emailId = email
    
    let booleanValue

    let input = document.querySelectorAll(".register")
    if(roles === true){
        booleanValue = 'SÍ'
    }
    if(roles === false){
        booleanValue = 'NO'
    }
        input[0].value =name
        input[1].value =lastName
        input[3].value = booleanValue
        input[2].value = username
        input[4].value = email
        input[5].value = password
}

export function deleteUserFront(){
    deleteUser(emailId)
}
//#endregion -------------------------FIN View AccountRegister


export function createProducts(){

    let dataValue = document.querySelectorAll(".data")
    
    // "name": "Ham and-cheese sandwich",
    // "price": "14",
    // "image": "Ham-and-cheese-sandwich.jpg",
    // "type": "burger"

    const data =  {
        name        : dataValue[0].value ,
        description : dataValue[2].value , 
        price       : dataValue[4].value , 
        image       : dataValue[5].value ,
        category    : dataValue[1].value ,
        quantity    : dataValue[3].value 
    }

    createProduct(data)
}

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





