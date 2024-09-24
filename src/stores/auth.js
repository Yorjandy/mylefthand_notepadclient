import { defineStore } from "pinia";

const URL = "http://localhost/mylefthand/"

//funcion para realizar una peticion al servidor de autenticacion
//args: args->object<key:value>
//return: object<key:value>
const madeRequest = async (args)=>{
    let response = await fetch(URL,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(args)
    })
    if(!response.ok){
        throw new Error(response.status)
    }
    let data = await response.json()
    if(data){
        return data
    }
}

export const useAuthStore = defineStore('auth',{
    state: ()=>{
        return{
            //all pure data here
            token: null,
            message: null,
        }
    },
    actions:{
        //all methods sync and async here

        //metodo para crear una cuenta o iniciar sesion en la aplicacion
        //args: method->string email->string passsword->string
        //return: void
        async startSession( method,email, password){
            let args = {
                method: method,
                email: email,
                password: password
            }
            let data = await madeRequest(args)
            if(!data){
                throw new Error()
            }
            data.error?this.message = data.error:this.token = data.token
        },
        //metodo para cerrar sesion en la aplicacion
        //args: void
        //return: void
        async closeSession(){
            if(this.token){
                this.token = null
                this.message = 'la sesion ha sido cerrada'
            }
        },
    }
})