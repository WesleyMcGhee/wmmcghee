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
      <v-icon scale="2" name="bi-github" />
      <v-icon scale="2" name="bi-linkedin" />
    </div>
  </footer>
</template>

<style>
  .footer {
    height: 20vh;
    width: 100%;
    background-color: #242424; 
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
