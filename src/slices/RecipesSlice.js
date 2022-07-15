import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [
    {
      cookTime: '',
      description: '',
      ingredients: [
        {
          name: 'Mleko',
          quantity: '400 ml',
        },
      ],
      name: 'Zupa szpinakowa',
      pictures: [
        'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FCookBookApp-bdda1540-b59f-4c30-8218-ede984210fec/ImagePicker/5cb765bf-ac7d-4209-b0cc-6c80d9918462.jpg',
        '',
        '',
        '',
      ],
      prepTime: '',
      recipeFor: '',
      source: '',
      steps: [
        {
          content: 'Step 1',
          imgUri: '',
          notes: 'Step 1',
        },
        {
          content: 'Step 2',
          imgUri: '',
          notes: 'Step 2',
        },
        {
          content: 'Step 3',
          imgUri: '',
          notes: 'Step 3',
        },
      ],
      tags: [],
    },
  ],
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
