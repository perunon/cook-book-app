import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [],
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addNewRecipe: (state, action) => {
      const newRecipe = action.payload;
      state.recipes.push(newRecipe);
    },
  },
});

export const { addNewRecipe } = recipesSlice.actions;

export default recipesSlice.reducer;
