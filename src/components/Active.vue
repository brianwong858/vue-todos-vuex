<template lang="html">
  <div class="">
    <add-item></add-item>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Active Items</h3>
      </div>
      <div class="panel-body" v-if='activeItems'>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Item</th>
              <th>Due</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='item in activeItems'>
              <td>{{ item.task }}</td>
              <td>{{ item.due }}</td>
              <td>
                <span class="glyphicon glyphicon-check" title='Mark completed' @click='markCompleted(item)'></span>
                <span class="glyphicon glyphicon-remove" title='Remove item' @click='removeItem(item)'></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 v-else>Add some todos!</h3>
    </div>
  </div>
</template>

<script>
import AddItem from './AddItem.vue'

export default {
  components: {
    addItem: AddItem
  },
  computed: {
    activeItems() {
      let activeItems = []
      this.$store.getters.items.forEach(item => {
        if (!item.completed) activeItems.push(item)
      })
      return activeItems
    }
  }
}
</script>

<style lang="css">
.panel {
  margin-top: 4rem;
}

td {
  text-align: justify;
}
</style>
