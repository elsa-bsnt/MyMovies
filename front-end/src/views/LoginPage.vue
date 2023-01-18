<template>
  <h1>Login</h1>
  <div class="all">
    <div class="container">
      <p>Veuillez compléter les champs ci-dessous.</p>
      <hr>
      <form class="login_form" @submit.prevent="handleSubmit">
        <label for="email"><b>Email</b></label>
        <input type="email" placeholder="Email" name="email" id="email" v-model="form.mail" required>
        <br>
        <label for="psw"><b>Mot de passe</b></label>
        <input type="password" placeholder="Mot de passe" name="psw" id="psw" v-model="form.password" required>
        <hr>
        <button type="submit" class="registerbtn">Se connecter</button>
      </form>
      <p v-if="error" class="error">{{ error }}></p>
      <p v-if="success" class="success">{{ success }}></p>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data(){
    return{
      form:  {
        mail: "",
        password: "",
      },
      error: '',
      success: '',
    }
  },
  methods: {
    async handleSubmit() {
      console.log(this.form)
      try {
        const response = await axios.post('http://localhost:3307/register',this.form)
        this.success = response.data.message
        console.log(response.data)
        this.$router.push("/Home")
      } catch (error) {
        this.error = error.response.data.message
      }
    }
  }
}
</script>