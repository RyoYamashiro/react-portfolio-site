import {requestStates} from '../constants';

export const actionTypes = {
  initial: 'INITIAL',
  fetch: 'FETCHING',
  success: 'FETCH_SUCCESS',
  error: 'FETCH_ERROR'
};

export const initialState = {
  language: [],
  requestState: requestStates.idle
}

export const skillReducer = (state, action) => {
  switch(action.type){
    case actionTypes.initial: {
      return {
        language: [],
        requestState: requestStates.initial
      }
    };
    case actionTypes.fetch: {
      return {
        ...state,
        requestState: requestStates.loading
      }
    };
    case actionTypes.success: {
      return {
        languageList: action.payload.languageList,
        requestState: requestStates.success
      }
    };
    case actionTypes.error: {
      return {
        languageList: [],
        requestState: requestStates.error
      }
    };
    default: {
      throw new Error();
    }
  }
}
