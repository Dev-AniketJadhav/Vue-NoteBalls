import viewNotes from '@/views/viewNotes.vue'
import viewStats from '@/views/viewStats.vue'
import viewEdit from '@/views/viewEditNotes.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes=[
  {
    path:'/',
    name:'notes',
    component:  viewNotes
},
{
  path:'/editNote/:id',
  name:'edit-notes',
  component:  viewEdit
  },
{
path:'/stats',
name:'stats',
component:  viewStats
},

]
const router=createRouter(
  {
      history:createWebHashHistory(),
      routes:routes
  }
)

export default router
