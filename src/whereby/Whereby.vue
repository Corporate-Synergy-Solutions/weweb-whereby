<template>
    <whereby-embed :room="room" v-bind="config" />
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'

const props = defineProps({
    room: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        default: ''
    },
    avatarUrl: {
        type: String,
        default: ''
    },
    chat: {
        type: Boolean,
        default: true
    },
    people: {
        type: Boolean,
        default: true
    },
    minimal: {
        type: Boolean,
        default: false
    }
})

const config = computed(() => {
    return {
        displayName: props.displayName,
        avatarUrl: props.avatarUrl || undefined,
        chat: props.chat ? '' : 'off',
        people: props.people ? '' : 'off',
        minimal: props.minimal ? '' : 'off'
    }
})

onBeforeMount(() => {
    let script = wwLib.getFrontDocument().createElement('script')
    script.type = 'module'
    script.id = 'whereby'
    script.defer = true
    script.src = 'https://cdn.srv.whereby.com/embed/v2-embed.js'
    if (wwLib.getFrontDocument().getElementById('whereby')) {
        wwLib.getFrontDocument().getElementById('whereby').remove()
    }
    wwLib.getFrontDocument().head.appendChild(script)
})
</script>