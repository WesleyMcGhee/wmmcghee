<template>
  <footer class="footer">
    <div class="footer-nav">
      <ul class="footer-nav-list">
        <li class="footer-nav-item">
          <a class="footer-nav-link" href="#/">Home</a>
        </li>
        <li class="footer-nav-item">
          <a class="footer-nav-link" href="#/blog">Blog</a>
        </li>
      </ul>
    </div>
    <div class="footer-links">
      <v-icon href="https://github.com/WesleyMcGhee" scale="2" name="bi-github" />
      <v-icon href="https://www.linkedin.com/in/wesleymcghee/" scale="2" name="bi-linkedin" />
    </div>
  </footer>
</template>

<style>
  .footer {
    height: 20vh;
    width: 100%;
    padding: 0 3vw;
    background-color: #242424; 
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .foot-nav {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-nav-list {
    list-style: none;
  }

  .footer-nav-item {
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px 0;
  }
  
  .footer-nav-item:hover {
    background-color: #424242;
    transition: ease .2s;
    cursor: pointer;
  }
  
  .footer-nav-link {
    color: white;
    text-decoration: none;
  }

  .footer-links {
    width: 10%;
  }

  .footer-link-items {
    color: white;
  }
</style>
