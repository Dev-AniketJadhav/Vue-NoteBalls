
import { defineStore } from 'pinia'


export const useStoreNotes = defineStore('storeNotes', {
    state: () =>{
       return{
        notes:[{
            id:'id1',
            content:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
        },
        
        {
            id:'id2',
            content:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
        },]
       }
    },
   actions:{
    addNotes(newNoteContent){
        let currentDate= new Date().getTime(),
     id=currentDate.toString()
    let note={
        id,
        content:newNoteContent
    }
    //console.log(note);
    
    this.notes.unshift(note)
    //notes.value.unshift(note)
    },
    deleteNotes(idToDelete){
        // this.notes=this.notes.filter(note=>{
        //          return note.id!==idToDelete
        //        })
        this.notes=this.notes.filter(note=>{
            return note.id!== idToDelete
        })
        console.log(idToDelete);
    }
   }
   
  })