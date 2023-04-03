import { ROTER_ITEM_PROPS } from './type';

const ROUTER = {
  home: '/',
  resume: '/resume',
};

const ROUTER_KEY = {
  home: 'home',
  resume: 'resume',
};

const ROUTER_ENTRY: ROTER_ITEM_PROPS[] = [
  {
    url: 'https://juejin.cn/user/1011967230745918/posts',
    key: 'info',
    title: '介绍',
  },
  {
    url: ROUTER.resume,
    key: ROUTER_KEY.resume,
    title: '简历',
  },
  {
    url: 'https://github.com/wangxiangsong/Resume-terrace/tree/electron_react_Resume',
    key: 'code',
    title: '源码',
  },
];

export { ROUTER, ROUTER_KEY, ROUTER_ENTRY };
