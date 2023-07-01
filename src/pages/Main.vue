<template>
  <main dir="rtl">
    <h1 class="name">أديب</h1>
    <p class="object">لطباعة الادب العربي شعراً ونثراً</p>
    <div class="container">
      <!-- Add Pagination -->
      <ShowCasePoems :poems="getPoems" :grid="'grid'">
        <h2 class="poems-title">القصائد</h2>
      </ShowCasePoems>

      <ShowCasePoets :poets="getPoets">
        <h2 class="poets-title">الشعراء</h2>
      </ShowCasePoets>

      <ShowCasePoetry :chosenVerses="getChosenVerses" :routeName="'main'"
        @print="(print: Print) => addPrint(print)" />

      <ShowCaseProse :proses="getProses" :routeName="'main'"
        @print="(print: Print) => addPrint(print)" />
    </div>
    <SelectedPrints :prints="getPrints" @remove="(print) => removePrint(print)"
      :is-partner="isPartner" />
  </main>
</template>
<script lang="ts" setup>
import { onMounted, computed } from 'vue';
// stores
import { usePoemStore } from '../stores/poems';
import { usePoetStore } from '../stores/poets';
import { useChosenVerseStore } from '../stores/chosenVerses';
import { useProseStore } from '../stores/proses';
import { usePrintStore } from '../stores/prints';
import { usePartnerStore } from '../stores/partners';
// Types
import type { Print } from '../stores/__types__';

// components
import ShowCasePoems from '../components/ShowCasePoems.vue';
import ShowCasePoets from '../components/ShowCasePoets.vue';
import ShowCasePoetry from '../components/ShowCasePoetry.vue';
import ShowCaseProse from '../components/ShowCaseProse.vue';
import SelectedPrints from '../components/SelectedPrints.vue';


const poemsStore = usePoemStore();
const getPoems = computed(() => {
  return poemsStore.getPoems;
});

const poetsStore = usePoetStore();
const getPoets = computed(() => {
  return poetsStore.getPoets;
});

const chosenVersesStore = useChosenVerseStore();
const getChosenVerses = computed(() => {
  return chosenVersesStore.getChosenVerses;
});

const proseStore = useProseStore();
const getProses = computed(() => {
  return proseStore.getProses;
});

onMounted(() => {
  if (!getPoems.value.length) poemsStore.fetchPoems();
  if (!getPoets.value.length) poetsStore.fetchPoets();
  if (!getChosenVerses.value.length) chosenVersesStore.fetchChosenVerses();
  if (!getProses.value.length) proseStore.fetchProses();
});

const printsStore = usePrintStore();
const getPrints = computed(() => {
  return printsStore.getPrints;
});
function addPrint(print: Print) {
  return printsStore.addPrint(print);
}
function removePrint(print: Print) {
  return printsStore.removePrint(print);
}

const partnerStore = usePartnerStore();
const isPartner = computed(() => {
  return partnerStore.getPartner ? true : false;
})
</script>


<style lang="scss" scoped>
@import '../css/mixins.scss';

.name,
.object {
  text-align: center;
}

.name {
  font-size: 4rem;
  font-weight: 600;
}

.object {
  font-size: 1.5rem;
}

.container {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 70% 30%;
}

.poems-title,
.poets-title {
  text-align: center;
  padding: 0.3rem;
  border-radius: 1.5rem;
  width: 50%;
  margin: 1rem auto;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: normal;
  letter-spacing: normal;
}

.poems-title {
  background-color: #f6b352;
  color: #1f2124;
}

.poets-title {
  background-color: #2c3e50;
  color: #fbe6c2;
}

@include mQ($breakpoint-lg) {
  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.5rem;
  }

  .container {
    grid-template-columns: 65% 35%;
  }

  .poems-title,
  .poets-title {
    padding: 0.3rem;
    margin: 0.6rem auto;
    font-size: 1.3rem;
  }
}

@include mQ($breakpoint-md) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
  }

  .container {
    grid-template-columns: 65% 35%;
  }

  .poems-title,
  .poets-title {
    padding: 0.2rem;
    margin: 0.5rem auto;
    font-size: 1.2rem;
  }
}

@include mQ($breakpoint-sm) {
  h1 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1rem;
  }

  .container {
    grid-template-columns: 65% 35%;
  }

  .poems-title,
  .poets-title {
    padding: 0.1rem;
    margin: 0.3rem auto;
    font-size: 1rem;
  }
}
</style>
