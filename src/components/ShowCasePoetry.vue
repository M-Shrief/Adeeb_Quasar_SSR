<template>
  <section id="chosen-verses">
    <h2 class="title">مختارات شعرية</h2>
    <div :class="grid">
      <div v-for="chosenVerse in chosenVerses" :key="chosenVerse.id"
        class="poetry-item">
        <div v-for="verse in chosenVerse.verses" :key="verse.id"
          :class="chosenVerse.verses.length == 1 ? 'one-verse' : 'two-verse'">
          <p class="first">{{ verse.first }}</p>
          <p class="sec" dir="ltr">{{ verse.sec }}</p>
        </div>
        <router-link :to="'/poem/' + chosenVerse.poem" class="details">{{
          route.name == 'poet'
          ? 'القصيدة الكاملة'
          : chosenVerse.poet.name + ' - القصيدة الكاملة'
        }}</router-link>
        <button
          @click="$emit('print', { id: chosenVerse.id, verses: chosenVerse.verses })"
          class="print-button">
          اضف للطباعة
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
// types
import type { ChosenVerse } from '../stores/__types__';

const route = useRoute();

defineProps({
  chosenVerses: {
    type: Array<ChosenVerse>,
    required: true,
  },
  grid: {
    type: String,
    required: false,
  },
});
defineEmits(['print']);
</script>

<style lang="scss" scoped>
@import '../css/mixins.scss';

$mainColor: #2c3e50;
$secondaryColor: #fbe6c2;

.title {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  background-color: $secondaryColor;
  color: $mainColor;
  padding: 0.3rem;
  margin: 1rem 0.3rem 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  border: 1px solid $mainColor;
  border-radius: 1.5rem;

  @include mQ($breakpoint-lg) {
    padding: 0.3rem;
    margin: 0.6rem 0.3rem 0;
    font-size: 1.3rem;
  }

  @include mQ($breakpoint-md) {
    padding: 0.2rem;
    margin: 0.5rem 0.2rem 0;
    font-size: 1.2rem;
  }

  @include mQ($breakpoint-sm) {
    padding: 0.1rem;
    margin: 0.3rem 0.1rem 0;
    font-size: 1rem;
  }
}

.grid-main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @include mQ($breakpoint-md) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.grid-poet {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @include mQ($breakpoint-md) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.poetry-item {
  position: relative;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  border-radius: 1.5rem;
  padding: 0.3rem;
  padding-bottom: 1.5rem;
  margin: 0.5rem;
  border: 1px solid $mainColor;
  background: $secondaryColor;
  color: $mainColor;

  @include mQ($breakpoint-lg) {
    padding: 0.3rem;
    padding-bottom: 1.4rem;
    margin: 0.3rem;
  }

  @include mQ($breakpoint-md) {
    padding: 0.2rem;
    padding-bottom: 1.2rem;
    margin: 0.3rem;
  }

  @include mQ($breakpoint-sm) {
    padding: 0.1rem;
    padding-bottom: 1rem;
    margin: 0.2rem;
  }

  .details {
    text-decoration: none;
    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;
    color: $mainColor;
    font-size: 0.9rem;

    &:hover {
      font-weight: 600;
    }

    @include mQ($breakpoint-lg) {
      font-size: 0.6rem;
    }

    @include mQ($breakpoint-md) {
      font-size: 0.7rem;
    }

    @include mQ($breakpoint-sm) {
      font-size: 0.6rem;
    }
  }

  .one-verse {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 3rem 0 1.5rem;

    .first {
      margin-right: 0.4rem;
    }

    .sec {
      margin-left: 0.4rem;
    }

    @include mQ($breakpoint-lg) {
      font-size: 0.95rem;
      margin: 2.6rem 0 1.2rem;
    }

    @include mQ($breakpoint-md) {
      font-size: 0.9rem;
      margin: 2.2rem 0 1rem;
    }

    @include mQ($breakpoint-sm) {
      font-size: 0.8rem;
      margin: 1.5rem 0 0.5rem;
    }
  }

  .two-verse {
    font-size: 1rem;
    font-weight: 600;
    margin: 1.5rem 0;

    .first {
      margin-right: 0.4rem;
    }

    .sec {
      margin-left: 0.4rem;
    }

    @include mQ($breakpoint-lg) {
      font-size: 0.95rem;
      margin: 1.2rem 0;
    }

    @include mQ($breakpoint-md) {
      font-size: 0.8rem;
      margin: 1rem 0;
    }

    @include mQ($breakpoint-sm) {
      font-size: 0.8rem;
      margin: 0.7rem 0;
    }
  }

  .print-button {
    @include add-print-btn;
  }
}
</style>
