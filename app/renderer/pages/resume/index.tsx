import React from 'react';
import ResumeAction from './resumeAction';
import ResumeContent from './resumeContent';
import ResumeToolbar from './resumeToolbar';

const Resume = () => {
  return (
    <div className="h-full bg-[#27292c] flex justify-around p-32px">
      <div className="w-[70%] h-full">
        <div className="h-[6%] bg-[#e5e7eb] mb-16px rounded-6px">
          <ResumeAction />
        </div>

        <div className="h-[94%] bg-[#e5e7eb]">
          <ResumeContent />
        </div>
      </div>

      <div className="w-[20%] h-[70%] bg-[#e5e7eb] mt-[calc(6%+16px)] rounded-6px">
        <ResumeToolbar />
      </div>
    </div>
  );
};

export default Resume;
