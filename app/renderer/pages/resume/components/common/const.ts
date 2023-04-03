const baseInfoFields = [
  {
    key: 'username',
    label: '姓名',
    type: 'input',
    require: true,
  },
  {
    key: 'area',
    label: '地址',
    type: 'input',
    require: true,
  },
  {
    key: 'school',
    label: '院校',
    type: 'input',
    require: true,
  },
  {
    key: 'major',
    label: '专业',
    type: 'input',
    require: true,
  },
  {
    key: 'degree',
    label: '学历',
    type: 'input',
    require: true,
  },
  {
    key: 'session',
    label: '学年',
    type: 'dateRange',
    require: true,
  },
  {
    key: 'nativePlace',
    label: '籍贯',
    type: 'input',
    require: false,
  },
];

export { baseInfoFields };
