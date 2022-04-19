<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Product Sans';
  src: url("./assets/fonts/ProductSansRegular.ttf");
  font-weight: normal;
}
@font-face {
  font-family: 'Product Sans';
  src: url("./assets/fonts/ProductSansBold.ttf");
  font-weight: bold;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}

*::-webkit-scrollbar {
  width: 3px;
}

*::-webkit-scrollbar-track {
  background: #051C3F;
}

*::-webkit-scrollbar-thumb {
  background-color: #4981e9;
  border-radius: 20px; 
  border: 1px solid #4981e9;
}

#app {
  font-family: "Product Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

//Global styles
.cursor-pointer {
  cursor: pointer;
}
.fill-current {
  fill: currentColor;
}
.stroke-current {
  stroke: currentColor;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 32px;
  min-width: 70px;
  width: 100%;
  outline: none;
  cursor: pointer;
  &.disabled {
    cursor: default;
  }
}

.fade-fast-enter-active, .fade-fast-leave-active {
  transition: opacity .18s;
}
.fade-fast-enter, .fade-fast-leave-to {
  opacity: 0;
}
</style>
