<template>
  <div id="app">
    <nav>
      <router-link to="/">
        在线检测
      </router-link> |
      <router-link to="/chart">
        生产统计
      </router-link>|
      <router-link to="/about">
        诊断分析
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
