import { ref } from "vue";

export class NoteService{
    #notes;
    #URL = 'http://localhost/notepad_backend/'
    constructor(){
        this.#notes = ref([])
    }
    //getter and setter
    getNotes(){
        return this.#notes
    }
    //metodo para solicitar las notas a la api remota
    //args: void
    //return: notes->json
    async loadNotes(){
        let response = await fetch(this.#URL, {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({method:'getNotes'})
        })
        if(response.ok){
            let data = await response.json()
            this.#notes.value = data 
        }
        else{
            throw new Error()
        }
    }
    //metodo para solicitar una nota pasado su id
    //args: id->string
    //return: note->json
    async getNoteById(id){
        let response = await fetch(this.#URL, {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                method:'getNoteById',
                id:id
            })
        })
        if(response.ok){
            let data = await response.json()
            return data
        }
        else{
            throw new Error()
        }
    }
    //metodo para guardar una nueva nota en la base de datos
    //args: title->string text->string
    //return: boolean
    async createNote(title, text){
        let response = await fetch(this.#URL, {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                method:'createNote',
                title:title,
                text:text
            })
        })
        if(response.ok){
            let data = await response.json()
            data.error?data = false : data = true
            return data
        }
        else{
            throw new Error()
        }
    }
    //metodo para actualizar una nota
    //args: id->string title->string text->string
    //return: boolean
    async updateNote(id, title, text){
        let response = await fetch(this.#URL, {
            method:'POST',
            headers:{'Content-Type':'application/josn'},
            body:JSON.stringify({
                method:'updateNote',
                id:id,
                title:title,
                text:text
            })
        })
        if(response.ok){
            let data = await response.json()
            data.error? data = false : data = true
            return data
        }
        else{
            throw new Error()
        }
    }
    //metodo para borrar una nota
    //args: id->string
    //return: boolean
    async deleteNote(id){
        let response = await fetch(this.#URL, {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                method:'deleteNote',
                id:id
            })
        })
        if(response.ok){
            let data = await response.json()
            data.error? data = false : data = true
            return data
        }
        else{
            throw new Error()
        }
    }
}