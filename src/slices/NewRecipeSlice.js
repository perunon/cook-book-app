import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  description: '',
  prepTime: '',
  cookTime: '',
  source: '',
  recipeFor: '',
  ingredients: [],
  steps: [],
  tags: [],
  pictures: ['', '', '', ''],
};

export const newRecipeSlice = createSlice({
  name: 'newRecipe',
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
    addStep: (state, action) => {
      state.steps.push({
        imgUri: action.payload.imgUri,
        content: action.payload.content,
        notes: action.payload.notes,
      });
    },
    editStep: (state, action) => {
      const { data, index } = action.payload;
      state.steps = state.steps.map((step, i) => {
        if (i !== index) return step;
        return data;
      });
    },
    deleteStep: (state, action) => {
      const index = action.payload;
      state.steps = state.steps.filter((ingredient, i) => {
        return i != index;
      });
    },
    toggleSelectedTag: (state, action) => {
      state.tags.includes(action.payload)
        ? (state.tags = state.tags.filter((tag) => {
            return tag != action.payload;
          }))
        : state.tags.push(action.payload);
    },
    setPicture: (state, action) => {
      const { id, uri } = action.payload;
      state.pictures = state.pictures.map((picture, i) =>
        i === id ? uri : picture
      );
    },
    resetRecipe: () => initialState,
  },
});

export const {
  setName,
  setDescription,
  setPrepTime,
  setCookTime,
  setSource,
  setRecipeFor,
  addIngredient,
  removeEmptyIngredients,
  updateIngredient,
  removeIngredient,
  editStep,
  deleteStep,
  addStep,
  toggleSelectedTag,
  setPicture,
  resetRecipe,
} = newRecipeSlice.actions;

export default newRecipeSlice.reducer;
