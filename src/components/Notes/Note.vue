<template
>

<div class="mb-4" >


<div class="card">

<div class="card-content">
<div class="content">
{{ note.content }}
</div>
<div class="has-text-right has-text-grey-light mt-2">
    <small >{{ charLenght }} char</small>

</div>

</div>
<footer class="card-footer">

<RouterLink class="card-footer-item" :to="`/editNote/${note.id}`">Edit</RouterLink>
<a @click.prevent="storeNotes.deleteNotes(note.id)" href="#" class="card-footer-item">Delete</a>
</footer>
</div>


</div>
</template>

<script setup>
//import
import { computed } from 'vue';
import {useStoreNotes} from '@/stores/storeeNotes'
const storeNotes=useStoreNotes();
const props=defineProps({
    note:{
        type:Object,
        required:true
    }
})

const charLenght=computed(()=>{
    return props.note.content.length
});

//emits
//const emit=defineEmits(['deleteClicked'])

// const handleDeleteClicked=()=>{
//     //console.log('deleted ');
//     emit('deleteClicked',props.note.id)
// }
</script>