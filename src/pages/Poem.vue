<template>
  <main>
    <div class="container" dir="rtl">
      <section id="related-data" v-if="getPoem.poet">
        <router-link :to="'/poet/' + getPoem.poet.id" class="link">
          <ShowCasePoet :details="getPoem.poet" />
        </router-link>

        <ShowCasePoems :poems="getPoems">
          <h2 class="poems-title">قصائد اخري</h2>
        </ShowCasePoems>
      </section>
      <!-- make print the same interface like chosenVerses -->
      <ShowCasePoem :verses="getPoem.verses"
      @print="(poemVerse: Verse) => addPrint({ poem: getPoem.id, ...poemVerse })" />
      </div>
      <SelectedPrints :prints="getPrints" @remove="(print) => removePrint(print)"
      :is-partner="isPartner" />
  </main>
</template>

<script lang="ts" setup>
import { onBeforeMount, computed, watch, inject } from 'vue';
import { useRoute } from 'vue-router';
// stores
import { usePoemStore } from '../stores/poems';
import { usePrintStore } from '../stores/prints';
// components
import ShowCasePoems from '../components/ShowCasePoems.vue';
import ShowCasePoem from '../components/ShowCasePoem.vue';
import ShowCasePoet from '../components/ShowCasePoet.vue';
import SelectedPrints from '../components/SelectedPrints.vue';
// Types
import type { Verse, Print } from '../stores/__types__';

const route = useRoute();

const poemStore = usePoemStore();
const getPoem = computed(() => {
  return poemStore.getPoem;
});
const getPoems = computed(() => {
  return poemStore.getPoems;
});

watch(
  () => route.params.id,
  (newPoemId) => {
    if (route.name === 'poem')
      poemStore.fetchPoemAndSuggestedPoems(route.params.id);
  }
);

onBeforeMount(() => {
  poemStore.fetchPoemAndSuggestedPoems(route.params.id);
});

const printsStore = usePrintStore();
function addPrint(print: Print) {
  return printsStore.addPrint(print);
}
const getPrints = computed(() => {
  return printsStore.getPrints;
});
function removePrint(print: Print) {
  return printsStore.removePrint(print);
}

const isPartner = inject('isPartner') as boolean;
</script>


<style lang="scss" scoped>
@import '../css/mixins.scss';

.container {
  display: grid;
  grid-template-columns: 40% 60%;
  margin: 1rem;
}

#related-data {
  .link {
    text-decoration: none;
  }

  h2 {
    color: var(--text1);
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: normal;
    letter-spacing: normal;

    @include mQ($breakpoint-lg) {
      font-size: 1.1rem;
    }

    @include mQ($breakpoint-md) {
      font-size: 1rem;
    }

    @include mQ($breakpoint-sm) {
      font-size: 1rem;
    }
  }
}
</style>
