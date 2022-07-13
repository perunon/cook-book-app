import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  steps: [
    {
      imgUri: '',
      content: 'XD',
      notes: '',
    },
  ],
};

export const stepThreeSlice = createSlice({
  name: 'stepThree',
  initialState,
  reducers: {
    addStep: (state, action) => {
      state.steps.push({
        imgUri: action.payload.imgUri,
        content: action.payload.content,
        notes: action.payload.notes,
      });
    },
    editStep: (state, action) => {
      const { editedStep, index } = action.payload;
      state.steps = state.steps.map((step, i) => {
        if (i !== index) return step;
        return editedStep;
      });
    },
    deleteStep: (state, action) => {
      const index = action.payload;
      state.steps = state.steps.filter((ingredient, i) => {
        return i != index;
      });
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

export const { editStep, deleteStep, addStep } = stepThreeSlice.actions;

export default stepThreeSlice.reducer;
