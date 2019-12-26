import {createStore} from "redux";
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
    isDisableInc: false,
    isDisableRes: false,
    isDisableSet: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAX_VALUE:
            return {
                ...state,
                maxValue: {...state.maxValue, number: action.number},
                isDisableSet: false,
            };
        case SET_MIN_VALUE:
            return {
                ...state,
                minValue: {...state.minValue, number: action.number},
                isDisableSet: false,
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
                isDisableSet: true
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

const store = createStore(reducer);
window.store = store;

export default store;