<template>
  <div>
    <p>{{this.$route.params.id}}</p>
    <ul>
      <li>{{ messageDetail.id }}</li>
      <li>{{ messageDetail.title }}</li>
      <li>{{ messageDetail.content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messageDetail: {}
    }
  },
  mounted() {
    setTimeout(() => {
      const allMessageDetail = [
        {
          id: 1,
          title: 'message001',
          content: 'message001 content001'
        },{
          id: 2,
          title: 'message002',
          content: 'message002 content002'
        },{
          id: 3,
          title: 'message003',
          content: 'message003 content003'
        },{
          id: 4,
          title: 'message004',
          content: 'message004 content004'
        },
      ]
      this.allMessageDetail = allMessageDetail
      const id = this.$route.params.id*1
      this.messageDetail = allMessageDetail.find(detail => detail.id === id)
    }, 1000)
  },
  watch: {
    $route: function (value){
      const id = value.params.id*1
      this.messageDetail = this.allMessageDetail.find(detail => detail.id === id)
    }
  }
}
</script>

<style>

</style>
