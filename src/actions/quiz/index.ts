/**
 * Quiz actions
 */

import { SET_IS_QUIZ_COMPLETED } from 'actions/actionTypes';

// Completed state, shared for different screen logic
export const setIsQuizCompleted = (isQuizCompleted: boolean) => ({
  type: SET_IS_QUIZ_COMPLETED,
  payload: isQuizCompleted,
});

// export const resetQuizState = () => {
//   return (dispatch) => {

//   }
// }
