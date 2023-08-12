<template>
    <div class="field">
  <label class="label" >Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>





<div class="field is-grouped is-grouped-right">
  <div class="control">
    <button class="button is-link " >Submit</button>
  </div>
  <slot name="button"></slot>
</div>


</template>