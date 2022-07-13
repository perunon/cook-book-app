import { configureStore } from '@reduxjs/toolkit';
import stepOneReducer from './slices/StepOneSlice';
import stepTwoReducer from './slices/StepTwoSlice';
import stepThreeReducer from './slices/StepThreeSlice';

export const store = configureStore({
  reducer: {
    stepOne: stepOneReducer,
    stepTwo: stepTwoReducer,
    stepThree: stepThreeReducer,
  },
});
