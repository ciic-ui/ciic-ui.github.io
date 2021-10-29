<template>
  <header class="el-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'CiicHeader',

    componentName: 'CiicHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
