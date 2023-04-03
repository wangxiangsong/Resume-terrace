import React from 'react';
import BaseInfo from './components/baseInfo';
import HeadSculpture from './components/headSculpture';

const TempleteOne = () => {
  return (
    <div className="w-full h-full flex">
      <div className="w-[18%] h-full flex flex-col">
        <HeadSculpture />
        <div className="flex-1 bg-[#1e3a8a] text-[#fff] pt-16px">
          <BaseInfo />
        </div>
      </div>
    </div>
  );
};

export default TempleteOne;
