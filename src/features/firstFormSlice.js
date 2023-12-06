import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    dataFirstForm:{
        namesFirstForm: "",
        surnamesFirstForm: "",
        documentFirstForm: "",
        genreFirstForm: "",
        ageFirstForm: ""
      }
}

const firstFormSlice = createSlice({
    name:"infoFirstForm",
    initialState,
    reducers:{
        addInfo:(state,action)=>{
            state.dataFirstForm = action.payload;
        }
    }
})

export const{addInfo} = firstFormSlice.actions;
export default firstFormSlice.reducer;