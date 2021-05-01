<template>
  <div class="col-xs-6">
    <div class="panel">
      <div class="panel-body">
        <div msg="abc"><h2>Home</h2>
          <div>
            <ul class="nav nav-tabs">
              <li class="router-link-exact-active router-link-active">
                <router-link to="/home/news">news</router-link>
              </li>
              <li class="router-link-exact-active router-link-active">
                <router-link to="/home/message">message</router-link>
              </li>
            </ul>
            <div>
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>
