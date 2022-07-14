import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  steps: [
    { imgUri: '', content: 'Step 1', notes: 'Step 1' },
    { imgUri: '', content: 'Step 2', notes: 'Step 2' },
    { imgUri: '', content: 'Step 3', notes: 'Step 3' },
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
  },
});

export const { editStep, deleteStep, addStep } = stepThreeSlice.actions;

export default stepThreeSlice.reducer;
