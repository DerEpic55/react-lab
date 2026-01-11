export type State = {
    selectedId: number;
    messages: Record<number, string>
};

export type Action = {
    type: 'changed_selection';
    contactId: number;
} | {
    type: 'edited_message';
    message: string
} | {
    type: 'sent_message';
    message: string
};

export const initialState = {
    selectedId: 0,
    messages: {
        0: 'Салют',
        1: 'Алло',
        2: 'Как дела?'
    }
}

export function messengerReducer(
    state: State,
    action: Action
) {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
            };
        }
        case 'edited_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message
                },
            };
        }
        case 'sent_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: ''
                },
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
