import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {

            // Vanilla(older) redux had a principle of DON'T MUTATE THE STATE. Returning was mandatory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;



            //mutating the state. This is a compulsion in Redux toolkit that we have to mutate the state
            // Behind the scenes redux is still doing all the things as done in vanila redux by the immer library
            // https://immerjs.github.io/immer/
            // it finds the difference b/w original state, mutated state and gives back new copy of the state

            state.items.push(action.payload);
        },
        removeItems: (state, action) => {
            state.items.pop(action.payload);
        },          
                    //originalstate = { items: ['pizza'] };
        clearCart: (state) => {
            console.log(state);
            //as we cannot read the values of the state we can use something as current(state) to read the values
            
            // state = [] this will not work as it's creating a local variable of name state and setting it's value to []
            console.log(current(state))

            // return { items: [] }; //u can do this alternatively.
            state.items.length = 0;//[]
        }
    }
})

export const { addItems, removeItems, clearCart } = cartSlice.actions

export default cartSlice.reducer