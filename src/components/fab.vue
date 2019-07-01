<template>
  <q-page-sticky
    position="bottom-right"
    :offset="[18, 18]"
    color="primary">
    <q-btn
      class="color-fab"
      fab icon="add"
      color="primary"
      @click.prevent="redirect"
    ></q-btn>
  </q-page-sticky>
</template>

<script>
export default {
  name: 'fab',
  methods: {
    redirect() {
      this.$router.push({ path: '/cadastrar' });
    },
  },
};
</script>

<style scoped>
  .color-fab{
    color: #2855ff;
  }
</style>
