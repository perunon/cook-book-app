import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tags: [],
};

export const stepFourSlice = createSlice({
  name: 'stepFour',
  initialState,
  reducers: {
    toggleSelectedTag: (state, action) => {
      state.tags.includes(action.payload)
        ? (state.tags = state.tags.filter((tag) => {
            return tag != action.payload;
          }))
        : state.tags.push(action.payload);
    },
  },
});

export const { toggleSelectedTag } = stepFourSlice.actions;

export default stepFourSlice.reducer;
