<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addItem="addItem"/>
      <List :comments="comments" :deleteComment="deleteComment"/>

    </div>
  </div>
</template>

<script>
import Add from "./components/Add";
import List from "./components/List";
export default {
  data () {
    return {
      comments: [
        {
          name: 'Cat',
          content: 'Vue 还不错'
        },
        {
          name: 'Bob',
          content: 'Vue 还行'
        },
        {
          name: 'Kin',
          content: 'Vue 挺好的'
        },
      ]
    }
  },
  components: {
    Add,
    List
  },
  methods: {
    // 添加评论
    addItem (comment) {
      this.comments.unshift(comment)
    },
    // 删除评论
    deleteComment (index) {
      this.comments.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
