import {createStore} from "redux";
const SET_VALUES = "SET_VALUES";
const INCREMENT = "INCREMENT";
const RESET = "RESET";
const SET_INPUT_VALUES ="SET_INPUT_VALUES";

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
        case SET_INPUT_VALUES: {
            return {
                ...state,
               ...action.newValues
            }
        }
        case SET_VALUES: {
            return {
                ...state,
                minNumber: state.minValue.number,
                maxNumber: state.maxValue.number,
                count: state.minValue.number,
                isDisableSet: true
            }
        }
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
        case RESET:{
            return {
                ...state,
                count: state.minValue.number,
                isDisableRes: true,
                isDisableInc: false
            }
        }
        default: return state;
    }
};

const store = createStore(reducer);
window.store = store;

export default store;