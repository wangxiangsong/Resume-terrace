import React from 'react';
import { useSelector } from 'react-redux';
import { Store } from '@src/store';
import { TempleteOne } from '@src/templete';

function ResumeContent() {
  const list = useSelector((state: Store) => state.resume.alreadyModuleList);

  return (
    <div className="h-full">
      <TempleteOne />
    </div>
  );
}
export default ResumeContent;
