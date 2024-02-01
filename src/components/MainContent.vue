<template>
  <VacancyDescription></VacancyDescription>
  <Teleport to="body">
    <FormVacancy :show="showModal" @close="showModal = false"></FormVacancy>
  </Teleport>
</template>

<script setup>
import FormVacancy from "./FormVacancy.vue";
import VacancyDescription from "./VacancyDescription.vue";
import { ref } from "vue";

const showModal = ref(false);
</script>

<style lang="scss" scoped></style>
