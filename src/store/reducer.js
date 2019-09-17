const initialState = {
    knots: 10,
    kmph: null,
    mph: null,
    unitSelect: "kmph",
    result: null
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case 'CONVERT':
            console.log(action.value)
            if (newState.unitSelect === 'kmph') {
                newState.kmph = newState.knots * 1.852;
                newState.result = newState.kmph;
            }

            if (newState.unitSelect === 'mph') {
                newState.mph = newState.knots / 1.999;
                newState.result = newState.mph;
            }
            break;

        case 'ON_CHANGE':
            newState.knots = action.value;
            break;

        case 'ON_SELECT':
            newState.unitSelect = action.value;
            console.log(newState.unitSelect);
            break;

        default:
            break;
    }
    return newState;
};

export default reducer;