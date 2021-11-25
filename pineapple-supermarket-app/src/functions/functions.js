import { createUser, signIn, editUser, deleteUser } from '../service/functions';
import { createProduct, deleteProduct, editProduct } from '../service/product';

var emailId
export var dataProduct

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
        input[0].value = name
        input[1].value = lastName
        input[3].value = booleanValue
        input[2].value = username
        input[4].value = email
        input[5].value = password
}

export function deleteUserFront(){
    deleteUser(emailId)
}
//#endregion -------------------------FIN View AccountRegister

//#region -------------------------View ProductsA

export function createProducts(){

    let dataValue = document.querySelectorAll(".data")

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

export function productValue(id,name, category, price,quantity, description,image){

    dataProduct = {
        id,
        name,
        category,
        description,
        quantity,
        price,
        image
    }

    //return dataProduct
}

export function deleteProductFront(id){
    deleteProduct(id)
    window.location.reload()
}

export function editProductFront(id){
    
    let input = document.querySelectorAll(".productEdit")

    const dataProduct =  {
        name        : input[0].value,
        category    : input[1].value,
        description : input[2].value,
        quantity    : input[3].value,
        price       : input[4].value,
        image       : input[5].value
    }

    editProduct(dataProduct, id)

    window.location.reload()
}

//#endregion ----------------------FIN View ProductsA


//vista ProductsViewer

export function alphSort(){

    const productNameArray = document.querySelector("#productNameArray")
    console.log(productNameArray.textContent)

    // productNameArray.sort()

}

export function numSort(){
    console.log("Ordenando por precio")
}

export function exportXLS(){
    console.log("creando documento de excel")
}




// Vista log In
export function send(decode,callback){
    let email = document.querySelector("#name")
    let password = document.querySelector("#password")

    // const data =  {
    //     email       : email.value ,
    //     password    : password.value , 
    // }

    signIn(email.value,password.value).then((res)=>{ 

        localStorage.setItem('token', res.data.token)
        localStorage.setItem('key', email.value)

        const decoded = decode(res.data.token);

        callback(decoded.roles.admin)
    })
}



