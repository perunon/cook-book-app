import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pictures: ['', '', '', ''],
};

export const stepFiveSlice = createSlice({
  name: 'stepFive',
  initialState,
  reducers: {
    setPicture: (state, action) => {
      const { id, uri } = action.payload;
      state.pictures = state.pictures.map((picture, i) =>
        i === id ? uri : picture
      );
    },
  },
});

export const { setPicture } = stepFiveSlice.actions;

export default stepFiveSlice.reducer;
