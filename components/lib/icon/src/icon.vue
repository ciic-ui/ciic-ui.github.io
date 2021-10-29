<template>
  <i :class="'el-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'CiicIcon',

    props: {
      name: String
    }
  };
</script>
