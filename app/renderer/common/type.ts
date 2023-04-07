/**
 * 路由信息
 */
export interface ROTER_ITEM_PROPS {
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

/**
 * @description 右侧模块信息列表
 * @personal 个人信息
 * @contact 联系方式
 * @education 教育信息
 * @workPrefer 工作期望
 * @schoolExperience 在校经历
 * @projectExperience 项目经验
 * @workExperience 工作经历
 * @certificate 获奖证书
 * @evaluation 个人评价
 * @skill 技能清单
 */
export enum RESUME_TOOLBAR_MAPS {
  personal = 'personal',

  contact = 'contact',

  education = 'education',

  workPrefer = 'workPrefer',

  schoolExperience = 'schoolExperience',

  projectExperience = 'projectExperience',

  workExperience = 'workExperience',

  certificate = 'certificate',

  evaluation = 'evaluation',

  skill = 'skill',
}

/**
 * @description toolbar 列表信息
 */
export interface RESUME_TOOLBAR_ITEM {
  key: RESUME_TOOLBAR_MAPS;

  name: string;

  summary: string;

  require: boolean;
}

/**
 * @description 每个item对应的icon名称
 */
export interface ICON_LIST_TYPE {
  key: RESUME_TOOLBAR_MAPS;

  type: string;
}

/**
 * @description 已添加模块 & 未添加模块枚举值
 */
export enum TOOLBAR_MODULE_TYPE {
  ADDED = '已添加模块',
  NOADDED = '未添加模块',
}
