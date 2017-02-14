<template lang="html">
  <div class="">
    <h2>There is always more to be done...</h2>
    <input id='new-task' type="text" placeholder="New task" v-model='newItem.task'>
    <input type="text" placeholder="Due date (optional)" v-model='newItem.due'>
    <input type="submit" class='btn btn-success' value="Add" @click='addItem'>
  </div>
</template>

<script>
import toastr from 'toastr'

export default {
  data () {
    return {
      newItem: {
        task: '',
        due: '',
        completed: false
      }
    }
  },
  methods: {
    addItem() {
      if (!/\S/.test(this.newItem.task)) {
        toastr.warning('No, you may not add blank items to check off your list. Sorry, Charlie.')
      } else {
        this.$emit('addItem', this.newItem)
        this.newItem.task = ''
        this.newItem.due = ''
      }
    }
  }
}
</script>

<style lang="css">
  #new-task {
    width: 50rem;
  }
</style>
