import { configureStore } from "@reduxjs/toolkit";
import firstFormSlice from "../features/firstFormSlice";
import thirdFormSlice from "../features/thirdFormSlice";
import secondFormSlice from "../features/secondFormSlice";


export const store = configureStore({
    reducer: {
        infoFirstForm:firstFormSlice,
        infoSecondForm: secondFormSlice,
        infoThirdForm:thirdFormSlice
    }
})