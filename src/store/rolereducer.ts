import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import rolers from "../data/roles.json"


const RoleSlice = createSlice({
    name: "Floor",
    initialState: { role: "Unknown Personnel"},
    reducers: {
        setRole: (state: any, action: PayloadAction<any>) => {                                        
            state.role = rolers[action.payload]
        },
    },
});

export default RoleSlice.reducer;

export const { setRole } = RoleSlice.actions;
