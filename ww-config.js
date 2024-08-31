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
        displayName: {
            label: {
                en: 'Display name',
            },
            type: 'Text',
            defaultValue: '',
        },
        avatarUrl: {
            label: {
                en: 'Avatar url',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
        chat: {
            type: 'OnOff',
            label: {
                en: 'Allow chat',
            },
            defaultValue: true,
        },
        people: {
            type: 'OnOff',
            label: {
                en: 'Show participant list',
            },
            defaultValue: true,
        },
        minimal: {
            type: 'OnOff',
            label: {
                en: 'Use minimal UI',
            },
            defaultValue: false,
        },
    },
};
