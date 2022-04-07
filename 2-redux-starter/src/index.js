// state = reducer(state, action)
// notify the subscribers
//

import store from './store.js';
const unsubscribe = store.subscribe(() => {
  console.log('Store changed'), store.getState();
});

store.dispatch();
// Unscribes you from the notifications of store changes
unsubscribe();

store.dispatch({
  type: actions.REMOVE_BUG,
  payload: {
    id: 2,
  },
});
console.log(store.getState());
