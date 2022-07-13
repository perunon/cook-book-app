import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tags: ['breakfast', 'dinner', 'dessert', 'soup'],
};

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addTag: (state, action) => {
      const value = action.payload.toLowerCase();
      !state.tags.includes(value) && state.tags.push(value);
    },
    deleteTag: (state, action) => {
      state.tags = state.tags.filter((tag) => tag != action.payload);
    },
  },
});

export const { addTag, deleteTag } = tagsSlice.actions;

export default tagsSlice.reducer;
