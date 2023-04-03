import { BASE_INFO_TYPE } from '@src/store/type/templete';

export interface BASE_INFO_LIST_TYPE {
  key: keyof BASE_INFO_TYPE;
  title: string;
  value: string;
}
