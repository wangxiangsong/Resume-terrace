import React, { useEffect } from 'react';
import Logo from '@src/assest/logo.png';
import { useNavigate } from 'react-router-dom';
import { shell } from 'electron';
import { ROUTER_ENTRY } from '@src/common/router';
import { isExternalLink } from '@src/utils/commonFunc';

const Home = () => {
  const navigate = useNavigate();

  const gotoLink = (url: string) => {
    if (isExternalLink(url)) {
      shell.openExternal(url);
    } else {
      navigate(url);
    }
  };

  return (
    <div className="h-full bg-[#27292c] text-[#fff] pt-[calc(8vh+60px)]">
      <div className="flex justify-center">
        <img src={Logo} alt="logo" className="w-[120px] h-[120px]" />
      </div>
      <div className="text-24px text-center leading-36px">Resume_terrace</div>
      <div className="text-16px text-center leading-24px mt-24px">一个模板简历制作平台，让你制作简历更加轻松 ~</div>
      <div className="w-[300px] my-0 mx-auto mt-24px flex justify-around">
        {ROUTER_ENTRY.map((item) => (
          <div key={item.key} className="cursor-pointer" onClick={() => gotoLink(item.url)}>
            {item.title}
          </div>
        ))}
      </div>
      <div className="w-full fixed bottom-0 text-center my-16px text-14px opacity-65">
        Copyright © {new Date().getFullYear()} All Rights Reserved. Copyright By wangxiangsong
      </div>
    </div>
  );
};

export default Home;
