<template>
  <div class="q-pa-md-12">
    <div class="q-gutter-y-md-12">
      <q-tabs
        v-model="tab"
        class="bg-purple text-white shadow-1"
      >
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      tab: 'mails',
    };
  },
};
</script>

<style scoped>

</style>
