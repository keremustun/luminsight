<script setup>
import SkillCard from '../components/SkillCard.vue'
import ManageSkillModal from '../components/ManageSkillModal.vue'
</script>

<script>
import { store } from '../services/store'

export default {
  
}
</script>

<template>
  <div>
    <h2>My Skills</h2>
  </div>

  <main>
    
    
    <button @click="toggleModal" class="btn btn-primary">Add Skill</button>

    <div class="container">
      <div class="row">
        <div class="col-sm-3 mt-4" v-for="skill in store.loggedInPerson.skills" :key="skill.skillName">
          <SkillCard :skill="skill"></SkillCard>
        </div>
      </div>
    </div>

    <div>

    </div>
    <!-- 
    <div>
      <button type="button" class="btn btn-primary" @click="showModal()">Launch demo modal</button>
      <ManageSkillModal ref="manageSkillModal" :show="showModal" @close-modal="showModal = false" />
    </div> -->


  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
}
</style>
