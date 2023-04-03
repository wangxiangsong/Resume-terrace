import React from 'react';
import ResumeAction from './resumeAction';
import ResumeContent from './resumeContent';
import ResumeToolbar from './resumeToolbar';
import styles from './index.less';

const Resume = () => {
  return (
    <div className="h-full bg-[#27292c] flex justify-around p-32px">
      <div className="w-[70%] h-full">
        <div className="h-[6%] bg-[#fff] mb-16px rounded-6px">
          <ResumeAction />
        </div>

        <div className="h-[94%] bg-[#fff]">
          <ResumeContent />
        </div>
      </div>

      <div
        className={`${styles.toolbar} w-[23%] h-[70%] bg-[#fff] mt-[calc(6%+16px)] rounded-6px p-16px overflow-y-scroll`}
      >
        <ResumeToolbar />
      </div>
    </div>
  );
};

export default Resume;
