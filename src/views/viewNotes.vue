<template>
    <div class="notes">
        
     <AddEditNote>
      <template #button>
    
    <button class="button is-link " @click="addNotes" :disabled="!newNotes">Submit</button>
  
  
      </template>
     </AddEditNote>

<!-- <div class="field">
  <label class="label" >Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea" v-model="newNotes"></textarea>
  </div>
</div>





<div class="field is-grouped is-grouped-right">
  <div class="control">
    <button class="button is-link " @click="addNotes" :disabled="!newNotes">Submit</button>
  </div>
  
</div> -->
<Note v-for="note in storeNotes.notes"
 :key="id"
  :note="note"
 />


    </div>
</template>

<script setup>
//imports
import { ref } from 'vue';
//import { ef } from 'vue';
import Note from '@/components/Notes/Note.vue'
import {useStoreNotes} from '@/stores/storeeNotes'
import AddEditNote from '@/components/Notes/addEditNote.vue'
const storeNotes=useStoreNotes();
//notes
const newNotes=ref(' ')

const addNotes=()=>{
    storeNotes.addNotes(newNotes.value)

   newNotes.value='';
}
// const deleteNote=deleteId=>{
//    // console.log('note deleted',deleteId);
//    notes.value=notes.value.filter(note=>{
//     return note.id!=deleteId
//    })
// }
</script>