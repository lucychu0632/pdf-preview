<template>
  <div id="app">
    <load-pdf ></load-pdf>
  </div>
</template>

<script>
import LoadPdf from './components/loadPdf'

export default {
  name: 'app',
  components: {
    LoadPdf
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
canvas {
  border: 1px dashed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>
