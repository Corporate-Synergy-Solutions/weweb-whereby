<template>
  <Whereby :room="content.room" :displayName="content.displayName" :avatarUrl="content.avatarUrl" :chat="content.chat"
    :people="content.people" :minimal="content.minimal" :key="updateComponent" />
</template>

<script setup>
import Whereby from './whereby/Whereby.vue'
import { watch, ref } from 'vue'
const props = defineProps({
  content: { type: Object, required: true },
})

const updateComponent = ref(0);
watch(() => props.content, () => (updateComponent.value += 1), { deep: true });
</script>
