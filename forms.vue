<template>
  <!-- @submit.prevent event modifier so it prevent browser's default behavior -->
  <form action="" @submit.prevent="handleSubmit">
    <!-- v-model is a directive for two way data binding -->
    <label for="">Email</label>
    <input type="email" required v-model="email">

    <label for="">Password</label>
    <input type="password" required v-model="password">
    <div v-if="passwordError" class="error"> {{ passwordError }} </div>

    <label for="">Role</label>
    <select id="" name="" v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>
  <!-- create checkboxes -->
  <div class="terms">
    <input type="checkbox" v-model="terms" required>
    <label for="">Accept terms and conditions</label>
  </div>

  <!-- other possibility to create checkboxes -->
  <div>
    <input type="checkbox" value="shaun" v-model="names">
    <label for="">Shaun</label>
    <input type="checkbox" value="yoshi" v-model="names">
    <label for="">Yoshi</label>
    <input type="checkbox" value="mario"  v-model="names">
    <label for="">Mario</label>
  </div>

  <div class="submit">
    <button>Create an account</button>
  </div>
  </form>


  <!-- good trick to output the state as html element -->
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ terms }}</p>
</template>

<script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        //role: "" -> no default option
        role: "designer", // will have designer as default value
        terms: false, // put initial value true if you want to be preselected
        names: [],
        passwordError: ""
      }
    },
    methods: {
      handleSubmit() {
        this.passwordError = this.password.lenght > 5 
          ? "" 
          : "Password must be at least 6 chars long"

        if (!this.passwordError) {
          // fire request to the database
        }

      }
    }
  }
</script>

<style></style>
