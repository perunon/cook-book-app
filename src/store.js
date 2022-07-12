import { configureStore } from '@reduxjs/toolkit';
import stepOneReducer from './slices/StepOneSlice';
import stepTwoReducer from './slices/StepTwoSlice';

export const store = configureStore({
  reducer: {
    stepOne: stepOneReducer,
    stepTwo: stepTwoReducer,
  },
});
