<template>
  <div style="width: 100%">
    <q-list bordered separator v-if="list.length > 0">
      <q-item v-for="item in list" clickable v-ripple v-bind:key="item.id">
        <q-checkbox value="" :name="item.id" />
        <q-item-section>
          <q-item-label>{{ item.date }}</q-item-label>
          <q-item-label>{{ item.description }}</q-item-label>
        </q-item-section>
        <a href="" @click.prevent="remove(item)">
          remover
        </a>
      </q-item>
    </q-list>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
          <span class="q-ml-sm">You are currently not connected to any network.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    list: Array,
  },
  data() {
    return {
      confirm: false,
    };
  },
  mounted() {
    console.log(this.list.length);
  },
  methods: {
    remove(movimentacao) {
      this.confirm = true;
      this.$store.commit('remove_movimentacoes', movimentacao);
    },
  },
};
</script>

<style scoped>

</style>
