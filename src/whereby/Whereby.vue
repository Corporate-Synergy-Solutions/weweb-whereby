<template>
    <whereby-embed @join="onJoin" @leave="onLeave" @meeting_end="onMeetingEnd" :room="room" v-bind="config" />
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'

const props = defineProps({
    room: {
        type: String,
        required: true
    },
    audio: {
        type: Boolean,
        default: false
    },
    avatarUrl: {
        type: String,
        default: ''
    },
    autoSpotlight: {
        type: Boolean,
        default: true
    },
    background: {
        // render without background
        type: Boolean,
        default: false
    },
    bottomToolbar: {
        // hide button toolbar
        type: Boolean,
        default: false
    },
    breakout: {
        type: Boolean,
        default: true
    },
    chat: {
        type: Boolean,
        default: true
    },
    displayName: {
        type: String,
        default: ''
    },
    externalId: {
        type: String,
        default: ''
    },
    groups: {
        type: String,
        default: ''
    },
    logo: {
        type: Boolean,
        default: true
    },
    metadata: {
        type: String,
        default: ''
    },
    precallCeremony: {
        type: Boolean,
        default: false
    },
    precallCeremonyCanSkip: {
        type: Boolean,
        default: true
    },
    roomIntegrations: {
        type: Boolean,
        default: false
    },
    screenshare: {
        type: Boolean,
        default: true
    },
    timer: {
        type: Boolean,
        default: true
    },
    topToolbar: {
        type: Boolean,
        default: true
    },
    video: {
        // Enter meeting with video off
        type: Boolean,
        default: false
    }
})

const config = computed(() => {
    return {
        audio: props.audio ? 'off' : undefined,
        avatarUrl: props.avatarUrl || undefined,
        autoSpotlight: props.autoSpotlight ? '' : 'off',
        background: props.background ? 'off' : undefined,
        bottomToolbar: props.bottomToolbar ? 'off' : undefined,
        breakout: props.breakout ? '' : 'off',
        chat: props.chat ? '' : 'off',
        displayName: props.displayName,
        externalId: props.externalId || undefined,
        groups: props.groups || undefined,
        logo: props.logo ? '' : 'off',
        metadata: props.metadata || undefined,
        precallCeremony: props.precallCeremony ? '' : 'off',
        precallCeremonyCanSkip: props.precallCeremonyCanSkip ? 'on' : 'off',
        roomIntegrations: props.roomIntegrations ? 'on' : 'off',
        screenshare: props.screenshare ? '' : 'off',
        timer: props.timer ? '' : 'off',
        topToolbar: props.topToolbar ? '' : 'off',
        video: props.video ? 'off' : undefined
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

function onJoin(e) {
    console.log(e)
}

function onLeave(e) {
    console.log(e)
}

function onMeetingEnd(e) {
    console.log(e)
}


</script>