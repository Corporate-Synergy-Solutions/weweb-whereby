<template>
  <Whereby :key="updateComponent" :room="content.room" :audio="content.audio" :avatarUrl="content.avatarUrl"
    :autoSpotlight="content.autoSpotlight" :background="content.background" :bottomToolbar="content.bottomToolbar"
    :breakout="content.breakout" :chat="content.chat" :displayName="content.displayName"
    :externalId="content.externalId" :groups="content.groups" :logo="content.logo" :metadata="content.metadata"
    :precallCeremony="content.precallCeremony" :precallCeremonyCanSkip="content.precallCeremonyCanSkip"
    :roomIntegrations="content.roomIntegrations" :screenshare="content.screenshare" :timer="content.timer"
    :topToolbar="content.topToolbar" :video="content.video" />
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
