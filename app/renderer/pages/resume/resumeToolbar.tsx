import React from 'react';
import { RESUME_TOOLBAR_LIST } from '@src/common/resumeToolbar';
import { resumeToolbarItem } from '@src/common/type';
import { ReactComponent as Main } from '@src/assest/resume/main.svg';
import Icon from '@ant-design/icons';

function ResumeToolbar() {
  return (
    <div className="p-16px">
      <div className="text-18px">
        <Icon component={Main} />
        <span>全部模块</span>
      </div>
      <div>
        {RESUME_TOOLBAR_LIST.map((item: resumeToolbarItem) => (
          <div key={item.key}>
            <div>{item.name}</div>
            <div>{item.summary}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ResumeToolbar;
