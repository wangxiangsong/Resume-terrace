import React from 'react';
import { BASE_INFO_LIST } from '../common/const';
import { BASE_INFO_LIST_TYPE } from '../common/type';
import { useSelector } from 'react-redux';
import { Store } from '@src/store';
import _ from 'lodash';

const BaseInfo = () => {
  const baseInfo = useSelector((state: Store) => state.templete.baseInfo);

  return (
    <div className="">
      <div className="text-22px text-center py-16px">基本信息 BaseInfo</div>
      <div className="px-20px">
        {BASE_INFO_LIST.map((item: BASE_INFO_LIST_TYPE) => (
          <div key={item.key} className="py-8px flex">
            <div className="mr-16px">{item.title}:</div>
            <div>{baseInfo[item.key]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaseInfo;
