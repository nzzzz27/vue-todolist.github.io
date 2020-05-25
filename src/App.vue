<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* 全体 */
* {
  box-sizing: border-box;
}
ul {
  margin: 0;
  padding-left: 0;
}
li {
  list-style: none;
}
.footer {
  margin-top: 100px;
  text-align: left;
}
.footer i {
  vertical-align: bottom;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  letter-spacing: .1em;
  color: #2c3e50;
  margin-top: 60px;
}

/* レイアウト */
.l-container {
  max-width: 600px;
  margin: auto;
}

/* テキスト */
.text-left {
  text-align: left;
}

/* ボタン */
.btn {
  cursor: pointer;
  font-size: 16px;
  border: none;
  border-radius: 3px;
}
.btn.-send {
  width: 58px;
  height: 100%;
  color: white;
  font-weight: bold;
  background-color: #17a2b8;
  border-radius: 0 3px 3px 0;
}
.btn.-delete {
  color: rgba(0,0,0,.54);
}
.btn.-delete:hover {
  color: rgba(0,0,0,.36);
}
</style>
