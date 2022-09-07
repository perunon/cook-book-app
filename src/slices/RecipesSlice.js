import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [],
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addNewRecipe: (state, action) => {
      const newRecipe = { ...action.payload, createdAt: new Date() };
      state.recipes.push(newRecipe);
    },
    updateRecipeData: (state, action) => {
      const { updatedRecipe, index } = action.payload;
      state.recipes = state.recipes.map((recipe, i) => {
        if (i != index) return recipe;
        return updatedRecipe;
      });
    },
    deleteRecipe: (state, action) => {
      const index = action.payload;
      state.recipes = state.recipes.filter((recipe, i) => {
        return i != index;
      });
    },
  },
});

export const { addNewRecipe, updateRecipeData, deleteRecipe } =
  recipesSlice.actions;

export default recipesSlice.reducer;
