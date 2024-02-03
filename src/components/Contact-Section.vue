<script lang="ts">
  import axios from "axios";

  interface IEmailData {
    firstName?: string;
    lastName?: string;
    email: string;
    message: string;
  }

  export default {
    data() {
      return {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        endpoint: import.meta.env.EMAIL_ENDPOINT,
      }
    },
    methods: {
      async handleSubmit() {
        const data: IEmailData = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          message: this.message,
        }

        console.log(this.endpoint);

        await axios.post(this.endpoint, data).then(() => {
          this.firstName = ""; 
          this.lastName = ""; 
          this.email = ""; 
          this.message = ""; 
        }).catch((err) => {
          console.error(err)
        });
      }
    }
  }
</script>

<template>
  <section class="contact-section">
    <form class="contact-form" @submit.prevent="handleSubmit">
      <h1 class="contact-header">Contact Me</h1>
      <input class="half-input input" placeholder="First Name" v-model="firstName" />
      <input class="half-input input" placeholder="Last Name" v-model="lastName" />
      <input class="full-input input" placeholder="email" v-model="email" required />
      <textarea class="textarea input" placeholder="Message" v-model="message" required></textarea>
      <input class="contact-submit" type="submit" value="Send!" />
    </form>
  </section>
</template>

<style>
  .contact-section {
    background-color: #cfcfcf;
    color: black;
    height: 45vh;
    padding: 2.5vh 0;
  }

  .contact-con {
    width: 80vh;
    margin: 0 auto;
  }

  .contact-header {
    margin-left: 1.25%;
  }

  .contact-form {
    width: 60vw;
    margin: 0 auto;
  }

  .input {
    border: 1px solid #242424;
    border-radius: 2px;
    padding: 2vh 1vw;
  }

  .half-input {
    height: 30px;
    width: 45%;
    margin: 1vh 1.25%;
  }
  
  .full-input {
    height: 30px;
    width: 92.5%;
    margin: 1vh 1.25%;
  }

  .textarea {
    height: 90px;
    width: 92.5%;
    margin: 1vh 1.25%;
  }

  .contact-submit {
    height: 30px;
    width: 92.5%;
    border-radius: 2px;
    margin: 1vh 1.25%;
    border: 1px solid #242424;
    background-color: white;
  }

  .contact-submit:hover {
   background-color: #242424;
   color: white;
   transition: .2s ease;
   cursor: pointer;
  }


  @media (max-width: 820px) {
    .contact-section {
      height: 53vh;
    }

    .half-input {
      width: 92.5%;
    }
  }
</style>
