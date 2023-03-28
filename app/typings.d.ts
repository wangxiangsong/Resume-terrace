declare module '*.less' {
  const res: { [key: string]: string };
  export default res;
}

declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}
declare module '*.png' {
  const png: string;
  export default png;
}

declare module 'rc-redux-model';
