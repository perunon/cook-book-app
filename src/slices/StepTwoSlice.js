import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipeFor: '',
  ingredients: [
    {
      name: 'Mleko',
      quantity: '400 ml',
    },
  ],
};

export const stepTwoSlice = createSlice({
  name: 'stepTwo',
  initialState,
  reducers: {
    setRecipeFor: (state, action) => {
      state.recipeFor = action.payload;
    },
    addIngredient: (state) => {
      state.ingredients.push({ name: '', quantity: '' });
    },
    removeEmptyIngredients: (state) => {
      state.ingredients = state.ingredients.filter((ingredient) => {
        return ingredient.name != '' && ingredient.quantity != '';
      });
    },
    updateIngredient: (state, action) => {
      const { index, field, val } = action.payload;
      state.ingredients = state.ingredients.map((ingredient, i) => {
        if (i !== index) return ingredient;

        switch (field) {
          case 'name':
            return { ...ingredient, name: val };
          case 'quantity':
            return { ...ingredient, quantity: val };
          default:
            return ingredient;
        }
      });
    },
    removeIngredient: (state, action) => {
      const index = action.payload;
      state.ingredients = state.ingredients.filter((ingredient, i) => {
        return i != index;
      });
    },
  },
});

export const {
  setRecipeFor,
  addIngredient,
  removeEmptyIngredients,
  updateIngredient,
  removeIngredient,
} = stepTwoSlice.actions;

export default stepTwoSlice.reducer;
