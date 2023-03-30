export interface RouterItemProps {
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

export interface resumeToolbarItem {
  key: RESUME_TOOLBAR_MAPS;

  name: string;

  summary: string;
}
