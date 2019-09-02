export const increment = () => dispatch => {
    dispatch({
     type: 'INCREMENT',
     increment: 1
    })
   }

export const decrement = () => dispatch => {
    dispatch({
        type: 'DECREMENT',
        decrement: 1
    })
}