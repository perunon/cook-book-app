import { combineReducers, configureStore } from '@reduxjs/toolkit';
import newRecipeReducer from './slices/NewRecipeSlice';
import tagsReducer from './slices/TagsSlice';
import recipesReducer from './slices/RecipesSlice';
import sortingReducer from './slices/SortingSlice';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import AsyncStorage from '@react-native-async-storage/async-storage';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['recipes', 'tags', 'sorting'],
};

const rootReducer = combineReducers({
  newRecipe: newRecipeReducer,
  tags: tagsReducer,
  recipes: recipesReducer,
  sorting: sortingReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
