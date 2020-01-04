const SET_VALUES = "SET_VALUES";
const INCREMENT = "INCREMENT";
const RESET = "RESET";
const SET_MAX_VALUE ="SET_MAX_VALUE";
const SET_MAX_VALUE_ERROR ="SET_MAX_VALUE_ERROR";
const SET_MIN_VALUE ="SET_MIN_VALUE";
const SET_MIN_VALUE_ERROR ="SET_MIN_VALUE_ERROR";

const initialState = {
    minNumber: 0,
    maxNumber: 5,
    count: 0,
    maxValue: {error: false, number: 5},
    minValue: {error: false, number: 0},
    isDisableInc: true,
    isDisableRes: true,
    isDisableSet: true,
};

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAX_VALUE:
            return {
                ...state,
                maxValue: {...state.maxValue, number: action.number},
                isDisableSet: false,
                isDisableInc: true,
                isDisableRes: true,
            };
        case SET_MIN_VALUE:
            return {
                ...state,
                minValue: {...state.minValue, number: action.number},
                isDisableSet: false,
                isDisableInc: true,
                isDisableRes: true,
            }
        case SET_MAX_VALUE_ERROR:
            return {
                ...state,
                maxValue: {...state.maxValue, error: action.error},
                isDisableSet: action.error,
            };
        case SET_MIN_VALUE_ERROR:
            return {
                ...state,
                minValue: {...state.minValue, error: action.error},
                isDisableSet: action.error,
            };

        case SET_VALUES:
            return {
                ...state,
                minNumber: state.minValue.number,
                maxNumber: state.maxValue.number,
                count: state.minValue.number,
                isDisableSet: true,
                isDisableInc: false,
                isDisableRes: true,
            };

        case INCREMENT: {
            if(state.count+1===state.maxNumber)
            return {
                ...state,
                count: state.count+1,
                isDisableRes: false,
                isDisableInc: true
            };
            return {
                ...state,
                count: state.count+1,
                isDisableRes: false,
            }
        }
        case RESET:
            return {
                ...state,
                count: state.minValue.number,
                isDisableRes: true,
                isDisableInc: false
            };

        default: return state;
    }
};

export const setMaxValueError = (error) => ({type: SET_MAX_VALUE_ERROR, error});
export const setMaxValue = (number) => ({type: SET_MAX_VALUE, number});
export const setMinValueError = (error) => ({type: SET_MIN_VALUE_ERROR, error});
export const setMinValue = (number) => ({type: SET_MIN_VALUE, number});
export const increment = () => ({type: INCREMENT});
export const reset = () => ({type: RESET});
export const setValues = () => ({type: SET_VALUES});

export default reduser;