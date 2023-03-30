import React from 'react';
import { Button } from 'antd';

function ResumeAction() {
  return (
    <div className="h-full flex items-center justify-between px-16px">
      <Button type="text">返回</Button>
      <Button type="primary">导出PDF</Button>
    </div>
  );
}
export default ResumeAction;
