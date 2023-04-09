import { RESUME_TOOLBAR_ITEM, RESUME_TOOLBAR_MAPS, ICON_LIST_TYPE } from './type';

/**
 * @description toolbar 列表信息
 */
const RESUME_TOOLBAR_LIST: RESUME_TOOLBAR_ITEM[] = [
  {
    key: RESUME_TOOLBAR_MAPS.personal,
    name: '个人信息',
    summary: '更好的介绍自己，机会会更多',
    require: true,
  },
  {
    key: RESUME_TOOLBAR_MAPS.education,
    name: '教育信息',
    summary: '介绍你的学校和专业信息',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.contact,
    name: '联系方式',
    summary: '少侠，请留下你的联系方式',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.workPrefer,
    name: '工作期望',
    summary: '聊聊你所期望的宜人办公城市',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.schoolExperience,
    name: '在校经历',
    summary: '展示在校任职成果和人际关系',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.projectExperience,
    name: '项目经验',
    summary: '展示研究过什么优秀项目和成果',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.workExperience,
    name: '工作经历',
    summary: '申请岗位的相关经验和能力',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.certificate,
    name: '获奖证书',
    summary: '得过什么奖项值得炫耀',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.evaluation,
    name: '个人评价',
    summary: '低调夸一夸自己有什么亮点',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.skill,
    name: '技能清单',
    summary: '展示具备的技能，突出你的能力',
    require: false,
  },
];

/**
 * @description 每个item对应的icon名称
 */
const ICON_LIST: ICON_LIST_TYPE[] = [
  {
    key: RESUME_TOOLBAR_MAPS.personal,
    type: 'icon-resume-wodegerenxinxi',
  },
  {
    key: RESUME_TOOLBAR_MAPS.contact,
    type: 'icon-resume-lianxifangshidianhua',
  },
  {
    key: RESUME_TOOLBAR_MAPS.education,
    type: 'icon-resume-jiaoyuxinxi',
  },
  {
    key: RESUME_TOOLBAR_MAPS.workPrefer,
    type: 'icon-resume-gongzuotai',
  },
  {
    key: RESUME_TOOLBAR_MAPS.schoolExperience,
    type: 'icon-resume-zaixiaoxueyuan',
  },
  {
    key: RESUME_TOOLBAR_MAPS.projectExperience,
    type: 'icon-resume-xiangmujingyan',
  },
  {
    key: RESUME_TOOLBAR_MAPS.workExperience,
    type: 'icon-resume-gongzuojingli',
  },
  {
    key: RESUME_TOOLBAR_MAPS.certificate,
    type: 'icon-resume-huojiang',
  },
  {
    key: RESUME_TOOLBAR_MAPS.evaluation,
    type: 'icon-resume-pingjia',
  },
  {
    key: RESUME_TOOLBAR_MAPS.skill,
    type: 'icon-resume-24gl-clipboardList',
  },
];

export { RESUME_TOOLBAR_LIST, ICON_LIST };
