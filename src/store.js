import { configureStore } from '@reduxjs/toolkit';
import stepOneReducer from './slices/StepOneSlice';
import stepTwoReducer from './slices/StepTwoSlice';
import stepThreeReducer from './slices/StepThreeSlice';
import stepFourReducer from './slices/StepFourSlice';
import stepFiveReducer from './slices/StepFiveSlice';
import tagsReducer from './slices/TagsSlice';
import recipesReducer from './slices/RecipesSlice';

export const store = configureStore({
  reducer: {
    stepOne: stepOneReducer,
    stepTwo: stepTwoReducer,
    stepThree: stepThreeReducer,
    stepFour: stepFourReducer,
    stepFive: stepFiveReducer,
    tags: tagsReducer,
    recipes: recipesReducer,
  },
});
