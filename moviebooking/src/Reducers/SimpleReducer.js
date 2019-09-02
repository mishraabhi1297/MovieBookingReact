export class SimpleReducer {
    totalClicks = 0;
  }
  
  const initialState = new SimpleReducer();
  
  export default function simple (state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        let increment = state.numOfClicks + action.increment; 
        return {
          ...state,
          numOfClicks: increment
        }
      case 'DECREMENT':
        let decrement = state.numOfClicks - action.decrement; 
        if (decrement >= 0) {
          return {
            ...state,
            numOfClicks: decrement
          }
        }
        return state;
      default:
        return state
    }
  }