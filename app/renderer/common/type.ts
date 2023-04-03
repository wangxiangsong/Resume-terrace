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
 */
export enum RESUME_TOOLBAR_MAPS {
  /**
   * @description 个人信息
   */
  personal = 'personal',

  /**
   * @description 联系方式
   */
  contact = 'contact',

  /**
   * @description 教育信息
   */
  education = 'education',

  /**
   * @description 工作期望
   */
  workPrefer = 'workPrefer',

  /**
   * @description 在校经历
   */
  schoolExperience = 'schoolExperience',

  /**
   * @description 项目经验
   */
  projectExperience = 'projectExperience',

  /**
   * @description 工作经历
   */
  workExperience = 'workExperience',

  /**
   * @description 获奖证书
   */
  certificate = 'certificate',

  /**
   * @description 个人评价
   */
  evaluation = 'evaluation',

  /**
   * @description 技能清单
   */
  skill = 'skill',

  /**
   * @description 测试用例
   */
  test = 'test',
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
