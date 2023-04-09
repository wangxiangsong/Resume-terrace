import { createUID } from '@src/utils/createUID';
import { BASE_INFO_FIELDS, RECOMMEND_SKILL_TYPE } from './type';

const personalFields: BASE_INFO_FIELDS[] = [
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
    require: true,
    span: 12,
  },
  {
    key: 'hobby',
    label: '爱好',
    type: 'textArea',
    span: 24,
  },
];

const educationFields: BASE_INFO_FIELDS[] = [
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
    key: 'schoolYear',
    label: '学年',
    type: 'dateRange',
    require: true,
    span: 12,
  },
];

const contactFields: BASE_INFO_FIELDS[] = [
  {
    key: 'phone',
    label: '电话',
    type: 'input',
    require: true,
    span: 12,
  },
  {
    key: 'postbox',
    label: '邮箱',
    type: 'input',
    require: true,
    span: 12,
  },
  {
    key: 'github',
    label: 'github',
    type: 'longInput',
    span: 24,
  },
  {
    key: 'juejin',
    label: 'juejin',
    type: 'longInput',
    span: 24,
  },
];

const workPreferFields: BASE_INFO_FIELDS[] = [
  {
    key: 'position',
    label: '职位',
    type: 'longInput',
    require: true,
    span: 24,
  },
  {
    key: 'city',
    label: '城市',
    type: 'longInput',
    require: true,
    span: 24,
    remarks: '* 多个地点以 | 分割',
  },
];

const certificateFields: BASE_INFO_FIELDS[] = [
  {
    key: 'certificate',
    label: '证书',
    type: 'textArea',
    require: true,
    span: 24,
    remarks: '* 多个证书以 | 分割',
  },
];

const evaluationFields: BASE_INFO_FIELDS[] = [
  {
    key: 'appraise',
    label: '评价',
    type: 'textArea',
    require: true,
    span: 24,
  },
];

const skillFields: BASE_INFO_FIELDS[] = [
  {
    key: 'skill',
    label: '技能清单',
    type: 'tagsAndTextArea',
    require: true,
    span: 24,
    remarks: '* 多个技能以 | 分割换行',
  },
];

const schoolExperienceFields: BASE_INFO_FIELDS[] = [
  {
    key: 'associationActivityList',
    type: 'multipleList',
    title: '部门',
  },
];

const projectExperienceFields: BASE_INFO_FIELDS[] = [
  {
    key: 'projectExperienceList',
    type: 'multipleList',
    title: '项目名',
  },
];

const workExperienceFields: BASE_INFO_FIELDS[] = [
  {
    key: 'workExperienceList',
    type: 'multipleList',
    title: '公司',
  },
];

/**
 * @description 每个模块对应弹窗中的 表单内容
 * @personal {personalFields} 个人信息
 * @contact {contactFields} 联系方式
 * @education {educationFields} 教育信息
 * @workPrefer {workPreferFields} 工作期望
 * @schoolExperience {schoolExperienceFields} 在校经历
 * @projectExperience {projectExperienceFields} 项目经历
 * @workExperience {workExperienceFields} 工作经历
 * @certificate {certificateFields} 获奖证书
 * @evaluation {evaluationFields} 个人评价
 * @skill {skillFields} 技能清单
 */
const moduleHomologousModalFormFields = {
  personal: personalFields,
  contact: contactFields,
  education: educationFields,
  workPrefer: workPreferFields,
  schoolExperience: schoolExperienceFields,
  projectExperience: projectExperienceFields,
  workExperience: workExperienceFields,
  certificate: certificateFields,
  evaluation: evaluationFields,
  skill: skillFields,
};

const colors = [
  {
    // 绿色
    bg: '#f0f8ec',
    font: '#78c74f',
  },
  {
    // 灰色
    bg: '#f4f4f4',
    font: '#a3a7ab',
  },
  {
    // 橙色
    bg: '#fdf6ec',
    font: '#f0c588',
  },
  {
    // 蓝色
    bg: '#ecf5ff',
    font: '#67afff',
  },
  {
    // 红色
    bg: '#fef0ef',
    font: '#f88c8b',
  },
];

/**
 * @description 技能tag
 */
const RecommendSkill: RECOMMEND_SKILL_TYPE[] = [
  {
    uid: createUID(),
    label: 'Vue.js',
    styles: colors[0],
  },
  {
    uid: createUID(),
    label: '数据双向绑定原理',
    styles: colors[2],
  },
  {
    uid: createUID(),
    label: 'React.js',
    styles: colors[4],
  },
  {
    uid: createUID(),
    label: 'VScode',
    styles: colors[2],
  },
  {
    uid: createUID(),
    label: 'Angular.js',
    styles: colors[4],
  },
  {
    uid: createUID(),
    label: 'Webpack',
    styles: colors[3],
  },
  {
    uid: createUID(),
    label: 'React Hooks',
    styles: colors[2],
  },
  {
    uid: createUID(),
    label: '开源',
    styles: colors[0],
  },
  {
    uid: createUID(),
    label: '了解 MYSQL',
    styles: colors[4],
  },
  {
    uid: createUID(),
    label: '微信小程序',
    styles: colors[0],
  },
  {
    uid: createUID(),
    label: 'Taro',
    styles: colors[4],
  },
  {
    uid: createUID(),
    label: '微信公众号开发',
    styles: colors[3],
  },
  {
    uid: createUID(),
    label: 'Babel',
    styles: colors[1],
  },
  {
    uid: createUID(),
    label: 'TypeScript',
    styles: colors[4],
  },
  {
    uid: createUID(),
    label: 'Electron',
    styles: colors[2],
  },
  {
    uid: createUID(),
    label: 'Server',
    styles: colors[2],
  },
  {
    uid: createUID(),
    label: 'ESLint',
    styles: colors[3],
  },
  {
    uid: createUID(),
    label: '跨域解决',
    styles: colors[0],
  },
  {
    uid: createUID(),
    label: '自动化测试',
    styles: colors[4],
  },
  {
    uid: createUID(),
    label: 'Linux',
    styles: colors[2],
  },
  {
    uid: createUID(),
    label: 'Git',
    styles: colors[0],
  },
  {
    uid: createUID(),
    label: '设计模式',
    styles: colors[1],
  },
  {
    uid: createUID(),
    label: 'Redis',
    styles: colors[4],
  },
  {
    uid: createUID(),
    label: '数据库优化',
    styles: colors[3],
  },
  {
    uid: createUID(),
    label: '正则表达式',
    styles: colors[1],
  },
  {
    uid: createUID(),
    label: '具备良好的网络基础知识',
    styles: colors[0],
  },
  {
    uid: createUID(),
    label: '数据存储',
    styles: colors[4],
  },
  {
    uid: createUID(),
    label: 'Echarts',
    styles: colors[3],
  },
];

export { moduleHomologousModalFormFields, RecommendSkill };
