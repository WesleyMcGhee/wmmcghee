<script lang="ts">
  // This probably needs to be implemented differently
  // But IDK how to implement AUTH in Vue, so this is a learning experince

  export default {
    data() {
      return {
        username: "",
        password: "",
      }
    },
    methods: {
    }
  }
</script>

<template>
  <h1>Admin Sign In</h1>
  <form>
    <input v-model="username" placeholder="Username" />
    <input v-model="password" placeholer="Password" />
  </form>
</template>
