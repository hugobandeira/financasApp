<template>
    <div class="q-pa-md">
      <q-form class="q-gutter-md" @submit="submit">
        <q-input type="text" v-model="form.description" label="Descrição"></q-input>
        <q-input type="number" v-model="form.amount" label="Valor"></q-input>
        <q-input type="date" v-model="form.date" label="Data"></q-input>
        <div>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
          <q-btn label="Submit" type="submit" color="primary" style="width: 40%"></q-btn>
        </div>
      </q-form>
    </div>
</template>

<script>
import moment from 'moment';
import { uid } from 'quasar';

export default {
  name: 'form',
  data() {
    return {
      form: {
        description: '',
        amount: '',
        date: moment().format('YYYY-MM-DD'),
      },
    };
  },
  mounted() {
  },
  methods: {
    submit() {
      const cloned = JSON.parse(JSON.stringify(this.form));
      cloned.id = uid();
      this.$store.dispatch('movimentacoes', cloned)
        .then(() => {
          this.$router.push({
            path: '/',
          });
        })
        .catch((error) => {
          alert(`error${error}`);
        });
    },
    reset() {
      this.form.amount = '';
      this.form.date = '';
      this.form.description = '';
      this.$refs.description.focus();
    },
  },
};
</script>

<style scoped>
</style>
