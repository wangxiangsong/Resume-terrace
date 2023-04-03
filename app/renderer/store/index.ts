import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from './module/home';
import ResumeReducer from './module/resume';
import TempleteReducer from './module/templete';

const store = configureStore({
  reducer: {
    home: HomeReducer,
    resume: ResumeReducer,
    templete: TempleteReducer,
  },
});

/**
 * getState, dispatch 是返回store状态的函数
 * typeof 用来获取一个变量或对象的类型
 * ReturnType 是用于提取函数的返回值类型
 */
export type Store = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
