<script>
export default {
  props: {
    skill: {
      required: true,
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ skill.skillName }}</h5>
      <p class="card-text">
        <i v-for="x in skill.stars" class="bi bi-star-fill"></i>
        <i v-for="x in 5 - (skill.proficiency ?? 0)" class="bi bi-star"></i>
      </p>
      <button  class="btn btn-primary">Edit</button>
    </div>
  </div>
  
</template>

<style scoped></style>
