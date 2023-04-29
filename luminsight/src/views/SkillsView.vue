<script setup>
import SkillCard from '../components/SkillCard.vue'
import ManageSkillModal from '../components/ManageSkillModal.vue'
</script>

<script>
import { store } from '../services/store'

export default {
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      console.log('aa')
      this.showModal = true
    }
  }
}
</script>

<template>
  <div class="about">
    <h2>My Skills</h2>
  </div>

  <main>

    <button @click="toggleModal" class="btn btn-primary">Add Skill</button>

    <div class="container">
      <div class="row">
        <div class="col-sm-3 mt-4" v-for="skill in store.skills" :key="skill.skillName">
          <SkillCard :skill="skill"></SkillCard>
        </div>
      </div>
    </div>

    <ManageSkillModal v-if="showModal" >

    </ManageSkillModal>


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
