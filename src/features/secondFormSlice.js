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
    }
  },
});

export const {addInfoSecond} = secondFormSlice.actions;
export default secondFormSlice.reducer;
