<template>
  <q-page padding>
    <div class="row items-start text-center alinhar"
      style="margin-bottom: 10px"
    >
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">SALDO ESTE MÊS</div>
          </q-card-section>
        </q-card>
      </div>
    <div class="row" style="justify-content: center">
      <AppList :list="list" ></AppList>
    </div>
    <app-fab></app-fab>
  </q-page>
</template>

<script>
import AppFab from '../components/fab';
import AppList from '../components/list';

export default {
  name: 'Home',
  components: { AppFab, AppList },
  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    };
  },
  computed: {
    list() {
      return this.$store.getters.movimentacoes;
    },
  },
  mounted() {
    console.log(this.list);
    const body = {
      email: 'hugo.bandeira@hotmail.com',
      password: '123456',
    };
    this.$store.dispatch('login', body);
  },

};
</script>

<style lang="stylus" scoped>
  .my-card
    width 100%
    justify-content center
    padding 10px;
  .alinhar {
    justify-content center
  }
</style>
