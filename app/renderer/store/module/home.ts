import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface HomeStore {
  appName: string;
}

const initialState: HomeStore = {
  appName: 'home',
};

/**
 *  @createAsyncThunk 第一个泛型 是返回值的 类型 第二个是 函数入参 类型
 *  第一个参数是 slice 里面 name/reducers, 第二个参数是调用接口异步函数，需要返回值
 */
export const res = createAsyncThunk<string>('home/extraReducers', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('888');
    }, 1000);
  });
});

export const Home = createSlice({
  name: 'home',
  initialState,
  /**
   * 同步修改 state 的状态值
   */
  reducers: {
    modifyName: (state, action: { payload: string; type: string }) => {},
  },
  /**
   * @extraReducers 异步reducers，固定写法
   * @addCase 第一个参数应该是 promise的状态, 第二个是回调，修改state的状态值
   */
  extraReducers: (builder) => {
    builder.addCase(res.fulfilled, (state, action) => {
      state.appName = action.payload;
    });
  },
});

/**
 * 自动生成 action
 */
export const { modifyName } = Home.actions;

/**
 * 默认导出 在store中引入初始化使用
 */
export default Home.reducer;

/**
 * 组件里面 调用示例
 * import { useDispatch, useSelector } from 'react-redux';
 *
 * const dispatch = useDispatch<DispatchType>();
 *
 * 同步调用
 * dispatch(modifyName());
 *
 * 异步调用
 * dispatch(res());
 *
 * 获取store状态 Store类型在 store入口文件中
 * const appName = useSelector((state: Store) => state.home.appName);
 */
