interface RouterItemProps {
  /**
   * @description 当前路由的名称
   */
  url: string;

  /**
   * @desciption 关键key值
   */
  key: string;

  /**
   * @desciption 展示的文本
   */
  title: string;
}

const ROUTER = {
  home: '/',
  resume: '/resume',
};

const ROUTER_KEY = {
  home: 'home',
  resume: 'resume',
};

const ROUTER_ENTRY: RouterItemProps[] = [
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
