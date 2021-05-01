<template>
  <div>
    <h1 v-show="firstView">请输入关键字</h1>
    <h1 v-show="loading">LOADING...</h1>
    <h1 v-show="errorMsg">{{errorMsg}}</h1>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatarUrl" style='width: 100px'/>
        </a>
        <p class="card-text">{{ user.userName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import axios from "axios";
export default {
  data () {
    return {
      firstView: true,
      loading: false,
      users: [],
      errorMsg: ''
    }
  },
  mounted() {
    PubSub.subscribe('search', (msg, searchName) => {
      // 更新状态
      this.firstView = false
      this.loading = true
      this.users = []
      this.errorMsg = ''
      // 发送ajax请求
      const url = `https://api.github.com/search/users?q=${searchName}`
      axios.get(url).then(response => {
        // 更新状态
        this.loading = false
        this.users = response.data.items.map(item => ({
          url: item.html_url,
          avatarUrl: item.avatar_url,
          userName: item.login
        }))
      })
      .catch(error => {
        // 更新状态
        this.loading = false
        alert('请求失败')
      })
    })
  }
}
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>
