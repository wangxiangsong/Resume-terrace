/**
 * 个人信息
 */
export interface PRESONAL_TYPE {
  username: string;
  nativePlace: string;
  hobby?: string;
}

/**
 * 教育信息
 */
export interface EDUCATION_TYPE {
  school: string;
  major: string;
  degree: string;
  schoolYear: {
    schoolYearBegin: string;
    schoolYearEnd: string;
  };
}

/**
 * 联系方式
 */
export interface CONTACT_TYPE {
  phone: string;
  postbox: string;
  github?: string;
  juejin?: string;
}

/**
 * 工作期望
 */
export interface WORKPREFER_TYPE {
  position: string;
  city: string;
  cityList: string[];
}

/**
 * 获奖证书
 */
export interface CERTIFICATE_TYPE {
  certificate: string;
  certificatelist: string[];
}

/**
 * 个人评价
 */
export interface EVALUATION_TYPE {
  appraise: string;
}

/**
 * 技能清单
 */
export interface SKILL_TYPE {
  skill: string;
  skillList: string[];
}

/**
 * 多条数据列表 在校经历 | 项目经验 | 工作
 */
export interface CAREER_TYPE {
  id: number;
  title: string;
  entryTime: string;
  position: string;
  time: { timeBegin: string | null; timeEnd: string | null };
  content: string;
}
