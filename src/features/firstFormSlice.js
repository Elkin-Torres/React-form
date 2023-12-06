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
        },
        remInfo:(state)=>{
            state.dataFirstForm = {
                namesFirstForm: "",
                surnamesFirstForm: "",
                documentFirstForm: "",
                genreFirstForm: "",
                ageFirstForm: ""
              };
        }
    }
})

export const{addInfo, remInfo} = firstFormSlice.actions;
export default firstFormSlice.reducer;