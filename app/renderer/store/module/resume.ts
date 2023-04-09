import { createSlice } from '@reduxjs/toolkit';
import { RESUME_TOOLBAR_ITEM } from '@src/common/type';
import {
  CERTIFICATE_TYPE,
  CONTACT_TYPE,
  EDUCATION_TYPE,
  EVALUATION_TYPE,
  PRESONAL_TYPE,
  SKILL_TYPE,
  WORKPREFER_TYPE,
  CAREER_TYPE,
} from '../type/resume';

export interface ResumeStore {
  alreadyModuleList: RESUME_TOOLBAR_ITEM[];
  personal: PRESONAL_TYPE;
  education: EDUCATION_TYPE;
  contact: CONTACT_TYPE;
  workPrefer: WORKPREFER_TYPE;
  schoolExperience: CAREER_TYPE[];
  projectExperience: CAREER_TYPE[];
  workExperience: CAREER_TYPE[];
  certificate: CERTIFICATE_TYPE;
  evaluation: EVALUATION_TYPE;
  skill: SKILL_TYPE;
}

type entryData = ResumeStore[keyof ResumeStore];

export type entryDataKey = keyof ResumeStore;

/**
 * @alreadyModuleList 已添加的模块
 */
const initialState: ResumeStore = {
  alreadyModuleList: [],
  personal: {
    username: '',
    nativePlace: '',
    hobby: '',
  },
  education: {
    school: '',
    major: '',
    degree: '',
    schoolYear: {
      schoolYearBegin: '',
      schoolYearEnd: '',
    },
  },
  contact: {
    phone: '',
    postbox: '',
    github: '',
    juejin: '',
  },
  workPrefer: {
    position: '',
    city: '',
    cityList: [],
  },
  schoolExperience: [],
  projectExperience: [],
  workExperience: [],
  certificate: {
    certificate: '',
    certificatelist: [],
  },
  evaluation: { appraise: '' },
  skill: { skill: '', skillList: [] },
};

export const Resume = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    addedListToRedux: (state, action) => {
      state.alreadyModuleList = action.payload;
    },
    entryDataToRedux: (state, action: { payload: { type: entryDataKey; data: any }; type: string }) => {
      state[action.payload.type] = action.payload.data;
    },
  },
});

export const { addedListToRedux, entryDataToRedux } = Resume.actions;

export default Resume.reducer;
