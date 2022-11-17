<script setup lang="ts">
interface Props {
  text: string,
  number?: number,
}
withDefaults(defineProps<Props>(), {
  number: undefined,
});

// interface Emits { (e: 'eventname'):void }
// const emit = defineEmits<Emits>();
</script>

<template>
  <div class="output">{{ text }}</div>
</template>

<style scoped>
</style>
