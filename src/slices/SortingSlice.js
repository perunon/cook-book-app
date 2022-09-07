import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  byName: {
    name: 'By Name',
    isActive: true,
    isAsc: true,
  },
  byCreationDate: {
    name: 'By Creation Date',
    isActive: false,
    isAsc: true,
  },
};

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    toggleSortingOption: (state, action) => {
      const key = action.payload;
      state[key].isActive
        ? (state[key].isAsc = !state[key].isAsc)
        : Object.keys(state).forEach((item) => {
            item === key
              ? (state[item].isActive = true)
              : (state[item].isActive = false);
          });
    },
  },
});

export const { toggleSortingOption } = sortingSlice.actions;

export default sortingSlice.reducer;
