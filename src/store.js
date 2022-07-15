import { combineReducers, configureStore } from '@reduxjs/toolkit';
import stepOneReducer from './slices/StepOneSlice';
import stepTwoReducer from './slices/StepTwoSlice';
import stepThreeReducer from './slices/StepThreeSlice';
import stepFourReducer from './slices/StepFourSlice';
import stepFiveReducer from './slices/StepFiveSlice';
import tagsReducer from './slices/TagsSlice';
import recipesReducer from './slices/RecipesSlice';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import AsyncStorage from '@react-native-async-storage/async-storage';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['recipes', 'tags'],
};

const rootReducer = combineReducers({
  stepOne: stepOneReducer,
  stepTwo: stepTwoReducer,
  stepThree: stepThreeReducer,
  stepFour: stepFourReducer,
  stepFive: stepFiveReducer,
  tags: tagsReducer,
  recipes: recipesReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
