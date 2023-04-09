/**
 * @description 弹窗表单字段及类型
 */
interface BASE_INFO_FIELDS {
  key: string;
  label?: string;
  type: string;
  require?: boolean;
  span?: number;
  remarks?: string;
  title?: string;
}

/**
 * @description 技能清单中 tag 列表类型
 */
interface RECOMMEND_SKILL_TYPE {
  uid: number;
  label: string;
  styles: {
    bg: string;
    font: string;
  };
}

export { BASE_INFO_FIELDS, RECOMMEND_SKILL_TYPE };
