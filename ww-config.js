export default {
    editor: {
        label: {
            en: 'Whereby',
        },
    },
    properties: {
        room: {
            label: {
                en: 'Room',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
        audio: {
            type: 'OnOff',
            label: {
                en: 'Enter meeting with audio off',
            },
            defaultValue: false,
        },
        avatarUrl: {
            label: {
                en: 'Avatar url',
            },
            type: 'Text',
            defaultValue: '',
        },
        autoSpotlight: {
            type: 'OnOff',
            label: {
                en: 'Auto spotlight host on join',
            },
            defaultValue: true,
        },
        background: {
            type: 'OnOff',
            label: {
                en: 'Render without background',
            },
            defaultValue: false,
        },
        bottomToolbar: {
            type: 'OnOff',
            label: {
                en: 'Hide bottom toolbar',
            },
            defaultValue: false,
        },
        breakout: {
            type: 'OnOff',
            label: {
                en: 'Show the breakout groups for the meeting host',
            },
            defaultValue: true,
        },
        chat: {
            type: 'OnOff',
            label: {
                en: 'Allow chat',
            },
            defaultValue: true,
        },
        displayName: {
            label: {
                en: 'Display name',
            },
            type: 'Text',
            defaultValue: '',
        },
        externalId: {
            label: {
                en: 'Custom identifier for participant',
            },
            type: 'Text',
            defaultValue: '',
        },
        groups: {
            label: {
                en: 'Predefine groups for the breakout',
            },
            type: 'Text',
            defaultValue: '',
        },
        logo: {
            type: 'OnOff',
            label: {
                en: 'Show logo',
            },
            defaultValue: true,
        },
        metadata: {
            label: {
                en: 'Metadata',
            },
            type: 'Text',
            defaultValue: '',
        },
        precallCeremony: {
            type: 'OnOff',
            label: {
                en: 'Precall device and connectivity test',
            },
            defaultValue: false,
        },
        precallCeremonyCanSkip: {
            type: 'OnOff',
            label: {
                en: 'Can skip precall test',
            },
            defaultValue: true,
        },
        roomIntegrations: {
            type: 'OnOff',
            label: {
                en: 'Enable youtube and miro integration',
            },
            defaultValue: false,
        },
        screenshare: {
            type: 'OnOff',
            label: {
                en: 'Enable screenshare',
            },
            defaultValue: true,
        },
        timer: {
            type: 'OnOff',
            label: {
                en: 'Show timer',
            },
            defaultValue: true,
        },
        topToolbar: {
            type: 'OnOff',
            label: {
                en: 'Show top toolbar',
            },
            defaultValue: true,
        },
        video: {
            type: 'OnOff',
            label: {
                en: 'Enter meeting with video off',
            },
            defaultValue: false,
        },
    },
};
