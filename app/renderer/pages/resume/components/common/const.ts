import { BASE_INFO_FIELDS } from './type';

/**
 * @desc 基本信息字段
 */
const baseInfoFields: BASE_INFO_FIELDS[] = [
  {
    key: 'username',
    label: '姓名',
    type: 'input',
    require: true,
    span: 12,
  },
  {
    key: 'nativePlace',
    label: '籍贯',
    type: 'input',
    require: false,
    span: 12,
  },
  {
    key: 'hobby',
    label: '爱好',
    type: 'input',
    require: true,
    span: 12,
  },
];

/**
 * @desc 教育信息
 */
const educationInfo: BASE_INFO_FIELDS[] = [
  {
    key: 'school',
    label: '学校',
    type: 'input',
    require: true,
    span: 12,
  },
  {
    key: 'major',
    label: '专业',
    type: 'input',
    require: true,
    span: 12,
  },
  {
    key: 'degree',
    label: '学位',
    type: 'input',
    require: true,
    span: 12,
  },
  {
    key: 'session',
    label: '学年',
    type: 'dateRange',
    require: true,
    span: 12,
  },
];

/**
 * @desc 联系方式
 */
const concatInfoFields: BASE_INFO_FIELDS[] = [
  {
    key: 'phone',
    label: '电话',
    type: 'input',
    require: true,
    span: 12,
  },
  {
    key: 'email',
    label: '邮箱',
    type: 'input',
    require: true,
    span: 12,
  },
  {
    key: 'github',
    label: 'github',
    type: 'input',
    require: false,
    span: 12,
  },
];

/**
 * @desc 工作期望
 */
const workInfo: BASE_INFO_FIELDS[] = [
  {
    key: 'job',
    label: '职位',
    type: 'input',
    require: true,
    span: 12,
  },
  {
    key: 'city',
    label: '城市',
    type: 'input',
    require: true,
    span: 12,
  },
];

/**
 * @desc 获奖证书
 */
const certificateInfo: BASE_INFO_FIELDS[] = [
  {
    key: 'certificate',
    label: '证书',
    type: 'input',
    require: true,
    span: 12,
  },
];

/**
 * @desc
 */

export { baseInfoFields, educationInfo, concatInfoFields, workInfo, certificateInfo };
