import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataSecondForm:{
        genreSecondForm: "",
        deviceSecondForm: "",
        streamingSecondForm: "",
        platformsSecondForm: "",
      }
}

const secondFormSlice = createSlice({
  name: "infoSecondForm",
  initialState,
  reducers: {
    addInfoSecond:(state, action)=>{
        state.dataSecondForm = action.payload;
    },
    remInfoSecond:(state)=>{
      state.dataSecondForm = {
        genreSecondForm: "",
        deviceSecondForm: "",
        streamingSecondForm: "",
        platformsSecondForm: "",
      };
    }
  },
});

export const {addInfoSecond, remInfoSecond} = secondFormSlice.actions;
export default secondFormSlice.reducer;
