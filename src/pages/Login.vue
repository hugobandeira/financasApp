<template>
  <div class="q-pa-md" style="align-items: center">
    <div class="row items-start text-center alinhar"
         style="margin-bottom: 10px"
    >
      <q-card class="my-card">
        <q-card-section>
          <h1>
            hugo
          </h1>
        </q-card-section>
        <q-card-section>
          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="form.email"
              label="Email"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            ></q-input>
            <q-input
              filled
              type="password"
              v-model="form.password"
              label="Senha"
              lazy-rules
              hint="Name and surname"
              :rules="[
              val => val !== null && val !== '' || 'Por favor preencha sua senha',
              val => val && val.length > 0 || 'Por favor preencha sua senha'
              ]"
            ></q-input>
            <q-toggle v-model="accept" label="Continue Logado"/>
            <div>
              <q-btn label="Login" type="submit" color="primary"></q-btn>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
  .my-card {
    position: relative;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.2rem;
    width: 100%;
    max-width: 80%;
    justify-content: center;
    padding: 10px;
    margin-top: 18%;
  }

  .alinhar {
    justify-content: center
  }

  section > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      form: {
        name: 'Hugo',
        email: 'hugo.bandeira@hotmail.com',
        password: '123',
      },
      name: null,
      age: null,
      accept: false,

    };
  },
  methods: {
    onSubmit() {
      // this.$store.dispatch('createUser', this.form);
      this.$store.dispatch('login', this.form)
        .then(() => {
          this.$router.push({ path: '/' });
        }).catch((error) => {
          console.log(error);
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'fas fa-exclamation-triangle',
            message: 'Login invalido',
          });
        });
    },
  },
  mounted() {
  },
  computed: {
  },
};
</script>
