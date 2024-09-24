import { defineStore } from "pinia";

export const useMessageStore = defineStore('message',{
    state: ()=>{
        return{
            message: null
        }
    },
    actions:{
        
    }
})