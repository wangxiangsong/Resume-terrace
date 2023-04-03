import { createSlice } from '@reduxjs/toolkit';
import { BASE_INFO_TYPE } from '../type/templete';

export interface TempleteStore {
  baseInfo: Partial<BASE_INFO_TYPE>;
}

const initialState: TempleteStore = {
  baseInfo: {},
};

export const Templete = createSlice({
  name: 'templete',
  initialState,
  reducers: {
    setBaseInfoData: (state, action) => {
      state.baseInfo = action.payload;
    },
  },
});

export const { setBaseInfoData } = Templete.actions;

export default Templete.reducer;
