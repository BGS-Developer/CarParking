<template>
  <div id="app" class="base-theme">
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
  font-family: "Product Sans";
}

.base-theme {
  --primary: #051C3F;
  --highlight: #3879F0;
  --primary-text: #000F26;
  --sec-text: #52647E;
  --link-text: #0056F3;
  --highlight-dm: #72A2F8;
  --graphic-color: #B9C4E1;
  --alert: #FBF2F1;
  --icons-default: #8193AE;
  --icons-actions: #b5c0d0;
  --white-bg: #FFF;
  --white-text: #FFF;
  --border-color: #B5C0D0;
  --border-color-40: #E1E6EC;
  --bg-color: #F1F2F9;
  --select: #EBF2FE;
  --highlight-green: #22C18F;
  --ratings: #F6D757;
  --error: #EC424C;
}

body {
  margin: 0;
  font-size: 14px;
}

*::-webkit-scrollbar {
  width: 3px;
}

*::-webkit-scrollbar-track {
  background: #dadcea;
}

*::-webkit-scrollbar-thumb {
  background-color: #bbc0c6;
  border-radius: 20px; 
  border: 1px solid #bbc0c6;
}

#app {
  font-family: "Product Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--sec-text);
}

//Global styles
h1 {
  font-weight: 700;
  color: var(--primary-text);
  margin: 0;
  letter-spacing: 0.41px;
}

h2 {
  margin: 0;
  color: var(--primary-text);
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

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
  padding: 2px 12px;
  cursor: pointer;
  &.disabled {
    cursor: default;
  }
  .text {
    margin-top: 1px;
    font-size: 14px;
    letter-spacing: 0.02em;
  }
}

.fade-fast-enter-active, .fade-fast-leave-active {
  transition: opacity .18s;
}
.fade-fast-enter, .fade-fast-leave-to {
  opacity: 0;
}

.b-card {
  background-color: var(--white-bg);
  border-radius: 4px;
}
</style>
