import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: Object | undefined,
    KycHash: string
}

const initialState: CounterState = {
    value: undefined,
    KycHash: ""
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
        addHash: (state, action: PayloadAction<any>) => {
            state.KycHash = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser, addHash } = userSlice.actions
export default userSlice.reducer