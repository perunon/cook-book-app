import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  description: '',
  prepTime: '',
  cookTime: '',
  source: '',
};

export const stepOneSlice = createSlice({
  name: 'stepOne',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setPrepTime: (state, action) => {
      state.prepTime = action.payload;
    },
    setCookTime: (state, action) => {
      state.cookTime = action.payload;
    },
    setSource: (state, action) => {
      state.source = action.payload;
    },
  },
});

export const { setName, setDescription, setPrepTime, setCookTime, setSource } =
  stepOneSlice.actions;

export default stepOneSlice.reducer;
