import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const FloorrSlice = createSlice({
    name: "Floor",
    initialState: {floorAccess: [false, false, false, false, false] },
    reducers: {
        changeAccess: (state:any , action: PayloadAction<any>) => {
            state.floorAccess[action.payload] = true            
        },
    },
});


export default FloorrSlice.reducer

export const {changeAccess} = FloorrSlice.actions