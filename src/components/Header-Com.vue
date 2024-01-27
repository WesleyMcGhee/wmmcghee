<script setup lang="ts">
  
</script>

<template>
  <header class="header">
    <h1 class="logo">WM</h1>
    <div>
      <ul class="nav-list">
        <li class="nav-item">
          <a class="nav-link" href="#/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/blog">Blog</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style>
  .header {
    height: 7vh;
    width: 100%;
    padding: 0 3vw;
    background-color: #242424;
    color: whtie;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    color: white;
    font-size: 2.3em;
    font-family: "Grand Hotel";
  }

  .nav-list {
    list-style: none;
  }

  .nav-item {
    display: inline;
    margin: 0 1.5vw;
    padding: 5px 10px;
    border-radius: 5px;
  }

  .nav-item:hover {
    background-color: #424242;
    transition: .2s ease;
    cursor: pointer;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    display: inline;
  }
</style>
