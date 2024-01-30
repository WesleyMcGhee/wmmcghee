<template>
  <section class="intro">
    <div class="intro-img">
      <img class="headshot" alt="A Headshot of Me" src="/gigachad.jpg" />
    </div>
    <div class="intro-text">
      <h1 class="heading">Wesley McGhee</h1>
      <p class="about">
        Hello, I am a passionate developer who enjoys working on new technologies.  I am currently using, GoLang, .NET, TypeScript, React/Next, and Vue for my projects.  I am starting to learn C following the Handmade Hero Course.
        Well I think that's it thanks for stopping by!
      </p>
    </div>
  </section>
</template>

<style>
  .intro {
    width: 80%;
    padding: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
  .intro-text {
    width: 50%;
    margin-top: 3vh;
  }

  .heading {
    text-align: center;
    font-size: 2.3rem;
    margin-bottom: 3vh;
  }

  .about {
    font-size: 1.3rem; 
  }

  .intro-img {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: end;
  }

  .headshot {
    height: 200px;
    width: 200px;
    margin: 0 auto;
    border-radius: 50%;
    border: 2px solid #242424;
    display: inline;
  }
  
  @media(max-width: 930px) {
    .intro {
      width: 80%;
    }

    .intro-text {
      text-align: center;
      width: 100%;
    }
  }
</style>
