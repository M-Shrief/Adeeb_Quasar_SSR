<template>
  <div v-for="print in prints" :key="print.id" class="print-item"
    :style="{ color: fontColor, background: backgroundColor, border: `1px solid ${fontColor}` }">    <!-- Assigning poetry(2verses) || poetry(1verse) or prose -->
    <div @click="$emit('print', print)">
      <!-- if selected from ShowCasePoetry -->
      <div v-if="print.verses" v-for="verse in print.verses" :key="verse.id"
        class="verse">
        <p>{{ verse.first }}</p>
        <p dir="ltr">{{ verse.sec }}</p>
      </div>
      <!-- if selected from  ShowCaseProse -->
      <div v-else-if="print.qoute" class="qoute">
        <p>{{ print.qoute }}</p>
      </div>
    </div>
    <!-- <button @click="removePrint(print)">X</button> -->
    <button :style="{ color: backgroundColor, background: fontColor }"
      @click="$emit('remove', print)">X</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, type ComputedRef } from 'vue';
// types
import type { Print } from '../stores/__types__';

const props = defineProps({
  prints: {
    type: Array<Print>,
    required: true
  },
  colors: {
    type: Array<ComputedRef<string>>,
    required: false
  }
})

let fontColor = ref<ComputedRef<string> | string>(props.colors ? props.colors[0] : '#f6b352');
let backgroundColor = ref<ComputedRef<string> | string>(props.colors ? props.colors[1] : '#1f2124');

defineEmits(['print', 'remove'])
</script>

<style lang="scss" scoped>
@import '../css/mixins.scss';

$mainColor: var(--text1);
$secondaryColor: var(--surface2);

.print-item {
  position: relative;
  color: $mainColor;
  background-color: $secondaryColor;
  border: 1px solid $mainColor;
  list-style: none;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem;

  .verse,
  .qoute {
    font-size: 0.8rem;
  }

  .qoute {
    padding-top: 1rem;
    text-align: center;
  }

  @include mQ($breakpoint-md) {
    padding: 0.5rem;
    margin: 0.5rem;

    .qoute {
      padding-top: 0.5rem;
    }
  }

  @include mQ($breakpoint-sm) {
    padding: 0.3rem;
    margin: 0.3rem;

    .qoute {
      padding-top: 0.3rem;
    }
  }

  button {
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    background: $mainColor ;
    color: $secondaryColor;
    padding: 0.4rem;
    border: none;
    border-radius: 0.7rem;
    cursor: pointer;

    @include mQ($breakpoint-md) {
      padding: 0.15rem;
    }

    @include mQ($breakpoint-sm) {
      padding: 0.1rem;
    }
  }
}
</style>
