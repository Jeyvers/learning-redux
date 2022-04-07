// We need action types only when creating an action
import * as actions from './actionTypes';
export function addBug(description) {
  return {
    type: actions.ADD_BUG,
    payload: {
      description: 'Bug 1',
    },
  };
}

export function removeBug(description) {
  return {
    type: actions.REMOVE_BUG,
    payload: {
      id: 2,
    },
  };
}
