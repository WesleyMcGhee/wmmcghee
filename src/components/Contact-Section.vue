<template>
  <section class="contact-section">
    <form class="contact-form">
      <h1 class="contact-header">Contact Me</h1>
      <input class="half-input input" placeholder="First Name" value="First Name" />
      <input class="half-input input" placeholder="Last Name" value="Last Name" />
      <input class="full-input input" placeholder="email" value="Email" />
      <textarea class="textarea input" placeholder="Message"></textarea>
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

  .contact-submit:focus {
   background-color: #242424;
   color: white;
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
