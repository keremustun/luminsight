<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { PersonService }  from './services/personService'
import { store } from './services/store'
</script>

<script>

export default {

  data() {
    return {
      loggedIn: false,
      loggedInPerson: {}
    }
  },

  methods: {
    login() {
      const personService = new PersonService()
      store.loggedInPerson = personService.getPerson('kerem.ustun@luminis.eu')
      this.loggedIn = true
      console.log(store.loggedInPerson.skills)
    }
  }
}
</script>

<template>
  <div v-if="!loggedIn">
    <button @click="login">login</button>
  </div>
  <div v-else>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
              </button>
              <a class="navbar-brand" href="#">
                <img src="https://www.luminis.eu/wp-content/themes/luminis-2020/library/images/logo.svg" alt="Logo"
                  width="80" height="24" class="d-inline-block align-text-top" />
              </a>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <RouterLink to="/">Home</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/profile">Profile</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/skills">Skills</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/colleagues">Colleagues</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/resumes">Resumes</RouterLink>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
      </div>

      <div class="row">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
