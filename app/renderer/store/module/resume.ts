import { createSlice } from '@reduxjs/toolkit';
import { RESUME_TOOLBAR_ITEM } from '@src/common/type';

export interface ResumeStore {
  alreadyModuleList: RESUME_TOOLBAR_ITEM[];
}

const initialState: ResumeStore = {
  alreadyModuleList: [],
};

export const Resume = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    addedListToRedux: (state, action) => {
      state.alreadyModuleList = action.payload;
    },
  },
});

export const { addedListToRedux } = Resume.actions;

export default Resume.reducer;
