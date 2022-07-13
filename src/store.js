import { configureStore } from '@reduxjs/toolkit';
import stepOneReducer from './slices/StepOneSlice';
import stepTwoReducer from './slices/StepTwoSlice';
import stepThreeReducer from './slices/StepThreeSlice';
import stepFourReducer from './slices/StepFourSlice';
import tagsReducer from './slices/TagsSlice';

export const store = configureStore({
  reducer: {
    stepOne: stepOneReducer,
    stepTwo: stepTwoReducer,
    stepThree: stepThreeReducer,
    stepFour: stepFourReducer,
    tags: tagsReducer,
  },
});
