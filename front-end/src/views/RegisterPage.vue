<template>
  <h1>Register</h1>
  <div class="all">
    <div class="container">
      <p>Veuillez compléter les champs ci-dessous.</p>
      <hr>
      <form class="register_form" @submit.prevent="handleSubmit">
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
        this.$router.push("/Login")
      } catch (error) {
        this.error = error.response.data.message
      }
    }
  }
}
</script>

<style>
h1{
  color: #6c0000;
  text-align: center;
  font-family :Arial, Helvetica, sans-serif;
  margin-top: 5%;
}

.all{
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 2%;
  margin-bottom: 2%;
}

* {
  box-sizing: border-box;
  font-family:Arial, Helvetica, sans-serif;
  align-items: center;
}

h1{
  text-align: center;
  font-weight: bold;
}
.container {
  padding: 16px;
  background-color: #ffffff;
  width: 100%;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

.registerbtn {
  background-color: #ff4848;
  color: #ffffff;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  font-size: 20px;
  font-weight: bold;
}

.registerbtn:hover {
  opacity: 1;
}

a {
  color: dodgerblue;
}

b{
  text-align: left;
}
</style>


