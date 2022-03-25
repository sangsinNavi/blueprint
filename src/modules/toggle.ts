const TOGGLE = 'toggle/TOGGLE' as const;
const TOGGLE_BY= 'toggle/TOGGLE_BY' as const;

export const toggle = () => ({
    type: TOGGLE
});

type ToggleAction = ReturnType<typeof toggle>;

type ToggleState = {
    tog: boolean;
}

const initialState: ToggleState = {
    tog: false
};

function toggleFunction(
    state: ToggleState = initialState,
    action: ToggleAction
): ToggleState {
    switch(action.type){
        case TOGGLE:
            return { tog: !state.tog}
        default:
            return state;
    }
}

export default toggleFunction;