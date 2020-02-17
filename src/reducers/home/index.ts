import { SET_FORM_VALUES } from 'actions/types';

const initialState = {
  formValues: [],
};

export const homeReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FORM_VALUES:
      console.log('rached SET_FORM_VALUES, action = ', action);
      return { ...state, formValues: payload };
    default:
      return state;
  }
};
