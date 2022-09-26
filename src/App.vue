<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <br>
      <el-button type="danger">这是首页</el-button>
    </nav> -->
    <router-view/>
  </div>
</template>

<style>
  html,body{
    padding: 0;
    margin: 0;
  }
#app {
  height: 100vh;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
