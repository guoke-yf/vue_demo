<template>
  <div>
    <div v-if="!repoUrl">loading...</div>
    <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      repoUrl: '',
      repoName: ''
    }
  },
  mounted() {
    const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
    axios.get(url).then(
      response => {
        const result = response.data
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      }
    ).catch(error => {
      alert('请求失败')
      console.log('请求失败')
    })
  }
}
</script>

<style>

</style>
