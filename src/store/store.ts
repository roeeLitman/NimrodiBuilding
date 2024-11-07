import { configureStore } from "@reduxjs/toolkit";
import FloorrSlice from "./floorreducer"
import RoleSlice from "./rolereducer"


export default configureStore({
    reducer:{
        floorAccess: FloorrSlice,
        role: RoleSlice
    }
})