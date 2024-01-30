<template>
  <VacancyDescription></VacancyDescription>
</template>

<script setup>
import { onMounted } from "vue";
import "@/assets/styles/main.scss";
import { heightVH } from "@/helpers";
import VacancyDescription from "./components/VacancyDescription.vue";

onMounted(() => {
  heightVH();
});
</script>

<style lang="scss"></style>
