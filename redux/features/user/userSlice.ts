import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: Object
}

const initialState: CounterState = {
    value: {},
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        },
        removeUser: (state) => {
            state.value = {}
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer