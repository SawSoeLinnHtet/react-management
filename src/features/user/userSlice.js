import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: [
        {id: 1, name: "Soe Soe", username: "soe_soe", email: "soesoe@gmail.com"},
        {id: 2, name: "Nu Nu", username: "nu_nu", email: "nunu@gmail.com"},
    ],
    reducers: {
        add: (state, action) => {
            return [ ...state, action.payload ]
        },
        edit: (state, action) => {
            const { id, updatedUser } = action.payload;
            const index = state.findIndex(user => user.id === id);
            if(index !== -1){
                state[index] = {...state[index], ...updatedUser}
            }
        },
        remove: (state, action) => {
            return state.filter(item=>item.id !== action.payload);
        }
    }
});

export const selectUsers = (state) => state.users;
export const { add, edit, remove } = userSlice.actions;
export default userSlice.reducer;