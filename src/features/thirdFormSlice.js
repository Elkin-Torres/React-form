import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    dataThirdForm:{
        movieThirdForm: "",
        theaterThirdForm: "",
        pageThirdForm: "",
        notificationThirdForm: "",
      }
}

const thirdFormSlice = createSlice({
    name:"infoThirdForm",
    initialState,
    reducers:{
        addInfoThird:(state, action)=>{
            state.dataThirdForm = action.payload;
        }
    }
})


export const {addInfoThird} = thirdFormSlice.actions;
export default thirdFormSlice.reducer;